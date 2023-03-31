# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/connectcases/2022-10-03/python
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


req = operations.BatchGetFieldRequest(
    request_body=operations.BatchGetFieldRequestBody(
        fields_=[
            shared.FieldIdentifier(
                id="provident",
            ),
            shared.FieldIdentifier(
                id="distinctio",
            ),
            shared.FieldIdentifier(
                id="quibusdam",
            ),
        ],
    ),
    x_amz_algorithm="unde",
    x_amz_content_sha256="nulla",
    x_amz_credential="corrupti",
    x_amz_date="illum",
    x_amz_security_token="vel",
    x_amz_signature="error",
    x_amz_signed_headers="deserunt",
    domain_id="suscipit",
)
    
res = s.batch_get_field(req)

if res.batch_get_field_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batch_get_field` - Returns the description for the list of fields in the request parameters. 
* `batch_put_field_options` - Creates and updates a set of field options for a single select field in a Cases domain.
* `create_case` - <p>Creates a case in the specified Cases domain. Case system and custom fields are taken as an array id/value pairs with a declared data types.</p> <note> <p>The following fields are required when creating a case:</p> <pre><code> &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;customer_id&lt;/code&gt; - You must provide the full customer profile ARN in this format: &lt;code&gt;arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;title&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/note&gt; </code></pre>
* `create_domain` - <p>Creates a domain, which is a container for all case data, such as cases, fields, templates and layouts. Each Amazon Connect instance can be associated with only one Cases domain.</p> <important> <p>This will not associate your connect instance to Cases domain. Instead, use the Amazon Connect <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateIntegrationAssociation.html">CreateIntegrationAssociation</a> API. You need specific IAM permissions to successfully associate the Cases domain. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/required-permissions-iam-cases.html#onboard-cases-iam">Onboard to Cases</a>.</p> </important>
* `create_field` - Creates a field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain. 
* `create_layout` - <p>Creates a layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface:</p> <ul> <li> <p>Fields to display to the users</p> </li> <li> <p>Field ordering</p> </li> </ul> <note> <p>Title and Status fields cannot be part of layouts since they are not configurable.</p> </note>
* `create_related_item` - <p>Creates a related item (comments, tasks, and contacts) and associates it with a case.</p> <note> <p>A Related Item is a resource that is associated with a case. It may or may not have an external identifier linking it to an external resource (for example, a <code>contactArn</code>). All Related Items have their own internal identifier, the <code>relatedItemArn</code>. Examples of related items include <code>comments</code> and <code>contacts</code>.</p> </note>
* `create_template` - Creates a template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A template can be either Active or Inactive, as indicated by its status. Inactive templates cannot be used to create cases.
* `delete_domain` - Deletes a domain.
* `get_case` - Returns information about a specific case if it exists. 
* `get_case_event_configuration` - Returns the case event publishing configuration.
* `get_domain` - Returns information about a specific domain if it exists. 
* `get_layout` - Returns the details for the requested layout.
* `get_template` - Returns the details for the requested template. 
* `list_cases_for_contact` - Lists cases for a given contact.
* `list_domains` - Lists all cases domains in the Amazon Web Services account. Each list item is a condensed summary object of the domain.
* `list_field_options` - Lists all of the field options for a field identifier in the domain. 
* `list_fields` - Lists all fields in a Cases domain.
* `list_layouts` - Lists all layouts in the given cases domain. Each list item is a condensed summary object of the layout.
* `list_tags_for_resource` - Lists tags for a resource.
* `list_templates` - Lists all of the templates in a Cases domain. Each list item is a condensed summary object of the template. 
* `put_case_event_configuration` - API for adding case event publishing configuration
* `search_cases` - <p>Searches for cases within their associated Cases domain. Search results are returned as a paginated list of abridged case documents.</p> <note> <p>For <code>customer_id</code> you must provide the full customer profile ARN in this format: <code> arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID</code>. </p> </note>
* `search_related_items` - <p>Searches for related items that are associated with a case.</p> <note> <p>If no filters are provided, this returns all related items associated with a case.</p> </note>
* `tag_resource` - Adds tags to a resource.
* `untag_resource` - Untags a resource.
* `update_case` - <p>Updates the values of fields on a case. Fields to be updated are received as an array of id/value pairs identical to the <code>CreateCase</code> input .</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p>
* `update_field` - Updates the properties of an existing field. 
* `update_layout` - <p>Updates the attributes of an existing layout.</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p> <p>A <code>ValidationException</code> is returned when you add non-existent <code>fieldIds</code> to a layout.</p> <note> <p>Title and Status fields cannot be part of layouts because they are not configurable.</p> </note>
* `update_template` - Updates the attributes of an existing template. The template attributes that can be modified include <code>name</code>, <code>description</code>, <code>layoutConfiguration</code>, <code>requiredFields</code>, and <code>status</code>. At least one of these attributes must not be null. If a null value is provided for a given attribute, that attribute is ignored and its current value is preserved.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
