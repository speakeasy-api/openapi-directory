# publicSecuritySecurity

### Available Operations

* [login](#login) - Login
* [lostPassword](#lostpassword) - Lost password
* [register](#register) - User Registration

## login

User Login - The login will give your tokens

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LoginResponse;
import org.openapis.openapi.models.shared.LoginRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.LoginRequest req = new LoginRequest("paulsimon@mysupercompany.com", "I@mW0nder$Full");            

            LoginResponse res = sdk.publicSecuritySecurity.login(req);

            if (res.apiCredentials != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lostPassword

Lost password - Your password will be regenerated and sent to your email

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LostPasswordResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "paulsimon@mysupercompany.com"            

            LostPasswordResponse res = sdk.publicSecuritySecurity.lostPassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## register

User Registration - Create a new user on BeezUP

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterResponse;
import org.openapis.openapi.models.shared.RegisterRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RegisterRequest req = new RegisterRequest("myemail@mycompany.com", "I@mW0nder$Full") {{
                commercialOwnerUserId = "47ea14ab-195d-4f9a-a24e-32c329ee40f6";
                cultureName = "en-GB";
            }};            

            RegisterResponse res = sdk.publicSecuritySecurity.register(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
