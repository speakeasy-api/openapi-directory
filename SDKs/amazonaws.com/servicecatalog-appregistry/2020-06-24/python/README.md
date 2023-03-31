# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/servicecatalog-appregistry/2020-06-24/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateAttributeGroupRequest(
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="provident",
    x_amz_credential="distinctio",
    x_amz_date="quibusdam",
    x_amz_security_token="unde",
    x_amz_signature="nulla",
    x_amz_signed_headers="corrupti",
    application="illum",
    attribute_group="vel",
)
    
res = s.associate_attribute_group(req)

if res.associate_attribute_group_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associate_attribute_group` - Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.
* `associate_resource` -  Associates a resource with an application. The resource can be specified by its ARN or name. The application can be specified by ARN, ID, or name. 
* `create_application` - Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.
* `create_attribute_group` - Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.
* `delete_application` - Deletes an application that is specified either by its application ID, name, or ARN. All associated attribute groups and resources must be disassociated from it before deleting an application.
* `delete_attribute_group` - Deletes an attribute group, specified either by its attribute group ID, name, or ARN.
* `disassociate_attribute_group` - Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.
* `disassociate_resource` - Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.
* `get_application` -  Retrieves metadata information about one of your applications. The application can be specified by its ARN, ID, or name (which is unique within one account in one region at a given point in time). Specify by ARN or ID in automated workflows if you want to make sure that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown, avoiding the ABA addressing problem. 
* `get_associated_resource` - Gets the resource associated with the application.
* `get_attribute_group` -  Retrieves an attribute group by its ARN, ID, or name. The attribute group can be specified by its ARN, ID, or name. 
* `get_configuration` -  Retrieves a <code>TagKey</code> configuration from an account. 
* `list_applications` - Retrieves a list of all of your applications. Results are paginated.
* `list_associated_attribute_groups` - Lists all attribute groups that are associated with specified application. Results are paginated.
* `list_associated_resources` - <p> Lists all of the resources that are associated with the specified application. Results are paginated. </p> <note> <p> If you share an application, and a consumer account associates a tag query to the application, all of the users who can access the application can also view the tag values in all accounts that are associated with it using this API. </p> </note>
* `list_attribute_groups` - Lists all attribute groups which you have access to. Results are paginated.
* `list_attribute_groups_for_application` - Lists the details of all attribute groups associated with a specific application. The results display in pages.
* `list_tags_for_resource` - Lists all of the tags on the resource.
* `put_configuration` -  Associates a <code>TagKey</code> configuration to an account. 
* `sync_resource` - <p>Syncs the resource with current AppRegistry records.</p> <p>Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.</p>
* `tag_resource` - <p>Assigns one or more tags (key-value pairs) to the specified resource.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p> <p>This operation returns an empty response if the call was successful.</p>
* `untag_resource` - <p>Removes tags from a resource.</p> <p>This operation returns an empty response if the call was successful.</p>
* `update_application` - Updates an existing application with new attributes.
* `update_attribute_group` - Updates an existing attribute group with new details. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
