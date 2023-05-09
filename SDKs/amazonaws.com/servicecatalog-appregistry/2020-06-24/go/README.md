# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/servicecatalog-appregistry/2020-06-24/go
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
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssociateAttributeGroup(ctx, operations.AssociateAttributeGroupRequest{
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        Application: "illum",
        AttributeGroup: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateAttributeGroupResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AssociateAttributeGroup](docs/sdk/README.md#associateattributegroup) - Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.
* [AssociateResource](docs/sdk/README.md#associateresource) -  Associates a resource with an application. The resource can be specified by its ARN or name. The application can be specified by ARN, ID, or name. 
* [CreateApplication](docs/sdk/README.md#createapplication) - Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.
* [CreateAttributeGroup](docs/sdk/README.md#createattributegroup) - Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.
* [DeleteApplication](docs/sdk/README.md#deleteapplication) - Deletes an application that is specified either by its application ID, name, or ARN. All associated attribute groups and resources must be disassociated from it before deleting an application.
* [DeleteAttributeGroup](docs/sdk/README.md#deleteattributegroup) - Deletes an attribute group, specified either by its attribute group ID, name, or ARN.
* [DisassociateAttributeGroup](docs/sdk/README.md#disassociateattributegroup) - Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.
* [DisassociateResource](docs/sdk/README.md#disassociateresource) - Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.
* [GetApplication](docs/sdk/README.md#getapplication) -  Retrieves metadata information about one of your applications. The application can be specified by its ARN, ID, or name (which is unique within one account in one region at a given point in time). Specify by ARN or ID in automated workflows if you want to make sure that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown, avoiding the ABA addressing problem. 
* [GetAssociatedResource](docs/sdk/README.md#getassociatedresource) - Gets the resource associated with the application.
* [GetAttributeGroup](docs/sdk/README.md#getattributegroup) -  Retrieves an attribute group by its ARN, ID, or name. The attribute group can be specified by its ARN, ID, or name. 
* [GetConfiguration](docs/sdk/README.md#getconfiguration) -  Retrieves a <code>TagKey</code> configuration from an account. 
* [ListApplications](docs/sdk/README.md#listapplications) - Retrieves a list of all of your applications. Results are paginated.
* [ListAssociatedAttributeGroups](docs/sdk/README.md#listassociatedattributegroups) - Lists all attribute groups that are associated with specified application. Results are paginated.
* [ListAssociatedResources](docs/sdk/README.md#listassociatedresources) - <p> Lists all of the resources that are associated with the specified application. Results are paginated. </p> <note> <p> If you share an application, and a consumer account associates a tag query to the application, all of the users who can access the application can also view the tag values in all accounts that are associated with it using this API. </p> </note>
* [ListAttributeGroups](docs/sdk/README.md#listattributegroups) - Lists all attribute groups which you have access to. Results are paginated.
* [ListAttributeGroupsForApplication](docs/sdk/README.md#listattributegroupsforapplication) - Lists the details of all attribute groups associated with a specific application. The results display in pages.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all of the tags on the resource.
* [PutConfiguration](docs/sdk/README.md#putconfiguration) -  Associates a <code>TagKey</code> configuration to an account. 
* [SyncResource](docs/sdk/README.md#syncresource) - <p>Syncs the resource with current AppRegistry records.</p> <p>Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.</p>
* [TagResource](docs/sdk/README.md#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified resource.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p> <p>This operation returns an empty response if the call was successful.</p>
* [UntagResource](docs/sdk/README.md#untagresource) - <p>Removes tags from a resource.</p> <p>This operation returns an empty response if the call was successful.</p>
* [UpdateApplication](docs/sdk/README.md#updateapplication) - Updates an existing application with new attributes.
* [UpdateAttributeGroup](docs/sdk/README.md#updateattributegroup) - Updates an existing attribute group with new details. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
