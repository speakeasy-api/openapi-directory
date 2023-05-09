# members

## Overview

With these endpoints you can manage your Members.

<a href="https://configcat.com/docs/advanced/team-collaboration" target="_blank" rel="noopener noreferrer">Here</a> you can read more about Team Collaboration.

### Available Operations

* [addMemberToGroup](#addmembertogroup) - Update Member Permissions
* [deleteOrganizationMember](#deleteorganizationmember) - Delete Member from Organization
* [deleteProductMember](#deleteproductmember) - Delete Member from Product
* [getOrganizationMembers](#getorganizationmembers) - List Organization Members
* [getProductMembers](#getproductmembers) - List Product Members
* [inviteMember](#invitemember) - Invite Member

## addMemberToGroup

This endpoint adds a Member identified by the `userId` to one or more Permission Groups. 
This endpoint can also be used to move a Member between Permission Groups within a Product.
Only a single Permission Group can be set per Product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddMemberToGroupRequest;
import org.openapis.openapi.models.operations.AddMemberToGroupResponse;
import org.openapis.openapi.models.shared.AddUserToGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio", "commodi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AddMemberToGroupRequest req = new AddMemberToGroupRequest(                new AddUserToGroupRequest(                new Long[]{{
                                                add(677045L),
                                                add(823718L),
                                            }});, "7334ec1b-781b-436a-8808-8d100efada20", "alias");            

            AddMemberToGroupResponse res = sdk.members.addMemberToGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationMember

This endpoint removes a Member identified by the `userId` from the 
given Organization identified by the `organizationId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationMemberRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet", "hic") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteOrganizationMemberRequest req = new DeleteOrganizationMemberRequest("0422eb21-64cf-49ab-8366-c723ffda9e06", "rerum");            

            DeleteOrganizationMemberResponse res = sdk.members.deleteOrganizationMember(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProductMember

This endpoint removes a Member identified by the `userId` from the 
given Product identified by the `productId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProductMemberRequest;
import org.openapis.openapi.models.operations.DeleteProductMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae", "voluptates") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteProductMemberRequest req = new DeleteProductMemberRequest("4825c1fc-0e11-45c8-8bff-918544ec42de", "doloribus");            

            DeleteProductMemberResponse res = sdk.members.deleteProductMember(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationMembers

This endpoint returns the list of Members that belongs 
to the given Organization, identified by the `organizationId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationMembersRequest;
import org.openapis.openapi.models.operations.GetOrganizationMembersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit", "porro") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetOrganizationMembersRequest req = new GetOrganizationMembersRequest("e8f19777-73e6-4356-aa7b-408f05e3d48f");            

            GetOrganizationMembersResponse res = sdk.members.getOrganizationMembers(req);

            if (res.userModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductMembers

This endpoint returns the list of Members that belongs 
to the given Product, identified by the `productId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductMembersRequest;
import org.openapis.openapi.models.operations.GetProductMembersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat", "est") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetProductMembersRequest req = new GetProductMembersRequest("f313a1f5-fd94-4259-80b3-6f25ea944f3b");            

            GetProductMembersResponse res = sdk.members.getProductMembers(req);

            if (res.memberModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## inviteMember

This endpoint invites a Member into the given Product identified by the `productId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InviteMemberRequest;
import org.openapis.openapi.models.operations.InviteMemberResponse;
import org.openapis.openapi.models.shared.InviteMembersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "minima") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            InviteMemberRequest req = new InviteMemberRequest(                new InviteMembersRequest(                new String[]{{
                                                add("minus"),
                                                add("ab"),
                                            }}, 108165L);, "f6c37a51-2624-4383-9bbc-05a23a45cefc");            

            InviteMemberResponse res = sdk.members.inviteMember(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
