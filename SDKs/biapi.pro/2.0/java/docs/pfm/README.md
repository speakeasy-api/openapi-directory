# pfm

### Available Operations

* [deleteAuthToken](#deleteauthtoken) - Remove user access
* [getUsersIdUser](#getusersiduser) - Get a user
* [getUsersIdUserForecast](#getusersiduserforecast) - Get forecast
* [getUsersIdUserProfiles](#getusersiduserprofiles) - Get profiles
* [getUsersIdUserProfilesMain](#getusersiduserprofilesmain) - Get the main profile
* [getUsersIdUserProfilesIdProfile](#getusersiduserprofilesidprofile) - Get a profile
* [postAuthToken](#postauthtoken) - Login to API with credentials

## deleteAuthToken

This endpoint removes the token in use.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAuthTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAuthTokenResponse res = sdk.pfm.deleteAuthToken();

            if (res.statusCode == 200) {
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

            GetUsersIdUserRequest req = new GetUsersIdUserRequest("tenetur") {{
                expand = "quasi";
            }};            

            GetUsersIdUserResponse res = sdk.pfm.getUsersIdUser(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserForecast

Get forecast

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserForecastRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserForecastResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserForecastRequest req = new GetUsersIdUserForecastRequest("at");            

            GetUsersIdUserForecastResponse res = sdk.pfm.getUsersIdUserForecast(req);

            if (res.statusCode == 200) {
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

            GetUsersIdUserProfilesRequest req = new GetUsersIdUserProfilesRequest("et") {{
                expand = "voluptate";
            }};            

            GetUsersIdUserProfilesResponse res = sdk.pfm.getUsersIdUserProfiles(req);

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

            GetUsersIdUserProfilesMainRequest req = new GetUsersIdUserProfilesMainRequest("ipsa") {{
                expand = "minima";
            }};            

            GetUsersIdUserProfilesMainResponse res = sdk.pfm.getUsersIdUserProfilesMain(req);

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

            GetUsersIdUserProfilesIdProfileRequest req = new GetUsersIdUserProfilesIdProfileRequest(86532L, "consectetur") {{
                expand = "adipisci";
            }};            

            GetUsersIdUserProfilesIdProfileResponse res = sdk.pfm.getUsersIdUserProfilesIdProfile(req);

            if (res.profile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAuthToken

Request a new user token by giving an username and a password. Or a manage payment token by giving a client<br><br><br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAuthTokenRequestBody;
import org.openapis.openapi.models.operations.PostAuthTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAuthTokenRequestBody req = new PostAuthTokenRequestBody("iste", "temporibus", "accusantium") {{
                grantType = "rem";
                scope = "aut";
            }};            

            PostAuthTokenResponse res = sdk.pfm.postAuthToken(req);

            if (res.postAuthToken200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
