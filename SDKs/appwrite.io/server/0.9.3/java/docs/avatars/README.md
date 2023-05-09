# avatars

## Overview

The Avatars service aims to help you complete everyday tasks related to your app image, icons, and avatars.

### Available Operations

* [avatarsGetBrowser](#avatarsgetbrowser) - Get Browser Icon
* [avatarsGetCreditCard](#avatarsgetcreditcard) - Get Credit Card Icon
* [avatarsGetFavicon](#avatarsgetfavicon) - Get Favicon
* [avatarsGetFlag](#avatarsgetflag) - Get Country Flag
* [avatarsGetImage](#avatarsgetimage) - Get Image from URL
* [avatarsGetInitials](#avatarsgetinitials) - Get User Initials
* [avatarsGetQR](#avatarsgetqr) - Get QR Code

## avatarsGetBrowser

You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user /account/sessions endpoint. Use width, height and quality arguments to change the output settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AvatarsGetBrowserRequest;
import org.openapis.openapi.models.operations.AvatarsGetBrowserResponse;
import org.openapis.openapi.models.operations.AvatarsGetBrowserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AvatarsGetBrowserRequest req = new AvatarsGetBrowserRequest("qui") {{
                height = 774234;
                quality = 736918;
                width = 456150;
            }};            

            AvatarsGetBrowserResponse res = sdk.avatars.avatarsGetBrowser(req, new AvatarsGetBrowserSecurity("ipsum", "excepturi", "aspernatur") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
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

## avatarsGetCreditCard

The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AvatarsGetCreditCardRequest;
import org.openapis.openapi.models.operations.AvatarsGetCreditCardResponse;
import org.openapis.openapi.models.operations.AvatarsGetCreditCardSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AvatarsGetCreditCardRequest req = new AvatarsGetCreditCardRequest("perferendis") {{
                height = 324141;
                quality = 617636;
                width = 149675;
            }};            

            AvatarsGetCreditCardResponse res = sdk.avatars.avatarsGetCreditCard(req, new AvatarsGetCreditCardSecurity("iste", "dolor", "natus") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
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

## avatarsGetFavicon

Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AvatarsGetFaviconRequest;
import org.openapis.openapi.models.operations.AvatarsGetFaviconResponse;
import org.openapis.openapi.models.operations.AvatarsGetFaviconSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AvatarsGetFaviconRequest req = new AvatarsGetFaviconRequest("laboriosam");            

            AvatarsGetFaviconResponse res = sdk.avatars.avatarsGetFavicon(req, new AvatarsGetFaviconSecurity("hic", "saepe", "fuga") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
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

## avatarsGetFlag

You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AvatarsGetFlagRequest;
import org.openapis.openapi.models.operations.AvatarsGetFlagResponse;
import org.openapis.openapi.models.operations.AvatarsGetFlagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AvatarsGetFlagRequest req = new AvatarsGetFlagRequest("in") {{
                height = 359508;
                quality = 613064;
                width = 437032;
            }};            

            AvatarsGetFlagResponse res = sdk.avatars.avatarsGetFlag(req, new AvatarsGetFlagSecurity("saepe", "quidem", "architecto") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
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

## avatarsGetImage

Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AvatarsGetImageRequest;
import org.openapis.openapi.models.operations.AvatarsGetImageResponse;
import org.openapis.openapi.models.operations.AvatarsGetImageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AvatarsGetImageRequest req = new AvatarsGetImageRequest("ipsa") {{
                height = 969810;
                width = 666767;
            }};            

            AvatarsGetImageResponse res = sdk.avatars.avatarsGetImage(req, new AvatarsGetImageSecurity("mollitia", "laborum", "dolores") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
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

## avatarsGetInitials

Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.

You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AvatarsGetInitialsRequest;
import org.openapis.openapi.models.operations.AvatarsGetInitialsResponse;
import org.openapis.openapi.models.operations.AvatarsGetInitialsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AvatarsGetInitialsRequest req = new AvatarsGetInitialsRequest() {{
                background = "dolorem";
                color = "corporis";
                height = 128926;
                name = "Ronnie Mohr";
                width = 570197;
            }};            

            AvatarsGetInitialsResponse res = sdk.avatars.avatarsGetInitials(req, new AvatarsGetInitialsSecurity("accusantium", "iure", "culpa") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
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

## avatarsGetQR

Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AvatarsGetQRRequest;
import org.openapis.openapi.models.operations.AvatarsGetQRResponse;
import org.openapis.openapi.models.operations.AvatarsGetQRSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AvatarsGetQRRequest req = new AvatarsGetQRRequest("doloribus") {{
                download = false;
                margin = 958950;
                size = 102044;
            }};            

            AvatarsGetQRResponse res = sdk.avatars.avatarsGetQR(req, new AvatarsGetQRSecurity("mollitia", "dolorem", "culpa") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
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
