# SDK

## Overview

<fullname>AWS CodeStar</fullname> <p>This is the API reference for AWS CodeStar. This reference provides descriptions of the operations and data types for the AWS CodeStar API along with usage examples.</p> <p>You can use the AWS CodeStar API to work with:</p> <p>Projects and their resources, by calling the following:</p> <ul> <li> <p> <code>DeleteProject</code>, which deletes a project.</p> </li> <li> <p> <code>DescribeProject</code>, which lists the attributes of a project.</p> </li> <li> <p> <code>ListProjects</code>, which lists all projects associated with your AWS account.</p> </li> <li> <p> <code>ListResources</code>, which lists the resources associated with a project.</p> </li> <li> <p> <code>ListTagsForProject</code>, which lists the tags associated with a project.</p> </li> <li> <p> <code>TagProject</code>, which adds tags to a project.</p> </li> <li> <p> <code>UntagProject</code>, which removes tags from a project.</p> </li> <li> <p> <code>UpdateProject</code>, which updates the attributes of a project.</p> </li> </ul> <p>Teams and team members, by calling the following:</p> <ul> <li> <p> <code>AssociateTeamMember</code>, which adds an IAM user to the team for a project.</p> </li> <li> <p> <code>DisassociateTeamMember</code>, which removes an IAM user from the team for a project.</p> </li> <li> <p> <code>ListTeamMembers</code>, which lists all the IAM users in the team for a project, including their roles and attributes.</p> </li> <li> <p> <code>UpdateTeamMember</code>, which updates a team member's attributes in a project.</p> </li> </ul> <p>Users, by calling the following:</p> <ul> <li> <p> <code>CreateUserProfile</code>, which creates a user profile that contains data associated with the user across all projects.</p> </li> <li> <p> <code>DeleteUserProfile</code>, which deletes all user profile information across all projects.</p> </li> <li> <p> <code>DescribeUserProfile</code>, which describes the profile of a user.</p> </li> <li> <p> <code>ListUserProfiles</code>, which lists all user profiles.</p> </li> <li> <p> <code>UpdateUserProfile</code>, which updates the profile for a user.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codestar/>
### Available Operations

* [associateTeamMember](#associateteammember) - Adds an IAM user to the team for an AWS CodeStar project.
* [createProject](#createproject) - Creates a project, including project resources. This action creates a project based on a submitted project request. A set of source code files and a toolchain template file can be included with the project request. If these are not provided, an empty project is created.
* [createUserProfile](#createuserprofile) - Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.
* [deleteProject](#deleteproject) - Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.
* [deleteUserProfile](#deleteuserprofile) - Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.
* [describeProject](#describeproject) - Describes a project and its resources.
* [describeUserProfile](#describeuserprofile) - Describes a user in AWS CodeStar and the user attributes across all projects.
* [disassociateTeamMember](#disassociateteammember) - Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.
* [listProjects](#listprojects) - Lists all projects in AWS CodeStar associated with your AWS account.
* [listResources](#listresources) - Lists resources associated with a project in AWS CodeStar.
* [listTagsForProject](#listtagsforproject) - Gets the tags for a project.
* [listTeamMembers](#listteammembers) - Lists all team members associated with a project.
* [listUserProfiles](#listuserprofiles) - Lists all the user profiles configured for your AWS account in AWS CodeStar.
* [tagProject](#tagproject) - Adds tags to a project.
* [untagProject](#untagproject) - Removes tags from a project.
* [updateProject](#updateproject) - Updates a project in AWS CodeStar.
* [updateTeamMember](#updateteammember) - Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.
* [updateUserProfile](#updateuserprofile) - Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar. 

## associateTeamMember

Adds an IAM user to the team for an AWS CodeStar project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateTeamMemberRequest;
import org.openapis.openapi.models.operations.AssociateTeamMemberResponse;
import org.openapis.openapi.models.operations.AssociateTeamMemberXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateTeamMemberRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateTeamMemberRequest req = new AssociateTeamMemberRequest(                new AssociateTeamMemberRequest("magnam", "debitis", "ipsa") {{
                                clientRequestToken = "delectus";
                                remoteAccessAllowed = false;
                            }};, AssociateTeamMemberXAmzTargetEnum.CODE_STAR20170419_ASSOCIATE_TEAM_MEMBER) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            AssociateTeamMemberResponse res = sdk.sdk.associateTeamMember(req);

            if (res.associateTeamMemberResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProject

Creates a project, including project resources. This action creates a project based on a submitted project request. A set of source code files and a toolchain template file can be included with the project request. If these are not provided, an empty project is created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectResponse;
import org.openapis.openapi.models.operations.CreateProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.Code;
import org.openapis.openapi.models.shared.CodeCommitCodeDestination;
import org.openapis.openapi.models.shared.CodeDestination;
import org.openapis.openapi.models.shared.CodeSource;
import org.openapis.openapi.models.shared.CreateProjectRequest;
import org.openapis.openapi.models.shared.GitHubCodeDestination;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Toolchain;
import org.openapis.openapi.models.shared.ToolchainSource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProjectRequest req = new CreateProjectRequest(                new CreateProjectRequest("nisi", "recusandae") {{
                                clientRequestToken = "temporibus";
                                description = "ab";
                                sourceCode = new org.openapis.openapi.models.shared.Code[]{{
                                    add(new Code(                new CodeDestination() {{
                                                        codeCommit = new CodeCommitCodeDestination("deleniti");;
                                                        gitHub = new GitHubCodeDestination(false, "hic", "optio", false, "totam", "beatae") {{
                                                            description = "commodi";
                                                        }};;
                                                    }};,                 new CodeSource(                new S3Location() {{
                                                                        bucketKey = "molestiae";
                                                                        bucketName = "modi";
                                                                    }};);) {{
                                        destination = new CodeDestination() {{
                                            codeCommit = new CodeCommitCodeDestination("sapiente") {{
                                                name = "Iris Aufderhar";
                                            }};
                                            gitHub = new GitHubCodeDestination(false, "totam", "porro", false, "dolorum", "dicta") {{
                                                description = "quo";
                                                issuesEnabled = false;
                                                name = "Teri Strosin";
                                                owner = "quod";
                                                privateRepository = false;
                                                token = "quod";
                                                type = "esse";
                                            }};
                                        }};
                                        source = new CodeSource(                new S3Location() {{
                                                            bucketKey = "occaecati";
                                                            bucketName = "fugit";
                                                        }};) {{
                                            s3 = new S3Location() {{
                                                bucketKey = "nam";
                                                bucketName = "officia";
                                            }};
                                        }};
                                    }}),
                                    add(new Code(                new CodeDestination() {{
                                                        codeCommit = new CodeCommitCodeDestination("quidem");;
                                                        gitHub = new GitHubCodeDestination(false, "architecto", "ipsa", false, "reiciendis", "est") {{
                                                            description = "mollitia";
                                                        }};;
                                                    }};,                 new CodeSource(                new S3Location() {{
                                                                        bucketKey = "laborum";
                                                                        bucketName = "dolores";
                                                                    }};);) {{
                                        destination = new CodeDestination() {{
                                            codeCommit = new CodeCommitCodeDestination("excepturi") {{
                                                name = "Krista Rippin";
                                            }};
                                            gitHub = new GitHubCodeDestination(false, "hic", "saepe", false, "fuga", "in") {{
                                                description = "aspernatur";
                                                issuesEnabled = false;
                                                name = "Cathy Mosciski";
                                                owner = "dolor";
                                                privateRepository = false;
                                                token = "natus";
                                                type = "laboriosam";
                                            }};
                                        }};
                                        source = new CodeSource(                new S3Location() {{
                                                            bucketKey = "iure";
                                                            bucketName = "saepe";
                                                        }};) {{
                                            s3 = new S3Location() {{
                                                bucketKey = "corporis";
                                                bucketName = "iste";
                                            }};
                                        }};
                                    }}),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("corporis", "explicabo");
                                }};
                                toolchain = new Toolchain(                new ToolchainSource(                new S3Location() {{
                                                                    bucketKey = "nobis";
                                                                    bucketName = "enim";
                                                                }};);) {{
                                    roleArn = "omnis";
                                    stackParameters = new java.util.HashMap<String, String>() {{
                                        put("minima", "excepturi");
                                        put("accusantium", "iure");
                                    }};
                                }};;
                            }};, CreateProjectXAmzTargetEnum.CODE_STAR20170419_CREATE_PROJECT) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "sapiente";
                xAmzDate = "architecto";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "culpa";
            }};            

            CreateProjectResponse res = sdk.sdk.createProject(req);

            if (res.createProjectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUserProfile

Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserProfileRequest;
import org.openapis.openapi.models.operations.CreateUserProfileResponse;
import org.openapis.openapi.models.operations.CreateUserProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateUserProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUserProfileRequest req = new CreateUserProfileRequest(                new CreateUserProfileRequest("repellat", "mollitia", "occaecati") {{
                                sshPublicKey = "numquam";
                            }};, CreateUserProfileXAmzTargetEnum.CODE_STAR20170419_CREATE_USER_PROFILE) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "quam";
                xAmzCredential = "molestiae";
                xAmzDate = "velit";
                xAmzSecurityToken = "error";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "quis";
            }};            

            CreateUserProfileResponse res = sdk.sdk.createUserProfile(req);

            if (res.createUserProfileResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProject

Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectRequest;
import org.openapis.openapi.models.operations.DeleteProjectResponse;
import org.openapis.openapi.models.operations.DeleteProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteProjectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProjectRequest req = new DeleteProjectRequest(                new DeleteProjectRequest("laborum") {{
                                clientRequestToken = "animi";
                                deleteStack = false;
                            }};, DeleteProjectXAmzTargetEnum.CODE_STAR20170419_DELETE_PROJECT) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "odit";
                xAmzCredential = "quo";
                xAmzDate = "sequi";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "id";
            }};            

            DeleteProjectResponse res = sdk.sdk.deleteProject(req);

            if (res.deleteProjectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserProfile

Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserProfileRequest;
import org.openapis.openapi.models.operations.DeleteUserProfileResponse;
import org.openapis.openapi.models.operations.DeleteUserProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteUserProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUserProfileRequest req = new DeleteUserProfileRequest(                new DeleteUserProfileRequest("aut");, DeleteUserProfileXAmzTargetEnum.CODE_STAR20170419_DELETE_USER_PROFILE) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "error";
                xAmzCredential = "temporibus";
                xAmzDate = "laborum";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DeleteUserProfileResponse res = sdk.sdk.deleteUserProfile(req);

            if (res.deleteUserProfileResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeProject

Describes a project and its resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeProjectRequest;
import org.openapis.openapi.models.operations.DescribeProjectResponse;
import org.openapis.openapi.models.operations.DescribeProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeProjectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeProjectRequest req = new DescribeProjectRequest(                new DescribeProjectRequest("nihil");, DescribeProjectXAmzTargetEnum.CODE_STAR20170419_DESCRIBE_PROJECT) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "ipsa";
                xAmzDate = "omnis";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "perferendis";
            }};            

            DescribeProjectResponse res = sdk.sdk.describeProject(req);

            if (res.describeProjectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeUserProfile

Describes a user in AWS CodeStar and the user attributes across all projects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeUserProfileRequest;
import org.openapis.openapi.models.operations.DescribeUserProfileResponse;
import org.openapis.openapi.models.operations.DescribeUserProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeUserProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeUserProfileRequest req = new DescribeUserProfileRequest(                new DescribeUserProfileRequest("reprehenderit");, DescribeUserProfileXAmzTargetEnum.CODE_STAR20170419_DESCRIBE_USER_PROFILE) {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "dicta";
                xAmzDate = "corporis";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "dicta";
            }};            

            DescribeUserProfileResponse res = sdk.sdk.describeUserProfile(req);

            if (res.describeUserProfileResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateTeamMember

Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateTeamMemberRequest;
import org.openapis.openapi.models.operations.DisassociateTeamMemberResponse;
import org.openapis.openapi.models.operations.DisassociateTeamMemberXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateTeamMemberRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateTeamMemberRequest req = new DisassociateTeamMemberRequest(                new DisassociateTeamMemberRequest("enim", "accusamus");, DisassociateTeamMemberXAmzTargetEnum.CODE_STAR20170419_DISASSOCIATE_TEAM_MEMBER) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "quae";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "excepturi";
            }};            

            DisassociateTeamMemberResponse res = sdk.sdk.disassociateTeamMember(req);

            if (res.disassociateTeamMemberResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProjects

Lists all projects in AWS CodeStar associated with your AWS account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProjectsRequest;
import org.openapis.openapi.models.operations.ListProjectsResponse;
import org.openapis.openapi.models.operations.ListProjectsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListProjectsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProjectsRequest req = new ListProjectsRequest(                new ListProjectsRequest() {{
                                maxResults = 265389L;
                                nextToken = "praesentium";
                            }};, ListProjectsXAmzTargetEnum.CODE_STAR20170419_LIST_PROJECTS) {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "quasi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "sint";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "itaque";
            }};            

            ListProjectsResponse res = sdk.sdk.listProjects(req);

            if (res.listProjectsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResources

Lists resources associated with a project in AWS CodeStar.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourcesRequest;
import org.openapis.openapi.models.operations.ListResourcesResponse;
import org.openapis.openapi.models.operations.ListResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListResourcesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourcesRequest req = new ListResourcesRequest(                new ListResourcesRequest("enim") {{
                                maxResults = 9356L;
                                nextToken = "est";
                            }};, ListResourcesXAmzTargetEnum.CODE_STAR20170419_LIST_RESOURCES) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "deserunt";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "modi";
            }};            

            ListResourcesResponse res = sdk.sdk.listResources(req);

            if (res.listResourcesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForProject

Gets the tags for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForProjectRequest;
import org.openapis.openapi.models.operations.ListTagsForProjectResponse;
import org.openapis.openapi.models.operations.ListTagsForProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForProjectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForProjectRequest req = new ListTagsForProjectRequest(                new ListTagsForProjectRequest("aliquid") {{
                                maxResults = 586513L;
                                nextToken = "quos";
                            }};, ListTagsForProjectXAmzTargetEnum.CODE_STAR20170419_LIST_TAGS_FOR_PROJECT) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "magni";
                xAmzCredential = "assumenda";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "alias";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "dolorum";
            }};            

            ListTagsForProjectResponse res = sdk.sdk.listTagsForProject(req);

            if (res.listTagsForProjectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTeamMembers

Lists all team members associated with a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTeamMembersRequest;
import org.openapis.openapi.models.operations.ListTeamMembersResponse;
import org.openapis.openapi.models.operations.ListTeamMembersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTeamMembersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTeamMembersRequest req = new ListTeamMembersRequest(                new ListTeamMembersRequest("tempora") {{
                                maxResults = 703737L;
                                nextToken = "tempore";
                            }};, ListTeamMembersXAmzTargetEnum.CODE_STAR20170419_LIST_TEAM_MEMBERS) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "eum";
                xAmzDate = "non";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "aliquid";
            }};            

            ListTeamMembersResponse res = sdk.sdk.listTeamMembers(req);

            if (res.listTeamMembersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUserProfiles

Lists all the user profiles configured for your AWS account in AWS CodeStar.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUserProfilesRequest;
import org.openapis.openapi.models.operations.ListUserProfilesResponse;
import org.openapis.openapi.models.operations.ListUserProfilesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListUserProfilesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUserProfilesRequest req = new ListUserProfilesRequest(                new ListUserProfilesRequest() {{
                                maxResults = 896039L;
                                nextToken = "sint";
                            }};, ListUserProfilesXAmzTargetEnum.CODE_STAR20170419_LIST_USER_PROFILES) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "debitis";
                xAmzDate = "a";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "in";
                xAmzSignedHeaders = "in";
            }};            

            ListUserProfilesResponse res = sdk.sdk.listUserProfiles(req);

            if (res.listUserProfilesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagProject

Adds tags to a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagProjectRequest;
import org.openapis.openapi.models.operations.TagProjectResponse;
import org.openapis.openapi.models.operations.TagProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagProjectRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagProjectRequest req = new TagProjectRequest(                new TagProjectRequest("maiores",                 new java.util.HashMap<String, String>() {{
                                                put("dicta", "magnam");
                                                put("cumque", "facere");
                                                put("ea", "aliquid");
                                            }});, TagProjectXAmzTargetEnum.CODE_STAR20170419_TAG_PROJECT) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "non";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "delectus";
            }};            

            TagProjectResponse res = sdk.sdk.tagProject(req);

            if (res.tagProjectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagProject

Removes tags from a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagProjectRequest;
import org.openapis.openapi.models.operations.UntagProjectResponse;
import org.openapis.openapi.models.operations.UntagProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagProjectRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagProjectRequest req = new UntagProjectRequest(                new UntagProjectRequest("provident",                 new String[]{{
                                                add("id"),
                                                add("blanditiis"),
                                                add("deleniti"),
                                            }});, UntagProjectXAmzTargetEnum.CODE_STAR20170419_UNTAG_PROJECT) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "amet";
                xAmzCredential = "deserunt";
                xAmzDate = "nisi";
                xAmzSecurityToken = "vel";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "omnis";
            }};            

            UntagProjectResponse res = sdk.sdk.untagProject(req);

            if (res.untagProjectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProject

Updates a project in AWS CodeStar.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectRequest;
import org.openapis.openapi.models.operations.UpdateProjectResponse;
import org.openapis.openapi.models.operations.UpdateProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateProjectRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProjectRequest req = new UpdateProjectRequest(                new UpdateProjectRequest("perferendis") {{
                                description = "nihil";
                                name = "magnam";
                            }};, UpdateProjectXAmzTargetEnum.CODE_STAR20170419_UPDATE_PROJECT) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "id";
                xAmzCredential = "labore";
                xAmzDate = "labore";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "nobis";
            }};            

            UpdateProjectResponse res = sdk.sdk.updateProject(req);

            if (res.updateProjectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTeamMember

Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTeamMemberRequest;
import org.openapis.openapi.models.operations.UpdateTeamMemberResponse;
import org.openapis.openapi.models.operations.UpdateTeamMemberXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateTeamMemberRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTeamMemberRequest req = new UpdateTeamMemberRequest(                new UpdateTeamMemberRequest("vero", "aspernatur") {{
                                projectRole = "architecto";
                                remoteAccessAllowed = false;
                            }};, UpdateTeamMemberXAmzTargetEnum.CODE_STAR20170419_UPDATE_TEAM_MEMBER) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "et";
                xAmzCredential = "excepturi";
                xAmzDate = "ullam";
                xAmzSecurityToken = "provident";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "sint";
            }};            

            UpdateTeamMemberResponse res = sdk.sdk.updateTeamMember(req);

            if (res.updateTeamMemberResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUserProfile

Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserProfileRequest;
import org.openapis.openapi.models.operations.UpdateUserProfileResponse;
import org.openapis.openapi.models.operations.UpdateUserProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateUserProfileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateUserProfileRequest req = new UpdateUserProfileRequest(                new UpdateUserProfileRequest("mollitia") {{
                                displayName = "reiciendis";
                                emailAddress = "mollitia";
                                sshPublicKey = "ad";
                            }};, UpdateUserProfileXAmzTargetEnum.CODE_STAR20170419_UPDATE_USER_PROFILE) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "necessitatibus";
                xAmzDate = "odit";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "iure";
            }};            

            UpdateUserProfileResponse res = sdk.sdk.updateUserProfile(req);

            if (res.updateUserProfileResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
