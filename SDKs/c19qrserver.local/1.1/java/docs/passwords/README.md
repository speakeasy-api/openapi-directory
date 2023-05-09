# passwords

## Overview

Endpoints related to changing and resetting passwords

### Available Operations

* [postChangePassword](#postchangepassword) - Used for changing your password
* [postRequestPasswordReset](#postrequestpasswordreset) - Used for requesting a password reset code
* [postVerifyPasswordChange](#postverifypasswordchange) - Used for resetting your password when you forgot it

## postChangePassword

Pass in your old password and your new password

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostChangePasswordResponse;
import org.openapis.openapi.models.operations.PostChangePasswordSample;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    tokenHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostChangePasswordSample req = new PostChangePasswordSample() {{
                oldPassword = "hunter3";
                password = "hunter4";
            }};            

            PostChangePasswordResponse res = sdk.passwords.postChangePassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRequestPasswordReset

The admin should run this on behalf of a user who forgot their password.  The API will generate a password reset code which the admin should then provide to the user. The user can use their client to reset their password. Normally the password reset code is mailed to the user, but I didn't want to do this in this case because I didn't want to  introduce the complicated dependency of having an SMTP server just for this purpose. Doing it this way makes it easy for people to adopt this  API.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRequestPasswordResetResponse;
import org.openapis.openapi.models.operations.PostRequestPasswordResetSample;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    tokenHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostRequestPasswordResetSample req = new PostRequestPasswordResetSample() {{
                email = "user@example.com";
            }};            

            PostRequestPasswordResetResponse res = sdk.passwords.postRequestPasswordReset(req);

            if (res.requestPasswordResetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVerifyPasswordChange

Another endpoint will generate a password reset code for you. You should  use the client app to submit the reset code along with the new password to change your password.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVerifyPasswordChangeResponse;
import org.openapis.openapi.models.operations.PostVerifyPasswordChangeSample;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    tokenHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostVerifyPasswordChangeSample req = new PostVerifyPasswordChangeSample() {{
                guid = "d5e53b3a-ffc1-4436-b085-04aaed5ec861";
                password = "hunter3";
            }};            

            PostVerifyPasswordChangeResponse res = sdk.passwords.postVerifyPasswordChange(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
