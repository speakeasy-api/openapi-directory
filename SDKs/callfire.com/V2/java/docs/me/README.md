# me

### Available Operations

* [createApiCredential](#createapicredential) - Create api credentials
* [deleteApiCredential](#deleteapicredential) - Delete api credentials
* [disableApiCredentials](#disableapicredentials) - Disable specified API credentials
* [enableApiCredentials](#enableapicredentials) - Enable specified API credentials
* [findApiCredentials](#findapicredentials) - Find api credentials
* [getAccount](#getaccount) - Find account details
* [getApiCredential](#getapicredential) - Find a specific api credential
* [getBillingPlanUsage](#getbillingplanusage) - Find plan usage
* [getCallerIds](#getcallerids) - Find caller ids
* [getCreditUsage](#getcreditusage) - Find credit usage
* [sendVerificationCodeToCallerId](#sendverificationcodetocallerid) - Create a caller id
* [verifyCallerId](#verifycallerid) - Verify a caller id

## createApiCredential

Creates an API credentials for the CallFire API. This endpoint requires full CallFire account credentials to be used, authenticated using Basic Authentication. At the moment user provides only the name for the credentials. The generated credentials can be used to access any CallFire APIs. For authentication use account credentials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApiCredentialResponse;
import org.openapis.openapi.models.operations.CreateApiCredentialSecurity;
import org.openapis.openapi.models.shared.ApiCredentialInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ApiCredentialInput req = new ApiCredentialInput() {{
                enabled = false;
                id = 304468L;
                name = "Lionel Herman";
            }};            

            CreateApiCredentialResponse res = sdk.me.createApiCredential(req, new CreateApiCredentialSecurity("blanditiis", "quas") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiCredential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiCredential

Deletes a specified API credential. Currently, removes the ability to access the API. Only ACCOUNT_HOLDER can invoke this API. For authentication use account credentials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiCredentialRequest;
import org.openapis.openapi.models.operations.DeleteApiCredentialResponse;
import org.openapis.openapi.models.operations.DeleteApiCredentialSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiCredentialRequest req = new DeleteApiCredentialRequest(942584L);            

            DeleteApiCredentialResponse res = sdk.me.deleteApiCredential(req, new DeleteApiCredentialSecurity("nesciunt", "culpa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## disableApiCredentials

Disables a specified API credential. Currently, removes the ability to access the API. Only ACCOUNT_HOLDER can invoke this API. For authentication use account credentials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableApiCredentialsRequest;
import org.openapis.openapi.models.operations.DisableApiCredentialsResponse;
import org.openapis.openapi.models.operations.DisableApiCredentialsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableApiCredentialsRequest req = new DisableApiCredentialsRequest(548519L);            

            DisableApiCredentialsResponse res = sdk.me.disableApiCredentials(req, new DisableApiCredentialsSecurity("pariatur", "totam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## enableApiCredentials

Enables a specified API credential. Currently, adds the ability to access the API. Only ACCOUNT_HOLDER can invoke this API. For authentication use account credentials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableApiCredentialsRequest;
import org.openapis.openapi.models.operations.EnableApiCredentialsResponse;
import org.openapis.openapi.models.operations.EnableApiCredentialsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnableApiCredentialsRequest req = new EnableApiCredentialsRequest(940210L);            

            EnableApiCredentialsResponse res = sdk.me.enableApiCredentials(req, new EnableApiCredentialsSecurity("exercitationem", "nobis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## findApiCredentials

Searches for all credentials generated by user. Returns a paged list of the API credentials. Only ACCOUNT_HOLDER can invoke this API. For authentication use account credentials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindApiCredentialsRequest;
import org.openapis.openapi.models.operations.FindApiCredentialsResponse;
import org.openapis.openapi.models.operations.FindApiCredentialsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindApiCredentialsRequest req = new FindApiCredentialsRequest() {{
                fields = "sit";
                limit = 699575;
                name = "Faith Cole";
                offset = 451822;
            }};            

            FindApiCredentialsResponse res = sdk.me.findApiCredentials(req, new FindApiCredentialsSecurity("expedita", "ab") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiCredentialPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccount

Searches for the user account details. Details include name, email, and basic account permissions. For authentication use api credentials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountRequest;
import org.openapis.openapi.models.operations.GetAccountResponse;
import org.openapis.openapi.models.operations.GetAccountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountRequest req = new GetAccountRequest() {{
                fields = "iste";
            }};            

            GetAccountResponse res = sdk.me.getAccount(req, new GetAccountSecurity("dolore", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiCredential

Returns an API credential instance for a given api credential id. Only ACCOUNT_HOLDER can invoke this API. For authentication use account credentials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiCredentialRequest;
import org.openapis.openapi.models.operations.GetApiCredentialResponse;
import org.openapis.openapi.models.operations.GetApiCredentialSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiCredentialRequest req = new GetApiCredentialRequest(152354L) {{
                fields = "in";
            }};            

            GetApiCredentialResponse res = sdk.me.getApiCredential(req, new GetApiCredentialSecurity("commodi", "quidem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiCredential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBillingPlanUsage

Searches for the data of a billing plan usage for the user. Returns the data of a billing plan usage for the current month. For authentication use api credentials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBillingPlanUsageResponse;
import org.openapis.openapi.models.operations.GetBillingPlanUsageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBillingPlanUsageResponse res = sdk.me.getBillingPlanUsage(new GetBillingPlanUsageSecurity("explicabo", "voluptas") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.billingPlanUsage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCallerIds

Returns a list of verified caller ids. If the number is not shown in the list, then it is not verified. In this case sending of a verification code is required. For authentication use api credentials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallerIdsResponse;
import org.openapis.openapi.models.operations.GetCallerIdsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallerIdsResponse res = sdk.me.getCallerIds(new GetCallerIdsSecurity("unde", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.callerIdList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreditUsage

Find credit usage for the user. Returns credits usage for time period specified or if unspecified then total for all time. For authentication use api credentials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCreditUsageRequest;
import org.openapis.openapi.models.operations.GetCreditUsageResponse;
import org.openapis.openapi.models.operations.GetCreditUsageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCreditUsageRequest req = new GetCreditUsageRequest() {{
                intervalBegin = 382808L;
                intervalEnd = 960257L;
            }};            

            GetCreditUsageResponse res = sdk.me.getCreditUsage(req, new GetCreditUsageSecurity("debitis", "illo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.creditUsage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendVerificationCodeToCallerId

Generates and sends a verification code to the phone number provided in the path. The verification code is delivered via a phone call. This code needs to be submitted to the verify caller id API endpoint to complete verification. For authentication use api credentials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendVerificationCodeToCallerIdRequest;
import org.openapis.openapi.models.operations.SendVerificationCodeToCallerIdResponse;
import org.openapis.openapi.models.operations.SendVerificationCodeToCallerIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SendVerificationCodeToCallerIdRequest req = new SendVerificationCodeToCallerIdRequest("reiciendis");            

            SendVerificationCodeToCallerIdResponse res = sdk.me.sendVerificationCodeToCallerId(req, new SendVerificationCodeToCallerIdSecurity("perferendis", "corrupti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## verifyCallerId

With the verification code received from the Create caller id endpoint, a call to this endpoint is required to finish verification. For authentication use api credentials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyCallerIdRequest;
import org.openapis.openapi.models.operations.VerifyCallerIdResponse;
import org.openapis.openapi.models.operations.VerifyCallerIdSecurity;
import org.openapis.openapi.models.shared.CallerIdVerificationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyCallerIdRequest req = new VerifyCallerIdRequest("maiores") {{
                callerIdVerificationRequest = new CallerIdVerificationRequest() {{
                    verificationCode = "incidunt";
                }};;
            }};            

            VerifyCallerIdResponse res = sdk.me.verifyCallerId(req, new VerifyCallerIdSecurity("sed", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyCallerId200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
