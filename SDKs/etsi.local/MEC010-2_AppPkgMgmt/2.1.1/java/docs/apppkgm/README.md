# appPkgm

## Overview

App Package management

### Available Operations

* [appDGET](#appdget) - Reads the content of the AppD of on-boarded individual application package resources.
* [appDIdGET](#appdidget) - Fetch the onboarded application package content identified by appPkgId or appDId.
* [appDIdPUT](#appdidput) - Uploads the content of application package.
* [appPkgGET](#apppkgget) - Fetch the onboarded application package content identified by appPkgId or appDId.
* [appPkgIdGET](#apppkgidget) - Reads the content of the AppD of on-boarded individual application package resources.
* [appPkgPUT](#apppkgput) - Uploads the content of application package.
* [appPackageDELETE](#apppackagedelete) - Deletes an individual application package resources
* [appPackageGET](#apppackageget) - Queries the information related to individual application package resources
* [appPackagePATCH](#apppackagepatch) - Updates the operational state of an individual application package resource
* [appPackagesGET](#apppackagesget) - Queries information relating to on-boarded application packages in the MEO
* [appPackagesPOST](#apppackagespost) - Create a resource for on-boarding an application package to a MEO
* [individualSubscriptionDELETE](#individualsubscriptiondelete) - Deletes the individual subscription to notifications about application package changes in MEO.
* [individualSubscriptionGET](#individualsubscriptionget) - Used to represent an individual subscription to notifications about application package changes.
* [subscriptionsGET](#subscriptionsget) - used to retrieve the information of subscriptions to individual application package resource in MEO
* [subscriptionsPOST](#subscriptionspost) - Subscribe to notifications about on-boarding an application package

## appDGET

Reads the content of the AppD of on-boarded individual application package resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppDGETRequest;
import org.openapis.openapi.models.operations.AppDGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppDGETRequest req = new AppDGETRequest("corrupti") {{
                allFields = "illum";
                excludeDefault = "vel";
                excludeFields = "error";
                fields = "deserunt";
                filter = "suscipit";
            }};            

            AppDGETResponse res = sdk.appPkgm.appDGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appDIdGET

Fetch the onboarded application package content identified by appPkgId or appDId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppDIdGETRequest;
import org.openapis.openapi.models.operations.AppDIdGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppDIdGETRequest req = new AppDIdGETRequest("iure");            

            AppDIdGETResponse res = sdk.appPkgm.appDIdGET(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appDIdPUT

Uploads the content of application package.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppDIdPUTRequest;
import org.openapis.openapi.models.operations.AppDIdPUTResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppDIdPUTRequest req = new AppDIdPUTRequest("magnam") {{
                requestBody = "debitis".getBytes();
            }};            

            AppDIdPUTResponse res = sdk.appPkgm.appDIdPUT(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appPkgGET

Fetch the onboarded application package content identified by appPkgId or appDId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppPkgGETRequest;
import org.openapis.openapi.models.operations.AppPkgGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppPkgGETRequest req = new AppPkgGETRequest("ipsa");            

            AppPkgGETResponse res = sdk.appPkgm.appPkgGET(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appPkgIdGET

Reads the content of the AppD of on-boarded individual application package resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppPkgIdGETRequest;
import org.openapis.openapi.models.operations.AppPkgIdGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppPkgIdGETRequest req = new AppPkgIdGETRequest("delectus") {{
                allFields = "tempora";
                excludeDefault = "suscipit";
                excludeFields = "molestiae";
                fields = "minus";
                filter = "placeat";
            }};            

            AppPkgIdGETResponse res = sdk.appPkgm.appPkgIdGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appPkgPUT

Uploads the content of application package.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppPkgPUTRequest;
import org.openapis.openapi.models.operations.AppPkgPUTResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppPkgPUTRequest req = new AppPkgPUTRequest("voluptatum") {{
                requestBody = "iusto".getBytes();
            }};            

            AppPkgPUTResponse res = sdk.appPkgm.appPkgPUT(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appPackageDELETE

Deletes an individual application package resources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppPackageDELETERequest;
import org.openapis.openapi.models.operations.AppPackageDELETEResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppPackageDELETERequest req = new AppPackageDELETERequest("excepturi");            

            AppPackageDELETEResponse res = sdk.appPkgm.appPackageDELETE(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appPackageGET

Queries the information related to individual application package resources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppPackageGETRequest;
import org.openapis.openapi.models.operations.AppPackageGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppPackageGETRequest req = new AppPackageGETRequest("nisi");            

            AppPackageGETResponse res = sdk.appPkgm.appPackageGET(req);

            if (res.appPkgInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appPackagePATCH

Updates the operational state of an individual application package resources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppPackagePATCHRequest;
import org.openapis.openapi.models.operations.AppPackagePATCHResponse;
import org.openapis.openapi.models.shared.AppPkgInfoModifications;
import org.openapis.openapi.models.shared.AppPkgInfoModificationsOperationStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppPackagePATCHRequest req = new AppPackagePATCHRequest(                new AppPkgInfoModifications(AppPkgInfoModificationsOperationStateEnum.ENABLED);, "temporibus");            

            AppPackagePATCHResponse res = sdk.appPkgm.appPackagePATCH(req);

            if (res.appPkgInfoModifications != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appPackagesGET

queries information relating to on-boarded application packages in the MEO

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppPackagesGETRequest;
import org.openapis.openapi.models.operations.AppPackagesGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppPackagesGETRequest req = new AppPackagesGETRequest() {{
                allFields = "ab";
                excludeDefault = "quis";
                excludeFields = "veritatis";
                fields = "deserunt";
                filter = "perferendis";
            }};            

            AppPackagesGETResponse res = sdk.appPkgm.appPackagesGET(req);

            if (res.appPkgInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appPackagesPOST

Create a resource for on-boarding an application package to a MEO

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppPackagesPOSTResponse;
import org.openapis.openapi.models.shared.Checksum;
import org.openapis.openapi.models.shared.CreateAppPkg;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateAppPkg req = new CreateAppPkg("ipsam", "repellendus", "sapiente",                 new Checksum("quo", "odit");) {{
                appProvider = "at";
                userDefinedData = new java.util.HashMap<String, Object>() {{
                    put("maiores", "molestiae");
                    put("quod", "quod");
                    put("esse", "totam");
                    put("porro", "dolorum");
                }};
            }};            

            AppPackagesPOSTResponse res = sdk.appPkgm.appPackagesPOST(req);

            if (res.appPkgInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## individualSubscriptionDELETE

Deletes the individual subscription to notifications about application package changes in MEO.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IndividualSubscriptionDELETERequest;
import org.openapis.openapi.models.operations.IndividualSubscriptionDELETEResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IndividualSubscriptionDELETERequest req = new IndividualSubscriptionDELETERequest("dicta");            

            IndividualSubscriptionDELETEResponse res = sdk.appPkgm.individualSubscriptionDELETE(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## individualSubscriptionGET

Used to represent an individual subscription to notifications about application package changes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IndividualSubscriptionGETRequest;
import org.openapis.openapi.models.operations.IndividualSubscriptionGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IndividualSubscriptionGETRequest req = new IndividualSubscriptionGETRequest("nam");            

            IndividualSubscriptionGETResponse res = sdk.appPkgm.individualSubscriptionGET(req);

            if (res.appPkgSubscriptionInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscriptionsGET

used to retrieve the information of subscriptions to individual application package resource in MEO package

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscriptionsGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubscriptionsGETResponse res = sdk.appPkgm.subscriptionsGET();

            if (res.appPkgSubscriptionLinkList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscriptionsPOST

Subscribe to notifications about on-boarding an application package

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.callbacks.SubscriptionsPOSTNotificationPOSTResponse;
import org.openapis.openapi.models.operations.SubscriptionsPOSTResponse;
import org.openapis.openapi.models.shared.AppPkgNotification;
import org.openapis.openapi.models.shared.AppPkgNotificationLinks;
import org.openapis.openapi.models.shared.AppPkgNotificationOperationalStateEnum;
import org.openapis.openapi.models.shared.AppPkgNotificationTypeEnum;
import org.openapis.openapi.models.shared.AppPkgSubscription;
import org.openapis.openapi.models.shared.LinkType;
import org.openapis.openapi.models.shared.SubsctiptionTypeAppPkgEnum;
import org.openapis.openapi.models.shared.TimeStamp;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AppPkgSubscription req = new AppPkgSubscription("https://oily-cephalopod.name", SubsctiptionTypeAppPkgEnum.APP_PACKAGE_DELETION) {{
                appPkgFilter = new String[]{{
                    add("totam"),
                    add("beatae"),
                    add("commodi"),
                    add("molestiae"),
                }};
            }};            

            SubscriptionsPOSTResponse res = sdk.appPkgm.subscriptionsPOST(req);

            if (res.appPkgSubscriptionInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
