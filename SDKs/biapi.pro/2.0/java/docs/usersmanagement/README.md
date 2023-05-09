# usersManagement

### Available Operations

* [deleteUsersIdUser](#deleteusersiduser) - Delete the user
* [deleteUsersIdUserConfig](#deleteusersiduserconfig) - Delete the given user configurations. deletions on keys prefixed by 'biapi.' (except callback_url) are ignored
* [getUsers](#getusers) - Get users
* [getUsersIdUser](#getusersiduser) - Get a user
* [getUsersIdUserConfig](#getusersiduserconfig) - Get configuration of a user.
* [getUsersIdUserProfiles](#getusersiduserprofiles) - Get profiles
* [getUsersIdUserProfilesMain](#getusersiduserprofilesmain) - Get the main profile
* [getUsersIdUserProfilesIdProfile](#getusersiduserprofilesidprofile) - Get a profile
* [postUsersIdUserConfig](#postusersiduserconfig) - Change configuration of a user. modifications on keys prefixed by 'biapi.' (except callback_url) are ignored
* [postUsersIdUserToken](#postusersidusertoken) - Create a token

## deleteUsersIdUser

This endpoint deletes the user.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserRequest req = new DeleteUsersIdUserRequest("laboriosam") {{
                expand = "dolorum";
            }};            

            DeleteUsersIdUserResponse res = sdk.usersManagement.deleteUsersIdUser(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserConfig

- keys (string): list of coma separated keys to be deleted.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConfigRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConfigResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserConfigRequest req = new DeleteUsersIdUserConfigRequest("voluptatum");            

            DeleteUsersIdUserConfigResponse res = sdk.usersManagement.deleteUsersIdUserConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsers

Get users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersRequest;
import org.openapis.openapi.models.operations.GetUsersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersRequest req = new GetUsersRequest() {{
                expand = "error";
                search = "hic";
            }};            

            GetUsersResponse res = sdk.usersManagement.getUsers(req);

            if (res.getUsers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUser

Get a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserRequest req = new GetUsersIdUserRequest("expedita") {{
                expand = "debitis";
            }};            

            GetUsersIdUserResponse res = sdk.usersManagement.getUsersIdUser(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConfig

<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConfigRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConfigResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConfigRequest req = new GetUsersIdUserConfigRequest("neque");            

            GetUsersIdUserConfigResponse res = sdk.usersManagement.getUsersIdUserConfig(req);

            if (res.getUsersIdUserConfig200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserProfiles

Get profiles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserProfilesRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserProfilesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserProfilesRequest req = new GetUsersIdUserProfilesRequest("dolorum") {{
                expand = "nostrum";
            }};            

            GetUsersIdUserProfilesResponse res = sdk.usersManagement.getUsersIdUserProfiles(req);

            if (res.getUsersIdUserProfiles200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserProfilesMain

Get the main profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserProfilesMainRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserProfilesMainResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserProfilesMainRequest req = new GetUsersIdUserProfilesMainRequest("officia") {{
                expand = "dolorum";
            }};            

            GetUsersIdUserProfilesMainResponse res = sdk.usersManagement.getUsersIdUserProfilesMain(req);

            if (res.profile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserProfilesIdProfile

Get a profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserProfilesIdProfileRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserProfilesIdProfileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserProfilesIdProfileRequest req = new GetUsersIdUserProfilesIdProfileRequest(548361L, "accusamus") {{
                expand = "tempora";
            }};            

            GetUsersIdUserProfilesIdProfileResponse res = sdk.usersManagement.getUsersIdUserProfilesIdProfile(req);

            if (res.profile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUserConfig

Change configuration of a user. modifications on keys prefixed by 'biapi.' (except callback_url) are ignored

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUserConfigRequest;
import org.openapis.openapi.models.operations.PostUsersIdUserConfigResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUserConfigRequest req = new PostUsersIdUserConfigRequest("atque");            

            PostUsersIdUserConfigResponse res = sdk.usersManagement.postUsersIdUserConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUserToken

Create an access_token for this user and get it.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUserTokenRequest;
import org.openapis.openapi.models.operations.PostUsersIdUserTokenRequestBody;
import org.openapis.openapi.models.operations.PostUsersIdUserTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUserTokenRequest req = new PostUsersIdUserTokenRequest(                new PostUsersIdUserTokenRequestBody("fugit");, "ut");            

            PostUsersIdUserTokenResponse res = sdk.usersManagement.postUsersIdUserToken(req);

            if (res.postUsersIdUserToken200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
