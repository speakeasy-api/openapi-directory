# users

## Overview

The users resource allows you to access public information
associated with a user account. Most resources in the users
endpoint have been deprecated in favor of workspaces.


### Available Operations

* [getUser](#getuser) - Get current user
* [getUserEmails](#getuseremails) - List email addresses for current user
* [getUserEmailsEmail](#getuseremailsemail) - Get an email address for current user
* [getUsersSelectedUser](#getusersselecteduser) - Get a user

## getUser

Returns the currently logged in user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserResponse;
import org.openapis.openapi.models.operations.GetUserSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserResponse res = sdk.users.getUser(new GetUserSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
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

## getUserEmails

Returns all the authenticated user's email addresses. Both
confirmed and unconfirmed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserEmailsResponse;
import org.openapis.openapi.models.operations.GetUserEmailsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserEmailsResponse res = sdk.users.getUserEmails(new GetUserEmailsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
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

## getUserEmailsEmail

Returns details about a specific one of the authenticated user's
email addresses.

Details describe whether the address has been confirmed by the user and
whether it is the user's primary address or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserEmailsEmailRequest;
import org.openapis.openapi.models.operations.GetUserEmailsEmailResponse;
import org.openapis.openapi.models.operations.GetUserEmailsEmailSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserEmailsEmailRequest req = new GetUserEmailsEmailRequest("consequuntur");            

            GetUserEmailsEmailResponse res = sdk.users.getUserEmailsEmail(req, new GetUserEmailsEmailSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
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

## getUsersSelectedUser

Gets the public information associated with a user account.

If the user's profile is private, `location`, `website` and
`created_on` elements are omitted.

Note that the user object returned by this operation is changing significantly, due to privacy changes.
See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-bitbucket-user-objects) for details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersSelectedUserRequest;
import org.openapis.openapi.models.operations.GetUsersSelectedUserResponse;
import org.openapis.openapi.models.operations.GetUsersSelectedUserSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersSelectedUserRequest req = new GetUsersSelectedUserRequest("fugit");            

            GetUsersSelectedUserResponse res = sdk.users.getUsersSelectedUser(req, new GetUsersSelectedUserSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
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
