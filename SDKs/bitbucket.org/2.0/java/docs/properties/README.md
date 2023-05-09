# properties

### Available Operations

* [deleteCommitHostedPropertyValue](#deletecommithostedpropertyvalue) - Delete a commit application property
* [deletePullRequestHostedPropertyValue](#deletepullrequesthostedpropertyvalue) - Delete a pull request application property
* [deleteRepositoryHostedPropertyValue](#deleterepositoryhostedpropertyvalue) - Delete a repository application property
* [deleteUserHostedPropertyValue](#deleteuserhostedpropertyvalue) - Delete a user application property
* [getCommitHostedPropertyValue](#getcommithostedpropertyvalue) - Get a commit application property
* [getPullRequestHostedPropertyValue](#getpullrequesthostedpropertyvalue) - Get a pull request application property
* [getRepositoryHostedPropertyValue](#getrepositoryhostedpropertyvalue) - Get a repository application property
* [retrieveUserHostedPropertyValue](#retrieveuserhostedpropertyvalue) - Get a user application property
* [updateCommitHostedPropertyValue](#updatecommithostedpropertyvalue) - Update a commit application property
* [updatePullRequestHostedPropertyValue](#updatepullrequesthostedpropertyvalue) - Update a pull request application property
* [updateRepositoryHostedPropertyValue](#updaterepositoryhostedpropertyvalue) - Update a repository application property
* [updateUserHostedPropertyValue](#updateuserhostedpropertyvalue) - Update a user application property

## deleteCommitHostedPropertyValue

Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCommitHostedPropertyValueRequest;
import org.openapis.openapi.models.operations.DeleteCommitHostedPropertyValueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCommitHostedPropertyValueRequest req = new DeleteCommitHostedPropertyValueRequest("culpa", "adipisci", "debitis", "laudantium", "eum");            

            DeleteCommitHostedPropertyValueResponse res = sdk.properties.deleteCommitHostedPropertyValue(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePullRequestHostedPropertyValue

Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePullRequestHostedPropertyValueRequest;
import org.openapis.openapi.models.operations.DeletePullRequestHostedPropertyValueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePullRequestHostedPropertyValueRequest req = new DeletePullRequestHostedPropertyValueRequest("nemo", "recusandae", "esse", "provident", "quis");            

            DeletePullRequestHostedPropertyValueResponse res = sdk.properties.deletePullRequestHostedPropertyValue(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRepositoryHostedPropertyValue

Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoryHostedPropertyValueRequest;
import org.openapis.openapi.models.operations.DeleteRepositoryHostedPropertyValueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoryHostedPropertyValueRequest req = new DeleteRepositoryHostedPropertyValueRequest("eum", "reiciendis", "provident", "aspernatur");            

            DeleteRepositoryHostedPropertyValueResponse res = sdk.properties.deleteRepositoryHostedPropertyValue(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserHostedPropertyValue

Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserHostedPropertyValueRequest;
import org.openapis.openapi.models.operations.DeleteUserHostedPropertyValueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUserHostedPropertyValueRequest req = new DeleteUserHostedPropertyValueRequest("ullam", "quasi", "animi");            

            DeleteUserHostedPropertyValueResponse res = sdk.properties.deleteUserHostedPropertyValue(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommitHostedPropertyValue

Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommitHostedPropertyValueRequest;
import org.openapis.openapi.models.operations.GetCommitHostedPropertyValueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCommitHostedPropertyValueRequest req = new GetCommitHostedPropertyValueRequest("nostrum", "mollitia", "provident", "possimus", "animi");            

            GetCommitHostedPropertyValueResponse res = sdk.properties.getCommitHostedPropertyValue(req);

            if (res.applicationProperty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPullRequestHostedPropertyValue

Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPullRequestHostedPropertyValueRequest;
import org.openapis.openapi.models.operations.GetPullRequestHostedPropertyValueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPullRequestHostedPropertyValueRequest req = new GetPullRequestHostedPropertyValueRequest("ex", "aliquid", "accusantium", "repellat", "doloribus");            

            GetPullRequestHostedPropertyValueResponse res = sdk.properties.getPullRequestHostedPropertyValue(req);

            if (res.applicationProperty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoryHostedPropertyValue

Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryHostedPropertyValueRequest;
import org.openapis.openapi.models.operations.GetRepositoryHostedPropertyValueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoryHostedPropertyValueRequest req = new GetRepositoryHostedPropertyValueRequest("ullam", "in", "nam", "earum");            

            GetRepositoryHostedPropertyValueResponse res = sdk.properties.getRepositoryHostedPropertyValue(req);

            if (res.applicationProperty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveUserHostedPropertyValue

Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveUserHostedPropertyValueRequest;
import org.openapis.openapi.models.operations.RetrieveUserHostedPropertyValueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveUserHostedPropertyValueRequest req = new RetrieveUserHostedPropertyValueRequest("officia", "laborum", "placeat");            

            RetrieveUserHostedPropertyValueResponse res = sdk.properties.retrieveUserHostedPropertyValue(req);

            if (res.applicationProperty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCommitHostedPropertyValue

Update an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCommitHostedPropertyValueRequest;
import org.openapis.openapi.models.operations.UpdateCommitHostedPropertyValueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCommitHostedPropertyValueRequest req = new UpdateCommitHostedPropertyValueRequest(                new java.util.HashMap<String, Object>() {{
                                put("voluptatibus", "molestias");
                                put("officiis", "sapiente");
                            }}, "cumque", "vitae", "rerum", "tempora", "quis");            

            UpdateCommitHostedPropertyValueResponse res = sdk.properties.updateCommitHostedPropertyValue(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePullRequestHostedPropertyValue

Update an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePullRequestHostedPropertyValueRequest;
import org.openapis.openapi.models.operations.UpdatePullRequestHostedPropertyValueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePullRequestHostedPropertyValueRequest req = new UpdatePullRequestHostedPropertyValueRequest(                new java.util.HashMap<String, Object>() {{
                                put("fugit", "cumque");
                            }}, "quae", "perferendis", "velit", "aspernatur", "eum");            

            UpdatePullRequestHostedPropertyValueResponse res = sdk.properties.updatePullRequestHostedPropertyValue(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRepositoryHostedPropertyValue

Update an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRepositoryHostedPropertyValueRequest;
import org.openapis.openapi.models.operations.UpdateRepositoryHostedPropertyValueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRepositoryHostedPropertyValueRequest req = new UpdateRepositoryHostedPropertyValueRequest(                new java.util.HashMap<String, Object>() {{
                                put("rem", "at");
                                put("impedit", "eos");
                            }}, "sapiente", "eum", "dicta", "minima");            

            UpdateRepositoryHostedPropertyValueResponse res = sdk.properties.updateRepositoryHostedPropertyValue(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUserHostedPropertyValue

Update an [application property](/cloud/bitbucket/application-properties/) value stored against a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserHostedPropertyValueRequest;
import org.openapis.openapi.models.operations.UpdateUserHostedPropertyValueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUserHostedPropertyValueRequest req = new UpdateUserHostedPropertyValueRequest(                new java.util.HashMap<String, Object>() {{
                                put("cupiditate", "provident");
                            }}, "earum", "soluta", "hic");            

            UpdateUserHostedPropertyValueResponse res = sdk.properties.updateUserHostedPropertyValue(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
