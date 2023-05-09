# templates

### Available Operations

* [listAvailableContentBlocks](#listavailablecontentblocks) - List Available Content Blocks
* [listAvailableEmailTemplates](#listavailableemailtemplates) - List Available Email Templates
* [seeContentBlockInformation](#seecontentblockinformation) - See Content Block Information
* [seeEmailTemplateInformation](#seeemailtemplateinformation) - See Email Template Information

## listAvailableContentBlocks

This endpoint will list existing Content Block information.

### Successful Response Properties
```json
Content-Type: application/json
Authorization: Bearer YOUR_REST_API_KEY
{
  "count": "integer",
  "content_blocks": [
    {
      "content_block_id": "string",
      "name": "string",
      "content_type": "html or text",
      "liquid_tag": "string",
      "inclusion_count" : "integer",
      "created_at": "time-in-iso",
      "last_edited": "time-in-iso",
      "tags" : "array of strings"
    }
  ]
}
```

### Possible Errors
- `Modified after time is invalid.`
The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).

- `Modified before time is invalid.`
The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).

- `Modified after time must be earlier than or the same as modified before time.`

- `Content Block number limit is invalid.`
The `limit` parameter must be an integer (positive number) greater than 0.

- `Content Block number limit must be greater than 0.`
The `limit` parameter must be an integer (positive number) greater than 0.

- `Content Block number limit exceeds maximum of 1000.`
The `limit` parameter must be an integer (positive number) greater than 0.

- `Offset is invalid.`
The `offset` parameter must be an integer (positive number) greater than 0.

- `Offset must be greater than 0.`
The `offset` parameter must be an integer (positive number) greater than 0.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAvailableContentBlocksRequest;
import org.openapis.openapi.models.operations.ListAvailableContentBlocksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAvailableContentBlocksRequest req = new ListAvailableContentBlocksRequest() {{
                limit = "100";
                modifiedAfter = "2020-01-01T01:01:01.000000";
                modifiedBefore = "2020-02-01T01:01:01.000000";
                offset = "1";
            }};            

            ListAvailableContentBlocksResponse res = sdk.templates.listAvailableContentBlocks(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAvailableEmailTemplates

Use this endpoint to get a list of available templates in your Braze account.

Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.

### Successful Response Properties
```json
{
  "count": number of templates returned
  "templates": [template with the following properties]:
    "email_template_id": (string) your email template's API Identifier,
    "template_name": (string) the name of your email template,
    "created_at": (string, in ISO 8601),
    "updated_at": (string, in ISO 8601),
    "tags": (array of strings) tags appended to the template
}
  ```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAvailableEmailTemplatesRequest;
import org.openapis.openapi.models.operations.ListAvailableEmailTemplatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAvailableEmailTemplatesRequest req = new ListAvailableEmailTemplatesRequest() {{
                limit = "1";
                modifiedAfter = "2020-01-01T01:01:01.000000";
                modifiedBefore = "2020-02-01T01:01:01.000000";
                offset = "0";
            }};            

            ListAvailableEmailTemplatesResponse res = sdk.templates.listAvailableEmailTemplates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## seeContentBlockInformation

This endpoint will call information for an existing Content Block.

### Successful Response Properties
```json
Content-Type: application/json
Authorization: Bearer YOUR_REST_API_KEY
{
  "content_block_id": "string",
  "name": "string",
  "content": "string",
  "description": "string",
  "content_type": "html or text",
  "tags":  "array of strings",
  "created_at": "time-in-iso",
  "last_edited": "time-in-iso",
  "inclusion_count" : "integer",
  "message": "success"
}
```

### Possible Errors
- `Content Block ID cannot be blank.` - A Content Block has not been listed or is not encapsulated in quotes.

- `Content Block ID is invalid for this App Group.` - This Content Block does not exist or is in a different company account or app group.

- `Content Block has been deleted - content not available.` - This Content Block, though it may have existed earlier, has been deleted.

- `Include Inclusion Data - error` - One of true or false is not provided.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SeeContentBlockInformationRequest;
import org.openapis.openapi.models.operations.SeeContentBlockInformationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SeeContentBlockInformationRequest req = new SeeContentBlockInformationRequest() {{
                contentBlockId = "{{content_block_id}}";
                includeInclusionData = "No";
            }};            

            SeeContentBlockInformationResponse res = sdk.templates.seeContentBlockInformation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## seeEmailTemplateInformation

Use to get information on your email templates.

Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.

### Request Components
- [Template Identifier](https://www.braze.com/docs/api/identifier_types/)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SeeEmailTemplateInformationRequest;
import org.openapis.openapi.models.operations.SeeEmailTemplateInformationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SeeEmailTemplateInformationRequest req = new SeeEmailTemplateInformationRequest() {{
                emailTemplateId = "{{email_template_id}}";
            }};            

            SeeEmailTemplateInformationResponse res = sdk.templates.seeEmailTemplateInformation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
