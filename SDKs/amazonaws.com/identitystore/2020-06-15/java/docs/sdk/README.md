# SDK

## Overview

<p>The Identity Store service used by AWS IAM Identity Center (successor to AWS Single Sign-On) provides a single place to retrieve all of your identities (users and groups). For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User Guide</a>.</p> <pre><code> &lt;note&gt; &lt;p&gt;Although AWS Single Sign-On was renamed, the &lt;code&gt;sso&lt;/code&gt; and &lt;code&gt;identitystore&lt;/code&gt; API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed&quot;&gt;IAM Identity Center rename&lt;/a&gt;.&lt;/p&gt; &lt;/note&gt; &lt;p&gt;This reference guide describes the identity store operations that you can call programatically and includes detailed information about data types and errors.&lt;/p&gt; </code></pre>

Amazon Web Services documentation
<https://docs.aws.amazon.com/identitystore/>
### Available Operations

* [createGroup](#creategroup) - Creates a group within the specified identity store.
* [createGroupMembership](#creategroupmembership) - Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.
* [createUser](#createuser) - Creates a user within the specified identity store.
* [deleteGroup](#deletegroup) - Delete a group within an identity store given <code>GroupId</code>.
* [deleteGroupMembership](#deletegroupmembership) - Delete a membership within a group given <code>MembershipId</code>.
* [deleteUser](#deleteuser) - Deletes a user within an identity store given <code>UserId</code>.
* [describeGroup](#describegroup) - Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.
* [describeGroupMembership](#describegroupmembership) - Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.
* [describeUser](#describeuser) - Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.
* [getGroupId](#getgroupid) - Retrieves <code>GroupId</code> in an identity store.
* [getGroupMembershipId](#getgroupmembershipid) - Retrieves the <code>MembershipId</code> in an identity store.
* [getUserId](#getuserid) - Retrieves the <code>UserId</code> in an identity store.
* [isMemberInGroups](#ismemberingroups) - Checks the user's membership in all requested groups and returns if the member exists in all queried groups.
* [listGroupMemberships](#listgroupmemberships) - For the specified group in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
* [listGroupMembershipsForMember](#listgroupmembershipsformember) - For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
* [listGroups](#listgroups) - Lists all groups in the identity store. Returns a paginated list of complete <code>Group</code> objects. Filtering for a <code>Group</code> by the <code>DisplayName</code> attribute is deprecated. Instead, use the <code>GetGroupId</code> API action.
* [listUsers](#listusers) - Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects. Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.
* [updateGroup](#updategroup) - For the specified group in the specified identity store, updates the group metadata and attributes.
* [updateUser](#updateuser) - For the specified user in the specified identity store, updates the user metadata and attributes.

## createGroup

Creates a group within the specified identity store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupRequest;
import org.openapis.openapi.models.operations.CreateGroupResponse;
import org.openapis.openapi.models.operations.CreateGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGroupRequest req = new CreateGroupRequest(                new CreateGroupRequest("iure") {{
                                description = "magnam";
                                displayName = "debitis";
                            }};, CreateGroupXAmzTargetEnum.AWS_IDENTITY_STORE_CREATE_GROUP) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }};            

            CreateGroupResponse res = sdk.sdk.createGroup(req);

            if (res.createGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGroupMembership

Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupMembershipRequest;
import org.openapis.openapi.models.operations.CreateGroupMembershipResponse;
import org.openapis.openapi.models.operations.CreateGroupMembershipXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateGroupMembershipRequest;
import org.openapis.openapi.models.shared.MemberId;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGroupMembershipRequest req = new CreateGroupMembershipRequest(                new CreateGroupMembershipRequest("iusto", "excepturi",                 new MemberId() {{
                                                userId = "nisi";
                                            }};);, CreateGroupMembershipXAmzTargetEnum.AWS_IDENTITY_STORE_CREATE_GROUP_MEMBERSHIP) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "ab";
                xAmzDate = "quis";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "perferendis";
            }};            

            CreateGroupMembershipResponse res = sdk.sdk.createGroupMembership(req);

            if (res.createGroupMembershipResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUser

Creates a user within the specified identity store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserRequest;
import org.openapis.openapi.models.operations.CreateUserResponse;
import org.openapis.openapi.models.operations.CreateUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.CreateUserRequest;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.Name;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUserRequest req = new CreateUserRequest(                new CreateUserRequest("repellendus") {{
                                addresses = new org.openapis.openapi.models.shared.Address[]{{
                                    add(new Address() {{
                                        country = "quo";
                                        formatted = "odit";
                                        locality = "at";
                                        postalCode = "at";
                                        primary = false;
                                        region = "maiores";
                                        streetAddress = "molestiae";
                                        type = "quod";
                                    }}),
                                    add(new Address() {{
                                        country = "quod";
                                        formatted = "esse";
                                        locality = "totam";
                                        postalCode = "porro";
                                        primary = false;
                                        region = "dolorum";
                                        streetAddress = "dicta";
                                        type = "nam";
                                    }}),
                                    add(new Address() {{
                                        country = "officia";
                                        formatted = "occaecati";
                                        locality = "fugit";
                                        postalCode = "deleniti";
                                        primary = false;
                                        region = "hic";
                                        streetAddress = "optio";
                                        type = "totam";
                                    }}),
                                    add(new Address() {{
                                        country = "beatae";
                                        formatted = "commodi";
                                        locality = "molestiae";
                                        postalCode = "modi";
                                        primary = false;
                                        region = "qui";
                                        streetAddress = "impedit";
                                        type = "cum";
                                    }}),
                                }};
                                displayName = "esse";
                                emails = new org.openapis.openapi.models.shared.Email[]{{
                                    add(new Email() {{
                                        primary = false;
                                        type = "excepturi";
                                        value = "aspernatur";
                                    }}),
                                }};
                                locale = "perferendis";
                                name = new Name() {{
                                    familyName = "ad";
                                    formatted = "natus";
                                    givenName = "sed";
                                    honorificPrefix = "iste";
                                    honorificSuffix = "dolor";
                                    middleName = "natus";
                                }};;
                                nickName = "laboriosam";
                                phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumber[]{{
                                    add(new PhoneNumber() {{
                                        primary = false;
                                        type = "saepe";
                                        value = "fuga";
                                    }}),
                                    add(new PhoneNumber() {{
                                        primary = false;
                                        type = "in";
                                        value = "corporis";
                                    }}),
                                    add(new PhoneNumber() {{
                                        primary = false;
                                        type = "iste";
                                        value = "iure";
                                    }}),
                                    add(new PhoneNumber() {{
                                        primary = false;
                                        type = "saepe";
                                        value = "quidem";
                                    }}),
                                }};
                                preferredLanguage = "architecto";
                                profileUrl = "ipsa";
                                timezone = "reiciendis";
                                title = "est";
                                userName = "mollitia";
                                userType = "laborum";
                            }};, CreateUserXAmzTargetEnum.AWS_IDENTITY_STORE_CREATE_USER) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "corporis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "omnis";
            }};            

            CreateUserResponse res = sdk.sdk.createUser(req);

            if (res.createUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGroup

Delete a group within an identity store given <code>GroupId</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGroupRequest;
import org.openapis.openapi.models.operations.DeleteGroupResponse;
import org.openapis.openapi.models.operations.DeleteGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGroupRequest req = new DeleteGroupRequest(                new DeleteGroupRequest("minima", "excepturi");, DeleteGroupXAmzTargetEnum.AWS_IDENTITY_STORE_DELETE_GROUP) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "iure";
                xAmzCredential = "culpa";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "mollitia";
            }};            

            DeleteGroupResponse res = sdk.sdk.deleteGroup(req);

            if (res.deleteGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGroupMembership

Delete a membership within a group given <code>MembershipId</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGroupMembershipRequest;
import org.openapis.openapi.models.operations.DeleteGroupMembershipResponse;
import org.openapis.openapi.models.operations.DeleteGroupMembershipXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteGroupMembershipRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGroupMembershipRequest req = new DeleteGroupMembershipRequest(                new DeleteGroupMembershipRequest("culpa", "consequuntur");, DeleteGroupMembershipXAmzTargetEnum.AWS_IDENTITY_STORE_DELETE_GROUP_MEMBERSHIP) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "occaecati";
                xAmzDate = "numquam";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestiae";
            }};            

            DeleteGroupMembershipResponse res = sdk.sdk.deleteGroupMembership(req);

            if (res.deleteGroupMembershipResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUser

Deletes a user within an identity store given <code>UserId</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserRequest;
import org.openapis.openapi.models.operations.DeleteUserResponse;
import org.openapis.openapi.models.operations.DeleteUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUserRequest req = new DeleteUserRequest(                new DeleteUserRequest("error", "quia");, DeleteUserXAmzTargetEnum.AWS_IDENTITY_STORE_DELETE_USER) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "laborum";
                xAmzDate = "animi";
                xAmzSecurityToken = "enim";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "quo";
            }};            

            DeleteUserResponse res = sdk.sdk.deleteUser(req);

            if (res.deleteUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeGroup

Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeGroupRequest;
import org.openapis.openapi.models.operations.DescribeGroupResponse;
import org.openapis.openapi.models.operations.DescribeGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeGroupRequest req = new DescribeGroupRequest(                new DescribeGroupRequest("tenetur", "ipsam");, DescribeGroupXAmzTargetEnum.AWS_IDENTITY_STORE_DESCRIBE_GROUP) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "aut";
                xAmzDate = "quasi";
                xAmzSecurityToken = "error";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "laborum";
            }};            

            DescribeGroupResponse res = sdk.sdk.describeGroup(req);

            if (res.describeGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeGroupMembership

Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeGroupMembershipRequest;
import org.openapis.openapi.models.operations.DescribeGroupMembershipResponse;
import org.openapis.openapi.models.operations.DescribeGroupMembershipXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeGroupMembershipRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeGroupMembershipRequest req = new DescribeGroupMembershipRequest(                new DescribeGroupMembershipRequest("reiciendis", "voluptatibus");, DescribeGroupMembershipXAmzTargetEnum.AWS_IDENTITY_STORE_DESCRIBE_GROUP_MEMBERSHIP) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "praesentium";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "voluptate";
            }};            

            DescribeGroupMembershipResponse res = sdk.sdk.describeGroupMembership(req);

            if (res.describeGroupMembershipResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeUser

Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeUserRequest;
import org.openapis.openapi.models.operations.DescribeUserResponse;
import org.openapis.openapi.models.operations.DescribeUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeUserRequest req = new DescribeUserRequest(                new DescribeUserRequest("perferendis", "doloremque");, DescribeUserXAmzTargetEnum.AWS_IDENTITY_STORE_DESCRIBE_USER) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "ut";
                xAmzCredential = "maiores";
                xAmzDate = "dicta";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "iusto";
            }};            

            DescribeUserResponse res = sdk.sdk.describeUser(req);

            if (res.describeUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroupId

Retrieves <code>GroupId</code> in an identity store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupIdRequest;
import org.openapis.openapi.models.operations.GetGroupIdResponse;
import org.openapis.openapi.models.operations.GetGroupIdXAmzTargetEnum;
import org.openapis.openapi.models.shared.AlternateIdentifier;
import org.openapis.openapi.models.shared.ExternalId;
import org.openapis.openapi.models.shared.GetGroupIdRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UniqueAttribute;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGroupIdRequest req = new GetGroupIdRequest(                new GetGroupIdRequest(                new AlternateIdentifier() {{
                                                externalId = new ExternalId("harum", "enim");;
                                                uniqueAttribute = new UniqueAttribute("accusamus",                 new java.util.HashMap<String, Object>() {{
                                                                    put("repudiandae", "quae");
                                                                    put("ipsum", "quidem");
                                                                }});;
                                            }};, "molestias");, GetGroupIdXAmzTargetEnum.AWS_IDENTITY_STORE_GET_GROUP_ID) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "modi";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "quasi";
            }};            

            GetGroupIdResponse res = sdk.sdk.getGroupId(req);

            if (res.getGroupIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroupMembershipId

Retrieves the <code>MembershipId</code> in an identity store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupMembershipIdRequest;
import org.openapis.openapi.models.operations.GetGroupMembershipIdResponse;
import org.openapis.openapi.models.operations.GetGroupMembershipIdXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetGroupMembershipIdRequest;
import org.openapis.openapi.models.shared.MemberId;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGroupMembershipIdRequest req = new GetGroupMembershipIdRequest(                new GetGroupMembershipIdRequest("sint", "veritatis",                 new MemberId() {{
                                                userId = "itaque";
                                            }};);, GetGroupMembershipIdXAmzTargetEnum.AWS_IDENTITY_STORE_GET_GROUP_MEMBERSHIP_ID) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "enim";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "deserunt";
            }};            

            GetGroupMembershipIdResponse res = sdk.sdk.getGroupMembershipId(req);

            if (res.getGroupMembershipIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserId

Retrieves the <code>UserId</code> in an identity store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserIdRequest;
import org.openapis.openapi.models.operations.GetUserIdResponse;
import org.openapis.openapi.models.operations.GetUserIdXAmzTargetEnum;
import org.openapis.openapi.models.shared.AlternateIdentifier;
import org.openapis.openapi.models.shared.ExternalId;
import org.openapis.openapi.models.shared.GetUserIdRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UniqueAttribute;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserIdRequest req = new GetUserIdRequest(                new GetUserIdRequest(                new AlternateIdentifier() {{
                                                externalId = new ExternalId("quibusdam", "labore");;
                                                uniqueAttribute = new UniqueAttribute("modi",                 new java.util.HashMap<String, Object>() {{
                                                                    put("aliquid", "cupiditate");
                                                                }});;
                                            }};, "quos");, GetUserIdXAmzTargetEnum.AWS_IDENTITY_STORE_GET_USER_ID) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "magni";
                xAmzCredential = "assumenda";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "alias";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "dolorum";
            }};            

            GetUserIdResponse res = sdk.sdk.getUserId(req);

            if (res.getUserIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## isMemberInGroups

Checks the user's membership in all requested groups and returns if the member exists in all queried groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IsMemberInGroupsRequest;
import org.openapis.openapi.models.operations.IsMemberInGroupsResponse;
import org.openapis.openapi.models.operations.IsMemberInGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.IsMemberInGroupsRequest;
import org.openapis.openapi.models.shared.MemberId;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            IsMemberInGroupsRequest req = new IsMemberInGroupsRequest(                new IsMemberInGroupsRequest(                new String[]{{
                                                add("facilis"),
                                                add("tempore"),
                                            }}, "labore",                 new MemberId() {{
                                                userId = "delectus";
                                            }};);, IsMemberInGroupsXAmzTargetEnum.AWS_IDENTITY_STORE_IS_MEMBER_IN_GROUPS) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "non";
                xAmzCredential = "eligendi";
                xAmzDate = "sint";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            IsMemberInGroupsResponse res = sdk.sdk.isMemberInGroups(req);

            if (res.isMemberInGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGroupMemberships

For the specified group in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGroupMembershipsRequest;
import org.openapis.openapi.models.operations.ListGroupMembershipsResponse;
import org.openapis.openapi.models.operations.ListGroupMembershipsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListGroupMembershipsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGroupMembershipsRequest req = new ListGroupMembershipsRequest(                new ListGroupMembershipsRequest("officia", "dolor") {{
                                maxResults = 891555L;
                                nextToken = "a";
                            }};, ListGroupMembershipsXAmzTargetEnum.AWS_IDENTITY_STORE_LIST_GROUP_MEMBERSHIPS) {{
                maxResults = "dolorum";
                nextToken = "in";
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "illum";
                xAmzCredential = "maiores";
                xAmzDate = "rerum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "cumque";
            }};            

            ListGroupMembershipsResponse res = sdk.sdk.listGroupMemberships(req);

            if (res.listGroupMembershipsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGroupMembershipsForMember

For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGroupMembershipsForMemberRequest;
import org.openapis.openapi.models.operations.ListGroupMembershipsForMemberResponse;
import org.openapis.openapi.models.operations.ListGroupMembershipsForMemberXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListGroupMembershipsForMemberRequest;
import org.openapis.openapi.models.shared.MemberId;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGroupMembershipsForMemberRequest req = new ListGroupMembershipsForMemberRequest(                new ListGroupMembershipsForMemberRequest("ea",                 new MemberId() {{
                                                userId = "aliquid";
                                            }};) {{
                                maxResults = 675439L;
                                nextToken = "accusamus";
                            }};, ListGroupMembershipsForMemberXAmzTargetEnum.AWS_IDENTITY_STORE_LIST_GROUP_MEMBERSHIPS_FOR_MEMBER) {{
                maxResults = "non";
                nextToken = "occaecati";
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "delectus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "id";
            }};            

            ListGroupMembershipsForMemberResponse res = sdk.sdk.listGroupMembershipsForMember(req);

            if (res.listGroupMembershipsForMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGroups

Lists all groups in the identity store. Returns a paginated list of complete <code>Group</code> objects. Filtering for a <code>Group</code> by the <code>DisplayName</code> attribute is deprecated. Instead, use the <code>GetGroupId</code> API action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGroupsRequest;
import org.openapis.openapi.models.operations.ListGroupsResponse;
import org.openapis.openapi.models.operations.ListGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGroupsRequest req = new ListGroupsRequest(                new ListGroupsRequest("deleniti") {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("nisi", "vel") {{
                                        attributePath = "amet";
                                        attributeValue = "deserunt";
                                    }}),
                                    add(new Filter("molestiae", "perferendis") {{
                                        attributePath = "natus";
                                        attributeValue = "omnis";
                                    }}),
                                    add(new Filter("distinctio", "id") {{
                                        attributePath = "nihil";
                                        attributeValue = "magnam";
                                    }}),
                                    add(new Filter("suscipit", "natus") {{
                                        attributePath = "labore";
                                        attributeValue = "labore";
                                    }}),
                                }};
                                maxResults = 749170L;
                                nextToken = "eum";
                            }};, ListGroupsXAmzTargetEnum.AWS_IDENTITY_STORE_LIST_GROUPS) {{
                maxResults = "vero";
                nextToken = "aspernatur";
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "et";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "quos";
            }};            

            ListGroupsResponse res = sdk.sdk.listGroups(req);

            if (res.listGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsers

Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects. Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsersRequest;
import org.openapis.openapi.models.operations.ListUsersResponse;
import org.openapis.openapi.models.operations.ListUsersXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListUsersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUsersRequest req = new ListUsersRequest(                new ListUsersRequest("accusantium") {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("ad", "eum") {{
                                        attributePath = "reiciendis";
                                        attributeValue = "mollitia";
                                    }}),
                                    add(new Filter("odit", "nemo") {{
                                        attributePath = "dolor";
                                        attributeValue = "necessitatibus";
                                    }}),
                                    add(new Filter("doloribus", "debitis") {{
                                        attributePath = "quasi";
                                        attributeValue = "iure";
                                    }}),
                                }};
                                maxResults = 260341L;
                                nextToken = "maxime";
                            }};, ListUsersXAmzTargetEnum.AWS_IDENTITY_STORE_LIST_USERS) {{
                maxResults = "deleniti";
                nextToken = "facilis";
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "architecto";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "nihil";
            }};            

            ListUsersResponse res = sdk.sdk.listUsers(req);

            if (res.listUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGroup

For the specified group in the specified identity store, updates the group metadata and attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGroupRequest;
import org.openapis.openapi.models.operations.UpdateGroupResponse;
import org.openapis.openapi.models.operations.UpdateGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeOperation;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGroupRequest req = new UpdateGroupRequest(                new UpdateGroupRequest("quibusdam", "sed",                 new org.openapis.openapi.models.shared.AttributeOperation[]{{
                                                add(new AttributeOperation("natus") {{
                                                    attributePath = "pariatur";
                                                    attributeValue = new java.util.HashMap<String, Object>() {{
                                                        put("consequuntur", "praesentium");
                                                    }};
                                                }}),
                                                add(new AttributeOperation("pariatur") {{
                                                    attributePath = "magni";
                                                    attributeValue = new java.util.HashMap<String, Object>() {{
                                                        put("quo", "illum");
                                                    }};
                                                }}),
                                                add(new AttributeOperation("ab") {{
                                                    attributePath = "maxime";
                                                    attributeValue = new java.util.HashMap<String, Object>() {{
                                                        put("excepturi", "odit");
                                                        put("ea", "accusantium");
                                                    }};
                                                }}),
                                                add(new AttributeOperation("nemo") {{
                                                    attributePath = "maiores";
                                                    attributeValue = new java.util.HashMap<String, Object>() {{
                                                        put("ipsam", "voluptate");
                                                        put("autem", "nam");
                                                        put("eaque", "pariatur");
                                                    }};
                                                }}),
                                            }});, UpdateGroupXAmzTargetEnum.AWS_IDENTITY_STORE_UPDATE_GROUP) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "fugiat";
                xAmzDate = "amet";
                xAmzSecurityToken = "aut";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "corporis";
            }};            

            UpdateGroupResponse res = sdk.sdk.updateGroup(req);

            if (res.updateGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUser

For the specified user in the specified identity store, updates the user metadata and attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserRequest;
import org.openapis.openapi.models.operations.UpdateUserResponse;
import org.openapis.openapi.models.operations.UpdateUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeOperation;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateUserRequest req = new UpdateUserRequest(                new UpdateUserRequest("libero",                 new org.openapis.openapi.models.shared.AttributeOperation[]{{
                                                add(new AttributeOperation("nesciunt") {{
                                                    attributePath = "dolores";
                                                    attributeValue = new java.util.HashMap<String, Object>() {{
                                                        put("totam", "dignissimos");
                                                        put("eaque", "quis");
                                                    }};
                                                }}),
                                                add(new AttributeOperation("quam") {{
                                                    attributePath = "eos";
                                                    attributeValue = new java.util.HashMap<String, Object>() {{
                                                        put("dolores", "minus");
                                                    }};
                                                }}),
                                                add(new AttributeOperation("consequuntur") {{
                                                    attributePath = "dolor";
                                                    attributeValue = new java.util.HashMap<String, Object>() {{
                                                        put("nostrum", "hic");
                                                        put("recusandae", "omnis");
                                                        put("facilis", "perspiciatis");
                                                        put("voluptatem", "porro");
                                                    }};
                                                }}),
                                            }}, "blanditiis");, UpdateUserXAmzTargetEnum.AWS_IDENTITY_STORE_UPDATE_USER) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "occaecati";
                xAmzDate = "rerum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "earum";
            }};            

            UpdateUserResponse res = sdk.sdk.updateUser(req);

            if (res.updateUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
