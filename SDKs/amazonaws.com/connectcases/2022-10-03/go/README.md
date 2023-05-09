# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/connectcases/2022-10-03/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BatchGetField(ctx, operations.BatchGetFieldRequest{
        RequestBody: operations.BatchGetFieldRequestBody{
            Fields: []shared.FieldIdentifier{
                shared.FieldIdentifier{
                    ID: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
                },
                shared.FieldIdentifier{
                    ID: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
                },
                shared.FieldIdentifier{
                    ID: "b7392059-2939-46fe-a759-6eb10faaa235",
                },
            },
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        DomainID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetFieldResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [BatchGetField](docs/sdk/README.md#batchgetfield) - Returns the description for the list of fields in the request parameters. 
* [BatchPutFieldOptions](docs/sdk/README.md#batchputfieldoptions) - Creates and updates a set of field options for a single select field in a Cases domain.
* [CreateCase](docs/sdk/README.md#createcase) - <p>Creates a case in the specified Cases domain. Case system and custom fields are taken as an array id/value pairs with a declared data types.</p> <note> <p>The following fields are required when creating a case:</p> <pre><code> &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;customer_id&lt;/code&gt; - You must provide the full customer profile ARN in this format: &lt;code&gt;arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;title&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/note&gt; </code></pre>
* [CreateDomain](docs/sdk/README.md#createdomain) - <p>Creates a domain, which is a container for all case data, such as cases, fields, templates and layouts. Each Amazon Connect instance can be associated with only one Cases domain.</p> <important> <p>This will not associate your connect instance to Cases domain. Instead, use the Amazon Connect <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateIntegrationAssociation.html">CreateIntegrationAssociation</a> API. You need specific IAM permissions to successfully associate the Cases domain. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/required-permissions-iam-cases.html#onboard-cases-iam">Onboard to Cases</a>.</p> </important>
* [CreateField](docs/sdk/README.md#createfield) - Creates a field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain. 
* [CreateLayout](docs/sdk/README.md#createlayout) - <p>Creates a layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface:</p> <ul> <li> <p>Fields to display to the users</p> </li> <li> <p>Field ordering</p> </li> </ul> <note> <p>Title and Status fields cannot be part of layouts since they are not configurable.</p> </note>
* [CreateRelatedItem](docs/sdk/README.md#createrelateditem) - <p>Creates a related item (comments, tasks, and contacts) and associates it with a case.</p> <note> <p>A Related Item is a resource that is associated with a case. It may or may not have an external identifier linking it to an external resource (for example, a <code>contactArn</code>). All Related Items have their own internal identifier, the <code>relatedItemArn</code>. Examples of related items include <code>comments</code> and <code>contacts</code>.</p> </note>
* [CreateTemplate](docs/sdk/README.md#createtemplate) - Creates a template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A template can be either Active or Inactive, as indicated by its status. Inactive templates cannot be used to create cases.
* [DeleteDomain](docs/sdk/README.md#deletedomain) - Deletes a domain.
* [GetCase](docs/sdk/README.md#getcase) - Returns information about a specific case if it exists. 
* [GetCaseEventConfiguration](docs/sdk/README.md#getcaseeventconfiguration) - Returns the case event publishing configuration.
* [GetDomain](docs/sdk/README.md#getdomain) - Returns information about a specific domain if it exists. 
* [GetLayout](docs/sdk/README.md#getlayout) - Returns the details for the requested layout.
* [GetTemplate](docs/sdk/README.md#gettemplate) - Returns the details for the requested template. 
* [ListCasesForContact](docs/sdk/README.md#listcasesforcontact) - Lists cases for a given contact.
* [ListDomains](docs/sdk/README.md#listdomains) - Lists all cases domains in the Amazon Web Services account. Each list item is a condensed summary object of the domain.
* [ListFieldOptions](docs/sdk/README.md#listfieldoptions) - Lists all of the field options for a field identifier in the domain. 
* [ListFields](docs/sdk/README.md#listfields) - Lists all fields in a Cases domain.
* [ListLayouts](docs/sdk/README.md#listlayouts) - Lists all layouts in the given cases domain. Each list item is a condensed summary object of the layout.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists tags for a resource.
* [ListTemplates](docs/sdk/README.md#listtemplates) - Lists all of the templates in a Cases domain. Each list item is a condensed summary object of the template. 
* [PutCaseEventConfiguration](docs/sdk/README.md#putcaseeventconfiguration) - API for adding case event publishing configuration
* [SearchCases](docs/sdk/README.md#searchcases) - <p>Searches for cases within their associated Cases domain. Search results are returned as a paginated list of abridged case documents.</p> <note> <p>For <code>customer_id</code> you must provide the full customer profile ARN in this format: <code> arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID</code>. </p> </note>
* [SearchRelatedItems](docs/sdk/README.md#searchrelateditems) - <p>Searches for related items that are associated with a case.</p> <note> <p>If no filters are provided, this returns all related items associated with a case.</p> </note>
* [TagResource](docs/sdk/README.md#tagresource) - Adds tags to a resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Untags a resource.
* [UpdateCase](docs/sdk/README.md#updatecase) - <p>Updates the values of fields on a case. Fields to be updated are received as an array of id/value pairs identical to the <code>CreateCase</code> input .</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p>
* [UpdateField](docs/sdk/README.md#updatefield) - Updates the properties of an existing field. 
* [UpdateLayout](docs/sdk/README.md#updatelayout) - <p>Updates the attributes of an existing layout.</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p> <p>A <code>ValidationException</code> is returned when you add non-existent <code>fieldIds</code> to a layout.</p> <note> <p>Title and Status fields cannot be part of layouts because they are not configurable.</p> </note>
* [UpdateTemplate](docs/sdk/README.md#updatetemplate) - Updates the attributes of an existing template. The template attributes that can be modified include <code>name</code>, <code>description</code>, <code>layoutConfiguration</code>, <code>requiredFields</code>, and <code>status</code>. At least one of these attributes must not be null. If a null value is provided for a given attribute, that attribute is ignored and its current value is preserved.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
