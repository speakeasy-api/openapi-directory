# terminalActionsTerminalLevel

### Available Operations

* [postTerminalsScheduleActions](#postterminalsscheduleactions) - Create a terminal action

## postTerminalsScheduleActions

Schedules a [terminal action](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) by specifying the action and the terminals that the action must be applied to. 

The following restrictions apply:
* You can schedule only one action at a time. For example, to install a new app version and remove an old app version, you have to make two API requests. 
* The maximum number of terminals in a request is **100**. For example, to apply an action to 250 terminals, you have to divide the terminals over three API requests. 
* If there is an error with one or more terminal IDs in the request, the action is scheduled for none of the terminals. You need to fix the error and try again. 

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTerminalsScheduleActionsResponse;
import org.openapis.openapi.models.operations.PostTerminalsScheduleActionsSecurity;
import org.openapis.openapi.models.shared.InstallAndroidAppDetails;
import org.openapis.openapi.models.shared.InstallAndroidAppDetailsTypeEnum;
import org.openapis.openapi.models.shared.InstallAndroidCertificateDetails;
import org.openapis.openapi.models.shared.InstallAndroidCertificateDetailsTypeEnum;
import org.openapis.openapi.models.shared.ReleaseUpdateDetails;
import org.openapis.openapi.models.shared.ReleaseUpdateDetailsTypeEnum;
import org.openapis.openapi.models.shared.ScheduleTerminalActionsRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.UninstallAndroidAppDetails;
import org.openapis.openapi.models.shared.UninstallAndroidAppDetailsTypeEnum;
import org.openapis.openapi.models.shared.UninstallAndroidCertificateDetails;
import org.openapis.openapi.models.shared.UninstallAndroidCertificateDetailsTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ScheduleTerminalActionsRequest req = new ScheduleTerminalActionsRequest() {{
                actionDetails = new ReleaseUpdateDetails() {{
                    type = ReleaseUpdateDetailsTypeEnum.RELEASE_UPDATE;
                    updateAtFirstMaintenanceCall = false;
                }};;
                scheduledAt = "ipsum";
                storeId = "voluptate";
                terminalIds = new String[]{{
                    add("saepe"),
                    add("eius"),
                    add("aspernatur"),
                }};
            }};            

            PostTerminalsScheduleActionsResponse res = sdk.terminalActionsTerminalLevel.postTerminalsScheduleActions(req, new PostTerminalsScheduleActionsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.scheduleTerminalActionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
