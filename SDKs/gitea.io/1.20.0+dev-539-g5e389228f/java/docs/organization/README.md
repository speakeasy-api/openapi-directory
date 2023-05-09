# organization

### Available Operations

* [createOrgRepo](#createorgrepo) - Create a repository in an organization
* [~~createOrgRepoDeprecated~~](#createorgrepodeprecated) - Create a repository in an organization :warning: **Deprecated**
* [orgAddTeamMember](#orgaddteammember) - Add a team member
* [orgAddTeamRepository](#orgaddteamrepository) - Add a repository to a team
* [orgConcealMember](#orgconcealmember) - Conceal a user's membership
* [orgCreate](#orgcreate) - Create an organization
* [orgCreateHook](#orgcreatehook) - Create a hook
* [orgCreateLabel](#orgcreatelabel) - Create a label for an organization
* [orgCreateTeam](#orgcreateteam) - Create a team
* [orgDelete](#orgdelete) - Delete an organization
* [orgDeleteHook](#orgdeletehook) - Delete a hook
* [orgDeleteLabel](#orgdeletelabel) - Delete a label
* [orgDeleteMember](#orgdeletemember) - Remove a member from an organization
* [orgDeleteTeam](#orgdeleteteam) - Delete a team
* [orgEdit](#orgedit) - Edit an organization
* [orgEditHook](#orgedithook) - Update a hook
* [orgEditLabel](#orgeditlabel) - Update a label
* [orgEditTeam](#orgeditteam) - Edit a team
* [orgGet](#orgget) - Get an organization
* [orgGetAll](#orggetall) - Get list of organizations
* [orgGetHook](#orggethook) - Get a hook
* [orgGetLabel](#orggetlabel) - Get a single label
* [orgGetTeam](#orggetteam) - Get a team
* [orgGetUserPermissions](#orggetuserpermissions) - Get user permissions in organization
* [orgIsMember](#orgismember) - Check if a user is a member of an organization
* [orgIsPublicMember](#orgispublicmember) - Check if a user is a public member of an organization
* [orgListActivityFeeds](#orglistactivityfeeds) - List an organization's activity feeds
* [orgListCurrentUserOrgs](#orglistcurrentuserorgs) - List the current user's organizations
* [orgListHooks](#orglisthooks) - List an organization's webhooks
* [orgListLabels](#orglistlabels) - List an organization's labels
* [orgListMembers](#orglistmembers) - List an organization's members
* [orgListPublicMembers](#orglistpublicmembers) - List an organization's public members
* [orgListRepos](#orglistrepos) - List an organization's repos
* [orgListTeamActivityFeeds](#orglistteamactivityfeeds) - List a team's activity feeds
* [orgListTeamMember](#orglistteammember) - List a particular member of team
* [orgListTeamMembers](#orglistteammembers) - List a team's members
* [orgListTeamRepo](#orglistteamrepo) - List a particular repo of team
* [orgListTeamRepos](#orglistteamrepos) - List a team's repos
* [orgListTeams](#orglistteams) - List an organization's teams
* [orgListUserOrgs](#orglistuserorgs) - List a user's organizations
* [orgPublicizeMember](#orgpublicizemember) - Publicize a user's membership
* [orgRemoveTeamMember](#orgremoveteammember) - Remove a team member
* [orgRemoveTeamRepository](#orgremoveteamrepository) - Remove a repository from a team
* [teamSearch](#teamsearch) - Search for teams within an organization

## createOrgRepo

Create a repository in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrgRepoRequest;
import org.openapis.openapi.models.operations.CreateOrgRepoResponse;
import org.openapis.openapi.models.shared.CreateRepoOption;
import org.openapis.openapi.models.shared.CreateRepoOptionTrustModelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrgRepoRequest req = new CreateOrgRepoRequest("quis") {{
                createRepoOption = new CreateRepoOption("ipsum") {{
                    autoInit = false;
                    defaultBranch = "delectus";
                    description = "voluptate";
                    gitignores = "consectetur";
                    issueLabels = "vero";
                    license = "tenetur";
                    private_ = false;
                    readme = "dignissimos";
                    template = false;
                    trustModel = CreateRepoOptionTrustModelEnum.COLLABORATORCOMMITTER;
                }};;
            }};            

            CreateOrgRepoResponse res = sdk.organization.createOrgRepo(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~createOrgRepoDeprecated~~

Create a repository in an organization

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrgRepoDeprecatedRequest;
import org.openapis.openapi.models.operations.CreateOrgRepoDeprecatedResponse;
import org.openapis.openapi.models.shared.CreateRepoOption;
import org.openapis.openapi.models.shared.CreateRepoOptionTrustModelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrgRepoDeprecatedRequest req = new CreateOrgRepoDeprecatedRequest("distinctio") {{
                createRepoOption = new CreateRepoOption("quod") {{
                    autoInit = false;
                    defaultBranch = "odio";
                    description = "similique";
                    gitignores = "facilis";
                    issueLabels = "vero";
                    license = "ducimus";
                    private_ = false;
                    readme = "dolore";
                    template = false;
                    trustModel = CreateRepoOptionTrustModelEnum.COLLABORATORCOMMITTER;
                }};;
            }};            

            CreateOrgRepoDeprecatedResponse res = sdk.organization.createOrgRepoDeprecated(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgAddTeamMember

Add a team member

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgAddTeamMemberRequest;
import org.openapis.openapi.models.operations.OrgAddTeamMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgAddTeamMemberRequest req = new OrgAddTeamMemberRequest(848944L, "sequi");            

            OrgAddTeamMemberResponse res = sdk.organization.orgAddTeamMember(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgAddTeamRepository

Add a repository to a team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgAddTeamRepositoryRequest;
import org.openapis.openapi.models.operations.OrgAddTeamRepositoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgAddTeamRepositoryRequest req = new OrgAddTeamRepositoryRequest(617877L, "impedit", "aut");            

            OrgAddTeamRepositoryResponse res = sdk.organization.orgAddTeamRepository(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgConcealMember

Conceal a user's membership

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgConcealMemberRequest;
import org.openapis.openapi.models.operations.OrgConcealMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgConcealMemberRequest req = new OrgConcealMemberRequest("voluptatibus", "exercitationem");            

            OrgConcealMemberResponse res = sdk.organization.orgConcealMember(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgCreate

Create an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgCreateResponse;
import org.openapis.openapi.models.shared.CreateOrgOption;
import org.openapis.openapi.models.shared.CreateOrgOptionVisibilityEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateOrgOption req = new CreateOrgOption("nulla") {{
                description = "fugit";
                fullName = "porro";
                location = "maiores";
                repoAdminChangeTeamAccess = false;
                visibility = CreateOrgOptionVisibilityEnum.PRIVATE_;
                website = "iusto";
            }};            

            OrgCreateResponse res = sdk.organization.orgCreate(req);

            if (res.organization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgCreateHook

Create a hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgCreateHookRequest;
import org.openapis.openapi.models.operations.OrgCreateHookResponse;
import org.openapis.openapi.models.shared.CreateHookOption;
import org.openapis.openapi.models.shared.CreateHookOptionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgCreateHookRequest req = new OrgCreateHookRequest(                new CreateHookOption(                new java.util.HashMap<String, String>() {{
                                                put("ducimus", "alias");
                                                put("officia", "tempora");
                                                put("ipsam", "ea");
                                                put("aspernatur", "vel");
                                            }}, CreateHookOptionTypeEnum.WECHATWORK) {{
                                active = false;
                                authorizationHeader = "magnam";
                                branchFilter = "ratione";
                                events = new String[]{{
                                    add("laudantium"),
                                    add("dicta"),
                                }};
                            }};, "dolor");            

            OrgCreateHookResponse res = sdk.organization.orgCreateHook(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgCreateLabel

Create a label for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgCreateLabelRequest;
import org.openapis.openapi.models.operations.OrgCreateLabelResponse;
import org.openapis.openapi.models.shared.CreateLabelOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgCreateLabelRequest req = new OrgCreateLabelRequest("maiores") {{
                createLabelOption = new CreateLabelOption("#00aabb", "quasi") {{
                    description = "ex";
                    exclusive = false;
                }};;
            }};            

            OrgCreateLabelResponse res = sdk.organization.orgCreateLabel(req);

            if (res.label != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgCreateTeam

Create a team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgCreateTeamRequest;
import org.openapis.openapi.models.operations.OrgCreateTeamResponse;
import org.openapis.openapi.models.shared.CreateTeamOption;
import org.openapis.openapi.models.shared.CreateTeamOptionPermissionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgCreateTeamRequest req = new OrgCreateTeamRequest("nulla") {{
                createTeamOption = new CreateTeamOption("excepturi") {{
                    canCreateOrgRepo = false;
                    description = "voluptatibus";
                    includesAllRepositories = false;
                    permission = CreateTeamOptionPermissionEnum.WRITE;
                    units = new String[]{{
                        add("quisquam"),
                        add("saepe"),
                        add("ea"),
                        add("impedit"),
                    }};
                    unitsMap = new java.util.HashMap<String, String>() {{
                        put("veniam", "aliquid");
                        put("inventore", "magnam");
                    }};
                }};;
            }};            

            OrgCreateTeamResponse res = sdk.organization.orgCreateTeam(req);

            if (res.team != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgDelete

Delete an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgDeleteRequest;
import org.openapis.openapi.models.operations.OrgDeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgDeleteRequest req = new OrgDeleteRequest("ea");            

            OrgDeleteResponse res = sdk.organization.orgDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgDeleteHook

Delete a hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgDeleteHookRequest;
import org.openapis.openapi.models.operations.OrgDeleteHookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgDeleteHookRequest req = new OrgDeleteHookRequest(775220L, "consectetur");            

            OrgDeleteHookResponse res = sdk.organization.orgDeleteHook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgDeleteLabel

Delete a label

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgDeleteLabelRequest;
import org.openapis.openapi.models.operations.OrgDeleteLabelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgDeleteLabelRequest req = new OrgDeleteLabelRequest(926213L, "aspernatur");            

            OrgDeleteLabelResponse res = sdk.organization.orgDeleteLabel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgDeleteMember

Remove a member from an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgDeleteMemberRequest;
import org.openapis.openapi.models.operations.OrgDeleteMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgDeleteMemberRequest req = new OrgDeleteMemberRequest("minima", "eaque");            

            OrgDeleteMemberResponse res = sdk.organization.orgDeleteMember(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgDeleteTeam

Delete a team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgDeleteTeamRequest;
import org.openapis.openapi.models.operations.OrgDeleteTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgDeleteTeamRequest req = new OrgDeleteTeamRequest(952871L);            

            OrgDeleteTeamResponse res = sdk.organization.orgDeleteTeam(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgEdit

Edit an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgEditRequest;
import org.openapis.openapi.models.operations.OrgEditResponse;
import org.openapis.openapi.models.shared.EditOrgOption;
import org.openapis.openapi.models.shared.EditOrgOptionVisibilityEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgEditRequest req = new OrgEditRequest(                new EditOrgOption() {{
                                description = "libero";
                                fullName = "aut";
                                location = "aut";
                                repoAdminChangeTeamAccess = false;
                                visibility = EditOrgOptionVisibilityEnum.LIMITED;
                                website = "impedit";
                            }};, "aliquam");            

            OrgEditResponse res = sdk.organization.orgEdit(req);

            if (res.organization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgEditHook

Update a hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgEditHookRequest;
import org.openapis.openapi.models.operations.OrgEditHookResponse;
import org.openapis.openapi.models.shared.EditHookOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgEditHookRequest req = new OrgEditHookRequest(146946L, "accusamus") {{
                editHookOption = new EditHookOption() {{
                    active = false;
                    authorizationHeader = "inventore";
                    branchFilter = "non";
                    config = new java.util.HashMap<String, String>() {{
                        put("dolorum", "laborum");
                    }};
                    events = new String[]{{
                        add("velit"),
                        add("eum"),
                        add("autem"),
                        add("nobis"),
                    }};
                }};;
            }};            

            OrgEditHookResponse res = sdk.organization.orgEditHook(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgEditLabel

Update a label

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgEditLabelRequest;
import org.openapis.openapi.models.operations.OrgEditLabelResponse;
import org.openapis.openapi.models.shared.EditLabelOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgEditLabelRequest req = new OrgEditLabelRequest(557369L, "assumenda") {{
                editLabelOption = new EditLabelOption() {{
                    color = "#00aabb";
                    description = "nulla";
                    exclusive = false;
                    name = "Jeannette Boyer";
                }};;
            }};            

            OrgEditLabelResponse res = sdk.organization.orgEditLabel(req);

            if (res.label != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgEditTeam

Edit a team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgEditTeamRequest;
import org.openapis.openapi.models.operations.OrgEditTeamResponse;
import org.openapis.openapi.models.shared.EditTeamOption;
import org.openapis.openapi.models.shared.EditTeamOptionPermissionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgEditTeamRequest req = new OrgEditTeamRequest(131482L) {{
                editTeamOption = new EditTeamOption("provident") {{
                    canCreateOrgRepo = false;
                    description = "ipsa";
                    includesAllRepositories = false;
                    permission = EditTeamOptionPermissionEnum.WRITE;
                    units = new String[]{{
                        add("odio"),
                        add("eius"),
                    }};
                    unitsMap = new java.util.HashMap<String, String>() {{
                        put("esse", "rem");
                        put("fuga", "reprehenderit");
                    }};
                }};;
            }};            

            OrgEditTeamResponse res = sdk.organization.orgEditTeam(req);

            if (res.team != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgGet

Get an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgGetRequest;
import org.openapis.openapi.models.operations.OrgGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgGetRequest req = new OrgGetRequest("quidem");            

            OrgGetResponse res = sdk.organization.orgGet(req);

            if (res.organization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgGetAll

Get list of organizations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgGetAllRequest;
import org.openapis.openapi.models.operations.OrgGetAllResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgGetAllRequest req = new OrgGetAllRequest() {{
                limit = 852635L;
                page = 283519L;
            }};            

            OrgGetAllResponse res = sdk.organization.orgGetAll(req);

            if (res.organizations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgGetHook

Get a hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgGetHookRequest;
import org.openapis.openapi.models.operations.OrgGetHookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgGetHookRequest req = new OrgGetHookRequest(433439L, "suscipit");            

            OrgGetHookResponse res = sdk.organization.orgGetHook(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgGetLabel

Get a single label

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgGetLabelRequest;
import org.openapis.openapi.models.operations.OrgGetLabelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgGetLabelRequest req = new OrgGetLabelRequest(826871L, "eos");            

            OrgGetLabelResponse res = sdk.organization.orgGetLabel(req);

            if (res.label != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgGetTeam

Get a team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgGetTeamRequest;
import org.openapis.openapi.models.operations.OrgGetTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgGetTeamRequest req = new OrgGetTeamRequest(509342L);            

            OrgGetTeamResponse res = sdk.organization.orgGetTeam(req);

            if (res.team != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgGetUserPermissions

Get user permissions in organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgGetUserPermissionsRequest;
import org.openapis.openapi.models.operations.OrgGetUserPermissionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgGetUserPermissionsRequest req = new OrgGetUserPermissionsRequest("quisquam", "veritatis");            

            OrgGetUserPermissionsResponse res = sdk.organization.orgGetUserPermissions(req);

            if (res.organizationPermissions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgIsMember

Check if a user is a member of an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgIsMemberRequest;
import org.openapis.openapi.models.operations.OrgIsMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgIsMemberRequest req = new OrgIsMemberRequest("ipsa", "id");            

            OrgIsMemberResponse res = sdk.organization.orgIsMember(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgIsPublicMember

Check if a user is a public member of an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgIsPublicMemberRequest;
import org.openapis.openapi.models.operations.OrgIsPublicMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgIsPublicMemberRequest req = new OrgIsPublicMemberRequest("quidem", "neque");            

            OrgIsPublicMemberResponse res = sdk.organization.orgIsPublicMember(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgListActivityFeeds

List an organization's activity feeds

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgListActivityFeedsRequest;
import org.openapis.openapi.models.operations.OrgListActivityFeedsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgListActivityFeedsRequest req = new OrgListActivityFeedsRequest("quo") {{
                date = LocalDate.parse("2020-09-01");
                limit = 681359L;
                page = 259422L;
            }};            

            OrgListActivityFeedsResponse res = sdk.organization.orgListActivityFeeds(req);

            if (res.activities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgListCurrentUserOrgs

List the current user's organizations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgListCurrentUserOrgsRequest;
import org.openapis.openapi.models.operations.OrgListCurrentUserOrgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgListCurrentUserOrgsRequest req = new OrgListCurrentUserOrgsRequest() {{
                limit = 178367L;
                page = 373813L;
            }};            

            OrgListCurrentUserOrgsResponse res = sdk.organization.orgListCurrentUserOrgs(req);

            if (res.organizations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgListHooks

List an organization's webhooks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgListHooksRequest;
import org.openapis.openapi.models.operations.OrgListHooksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgListHooksRequest req = new OrgListHooksRequest("ab") {{
                limit = 587600L;
                page = 9688L;
            }};            

            OrgListHooksResponse res = sdk.organization.orgListHooks(req);

            if (res.hooks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgListLabels

List an organization's labels

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgListLabelsRequest;
import org.openapis.openapi.models.operations.OrgListLabelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgListLabelsRequest req = new OrgListLabelsRequest("tempora") {{
                limit = 892050L;
                page = 370853L;
            }};            

            OrgListLabelsResponse res = sdk.organization.orgListLabels(req);

            if (res.labels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgListMembers

List an organization's members

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgListMembersRequest;
import org.openapis.openapi.models.operations.OrgListMembersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgListMembersRequest req = new OrgListMembersRequest("aspernatur") {{
                limit = 197054L;
                page = 779192L;
            }};            

            OrgListMembersResponse res = sdk.organization.orgListMembers(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgListPublicMembers

List an organization's public members

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgListPublicMembersRequest;
import org.openapis.openapi.models.operations.OrgListPublicMembersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgListPublicMembersRequest req = new OrgListPublicMembersRequest("esse") {{
                limit = 925164L;
                page = 44612L;
            }};            

            OrgListPublicMembersResponse res = sdk.organization.orgListPublicMembers(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgListRepos

List an organization's repos

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgListReposRequest;
import org.openapis.openapi.models.operations.OrgListReposResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgListReposRequest req = new OrgListReposRequest("distinctio") {{
                limit = 799796L;
                page = 490819L;
            }};            

            OrgListReposResponse res = sdk.organization.orgListRepos(req);

            if (res.repositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgListTeamActivityFeeds

List a team's activity feeds

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgListTeamActivityFeedsRequest;
import org.openapis.openapi.models.operations.OrgListTeamActivityFeedsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgListTeamActivityFeedsRequest req = new OrgListTeamActivityFeedsRequest(76956L) {{
                date = LocalDate.parse("2022-06-25");
                limit = 882710L;
                page = 306810L;
            }};            

            OrgListTeamActivityFeedsResponse res = sdk.organization.orgListTeamActivityFeeds(req);

            if (res.activities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgListTeamMember

List a particular member of team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgListTeamMemberRequest;
import org.openapis.openapi.models.operations.OrgListTeamMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgListTeamMemberRequest req = new OrgListTeamMemberRequest(488410L, "occaecati");            

            OrgListTeamMemberResponse res = sdk.organization.orgListTeamMember(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgListTeamMembers

List a team's members

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgListTeamMembersRequest;
import org.openapis.openapi.models.operations.OrgListTeamMembersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgListTeamMembersRequest req = new OrgListTeamMembersRequest(414567L) {{
                limit = 959434L;
                page = 174112L;
            }};            

            OrgListTeamMembersResponse res = sdk.organization.orgListTeamMembers(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgListTeamRepo

List a particular repo of team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgListTeamRepoRequest;
import org.openapis.openapi.models.operations.OrgListTeamRepoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgListTeamRepoRequest req = new OrgListTeamRepoRequest(645570L, "molestiae", "accusantium");            

            OrgListTeamRepoResponse res = sdk.organization.orgListTeamRepo(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgListTeamRepos

List a team's repos

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgListTeamReposRequest;
import org.openapis.openapi.models.operations.OrgListTeamReposResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgListTeamReposRequest req = new OrgListTeamReposRequest(783648L) {{
                limit = 430402L;
                page = 556429L;
            }};            

            OrgListTeamReposResponse res = sdk.organization.orgListTeamRepos(req);

            if (res.repositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgListTeams

List an organization's teams

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgListTeamsRequest;
import org.openapis.openapi.models.operations.OrgListTeamsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgListTeamsRequest req = new OrgListTeamsRequest("praesentium") {{
                limit = 159867L;
                page = 536178L;
            }};            

            OrgListTeamsResponse res = sdk.organization.orgListTeams(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgListUserOrgs

List a user's organizations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgListUserOrgsRequest;
import org.openapis.openapi.models.operations.OrgListUserOrgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgListUserOrgsRequest req = new OrgListUserOrgsRequest("fugit") {{
                limit = 681393L;
                page = 649463L;
            }};            

            OrgListUserOrgsResponse res = sdk.organization.orgListUserOrgs(req);

            if (res.organizations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgPublicizeMember

Publicize a user's membership

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgPublicizeMemberRequest;
import org.openapis.openapi.models.operations.OrgPublicizeMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgPublicizeMemberRequest req = new OrgPublicizeMemberRequest("incidunt", "atque");            

            OrgPublicizeMemberResponse res = sdk.organization.orgPublicizeMember(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgRemoveTeamMember

Remove a team member

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgRemoveTeamMemberRequest;
import org.openapis.openapi.models.operations.OrgRemoveTeamMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgRemoveTeamMemberRequest req = new OrgRemoveTeamMemberRequest(128860L, "minima");            

            OrgRemoveTeamMemberResponse res = sdk.organization.orgRemoveTeamMember(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgRemoveTeamRepository

This does not delete the repository, it only removes the repository from the team.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgRemoveTeamRepositoryRequest;
import org.openapis.openapi.models.operations.OrgRemoveTeamRepositoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OrgRemoveTeamRepositoryRequest req = new OrgRemoveTeamRepositoryRequest(392676L, "fugit", "sapiente");            

            OrgRemoveTeamRepositoryResponse res = sdk.organization.orgRemoveTeamRepository(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamSearch

Search for teams within an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamSearchRequest;
import org.openapis.openapi.models.operations.TeamSearchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            TeamSearchRequest req = new TeamSearchRequest("consequuntur") {{
                includeDesc = false;
                limit = 187131L;
                page = 129412L;
                q = "saepe";
            }};            

            TeamSearchResponse res = sdk.organization.teamSearch(req);

            if (res.teamSearch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
