# emailTemplates

### Available Operations

* [listAvailableEmailTemplates](#listavailableemailtemplates) - List Available Email Templates
* [seeEmailTemplateInformation](#seeemailtemplateinformation) - See Email Template Information

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

            ListAvailableEmailTemplatesResponse res = sdk.emailTemplates.listAvailableEmailTemplates(req);

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

            SeeEmailTemplateInformationResponse res = sdk.emailTemplates.seeEmailTemplateInformation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
