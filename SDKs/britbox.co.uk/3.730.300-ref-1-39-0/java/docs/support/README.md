# support

### Available Operations

* [forgotPassword](#forgotpassword) - Request the password of an account's primary profile be reset.

Should be called when a user has forgotten their password.

This will send an email with a password reset link to the email address of the
primary profile of an account.

The link, once clicked, should take the user to the "reset-password" page of the
website. Here they will enter their new password and submit to the /reset-password
endpoint here, along with the password reset token provided in the original link.

* [getSubscriptionData](#getsubscriptiondata) - Returns the details of subscription data for a user with specified id.
* [resetPassword](#resetpassword) - When a user requests to reset their password via the /request-password-reset endpoint, an
email is sent to the email address of the primary profile of the account. This email contains a link
with a reset token as query parameter. The link should take the user to the "reset-password"
page of the website.

From the reset-password page a user should enter the new password they wish to use. 
It should then be submitted to this endpoint,
along with the reset token from the email link. 
The token should be provided in the body as resetToken property.

* [verifyEmail](#verifyemail) - When an account is created an email is sent to the email address of the new account.
This contains a link, which once clicked, verifies the email address of the account is correct.

The link contains a token as a query parameter which should be passed as the authorization
bearer token to this endpoint to complete email verification.

The token has en expiry, so if the link is not clicked before it expires, the account holder
may need to request a new verification email be sent. This can be done via the endpoint
/account/request-email-verification.


## forgotPassword

Request the password of an account's primary profile be reset.

Should be called when a user has forgotten their password.

This will send an email with a password reset link to the email address of the
primary profile of an account.

The link, once clicked, should take the user to the "reset-password" page of the
website. Here they will enter their new password and submit to the /reset-password
endpoint here, along with the password reset token provided in the original link.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForgotPasswordRequest;
import org.openapis.openapi.models.operations.ForgotPasswordResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.PasswordResetEmailRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ForgotPasswordRequest req = new ForgotPasswordRequest(                new PasswordResetEmailRequest("voluptas");) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.CAS),
                }};
                lang = "adipisci";
            }};            

            ForgotPasswordResponse res = sdk.support.forgotPassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscriptionData

Returns the details of subscription data for a user with specified id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionDataRequest;
import org.openapis.openapi.models.operations.GetSubscriptionDataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubscriptionDataRequest req = new GetSubscriptionDataRequest("minus");            

            GetSubscriptionDataResponse res = sdk.support.getSubscriptionData(req);

            if (res.subscriptionDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetPassword

When a user requests to reset their password via the /request-password-reset endpoint, an
email is sent to the email address of the primary profile of the account. This email contains a link
with a reset token as query parameter. The link should take the user to the "reset-password"
page of the website.

From the reset-password page a user should enter the new password they wish to use. 
It should then be submitted to this endpoint,
along with the reset token from the email link. 
The token should be provided in the body as resetToken property.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetPasswordRequest;
import org.openapis.openapi.models.operations.ResetPasswordResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.PasswordResetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetPasswordRequest req = new ResetPasswordRequest(                new PasswordResetRequest("dolores", "blanditiis");) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.LDP),
                    add(FeatureFlagsEnum.LDP),
                }};
                lang = "officiis";
            }};            

            ResetPasswordResponse res = sdk.support.resetPassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## verifyEmail

When an account is created an email is sent to the email address of the new account.
This contains a link, which once clicked, verifies the email address of the account is correct.

The link contains a token as a query parameter which should be passed as the authorization
bearer token to this endpoint to complete email verification.

The token has en expiry, so if the link is not clicked before it expires, the account holder
may need to request a new verification email be sent. This can be done via the endpoint
/account/request-email-verification.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyEmailRequest;
import org.openapis.openapi.models.operations.VerifyEmailResponse;
import org.openapis.openapi.models.operations.VerifyEmailSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyEmailRequest req = new VerifyEmailRequest() {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.LDP),
                    add(FeatureFlagsEnum.IDP),
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.RPT),
                }};
                lang = "quas";
            }};            

            VerifyEmailResponse res = sdk.support.verifyEmail(req, new VerifyEmailSecurity("hic") {{
                verifyEmailAuth = "YOUR_API_KEY_HERE";
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
