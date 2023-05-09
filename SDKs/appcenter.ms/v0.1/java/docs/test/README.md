# test

### Available Operations

* [testArchiveTestRun](#testarchivetestrun) - Logically deletes a test run
* [testCreateDeviceSelection](#testcreatedeviceselection) - Creates a short ID for a list of devices
* [testCreateDeviceSetOfOwner](#testcreatedevicesetofowner) - Creates a device set belonging to the owner
* [testCreateDeviceSetOfUser](#testcreatedevicesetofuser) - Creates a device set belonging to the user
* [testCreateSubscription](#testcreatesubscription) - Accept a free trial subscription
* [testCreateTestRun](#testcreatetestrun) - Creates a new test run
* [testCreateTestSeries](#testcreatetestseries) - Creates new test series for an application
* [testDeleteDeviceSetOfOwner](#testdeletedevicesetofowner) - Deletes a device set belonging to the owner
* [testDeleteDeviceSetOfUser](#testdeletedevicesetofuser) - Deletes a device set belonging to the user
* [testDeleteTestSeries](#testdeletetestseries) - Deletes a single test series
* [testGdprExportAccount](#testgdprexportaccount) - Lists account data
* [testGdprExportAccounts](#testgdprexportaccounts) - Lists all the endpoints available for Test accounts data
* [testGdprExportApp](#testgdprexportapp) - Lists app data
* [testGdprExportApps](#testgdprexportapps) - Lists all the endpoints available for Test apps data
* [testGdprExportFeatureFlag](#testgdprexportfeatureflag) - Lists feature flag data
* [testGdprExportFileSetFile](#testgdprexportfilesetfile) - Lists file set file data
* [testGdprExportHashFile](#testgdprexporthashfile) - Lists hash file data
* [testGdprExportPipelineTest](#testgdprexportpipelinetest) - Lists pipeline test data
* [testGdprExportTestRun](#testgdprexporttestrun) - Lists test run data
* [testGetAllTestRunsForSeries](#testgetalltestrunsforseries) - Returns list of all test runs for a given test series
* [testGetAllTestSeries](#testgetalltestseries) - Returns list of all test series for an application
* [testGetDeviceConfigurations](#testgetdeviceconfigurations) - Returns a list of available devices
* [testGetDeviceSetOfOwner](#testgetdevicesetofowner) - Gets a device set belonging to the owner
* [testGetDeviceSetOfUser](#testgetdevicesetofuser) - Gets a device set belonging to the user
* [testGetSubscriptions](#testgetsubscriptions) - Get information about the currently active subscriptions, if any
* [testGetTestReport](#testgettestreport) - Returns a single test report
* [testGetTestRun](#testgettestrun) - Returns a single test runs
* [testGetTestRunState](#testgettestrunstate) - Gets state of the test run
* [testGetTestRuns](#testgettestruns) - Returns a list of test runs
* [testListDeviceSetsOfOwner](#testlistdevicesetsofowner) - Lists device sets belonging to the owner
* [testListDeviceSetsOfUser](#testlistdevicesetsofuser) - Lists device sets belonging to the user
* [testPatchTestSeries](#testpatchtestseries) - Updates name and slug of a test series
* [testStartTestRun](#teststarttestrun) - Starts test run
* [testStartUploadingFile](#teststartuploadingfile) - Uploads file for a test run
* [testStopTestRun](#teststoptestrun) - Stop a test run execution
* [testUpdateDeviceSetOfOwner](#testupdatedevicesetofowner) - Updates a device set belonging to the owner
* [testUpdateDeviceSetOfUser](#testupdatedevicesetofuser) - Updates a device set belonging to the user
* [testUploadHash](#testuploadhash) - Adds file with the given hash to a test run
* [testUploadHashesBatch](#testuploadhashesbatch) - Adds file with the given hash to a test run

## testArchiveTestRun

Logically deletes a test run

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestArchiveTestRunRequest;
import org.openapis.openapi.models.operations.TestArchiveTestRunResponse;
import org.openapis.openapi.models.operations.TestArchiveTestRunSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestArchiveTestRunRequest req = new TestArchiveTestRunRequest("magnam", "reprehenderit", "c88373a4-0e19-442f-b2e5-5055756f5d56");            

            TestArchiveTestRunResponse res = sdk.test.testArchiveTestRun(req, new TestArchiveTestRunSecurity("pariatur") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testRun != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testCreateDeviceSelection

Creates a short ID for a list of devices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestCreateDeviceSelectionDeviceList;
import org.openapis.openapi.models.operations.TestCreateDeviceSelectionRequest;
import org.openapis.openapi.models.operations.TestCreateDeviceSelectionResponse;
import org.openapis.openapi.models.operations.TestCreateDeviceSelectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestCreateDeviceSelectionRequest req = new TestCreateDeviceSelectionRequest(                new TestCreateDeviceSelectionDeviceList(                new String[]{{
                                                add("quidem"),
                                            }});, "repellendus", "perferendis");            

            TestCreateDeviceSelectionResponse res = sdk.test.testCreateDeviceSelection(req, new TestCreateDeviceSelectionSecurity("id") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.deviceSelection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testCreateDeviceSetOfOwner

Creates a device set belonging to the owner

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestCreateDeviceSetOfOwnerDeviceSetUpdateInformation;
import org.openapis.openapi.models.operations.TestCreateDeviceSetOfOwnerRequest;
import org.openapis.openapi.models.operations.TestCreateDeviceSetOfOwnerResponse;
import org.openapis.openapi.models.operations.TestCreateDeviceSetOfOwnerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestCreateDeviceSetOfOwnerRequest req = new TestCreateDeviceSetOfOwnerRequest(                new TestCreateDeviceSetOfOwnerDeviceSetUpdateInformation(                new String[]{{
                                                add("sed"),
                                                add("possimus"),
                                                add("repellat"),
                                                add("repudiandae"),
                                            }}, "architecto");, "adipisci", "pariatur");            

            TestCreateDeviceSetOfOwnerResponse res = sdk.test.testCreateDeviceSetOfOwner(req, new TestCreateDeviceSetOfOwnerSecurity("harum") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.deviceSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testCreateDeviceSetOfUser

Creates a device set belonging to the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestCreateDeviceSetOfUserDeviceSetUpdateInformation;
import org.openapis.openapi.models.operations.TestCreateDeviceSetOfUserRequest;
import org.openapis.openapi.models.operations.TestCreateDeviceSetOfUserResponse;
import org.openapis.openapi.models.operations.TestCreateDeviceSetOfUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestCreateDeviceSetOfUserRequest req = new TestCreateDeviceSetOfUserRequest(                new TestCreateDeviceSetOfUserDeviceSetUpdateInformation(                new String[]{{
                                                add("voluptatibus"),
                                                add("iure"),
                                            }}, "explicabo");, "minus", "soluta");            

            TestCreateDeviceSetOfUserResponse res = sdk.test.testCreateDeviceSetOfUser(req, new TestCreateDeviceSetOfUserSecurity("dolorum") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.deviceSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testCreateSubscription

Accept a free trial subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestCreateSubscriptionRequest;
import org.openapis.openapi.models.operations.TestCreateSubscriptionResponse;
import org.openapis.openapi.models.operations.TestCreateSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestCreateSubscriptionRequest req = new TestCreateSubscriptionRequest("velit", "earum");            

            TestCreateSubscriptionResponse res = sdk.test.testCreateSubscription(req, new TestCreateSubscriptionSecurity("praesentium") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testCreateTestRun

Creates a new test run

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestCreateTestRunRequest;
import org.openapis.openapi.models.operations.TestCreateTestRunResponse;
import org.openapis.openapi.models.operations.TestCreateTestRunSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestCreateTestRunRequest req = new TestCreateTestRunRequest("error", "non");            

            TestCreateTestRunResponse res = sdk.test.testCreateTestRun(req, new TestCreateTestRunSecurity("quasi") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## testCreateTestSeries

Creates new test series for an application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestCreateTestSeriesNameOfTheTestSeries;
import org.openapis.openapi.models.operations.TestCreateTestSeriesRequest;
import org.openapis.openapi.models.operations.TestCreateTestSeriesResponse;
import org.openapis.openapi.models.operations.TestCreateTestSeriesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestCreateTestSeriesRequest req = new TestCreateTestSeriesRequest(                new TestCreateTestSeriesNameOfTheTestSeries("mollitia");, "accusamus", "harum");            

            TestCreateTestSeriesResponse res = sdk.test.testCreateTestSeries(req, new TestCreateTestSeriesSecurity("cumque") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testSeries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testDeleteDeviceSetOfOwner

Deletes a device set belonging to the owner

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestDeleteDeviceSetOfOwnerRequest;
import org.openapis.openapi.models.operations.TestDeleteDeviceSetOfOwnerResponse;
import org.openapis.openapi.models.operations.TestDeleteDeviceSetOfOwnerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestDeleteDeviceSetOfOwnerRequest req = new TestDeleteDeviceSetOfOwnerRequest("doloremque", "b80a6924-d3b2-4ecf-8c8f-895010f5dd3d", "vel");            

            TestDeleteDeviceSetOfOwnerResponse res = sdk.test.testDeleteDeviceSetOfOwner(req, new TestDeleteDeviceSetOfOwnerSecurity("sapiente") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## testDeleteDeviceSetOfUser

Deletes a device set belonging to the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestDeleteDeviceSetOfUserRequest;
import org.openapis.openapi.models.operations.TestDeleteDeviceSetOfUserResponse;
import org.openapis.openapi.models.operations.TestDeleteDeviceSetOfUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestDeleteDeviceSetOfUserRequest req = new TestDeleteDeviceSetOfUserRequest("mollitia", "1804e54c-82f1-468a-b63c-8873e484380b", "veritatis");            

            TestDeleteDeviceSetOfUserResponse res = sdk.test.testDeleteDeviceSetOfUser(req, new TestDeleteDeviceSetOfUserSecurity("tenetur") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## testDeleteTestSeries

Deletes a single test series

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestDeleteTestSeriesRequest;
import org.openapis.openapi.models.operations.TestDeleteTestSeriesResponse;
import org.openapis.openapi.models.operations.TestDeleteTestSeriesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestDeleteTestSeriesRequest req = new TestDeleteTestSeriesRequest("autem", "quidem", "totam");            

            TestDeleteTestSeriesResponse res = sdk.test.testDeleteTestSeries(req, new TestDeleteTestSeriesSecurity("porro") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## testGdprExportAccount

Lists account data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGdprExportAccountResponse;
import org.openapis.openapi.models.operations.TestGdprExportAccountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGdprExportAccountResponse res = sdk.test.testGdprExportAccount(new TestGdprExportAccountSecurity("deserunt") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testGdprExportAccount200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGdprExportAccounts

Lists all the endpoints available for Test accounts data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGdprExportAccountsResponse;
import org.openapis.openapi.models.operations.TestGdprExportAccountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGdprExportAccountsResponse res = sdk.test.testGdprExportAccounts(new TestGdprExportAccountsSecurity("magni") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testGdprExportAccounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGdprExportApp

Lists app data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGdprExportAppRequest;
import org.openapis.openapi.models.operations.TestGdprExportAppResponse;
import org.openapis.openapi.models.operations.TestGdprExportAppSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGdprExportAppRequest req = new TestGdprExportAppRequest("nihil", "voluptas");            

            TestGdprExportAppResponse res = sdk.test.testGdprExportApp(req, new TestGdprExportAppSecurity("animi") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testGdprExportApp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGdprExportApps

Lists all the endpoints available for Test apps data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGdprExportAppsRequest;
import org.openapis.openapi.models.operations.TestGdprExportAppsResponse;
import org.openapis.openapi.models.operations.TestGdprExportAppsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGdprExportAppsRequest req = new TestGdprExportAppsRequest("commodi", "alias");            

            TestGdprExportAppsResponse res = sdk.test.testGdprExportApps(req, new TestGdprExportAppsSecurity("fuga") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testGdprExportApps200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGdprExportFeatureFlag

Lists feature flag data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGdprExportFeatureFlagResponse;
import org.openapis.openapi.models.operations.TestGdprExportFeatureFlagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGdprExportFeatureFlagResponse res = sdk.test.testGdprExportFeatureFlag(new TestGdprExportFeatureFlagSecurity("aut") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testGdprExportFeatureFlag200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGdprExportFileSetFile

Lists file set file data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGdprExportFileSetFileRequest;
import org.openapis.openapi.models.operations.TestGdprExportFileSetFileResponse;
import org.openapis.openapi.models.operations.TestGdprExportFileSetFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGdprExportFileSetFileRequest req = new TestGdprExportFileSetFileRequest("dolore", "maxime");            

            TestGdprExportFileSetFileResponse res = sdk.test.testGdprExportFileSetFile(req, new TestGdprExportFileSetFileSecurity("aliquam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testGdprExportFileSetFile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGdprExportHashFile

Lists hash file data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGdprExportHashFileRequest;
import org.openapis.openapi.models.operations.TestGdprExportHashFileResponse;
import org.openapis.openapi.models.operations.TestGdprExportHashFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGdprExportHashFileRequest req = new TestGdprExportHashFileRequest("iste", "ullam");            

            TestGdprExportHashFileResponse res = sdk.test.testGdprExportHashFile(req, new TestGdprExportHashFileSecurity("eligendi") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testGdprExportHashFile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGdprExportPipelineTest

Lists pipeline test data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGdprExportPipelineTestRequest;
import org.openapis.openapi.models.operations.TestGdprExportPipelineTestResponse;
import org.openapis.openapi.models.operations.TestGdprExportPipelineTestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGdprExportPipelineTestRequest req = new TestGdprExportPipelineTestRequest("placeat", "voluptas");            

            TestGdprExportPipelineTestResponse res = sdk.test.testGdprExportPipelineTest(req, new TestGdprExportPipelineTestSecurity("occaecati") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testGdprExportPipelineTest200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGdprExportTestRun

Lists test run data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGdprExportTestRunRequest;
import org.openapis.openapi.models.operations.TestGdprExportTestRunResponse;
import org.openapis.openapi.models.operations.TestGdprExportTestRunSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGdprExportTestRunRequest req = new TestGdprExportTestRunRequest("unde", "illo");            

            TestGdprExportTestRunResponse res = sdk.test.testGdprExportTestRun(req, new TestGdprExportTestRunSecurity("nihil") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testGdprExportTestRun200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGetAllTestRunsForSeries

Returns list of all test runs for a given test series

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGetAllTestRunsForSeriesRequest;
import org.openapis.openapi.models.operations.TestGetAllTestRunsForSeriesResponse;
import org.openapis.openapi.models.operations.TestGetAllTestRunsForSeriesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGetAllTestRunsForSeriesRequest req = new TestGetAllTestRunsForSeriesRequest("inventore", "libero", "ipsam");            

            TestGetAllTestRunsForSeriesResponse res = sdk.test.testGetAllTestRunsForSeries(req, new TestGetAllTestRunsForSeriesSecurity("quasi") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testRuns != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGetAllTestSeries

Returns list of all test series for an application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGetAllTestSeriesRequest;
import org.openapis.openapi.models.operations.TestGetAllTestSeriesResponse;
import org.openapis.openapi.models.operations.TestGetAllTestSeriesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGetAllTestSeriesRequest req = new TestGetAllTestSeriesRequest("cumque", "dicta") {{
                query = "harum";
            }};            

            TestGetAllTestSeriesResponse res = sdk.test.testGetAllTestSeries(req, new TestGetAllTestSeriesSecurity("facere") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testSeries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGetDeviceConfigurations

Returns a list of available devices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGetDeviceConfigurationsRequest;
import org.openapis.openapi.models.operations.TestGetDeviceConfigurationsResponse;
import org.openapis.openapi.models.operations.TestGetDeviceConfigurationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGetDeviceConfigurationsRequest req = new TestGetDeviceConfigurationsRequest("facilis", "beatae") {{
                appUploadId = "cf4b888e-bdfc-44cc-8a99-bc7fc0b2dce1";
            }};            

            TestGetDeviceConfigurationsResponse res = sdk.test.testGetDeviceConfigurations(req, new TestGetDeviceConfigurationsSecurity("aut") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testGetDeviceConfigurations200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGetDeviceSetOfOwner

Gets a device set belonging to the owner

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGetDeviceSetOfOwnerRequest;
import org.openapis.openapi.models.operations.TestGetDeviceSetOfOwnerResponse;
import org.openapis.openapi.models.operations.TestGetDeviceSetOfOwnerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGetDeviceSetOfOwnerRequest req = new TestGetDeviceSetOfOwnerRequest("laudantium", "73e42b00-6d67-4887-8ba8-581a58208c54", "sapiente");            

            TestGetDeviceSetOfOwnerResponse res = sdk.test.testGetDeviceSetOfOwner(req, new TestGetDeviceSetOfOwnerSecurity("saepe") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.deviceSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGetDeviceSetOfUser

Gets a device set belonging to the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGetDeviceSetOfUserRequest;
import org.openapis.openapi.models.operations.TestGetDeviceSetOfUserResponse;
import org.openapis.openapi.models.operations.TestGetDeviceSetOfUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGetDeviceSetOfUserRequest req = new TestGetDeviceSetOfUserRequest("delectus", "a9c95f2e-ac55-465d-b07c-fee81206e281", "nesciunt");            

            TestGetDeviceSetOfUserResponse res = sdk.test.testGetDeviceSetOfUser(req, new TestGetDeviceSetOfUserSecurity("delectus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.deviceSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGetSubscriptions

Get information about the currently active subscriptions, if any

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGetSubscriptionsRequest;
import org.openapis.openapi.models.operations.TestGetSubscriptionsResponse;
import org.openapis.openapi.models.operations.TestGetSubscriptionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGetSubscriptionsRequest req = new TestGetSubscriptionsRequest("laborum", "aliquam");            

            TestGetSubscriptionsResponse res = sdk.test.testGetSubscriptions(req, new TestGetSubscriptionsSecurity("deserunt") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGetTestReport

Returns a single test report

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGetTestReportRequest;
import org.openapis.openapi.models.operations.TestGetTestReportResponse;
import org.openapis.openapi.models.operations.TestGetTestReportSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGetTestReportRequest req = new TestGetTestReportRequest("modi", "sunt", "c480d3f2-132a-4f03-902d-514f4cc6f18b");            

            TestGetTestReportResponse res = sdk.test.testGetTestReport(req, new TestGetTestReportSecurity("hic") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testGetTestReport200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGetTestRun

Returns a single test runs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGetTestRunRequest;
import org.openapis.openapi.models.operations.TestGetTestRunResponse;
import org.openapis.openapi.models.operations.TestGetTestRunSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGetTestRunRequest req = new TestGetTestRunRequest("excepturi", "aliquid", "21a6a4f7-7a87-4ee3-a4be-752c65b34418");            

            TestGetTestRunResponse res = sdk.test.testGetTestRun(req, new TestGetTestRunSecurity("eveniet") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testRun != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGetTestRunState

Gets state of the test run

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGetTestRunStateRequest;
import org.openapis.openapi.models.operations.TestGetTestRunStateResponse;
import org.openapis.openapi.models.operations.TestGetTestRunStateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGetTestRunStateRequest req = new TestGetTestRunStateRequest("dolor", "expedita", "libero");            

            TestGetTestRunStateResponse res = sdk.test.testGetTestRunState(req, new TestGetTestRunStateSecurity("iste") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testRunState != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testGetTestRuns

Returns a list of test runs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestGetTestRunsRequest;
import org.openapis.openapi.models.operations.TestGetTestRunsResponse;
import org.openapis.openapi.models.operations.TestGetTestRunsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestGetTestRunsRequest req = new TestGetTestRunsRequest("illo", "minus");            

            TestGetTestRunsResponse res = sdk.test.testGetTestRuns(req, new TestGetTestRunsSecurity("quos") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testRuns != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testListDeviceSetsOfOwner

Lists device sets belonging to the owner

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestListDeviceSetsOfOwnerRequest;
import org.openapis.openapi.models.operations.TestListDeviceSetsOfOwnerResponse;
import org.openapis.openapi.models.operations.TestListDeviceSetsOfOwnerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestListDeviceSetsOfOwnerRequest req = new TestListDeviceSetsOfOwnerRequest("temporibus", "sint");            

            TestListDeviceSetsOfOwnerResponse res = sdk.test.testListDeviceSetsOfOwner(req, new TestListDeviceSetsOfOwnerSecurity("iusto") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.deviceSets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testListDeviceSetsOfUser

Lists device sets belonging to the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestListDeviceSetsOfUserRequest;
import org.openapis.openapi.models.operations.TestListDeviceSetsOfUserResponse;
import org.openapis.openapi.models.operations.TestListDeviceSetsOfUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestListDeviceSetsOfUserRequest req = new TestListDeviceSetsOfUserRequest("enim", "accusamus");            

            TestListDeviceSetsOfUserResponse res = sdk.test.testListDeviceSetsOfUser(req, new TestListDeviceSetsOfUserSecurity("aperiam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.deviceSets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testPatchTestSeries

Updates name and slug of a test series

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestPatchTestSeriesNameOfTheTestSeries;
import org.openapis.openapi.models.operations.TestPatchTestSeriesRequest;
import org.openapis.openapi.models.operations.TestPatchTestSeriesResponse;
import org.openapis.openapi.models.operations.TestPatchTestSeriesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestPatchTestSeriesRequest req = new TestPatchTestSeriesRequest(                new TestPatchTestSeriesNameOfTheTestSeries("voluptates");, "laudantium", "tempora", "quae");            

            TestPatchTestSeriesResponse res = sdk.test.testPatchTestSeries(req, new TestPatchTestSeriesSecurity("omnis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testSeries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testStartTestRun

Starts test run

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestStartTestRunRequest;
import org.openapis.openapi.models.operations.TestStartTestRunResponse;
import org.openapis.openapi.models.operations.TestStartTestRunSecurity;
import org.openapis.openapi.models.operations.TestStartTestRunTestCloudStartTestRunOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestStartTestRunRequest req = new TestStartTestRunRequest(                new TestStartTestRunTestCloudStartTestRunOptions("illum", "rem") {{
                                language = "tenetur";
                                locale = "deleniti";
                                testParameters = new java.util.HashMap<String, Object>() {{
                                    put("earum", "architecto");
                                    put("aliquam", "labore");
                                }};
                                testSeries = "maiores";
                            }};, "sequi", "saepe", "consequatur");            

            TestStartTestRunResponse res = sdk.test.testStartTestRun(req, new TestStartTestRunSecurity("esse") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testCloudTestRunStartResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testStartUploadingFile

Uploads file for a test run

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestStartUploadingFileRequest;
import org.openapis.openapi.models.operations.TestStartUploadingFileResponse;
import org.openapis.openapi.models.operations.TestStartUploadingFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestStartUploadingFileRequest req = new TestStartUploadingFileRequest("debitis", "facere", "quisquam");            

            TestStartUploadingFileResponse res = sdk.test.testStartUploadingFile(req, new TestStartUploadingFileSecurity("cumque") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## testStopTestRun

Stop a test run execution

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestStopTestRunRequest;
import org.openapis.openapi.models.operations.TestStopTestRunResponse;
import org.openapis.openapi.models.operations.TestStopTestRunSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestStopTestRunRequest req = new TestStopTestRunRequest("aliquam", "dolorum", "deserunt");            

            TestStopTestRunResponse res = sdk.test.testStopTestRun(req, new TestStopTestRunSecurity("ad") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testRun != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testUpdateDeviceSetOfOwner

Updates a device set belonging to the owner

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestUpdateDeviceSetOfOwnerDeviceSetUpdateInformation;
import org.openapis.openapi.models.operations.TestUpdateDeviceSetOfOwnerRequest;
import org.openapis.openapi.models.operations.TestUpdateDeviceSetOfOwnerResponse;
import org.openapis.openapi.models.operations.TestUpdateDeviceSetOfOwnerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestUpdateDeviceSetOfOwnerRequest req = new TestUpdateDeviceSetOfOwnerRequest(                new TestUpdateDeviceSetOfOwnerDeviceSetUpdateInformation(                new String[]{{
                                                add("sequi"),
                                                add("porro"),
                                                add("laborum"),
                                                add("nobis"),
                                            }}, "quibusdam");, "omnis", "05a972e0-5672-4822-bb2d-309470bf7a4f", "culpa");            

            TestUpdateDeviceSetOfOwnerResponse res = sdk.test.testUpdateDeviceSetOfOwner(req, new TestUpdateDeviceSetOfOwnerSecurity("voluptatum") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.deviceSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testUpdateDeviceSetOfUser

Updates a device set belonging to the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestUpdateDeviceSetOfUserDeviceSetUpdateInformation;
import org.openapis.openapi.models.operations.TestUpdateDeviceSetOfUserRequest;
import org.openapis.openapi.models.operations.TestUpdateDeviceSetOfUserResponse;
import org.openapis.openapi.models.operations.TestUpdateDeviceSetOfUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestUpdateDeviceSetOfUserRequest req = new TestUpdateDeviceSetOfUserRequest(                new TestUpdateDeviceSetOfUserDeviceSetUpdateInformation(                new String[]{{
                                                add("quod"),
                                                add("voluptatibus"),
                                            }}, "voluptas");, "non", "5a6fae54-ebf6-40c3-a1f0-23b75d2367fe", "vitae");            

            TestUpdateDeviceSetOfUserResponse res = sdk.test.testUpdateDeviceSetOfUser(req, new TestUpdateDeviceSetOfUserSecurity("est") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.deviceSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testUploadHash

Adds file with the given hash to a test run

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestUploadHashRequest;
import org.openapis.openapi.models.operations.TestUploadHashResponse;
import org.openapis.openapi.models.operations.TestUploadHashSecurity;
import org.openapis.openapi.models.operations.TestUploadHashTestCloudFileHash;
import org.openapis.openapi.models.operations.TestUploadHashTestCloudFileHashFileTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestUploadHashRequest req = new TestUploadHashRequest(                new TestUploadHashTestCloudFileHash("accusantium", TestUploadHashTestCloudFileHashFileTypeEnum.TEST_FILE, "minus") {{
                                byteRange = "quos";
                            }};, "possimus", "maiores", "odio");            

            TestUploadHashResponse res = sdk.test.testUploadHash(req, new TestUploadHashSecurity("provident") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## testUploadHashesBatch

Adds file with the given hash to a test run

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestUploadHashesBatchRequest;
import org.openapis.openapi.models.operations.TestUploadHashesBatchResponse;
import org.openapis.openapi.models.operations.TestUploadHashesBatchSecurity;
import org.openapis.openapi.models.operations.TestUploadHashesBatchTestCloudFileHash;
import org.openapis.openapi.models.operations.TestUploadHashesBatchTestCloudFileHashFileTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestUploadHashesBatchRequest req = new TestUploadHashesBatchRequest(                new org.openapis.openapi.models.operations.TestUploadHashesBatchTestCloudFileHash[]{{
                                add(new TestUploadHashesBatchTestCloudFileHash("provident", TestUploadHashesBatchTestCloudFileHashFileTypeEnum.APP_FILE, "repellendus") {{
                                    checksum = "aperiam";
                                    fileType = TestUploadHashesBatchTestCloudFileHashFileTypeEnum.APP_FILE;
                                    relativePath = "nesciunt";
                                }}),
                                add(new TestUploadHashesBatchTestCloudFileHash("sequi", TestUploadHashesBatchTestCloudFileHashFileTypeEnum.APP_FILE, "labore") {{
                                    checksum = "unde";
                                    fileType = TestUploadHashesBatchTestCloudFileHashFileTypeEnum.DSYM_FILE;
                                    relativePath = "impedit";
                                }}),
                                add(new TestUploadHashesBatchTestCloudFileHash("sunt", TestUploadHashesBatchTestCloudFileHashFileTypeEnum.DSYM_FILE, "nulla") {{
                                    checksum = "expedita";
                                    fileType = TestUploadHashesBatchTestCloudFileHashFileTypeEnum.APP_FILE;
                                    relativePath = "quisquam";
                                }}),
                                add(new TestUploadHashesBatchTestCloudFileHash("impedit", TestUploadHashesBatchTestCloudFileHashFileTypeEnum.TEST_FILE, "et") {{
                                    checksum = "maiores";
                                    fileType = TestUploadHashesBatchTestCloudFileHashFileTypeEnum.TEST_FILE;
                                    relativePath = "mollitia";
                                }}),
                            }}, "quas", "blanditiis", "cum");            

            TestUploadHashesBatchResponse res = sdk.test.testUploadHashesBatch(req, new TestUploadHashesBatchSecurity("dicta") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.testCloudFileHashResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
