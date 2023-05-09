# SDK

## Overview

<p>This is the <i>Resource Access Manager API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in RAM. RAM is a service that helps you securely share your Amazon Web Services resources to other Amazon Web Services accounts. If you use Organizations to manage your accounts, then you can share your resources with your entire organization or to organizational units (OUs). For supported resource types, you can also share resources with individual Identity and Access Management (IAM) roles and users. </p> <p>To learn more about RAM, see the following resources:</p> <ul> <li> <p> <a href="http://aws.amazon.com/ram">Resource Access Manager product page</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/userguide/">Resource Access Manager User Guide</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ram/>
### Available Operations

* [acceptResourceShareInvitation](#acceptresourceshareinvitation) - Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.
* [associateResourceShare](#associateresourceshare) - Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share. 
* [associateResourceSharePermission](#associateresourcesharepermission) - Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.
* [createPermission](#createpermission) - Creates a customer managed permission for a specified resource type that you can attach to resource shares. It is created in the Amazon Web Services Region in which you call the operation.
* [createPermissionVersion](#createpermissionversion) - <p>Creates a new version of the specified customer managed permission. The new version is automatically set as the default version of the customer managed permission. New resource shares automatically use the default permission. Existing resource shares continue to use their original permission versions, but you can use <a>ReplacePermissionAssociations</a> to update them.</p> <p>If the specified customer managed permission already has the maximum of 5 versions, then you must delete one of the existing versions before you can create a new one.</p>
* [createResourceShare](#createresourceshare) - <p>Creates a resource share. You can provide a list of the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.</p> <note> <p>Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.</p> </note>
* [deletePermission](#deletepermission) - Deletes the specified customer managed permission in the Amazon Web Services Region in which you call this operation. You can delete a customer managed permission only if it isn't attached to any resource share. The operation deletes all versions associated with the customer managed permission.
* [deletePermissionVersion](#deletepermissionversion) - <p>Deletes one version of a customer managed permission. The version you specify must not be attached to any resource share and must not be the default version for the permission.</p> <p>If a customer managed permission has the maximum of 5 versions, then you must delete at least one version before you can create another.</p>
* [deleteResourceShare](#deleteresourceshare) - <p>Deletes the specified resource share.</p> <important> <p>This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources through this resource share.</p> </important>
* [disassociateResourceShare](#disassociateresourceshare) - Removes the specified principals or resources from participating in the specified resource share.
* [disassociateResourceSharePermission](#disassociateresourcesharepermission) - Removes a managed permission from a resource share. Permission changes take effect immediately. You can remove a managed permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.
* [enableSharingWithAwsOrganization](#enablesharingwithawsorganization) - <p>Enables resource sharing within your organization in Organizations. This operation creates a service-linked role called <code>AWSServiceRoleForResourceAccessManager</code> that has the IAM managed policy named AWSResourceAccessManagerServiceRolePolicy attached. This role permits RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in the calling account's organization by specifying the organization ID, or all of the accounts in an organizational unit (OU) by specifying the OU ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM roles and users.</p> <p>You must call this operation from an IAM role or user in the organization's management account.</p> <p/>
* [getPermission](#getpermission) - Retrieves the contents of a managed permission in JSON format.
* [getResourcePolicies](#getresourcepolicies) - Retrieves the resource policies for the specified resources that you own and have shared.
* [getResourceShareAssociations](#getresourceshareassociations) - Retrieves the lists of resources and principals that associated for resource shares that you own.
* [getResourceShareInvitations](#getresourceshareinvitations) - Retrieves details about invitations that you have received for resource shares.
* [getResourceShares](#getresourceshares) - Retrieves details about the resource shares that you own or that are shared with you.
* [listPendingInvitationResources](#listpendinginvitationresources) - Lists the resources in a resource share that is shared with you but for which the invitation is still <code>PENDING</code>. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.
* [listPermissionAssociations](#listpermissionassociations) - Lists information about the managed permission and its associations to any resource shares that use this managed permission. This lets you see which resource shares use which versions of the specified managed permission.
* [listPermissionVersions](#listpermissionversions) - Lists the available versions of the specified RAM permission.
* [listPermissions](#listpermissions) - Retrieves a list of available RAM permissions that you can use for the supported resource types. 
* [listPrincipals](#listprincipals) - Lists the principals that you are sharing resources with or that are sharing resources with you.
* [listReplacePermissionAssociationsWork](#listreplacepermissionassociationswork) - Retrieves the current status of the asynchronous tasks performed by RAM when you perform the <a>ReplacePermissionAssociationsWork</a> operation.
* [listResourceSharePermissions](#listresourcesharepermissions) - Lists the RAM permissions that are associated with a resource share.
* [listResourceTypes](#listresourcetypes) - Lists the resource types that can be shared by RAM.
* [listResources](#listresources) - Lists the resources that you added to a resource share or the resources that are shared with you.
* [promotePermissionCreatedFromPolicy](#promotepermissioncreatedfrompolicy) - <p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation creates a separate, fully manageable customer managed permission that has the same IAM permissions as the original resource-based policy. You can associate this customer managed permission to any resource shares.</p> <p>Before you use <a>PromoteResourceShareCreatedFromPolicy</a>, you should first run this operation to ensure that you have an appropriate customer managed permission that can be associated with the promoted resource share.</p> <note> <ul> <li> <p>The original <code>CREATED_FROM_POLICY</code> policy isn't deleted, and resource shares using that original policy aren't automatically updated.</p> </li> <li> <p>You can't modify a <code>CREATED_FROM_POLICY</code> resource share so you can't associate the new customer managed permission by using <code>ReplacePermsissionAssociations</code>. However, if you use <a>PromoteResourceShareCreatedFromPolicy</a>, that operation automatically associates the fully manageable customer managed permission to the newly promoted <code>STANDARD</code> resource share.</p> </li> <li> <p>After you promote a resource share, if the original <code>CREATED_FROM_POLICY</code> managed permission has no other associations to A resource share, then RAM automatically deletes it.</p> </li> </ul> </note>
* [promoteResourceShareCreatedFromPolicy](#promoteresourcesharecreatedfrompolicy) - <p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation promotes the resource share to a <code>STANDARD</code> resource share that is fully manageable in RAM. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.</p> <important> <p>Before you perform this operation, you should first run <a>PromotePermissionCreatedFromPolicy</a>to ensure that you have an appropriate customer managed permission that can be associated with this resource share after its is promoted. If this operation can't find a managed permission that exactly matches the existing <code>CREATED_FROM_POLICY</code> permission, then this operation fails.</p> </important>
* [rejectResourceShareInvitation](#rejectresourceshareinvitation) - Rejects an invitation to a resource share from another Amazon Web Services account.
* [replacePermissionAssociations](#replacepermissionassociations) - <p>Updates all resource shares that use a managed permission to a different managed permission. This operation always applies the default version of the target managed permission. You can optionally specify that the update applies to only resource shares that currently use a specified version. This enables you to update to the latest version, without changing the which managed permission is used.</p> <p>You can use this operation to update all of your resource shares to use the current default version of the permission by specifying the same value for the <code>fromPermissionArn</code> and <code>toPermissionArn</code> parameters.</p> <p>You can use the optional <code>fromPermissionVersion</code> parameter to update only those resources that use a specified version of the managed permission to the new managed permission.</p> <important> <p>To successfully perform this operation, you must have permission to update the resource-based policy on all affected resource types.</p> </important>
* [setDefaultPermissionVersion](#setdefaultpermissionversion) - Designates the specified version number as the default version for the specified customer managed permission. New resource shares automatically use this new default permission. Existing resource shares continue to use their original permission version, but you can use <a>ReplacePermissionAssociations</a> to update them.
* [tagResource](#tagresource) - <p>Adds the specified tag keys and values to a resource share or managed permission. If you choose a resource share, the tags are attached to only the resource share, not to the resources that are in the resource share.</p> <p>The tags on a managed permission are the same for all versions of the managed permission.</p>
* [untagResource](#untagresource) - Removes the specified tag key and value pairs from the specified resource share or managed permission.
* [updateResourceShare](#updateresourceshare) - Modifies some of the properties of the specified resource share.

## acceptResourceShareInvitation

Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptResourceShareInvitationRequest;
import org.openapis.openapi.models.operations.AcceptResourceShareInvitationRequestBody;
import org.openapis.openapi.models.operations.AcceptResourceShareInvitationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptResourceShareInvitationRequest req = new AcceptResourceShareInvitationRequest(                new AcceptResourceShareInvitationRequestBody("suscipit") {{
                                clientToken = "iure";
                            }};) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AcceptResourceShareInvitationResponse res = sdk.sdk.acceptResourceShareInvitation(req);

            if (res.acceptResourceShareInvitationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateResourceShare

Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateResourceShareRequest;
import org.openapis.openapi.models.operations.AssociateResourceShareRequestBody;
import org.openapis.openapi.models.operations.AssociateResourceShareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateResourceShareRequest req = new AssociateResourceShareRequest(                new AssociateResourceShareRequestBody("placeat") {{
                                clientToken = "voluptatum";
                                principals = new String[]{{
                                    add("excepturi"),
                                    add("nisi"),
                                }};
                                resourceArns = new String[]{{
                                    add("temporibus"),
                                    add("ab"),
                                    add("quis"),
                                    add("veritatis"),
                                }};
                            }};) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            AssociateResourceShareResponse res = sdk.sdk.associateResourceShare(req);

            if (res.associateResourceShareResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateResourceSharePermission

Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateResourceSharePermissionRequest;
import org.openapis.openapi.models.operations.AssociateResourceSharePermissionRequestBody;
import org.openapis.openapi.models.operations.AssociateResourceSharePermissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateResourceSharePermissionRequest req = new AssociateResourceSharePermissionRequest(                new AssociateResourceSharePermissionRequestBody("at", "maiores") {{
                                clientToken = "molestiae";
                                permissionVersion = 799159L;
                                replace = false;
                            }};) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "esse";
                xAmzCredential = "totam";
                xAmzDate = "porro";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "nam";
            }};            

            AssociateResourceSharePermissionResponse res = sdk.sdk.associateResourceSharePermission(req);

            if (res.associateResourceSharePermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPermission

Creates a customer managed permission for a specified resource type that you can attach to resource shares. It is created in the Amazon Web Services Region in which you call the operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePermissionRequest;
import org.openapis.openapi.models.operations.CreatePermissionRequestBody;
import org.openapis.openapi.models.operations.CreatePermissionResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePermissionRequest req = new CreatePermissionRequest(                new CreatePermissionRequestBody("occaecati", "fugit", "deleniti") {{
                                clientToken = "hic";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "totam";
                                        value = "beatae";
                                    }}),
                                    add(new Tag() {{
                                        key = "commodi";
                                        value = "molestiae";
                                    }}),
                                    add(new Tag() {{
                                        key = "modi";
                                        value = "qui";
                                    }}),
                                    add(new Tag() {{
                                        key = "impedit";
                                        value = "cum";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            CreatePermissionResponse res = sdk.sdk.createPermission(req);

            if (res.createPermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPermissionVersion

<p>Creates a new version of the specified customer managed permission. The new version is automatically set as the default version of the customer managed permission. New resource shares automatically use the default permission. Existing resource shares continue to use their original permission versions, but you can use <a>ReplacePermissionAssociations</a> to update them.</p> <p>If the specified customer managed permission already has the maximum of 5 versions, then you must delete one of the existing versions before you can create a new one.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePermissionVersionRequest;
import org.openapis.openapi.models.operations.CreatePermissionVersionRequestBody;
import org.openapis.openapi.models.operations.CreatePermissionVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePermissionVersionRequest req = new CreatePermissionVersionRequest(                new CreatePermissionVersionRequestBody("iste", "dolor") {{
                                clientToken = "natus";
                            }};) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "saepe";
                xAmzDate = "fuga";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "iste";
            }};            

            CreatePermissionVersionResponse res = sdk.sdk.createPermissionVersion(req);

            if (res.createPermissionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createResourceShare

<p>Creates a resource share. You can provide a list of the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.</p> <note> <p>Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateResourceShareRequest;
import org.openapis.openapi.models.operations.CreateResourceShareRequestBody;
import org.openapis.openapi.models.operations.CreateResourceShareResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateResourceShareRequest req = new CreateResourceShareRequest(                new CreateResourceShareRequestBody("saepe") {{
                                allowExternalPrincipals = false;
                                clientToken = "quidem";
                                permissionArns = new String[]{{
                                    add("ipsa"),
                                }};
                                principals = new String[]{{
                                    add("est"),
                                    add("mollitia"),
                                    add("laborum"),
                                    add("dolores"),
                                }};
                                resourceArns = new String[]{{
                                    add("corporis"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "nobis";
                                        value = "enim";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            CreateResourceShareResponse res = sdk.sdk.createResourceShare(req);

            if (res.createResourceShareResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePermission

Deletes the specified customer managed permission in the Amazon Web Services Region in which you call this operation. You can delete a customer managed permission only if it isn't attached to any resource share. The operation deletes all versions associated with the customer managed permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePermissionRequest;
import org.openapis.openapi.models.operations.DeletePermissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePermissionRequest req = new DeletePermissionRequest("sapiente") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "dolorem";
                xAmzDate = "culpa";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "mollitia";
                clientToken = "occaecati";
            }};            

            DeletePermissionResponse res = sdk.sdk.deletePermission(req);

            if (res.deletePermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePermissionVersion

<p>Deletes one version of a customer managed permission. The version you specify must not be attached to any resource share and must not be the default version for the permission.</p> <p>If a customer managed permission has the maximum of 5 versions, then you must delete at least one version before you can create another.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePermissionVersionRequest;
import org.openapis.openapi.models.operations.DeletePermissionVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePermissionVersionRequest req = new DeletePermissionVersionRequest("commodi", 466311L) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "velit";
                xAmzCredential = "error";
                xAmzDate = "quia";
                xAmzSecurityToken = "quis";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "laborum";
                clientToken = "animi";
            }};            

            DeletePermissionVersionResponse res = sdk.sdk.deletePermissionVersion(req);

            if (res.deletePermissionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourceShare

<p>Deletes the specified resource share.</p> <important> <p>This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources through this resource share.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourceShareRequest;
import org.openapis.openapi.models.operations.DeleteResourceShareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourceShareRequest req = new DeleteResourceShareRequest("odit") {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "tenetur";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "id";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "aut";
                clientToken = "quasi";
            }};            

            DeleteResourceShareResponse res = sdk.sdk.deleteResourceShare(req);

            if (res.deleteResourceShareResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateResourceShare

Removes the specified principals or resources from participating in the specified resource share.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateResourceShareRequest;
import org.openapis.openapi.models.operations.DisassociateResourceShareRequestBody;
import org.openapis.openapi.models.operations.DisassociateResourceShareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateResourceShareRequest req = new DisassociateResourceShareRequest(                new DisassociateResourceShareRequestBody("temporibus") {{
                                clientToken = "laborum";
                                principals = new String[]{{
                                    add("reiciendis"),
                                }};
                                resourceArns = new String[]{{
                                    add("vero"),
                                    add("nihil"),
                                    add("praesentium"),
                                    add("voluptatibus"),
                                }};
                            }};) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "voluptate";
                xAmzDate = "cum";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            DisassociateResourceShareResponse res = sdk.sdk.disassociateResourceShare(req);

            if (res.disassociateResourceShareResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateResourceSharePermission

Removes a managed permission from a resource share. Permission changes take effect immediately. You can remove a managed permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateResourceSharePermissionRequest;
import org.openapis.openapi.models.operations.DisassociateResourceSharePermissionRequestBody;
import org.openapis.openapi.models.operations.DisassociateResourceSharePermissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateResourceSharePermissionRequest req = new DisassociateResourceSharePermissionRequest(                new DisassociateResourceSharePermissionRequestBody("maiores", "dicta") {{
                                clientToken = "corporis";
                            }};) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "dicta";
                xAmzDate = "harum";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "commodi";
            }};            

            DisassociateResourceSharePermissionResponse res = sdk.sdk.disassociateResourceSharePermission(req);

            if (res.disassociateResourceSharePermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableSharingWithAwsOrganization

<p>Enables resource sharing within your organization in Organizations. This operation creates a service-linked role called <code>AWSServiceRoleForResourceAccessManager</code> that has the IAM managed policy named AWSResourceAccessManagerServiceRolePolicy attached. This role permits RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in the calling account's organization by specifying the organization ID, or all of the accounts in an organizational unit (OU) by specifying the OU ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM roles and users.</p> <p>You must call this operation from an IAM role or user in the organization's management account.</p> <p/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableSharingWithAwsOrganizationRequest;
import org.openapis.openapi.models.operations.EnableSharingWithAwsOrganizationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableSharingWithAwsOrganizationRequest req = new EnableSharingWithAwsOrganizationRequest() {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quidem";
                xAmzDate = "molestias";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "modi";
            }};            

            EnableSharingWithAwsOrganizationResponse res = sdk.sdk.enableSharingWithAwsOrganization(req);

            if (res.enableSharingWithAwsOrganizationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPermission

Retrieves the contents of a managed permission in JSON format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPermissionRequest;
import org.openapis.openapi.models.operations.GetPermissionRequestBody;
import org.openapis.openapi.models.operations.GetPermissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPermissionRequest req = new GetPermissionRequest(                new GetPermissionRequestBody("rem") {{
                                permissionVersion = 916723L;
                            }};) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "sint";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "enim";
            }};            

            GetPermissionResponse res = sdk.sdk.getPermission(req);

            if (res.getPermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcePolicies

Retrieves the resource policies for the specified resources that you own and have shared.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcePoliciesRequest;
import org.openapis.openapi.models.operations.GetResourcePoliciesRequestBody;
import org.openapis.openapi.models.operations.GetResourcePoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourcePoliciesRequest req = new GetResourcePoliciesRequest(                new GetResourcePoliciesRequestBody(                new String[]{{
                                                add("quibusdam"),
                                                add("explicabo"),
                                                add("deserunt"),
                                            }}) {{
                                maxResults = 716327L;
                                nextToken = "quibusdam";
                                principal = "labore";
                            }};) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "aliquid";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "quos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "magni";
                maxResults = "assumenda";
                nextToken = "ipsam";
            }};            

            GetResourcePoliciesResponse res = sdk.sdk.getResourcePolicies(req);

            if (res.getResourcePoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourceShareAssociations

Retrieves the lists of resources and principals that associated for resource shares that you own.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceShareAssociationsRequest;
import org.openapis.openapi.models.operations.GetResourceShareAssociationsRequestBody;
import org.openapis.openapi.models.operations.GetResourceShareAssociationsRequestBodyAssociationStatusEnum;
import org.openapis.openapi.models.operations.GetResourceShareAssociationsRequestBodyAssociationTypeEnum;
import org.openapis.openapi.models.operations.GetResourceShareAssociationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourceShareAssociationsRequest req = new GetResourceShareAssociationsRequest(                new GetResourceShareAssociationsRequestBody(GetResourceShareAssociationsRequestBodyAssociationTypeEnum.PRINCIPAL) {{
                                associationStatus = GetResourceShareAssociationsRequestBodyAssociationStatusEnum.DISASSOCIATING;
                                maxResults = 569618L;
                                nextToken = "tempora";
                                principal = "facilis";
                                resourceArn = "tempore";
                                resourceShareArns = new String[]{{
                                    add("delectus"),
                                    add("eum"),
                                }};
                            }};) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "sint";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "provident";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "sint";
                maxResults = "officia";
                nextToken = "dolor";
            }};            

            GetResourceShareAssociationsResponse res = sdk.sdk.getResourceShareAssociations(req);

            if (res.getResourceShareAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourceShareInvitations

Retrieves details about invitations that you have received for resource shares.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceShareInvitationsRequest;
import org.openapis.openapi.models.operations.GetResourceShareInvitationsRequestBody;
import org.openapis.openapi.models.operations.GetResourceShareInvitationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourceShareInvitationsRequest req = new GetResourceShareInvitationsRequest(                new GetResourceShareInvitationsRequestBody() {{
                                maxResults = 952749L;
                                nextToken = "dolorum";
                                resourceShareArns = new String[]{{
                                    add("in"),
                                    add("illum"),
                                }};
                                resourceShareInvitationArns = new String[]{{
                                    add("rerum"),
                                    add("dicta"),
                                    add("magnam"),
                                    add("cumque"),
                                }};
                            }};) {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "ea";
                xAmzCredential = "aliquid";
                xAmzDate = "laborum";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "non";
                xAmzSignedHeaders = "occaecati";
                maxResults = "enim";
                nextToken = "accusamus";
            }};            

            GetResourceShareInvitationsResponse res = sdk.sdk.getResourceShareInvitations(req);

            if (res.getResourceShareInvitationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourceShares

Retrieves details about the resource shares that you own or that are shared with you.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceSharesRequest;
import org.openapis.openapi.models.operations.GetResourceSharesRequestBody;
import org.openapis.openapi.models.operations.GetResourceSharesRequestBodyResourceOwnerEnum;
import org.openapis.openapi.models.operations.GetResourceSharesRequestBodyResourceShareStatusEnum;
import org.openapis.openapi.models.operations.GetResourceSharesResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourceSharesRequest req = new GetResourceSharesRequest(                new GetResourceSharesRequestBody(GetResourceSharesRequestBodyResourceOwnerEnum.OTHER_ACCOUNTS) {{
                                maxResults = 588465L;
                                name = "Lynn Kuvalis";
                                nextToken = "amet";
                                permissionArn = "deserunt";
                                permissionVersion = 394869L;
                                resourceShareArns = new String[]{{
                                    add("natus"),
                                    add("omnis"),
                                }};
                                resourceShareStatus = GetResourceSharesRequestBodyResourceShareStatusEnum.FAILED;
                                tagFilters = new org.openapis.openapi.models.shared.TagFilter[]{{
                                    add(new TagFilter() {{
                                        tagKey = "nihil";
                                        tagValues = new String[]{{
                                            add("distinctio"),
                                            add("id"),
                                        }};
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "suscipit";
                xAmzDate = "natus";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "vero";
                maxResults = "aspernatur";
                nextToken = "architecto";
            }};            

            GetResourceSharesResponse res = sdk.sdk.getResourceShares(req);

            if (res.getResourceSharesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPendingInvitationResources

Lists the resources in a resource share that is shared with you but for which the invitation is still <code>PENDING</code>. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPendingInvitationResourcesRequest;
import org.openapis.openapi.models.operations.ListPendingInvitationResourcesRequestBody;
import org.openapis.openapi.models.operations.ListPendingInvitationResourcesRequestBodyResourceRegionScopeEnum;
import org.openapis.openapi.models.operations.ListPendingInvitationResourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPendingInvitationResourcesRequest req = new ListPendingInvitationResourcesRequest(                new ListPendingInvitationResourcesRequestBody("et") {{
                                maxResults = 569965L;
                                nextToken = "ullam";
                                resourceRegionScope = ListPendingInvitationResourcesRequestBodyResourceRegionScopeEnum.REGIONAL;
                            }};) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "sint";
                xAmzCredential = "accusantium";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "ad";
                maxResults = "eum";
                nextToken = "dolor";
            }};            

            ListPendingInvitationResourcesResponse res = sdk.sdk.listPendingInvitationResources(req);

            if (res.listPendingInvitationResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPermissionAssociations

Lists information about the managed permission and its associations to any resource shares that use this managed permission. This lets you see which resource shares use which versions of the specified managed permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPermissionAssociationsRequest;
import org.openapis.openapi.models.operations.ListPermissionAssociationsRequestBody;
import org.openapis.openapi.models.operations.ListPermissionAssociationsRequestBodyAssociationStatusEnum;
import org.openapis.openapi.models.operations.ListPermissionAssociationsRequestBodyFeatureSetEnum;
import org.openapis.openapi.models.operations.ListPermissionAssociationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPermissionAssociationsRequest req = new ListPermissionAssociationsRequest(                new ListPermissionAssociationsRequestBody() {{
                                associationStatus = ListPermissionAssociationsRequestBodyAssociationStatusEnum.ASSOCIATING;
                                defaultVersion = false;
                                featureSet = ListPermissionAssociationsRequestBodyFeatureSetEnum.PROMOTING_TO_STANDARD;
                                maxResults = 97260L;
                                nextToken = "iure";
                                permissionArn = "doloribus";
                                permissionVersion = 891924L;
                                resourceType = "eius";
                            }};) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "facilis";
                xAmzDate = "in";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "repudiandae";
                maxResults = "ullam";
                nextToken = "expedita";
            }};            

            ListPermissionAssociationsResponse res = sdk.sdk.listPermissionAssociations(req);

            if (res.listPermissionAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPermissionVersions

Lists the available versions of the specified RAM permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPermissionVersionsRequest;
import org.openapis.openapi.models.operations.ListPermissionVersionsRequestBody;
import org.openapis.openapi.models.operations.ListPermissionVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPermissionVersionsRequest req = new ListPermissionVersionsRequest(                new ListPermissionVersionsRequestBody("repellat") {{
                                maxResults = 841140L;
                                nextToken = "sed";
                            }};) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "accusantium";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "magni";
                maxResults = "sunt";
                nextToken = "quo";
            }};            

            ListPermissionVersionsResponse res = sdk.sdk.listPermissionVersions(req);

            if (res.listPermissionVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPermissions

Retrieves a list of available RAM permissions that you can use for the supported resource types. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPermissionsRequest;
import org.openapis.openapi.models.operations.ListPermissionsRequestBody;
import org.openapis.openapi.models.operations.ListPermissionsRequestBodyPermissionTypeEnum;
import org.openapis.openapi.models.operations.ListPermissionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPermissionsRequest req = new ListPermissionsRequest(                new ListPermissionsRequestBody() {{
                                maxResults = 864934L;
                                nextToken = "maxime";
                                permissionType = ListPermissionsRequestBodyPermissionTypeEnum.AWS_MANAGED;
                                resourceType = "excepturi";
                            }};) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "ea";
                xAmzCredential = "accusantium";
                xAmzDate = "ab";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "ipsam";
                maxResults = "voluptate";
                nextToken = "autem";
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

## listPrincipals

Lists the principals that you are sharing resources with or that are sharing resources with you.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPrincipalsRequest;
import org.openapis.openapi.models.operations.ListPrincipalsRequestBody;
import org.openapis.openapi.models.operations.ListPrincipalsRequestBodyResourceOwnerEnum;
import org.openapis.openapi.models.operations.ListPrincipalsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPrincipalsRequest req = new ListPrincipalsRequest(                new ListPrincipalsRequestBody(ListPrincipalsRequestBodyResourceOwnerEnum.SELF) {{
                                maxResults = 866383L;
                                nextToken = "nemo";
                                principals = new String[]{{
                                    add("perferendis"),
                                    add("fugiat"),
                                    add("amet"),
                                    add("aut"),
                                }};
                                resourceArn = "cumque";
                                resourceShareArns = new String[]{{
                                    add("hic"),
                                    add("libero"),
                                }};
                                resourceType = "nobis";
                            }};) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "quis";
                xAmzCredential = "totam";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "nesciunt";
                maxResults = "eos";
                nextToken = "perferendis";
            }};            

            ListPrincipalsResponse res = sdk.sdk.listPrincipals(req);

            if (res.listPrincipalsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReplacePermissionAssociationsWork

Retrieves the current status of the asynchronous tasks performed by RAM when you perform the <a>ReplacePermissionAssociationsWork</a> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReplacePermissionAssociationsWorkRequest;
import org.openapis.openapi.models.operations.ListReplacePermissionAssociationsWorkRequestBody;
import org.openapis.openapi.models.operations.ListReplacePermissionAssociationsWorkRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.ListReplacePermissionAssociationsWorkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReplacePermissionAssociationsWorkRequest req = new ListReplacePermissionAssociationsWorkRequest(                new ListReplacePermissionAssociationsWorkRequestBody() {{
                                maxResults = 793698L;
                                nextToken = "quam";
                                status = ListReplacePermissionAssociationsWorkRequestBodyStatusEnum.IN_PROGRESS;
                                workIds = new String[]{{
                                    add("nostrum"),
                                    add("hic"),
                                    add("recusandae"),
                                    add("omnis"),
                                }};
                            }};) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "perspiciatis";
                xAmzCredential = "voluptatem";
                xAmzDate = "porro";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "error";
                maxResults = "eaque";
                nextToken = "occaecati";
            }};            

            ListReplacePermissionAssociationsWorkResponse res = sdk.sdk.listReplacePermissionAssociationsWork(req);

            if (res.listReplacePermissionAssociationsWorkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourceSharePermissions

Lists the RAM permissions that are associated with a resource share.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourceSharePermissionsRequest;
import org.openapis.openapi.models.operations.ListResourceSharePermissionsRequestBody;
import org.openapis.openapi.models.operations.ListResourceSharePermissionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourceSharePermissionsRequest req = new ListResourceSharePermissionsRequest(                new ListResourceSharePermissionsRequestBody("adipisci") {{
                                maxResults = 992397L;
                                nextToken = "earum";
                            }};) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nobis";
                maxResults = "libero";
                nextToken = "delectus";
            }};            

            ListResourceSharePermissionsResponse res = sdk.sdk.listResourceSharePermissions(req);

            if (res.listResourceSharePermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourceTypes

Lists the resource types that can be shared by RAM.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourceTypesRequest;
import org.openapis.openapi.models.operations.ListResourceTypesRequestBody;
import org.openapis.openapi.models.operations.ListResourceTypesRequestBodyResourceRegionScopeEnum;
import org.openapis.openapi.models.operations.ListResourceTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourceTypesRequest req = new ListResourceTypesRequest(                new ListResourceTypesRequestBody() {{
                                maxResults = 554242L;
                                nextToken = "aliquid";
                                resourceRegionScope = ListResourceTypesRequestBodyResourceRegionScopeEnum.ALL;
                            }};) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "qui";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "hic";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "cum";
                maxResults = "voluptate";
                nextToken = "dignissimos";
            }};            

            ListResourceTypesResponse res = sdk.sdk.listResourceTypes(req);

            if (res.listResourceTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResources

Lists the resources that you added to a resource share or the resources that are shared with you.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourcesRequest;
import org.openapis.openapi.models.operations.ListResourcesRequestBody;
import org.openapis.openapi.models.operations.ListResourcesRequestBodyResourceOwnerEnum;
import org.openapis.openapi.models.operations.ListResourcesRequestBodyResourceRegionScopeEnum;
import org.openapis.openapi.models.operations.ListResourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourcesRequest req = new ListResourcesRequest(                new ListResourcesRequestBody(ListResourcesRequestBodyResourceOwnerEnum.SELF) {{
                                maxResults = 680545L;
                                nextToken = "numquam";
                                principal = "veritatis";
                                resourceArns = new String[]{{
                                    add("ipsa"),
                                }};
                                resourceRegionScope = ListResourcesRequestBodyResourceRegionScopeEnum.REGIONAL;
                                resourceShareArns = new String[]{{
                                    add("quaerat"),
                                    add("accusamus"),
                                }};
                                resourceType = "quidem";
                            }};) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "natus";
                xAmzDate = "eos";
                xAmzSecurityToken = "atque";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "fugiat";
                maxResults = "ab";
                nextToken = "soluta";
            }};            

            ListResourcesResponse res = sdk.sdk.listResources(req);

            if (res.listResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## promotePermissionCreatedFromPolicy

<p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation creates a separate, fully manageable customer managed permission that has the same IAM permissions as the original resource-based policy. You can associate this customer managed permission to any resource shares.</p> <p>Before you use <a>PromoteResourceShareCreatedFromPolicy</a>, you should first run this operation to ensure that you have an appropriate customer managed permission that can be associated with the promoted resource share.</p> <note> <ul> <li> <p>The original <code>CREATED_FROM_POLICY</code> policy isn't deleted, and resource shares using that original policy aren't automatically updated.</p> </li> <li> <p>You can't modify a <code>CREATED_FROM_POLICY</code> resource share so you can't associate the new customer managed permission by using <code>ReplacePermsissionAssociations</code>. However, if you use <a>PromoteResourceShareCreatedFromPolicy</a>, that operation automatically associates the fully manageable customer managed permission to the newly promoted <code>STANDARD</code> resource share.</p> </li> <li> <p>After you promote a resource share, if the original <code>CREATED_FROM_POLICY</code> managed permission has no other associations to A resource share, then RAM automatically deletes it.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PromotePermissionCreatedFromPolicyRequest;
import org.openapis.openapi.models.operations.PromotePermissionCreatedFromPolicyRequestBody;
import org.openapis.openapi.models.operations.PromotePermissionCreatedFromPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PromotePermissionCreatedFromPolicyRequest req = new PromotePermissionCreatedFromPolicyRequest(                new PromotePermissionCreatedFromPolicyRequestBody("iusto", "voluptate") {{
                                clientToken = "dolorum";
                            }};) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "necessitatibus";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "ipsum";
            }};            

            PromotePermissionCreatedFromPolicyResponse res = sdk.sdk.promotePermissionCreatedFromPolicy(req);

            if (res.promotePermissionCreatedFromPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## promoteResourceShareCreatedFromPolicy

<p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation promotes the resource share to a <code>STANDARD</code> resource share that is fully manageable in RAM. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.</p> <important> <p>Before you perform this operation, you should first run <a>PromotePermissionCreatedFromPolicy</a>to ensure that you have an appropriate customer managed permission that can be associated with this resource share after its is promoted. If this operation can't find a managed permission that exactly matches the existing <code>CREATED_FROM_POLICY</code> permission, then this operation fails.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PromoteResourceShareCreatedFromPolicyRequest;
import org.openapis.openapi.models.operations.PromoteResourceShareCreatedFromPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PromoteResourceShareCreatedFromPolicyRequest req = new PromoteResourceShareCreatedFromPolicyRequest("id") {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "eius";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "accusamus";
            }};            

            PromoteResourceShareCreatedFromPolicyResponse res = sdk.sdk.promoteResourceShareCreatedFromPolicy(req);

            if (res.promoteResourceShareCreatedFromPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rejectResourceShareInvitation

Rejects an invitation to a resource share from another Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RejectResourceShareInvitationRequest;
import org.openapis.openapi.models.operations.RejectResourceShareInvitationRequestBody;
import org.openapis.openapi.models.operations.RejectResourceShareInvitationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RejectResourceShareInvitationRequest req = new RejectResourceShareInvitationRequest(                new RejectResourceShareInvitationRequestBody("saepe") {{
                                clientToken = "suscipit";
                            }};) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "provident";
                xAmzCredential = "minima";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "totam";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "alias";
            }};            

            RejectResourceShareInvitationResponse res = sdk.sdk.rejectResourceShareInvitation(req);

            if (res.rejectResourceShareInvitationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## replacePermissionAssociations

<p>Updates all resource shares that use a managed permission to a different managed permission. This operation always applies the default version of the target managed permission. You can optionally specify that the update applies to only resource shares that currently use a specified version. This enables you to update to the latest version, without changing the which managed permission is used.</p> <p>You can use this operation to update all of your resource shares to use the current default version of the permission by specifying the same value for the <code>fromPermissionArn</code> and <code>toPermissionArn</code> parameters.</p> <p>You can use the optional <code>fromPermissionVersion</code> parameter to update only those resources that use a specified version of the managed permission to the new managed permission.</p> <important> <p>To successfully perform this operation, you must have permission to update the resource-based policy on all affected resource types.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReplacePermissionAssociationsRequest;
import org.openapis.openapi.models.operations.ReplacePermissionAssociationsRequestBody;
import org.openapis.openapi.models.operations.ReplacePermissionAssociationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReplacePermissionAssociationsRequest req = new ReplacePermissionAssociationsRequest(                new ReplacePermissionAssociationsRequestBody("quaerat", "tempora") {{
                                clientToken = "vel";
                                fromPermissionVersion = 798047L;
                            }};) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "qui";
                xAmzCredential = "dolorum";
                xAmzDate = "a";
                xAmzSecurityToken = "esse";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "iusto";
            }};            

            ReplacePermissionAssociationsResponse res = sdk.sdk.replacePermissionAssociations(req);

            if (res.replacePermissionAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setDefaultPermissionVersion

Designates the specified version number as the default version for the specified customer managed permission. New resource shares automatically use this new default permission. Existing resource shares continue to use their original permission version, but you can use <a>ReplacePermissionAssociations</a> to update them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetDefaultPermissionVersionRequest;
import org.openapis.openapi.models.operations.SetDefaultPermissionVersionRequestBody;
import org.openapis.openapi.models.operations.SetDefaultPermissionVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetDefaultPermissionVersionRequest req = new SetDefaultPermissionVersionRequest(                new SetDefaultPermissionVersionRequestBody("quisquam", 947371L) {{
                                clientToken = "amet";
                            }};) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "numquam";
                xAmzDate = "enim";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "totam";
            }};            

            SetDefaultPermissionVersionResponse res = sdk.sdk.setDefaultPermissionVersion(req);

            if (res.setDefaultPermissionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Adds the specified tag keys and values to a resource share or managed permission. If you choose a resource share, the tags are attached to only the resource share, not to the resources that are in the resource share.</p> <p>The tags on a managed permission are the same for all versions of the managed permission.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "expedita";
                                                    value = "neque";
                                                }}),
                                            }}) {{
                                resourceArn = "sed";
                                resourceShareArn = "vel";
                            }};) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "deserunt";
                xAmzDate = "quam";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "qui";
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

Removes the specified tag key and value pairs from the specified resource share or managed permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceRequestBody;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequestBody(                new String[]{{
                                                add("pariatur"),
                                                add("soluta"),
                                                add("dicta"),
                                                add("laborum"),
                                            }}) {{
                                resourceArn = "totam";
                                resourceShareArn = "incidunt";
                            }};) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "distinctio";
                xAmzDate = "facilis";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestias";
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

## updateResourceShare

Modifies some of the properties of the specified resource share.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResourceShareRequest;
import org.openapis.openapi.models.operations.UpdateResourceShareRequestBody;
import org.openapis.openapi.models.operations.UpdateResourceShareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResourceShareRequest req = new UpdateResourceShareRequest(                new UpdateResourceShareRequestBody("qui") {{
                                allowExternalPrincipals = false;
                                clientToken = "neque";
                                name = "Mrs. Louise Kuhlman";
                            }};) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "cumque";
                xAmzDate = "soluta";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "et";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateResourceShareResponse res = sdk.sdk.updateResourceShare(req);

            if (res.updateResourceShareResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
