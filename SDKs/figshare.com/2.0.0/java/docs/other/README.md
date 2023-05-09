# other

### Available Operations

* [categoriesList](#categorieslist) - Public Categories
* [fileDownload](#filedownload) - Public File Download
* [itemTypesList](#itemtypeslist) - Item Types
* [licensesList](#licenseslist) - Public Licenses
* [privateAccount](#privateaccount) - Private Account information
* [privateFundingSearch](#privatefundingsearch) - Search Funding
* [privateLicensesList](#privatelicenseslist) - Private Account Licenses

## categoriesList

Returns a list of public categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CategoriesListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CategoriesListResponse res = sdk.other.categoriesList();

            if (res.categories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileDownload

Starts the download of a file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileDownloadRequest;
import org.openapis.openapi.models.operations.FileDownloadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileDownloadRequest req = new FileDownloadRequest(356707L);            

            FileDownloadResponse res = sdk.other.fileDownload(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## itemTypesList

Returns the list of Item Types of the requested group. If no user is authenticated, returns the item types available for Figshare.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemTypesListRequest;
import org.openapis.openapi.models.operations.ItemTypesListResponse;
import org.openapis.openapi.models.operations.ItemTypesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ItemTypesListRequest req = new ItemTypesListRequest() {{
                groupId = 391774L;
            }};            

            ItemTypesListResponse res = sdk.other.itemTypesList(req, new ItemTypesListSecurity("aut") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## licensesList

Returns a list of public licenses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicensesListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicensesListResponse res = sdk.other.licensesList();

            if (res.licenses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateAccount

Account information for token/personal token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateAccountResponse;
import org.openapis.openapi.models.operations.PrivateAccountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateAccountResponse res = sdk.other.privateAccount(new PrivateAccountSecurity("voluptatum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## privateFundingSearch

Search for fundings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateFundingSearchResponse;
import org.openapis.openapi.models.operations.PrivateFundingSearchSecurity;
import org.openapis.openapi.models.shared.FundingSearch;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.FundingSearch req = new FundingSearch() {{
                searchFor = "qui";
            }};            

            PrivateFundingSearchResponse res = sdk.other.privateFundingSearch(req, new PrivateFundingSearchSecurity("quibusdam") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fundingInformations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privateLicensesList

This is a private endpoint that requires OAuth. It will return a list with figshare public licenses AND licenses defined for account's institution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivateLicensesListResponse;
import org.openapis.openapi.models.operations.PrivateLicensesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivateLicensesListResponse res = sdk.other.privateLicensesList(new PrivateLicensesListSecurity("ex") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.licenses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
