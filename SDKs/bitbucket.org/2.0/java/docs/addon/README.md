# addon

## Overview

The addon resource is intended to use used by Bitbucket Cloud Connect
Apps, and only supports JWT authentication.


### Available Operations

* [deleteAddon](#deleteaddon) - Delete an app
* [deleteAddonLinkersLinkerKeyValues](#deleteaddonlinkerslinkerkeyvalues) - Delete all linker values
* [deleteAddonLinkersLinkerKeyValuesValueId](#deleteaddonlinkerslinkerkeyvaluesvalueid) - Delete a linker value
* [getAddonLinkers](#getaddonlinkers) - List linkers for an app
* [getAddonLinkersLinkerKey](#getaddonlinkerslinkerkey) - Get a linker for an app
* [getAddonLinkersLinkerKeyValues](#getaddonlinkerslinkerkeyvalues) - List linker values for a linker
* [getAddonLinkersLinkerKeyValuesValueId](#getaddonlinkerslinkerkeyvaluesvalueid) - Get a linker value
* [postAddonLinkersLinkerKeyValues](#postaddonlinkerslinkerkeyvalues) - Create a linker value
* [putAddon](#putaddon) - Update an installed app
* [putAddonLinkersLinkerKeyValues](#putaddonlinkerslinkerkeyvalues) - Update a linker value

## deleteAddon

Deletes the application for the user.

This endpoint is intended to be used by Bitbucket Connect apps
and only supports JWT authentication -- that is how Bitbucket
identifies the particular installation of the app. Developers
with applications registered in the "Develop Apps" section
of Bitbucket Marketplace need not use this endpoint as
updates for those applications can be sent out via the
UI of that section.

```
$ curl -X DELETE https://api.bitbucket.org/2.0/addon \
  -H "Authorization: JWT <JWT Token>"
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAddonResponse;
import org.openapis.openapi.models.operations.DeleteAddonSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAddonResponse res = sdk.addon.deleteAddon(new DeleteAddonSecurity() {{
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

## deleteAddonLinkersLinkerKeyValues

Delete all [linker](/cloud/bitbucket/modules/linker/) values for the
specified linker of the authenticated application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAddonLinkersLinkerKeyValuesRequest;
import org.openapis.openapi.models.operations.DeleteAddonLinkersLinkerKeyValuesResponse;
import org.openapis.openapi.models.operations.DeleteAddonLinkersLinkerKeyValuesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAddonLinkersLinkerKeyValuesRequest req = new DeleteAddonLinkersLinkerKeyValuesRequest("corrupti");            

            DeleteAddonLinkersLinkerKeyValuesResponse res = sdk.addon.deleteAddonLinkersLinkerKeyValues(req, new DeleteAddonLinkersLinkerKeyValuesSecurity() {{
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

## deleteAddonLinkersLinkerKeyValuesValueId

Delete a single [linker](/cloud/bitbucket/modules/linker/) value
of the authenticated application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAddonLinkersLinkerKeyValuesValueIdRequest;
import org.openapis.openapi.models.operations.DeleteAddonLinkersLinkerKeyValuesValueIdResponse;
import org.openapis.openapi.models.operations.DeleteAddonLinkersLinkerKeyValuesValueIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAddonLinkersLinkerKeyValuesValueIdRequest req = new DeleteAddonLinkersLinkerKeyValuesValueIdRequest("provident", 715190L);            

            DeleteAddonLinkersLinkerKeyValuesValueIdResponse res = sdk.addon.deleteAddonLinkersLinkerKeyValuesValueId(req, new DeleteAddonLinkersLinkerKeyValuesValueIdSecurity() {{
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

## getAddonLinkers

Gets a list of all [linkers](/cloud/bitbucket/modules/linker/)
for the authenticated application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddonLinkersResponse;
import org.openapis.openapi.models.operations.GetAddonLinkersSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAddonLinkersResponse res = sdk.addon.getAddonLinkers(new GetAddonLinkersSecurity() {{
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

## getAddonLinkersLinkerKey

Gets a [linker](/cloud/bitbucket/modules/linker/) specified by `linker_key`
for the authenticated application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddonLinkersLinkerKeyRequest;
import org.openapis.openapi.models.operations.GetAddonLinkersLinkerKeyResponse;
import org.openapis.openapi.models.operations.GetAddonLinkersLinkerKeySecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAddonLinkersLinkerKeyRequest req = new GetAddonLinkersLinkerKeyRequest("quibusdam");            

            GetAddonLinkersLinkerKeyResponse res = sdk.addon.getAddonLinkersLinkerKey(req, new GetAddonLinkersLinkerKeySecurity() {{
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

## getAddonLinkersLinkerKeyValues

Gets a list of all [linker](/cloud/bitbucket/modules/linker/) values for the
specified linker of the authenticated application.

A linker value lets applications supply values to modify its regular expression.

The base regular expression must use a Bitbucket-specific match group `(?K)`
which will be translated to `([\w\-]+)`. A value must match this pattern.

[Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddonLinkersLinkerKeyValuesRequest;
import org.openapis.openapi.models.operations.GetAddonLinkersLinkerKeyValuesResponse;
import org.openapis.openapi.models.operations.GetAddonLinkersLinkerKeyValuesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAddonLinkersLinkerKeyValuesRequest req = new GetAddonLinkersLinkerKeyValuesRequest("unde");            

            GetAddonLinkersLinkerKeyValuesResponse res = sdk.addon.getAddonLinkersLinkerKeyValues(req, new GetAddonLinkersLinkerKeyValuesSecurity() {{
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

## getAddonLinkersLinkerKeyValuesValueId

Get a single [linker](/cloud/bitbucket/modules/linker/) value
of the authenticated application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddonLinkersLinkerKeyValuesValueIdRequest;
import org.openapis.openapi.models.operations.GetAddonLinkersLinkerKeyValuesValueIdResponse;
import org.openapis.openapi.models.operations.GetAddonLinkersLinkerKeyValuesValueIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAddonLinkersLinkerKeyValuesValueIdRequest req = new GetAddonLinkersLinkerKeyValuesValueIdRequest("nulla", 544883L);            

            GetAddonLinkersLinkerKeyValuesValueIdResponse res = sdk.addon.getAddonLinkersLinkerKeyValuesValueId(req, new GetAddonLinkersLinkerKeyValuesValueIdSecurity() {{
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

## postAddonLinkersLinkerKeyValues

Creates a [linker](/cloud/bitbucket/modules/linker/) value for the specified
linker of authenticated application.

A linker value lets applications supply values to modify its regular expression.

The base regular expression must use a Bitbucket-specific match group `(?K)`
which will be translated to `([\w\-]+)`. A value must match this pattern.

[Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAddonLinkersLinkerKeyValuesRequest;
import org.openapis.openapi.models.operations.PostAddonLinkersLinkerKeyValuesResponse;
import org.openapis.openapi.models.operations.PostAddonLinkersLinkerKeyValuesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAddonLinkersLinkerKeyValuesRequest req = new PostAddonLinkersLinkerKeyValuesRequest("illum");            

            PostAddonLinkersLinkerKeyValuesResponse res = sdk.addon.postAddonLinkersLinkerKeyValues(req, new PostAddonLinkersLinkerKeyValuesSecurity() {{
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

## putAddon

Updates the application installation for the user.

This endpoint is intended to be used by Bitbucket Connect apps
and only supports JWT authentication -- that is how Bitbucket
identifies the particular installation of the app. Developers
with applications registered in the "Develop Apps" section
of Bitbucket need not use this endpoint as updates for those
applications can be sent out via the UI of that section.

Passing an empty body will update the installation using the
existing descriptor URL.

```
$ curl -X PUT https://api.bitbucket.org/2.0/addon \
  -H "Authorization: JWT <JWT Token>" \
  --header "Content-Type: application/json" \
  --data '{}'
```

The new `descriptor` for the installation can be also provided
in the body directly.

```
$ curl -X PUT https://api.bitbucket.org/2.0/addon \
  -H "Authorization: JWT <JWT Token>" \
  --header "Content-Type: application/json" \
  --data '{"descriptor": $NEW_DESCRIPTOR}'
```

In both these modes the URL of the descriptor cannot be changed. To
change the descriptor location and upgrade an installation
the request must be made exclusively with a `descriptor_url`.

 ```
$ curl -X PUT https://api.bitbucket.org/2.0/addon \
  -H "Authorization: JWT <JWT Token>" \
  --header "Content-Type: application/json" \
  --data '{"descriptor_url": $NEW_URL}'
```

The `descriptor_url` must exactly match the marketplace registration
that Atlassian has for the application. Contact your Atlassian
developer advocate to update this registration. Once the registration
has been updated you may call this resource for each installation.

Note that the scopes of the application cannot be increased
in the new descriptor nor reduced to none.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAddonResponse;
import org.openapis.openapi.models.operations.PutAddonSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutAddonResponse res = sdk.addon.putAddon(new PutAddonSecurity() {{
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

## putAddonLinkersLinkerKeyValues

Bulk update [linker](/cloud/bitbucket/modules/linker/) values for the specified
linker of the authenticated application.

A linker value lets applications supply values to modify its regular expression.

The base regular expression must use a Bitbucket-specific match group `(?K)`
which will be translated to `([\w\-]+)`. A value must match this pattern.

[Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAddonLinkersLinkerKeyValuesRequest;
import org.openapis.openapi.models.operations.PutAddonLinkersLinkerKeyValuesResponse;
import org.openapis.openapi.models.operations.PutAddonLinkersLinkerKeyValuesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutAddonLinkersLinkerKeyValuesRequest req = new PutAddonLinkersLinkerKeyValuesRequest("vel");            

            PutAddonLinkersLinkerKeyValuesResponse res = sdk.addon.putAddonLinkersLinkerKeyValues(req, new PutAddonLinkersLinkerKeyValuesSecurity() {{
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
