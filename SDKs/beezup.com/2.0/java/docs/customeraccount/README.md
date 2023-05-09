# customerAccount

### Available Operations

* [activateUserAccount](#activateuseraccount) - Activate the user account
* [changeEmail](#changeemail) - Change user email
* [changePassword](#changepassword) - Change user password
* [getCreditCardInfo](#getcreditcardinfo) - Get credit card information
* [getProfilePictureInfo](#getprofilepictureinfo) - Get profile picture information
* [getUserAccountInfo](#getuseraccountinfo) - Get user account information
* [resendEmailActivation](#resendemailactivation) - Resend email activation
* [saveCompanyInfo](#savecompanyinfo) - Change company information
* [saveCreditCardInfo](#savecreditcardinfo) - Save user credit card info
* [savePersonalInfo](#savepersonalinfo) - Save user personal information
* [saveProfilePictureInfo](#saveprofilepictureinfo) - Change user picture information

## activateUserAccount

Activate the user account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateUserAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "quaerat"            

            ActivateUserAccountResponse res = sdk.customerAccount.activateUserAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeEmail

Change user email

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeEmailResponse;
import org.openapis.openapi.models.shared.ChangeEmailRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ChangeEmailRequest req = new ChangeEmailRequest("paulsimon@mysupercompany.com");            

            ChangeEmailResponse res = sdk.customerAccount.changeEmail(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changePassword

Change user password

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangePasswordResponse;
import org.openapis.openapi.models.shared.ChangePasswordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ChangePasswordRequest req = new ChangePasswordRequest("sapiente", "consectetur");            

            ChangePasswordResponse res = sdk.customerAccount.changePassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreditCardInfo

Get credit card information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCreditCardInfoRequest;
import org.openapis.openapi.models.operations.GetCreditCardInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCreditCardInfoRequest req = new GetCreditCardInfoRequest() {{
                ifNoneMatch = "esse";
            }};            

            GetCreditCardInfoResponse res = sdk.customerAccount.getCreditCardInfo(req);

            if (res.creditCardInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProfilePictureInfo

Get profile picture information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProfilePictureInfoRequest;
import org.openapis.openapi.models.operations.GetProfilePictureInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProfilePictureInfoRequest req = new GetProfilePictureInfoRequest() {{
                ifNoneMatch = "blanditiis";
            }};            

            GetProfilePictureInfoResponse res = sdk.customerAccount.getProfilePictureInfo(req);

            if (res.profilePictureInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserAccountInfo

Get user account information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserAccountInfoRequest;
import org.openapis.openapi.models.operations.GetUserAccountInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserAccountInfoRequest req = new GetUserAccountInfoRequest() {{
                ifNoneMatch = "provident";
            }};            

            GetUserAccountInfoResponse res = sdk.customerAccount.getUserAccountInfo(req);

            if (res.accountInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resendEmailActivation

Resend email activation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResendEmailActivationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResendEmailActivationResponse res = sdk.customerAccount.resendEmailActivation();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveCompanyInfo

Change company information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveCompanyInfoResponse;
import org.openapis.openapi.models.shared.CompanyInfo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CompanyInfo req = new CompanyInfo("21 jump street", "New-York", "My super company", "FRA", "13014") {{
                accountingEmails = new String[]{{
                    add("paulsimon@mysupercompany.com"),
                    add("paulsimon@mysupercompany.com"),
                    add("paulsimon@mysupercompany.com"),
                    add("paulsimon@mysupercompany.com"),
                }};
                vatNumber = "1234567890";
            }};            

            SaveCompanyInfoResponse res = sdk.customerAccount.saveCompanyInfo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveCreditCardInfo

Save user credit card info

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveCreditCardInfoResponse;
import org.openapis.openapi.models.shared.CreditCardInfo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreditCardInfo req = new CreditCardInfo("1234567890091234", "123", 12, 2017);            

            SaveCreditCardInfoResponse res = sdk.customerAccount.saveCreditCardInfo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## savePersonalInfo

Save user personal information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SavePersonalInfoResponse;
import org.openapis.openapi.models.shared.PersonalInfo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PersonalInfo req = new PersonalInfo(79, "Paul", "Simon", "5551234") {{
                whatIDo = "I'm the Manager on this company";
            }};            

            SavePersonalInfoResponse res = sdk.customerAccount.savePersonalInfo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveProfilePictureInfo

Change user picture information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveProfilePictureInfoResponse;
import org.openapis.openapi.models.shared.ProfilePictureInfo;
import org.openapis.openapi.models.shared.ProfilePictureSelectedEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ProfilePictureInfo req = new ProfilePictureInfo(ProfilePictureSelectedEnum.INITIALS) {{
                profilePictureUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Marlon_Brando_%28cropped%29.jpg/220px-Marlon_Brando_%28cropped%29.jpg";
            }};            

            SaveProfilePictureInfoResponse res = sdk.customerAccount.saveProfilePictureInfo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
