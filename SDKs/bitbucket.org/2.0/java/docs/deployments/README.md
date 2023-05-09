# deployments

## Overview

Teams are deploying code faster than ever, thanks to continuous
delivery practices and tools like Bitbucket Pipelines. Bitbucket
Deployments gives teams visibility into their deployment
environments and helps teams to track how far changes have
progressed in their deployment pipeline.


### Available Operations

* [createEnvironment](#createenvironment) - Create an environment
* [deleteEnvironmentForRepository](#deleteenvironmentforrepository) - Delete an environment
* [deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId](#deleterepositoriesworkspacereposlugdeploykeyskeyid) - Delete a repository deploy key
* [deleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId](#deleteworkspacesworkspaceprojectsprojectkeydeploykeyskeyid) - Delete a deploy key from a project
* [getDeploymentForRepository](#getdeploymentforrepository) - Get a deployment
* [getDeploymentsForRepository](#getdeploymentsforrepository) - List deployments
* [getEnvironmentForRepository](#getenvironmentforrepository) - Get an environment
* [getEnvironmentsForRepository](#getenvironmentsforrepository) - List environments
* [getRepositoriesWorkspaceRepoSlugDeployKeys](#getrepositoriesworkspacereposlugdeploykeys) - List repository deploy keys
* [getRepositoriesWorkspaceRepoSlugDeployKeysKeyId](#getrepositoriesworkspacereposlugdeploykeyskeyid) - Get a repository deploy key
* [getWorkspacesWorkspaceProjectsProjectKeyDeployKeys](#getworkspacesworkspaceprojectsprojectkeydeploykeys) - List project deploy keys
* [getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId](#getworkspacesworkspaceprojectsprojectkeydeploykeyskeyid) - Get a project deploy key
* [postRepositoriesWorkspaceRepoSlugDeployKeys](#postrepositoriesworkspacereposlugdeploykeys) - Add a repository deploy key
* [postWorkspacesWorkspaceProjectsProjectKeyDeployKeys](#postworkspacesworkspaceprojectsprojectkeydeploykeys) - Create a project deploy key
* [putRepositoriesWorkspaceRepoSlugDeployKeysKeyId](#putrepositoriesworkspacereposlugdeploykeyskeyid) - Update a repository deploy key
* [updateEnvironmentForRepository](#updateenvironmentforrepository) - Update an environment

## createEnvironment

Create an environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEnvironmentRequest;
import org.openapis.openapi.models.operations.CreateEnvironmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateEnvironmentRequest req = new CreateEnvironmentRequest(                new java.util.HashMap<String, Object>() {{
                                put("tempore", "labore");
                                put("delectus", "eum");
                                put("non", "eligendi");
                            }}, "sint", "aliquid");            

            CreateEnvironmentResponse res = sdk.deployments.createEnvironment(req);

            if (res.deploymentEnvironment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEnvironmentForRepository

Delete an environment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEnvironmentForRepositoryRequest;
import org.openapis.openapi.models.operations.DeleteEnvironmentForRepositoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteEnvironmentForRepositoryRequest req = new DeleteEnvironmentForRepositoryRequest("provident", "necessitatibus", "sint");            

            DeleteEnvironmentForRepositoryResponse res = sdk.deployments.deleteEnvironmentForRepository(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId

This deletes a deploy key from a repository.

Example:
```
$ curl -XDELETE \
-H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest req = new DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest("officia", "dolor", "debitis");            

            DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse res = sdk.deployments.deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId(req, new DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
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

## deleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId

This deletes a deploy key from a project.

Example:
```
$ curl -XDELETE \
-H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/workspaces/jzeng/projects/JZ/deploy-keys/1234
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRequest;
import org.openapis.openapi.models.operations.DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdResponse;
import org.openapis.openapi.models.operations.DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRequest req = new DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRequest("a", "dolorum", "in");            

            DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdResponse res = sdk.deployments.deleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId(req, new DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
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

## getDeploymentForRepository

Retrieve a deployment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeploymentForRepositoryRequest;
import org.openapis.openapi.models.operations.GetDeploymentForRepositoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDeploymentForRepositoryRequest req = new GetDeploymentForRepositoryRequest("in", "illum", "maiores");            

            GetDeploymentForRepositoryResponse res = sdk.deployments.getDeploymentForRepository(req);

            if (res.deployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeploymentsForRepository

Find deployments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeploymentsForRepositoryRequest;
import org.openapis.openapi.models.operations.GetDeploymentsForRepositoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDeploymentsForRepositoryRequest req = new GetDeploymentsForRepositoryRequest("rerum", "dicta");            

            GetDeploymentsForRepositoryResponse res = sdk.deployments.getDeploymentsForRepository(req);

            if (res.paginatedDeployments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnvironmentForRepository

Retrieve an environment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnvironmentForRepositoryRequest;
import org.openapis.openapi.models.operations.GetEnvironmentForRepositoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEnvironmentForRepositoryRequest req = new GetEnvironmentForRepositoryRequest("magnam", "cumque", "facere");            

            GetEnvironmentForRepositoryResponse res = sdk.deployments.getEnvironmentForRepository(req);

            if (res.deploymentEnvironment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnvironmentsForRepository

Find environments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnvironmentsForRepositoryRequest;
import org.openapis.openapi.models.operations.GetEnvironmentsForRepositoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEnvironmentsForRepositoryRequest req = new GetEnvironmentsForRepositoryRequest("ea", "aliquid");            

            GetEnvironmentsForRepositoryResponse res = sdk.deployments.getEnvironmentsForRepository(req);

            if (res.paginatedEnvironments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugDeployKeys

Returns all deploy-keys belonging to a repository.

Example:
```
$ curl -H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys

Output:
{
    "pagelen": 10,
    "values": [
        {
            "id": 123,
            "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
            "label": "mykey",
            "type": "deploy_key",
            "created_on": "2018-08-15T23:50:59.993890+00:00",
            "repository": {
                "full_name": "mleu/test",
                "name": "test",
                "type": "repository",
                "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
            },
            "links":{
                "self":{
                    "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
                }
            }
            "last_used": null,
            "comment": "mleu@C02W454JHTD8"
        }
    ],
    "page": 1,
    "size": 1
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDeployKeysRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDeployKeysResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDeployKeysSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugDeployKeysRequest req = new GetRepositoriesWorkspaceRepoSlugDeployKeysRequest("laborum", "accusamus");            

            GetRepositoriesWorkspaceRepoSlugDeployKeysResponse res = sdk.deployments.getRepositoriesWorkspaceRepoSlugDeployKeys(req, new GetRepositoriesWorkspaceRepoSlugDeployKeysSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedDeployKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugDeployKeysKeyId

Returns the deploy key belonging to a specific key.

Example:
```
$ curl -H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234

Output:
{
    "comment": "mleu@C02W454JHTD8",
    "last_used": null,
    "links": {
        "self": {
            "href": https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234"
        }
    },
    "repository": {
        "full_name": "mleu/test",
        "name": "test",
        "type": "repository",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "label": "mykey",
    "created_on": "2018-08-15T23:50:59.993890+00:00",
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
    "id": 1234,
    "type": "deploy_key"
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest req = new GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest("non", "occaecati", "enim");            

            GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse res = sdk.deployments.getRepositoriesWorkspaceRepoSlugDeployKeysKeyId(req, new GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deployKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspacesWorkspaceProjectsProjectKeyDeployKeys

Returns all deploy keys belonging to a project.

Example:
```
$ curl -H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys

Output:
{
    "pagelen":10,
    "values":[
        {
            "comment":"thakseth@C02W454JHTD8",
            "last_used":null,
            "links":{
                "self":{
                    "href":"https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/1234"
                }
            },
            "label":"test",
            "project":{
                "links":{
                    "self":{
                        "href":"https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT"
                    }
                },
                "type":"project",
                "name":"cooperative standard",
                "key":"TEST_PROJECT",
                "uuid":"{3b3e510b-7f2b-414d-a2b7-76c4e405c1c0}"
            },
            "created_on":"2021-07-28T21:20:19.491721+00:00",
            "key":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDX5yfMOEw6HG9jKTYTisbmDTJ4MCUTSVGr5e4OWvY3UuI2A6F8SdzQqa2f5BABA/4g5Sk5awJrYHlNu3EzV1V2I44tR3A4fnZAG71ZKyDPi1wvdO7UYmFgxV/Vd18H9QZFFjICGDM7W0PT2mI0kON/jN3qNWi+GiB/xgaeQKSqynysdysDp8lnnI/8Sh3ikURP9UP83ShRCpAXszOUNaa+UUlcYQYBDLIGowsg51c4PCkC3DNhAMxppkNRKoSOWwyl+oRVXHSDylkiJSBHW3HH4Q6WHieD54kGrjbhWBKdnnxKX7QAAZBDseY+t01N36m6/ljvXSUEcBWtHxBYye0r",
            "type":"project_deploy_key",
            "id":1234
        }
    ],
    "page":1,
    "size":1
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysRequest req = new GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysRequest("accusamus", "delectus");            

            GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysResponse res = sdk.deployments.getWorkspacesWorkspaceProjectsProjectKeyDeployKeys(req, new GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedProjectDeployKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId

Returns the deploy key belonging to a specific key ID.

Example:
```
$ curl -H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/1234

Output:
{
    "pagelen":10,
    "values":[
        {
            "comment":"thakseth@C02W454JHTD8",
            "last_used":null,
            "links":{
                "self":{
                    "href":"https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/1234"
                }
            },
            "label":"test",
            "project":{
                "links":{
                    "self":{
                        "href":"https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT"
                    }
                },
                "type":"project",
                "name":"cooperative standard",
                "key":"TEST_PROJECT",
                "uuid":"{3b3e510b-7f2b-414d-a2b7-76c4e405c1c0}"
            },
            "created_on":"2021-07-28T21:20:19.491721+00:00",
            "key":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDX5yfMOEw6HG9jKTYTisbmDTJ4MCUTSVGr5e4OWvY3UuI2A6F8SdzQqa2f5BABA/4g5Sk5awJrYHlNu3EzV1V2I44tR3A4fnZAG71ZKyDPi1wvdO7UYmFgxV/Vd18H9QZFFjICGDM7W0PT2mI0kON/jN3qNWi+GiB/xgaeQKSqynysdysDp8lnnI/8Sh3ikURP9UP83ShRCpAXszOUNaa+UUlcYQYBDLIGowsg51c4PCkC3DNhAMxppkNRKoSOWwyl+oRVXHSDylkiJSBHW3HH4Q6WHieD54kGrjbhWBKdnnxKX7QAAZBDseY+t01N36m6/ljvXSUEcBWtHxBYye0r",
            "type":"project_deploy_key",
            "id":1234
        }
    ],
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRequest req = new GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRequest("quidem", "provident", "nam");            

            GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdResponse res = sdk.deployments.getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId(req, new GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.projectDeployKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepositoriesWorkspaceRepoSlugDeployKeys

Create a new deploy key in a repository. Note: If authenticating a deploy key
with an OAuth consumer, any changes to the OAuth consumer will subsequently
invalidate the deploy key.


Example:
```
$ curl -XPOST \
-H "Authorization <auth header>" \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \
'{
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
    "label": "mydeploykey"
}'

Output:
{
    "id": 123,
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
    "label": "mydeploykey",
    "type": "deploy_key",
    "created_on": "2018-08-15T23:50:59.993890+00:00",
    "repository": {
        "full_name": "mleu/test",
        "name": "test",
        "type": "repository",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "links":{
        "self":{
            "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
        }
    }
    "last_used": null,
    "comment": "mleu@C02W454JHTD8"
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugDeployKeysRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugDeployKeysResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugDeployKeysRequest req = new PostRepositoriesWorkspaceRepoSlugDeployKeysRequest("id", "blanditiis");            

            PostRepositoriesWorkspaceRepoSlugDeployKeysResponse res = sdk.deployments.postRepositoriesWorkspaceRepoSlugDeployKeys(req, new PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deployKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWorkspacesWorkspaceProjectsProjectKeyDeployKeys

Create a new deploy key in a project.

Example:
```
$ curl -XPOST \
-H "Authorization <auth header>" \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/workspaces/jzeng/projects/JZ/deploy-keys/ -d \
'{
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
    "label": "mydeploykey"
}'

Output:
{
    "comment": "mleu@C02W454JHTD8",
    "last_used": null,
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/workspaces/testadfsa/projects/ASDF/deploy-keys/5/"
        }
    },
    "label": "myprojectkey",
    "project": {
        ...
    },
    "created_on": "2021-08-10T05:28:00.570859+00:00",
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
    "type": "project_deploy_key",
    "id": 5
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysRequest;
import org.openapis.openapi.models.operations.PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysResponse;
import org.openapis.openapi.models.operations.PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysRequest req = new PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysRequest("deleniti", "sapiente");            

            PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysResponse res = sdk.deployments.postWorkspacesWorkspaceProjectsProjectKeyDeployKeys(req, new PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.projectDeployKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRepositoriesWorkspaceRepoSlugDeployKeysKeyId

Create a new deploy key in a repository.

The same key needs to be passed in but the comment and label can change.

Example:
```
$ curl -XPUT \
-H "Authorization <auth header>" \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \
'{
    "label": "newlabel",
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 newcomment",
}'

Output:
{
    "comment": "newcomment",
    "last_used": null,
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234"
        }
    },
    "repository": {
        "full_name": "mleu/test",
        "name": "test",
        "type": "repository",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "label": "newlabel",
    "created_on": "2018-08-15T23:50:59.993890+00:00",
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
    "id": 1234,
    "type": "deploy_key"
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest req = new PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest("amet", "deserunt", "nisi");            

            PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse res = sdk.deployments.putRepositoriesWorkspaceRepoSlugDeployKeysKeyId(req, new PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deployKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEnvironmentForRepository

Update an environment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEnvironmentForRepositoryRequest;
import org.openapis.openapi.models.operations.UpdateEnvironmentForRepositoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateEnvironmentForRepositoryRequest req = new UpdateEnvironmentForRepositoryRequest("vel", "natus", "omnis");            

            UpdateEnvironmentForRepositoryResponse res = sdk.deployments.updateEnvironmentForRepository(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
