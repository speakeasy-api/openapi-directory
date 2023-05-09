# terminalActionsCompanyLevel

### Available Operations

* [getCompaniesCompanyIdAndroidApps](#getcompaniescompanyidandroidapps) - Get a list of Android apps
* [getCompaniesCompanyIdAndroidCertificates](#getcompaniescompanyidandroidcertificates) - Get a list of Android certificates
* [getCompaniesCompanyIdTerminalActions](#getcompaniescompanyidterminalactions) - Get a list of terminal actions
* [getCompaniesCompanyIdTerminalActionsActionId](#getcompaniescompanyidterminalactionsactionid) - Get terminal action

## getCompaniesCompanyIdAndroidApps

Returns a list of the Android apps that are available for the company identified in the path. 
These apps have been uploaded to Adyen and can be installed or uninstalled on Android payment terminals through [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read
* Management API—Terminal actions read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdAndroidAppsRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdAndroidAppsResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdAndroidAppsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdAndroidAppsRequest req = new GetCompaniesCompanyIdAndroidAppsRequest("sit") {{
                pageNumber = 854614;
                pageSize = 67249;
            }};            

            GetCompaniesCompanyIdAndroidAppsResponse res = sdk.terminalActionsCompanyLevel.getCompaniesCompanyIdAndroidApps(req, new GetCompaniesCompanyIdAndroidAppsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.androidAppsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompaniesCompanyIdAndroidCertificates

Returns a list of the Android certificates that are available for the company identified in the path.
Typically, these certificates enable running apps on Android payment terminals. The certifcates in the list have been uploaded to Adyen and can be installed or uninstalled on Android terminals through [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read
* Management API—Terminal actions read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdAndroidCertificatesRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdAndroidCertificatesResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdAndroidCertificatesSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdAndroidCertificatesRequest req = new GetCompaniesCompanyIdAndroidCertificatesRequest("soluta") {{
                pageNumber = 679393;
                pageSize = 478596;
            }};            

            GetCompaniesCompanyIdAndroidCertificatesResponse res = sdk.terminalActionsCompanyLevel.getCompaniesCompanyIdAndroidCertificates(req, new GetCompaniesCompanyIdAndroidCertificatesSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.androidCertificatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompaniesCompanyIdTerminalActions

Returns the [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) that have been scheduled for the company identified in the path.The response doesn't include actions that are scheduled by Adyen.
To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read
* Management API—Terminal actions read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalActionsRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalActionsResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalActionsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdTerminalActionsRequest req = new GetCompaniesCompanyIdTerminalActionsRequest("voluptate") {{
                pageNumber = 677082;
                pageSize = 536579;
                status = "omnis";
                type = "necessitatibus";
            }};            

            GetCompaniesCompanyIdTerminalActionsResponse res = sdk.terminalActionsCompanyLevel.getCompaniesCompanyIdTerminalActions(req, new GetCompaniesCompanyIdTerminalActionsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.listExternalTerminalActionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompaniesCompanyIdTerminalActionsActionId

Returns the details of the [terminal action](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) identified in the path.
To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read
* Management API—Terminal actions read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalActionsActionIdRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalActionsActionIdResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalActionsActionIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdTerminalActionsActionIdRequest req = new GetCompaniesCompanyIdTerminalActionsActionIdRequest("distinctio", "asperiores");            

            GetCompaniesCompanyIdTerminalActionsActionIdResponse res = sdk.terminalActionsCompanyLevel.getCompaniesCompanyIdTerminalActionsActionId(req, new GetCompaniesCompanyIdTerminalActionsActionIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.externalTerminalAction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
