# package_

### Available Operations

* [deletePackage](#deletepackage) - Delete a package
* [getPackage](#getpackage) - Gets a package
* [listPackageFiles](#listpackagefiles) - Gets all files of a package
* [listPackages](#listpackages) - Gets all packages of an owner

## deletePackage

Delete a package

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePackageRequest;
import org.openapis.openapi.models.operations.DeletePackageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePackageRequest req = new DeletePackageRequest("occaecati", "atque", "et", "esse");            

            DeletePackageResponse res = sdk.package_.deletePackage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPackage

Gets a package

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPackageRequest;
import org.openapis.openapi.models.operations.GetPackageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPackageRequest req = new GetPackageRequest("eveniet", "accusamus", "veritatis", "esse");            

            GetPackageResponse res = sdk.package_.getPackage(req);

            if (res.package_ != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPackageFiles

Gets all files of a package

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPackageFilesRequest;
import org.openapis.openapi.models.operations.ListPackageFilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPackageFilesRequest req = new ListPackageFilesRequest("quod", "nam", "vero", "aliquid");            

            ListPackageFilesResponse res = sdk.package_.listPackageFiles(req);

            if (res.packageFiles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPackages

Gets all packages of an owner

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPackagesRequest;
import org.openapis.openapi.models.operations.ListPackagesResponse;
import org.openapis.openapi.models.operations.ListPackagesTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPackagesRequest req = new ListPackagesRequest("quasi") {{
                limit = 904045L;
                page = 426306L;
                q = "harum";
                type = ListPackagesTypeEnum.HELM;
            }};            

            ListPackagesResponse res = sdk.package_.listPackages(req);

            if (res.packages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
