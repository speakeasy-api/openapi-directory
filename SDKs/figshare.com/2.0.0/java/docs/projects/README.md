# projects

### Available Operations

* [privateProjectArticleDelete](#privateprojectarticledelete) - Delete project article
* [privateProjectArticleDetails](#privateprojectarticledetails) - Project article details
* [privateProjectArticleFile](#privateprojectarticlefile) - Project article file details
* [privateProjectArticleFiles](#privateprojectarticlefiles) - Project article list files
* [privateProjectArticlesCreate](#privateprojectarticlescreate) - Create project article
* [privateProjectArticlesList](#privateprojectarticleslist) - List project articles
* [privateProjectCollaboratorDelete](#privateprojectcollaboratordelete) - Remove project collaborator
* [privateProjectCollaboratorsInvite](#privateprojectcollaboratorsinvite) - Invite project collaborators
* [privateProjectCollaboratorsList](#privateprojectcollaboratorslist) - List project collaborators
* [privateProjectCreate](#privateprojectcreate) - Create project
* [privateProjectDelete](#privateprojectdelete) - Delete project
* [privateProjectDetails](#privateprojectdetails) - View project details
* [privateProjectLeave](#privateprojectleave) - Private Project Leave
* [privateProjectNote](#privateprojectnote) - Project note details
* [privateProjectNoteDelete](#privateprojectnotedelete) - Delete project note
* [privateProjectNoteUpdate](#privateprojectnoteupdate) - Update project note
* [privateProjectNotesCreate](#privateprojectnotescreate) - Create project note
* [privateProjectNotesList](#privateprojectnoteslist) - List project notes
* [privateProjectPublish](#privateprojectpublish) - Private Project Publish
* [privateProjectUpdate](#privateprojectupdate) - Update project
* [privateProjectsList](#privateprojectslist) - Private Projects
* [privateProjectsSearch](#privateprojectssearch) - Private Projects search
* [projectArticles](#projectarticles) - Public Project Articles
* [projectDetails](#projectdetails) - Public Project
* [projectsList](#projectslist) - Public Projects
* [projectsSearch](#projectssearch) - Public Projects Search

## privateProjectArticleDelete

Delete project article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectArticleDeleteRequest;
import org.openapis.openapi.models.operations.PrivateProjectArticleDeleteResponse;
import org.openapis.openapi.models.operations.PrivateProjectArticleDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectArticleDeleteRequest req = new PrivateProjectArticleDeleteRequest(536275L, 929292L);            

            PrivateProjectArticleDeleteResponse res = sdk.projects.privateProjectArticleDelete(req, new PrivateProjectArticleDeleteSecurity("dolorum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectArticleDetails

Project article details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectArticleDetailsRequest;
import org.openapis.openapi.models.operations.PrivateProjectArticleDetailsResponse;
import org.openapis.openapi.models.operations.PrivateProjectArticleDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectArticleDetailsRequest req = new PrivateProjectArticleDetailsRequest(99615L, 609178L);            

            PrivateProjectArticleDetailsResponse res = sdk.projects.privateProjectArticleDetails(req, new PrivateProjectArticleDetailsSecurity("tenetur") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.projectArticle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectArticleFile

Project article file details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectArticleFileRequest;
import org.openapis.openapi.models.operations.PrivateProjectArticleFileResponse;
import org.openapis.openapi.models.operations.PrivateProjectArticleFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectArticleFileRequest req = new PrivateProjectArticleFileRequest(98478L, 869489L, 92027L);            

            PrivateProjectArticleFileResponse res = sdk.projects.privateProjectArticleFile(req, new PrivateProjectArticleFileSecurity("voluptate") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.privateFile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectArticleFiles

List article files

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectArticleFilesRequest;
import org.openapis.openapi.models.operations.PrivateProjectArticleFilesResponse;
import org.openapis.openapi.models.operations.PrivateProjectArticleFilesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectArticleFilesRequest req = new PrivateProjectArticleFilesRequest(55965L, 326701L);            

            PrivateProjectArticleFilesResponse res = sdk.projects.privateProjectArticleFiles(req, new PrivateProjectArticleFilesSecurity("veritatis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.privateFiles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectArticlesCreate

Create a new Article and associate it with this project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectArticlesCreateRequest;
import org.openapis.openapi.models.operations.PrivateProjectArticlesCreateResponse;
import org.openapis.openapi.models.operations.PrivateProjectArticlesCreateSecurity;
import org.openapis.openapi.models.shared.ArticleProjectCreate;
import org.openapis.openapi.models.shared.CustomArticleFieldAdd;
import org.openapis.openapi.models.shared.FundingCreate;
import org.openapis.openapi.models.shared.TimelineUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectArticlesCreateRequest req = new PrivateProjectArticlesCreateRequest(                new ArticleProjectCreate("Test article title") {{
                                authors = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("iste", "temporibus");
                                    }}),
                                }};
                                categories = new Long[]{{
                                    add(522371L),
                                }};
                                categoriesBySourceId = new String[]{{
                                    add("laudantium"),
                                }};
                                customFields = new java.util.HashMap<String, Object>() {{
                                    put("mollitia", "ab");
                                    put("corrupti", "non");
                                }};
                                customFieldsList = new org.openapis.openapi.models.shared.CustomArticleFieldAdd[]{{
                                    add(new CustomArticleFieldAdd("key", "occaecati") {{
                                        name = "key";
                                        value = "dolor";
                                    }}),
                                }};
                                definedType = "media";
                                description = "Test description of article";
                                doi = "numquam";
                                funding = "impedit";
                                fundingList = new org.openapis.openapi.models.shared.FundingCreate[]{{
                                    add(new FundingCreate() {{
                                        id = 376226L;
                                        title = "Mr.";
                                    }}),
                                }};
                                handle = "dignissimos";
                                keywords = new String[]{{
                                    add("maiores"),
                                }};
                                license = 1L;
                                references = new String[]{{
                                    add("velit"),
                                    add("voluptatibus"),
                                    add("voluptas"),
                                }};
                                resourceDoi = "asperiores";
                                resourceTitle = "aperiam";
                                tags = new String[]{{
                                    add("quaerat"),
                                    add("consequuntur"),
                                }};
                                timeline = new TimelineUpdate() {{
                                    firstOnline = "2015-12-31";
                                    publisherAcceptance = "2015-12-31";
                                    publisherPublication = "2015-12-31";
                                }};;
                            }};, 831520L) {{
                limit = 638762L;
                offset = 807023L;
                page = 490305L;
                pageSize = 640024L;
            }};            

            PrivateProjectArticlesCreateResponse res = sdk.projects.privateProjectArticlesCreate(req, new PrivateProjectArticlesCreateSecurity("asperiores") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.locationWarnings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectArticlesList

List project articles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectArticlesListRequest;
import org.openapis.openapi.models.operations.PrivateProjectArticlesListResponse;
import org.openapis.openapi.models.operations.PrivateProjectArticlesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectArticlesListRequest req = new PrivateProjectArticlesListRequest(368102L) {{
                limit = 65304L;
                offset = 312753L;
                page = 783235L;
                pageSize = 801836L;
            }};            

            PrivateProjectArticlesListResponse res = sdk.projects.privateProjectArticlesList(req, new PrivateProjectArticlesListSecurity("labore") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.articles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectCollaboratorDelete

Remove project collaborator

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectCollaboratorDeleteRequest;
import org.openapis.openapi.models.operations.PrivateProjectCollaboratorDeleteResponse;
import org.openapis.openapi.models.operations.PrivateProjectCollaboratorDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectCollaboratorDeleteRequest req = new PrivateProjectCollaboratorDeleteRequest(70447L, 241418L);            

            PrivateProjectCollaboratorDeleteResponse res = sdk.projects.privateProjectCollaboratorDelete(req, new PrivateProjectCollaboratorDeleteSecurity("fuga") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectCollaboratorsInvite

Invite users to collaborate on project or view the project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectCollaboratorsInviteRequest;
import org.openapis.openapi.models.operations.PrivateProjectCollaboratorsInviteResponse;
import org.openapis.openapi.models.operations.PrivateProjectCollaboratorsInviteSecurity;
import org.openapis.openapi.models.shared.ProjectCollaboratorInvite;
import org.openapis.openapi.models.shared.ProjectCollaboratorInviteRoleNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectCollaboratorsInviteRequest req = new PrivateProjectCollaboratorsInviteRequest(                new ProjectCollaboratorInvite(ProjectCollaboratorInviteRoleNameEnum.VIEWER) {{
                                comment = "hey";
                                email = "user@domain.com";
                                userId = 100008L;
                            }};, 662505L);            

            PrivateProjectCollaboratorsInviteResponse res = sdk.projects.privateProjectCollaboratorsInvite(req, new PrivateProjectCollaboratorsInviteSecurity("suscipit") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.responseMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectCollaboratorsList

List Project collaborators and invited users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectCollaboratorsListRequest;
import org.openapis.openapi.models.operations.PrivateProjectCollaboratorsListResponse;
import org.openapis.openapi.models.operations.PrivateProjectCollaboratorsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectCollaboratorsListRequest req = new PrivateProjectCollaboratorsListRequest(246063L);            

            PrivateProjectCollaboratorsListResponse res = sdk.projects.privateProjectCollaboratorsList(req, new PrivateProjectCollaboratorsListSecurity("culpa") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.projectCollaborators != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectCreate

Create a new project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectCreateResponse;
import org.openapis.openapi.models.operations.PrivateProjectCreateSecurity;
import org.openapis.openapi.models.shared.CustomArticleFieldAdd;
import org.openapis.openapi.models.shared.FundingCreate;
import org.openapis.openapi.models.shared.ProjectCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ProjectCreate req = new ProjectCreate("project title") {{
                customFields = new java.util.HashMap<String, Object>() {{
                    put("recusandae", "totam");
                    put("fugiat", "vel");
                    put("ducimus", "quos");
                }};
                customFieldsList = new org.openapis.openapi.models.shared.CustomArticleFieldAdd[]{{
                    add(new CustomArticleFieldAdd("key", "possimus") {{
                        name = "key";
                        value = "labore";
                    }}),
                    add(new CustomArticleFieldAdd("key", "cum") {{
                        name = "key";
                        value = "facilis";
                    }}),
                }};
                description = "project description";
                funding = "commodi";
                fundingList = new org.openapis.openapi.models.shared.FundingCreate[]{{
                    add(new FundingCreate() {{
                        id = 360545L;
                        title = "Dr.";
                    }}),
                    add(new FundingCreate() {{
                        id = 828657L;
                        title = "Mrs.";
                    }}),
                }};
                groupId = 924967L;
            }};            

            PrivateProjectCreateResponse res = sdk.projects.privateProjectCreate(req, new PrivateProjectCreateSecurity("aliquid") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectDelete

A project can be deleted only if: - it is not public - it does not have public articles.

When an individual project is deleted, all the articles are moved to my data of each owner.

When a group project is deleted, all the articles and files are deleted as well. Only project owner, group admin and above can delete a project.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectDeleteRequest;
import org.openapis.openapi.models.operations.PrivateProjectDeleteResponse;
import org.openapis.openapi.models.operations.PrivateProjectDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectDeleteRequest req = new PrivateProjectDeleteRequest(46007L);            

            PrivateProjectDeleteResponse res = sdk.projects.privateProjectDelete(req, new PrivateProjectDeleteSecurity("cum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectDetails

View a private project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectDetailsRequest;
import org.openapis.openapi.models.operations.PrivateProjectDetailsResponse;
import org.openapis.openapi.models.operations.PrivateProjectDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectDetailsRequest req = new PrivateProjectDetailsRequest(232627L);            

            PrivateProjectDetailsResponse res = sdk.projects.privateProjectDetails(req, new PrivateProjectDetailsSecurity("in") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.projectCompletePrivate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectLeave

Please note: project's owner cannot leave the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectLeaveRequest;
import org.openapis.openapi.models.operations.PrivateProjectLeaveResponse;
import org.openapis.openapi.models.operations.PrivateProjectLeaveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectLeaveRequest req = new PrivateProjectLeaveRequest(348519L);            

            PrivateProjectLeaveResponse res = sdk.projects.privateProjectLeave(req, new PrivateProjectLeaveSecurity("earum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectNote

Project note details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectNoteRequest;
import org.openapis.openapi.models.operations.PrivateProjectNoteResponse;
import org.openapis.openapi.models.operations.PrivateProjectNoteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectNoteRequest req = new PrivateProjectNoteRequest(814967L, 257233L);            

            PrivateProjectNoteResponse res = sdk.projects.privateProjectNote(req, new PrivateProjectNoteSecurity("doloribus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.projectNotePrivate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectNoteDelete

Delete project note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectNoteDeleteRequest;
import org.openapis.openapi.models.operations.PrivateProjectNoteDeleteResponse;
import org.openapis.openapi.models.operations.PrivateProjectNoteDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectNoteDeleteRequest req = new PrivateProjectNoteDeleteRequest(381760L, 968972L);            

            PrivateProjectNoteDeleteResponse res = sdk.projects.privateProjectNoteDelete(req, new PrivateProjectNoteDeleteSecurity("quidem") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectNoteUpdate

Update project note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectNoteUpdateRequest;
import org.openapis.openapi.models.operations.PrivateProjectNoteUpdateResponse;
import org.openapis.openapi.models.operations.PrivateProjectNoteUpdateSecurity;
import org.openapis.openapi.models.shared.ProjectNoteCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectNoteUpdateRequest req = new PrivateProjectNoteUpdateRequest(                new ProjectNoteCreate("note to remember");, 904949L, 897071L);            

            PrivateProjectNoteUpdateResponse res = sdk.projects.privateProjectNoteUpdate(req, new PrivateProjectNoteUpdateSecurity("dolore") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectNotesCreate

Create a new project note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectNotesCreateRequest;
import org.openapis.openapi.models.operations.PrivateProjectNotesCreateResponse;
import org.openapis.openapi.models.operations.PrivateProjectNotesCreateSecurity;
import org.openapis.openapi.models.shared.ProjectNoteCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectNotesCreateRequest req = new PrivateProjectNotesCreateRequest(                new ProjectNoteCreate("note to remember");, 121059L);            

            PrivateProjectNotesCreateResponse res = sdk.projects.privateProjectNotesCreate(req, new PrivateProjectNotesCreateSecurity("asperiores") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.location != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectNotesList

List project notes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectNotesListRequest;
import org.openapis.openapi.models.operations.PrivateProjectNotesListResponse;
import org.openapis.openapi.models.operations.PrivateProjectNotesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectNotesListRequest req = new PrivateProjectNotesListRequest(241545L) {{
                limit = 249420L;
                offset = 228263L;
                page = 105906L;
                pageSize = 489509L;
            }};            

            PrivateProjectNotesListResponse res = sdk.projects.privateProjectNotesList(req, new PrivateProjectNotesListSecurity("a") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.projectNotes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectPublish

Publish a project. Possible after all items inside it are public

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectPublishRequest;
import org.openapis.openapi.models.operations.PrivateProjectPublishResponse;
import org.openapis.openapi.models.operations.PrivateProjectPublishSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectPublishRequest req = new PrivateProjectPublishRequest(891523L);            

            PrivateProjectPublishResponse res = sdk.projects.privateProjectPublish(req, new PrivateProjectPublishSecurity("consectetur") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.responseMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectUpdate

Updating an project by passing body parameters; request can also be made with the PATCH method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectUpdateRequest;
import org.openapis.openapi.models.operations.PrivateProjectUpdateResponse;
import org.openapis.openapi.models.operations.PrivateProjectUpdateSecurity;
import org.openapis.openapi.models.shared.CustomArticleFieldAdd;
import org.openapis.openapi.models.shared.FundingCreate;
import org.openapis.openapi.models.shared.ProjectUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectUpdateRequest req = new PrivateProjectUpdateRequest(                new ProjectUpdate() {{
                                customFields = new java.util.HashMap<String, Object>() {{
                                    put("harum", "laboriosam");
                                    put("ipsa", "voluptates");
                                }};
                                customFieldsList = new org.openapis.openapi.models.shared.CustomArticleFieldAdd[]{{
                                    add(new CustomArticleFieldAdd("key", "accusamus") {{
                                        name = "key";
                                        value = "vitae";
                                    }}),
                                    add(new CustomArticleFieldAdd("key", "tempora") {{
                                        name = "key";
                                        value = "similique";
                                    }}),
                                    add(new CustomArticleFieldAdd("key", "voluptas") {{
                                        name = "key";
                                        value = "aspernatur";
                                    }}),
                                }};
                                description = "project description";
                                funding = "voluptas";
                                fundingList = new org.openapis.openapi.models.shared.FundingCreate[]{{
                                    add(new FundingCreate() {{
                                        id = 324405L;
                                        title = "Miss";
                                    }}),
                                    add(new FundingCreate() {{
                                        id = 680116L;
                                        title = "Mrs.";
                                    }}),
                                }};
                                title = "project title";
                            }};, 795535L);            

            PrivateProjectUpdateResponse res = sdk.projects.privateProjectUpdate(req, new PrivateProjectUpdateSecurity("dolores") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectsList

List private projects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectsListOrderDirectionEnum;
import org.openapis.openapi.models.operations.PrivateProjectsListOrderEnum;
import org.openapis.openapi.models.operations.PrivateProjectsListRequest;
import org.openapis.openapi.models.operations.PrivateProjectsListResponse;
import org.openapis.openapi.models.operations.PrivateProjectsListSecurity;
import org.openapis.openapi.models.operations.PrivateProjectsListStorageEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateProjectsListRequest req = new PrivateProjectsListRequest() {{
                limit = 503934L;
                offset = 449292L;
                order = PrivateProjectsListOrderEnum.PUBLISHED_DATE;
                orderDirection = PrivateProjectsListOrderDirectionEnum.ASC;
                page = 885963L;
                pageSize = 839189L;
                roles = "ullam";
                storage = PrivateProjectsListStorageEnum.GROUP;
            }};            

            PrivateProjectsListResponse res = sdk.projects.privateProjectsList(req, new PrivateProjectsListSecurity("cum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.projectPrivates != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateProjectsSearch

Search inside the private projects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateProjectsSearchResponse;
import org.openapis.openapi.models.shared.ProjectsSearch;
import org.openapis.openapi.models.shared.ProjectsSearchOrderDirectionEnum;
import org.openapis.openapi.models.shared.ProjectsSearchOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ProjectsSearch req = new ProjectsSearch() {{
                group = 2000013;
                institution = 2000013;
                limit = 10L;
                modifiedSince = "2017-12-22";
                offset = 502389L;
                order = ProjectsSearchOrderEnum.PUBLISHED_DATE;
                orderDirection = ProjectsSearchOrderDirectionEnum.DESC;
                page = 1L;
                pageSize = 10L;
                publishedSince = "2017-12-22";
                searchFor = "figshare";
            }};            

            PrivateProjectsSearchResponse res = sdk.projects.privateProjectsSearch(req);

            if (res.projectPrivates != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectArticles

List articles in project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectArticlesRequest;
import org.openapis.openapi.models.operations.ProjectArticlesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectArticlesRequest req = new ProjectArticlesRequest(555361L);            

            ProjectArticlesResponse res = sdk.projects.projectArticles(req);

            if (res.articles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectDetails

View a project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectDetailsRequest;
import org.openapis.openapi.models.operations.ProjectDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectDetailsRequest req = new ProjectDetailsRequest(942584L);            

            ProjectDetailsResponse res = sdk.projects.projectDetails(req);

            if (res.projectComplete != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsList

Returns a list of public projects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsListOrderDirectionEnum;
import org.openapis.openapi.models.operations.ProjectsListOrderEnum;
import org.openapis.openapi.models.operations.ProjectsListRequest;
import org.openapis.openapi.models.operations.ProjectsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsListRequest req = new ProjectsListRequest() {{
                xCursor = "3a8d8f5c-0b2f-42fb-bb19-4a276b26916f";
                group = 895386L;
                institution = 72434L;
                limit = 967795L;
                offset = 19300L;
                order = ProjectsListOrderEnum.MODIFIED_DATE;
                orderDirection = ProjectsListOrderDirectionEnum.DESC;
                page = 274823L;
                pageSize = 148478L;
                publishedSince = "provident";
            }};            

            ProjectsListResponse res = sdk.projects.projectsList(req);

            if (res.projects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsSearch

Returns a list of public articles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsSearchRequest;
import org.openapis.openapi.models.operations.ProjectsSearchResponse;
import org.openapis.openapi.models.shared.ProjectsSearch;
import org.openapis.openapi.models.shared.ProjectsSearchOrderDirectionEnum;
import org.openapis.openapi.models.shared.ProjectsSearchOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsSearchRequest req = new ProjectsSearchRequest() {{
                projectsSearch = new ProjectsSearch() {{
                    group = 2000013;
                    institution = 2000013;
                    limit = 10L;
                    modifiedSince = "2017-12-22";
                    offset = 258702L;
                    order = ProjectsSearchOrderEnum.PUBLISHED_DATE;
                    orderDirection = ProjectsSearchOrderDirectionEnum.DESC;
                    page = 1L;
                    pageSize = 10L;
                    publishedSince = "2017-12-22";
                    searchFor = "figshare";
                }};;
                xCursor = "e3698f44-7f60-43e8-b445-e80ca55efd20";
            }};            

            ProjectsSearchResponse res = sdk.projects.projectsSearch(req);

            if (res.projects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
