# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associateMemberAccount` - (Discontinued) Associates a specified Amazon Web Services account with Amazon Macie Classic as a member account.
* `associateS3Resources` - (Discontinued) Associates specified S3 resources with Amazon Macie Classic for monitoring and data classification. If <code>memberAccountId</code> isn't specified, the action associates specified S3 resources with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action associates specified S3 resources with Macie Classic for the specified member account.
* `disassociateMemberAccount` - (Discontinued) Removes the specified member account from Amazon Macie Classic.
* `disassociateS3Resources` - (Discontinued) Removes specified S3 resources from being monitored by Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action removes specified S3 resources from Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action removes specified S3 resources from Macie Classic for the specified member account.
* `listMemberAccounts` - (Discontinued) Lists all Amazon Macie Classic member accounts for the current Macie Classic administrator account.
* `listS3Resources` - (Discontinued) Lists all the S3 resources associated with Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action lists the S3 resources associated with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action lists the S3 resources associated with Macie Classic for the specified member account. 
* `updateS3Resources` - (Discontinued) Updates the classification types for the specified S3 resources. If <code>memberAccountId</code> isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action updates the classification types of the S3 resources associated with Macie Classic for the specified member account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
