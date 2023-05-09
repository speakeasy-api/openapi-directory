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
import org.openapis.openapi.models.operations.AssociateLicenseLicenseTypeEnum;
import org.openapis.openapi.models.operations.AssociateLicenseRequest;
import org.openapis.openapi.models.operations.AssociateLicenseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateLicenseRequest req = new AssociateLicenseRequest(AssociateLicenseLicenseTypeEnum.ENTERPRISE_FREE_TRIAL, "distinctio") {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AssociateLicenseResponse res = sdk.associateLicense(req);

            if (res.associateLicenseResponse != null) {
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

* [associateLicense](docs/sdk/README.md#associatelicense) - Assigns a Grafana Enterprise license to a workspace. Upgrading to Grafana Enterprise incurs additional fees. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html">Upgrade a workspace to Grafana Enterprise</a>.
* [createWorkspace](docs/sdk/README.md#createworkspace) - <p>Creates a <i>workspace</i>. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware to run the Grafana server.</p> <p>Don't use <code>CreateWorkspace</code> to modify an existing workspace. Instead, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspace.html">UpdateWorkspace</a>.</p>
* [createWorkspaceApiKey](docs/sdk/README.md#createworkspaceapikey) - Creates a Grafana API key for the workspace. This key can be used to authenticate requests sent to the workspace's HTTP API. See <a href="https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html">https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html</a> for available APIs and example requests.
* [deleteWorkspace](docs/sdk/README.md#deleteworkspace) - Deletes an Amazon Managed Grafana workspace.
* [deleteWorkspaceApiKey](docs/sdk/README.md#deleteworkspaceapikey) - Deletes a Grafana API key for the workspace.
* [describeWorkspace](docs/sdk/README.md#describeworkspace) - Displays information about one Amazon Managed Grafana workspace.
* [describeWorkspaceAuthentication](docs/sdk/README.md#describeworkspaceauthentication) - Displays information about the authentication methods used in one Amazon Managed Grafana workspace.
* [describeWorkspaceConfiguration](docs/sdk/README.md#describeworkspaceconfiguration) - Gets the current configuration string for the given workspace.
* [disassociateLicense](docs/sdk/README.md#disassociatelicense) - Removes the Grafana Enterprise license from a workspace.
* [listPermissions](docs/sdk/README.md#listpermissions) - Lists the users and groups who have the Grafana <code>Admin</code> and <code>Editor</code> roles in this workspace. If you use this operation without specifying <code>userId</code> or <code>groupId</code>, the operation returns the roles of all users and groups. If you specify a <code>userId</code> or a <code>groupId</code>, only the roles for that user or group are returned. If you do this, you can specify only one <code>userId</code> or one <code>groupId</code>.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - The <code>ListTagsForResource</code> operation returns the tags that are associated with the Amazon Managed Service for Grafana resource specified by the <code>resourceArn</code>. Currently, the only resource that can be tagged is a workspace. 
* [listWorkspaces](docs/sdk/README.md#listworkspaces) - Returns a list of Amazon Managed Grafana workspaces in the account, with some information about each workspace. For more complete information about one workspace, use <a href="https://docs.aws.amazon.com/AAMG/latest/APIReference/API_DescribeWorkspace.html">DescribeWorkspace</a>.
* [tagResource](docs/sdk/README.md#tagresource) - <p>The <code>TagResource</code> operation associates tags with an Amazon Managed Grafana resource. Currently, the only resource that can be tagged is workspaces. </p> <p>If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p>
* [untagResource](docs/sdk/README.md#untagresource) - The <code>UntagResource</code> operation removes the association of the tag with the Amazon Managed Grafana resource. 
* [updatePermissions](docs/sdk/README.md#updatepermissions) - Updates which users in a workspace have the Grafana <code>Admin</code> or <code>Editor</code> roles.
* [updateWorkspace](docs/sdk/README.md#updateworkspace) - <p>Modifies an existing Amazon Managed Grafana workspace. If you use this operation and omit any optional parameters, the existing values of those parameters are not changed.</p> <p>To modify the user authentication methods that the workspace uses, such as SAML or IAM Identity Center, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspaceAuthentication.html">UpdateWorkspaceAuthentication</a>.</p> <p>To modify which users in the workspace have the <code>Admin</code> and <code>Editor</code> Grafana roles, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a>.</p>
* [updateWorkspaceAuthentication](docs/sdk/README.md#updateworkspaceauthentication) - <p>Use this operation to define the identity provider (IdP) that this workspace authenticates users from, using SAML. You can also map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the <code>Admin</code> and <code>Editor</code> roles in the workspace.</p> <note> <p>Changes to the authentication method for a workspace may take a few minutes to take effect.</p> </note>
* [updateWorkspaceConfiguration](docs/sdk/README.md#updateworkspaceconfiguration) - Updates the configuration string for the given workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
