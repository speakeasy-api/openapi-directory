# SDK

## Overview

The CircleCI API is a RESTful, fully-featured API that allows you to do almost anything in CircleCI.
You can access all information and trigger all actions.
The only thing we don’t provide access to is billing functions, which must be done from the CircleCI web UI.


### Available Operations

* [deleteProjectUsernameProjectBuildCache](#deleteprojectusernameprojectbuildcache) - Clears the cache for a project.

* [deleteProjectUsernameProjectCheckoutKeyFingerprint](#deleteprojectusernameprojectcheckoutkeyfingerprint) - Delete a checkout key.

* [deleteProjectUsernameProjectEnvvarName](#deleteprojectusernameprojectenvvarname) - Deletes the environment variable named ':name'

* [getMe](#getme) - Provides information about the signed in user.

* [getProjectUsernameProject](#getprojectusernameproject) - Build summary for each of the last 30 builds for a single git repo.

* [getProjectUsernameProjectCheckoutKey](#getprojectusernameprojectcheckoutkey) - Lists checkout keys.

* [getProjectUsernameProjectCheckoutKeyFingerprint](#getprojectusernameprojectcheckoutkeyfingerprint) - Get a checkout key.

* [getProjectUsernameProjectEnvvar](#getprojectusernameprojectenvvar) - Lists the environment variables for :project

* [getProjectUsernameProjectEnvvarName](#getprojectusernameprojectenvvarname) - Gets the hidden value of environment variable :name

* [getProjectUsernameProjectBuildNum](#getprojectusernameprojectbuildnum) - Full details for a single build. The response includes all of the fields from the build summary.
This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.

* [getProjectUsernameProjectBuildNumArtifacts](#getprojectusernameprojectbuildnumartifacts) - List the artifacts produced by a given build.

* [getProjectUsernameProjectBuildNumTests](#getprojectusernameprojectbuildnumtests) - Provides test metadata for a build
Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)

* [getProjects](#getprojects) - List of all the projects you're following on CircleCI, with build information organized by branch.

* [getRecentBuilds](#getrecentbuilds) - Build summary for each of the last 30 recent builds, ordered by build_num.

* [postProjectUsernameProject](#postprojectusernameproject) - Triggers a new build, returns a summary of the build.

* [postProjectUsernameProjectCheckoutKey](#postprojectusernameprojectcheckoutkey) - Creates a new checkout key.
Only usable with a user API token.

* [postProjectUsernameProjectEnvvar](#postprojectusernameprojectenvvar) - Creates a new environment variable

* [postProjectUsernameProjectSshKey](#postprojectusernameprojectsshkey) - Create an ssh key used to access external systems that require SSH key-based authentication

* [postProjectUsernameProjectTreeBranch](#postprojectusernameprojecttreebranch) - Triggers a new build, returns a summary of the build.
Optional build parameters can be set using an experimental API.

Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)

* [postProjectUsernameProjectBuildNumCancel](#postprojectusernameprojectbuildnumcancel) - Cancels the build, returns a summary of the build.

* [postProjectUsernameProjectBuildNumRetry](#postprojectusernameprojectbuildnumretry) - Retries the build, returns a summary of the new build.

* [postUserHerokuKey](#postuserherokukey) - Adds your Heroku API key to CircleCI, takes apikey as form param name.


## deleteProjectUsernameProjectBuildCache

Clears the cache for a project.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectUsernameProjectBuildCacheRequest;
import org.openapis.openapi.models.operations.DeleteProjectUsernameProjectBuildCacheResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProjectUsernameProjectBuildCacheRequest req = new DeleteProjectUsernameProjectBuildCacheRequest("unde", "nulla");            

            DeleteProjectUsernameProjectBuildCacheResponse res = sdk.sdk.deleteProjectUsernameProjectBuildCache(req);

            if (res.deleteProjectUsernameProjectBuildCache200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProjectUsernameProjectCheckoutKeyFingerprint

Delete a checkout key.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest;
import org.openapis.openapi.models.operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest req = new DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest("illum", "vel", "error");            

            DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse res = sdk.sdk.deleteProjectUsernameProjectCheckoutKeyFingerprint(req);

            if (res.deleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProjectUsernameProjectEnvvarName

Deletes the environment variable named ':name'


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectUsernameProjectEnvvarNameRequest;
import org.openapis.openapi.models.operations.DeleteProjectUsernameProjectEnvvarNameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProjectUsernameProjectEnvvarNameRequest req = new DeleteProjectUsernameProjectEnvvarNameRequest("suscipit", "iure", "magnam");            

            DeleteProjectUsernameProjectEnvvarNameResponse res = sdk.sdk.deleteProjectUsernameProjectEnvvarName(req);

            if (res.deleteProjectUsernameProjectEnvvarName200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMe

Provides information about the signed in user.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMeResponse res = sdk.sdk.getMe();

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectUsernameProject

Build summary for each of the last 30 builds for a single git repo.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectUsernameProjectRequest;
import org.openapis.openapi.models.operations.GetProjectUsernameProjectResponse;
import org.openapis.openapi.models.shared.FilterEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProjectUsernameProjectRequest req = new GetProjectUsernameProjectRequest("delectus", "tempora") {{
                filter = FilterEnum.SUCCESSFUL;
                limit = 477665L;
                offset = 791725L;
            }};            

            GetProjectUsernameProjectResponse res = sdk.sdk.getProjectUsernameProject(req);

            if (res.builds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectUsernameProjectCheckoutKey

Lists checkout keys.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectUsernameProjectCheckoutKeyRequest;
import org.openapis.openapi.models.operations.GetProjectUsernameProjectCheckoutKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProjectUsernameProjectCheckoutKeyRequest req = new GetProjectUsernameProjectCheckoutKeyRequest("voluptatum", "iusto");            

            GetProjectUsernameProjectCheckoutKeyResponse res = sdk.sdk.getProjectUsernameProjectCheckoutKey(req);

            if (res.keys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectUsernameProjectCheckoutKeyFingerprint

Get a checkout key.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectUsernameProjectCheckoutKeyFingerprintRequest;
import org.openapis.openapi.models.operations.GetProjectUsernameProjectCheckoutKeyFingerprintResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProjectUsernameProjectCheckoutKeyFingerprintRequest req = new GetProjectUsernameProjectCheckoutKeyFingerprintRequest("nisi", "recusandae", "temporibus");            

            GetProjectUsernameProjectCheckoutKeyFingerprintResponse res = sdk.sdk.getProjectUsernameProjectCheckoutKeyFingerprint(req);

            if (res.key != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectUsernameProjectEnvvar

Lists the environment variables for :project


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectUsernameProjectEnvvarRequest;
import org.openapis.openapi.models.operations.GetProjectUsernameProjectEnvvarResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProjectUsernameProjectEnvvarRequest req = new GetProjectUsernameProjectEnvvarRequest("quis", "veritatis");            

            GetProjectUsernameProjectEnvvarResponse res = sdk.sdk.getProjectUsernameProjectEnvvar(req);

            if (res.envvars != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectUsernameProjectEnvvarName

Gets the hidden value of environment variable :name


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectUsernameProjectEnvvarNameRequest;
import org.openapis.openapi.models.operations.GetProjectUsernameProjectEnvvarNameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProjectUsernameProjectEnvvarNameRequest req = new GetProjectUsernameProjectEnvvarNameRequest("perferendis", "ipsam", "repellendus");            

            GetProjectUsernameProjectEnvvarNameResponse res = sdk.sdk.getProjectUsernameProjectEnvvarName(req);

            if (res.envvar != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectUsernameProjectBuildNum

Full details for a single build. The response includes all of the fields from the build summary.
This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectUsernameProjectBuildNumRequest;
import org.openapis.openapi.models.operations.GetProjectUsernameProjectBuildNumResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProjectUsernameProjectBuildNumRequest req = new GetProjectUsernameProjectBuildNumRequest(778157L, "odit", "at");            

            GetProjectUsernameProjectBuildNumResponse res = sdk.sdk.getProjectUsernameProjectBuildNum(req);

            if (res.buildDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectUsernameProjectBuildNumArtifacts

List the artifacts produced by a given build.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectUsernameProjectBuildNumArtifactsRequest;
import org.openapis.openapi.models.operations.GetProjectUsernameProjectBuildNumArtifactsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProjectUsernameProjectBuildNumArtifactsRequest req = new GetProjectUsernameProjectBuildNumArtifactsRequest(978619L, "molestiae", "quod");            

            GetProjectUsernameProjectBuildNumArtifactsResponse res = sdk.sdk.getProjectUsernameProjectBuildNumArtifacts(req);

            if (res.artifacts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectUsernameProjectBuildNumTests

Provides test metadata for a build
Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectUsernameProjectBuildNumTestsRequest;
import org.openapis.openapi.models.operations.GetProjectUsernameProjectBuildNumTestsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProjectUsernameProjectBuildNumTestsRequest req = new GetProjectUsernameProjectBuildNumTestsRequest(461479L, "totam", "porro");            

            GetProjectUsernameProjectBuildNumTestsResponse res = sdk.sdk.getProjectUsernameProjectBuildNumTests(req);

            if (res.tests != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjects

List of all the projects you're following on CircleCI, with build information organized by branch.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProjectsResponse res = sdk.sdk.getProjects();

            if (res.projects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecentBuilds

Build summary for each of the last 30 recent builds, ordered by build_num.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecentBuildsRequest;
import org.openapis.openapi.models.operations.GetRecentBuildsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRecentBuildsRequest req = new GetRecentBuildsRequest() {{
                limit = 720633L;
                offset = 639921L;
            }};            

            GetRecentBuildsResponse res = sdk.sdk.getRecentBuilds(req);

            if (res.builds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProjectUsernameProject

Triggers a new build, returns a summary of the build.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectRequest;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectRequestBody;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostProjectUsernameProjectRequest req = new PostProjectUsernameProjectRequest("fugit", "deleniti") {{
                requestBody = new PostProjectUsernameProjectRequestBody() {{
                    buildParameters = new java.util.HashMap<String, Object>() {{
                        put("optio", "totam");
                        put("beatae", "commodi");
                        put("molestiae", "modi");
                        put("qui", "impedit");
                    }};
                    parallel = "cum";
                    revision = "esse";
                    tag = "ipsum";
                }};;
            }};            

            PostProjectUsernameProjectResponse res = sdk.sdk.postProjectUsernameProject(req);

            if (res.buildSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProjectUsernameProjectCheckoutKey

Creates a new checkout key.
Only usable with a user API token.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectCheckoutKeyRequest;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectCheckoutKeyRequestBodyEnum;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectCheckoutKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostProjectUsernameProjectCheckoutKeyRequest req = new PostProjectUsernameProjectCheckoutKeyRequest("aspernatur", "perferendis") {{
                requestBody = PostProjectUsernameProjectCheckoutKeyRequestBodyEnum.DEPLOY_KEY;
            }};            

            PostProjectUsernameProjectCheckoutKeyResponse res = sdk.sdk.postProjectUsernameProjectCheckoutKey(req);

            if (res.key != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProjectUsernameProjectEnvvar

Creates a new environment variable


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectEnvvarRequest;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectEnvvarResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostProjectUsernameProjectEnvvarRequest req = new PostProjectUsernameProjectEnvvarRequest("sed", "iste");            

            PostProjectUsernameProjectEnvvarResponse res = sdk.sdk.postProjectUsernameProjectEnvvar(req);

            if (res.envvar != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProjectUsernameProjectSshKey

Create an ssh key used to access external systems that require SSH key-based authentication


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectSshKeyContentTypeEnum;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectSshKeyRequest;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectSshKeyRequestBody;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectSshKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostProjectUsernameProjectSshKeyRequest req = new PostProjectUsernameProjectSshKeyRequest(PostProjectUsernameProjectSshKeyContentTypeEnum.APPLICATION_JSON,                 new PostProjectUsernameProjectSshKeyRequestBody() {{
                                hostname = "periodic-glasses.org";
                                privateKey = "saepe";
                            }};, "fuga", "in");            

            PostProjectUsernameProjectSshKeyResponse res = sdk.sdk.postProjectUsernameProjectSshKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProjectUsernameProjectTreeBranch

Triggers a new build, returns a summary of the build.
Optional build parameters can be set using an experimental API.

Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectTreeBranchRequest;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectTreeBranchRequestBody;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectTreeBranchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostProjectUsernameProjectTreeBranchRequest req = new PostProjectUsernameProjectTreeBranchRequest("iste", "iure", "saepe") {{
                requestBody = new PostProjectUsernameProjectTreeBranchRequestBody() {{
                    buildParameters = new java.util.HashMap<String, Object>() {{
                        put("architecto", "ipsa");
                        put("reiciendis", "est");
                        put("mollitia", "laborum");
                    }};
                    parallel = "dolores";
                    revision = "dolorem";
                }};;
            }};            

            PostProjectUsernameProjectTreeBranchResponse res = sdk.sdk.postProjectUsernameProjectTreeBranch(req);

            if (res.build != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProjectUsernameProjectBuildNumCancel

Cancels the build, returns a summary of the build.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectBuildNumCancelRequest;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectBuildNumCancelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostProjectUsernameProjectBuildNumCancelRequest req = new PostProjectUsernameProjectBuildNumCancelRequest(128926L, "nobis", "enim");            

            PostProjectUsernameProjectBuildNumCancelResponse res = sdk.sdk.postProjectUsernameProjectBuildNumCancel(req);

            if (res.build != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProjectUsernameProjectBuildNumRetry

Retries the build, returns a summary of the new build.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectBuildNumRetryRequest;
import org.openapis.openapi.models.operations.PostProjectUsernameProjectBuildNumRetryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostProjectUsernameProjectBuildNumRetryRequest req = new PostProjectUsernameProjectBuildNumRetryRequest(363711L, "minima", "excepturi");            

            PostProjectUsernameProjectBuildNumRetryResponse res = sdk.sdk.postProjectUsernameProjectBuildNumRetry(req);

            if (res.build != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUserHerokuKey

Adds your Heroku API key to CircleCI, takes apikey as form param name.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUserHerokuKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostUserHerokuKeyResponse res = sdk.sdk.postUserHerokuKey();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
