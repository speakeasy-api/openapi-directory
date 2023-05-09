# domains

## Overview

Domains Database

### Available Operations

* [getDomainsTldZoneIdDownload](#getdomainstldzoneiddownload) - Download Whole Dataset for TLD
* [getDomainsTldZoneIdSearch](#getdomainstldzoneidsearch) - Domains Search for TLD
* [getDomainsUpdatesAdded](#getdomainsupdatesadded) - Get added domains, latest if date not specified
* [getDomainsUpdatesAddedDownload](#getdomainsupdatesaddeddownload) - Download added domains, latest if date not specified
* [getDomainsUpdatesDeleted](#getdomainsupdatesdeleted) - Get deleted domains, latest if date not specified
* [getDomainsUpdatesDeletedDownload](#getdomainsupdatesdeleteddownload) - Download deleted domains, latest if date not specified
* [getDomainsUpdatesList](#getdomainsupdateslist) - List of updates
* [getSearchDomainItem](#getsearchdomainitem) - Domains Database Search
* [getTldDomainItem](#gettlddomainitem) - Get TLD records

## getDomainsTldZoneIdDownload

Download Whole Dataset for TLD

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainsTldZoneIdDownloadRequest;
import org.openapis.openapi.models.operations.GetDomainsTldZoneIdDownloadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainsTldZoneIdDownloadRequest req = new GetDomainsTldZoneIdDownloadRequest("quibusdam") {{
                apiKey = "unde";
                date = "nulla";
            }};            

            GetDomainsTldZoneIdDownloadResponse res = sdk.domains.getDomainsTldZoneIdDownload(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainsTldZoneIdSearch

Domains Search for TLD

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainsTldZoneIdSearchRequest;
import org.openapis.openapi.models.operations.GetDomainsTldZoneIdSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainsTldZoneIdSearchRequest req = new GetDomainsTldZoneIdSearchRequest("corrupti") {{
                a = "illum";
                cname = "vel";
                mx = "error";
                ns = "deserunt";
                txt = "suscipit";
                apiKey = "iure";
                country = "French Guiana";
                date = "debitis";
                domain = "ipsa";
                isDead = false;
                limit = 963663L;
                page = "tempora";
            }};            

            GetDomainsTldZoneIdSearchResponse res = sdk.domains.getDomainsTldZoneIdSearch(req);

            if (res.searchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainsUpdatesAdded

Get added domains, latest if date not specified

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainsUpdatesAddedRequest;
import org.openapis.openapi.models.operations.GetDomainsUpdatesAddedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainsUpdatesAddedRequest req = new GetDomainsUpdatesAddedRequest() {{
                apiKey = "suscipit";
                date = "molestiae";
                limit = 791725L;
                page = "placeat";
            }};            

            GetDomainsUpdatesAddedResponse res = sdk.domains.getDomainsUpdatesAdded(req);

            if (res.searchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainsUpdatesAddedDownload

Download added domains, latest if date not specified

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainsUpdatesAddedDownloadRequest;
import org.openapis.openapi.models.operations.GetDomainsUpdatesAddedDownloadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainsUpdatesAddedDownloadRequest req = new GetDomainsUpdatesAddedDownloadRequest() {{
                apiKey = "voluptatum";
                date = "iusto";
            }};            

            GetDomainsUpdatesAddedDownloadResponse res = sdk.domains.getDomainsUpdatesAddedDownload(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainsUpdatesDeleted

Get deleted domains, latest if date not specified

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainsUpdatesDeletedRequest;
import org.openapis.openapi.models.operations.GetDomainsUpdatesDeletedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainsUpdatesDeletedRequest req = new GetDomainsUpdatesDeletedRequest() {{
                apiKey = "excepturi";
                date = "nisi";
                limit = 925597L;
                page = "temporibus";
            }};            

            GetDomainsUpdatesDeletedResponse res = sdk.domains.getDomainsUpdatesDeleted(req);

            if (res.searchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainsUpdatesDeletedDownload

Download deleted domains, latest if date not specified

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainsUpdatesDeletedDownloadRequest;
import org.openapis.openapi.models.operations.GetDomainsUpdatesDeletedDownloadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainsUpdatesDeletedDownloadRequest req = new GetDomainsUpdatesDeletedDownloadRequest() {{
                apiKey = "ab";
                date = "quis";
            }};            

            GetDomainsUpdatesDeletedDownloadResponse res = sdk.domains.getDomainsUpdatesDeletedDownload(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainsUpdatesList

List of updates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainsUpdatesListRequest;
import org.openapis.openapi.models.operations.GetDomainsUpdatesListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainsUpdatesListRequest req = new GetDomainsUpdatesListRequest() {{
                apiKey = "veritatis";
            }};            

            GetDomainsUpdatesListResponse res = sdk.domains.getDomainsUpdatesList(req);

            if (res.updateModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSearchDomainItem

Domains Database Search

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchDomainItemRequest;
import org.openapis.openapi.models.operations.GetSearchDomainItemResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSearchDomainItemRequest req = new GetSearchDomainItemRequest() {{
                a = "deserunt";
                cname = "perferendis";
                mx = "ipsam";
                ns = "repellendus";
                txt = "sapiente";
                apiKey = "quo";
                country = "Burundi";
                date = "at";
                domain = "at";
                isDead = false;
                limit = 978619L;
                page = "molestiae";
                zone = "quod";
            }};            

            GetSearchDomainItemResponse res = sdk.domains.getSearchDomainItem(req);

            if (res.searchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTldDomainItem

Get TLD records

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTldDomainItemRequest;
import org.openapis.openapi.models.operations.GetTldDomainItemResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTldDomainItemRequest req = new GetTldDomainItemRequest("quod") {{
                a = "esse";
                cname = "totam";
                mx = "porro";
                ns = "dolorum";
                txt = "dicta";
                apiKey = "nam";
                country = "Nicaragua";
                date = "occaecati";
                domain = "fugit";
                isDead = false;
                limit = 537373L;
                page = "hic";
            }};            

            GetTldDomainItemResponse res = sdk.domains.getTldDomainItem(req);

            if (res.searchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
