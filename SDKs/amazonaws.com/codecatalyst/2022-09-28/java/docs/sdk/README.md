# SDK

## Overview

<p>Welcome to the Amazon CodeCatalyst API reference. This reference provides descriptions of operations and data types for Amazon CodeCatalyst. You can use the Amazon CodeCatalyst API to work with the following objects. </p> <p>Dev Environments and the Amazon Web Services Toolkits, by calling the following:</p> <ul> <li> <p> <a>CreateAccessToken</a>, which creates a personal access token (PAT) for the current user.</p> </li> <li> <p> <a>CreateDevEnvironment</a>, which creates a Dev Environment, where you can quickly work on the code stored in the source repositories of your project.</p> </li> <li> <p> <a>CreateProject</a> which creates a project in a specified space.</p> </li> <li> <p> <a>CreateSourceRepositoryBranch</a>, which creates a branch in a specified repository where you can work on code.</p> </li> <li> <p> <a>DeleteDevEnvironment</a>, which deletes a Dev Environment.</p> </li> <li> <p> <a>GetDevEnvironment</a>, which returns information about a Dev Environment.</p> </li> <li> <p> <a>GetProject</a>, which returns information about a project.</p> </li> <li> <p> <a>GetSourceRepositoryCloneUrls</a>, which returns information about the URLs that can be used with a Git client to clone a source repository.</p> </li> <li> <p> <a>GetSpace</a>, which returns information about a space.</p> </li> <li> <p> <a>GetSubscription</a>, which returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.</p> </li> <li> <p> <a>GetUserDetails</a>, which returns information about a user in Amazon CodeCatalyst.</p> </li> <li> <p> <a>ListDevEnvironments</a>, which retrieves a list of Dev Environments in a project.</p> </li> <li> <p> <a>ListProjects</a>, which retrieves a list of projects in a space.</p> </li> <li> <p> <a>ListSourceRepositories</a>, which retrieves a list of source repositories in a project.</p> </li> <li> <p> <a>ListSourceRepositoryBranches</a>, which retrieves a list of branches in a source repository.</p> </li> <li> <p> <a>ListSpaces</a>, which retrieves a list of spaces.</p> </li> <li> <p> <a>StartDevEnvironment</a>, which starts a specified Dev Environment and puts it into an active state.</p> </li> <li> <p> <a>StartDevEnvironmentSession</a>, which starts a session to a specified Dev Environment.</p> </li> <li> <p> <a>StopDevEnvironment</a>, which stops a specified Dev Environment and puts it into an stopped state.</p> </li> <li> <p> <a>StopDevEnvironmentSession</a>, which stops a session for a specified Dev Environment.</p> </li> <li> <p> <a>UpdateDevEnvironment</a>, which changes one or more values for a Dev Environment.</p> </li> <li> <p> <a>VerifySession</a>, which verifies whether the calling user has a valid Amazon CodeCatalyst login and session.</p> </li> </ul> <p>Security, activity, and resource management in Amazon CodeCatalyst, by calling the following:</p> <ul> <li> <p> <a>DeleteAccessToken</a>, which deletes a specified personal access token (PAT).</p> </li> <li> <p> <a>ListAccessTokens</a>, which lists all personal access tokens (PATs) associated with a user.</p> </li> <li> <p> <a>ListEventLogs</a>, which retrieves a list of events that occurred during a specified time period in a space.</p> </li> </ul> <note> <p>If you are using the Amazon CodeCatalyst APIs with an SDK or the CLI, you must configure your computer to work with Amazon CodeCatalyst and single sign-on (SSO). For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/set-up-cli.html">Setting up to use the CLI with Amazon CodeCatalyst</a> and the SSO documentation for your SDK.</p> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codecatalyst/>
### Available Operations

* [createAccessToken](#createaccesstoken) - Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password. It is associated with your user identity for use across all spaces and projects in Amazon CodeCatalyst. You use PATs to access CodeCatalyst from resources that include integrated development environments (IDEs) and Git-based source repositories. PATs represent you in Amazon CodeCatalyst and you can manage them in your user settings.For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-tokens-keys.html">Managing personal access tokens in Amazon CodeCatalyst</a>.
* [createDevEnvironment](#createdevenvironment) - <p>Creates a Dev Environment in Amazon CodeCatalyst, a cloud-based development environment that you can use to quickly work on the code stored in the source repositories of your project. </p> <note> <p>When created in the Amazon CodeCatalyst console, by default a Dev Environment is configured to have a 2 core processor, 4GB of RAM, and 16GB of persistent storage. None of these defaults apply to a Dev Environment created programmatically.</p> </note>
* [createProject](#createproject) - Creates a project in a specified space.
* [createSourceRepositoryBranch](#createsourcerepositorybranch) - <p>Creates a branch in a specified source repository in Amazon CodeCatalyst. </p> <note> <p>This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository.</p> </note>
* [deleteAccessToken](#deleteaccesstoken) - Deletes a specified personal access token (PAT). A personal access token can only be deleted by the user who created it.
* [deleteDevEnvironment](#deletedevenvironment) - Deletes a Dev Environment. 
* [getDevEnvironment](#getdevenvironment) - Returns information about a Dev Environment for a source repository in a project. Dev Environments are specific to the user who creates them.
* [getProject](#getproject) - Returns information about a project.
* [getSourceRepositoryCloneUrls](#getsourcerepositorycloneurls) - Returns information about the URLs that can be used with a Git client to clone a source repository.
* [getSpace](#getspace) - Returns information about an space.
* [getSubscription](#getsubscription) - Returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.
* [getUserDetails](#getuserdetails) - Returns information about a user. 
* [listAccessTokens](#listaccesstokens) - Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your Amazon Web Services Builder ID.
* [listDevEnvironments](#listdevenvironments) - Retrieves a list of Dev Environments in a project.
* [listEventLogs](#listeventlogs) - Retrieves a list of events that occurred during a specified time period in a space. You can use these events to audit user and system activity in a space.
* [listProjects](#listprojects) - Retrieves a list of projects.
* [listSourceRepositories](#listsourcerepositories) - Retrieves a list of source repositories in a project.
* [listSourceRepositoryBranches](#listsourcerepositorybranches) - Retrieves a list of branches in a specified source repository.
* [listSpaces](#listspaces) - Retrieves a list of spaces.
* [startDevEnvironment](#startdevenvironment) - Starts a specified Dev Environment and puts it into an active state. 
* [startDevEnvironmentSession](#startdevenvironmentsession) - Starts a session for a specified Dev Environment.
* [stopDevEnvironment](#stopdevenvironment) - Pauses a specified Dev Environment and places it in a non-running state. Stopped Dev Environments do not consume compute minutes.
* [stopDevEnvironmentSession](#stopdevenvironmentsession) - Stops a session for a specified Dev Environment.
* [updateDevEnvironment](#updatedevenvironment) - Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.
* [verifySession](#verifysession) - Verifies whether the calling user has a valid Amazon CodeCatalyst login and session. If successful, this returns the ID of the user in Amazon CodeCatalyst.

## createAccessToken

Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password. It is associated with your user identity for use across all spaces and projects in Amazon CodeCatalyst. You use PATs to access CodeCatalyst from resources that include integrated development environments (IDEs) and Git-based source repositories. PATs represent you in Amazon CodeCatalyst and you can manage them in your user settings.For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-tokens-keys.html">Managing personal access tokens in Amazon CodeCatalyst</a>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccessTokenRequestBody;
import org.openapis.openapi.models.operations.CreateAccessTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccessTokenRequestBody req = new CreateAccessTokenRequestBody("nulla") {{
                expiresTime = OffsetDateTime.parse("2021-04-22T12:08:58.275Z");
            }};            

            CreateAccessTokenResponse res = sdk.sdk.createAccessToken(req);

            if (res.createAccessTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDevEnvironment

<p>Creates a Dev Environment in Amazon CodeCatalyst, a cloud-based development environment that you can use to quickly work on the code stored in the source repositories of your project. </p> <note> <p>When created in the Amazon CodeCatalyst console, by default a Dev Environment is configured to have a 2 core processor, 4GB of RAM, and 16GB of persistent storage. None of these defaults apply to a Dev Environment created programmatically.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDevEnvironmentRequest;
import org.openapis.openapi.models.operations.CreateDevEnvironmentRequestBody;
import org.openapis.openapi.models.operations.CreateDevEnvironmentRequestBodyInstanceTypeEnum;
import org.openapis.openapi.models.operations.CreateDevEnvironmentRequestBodyPersistentStorage;
import org.openapis.openapi.models.operations.CreateDevEnvironmentResponse;
import org.openapis.openapi.models.shared.IdeConfiguration;
import org.openapis.openapi.models.shared.RepositoryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDevEnvironmentRequest req = new CreateDevEnvironmentRequest(                new CreateDevEnvironmentRequestBody(CreateDevEnvironmentRequestBodyInstanceTypeEnum.DEV_STANDARD1_LARGE,                 new CreateDevEnvironmentRequestBodyPersistentStorage() {{
                                                sizeInGiB = 645894L;
                                            }};) {{
                                alias = "suscipit";
                                clientToken = "iure";
                                ides = new org.openapis.openapi.models.shared.IdeConfiguration[]{{
                                    add(new IdeConfiguration() {{
                                        name = "Larry Windler";
                                        runtime = "molestiae";
                                    }}),
                                    add(new IdeConfiguration() {{
                                        name = "Irving Lehner";
                                        runtime = "nisi";
                                    }}),
                                }};
                                inactivityTimeoutMinutes = 925597L;
                                repositories = new org.openapis.openapi.models.shared.RepositoryInput[]{{
                                    add(new RepositoryInput("veritatis") {{
                                        branchName = "ab";
                                        repositoryName = "quis";
                                    }}),
                                    add(new RepositoryInput("ipsam") {{
                                        branchName = "deserunt";
                                        repositoryName = "perferendis";
                                    }}),
                                    add(new RepositoryInput("quo") {{
                                        branchName = "repellendus";
                                        repositoryName = "sapiente";
                                    }}),
                                    add(new RepositoryInput("at") {{
                                        branchName = "odit";
                                        repositoryName = "at";
                                    }}),
                                }};
                            }};, "maiores", "molestiae");            

            CreateDevEnvironmentResponse res = sdk.sdk.createDevEnvironment(req);

            if (res.createDevEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProject

Creates a project in a specified space.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectRequestBody;
import org.openapis.openapi.models.operations.CreateProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProjectRequest req = new CreateProjectRequest(                new CreateProjectRequestBody("quod") {{
                                description = "esse";
                            }};, "totam");            

            CreateProjectResponse res = sdk.sdk.createProject(req);

            if (res.createProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSourceRepositoryBranch

<p>Creates a branch in a specified source repository in Amazon CodeCatalyst. </p> <note> <p>This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSourceRepositoryBranchRequest;
import org.openapis.openapi.models.operations.CreateSourceRepositoryBranchRequestBody;
import org.openapis.openapi.models.operations.CreateSourceRepositoryBranchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSourceRepositoryBranchRequest req = new CreateSourceRepositoryBranchRequest(                new CreateSourceRepositoryBranchRequestBody() {{
                                headCommitId = "dolorum";
                            }};, "dicta", "nam", "officia", "occaecati");            

            CreateSourceRepositoryBranchResponse res = sdk.sdk.createSourceRepositoryBranch(req);

            if (res.createSourceRepositoryBranchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccessToken

Deletes a specified personal access token (PAT). A personal access token can only be deleted by the user who created it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccessTokenRequest;
import org.openapis.openapi.models.operations.DeleteAccessTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAccessTokenRequest req = new DeleteAccessTokenRequest("deleniti");            

            DeleteAccessTokenResponse res = sdk.sdk.deleteAccessToken(req);

            if (res.deleteAccessTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDevEnvironment

Deletes a Dev Environment. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDevEnvironmentRequest;
import org.openapis.openapi.models.operations.DeleteDevEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDevEnvironmentRequest req = new DeleteDevEnvironmentRequest("optio", "totam", "beatae");            

            DeleteDevEnvironmentResponse res = sdk.sdk.deleteDevEnvironment(req);

            if (res.deleteDevEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevEnvironment

Returns information about a Dev Environment for a source repository in a project. Dev Environments are specific to the user who creates them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDevEnvironmentRequest;
import org.openapis.openapi.models.operations.GetDevEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDevEnvironmentRequest req = new GetDevEnvironmentRequest("molestiae", "modi", "qui");            

            GetDevEnvironmentResponse res = sdk.sdk.getDevEnvironment(req);

            if (res.getDevEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProject

Returns information about a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectRequest;
import org.openapis.openapi.models.operations.GetProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProjectRequest req = new GetProjectRequest("cum", "esse");            

            GetProjectResponse res = sdk.sdk.getProject(req);

            if (res.getProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSourceRepositoryCloneUrls

Returns information about the URLs that can be used with a Git client to clone a source repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSourceRepositoryCloneUrlsRequest;
import org.openapis.openapi.models.operations.GetSourceRepositoryCloneUrlsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSourceRepositoryCloneUrlsRequest req = new GetSourceRepositoryCloneUrlsRequest("excepturi", "aspernatur", "perferendis");            

            GetSourceRepositoryCloneUrlsResponse res = sdk.sdk.getSourceRepositoryCloneUrls(req);

            if (res.getSourceRepositoryCloneUrlsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpace

Returns information about an space.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpaceRequest;
import org.openapis.openapi.models.operations.GetSpaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSpaceRequest req = new GetSpaceRequest("natus");            

            GetSpaceResponse res = sdk.sdk.getSpace(req);

            if (res.getSpaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscription

Returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionRequest;
import org.openapis.openapi.models.operations.GetSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSubscriptionRequest req = new GetSubscriptionRequest("iste");            

            GetSubscriptionResponse res = sdk.sdk.getSubscription(req);

            if (res.getSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserDetails

Returns information about a user. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserDetailsRequest;
import org.openapis.openapi.models.operations.GetUserDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserDetailsRequest req = new GetUserDetailsRequest() {{
                id = "96fea759-6eb1-40fa-aa23-52c5955907af";
                userName = "Veronica.Brakus";
            }};            

            GetUserDetailsResponse res = sdk.sdk.getUserDetails(req);

            if (res.getUserDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccessTokens

Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your Amazon Web Services Builder ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccessTokensRequest;
import org.openapis.openapi.models.operations.ListAccessTokensRequestBody;
import org.openapis.openapi.models.operations.ListAccessTokensResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccessTokensRequest req = new ListAccessTokensRequest(                new ListAccessTokensRequestBody() {{
                                maxResults = 161309L;
                                nextToken = "repellat";
                            }};) {{
                maxResults = "mollitia";
                nextToken = "occaecati";
            }};            

            ListAccessTokensResponse res = sdk.sdk.listAccessTokens(req);

            if (res.listAccessTokensResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDevEnvironments

Retrieves a list of Dev Environments in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDevEnvironmentsRequest;
import org.openapis.openapi.models.operations.ListDevEnvironmentsRequestBody;
import org.openapis.openapi.models.operations.ListDevEnvironmentsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDevEnvironmentsRequest req = new ListDevEnvironmentsRequest(                new ListDevEnvironmentsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("quia",                 new String[]{{
                                                        add("vitae"),
                                                        add("laborum"),
                                                    }}) {{
                                        comparisonOperator = "quam";
                                        key = "molestiae";
                                        values = new String[]{{
                                            add("error"),
                                        }};
                                    }}),
                                    add(new Filter("sequi",                 new String[]{{
                                                        add("ipsam"),
                                                        add("id"),
                                                        add("possimus"),
                                                        add("aut"),
                                                    }}) {{
                                        comparisonOperator = "animi";
                                        key = "enim";
                                        values = new String[]{{
                                            add("quo"),
                                        }};
                                    }}),
                                }};
                                maxResults = 97101L;
                                nextToken = "error";
                            }};, "temporibus", "laborum") {{
                maxResults = "quasi";
                nextToken = "reiciendis";
            }};            

            ListDevEnvironmentsResponse res = sdk.sdk.listDevEnvironments(req);

            if (res.listDevEnvironmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEventLogs

Retrieves a list of events that occurred during a specified time period in a space. You can use these events to audit user and system activity in a space.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEventLogsRequest;
import org.openapis.openapi.models.operations.ListEventLogsRequestBody;
import org.openapis.openapi.models.operations.ListEventLogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEventLogsRequest req = new ListEventLogsRequest(                new ListEventLogsRequestBody(OffsetDateTime.parse("2021-08-05T19:50:46.898Z"), OffsetDateTime.parse("2021-01-17T23:08:44.457Z")) {{
                                eventName = "ipsa";
                                maxResults = 604846L;
                                nextToken = "voluptate";
                            }};, "cum") {{
                maxResults = "perferendis";
                nextToken = "doloremque";
            }};            

            ListEventLogsResponse res = sdk.sdk.listEventLogs(req);

            if (res.listEventLogsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProjects

Retrieves a list of projects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProjectsRequest;
import org.openapis.openapi.models.operations.ListProjectsRequestBody;
import org.openapis.openapi.models.operations.ListProjectsResponse;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.FilterKeyEnum;
import org.openapis.openapi.models.shared.ProjectListFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProjectsRequest req = new ListProjectsRequest(                new ListProjectsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.ProjectListFilter[]{{
                                    add(new ProjectListFilter(FilterKeyEnum.HAS_ACCESS_TO,                 new String[]{{
                                                        add("iusto"),
                                                        add("dicta"),
                                                    }}) {{
                                        comparisonOperator = ComparisonOperatorEnum.LE;
                                        key = FilterKeyEnum.HAS_ACCESS_TO;
                                        values = new String[]{{
                                            add("corporis"),
                                        }};
                                    }}),
                                    add(new ProjectListFilter(FilterKeyEnum.HAS_ACCESS_TO,                 new String[]{{
                                                        add("quae"),
                                                        add("ipsum"),
                                                        add("quidem"),
                                                        add("molestias"),
                                                    }}) {{
                                        comparisonOperator = ComparisonOperatorEnum.LT;
                                        key = FilterKeyEnum.HAS_ACCESS_TO;
                                        values = new String[]{{
                                            add("accusamus"),
                                            add("commodi"),
                                        }};
                                    }}),
                                }};
                                maxResults = 566602L;
                                nextToken = "pariatur";
                            }};, "modi") {{
                maxResults = "praesentium";
                nextToken = "rem";
            }};            

            ListProjectsResponse res = sdk.sdk.listProjects(req);

            if (res.listProjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSourceRepositories

Retrieves a list of source repositories in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSourceRepositoriesRequest;
import org.openapis.openapi.models.operations.ListSourceRepositoriesRequestBody;
import org.openapis.openapi.models.operations.ListSourceRepositoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSourceRepositoriesRequest req = new ListSourceRepositoriesRequest(                new ListSourceRepositoriesRequestBody() {{
                                maxResults = 93940L;
                                nextToken = "repudiandae";
                            }};, "sint", "veritatis") {{
                maxResults = "itaque";
                nextToken = "incidunt";
            }};            

            ListSourceRepositoriesResponse res = sdk.sdk.listSourceRepositories(req);

            if (res.listSourceRepositoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSourceRepositoryBranches

Retrieves a list of branches in a specified source repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSourceRepositoryBranchesRequest;
import org.openapis.openapi.models.operations.ListSourceRepositoryBranchesRequestBody;
import org.openapis.openapi.models.operations.ListSourceRepositoryBranchesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSourceRepositoryBranchesRequest req = new ListSourceRepositoryBranchesRequest(                new ListSourceRepositoryBranchesRequestBody() {{
                                maxResults = 9356L;
                                nextToken = "est";
                            }};, "quibusdam", "explicabo", "deserunt") {{
                maxResults = "distinctio";
                nextToken = "quibusdam";
            }};            

            ListSourceRepositoryBranchesResponse res = sdk.sdk.listSourceRepositoryBranches(req);

            if (res.listSourceRepositoryBranchesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSpaces

Retrieves a list of spaces.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSpacesRequest;
import org.openapis.openapi.models.operations.ListSpacesRequestBody;
import org.openapis.openapi.models.operations.ListSpacesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSpacesRequest req = new ListSpacesRequest(                new ListSpacesRequestBody() {{
                                nextToken = "modi";
                            }};) {{
                nextToken = "qui";
            }};            

            ListSpacesResponse res = sdk.sdk.listSpaces(req);

            if (res.listSpacesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startDevEnvironment

Starts a specified Dev Environment and puts it into an active state. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartDevEnvironmentRequest;
import org.openapis.openapi.models.operations.StartDevEnvironmentRequestBody;
import org.openapis.openapi.models.operations.StartDevEnvironmentRequestBodyInstanceTypeEnum;
import org.openapis.openapi.models.operations.StartDevEnvironmentResponse;
import org.openapis.openapi.models.shared.IdeConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartDevEnvironmentRequest req = new StartDevEnvironmentRequest(                new StartDevEnvironmentRequestBody() {{
                                ides = new org.openapis.openapi.models.shared.IdeConfiguration[]{{
                                    add(new IdeConfiguration() {{
                                        name = "Christopher Cummerata";
                                        runtime = "alias";
                                    }}),
                                    add(new IdeConfiguration() {{
                                        name = "Sonya Marks";
                                        runtime = "tempore";
                                    }}),
                                    add(new IdeConfiguration() {{
                                        name = "Lucia Kemmer";
                                        runtime = "sint";
                                    }}),
                                }};
                                inactivityTimeoutMinutes = 396098L;
                                instanceType = StartDevEnvironmentRequestBodyInstanceTypeEnum.DEV_STANDARD1_LARGE;
                            }};, "necessitatibus", "sint", "officia");            

            StartDevEnvironmentResponse res = sdk.sdk.startDevEnvironment(req);

            if (res.startDevEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startDevEnvironmentSession

Starts a session for a specified Dev Environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartDevEnvironmentSessionRequest;
import org.openapis.openapi.models.operations.StartDevEnvironmentSessionRequestBody;
import org.openapis.openapi.models.operations.StartDevEnvironmentSessionRequestBodySessionConfiguration;
import org.openapis.openapi.models.operations.StartDevEnvironmentSessionResponse;
import org.openapis.openapi.models.shared.DevEnvironmentSessionTypeEnum;
import org.openapis.openapi.models.shared.ExecuteCommandSessionConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartDevEnvironmentSessionRequest req = new StartDevEnvironmentSessionRequest(                new StartDevEnvironmentSessionRequestBody(                new StartDevEnvironmentSessionRequestBodySessionConfiguration() {{
                                                executeCommandSessionConfiguration = new ExecuteCommandSessionConfiguration("debitis") {{
                                                    arguments = new String[]{{
                                                        add("dolorum"),
                                                        add("in"),
                                                        add("in"),
                                                        add("illum"),
                                                    }};
                                                }};;
                                                sessionType = DevEnvironmentSessionTypeEnum.SSH;
                                            }};);, "rerum", "dicta", "magnam");            

            StartDevEnvironmentSessionResponse res = sdk.sdk.startDevEnvironmentSession(req);

            if (res.startDevEnvironmentSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopDevEnvironment

Pauses a specified Dev Environment and places it in a non-running state. Stopped Dev Environments do not consume compute minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopDevEnvironmentRequest;
import org.openapis.openapi.models.operations.StopDevEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopDevEnvironmentRequest req = new StopDevEnvironmentRequest("facere", "ea", "aliquid");            

            StopDevEnvironmentResponse res = sdk.sdk.stopDevEnvironment(req);

            if (res.stopDevEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopDevEnvironmentSession

Stops a session for a specified Dev Environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopDevEnvironmentSessionRequest;
import org.openapis.openapi.models.operations.StopDevEnvironmentSessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopDevEnvironmentSessionRequest req = new StopDevEnvironmentSessionRequest("accusamus", "non", "occaecati", "enim");            

            StopDevEnvironmentSessionResponse res = sdk.sdk.stopDevEnvironmentSession(req);

            if (res.stopDevEnvironmentSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDevEnvironment

Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDevEnvironmentRequest;
import org.openapis.openapi.models.operations.UpdateDevEnvironmentRequestBody;
import org.openapis.openapi.models.operations.UpdateDevEnvironmentRequestBodyInstanceTypeEnum;
import org.openapis.openapi.models.operations.UpdateDevEnvironmentResponse;
import org.openapis.openapi.models.shared.IdeConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDevEnvironmentRequest req = new UpdateDevEnvironmentRequest(                new UpdateDevEnvironmentRequestBody() {{
                                alias = "delectus";
                                clientToken = "quidem";
                                ides = new org.openapis.openapi.models.shared.IdeConfiguration[]{{
                                    add(new IdeConfiguration() {{
                                        name = "Lynn Kuvalis";
                                        runtime = "amet";
                                    }}),
                                    add(new IdeConfiguration() {{
                                        name = "Tyler Kassulke";
                                        runtime = "molestiae";
                                    }}),
                                    add(new IdeConfiguration() {{
                                        name = "Marcia Gutkowski";
                                        runtime = "labore";
                                    }}),
                                }};
                                inactivityTimeoutMinutes = 290077L;
                                instanceType = UpdateDevEnvironmentRequestBodyInstanceTypeEnum.DEV_STANDARD1_MEDIUM;
                            }};, "natus", "nobis", "eum");            

            UpdateDevEnvironmentResponse res = sdk.sdk.updateDevEnvironment(req);

            if (res.updateDevEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## verifySession

Verifies whether the calling user has a valid Amazon CodeCatalyst login and session. If successful, this returns the ID of the user in Amazon CodeCatalyst.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifySessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            VerifySessionResponse res = sdk.sdk.verifySession();

            if (res.verifySessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
