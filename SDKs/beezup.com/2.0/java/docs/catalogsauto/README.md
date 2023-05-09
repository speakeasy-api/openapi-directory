# catalogsAuto

### Available Operations

* [autoConfigureAutoImportInterval](#autoconfigureautoimportinterval) - Configure Auto Import Interval
* [autoDeleteAutoImport](#autodeleteautoimport) - Delete Auto Import
* [autoGetAutoImportConfiguration](#autogetautoimportconfiguration) - Get the auto import configuration
* [autoPauseAutoImport](#autopauseautoimport) - Pause Auto Import
* [autoResumeAutoImport](#autoresumeautoimport) - Resume Auto Import
* [autoScheduleAutoImport](#autoscheduleautoimport) - Configure Auto Import Schedules
* [autoStartAutoImport](#autostartautoimport) - Start Auto Import Manually
* [importationActivateAutoImport](#importationactivateautoimport) - Activate the auto importation of the last successful manual catalog importation.

## autoConfigureAutoImportInterval

Configure Auto Import Interval

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutoConfigureAutoImportIntervalRequest;
import org.openapis.openapi.models.operations.AutoConfigureAutoImportIntervalResponse;
import org.openapis.openapi.models.shared.ConfigureAutoImportIntervalRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutoConfigureAutoImportIntervalRequest req = new AutoConfigureAutoImportIntervalRequest(                new ConfigureAutoImportIntervalRequest("04:00:00");, "consequatur");            

            AutoConfigureAutoImportIntervalResponse res = sdk.catalogsAuto.autoConfigureAutoImportInterval(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## autoDeleteAutoImport

Delete Auto Import

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutoDeleteAutoImportRequest;
import org.openapis.openapi.models.operations.AutoDeleteAutoImportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutoDeleteAutoImportRequest req = new AutoDeleteAutoImportRequest("est");            

            AutoDeleteAutoImportResponse res = sdk.catalogsAuto.autoDeleteAutoImport(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## autoGetAutoImportConfiguration

Get the auto import configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutoGetAutoImportConfigurationRequest;
import org.openapis.openapi.models.operations.AutoGetAutoImportConfigurationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutoGetAutoImportConfigurationRequest req = new AutoGetAutoImportConfigurationRequest("quibusdam");            

            AutoGetAutoImportConfigurationResponse res = sdk.catalogsAuto.autoGetAutoImportConfiguration(req);

            if (res.autoImportConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## autoPauseAutoImport

Pause Auto Import

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutoPauseAutoImportRequest;
import org.openapis.openapi.models.operations.AutoPauseAutoImportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutoPauseAutoImportRequest req = new AutoPauseAutoImportRequest("explicabo");            

            AutoPauseAutoImportResponse res = sdk.catalogsAuto.autoPauseAutoImport(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## autoResumeAutoImport

Resume Auto Import

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutoResumeAutoImportRequest;
import org.openapis.openapi.models.operations.AutoResumeAutoImportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutoResumeAutoImportRequest req = new AutoResumeAutoImportRequest("deserunt");            

            AutoResumeAutoImportResponse res = sdk.catalogsAuto.autoResumeAutoImport(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## autoScheduleAutoImport

Configure Auto Import Schedules

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutoScheduleAutoImportRequest;
import org.openapis.openapi.models.operations.AutoScheduleAutoImportResponse;
import org.openapis.openapi.models.shared.ScheduleAutoImportRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutoScheduleAutoImportRequest req = new AutoScheduleAutoImportRequest(                new ScheduleAutoImportRequest(                new String[]{{
                                                add("quibusdam"),
                                                add("labore"),
                                                add("modi"),
                                            }}) {{
                                localTimeZoneName = "Romance Standard Time";
                            }};, "qui");            

            AutoScheduleAutoImportResponse res = sdk.catalogsAuto.autoScheduleAutoImport(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## autoStartAutoImport

Start Auto Import Manually

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutoStartAutoImportRequest;
import org.openapis.openapi.models.operations.AutoStartAutoImportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutoStartAutoImportRequest req = new AutoStartAutoImportRequest("aliquid");            

            AutoStartAutoImportResponse res = sdk.catalogsAuto.autoStartAutoImport(req);

            if (res.linksImportationGetImportationMonitoringLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationActivateAutoImport

Once you have made your fist manual catalog importation with success, you can call this operation to import it automatically. No parameter required, we know which one it is.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationActivateAutoImportRequest;
import org.openapis.openapi.models.operations.ImportationActivateAutoImportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationActivateAutoImportRequest req = new ImportationActivateAutoImportRequest("cupiditate");            

            ImportationActivateAutoImportResponse res = sdk.catalogsAuto.importationActivateAutoImport(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
