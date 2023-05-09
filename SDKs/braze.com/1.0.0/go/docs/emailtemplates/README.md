# EmailTemplates

### Available Operations

* [ListAvailableEmailTemplates](#listavailableemailtemplates) - List Available Email Templates
* [SeeEmailTemplateInformation](#seeemailtemplateinformation) - See Email Template Information

## ListAvailableEmailTemplates

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EmailTemplates.ListAvailableEmailTemplates(ctx, operations.ListAvailableEmailTemplatesRequest{
        Limit: sdk.String("1"),
        ModifiedAfter: sdk.String("2020-01-01T01:01:01.000000"),
        ModifiedBefore: sdk.String("2020-02-01T01:01:01.000000"),
        Offset: sdk.String("0"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SeeEmailTemplateInformation

Use to get information on your email templates.

Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.

### Request Components
- [Template Identifier](https://www.braze.com/docs/api/identifier_types/)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EmailTemplates.SeeEmailTemplateInformation(ctx, operations.SeeEmailTemplateInformationRequest{
        EmailTemplateID: sdk.String("{{email_template_id}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
