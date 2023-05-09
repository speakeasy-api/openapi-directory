# SDK

## Overview

<p>Amazon Managed Grafana is a fully managed and secure data visualization service that you can use to instantly query, correlate, and visualize operational metrics, logs, and traces from multiple sources. Amazon Managed Grafana makes it easy to deploy, operate, and scale Grafana, a widely deployed data visualization tool that is popular for its extensible data support.</p> <p>With Amazon Managed Grafana, you create logically isolated Grafana servers called <i>workspaces</i>. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces without having to build, package, or deploy any hardware to run Grafana servers. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/grafana/>
### Available Operations

* [associateLicense](#associatelicense) - Assigns a Grafana Enterprise license to a workspace. Upgrading to Grafana Enterprise incurs additional fees. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html">Upgrade a workspace to Grafana Enterprise</a>.
* [createWorkspace](#createworkspace) - <p>Creates a <i>workspace</i>. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware to run the Grafana server.</p> <p>Don't use <code>CreateWorkspace</code> to modify an existing workspace. Instead, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspace.html">UpdateWorkspace</a>.</p>
* [createWorkspaceApiKey](#createworkspaceapikey) - Creates a Grafana API key for the workspace. This key can be used to authenticate requests sent to the workspace's HTTP API. See <a href="https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html">https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html</a> for available APIs and example requests.
* [deleteWorkspace](#deleteworkspace) - Deletes an Amazon Managed Grafana workspace.
* [deleteWorkspaceApiKey](#deleteworkspaceapikey) - Deletes a Grafana API key for the workspace.
* [describeWorkspace](#describeworkspace) - Displays information about one Amazon Managed Grafana workspace.
* [describeWorkspaceAuthentication](#describeworkspaceauthentication) - Displays information about the authentication methods used in one Amazon Managed Grafana workspace.
* [describeWorkspaceConfiguration](#describeworkspaceconfiguration) - Gets the current configuration string for the given workspace.
* [disassociateLicense](#disassociatelicense) - Removes the Grafana Enterprise license from a workspace.
* [listPermissions](#listpermissions) - Lists the users and groups who have the Grafana <code>Admin</code> and <code>Editor</code> roles in this workspace. If you use this operation without specifying <code>userId</code> or <code>groupId</code>, the operation returns the roles of all users and groups. If you specify a <code>userId</code> or a <code>groupId</code>, only the roles for that user or group are returned. If you do this, you can specify only one <code>userId</code> or one <code>groupId</code>.
* [listTagsForResource](#listtagsforresource) - The <code>ListTagsForResource</code> operation returns the tags that are associated with the Amazon Managed Service for Grafana resource specified by the <code>resourceArn</code>. Currently, the only resource that can be tagged is a workspace. 
* [listWorkspaces](#listworkspaces) - Returns a list of Amazon Managed Grafana workspaces in the account, with some information about each workspace. For more complete information about one workspace, use <a href="https://docs.aws.amazon.com/AAMG/latest/APIReference/API_DescribeWorkspace.html">DescribeWorkspace</a>.
* [tagResource](#tagresource) - <p>The <code>TagResource</code> operation associates tags with an Amazon Managed Grafana resource. Currently, the only resource that can be tagged is workspaces. </p> <p>If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p>
* [untagResource](#untagresource) - The <code>UntagResource</code> operation removes the association of the tag with the Amazon Managed Grafana resource. 
* [updatePermissions](#updatepermissions) - Updates which users in a workspace have the Grafana <code>Admin</code> or <code>Editor</code> roles.
* [updateWorkspace](#updateworkspace) - <p>Modifies an existing Amazon Managed Grafana workspace. If you use this operation and omit any optional parameters, the existing values of those parameters are not changed.</p> <p>To modify the user authentication methods that the workspace uses, such as SAML or IAM Identity Center, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspaceAuthentication.html">UpdateWorkspaceAuthentication</a>.</p> <p>To modify which users in the workspace have the <code>Admin</code> and <code>Editor</code> Grafana roles, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a>.</p>
* [updateWorkspaceAuthentication](#updateworkspaceauthentication) - <p>Use this operation to define the identity provider (IdP) that this workspace authenticates users from, using SAML. You can also map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the <code>Admin</code> and <code>Editor</code> roles in the workspace.</p> <note> <p>Changes to the authentication method for a workspace may take a few minutes to take effect.</p> </note>
* [updateWorkspaceConfiguration](#updateworkspaceconfiguration) - Updates the configuration string for the given workspace

## associateLicense

Assigns a Grafana Enterprise license to a workspace. Upgrading to Grafana Enterprise incurs additional fees. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html">Upgrade a workspace to Grafana Enterprise</a>.

### Example Usage

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
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateLicenseRequest req = new AssociateLicenseRequest(AssociateLicenseLicenseTypeEnum.ENTERPRISE, "iure") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AssociateLicenseResponse res = sdk.sdk.associateLicense(req);

            if (res.associateLicenseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkspace

<p>Creates a <i>workspace</i>. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware to run the Grafana server.</p> <p>Don't use <code>CreateWorkspace</code> to modify an existing workspace. Instead, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspace.html">UpdateWorkspace</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkspaceRequest;
import org.openapis.openapi.models.operations.CreateWorkspaceRequestBody;
import org.openapis.openapi.models.operations.CreateWorkspaceRequestBodyAccountAccessTypeEnum;
import org.openapis.openapi.models.operations.CreateWorkspaceRequestBodyNetworkAccessControl;
import org.openapis.openapi.models.operations.CreateWorkspaceRequestBodyPermissionTypeEnum;
import org.openapis.openapi.models.operations.CreateWorkspaceRequestBodyVpcConfiguration;
import org.openapis.openapi.models.operations.CreateWorkspaceResponse;
import org.openapis.openapi.models.shared.AuthenticationProviderTypesEnum;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.NotificationDestinationTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkspaceRequest req = new CreateWorkspaceRequest(                new CreateWorkspaceRequestBody(CreateWorkspaceRequestBodyAccountAccessTypeEnum.ORGANIZATION,                 new org.openapis.openapi.models.shared.AuthenticationProviderTypesEnum[]{{
                                                add(AuthenticationProviderTypesEnum.AWS_SSO),
                                                add(AuthenticationProviderTypesEnum.SAML),
                                                add(AuthenticationProviderTypesEnum.AWS_SSO),
                                            }}, CreateWorkspaceRequestBodyPermissionTypeEnum.SERVICE_MANAGED) {{
                                clientToken = "temporibus";
                                configuration = "ab";
                                networkAccessControl = new CreateWorkspaceRequestBodyNetworkAccessControl() {{
                                    prefixListIds = new String[]{{
                                        add("veritatis"),
                                        add("deserunt"),
                                    }};
                                    vpceIds = new String[]{{
                                        add("ipsam"),
                                    }};
                                }};;
                                organizationRoleName = "repellendus";
                                stackSetName = "sapiente";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("odit", "at");
                                    put("at", "maiores");
                                    put("molestiae", "quod");
                                    put("quod", "esse");
                                }};
                                vpcConfiguration = new CreateWorkspaceRequestBodyVpcConfiguration() {{
                                    securityGroupIds = new String[]{{
                                        add("porro"),
                                        add("dolorum"),
                                        add("dicta"),
                                    }};
                                    subnetIds = new String[]{{
                                        add("officia"),
                                        add("occaecati"),
                                        add("fugit"),
                                    }};
                                }};;
                                workspaceDataSources = new org.openapis.openapi.models.shared.DataSourceTypeEnum[]{{
                                    add(DataSourceTypeEnum.TWINMAKER),
                                    add(DataSourceTypeEnum.ATHENA),
                                    add(DataSourceTypeEnum.TIMESTREAM),
                                }};
                                workspaceDescription = "beatae";
                                workspaceName = "commodi";
                                workspaceNotificationDestinations = new org.openapis.openapi.models.shared.NotificationDestinationTypeEnum[]{{
                                    add(NotificationDestinationTypeEnum.SNS),
                                    add(NotificationDestinationTypeEnum.SNS),
                                }};
                                workspaceOrganizationalUnits = new String[]{{
                                    add("qui"),
                                    add("impedit"),
                                }};
                                workspaceRoleArn = "cum";
                            }};) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            CreateWorkspaceResponse res = sdk.sdk.createWorkspace(req);

            if (res.createWorkspaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkspaceApiKey

Creates a Grafana API key for the workspace. This key can be used to authenticate requests sent to the workspace's HTTP API. See <a href="https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html">https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html</a> for available APIs and example requests.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkspaceApiKeyRequest;
import org.openapis.openapi.models.operations.CreateWorkspaceApiKeyRequestBody;
import org.openapis.openapi.models.operations.CreateWorkspaceApiKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkspaceApiKeyRequest req = new CreateWorkspaceApiKeyRequest(                new CreateWorkspaceApiKeyRequestBody("iste", "dolor", 616934L);, "laboriosam") {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "fuga";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "iure";
            }};            

            CreateWorkspaceApiKeyResponse res = sdk.sdk.createWorkspaceApiKey(req);

            if (res.createWorkspaceApiKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkspace

Deletes an Amazon Managed Grafana workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspaceRequest;
import org.openapis.openapi.models.operations.DeleteWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkspaceRequest req = new DeleteWorkspaceRequest("quidem") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "reiciendis";
                xAmzDate = "est";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dolores";
            }};            

            DeleteWorkspaceResponse res = sdk.sdk.deleteWorkspace(req);

            if (res.deleteWorkspaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkspaceApiKey

Deletes a Grafana API key for the workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspaceApiKeyRequest;
import org.openapis.openapi.models.operations.DeleteWorkspaceApiKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkspaceApiKeyRequest req = new DeleteWorkspaceApiKeyRequest("corporis", "explicabo") {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "enim";
                xAmzCredential = "omnis";
                xAmzDate = "nemo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "accusantium";
            }};            

            DeleteWorkspaceApiKeyResponse res = sdk.sdk.deleteWorkspaceApiKey(req);

            if (res.deleteWorkspaceApiKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorkspace

Displays information about one Amazon Managed Grafana workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorkspaceRequest;
import org.openapis.openapi.models.operations.DescribeWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorkspaceRequest req = new DescribeWorkspaceRequest("culpa") {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            DescribeWorkspaceResponse res = sdk.sdk.describeWorkspace(req);

            if (res.describeWorkspaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorkspaceAuthentication

Displays information about the authentication methods used in one Amazon Managed Grafana workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorkspaceAuthenticationRequest;
import org.openapis.openapi.models.operations.DescribeWorkspaceAuthenticationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorkspaceAuthenticationRequest req = new DescribeWorkspaceAuthenticationRequest("mollitia") {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            DescribeWorkspaceAuthenticationResponse res = sdk.sdk.describeWorkspaceAuthentication(req);

            if (res.describeWorkspaceAuthenticationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorkspaceConfiguration

Gets the current configuration string for the given workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorkspaceConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeWorkspaceConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorkspaceConfigurationRequest req = new DescribeWorkspaceConfigurationRequest("quis") {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "animi";
                xAmzDate = "enim";
                xAmzSecurityToken = "odit";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "sequi";
            }};            

            DescribeWorkspaceConfigurationResponse res = sdk.sdk.describeWorkspaceConfiguration(req);

            if (res.describeWorkspaceConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateLicense

Removes the Grafana Enterprise license from a workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateLicenseLicenseTypeEnum;
import org.openapis.openapi.models.operations.DisassociateLicenseRequest;
import org.openapis.openapi.models.operations.DisassociateLicenseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateLicenseRequest req = new DisassociateLicenseRequest(DisassociateLicenseLicenseTypeEnum.ENTERPRISE, "id") {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quasi";
                xAmzDate = "error";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "quasi";
            }};            

            DisassociateLicenseResponse res = sdk.sdk.disassociateLicense(req);

            if (res.disassociateLicenseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPermissions

Lists the users and groups who have the Grafana <code>Admin</code> and <code>Editor</code> roles in this workspace. If you use this operation without specifying <code>userId</code> or <code>groupId</code>, the operation returns the roles of all users and groups. If you specify a <code>userId</code> or a <code>groupId</code>, only the roles for that user or group are returned. If you do this, you can specify only one <code>userId</code> or one <code>groupId</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPermissionsRequest;
import org.openapis.openapi.models.operations.ListPermissionsResponse;
import org.openapis.openapi.models.operations.ListPermissionsUserTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPermissionsRequest req = new ListPermissionsRequest("voluptatibus") {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "praesentium";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "voluptate";
                groupId = "cum";
                maxResults = 19987L;
                nextToken = "doloremque";
                userId = "reprehenderit";
                userType = ListPermissionsUserTypeEnum.SSO_USER;
            }};            

            ListPermissionsResponse res = sdk.sdk.listPermissions(req);

            if (res.listPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

The <code>ListTagsForResource</code> operation returns the tags that are associated with the Amazon Managed Service for Grafana resource specified by the <code>resourceArn</code>. Currently, the only resource that can be tagged is a workspace. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("dicta") {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "iusto";
                xAmzDate = "dicta";
                xAmzSecurityToken = "harum";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "accusamus";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkspaces

Returns a list of Amazon Managed Grafana workspaces in the account, with some information about each workspace. For more complete information about one workspace, use <a href="https://docs.aws.amazon.com/AAMG/latest/APIReference/API_DescribeWorkspace.html">DescribeWorkspace</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkspacesRequest;
import org.openapis.openapi.models.operations.ListWorkspacesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkspacesRequest req = new ListWorkspacesRequest() {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "quae";
                xAmzCredential = "ipsum";
                xAmzDate = "quidem";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "pariatur";
                maxResults = 265389L;
                nextToken = "praesentium";
            }};            

            ListWorkspacesResponse res = sdk.sdk.listWorkspaces(req);

            if (res.listWorkspacesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>The <code>TagResource</code> operation associates tags with an Amazon Managed Grafana resource. Currently, the only resource that can be tagged is workspaces. </p> <p>If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("quasi", "repudiandae");
                                                put("sint", "veritatis");
                                                put("itaque", "incidunt");
                                                put("enim", "consequatur");
                                            }});, "est") {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "deserunt";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "modi";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

The <code>UntagResource</code> operation removes the association of the tag with the Amazon Managed Grafana resource. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("aliquid",                 new String[]{{
                                add("quos"),
                                add("perferendis"),
                                add("magni"),
                            }}) {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "alias";
                xAmzDate = "fugit";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "tempora";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePermissions

Updates which users in a workspace have the Grafana <code>Admin</code> or <code>Editor</code> roles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePermissionsRequest;
import org.openapis.openapi.models.operations.UpdatePermissionsRequestBody;
import org.openapis.openapi.models.operations.UpdatePermissionsResponse;
import org.openapis.openapi.models.shared.RoleEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateActionEnum;
import org.openapis.openapi.models.shared.UpdateInstruction;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePermissionsRequest req = new UpdatePermissionsRequest(                new UpdatePermissionsRequestBody(                new org.openapis.openapi.models.shared.UpdateInstruction[]{{
                                                add(new UpdateInstruction(UpdateActionEnum.REVOKE, RoleEnum.ADMIN,                 new org.openapis.openapi.models.shared.User[]{{
                                                                    add(new User("pariatur", UserTypeEnum.SSO_GROUP) {{
                                                                        id = "3e2516fe-4c8b-4711-a5b7-fd2ed028921c";
                                                                        type = UserTypeEnum.SSO_GROUP;
                                                                    }}),
                                                                    add(new User("eos", UserTypeEnum.SSO_USER) {{
                                                                        id = "692601fb-576b-40d5-b0d3-0c5fbb258705";
                                                                        type = UserTypeEnum.SSO_USER;
                                                                    }}),
                                                                }}) {{
                                                    action = UpdateActionEnum.ADD;
                                                    role = RoleEnum.VIEWER;
                                                    users = new org.openapis.openapi.models.shared.User[]{{
                                                        add(new User("nam", UserTypeEnum.SSO_GROUP) {{
                                                            id = "3c969e9a-3efa-477d-bb14-cd66ae395efb";
                                                            type = UserTypeEnum.SSO_GROUP;
                                                        }}),
                                                        add(new User("mollitia", UserTypeEnum.SSO_GROUP) {{
                                                            id = "88f3a669-9707-44ba-8469-b6e214195989";
                                                            type = UserTypeEnum.SSO_USER;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new UpdateInstruction(UpdateActionEnum.REVOKE, RoleEnum.VIEWER,                 new org.openapis.openapi.models.shared.User[]{{
                                                                    add(new User("iusto", UserTypeEnum.SSO_USER) {{
                                                                        id = "737ae420-3ce5-4e6a-95d8-a0d446ce2af7";
                                                                        type = UserTypeEnum.SSO_GROUP;
                                                                    }}),
                                                                    add(new User("dolores", UserTypeEnum.SSO_GROUP) {{
                                                                        id = "cf3be453-f870-4b32-ab5a-73429cdb1a84";
                                                                        type = UserTypeEnum.SSO_USER;
                                                                    }}),
                                                                    add(new User("dolorum", UserTypeEnum.SSO_USER) {{
                                                                        id = "b679d232-2715-4bf0-8bb1-e31b8b90f344";
                                                                        type = UserTypeEnum.SSO_USER;
                                                                    }}),
                                                                    add(new User("odio", UserTypeEnum.SSO_GROUP) {{
                                                                        id = "108e0adc-f4b9-4218-b9fc-e953f73ef7fb";
                                                                        type = UserTypeEnum.SSO_GROUP;
                                                                    }}),
                                                                }}) {{
                                                    action = UpdateActionEnum.ADD;
                                                    role = RoleEnum.VIEWER;
                                                    users = new org.openapis.openapi.models.shared.User[]{{
                                                        add(new User("dolorem", UserTypeEnum.SSO_USER) {{
                                                            id = "3d5fe9b9-0c28-4909-b3fe-49a8d9cbf486";
                                                            type = UserTypeEnum.SSO_USER;
                                                        }}),
                                                        add(new User("deleniti", UserTypeEnum.SSO_GROUP) {{
                                                            id = "23f9b77f-3a41-4006-b4eb-f69280d1ba77";
                                                            type = UserTypeEnum.SSO_GROUP;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new UpdateInstruction(UpdateActionEnum.REVOKE, RoleEnum.VIEWER,                 new org.openapis.openapi.models.shared.User[]{{
                                                                    add(new User("veritatis", UserTypeEnum.SSO_USER) {{
                                                                        id = "66c8dd6b-1442-4907-8747-78a7bd466d28";
                                                                        type = UserTypeEnum.SSO_GROUP;
                                                                    }}),
                                                                }}) {{
                                                    action = UpdateActionEnum.REVOKE;
                                                    role = RoleEnum.VIEWER;
                                                    users = new org.openapis.openapi.models.shared.User[]{{
                                                        add(new User("quasi", UserTypeEnum.SSO_USER) {{
                                                            id = "4dd39c0f-5d2c-4ff7-870a-45626d436813";
                                                            type = UserTypeEnum.SSO_GROUP;
                                                        }}),
                                                        add(new User("et", UserTypeEnum.SSO_GROUP) {{
                                                            id = "d9f5fce6-c556-4146-83e2-50fb008c42e1";
                                                            type = UserTypeEnum.SSO_USER;
                                                        }}),
                                                    }};
                                                }}),
                                            }});, "id") {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "neque";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "quo";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "eius";
            }};            

            UpdatePermissionsResponse res = sdk.sdk.updatePermissions(req);

            if (res.updatePermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkspace

<p>Modifies an existing Amazon Managed Grafana workspace. If you use this operation and omit any optional parameters, the existing values of those parameters are not changed.</p> <p>To modify the user authentication methods that the workspace uses, such as SAML or IAM Identity Center, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspaceAuthentication.html">UpdateWorkspaceAuthentication</a>.</p> <p>To modify which users in the workspace have the <code>Admin</code> and <code>Editor</code> Grafana roles, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequest;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequestBody;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequestBodyAccountAccessTypeEnum;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequestBodyNetworkAccessControl;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequestBodyPermissionTypeEnum;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequestBodyVpcConfiguration;
import org.openapis.openapi.models.operations.UpdateWorkspaceResponse;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.NotificationDestinationTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkspaceRequest req = new UpdateWorkspaceRequest(                new UpdateWorkspaceRequestBody() {{
                                accountAccessType = UpdateWorkspaceRequestBodyAccountAccessTypeEnum.CURRENT_ACCOUNT;
                                networkAccessControl = new UpdateWorkspaceRequestBodyNetworkAccessControl() {{
                                    prefixListIds = new String[]{{
                                        add("cupiditate"),
                                    }};
                                    vpceIds = new String[]{{
                                        add("tempora"),
                                    }};
                                }};;
                                organizationRoleName = "debitis";
                                permissionType = UpdateWorkspaceRequestBodyPermissionTypeEnum.CUSTOMER_MANAGED;
                                removeNetworkAccessConfiguration = false;
                                removeVpcConfiguration = false;
                                stackSetName = "aspernatur";
                                vpcConfiguration = new UpdateWorkspaceRequestBodyVpcConfiguration() {{
                                    securityGroupIds = new String[]{{
                                        add("quo"),
                                    }};
                                    subnetIds = new String[]{{
                                        add("recusandae"),
                                        add("aperiam"),
                                    }};
                                }};;
                                workspaceDataSources = new org.openapis.openapi.models.shared.DataSourceTypeEnum[]{{
                                    add(DataSourceTypeEnum.REDSHIFT),
                                    add(DataSourceTypeEnum.TIMESTREAM),
                                    add(DataSourceTypeEnum.AMAZON_OPENSEARCH_SERVICE),
                                }};
                                workspaceDescription = "nihil";
                                workspaceName = "totam";
                                workspaceNotificationDestinations = new org.openapis.openapi.models.shared.NotificationDestinationTypeEnum[]{{
                                    add(NotificationDestinationTypeEnum.SNS),
                                    add(NotificationDestinationTypeEnum.SNS),
                                    add(NotificationDestinationTypeEnum.SNS),
                                    add(NotificationDestinationTypeEnum.SNS),
                                }};
                                workspaceOrganizationalUnits = new String[]{{
                                    add("odio"),
                                    add("occaecati"),
                                }};
                                workspaceRoleArn = "commodi";
                            }};, "sapiente") {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "molestiae";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "porro";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "quas";
            }};            

            UpdateWorkspaceResponse res = sdk.sdk.updateWorkspace(req);

            if (res.updateWorkspaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkspaceAuthentication

<p>Use this operation to define the identity provider (IdP) that this workspace authenticates users from, using SAML. You can also map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the <code>Admin</code> and <code>Editor</code> roles in the workspace.</p> <note> <p>Changes to the authentication method for a workspace may take a few minutes to take effect.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkspaceAuthenticationRequest;
import org.openapis.openapi.models.operations.UpdateWorkspaceAuthenticationRequestBody;
import org.openapis.openapi.models.operations.UpdateWorkspaceAuthenticationRequestBodySamlConfiguration;
import org.openapis.openapi.models.operations.UpdateWorkspaceAuthenticationResponse;
import org.openapis.openapi.models.shared.AssertionAttributes;
import org.openapis.openapi.models.shared.AuthenticationProviderTypesEnum;
import org.openapis.openapi.models.shared.IdpMetadata;
import org.openapis.openapi.models.shared.RoleValues;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkspaceAuthenticationRequest req = new UpdateWorkspaceAuthenticationRequest(                new UpdateWorkspaceAuthenticationRequestBody(                new org.openapis.openapi.models.shared.AuthenticationProviderTypesEnum[]{{
                                                add(AuthenticationProviderTypesEnum.SAML),
                                            }}) {{
                                samlConfiguration = new UpdateWorkspaceAuthenticationRequestBodySamlConfiguration() {{
                                    allowedOrganizations = new String[]{{
                                        add("fuga"),
                                    }};
                                    assertionAttributes = new AssertionAttributes() {{
                                        email = "Drew32@yahoo.com";
                                        groups = "nisi";
                                        login = "fugit";
                                        name = "Eugene Dibbert";
                                        org = "occaecati";
                                        role = "atque";
                                    }};;
                                    idpMetadata = new IdpMetadata() {{
                                        url = "et";
                                        xml = "esse";
                                    }};;
                                    loginValidityDuration = 910545L;
                                    roleValues = new RoleValues() {{
                                        admin = new String[]{{
                                            add("veritatis"),
                                            add("esse"),
                                            add("quod"),
                                            add("nam"),
                                        }};
                                        editor = new String[]{{
                                            add("aliquid"),
                                            add("quasi"),
                                            add("saepe"),
                                            add("vel"),
                                        }};
                                    }};;
                                }};;
                            }};, "harum") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "occaecati";
                xAmzDate = "minima";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "sit";
            }};            

            UpdateWorkspaceAuthenticationResponse res = sdk.sdk.updateWorkspaceAuthentication(req);

            if (res.updateWorkspaceAuthenticationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkspaceConfiguration

Updates the configuration string for the given workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkspaceConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateWorkspaceConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateWorkspaceConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkspaceConfigurationRequest req = new UpdateWorkspaceConfigurationRequest(                new UpdateWorkspaceConfigurationRequestBody("tempore");, "adipisci") {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "consequatur";
                xAmzDate = "minus";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consectetur";
            }};            

            UpdateWorkspaceConfigurationResponse res = sdk.sdk.updateWorkspaceConfiguration(req);

            if (res.updateWorkspaceConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
