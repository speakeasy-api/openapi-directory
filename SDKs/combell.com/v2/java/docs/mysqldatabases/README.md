# mySqlDatabases

## Overview

Manage your MySql databases.

### Available Operations

* [changeDatabaseUserPassword](#changedatabaseuserpassword) - Change password for mysql user
* [changeDatabaseUserStatus](#changedatabaseuserstatus) - Enable/disable mysql user
* [createMySqlDatabase](#createmysqldatabase) - Create a new mysql database
* [createMySqlUser](#createmysqluser) - Create a new mysql user
* [deleteDatabase](#deletedatabase) - Delete a mysql database
* [deleteDatabaseUser](#deletedatabaseuser) - Delete a mysql user
* [getDatabaseUsers](#getdatabaseusers) - Overview of mysql users
* [getMySqlDatabase](#getmysqldatabase) - Get a specific database
* [getMySqlDatabases](#getmysqldatabases) - Overview of mysql databases

## changeDatabaseUserPassword

Change password for mysql user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeDatabaseUserPasswordRequest;
import org.openapis.openapi.models.operations.ChangeDatabaseUserPasswordResponse;
import org.openapis.openapi.models.shared.UpdateUserPasswordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangeDatabaseUserPasswordRequest req = new ChangeDatabaseUserPasswordRequest("a", "esse", "harum", "iusto") {{
                updateUserPasswordRequest = new UpdateUserPasswordRequest() {{
                    password = "ipsum";
                }};;
            }};            

            ChangeDatabaseUserPasswordResponse res = sdk.mySqlDatabases.changeDatabaseUserPassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeDatabaseUserStatus

Enable/disable mysql user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeDatabaseUserStatusRequest;
import org.openapis.openapi.models.operations.ChangeDatabaseUserStatusResponse;
import org.openapis.openapi.models.shared.UpdateUserStatusRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangeDatabaseUserStatusRequest req = new ChangeDatabaseUserStatusRequest("quisquam", "tenetur", "amet", "tempore") {{
                updateUserStatusRequest = new UpdateUserStatusRequest() {{
                    enabled = false;
                }};;
            }};            

            ChangeDatabaseUserStatusResponse res = sdk.mySqlDatabases.changeDatabaseUserStatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMySqlDatabase

Create a new mysql database

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMySqlDatabaseResponse;
import org.openapis.openapi.models.shared.CreateMySqlDatabase;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateMySqlDatabase req = new CreateMySqlDatabase() {{
                accountId = 880298;
                databaseName = "numquam";
                password = "enim";
            }};            

            CreateMySqlDatabaseResponse res = sdk.mySqlDatabases.createMySqlDatabase(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMySqlUser

The creation of a new mysql user will result in a user with read_only rights.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMySqlUserRequest;
import org.openapis.openapi.models.operations.CreateMySqlUserResponse;
import org.openapis.openapi.models.shared.CreateMySqlUser;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMySqlUserRequest req = new CreateMySqlUserRequest("dolorem", "sapiente") {{
                createMySqlUser = new CreateMySqlUser() {{
                    name = "Christian Balistreri";
                    password = "sed";
                }};;
            }};            

            CreateMySqlUserResponse res = sdk.mySqlDatabases.createMySqlUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDatabase

Delete a mysql database

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatabaseRequest;
import org.openapis.openapi.models.operations.DeleteDatabaseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDatabaseRequest req = new DeleteDatabaseRequest("vel", "libero");            

            DeleteDatabaseResponse res = sdk.mySqlDatabases.deleteDatabase(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDatabaseUser

The deletion of a mysql user is allowed for users with read_only rights.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatabaseUserRequest;
import org.openapis.openapi.models.operations.DeleteDatabaseUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDatabaseUserRequest req = new DeleteDatabaseUserRequest("voluptas", "deserunt", "quam", "ipsum");            

            DeleteDatabaseUserResponse res = sdk.mySqlDatabases.deleteDatabaseUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDatabaseUsers

Overview of mysql users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatabaseUsersRequest;
import org.openapis.openapi.models.operations.GetDatabaseUsersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDatabaseUsersRequest req = new GetDatabaseUsersRequest("incidunt", "qui");            

            GetDatabaseUsersResponse res = sdk.mySqlDatabases.getDatabaseUsers(req);

            if (res.mySqlUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMySqlDatabase

Get a specific database

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMySqlDatabaseRequest;
import org.openapis.openapi.models.operations.GetMySqlDatabaseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMySqlDatabaseRequest req = new GetMySqlDatabaseRequest("cupiditate", "maxime");            

            GetMySqlDatabaseResponse res = sdk.mySqlDatabases.getMySqlDatabase(req);

            if (res.mySqlDatabase != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMySqlDatabases

Overview of mysql databases

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMySqlDatabasesRequest;
import org.openapis.openapi.models.operations.GetMySqlDatabasesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMySqlDatabasesRequest req = new GetMySqlDatabasesRequest() {{
                skip = 863856;
                take = 747080;
            }};            

            GetMySqlDatabasesResponse res = sdk.mySqlDatabases.getMySqlDatabases(req);

            if (res.mySqlDatabases != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
