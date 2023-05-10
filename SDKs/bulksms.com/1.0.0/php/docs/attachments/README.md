# attachments

### Available Operations

* [postRmmPreSignAttachment](#postrmmpresignattachment) - Upload an attachment via a signed URL

## postRmmPreSignAttachment

When composing an SMS, you can add SMS attachments by adding a URL to your text. When the recipient clicks on the URL, the attached file will be downloaded and opened on their mobile device.  

The best way to do this is to store the file on a web server you own and use that URL in the SMS text. This URL will be easily recognisable to your message recipient and ties your message back to your brand or company. 

If that’s not possible, you can use BulkSMS storage to keep the files that you want to attach to your SMS. These files will be deleted after 30 days as per our fair use policy.  

We recommend you keep this file size below 20 MB, as larger files may be deleted without warning. 

To use the BulkSMS storage, follow these three steps:

**Step 1**: Use your BulkSMS credentials (or your API Token) to request a pre-signed URL.  This is what this `pre-sign-attachment` method is for.  It returns a PreSignInfo object that you will use in the other two steps.

**Step 2**: Upload the file using a standard HTTP `PUT` request. For your `PUT` request, use the value of `putURL` from the PreSignInfo object as the request address.  You also have to add the entries from the `fields` property (of the PreSignInfo object) to the headers of your 'PUT' request. You send the file content as the body of the `PUT` request.

**Step 3**: Now you can use the value of `fetchURL` from the PreSignInfo object in the body of your SMS messages and send those using the usual messaging API (described elsewhere in this document).  If you send the same file to many recipients, it is safe to use the same URL for all of them.

If you need to, take a closer look at the example program (on the right-hand side) to get a better idea of how to implement this process.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PreSignRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRmmPreSignAttachmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreSignRequest();
    $request->fileExtension = 'pdf';
    $request->mediaType = 'application/pdf';

    $requestSecurity = new PostRmmPreSignAttachmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->attachments->postRmmPreSignAttachment($request, $requestSecurity);

    if ($response->preSignInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
