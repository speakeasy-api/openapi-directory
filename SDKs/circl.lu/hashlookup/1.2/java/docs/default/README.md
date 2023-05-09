# default_

## Overview

Default namespace

### Available Operations

* [getChildren](#getchildren) - Return children from a given SHA1.  A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
* [getInfo](#getinfo) - Info about the hashlookup database
* [getLookupMd5](#getlookupmd5) - Lookup MD5.
* [getLookupSha1](#getlookupsha1) - Lookup SHA-1.
* [getLookupSha256](#getlookupsha256) - Lookup SHA-256.
* [getParents](#getparents) - Return parents from a given SHA1. A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
* [getSessionCreate](#getsessioncreate) - Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.
* [getSessionMatches](#getsessionmatches) - Return set of matching and non-matching hashes from a session.
* [getStattop](#getstattop) - Return the top 100 of most queried values.
* [postBulkmd5](#postbulkmd5) - Bulk search of MD5 hashes in a JSON array with the key 'hashes'.
* [postBulksha1](#postbulksha1) - Bulk search of SHA1 hashes in a JSON array with the 'hashes'.

## getChildren

Return children from a given SHA1.  A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChildrenRequest;
import org.openapis.openapi.models.operations.GetChildrenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChildrenRequest req = new GetChildrenRequest(844266L, "unde", "nulla");            

            GetChildrenResponse res = sdk.default_.getChildren(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInfo

Info about the hashlookup database

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInfoResponse res = sdk.default_.getInfo();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLookupMd5

Lookup MD5.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLookupMd5Request;
import org.openapis.openapi.models.operations.GetLookupMd5Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLookupMd5Request req = new GetLookupMd5Request("corrupti");            

            GetLookupMd5Response res = sdk.default_.getLookupMd5(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLookupSha1

Lookup SHA-1.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLookupSha1Request;
import org.openapis.openapi.models.operations.GetLookupSha1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLookupSha1Request req = new GetLookupSha1Request("illum");            

            GetLookupSha1Response res = sdk.default_.getLookupSha1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLookupSha256

Lookup SHA-256.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLookupSha256Request;
import org.openapis.openapi.models.operations.GetLookupSha256Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLookupSha256Request req = new GetLookupSha256Request("vel");            

            GetLookupSha256Response res = sdk.default_.getLookupSha256(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getParents

Return parents from a given SHA1. A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetParentsRequest;
import org.openapis.openapi.models.operations.GetParentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetParentsRequest req = new GetParentsRequest(623564L, "deserunt", "suscipit");            

            GetParentsResponse res = sdk.default_.getParents(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSessionCreate

Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSessionCreateRequest;
import org.openapis.openapi.models.operations.GetSessionCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSessionCreateRequest req = new GetSessionCreateRequest("iure");            

            GetSessionCreateResponse res = sdk.default_.getSessionCreate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSessionMatches

Return set of matching and non-matching hashes from a session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSessionMatchesRequest;
import org.openapis.openapi.models.operations.GetSessionMatchesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSessionMatchesRequest req = new GetSessionMatchesRequest("magnam");            

            GetSessionMatchesResponse res = sdk.default_.getSessionMatches(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStattop

Return the top 100 of most queried values.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStattopResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStattopResponse res = sdk.default_.getStattop();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBulkmd5

Bulk search of MD5 hashes in a JSON array with the key 'hashes'.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBulkmd5Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBulkmd5Response res = sdk.default_.postBulkmd5();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBulksha1

Bulk search of SHA1 hashes in a JSON array with the 'hashes'.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBulksha1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBulksha1Response res = sdk.default_.postBulksha1();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
