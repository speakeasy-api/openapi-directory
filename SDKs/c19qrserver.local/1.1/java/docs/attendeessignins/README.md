# attendeesSignins

## Overview

Endpoints related to attendees signing in on the premises

### Available Operations

* [deleteSigninSigninId](#deletesigninsigninid) - Delete a signin record
* [getSigninSigninId](#getsigninsigninid) - Retrieve the information associated with a signin record
* [getSignins](#getsignins) - Get signin info
* [postSignin](#postsignin) - Create a new signin record
* [putSigninSigninId](#putsigninsigninid) - Update a signin record

## deleteSigninSigninId

Delete a signin record      


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSigninSigninIdRequest;
import org.openapis.openapi.models.operations.DeleteSigninSigninIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    tokenHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSigninSigninIdRequest req = new DeleteSigninSigninIdRequest(1L);            

            DeleteSigninSigninIdResponse res = sdk.attendeesSignins.deleteSigninSigninId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSigninSigninId

Retrieve the information associated with a signin record


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSigninSigninIdRequest;
import org.openapis.openapi.models.operations.GetSigninSigninIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    tokenHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSigninSigninIdRequest req = new GetSigninSigninIdRequest(1L);            

            GetSigninSigninIdResponse res = sdk.attendeesSignins.getSigninSigninId(req);

            if (res.signin != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSignins

Returns a list of signin objects sorted by signin ID descending.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSigninsRequest;
import org.openapis.openapi.models.operations.GetSigninsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    tokenHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSigninsRequest req = new GetSigninsRequest() {{
                lessThan = 602763L;
                returnCount = 857946L;
            }};            

            GetSigninsResponse res = sdk.attendeesSignins.getSignins(req);

            if (res.signins != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSignin

Create a new signin record

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSigninResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Signin;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    tokenHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Signin req = new Signin("John Q. Public", "(111)222-3333") {{
                dt = 1593409124.23;
                email = "jqp@example.com";
                id = 125L;
            }};            

            PostSigninResponse res = sdk.attendeesSignins.postSignin(req);

            if (res.signinResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSigninSigninId

Update a signin record


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSigninSigninIdRequest;
import org.openapis.openapi.models.operations.PutSigninSigninIdResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Signin;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    tokenHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutSigninSigninIdRequest req = new PutSigninSigninIdRequest(1L) {{
                signin = new Signin("John Q. Public", "(111)222-3333") {{
                    dt = 1593409124.23;
                    email = "jqp@example.com";
                    id = 125L;
                }};;
            }};            

            PutSigninSigninIdResponse res = sdk.attendeesSignins.putSigninSigninId(req);

            if (res.userRecord != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
