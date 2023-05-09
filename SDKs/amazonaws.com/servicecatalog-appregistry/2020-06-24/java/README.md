# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateAttributeGroupRequest;
import org.openapis.openapi.models.operations.AssociateAttributeGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateAttributeGroupRequest req = new AssociateAttributeGroupRequest("provident", "distinctio") {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AssociateAttributeGroupResponse res = sdk.associateAttributeGroup(req);

            if (res.associateAttributeGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [associateAttributeGroup](docs/sdk/README.md#associateattributegroup) - Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.
* [associateResource](docs/sdk/README.md#associateresource) -  Associates a resource with an application. The resource can be specified by its ARN or name. The application can be specified by ARN, ID, or name. 
* [createApplication](docs/sdk/README.md#createapplication) - Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.
* [createAttributeGroup](docs/sdk/README.md#createattributegroup) - Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.
* [deleteApplication](docs/sdk/README.md#deleteapplication) - Deletes an application that is specified either by its application ID, name, or ARN. All associated attribute groups and resources must be disassociated from it before deleting an application.
* [deleteAttributeGroup](docs/sdk/README.md#deleteattributegroup) - Deletes an attribute group, specified either by its attribute group ID, name, or ARN.
* [disassociateAttributeGroup](docs/sdk/README.md#disassociateattributegroup) - Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.
* [disassociateResource](docs/sdk/README.md#disassociateresource) - Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.
* [getApplication](docs/sdk/README.md#getapplication) -  Retrieves metadata information about one of your applications. The application can be specified by its ARN, ID, or name (which is unique within one account in one region at a given point in time). Specify by ARN or ID in automated workflows if you want to make sure that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown, avoiding the ABA addressing problem. 
* [getAssociatedResource](docs/sdk/README.md#getassociatedresource) - Gets the resource associated with the application.
* [getAttributeGroup](docs/sdk/README.md#getattributegroup) -  Retrieves an attribute group by its ARN, ID, or name. The attribute group can be specified by its ARN, ID, or name. 
* [getConfiguration](docs/sdk/README.md#getconfiguration) -  Retrieves a <code>TagKey</code> configuration from an account. 
* [listApplications](docs/sdk/README.md#listapplications) - Retrieves a list of all of your applications. Results are paginated.
* [listAssociatedAttributeGroups](docs/sdk/README.md#listassociatedattributegroups) - Lists all attribute groups that are associated with specified application. Results are paginated.
* [listAssociatedResources](docs/sdk/README.md#listassociatedresources) - <p> Lists all of the resources that are associated with the specified application. Results are paginated. </p> <note> <p> If you share an application, and a consumer account associates a tag query to the application, all of the users who can access the application can also view the tag values in all accounts that are associated with it using this API. </p> </note>
* [listAttributeGroups](docs/sdk/README.md#listattributegroups) - Lists all attribute groups which you have access to. Results are paginated.
* [listAttributeGroupsForApplication](docs/sdk/README.md#listattributegroupsforapplication) - Lists the details of all attribute groups associated with a specific application. The results display in pages.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all of the tags on the resource.
* [putConfiguration](docs/sdk/README.md#putconfiguration) -  Associates a <code>TagKey</code> configuration to an account. 
* [syncResource](docs/sdk/README.md#syncresource) - <p>Syncs the resource with current AppRegistry records.</p> <p>Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.</p>
* [tagResource](docs/sdk/README.md#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified resource.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p> <p>This operation returns an empty response if the call was successful.</p>
* [untagResource](docs/sdk/README.md#untagresource) - <p>Removes tags from a resource.</p> <p>This operation returns an empty response if the call was successful.</p>
* [updateApplication](docs/sdk/README.md#updateapplication) - Updates an existing application with new attributes.
* [updateAttributeGroup](docs/sdk/README.md#updateattributegroup) - Updates an existing attribute group with new details. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
