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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AssociateAttributeGroupRequest{
        PathParams: operations.AssociateAttributeGroupPathParams{
            Application: "unde",
            AttributeGroup: "deserunt",
        },
        Headers: operations.AssociateAttributeGroupHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "nulla",
            XAmzCredential: "id",
            XAmzDate: "vero",
            XAmzSecurityToken: "perspiciatis",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateAttributeGroup(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `AssociateAttributeGroup` - Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.
* `AssociateResource` - Associates a resource with an application. Both the resource and the application can be specified either by ID or name.
* `CreateApplication` - Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.
* `CreateAttributeGroup` - Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.
* `DeleteApplication` - Deletes an application that is specified either by its application ID or name. All associated attribute groups and resources must be disassociated from it before deleting an application.
* `DeleteAttributeGroup` - Deletes an attribute group, specified either by its attribute group ID or name.
* `DisassociateAttributeGroup` - Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.
* `DisassociateResource` - Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.
* `GetApplication` - Retrieves metadata information about one of your applications. The application can be specified either by its unique ID or by its name (which is unique within one account in one region at a given point in time). Specify by ID in automated workflows if you want to make sure that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown, avoiding the ABA addressing problem.
* `GetAssociatedResource` - Gets the resource associated with the application.
* `GetAttributeGroup` - Retrieves an attribute group, either by its name or its ID. The attribute group can be specified either by its unique ID or by its name.
* `GetConfiguration` -  Retrieves a <code>TagKey</code> configuration from an account. 
* `ListApplications` - Retrieves a list of all of your applications. Results are paginated.
* `ListAssociatedAttributeGroups` - Lists all attribute groups that are associated with specified application. Results are paginated.
* `ListAssociatedResources` - <p> Lists all of the resources that are associated with the specified application. Results are paginated. </p> <note> <p> If you share an application, and a consumer account associates a tag query to the application, all of the users who can access the application can also view the tag values in all accounts that are associated with it using this API. </p> </note>
* `ListAttributeGroups` - Lists all attribute groups which you have access to. Results are paginated.
* `ListAttributeGroupsForApplication` - Lists the details of all attribute groups associated with a specific application. The results display in pages.
* `ListTagsForResource` - Lists all of the tags on the resource.
* `PutConfiguration` -  Associates a <code>TagKey</code> configuration to an account. 
* `SyncResource` - <p>Syncs the resource with current AppRegistry records.</p> <p>Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.</p>
* `TagResource` - <p>Assigns one or more tags (key-value pairs) to the specified resource.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p> <p>This operation returns an empty response if the call was successful.</p>
* `UntagResource` - <p>Removes tags from a resource.</p> <p>This operation returns an empty response if the call was successful.</p>
* `UpdateApplication` - Updates an existing application with new attributes.
* `UpdateAttributeGroup` - Updates an existing attribute group with new details. 
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
