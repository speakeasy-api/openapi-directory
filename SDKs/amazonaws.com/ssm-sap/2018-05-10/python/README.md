# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/ssm-sap/2018-05-10/python
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


req = operations.DeleteResourcePermissionRequest(
    request_body=operations.DeleteResourcePermissionRequestBody(
        action_type="RESTORE",
        resource_arn="corrupti",
        source_resource_arn="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
)
    
res = s.delete_resource_permission(req)

if res.delete_resource_permission_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `delete_resource_permission` - Removes permissions associated with the target database.
* `deregister_application` - Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.
* `get_application` - Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.
* `get_component` - Gets the component of an application registered with AWS Systems Manager for SAP.
* `get_database` - Gets the SAP HANA database of an application registered with AWS Systems Manager for SAP.
* `get_operation` - Gets the details of an operation by specifying the operation ID.
* `get_resource_permission` - Gets permissions associated with the target database.
* `list_applications` - Lists all the applications registered with AWS Systems Manager for SAP.
* `list_components` - Lists all the components registered with AWS Systems Manager for SAP.
* `list_databases` - Lists the SAP HANA databases of an application registered with AWS Systems Manager for SAP.
* `list_operations` - Lists the operations performed by AWS Systems Manager for SAP.
* `list_tags_for_resource` - Lists all tags on an SAP HANA application and/or database registered with AWS Systems Manager for SAP.
* `put_resource_permission` - Adds permissions to the target database.
* `register_application` - <p>Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering. </p> <p>The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2.</p> <p>AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions.</p> <p>Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.</p>
* `tag_resource` - Creates tag for a resource by specifying the ARN.
* `untag_resource` - Delete the tags for a resource.
* `update_application_settings` - Updates the settings of an application registered with AWS Systems Manager for SAP.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
