# account

## Overview

The Account service allows you to authenticate and manage a user account.

### Available Operations

* [accountCreateRecovery](#accountcreaterecovery) - Create Password Recovery
* [accountCreateVerification](#accountcreateverification) - Create Email Verification
* [accountDelete](#accountdelete) - Delete Account
* [accountDeleteSession](#accountdeletesession) - Delete Account Session
* [accountDeleteSessions](#accountdeletesessions) - Delete All Account Sessions
* [accountGet](#accountget) - Get Account
* [accountGetLogs](#accountgetlogs) - Get Account Logs
* [accountGetPrefs](#accountgetprefs) - Get Account Preferences
* [accountGetSession](#accountgetsession) - Get Session By ID
* [accountGetSessions](#accountgetsessions) - Get Account Sessions
* [accountUpdateEmail](#accountupdateemail) - Update Account Email
* [accountUpdateName](#accountupdatename) - Update Account Name
* [accountUpdatePassword](#accountupdatepassword) - Update Account Password
* [accountUpdatePrefs](#accountupdateprefs) - Update Account Preferences
* [accountUpdateRecovery](#accountupdaterecovery) - Complete Password Recovery
* [accountUpdateVerification](#accountupdateverification) - Complete Email Verification

## accountCreateRecovery

Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountCreateRecoveryRequestBody;
import org.openapis.openapi.models.operations.AccountCreateRecoveryResponse;
import org.openapis.openapi.models.operations.AccountCreateRecoverySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCreateRecoveryRequestBody req = new AccountCreateRecoveryRequestBody("unde", "nulla");            

            AccountCreateRecoveryResponse res = sdk.account.accountCreateRecovery(req, new AccountCreateRecoverySecurity("corrupti", "illum") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.token != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountCreateVerification

Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](/docs/client/account#accountUpdateVerification). The verification link sent to the user's email address is valid for 7 days.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountCreateVerificationRequestBody;
import org.openapis.openapi.models.operations.AccountCreateVerificationResponse;
import org.openapis.openapi.models.operations.AccountCreateVerificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCreateVerificationRequestBody req = new AccountCreateVerificationRequestBody("vel");            

            AccountCreateVerificationResponse res = sdk.account.accountCreateVerification(req, new AccountCreateVerificationSecurity("error", "deserunt") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.token != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountDelete

Delete a currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. This is done to avoid deleted accounts being overtaken by new users with the same email address. Any user-related resources like documents or storage files should be deleted separately.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountDeleteResponse;
import org.openapis.openapi.models.operations.AccountDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountDeleteResponse res = sdk.account.accountDelete(new AccountDeleteSecurity("suscipit", "iure") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
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

## accountDeleteSession

Use this endpoint to log out the currently logged in user from all their account sessions across all of their different devices. When using the option id argument, only the session unique ID provider will be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountDeleteSessionRequest;
import org.openapis.openapi.models.operations.AccountDeleteSessionResponse;
import org.openapis.openapi.models.operations.AccountDeleteSessionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountDeleteSessionRequest req = new AccountDeleteSessionRequest("magnam");            

            AccountDeleteSessionResponse res = sdk.account.accountDeleteSession(req, new AccountDeleteSessionSecurity("debitis", "ipsa") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
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

## accountDeleteSessions

Delete all sessions from the user account and remove any sessions cookies from the end client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountDeleteSessionsResponse;
import org.openapis.openapi.models.operations.AccountDeleteSessionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountDeleteSessionsResponse res = sdk.account.accountDeleteSessions(new AccountDeleteSessionsSecurity("delectus", "tempora") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
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

## accountGet

Get currently logged in user data as JSON object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetResponse;
import org.openapis.openapi.models.operations.AccountGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountGetResponse res = sdk.account.accountGet(new AccountGetSecurity("suscipit", "molestiae") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGetLogs

Get currently logged in user list of latest security activity logs. Each log returns user IP address, location and date and time of log.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetLogsResponse;
import org.openapis.openapi.models.operations.AccountGetLogsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountGetLogsResponse res = sdk.account.accountGetLogs(new AccountGetLogsSecurity("minus", "placeat") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.logList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGetPrefs

Get currently logged in user preferences as a key-value object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetPrefsResponse;
import org.openapis.openapi.models.operations.AccountGetPrefsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountGetPrefsResponse res = sdk.account.accountGetPrefs(new AccountGetPrefsSecurity("voluptatum", "iusto") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.preferences != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGetSession

Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetSessionRequest;
import org.openapis.openapi.models.operations.AccountGetSessionResponse;
import org.openapis.openapi.models.operations.AccountGetSessionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountGetSessionRequest req = new AccountGetSessionRequest("excepturi");            

            AccountGetSessionResponse res = sdk.account.accountGetSession(req, new AccountGetSessionSecurity("nisi", "recusandae") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.session != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGetSessions

Get currently logged in user list of active sessions across different devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetSessionsResponse;
import org.openapis.openapi.models.operations.AccountGetSessionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountGetSessionsResponse res = sdk.account.accountGetSessions(new AccountGetSessionsSecurity("temporibus", "ab") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.sessionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountUpdateEmail

Update currently logged in user account email address. After changing user address, user confirmation status is being reset and a new confirmation mail is sent. For security measures, user password is required to complete this request.
This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountUpdateEmailRequestBody;
import org.openapis.openapi.models.operations.AccountUpdateEmailResponse;
import org.openapis.openapi.models.operations.AccountUpdateEmailSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountUpdateEmailRequestBody req = new AccountUpdateEmailRequestBody("quis", "veritatis");            

            AccountUpdateEmailResponse res = sdk.account.accountUpdateEmail(req, new AccountUpdateEmailSecurity("deserunt", "perferendis") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountUpdateName

Update currently logged in user account name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountUpdateNameRequestBody;
import org.openapis.openapi.models.operations.AccountUpdateNameResponse;
import org.openapis.openapi.models.operations.AccountUpdateNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountUpdateNameRequestBody req = new AccountUpdateNameRequestBody("ipsam");            

            AccountUpdateNameResponse res = sdk.account.accountUpdateName(req, new AccountUpdateNameSecurity("repellendus", "sapiente") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountUpdatePassword

Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth and Team Invites, oldPassword is optional.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountUpdatePasswordRequestBody;
import org.openapis.openapi.models.operations.AccountUpdatePasswordResponse;
import org.openapis.openapi.models.operations.AccountUpdatePasswordSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountUpdatePasswordRequestBody req = new AccountUpdatePasswordRequestBody("quo") {{
                oldPassword = "odit";
            }};            

            AccountUpdatePasswordResponse res = sdk.account.accountUpdatePassword(req, new AccountUpdatePasswordSecurity("at", "at") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountUpdatePrefs

Update currently logged in user account preferences. You can pass only the specific settings you wish to update.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountUpdatePrefsRequestBody;
import org.openapis.openapi.models.operations.AccountUpdatePrefsResponse;
import org.openapis.openapi.models.operations.AccountUpdatePrefsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountUpdatePrefsRequestBody req = new AccountUpdatePrefsRequestBody(                new java.util.HashMap<String, Object>() {{
                                put("molestiae", "quod");
                                put("quod", "esse");
                                put("totam", "porro");
                                put("dolorum", "dicta");
                            }});            

            AccountUpdatePrefsResponse res = sdk.account.accountUpdatePrefs(req, new AccountUpdatePrefsSecurity("nam", "officia") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountUpdateRecovery

Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountUpdateRecoveryRequestBody;
import org.openapis.openapi.models.operations.AccountUpdateRecoveryResponse;
import org.openapis.openapi.models.operations.AccountUpdateRecoverySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountUpdateRecoveryRequestBody req = new AccountUpdateRecoveryRequestBody("occaecati", "fugit", "deleniti", "hic");            

            AccountUpdateRecoveryResponse res = sdk.account.accountUpdateRecovery(req, new AccountUpdateRecoverySecurity("optio", "totam") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.token != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountUpdateVerification

Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountUpdateVerificationRequestBody;
import org.openapis.openapi.models.operations.AccountUpdateVerificationResponse;
import org.openapis.openapi.models.operations.AccountUpdateVerificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountUpdateVerificationRequestBody req = new AccountUpdateVerificationRequestBody("beatae", "commodi");            

            AccountUpdateVerificationResponse res = sdk.account.accountUpdateVerification(req, new AccountUpdateVerificationSecurity("molestiae", "modi") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.token != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
