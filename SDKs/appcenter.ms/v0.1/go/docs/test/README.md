# Test

### Available Operations

* [TestArchiveTestRun](#testarchivetestrun) - Logically deletes a test run
* [TestCreateDeviceSelection](#testcreatedeviceselection) - Creates a short ID for a list of devices
* [TestCreateDeviceSetOfOwner](#testcreatedevicesetofowner) - Creates a device set belonging to the owner
* [TestCreateDeviceSetOfUser](#testcreatedevicesetofuser) - Creates a device set belonging to the user
* [TestCreateSubscription](#testcreatesubscription) - Accept a free trial subscription
* [TestCreateTestRun](#testcreatetestrun) - Creates a new test run
* [TestCreateTestSeries](#testcreatetestseries) - Creates new test series for an application
* [TestDeleteDeviceSetOfOwner](#testdeletedevicesetofowner) - Deletes a device set belonging to the owner
* [TestDeleteDeviceSetOfUser](#testdeletedevicesetofuser) - Deletes a device set belonging to the user
* [TestDeleteTestSeries](#testdeletetestseries) - Deletes a single test series
* [TestGdprExportAccount](#testgdprexportaccount) - Lists account data
* [TestGdprExportAccounts](#testgdprexportaccounts) - Lists all the endpoints available for Test accounts data
* [TestGdprExportApp](#testgdprexportapp) - Lists app data
* [TestGdprExportApps](#testgdprexportapps) - Lists all the endpoints available for Test apps data
* [TestGdprExportFeatureFlag](#testgdprexportfeatureflag) - Lists feature flag data
* [TestGdprExportFileSetFile](#testgdprexportfilesetfile) - Lists file set file data
* [TestGdprExportHashFile](#testgdprexporthashfile) - Lists hash file data
* [TestGdprExportPipelineTest](#testgdprexportpipelinetest) - Lists pipeline test data
* [TestGdprExportTestRun](#testgdprexporttestrun) - Lists test run data
* [TestGetAllTestRunsForSeries](#testgetalltestrunsforseries) - Returns list of all test runs for a given test series
* [TestGetAllTestSeries](#testgetalltestseries) - Returns list of all test series for an application
* [TestGetDeviceConfigurations](#testgetdeviceconfigurations) - Returns a list of available devices
* [TestGetDeviceSetOfOwner](#testgetdevicesetofowner) - Gets a device set belonging to the owner
* [TestGetDeviceSetOfUser](#testgetdevicesetofuser) - Gets a device set belonging to the user
* [TestGetSubscriptions](#testgetsubscriptions) - Get information about the currently active subscriptions, if any
* [TestGetTestReport](#testgettestreport) - Returns a single test report
* [TestGetTestRun](#testgettestrun) - Returns a single test runs
* [TestGetTestRunState](#testgettestrunstate) - Gets state of the test run
* [TestGetTestRuns](#testgettestruns) - Returns a list of test runs
* [TestListDeviceSetsOfOwner](#testlistdevicesetsofowner) - Lists device sets belonging to the owner
* [TestListDeviceSetsOfUser](#testlistdevicesetsofuser) - Lists device sets belonging to the user
* [TestPatchTestSeries](#testpatchtestseries) - Updates name and slug of a test series
* [TestStartTestRun](#teststarttestrun) - Starts test run
* [TestStartUploadingFile](#teststartuploadingfile) - Uploads file for a test run
* [TestStopTestRun](#teststoptestrun) - Stop a test run execution
* [TestUpdateDeviceSetOfOwner](#testupdatedevicesetofowner) - Updates a device set belonging to the owner
* [TestUpdateDeviceSetOfUser](#testupdatedevicesetofuser) - Updates a device set belonging to the user
* [TestUploadHash](#testuploadhash) - Adds file with the given hash to a test run
* [TestUploadHashesBatch](#testuploadhashesbatch) - Adds file with the given hash to a test run

## TestArchiveTestRun

Logically deletes a test run

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestArchiveTestRun(ctx, operations.TestArchiveTestRunRequest{
        AppName: "maiores",
        OwnerName: "accusantium",
        TestRunID: "5e3d48fd-af31-43a1-b5fd-94259c0b36f2",
    }, operations.TestArchiveTestRunSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestRun != nil {
        // handle response
    }
}
```

## TestCreateDeviceSelection

Creates a short ID for a list of devices

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestCreateDeviceSelection(ctx, operations.TestCreateDeviceSelectionRequest{
        RequestBody: operations.TestCreateDeviceSelectionDeviceList{
            Devices: []string{
                "debitis",
                "officia",
            },
        },
        AppName: "sint",
        OwnerName: "ut",
    }, operations.TestCreateDeviceSelectionSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceSelection != nil {
        // handle response
    }
}
```

## TestCreateDeviceSetOfOwner

Creates a device set belonging to the owner

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestCreateDeviceSetOfOwner(ctx, operations.TestCreateDeviceSetOfOwnerRequest{
        RequestBody: operations.TestCreateDeviceSetOfOwnerDeviceSetUpdateInformation{
            Devices: []string{
                "tenetur",
                "adipisci",
            },
            Name: "Harvey Harber",
        },
        AppName: "ab",
        OwnerName: "beatae",
    }, operations.TestCreateDeviceSetOfOwnerSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceSet != nil {
        // handle response
    }
}
```

## TestCreateDeviceSetOfUser

Creates a device set belonging to the user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestCreateDeviceSetOfUser(ctx, operations.TestCreateDeviceSetOfUserRequest{
        RequestBody: operations.TestCreateDeviceSetOfUserDeviceSetUpdateInformation{
            Devices: []string{
                "nisi",
                "quisquam",
                "dolor",
                "ducimus",
            },
            Name: "Warren Brakus",
        },
        AppName: "magni",
        OwnerName: "incidunt",
    }, operations.TestCreateDeviceSetOfUserSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceSet != nil {
        // handle response
    }
}
```

## TestCreateSubscription

Accept a free trial subscription

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestCreateSubscription(ctx, operations.TestCreateSubscriptionRequest{
        AppName: "adipisci",
        OwnerName: "praesentium",
    }, operations.TestCreateSubscriptionSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```

## TestCreateTestRun

Creates a new test run

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestCreateTestRun(ctx, operations.TestCreateTestRunRequest{
        AppName: "dolor",
        OwnerName: "exercitationem",
    }, operations.TestCreateTestRunSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TestCreateTestSeries

Creates new test series for an application

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestCreateTestSeries(ctx, operations.TestCreateTestSeriesRequest{
        RequestBody: operations.TestCreateTestSeriesNameOfTheTestSeries{
            Name: "Mrs. Johnathan Russel",
        },
        AppName: "consequuntur",
        OwnerName: "amet",
    }, operations.TestCreateTestSeriesSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestSeries != nil {
        // handle response
    }
}
```

## TestDeleteDeviceSetOfOwner

Deletes a device set belonging to the owner

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestDeleteDeviceSetOfOwner(ctx, operations.TestDeleteDeviceSetOfOwnerRequest{
        AppName: "deserunt",
        ID: "45cefc5f-de10-4a0c-a216-9e510019c6dc",
        OwnerName: "nemo",
    }, operations.TestDeleteDeviceSetOfOwnerSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TestDeleteDeviceSetOfUser

Deletes a device set belonging to the user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestDeleteDeviceSetOfUser(ctx, operations.TestDeleteDeviceSetOfUserRequest{
        AppName: "recusandae",
        ID: "34762799-bfbb-4e69-89fb-2bb4ecae6c3d",
        OwnerName: "nemo",
    }, operations.TestDeleteDeviceSetOfUserSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TestDeleteTestSeries

Deletes a single test series

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestDeleteTestSeries(ctx, operations.TestDeleteTestSeriesRequest{
        AppName: "illum",
        OwnerName: "facilis",
        TestSeriesSlug: "non",
    }, operations.TestDeleteTestSeriesSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TestGdprExportAccount

Lists account data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGdprExportAccount(ctx, operations.TestGdprExportAccountSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestGdprExportAccount200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TestGdprExportAccounts

Lists all the endpoints available for Test accounts data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGdprExportAccounts(ctx, operations.TestGdprExportAccountsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestGdprExportAccounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TestGdprExportApp

Lists app data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGdprExportApp(ctx, operations.TestGdprExportAppRequest{
        AppName: "mollitia",
        OwnerName: "assumenda",
    }, operations.TestGdprExportAppSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestGdprExportApp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TestGdprExportApps

Lists all the endpoints available for Test apps data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGdprExportApps(ctx, operations.TestGdprExportAppsRequest{
        AppName: "recusandae",
        OwnerName: "distinctio",
    }, operations.TestGdprExportAppsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestGdprExportApps200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TestGdprExportFeatureFlag

Lists feature flag data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGdprExportFeatureFlag(ctx, operations.TestGdprExportFeatureFlagSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestGdprExportFeatureFlag200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TestGdprExportFileSetFile

Lists file set file data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGdprExportFileSetFile(ctx, operations.TestGdprExportFileSetFileRequest{
        AppName: "pariatur",
        OwnerName: "ad",
    }, operations.TestGdprExportFileSetFileSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestGdprExportFileSetFile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TestGdprExportHashFile

Lists hash file data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGdprExportHashFile(ctx, operations.TestGdprExportHashFileRequest{
        AppName: "facere",
        OwnerName: "laborum",
    }, operations.TestGdprExportHashFileSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestGdprExportHashFile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TestGdprExportPipelineTest

Lists pipeline test data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGdprExportPipelineTest(ctx, operations.TestGdprExportPipelineTestRequest{
        AppName: "eveniet",
        OwnerName: "laborum",
    }, operations.TestGdprExportPipelineTestSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestGdprExportPipelineTest200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TestGdprExportTestRun

Lists test run data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGdprExportTestRun(ctx, operations.TestGdprExportTestRunRequest{
        AppName: "incidunt",
        OwnerName: "maxime",
    }, operations.TestGdprExportTestRunSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestGdprExportTestRun200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TestGetAllTestRunsForSeries

Returns list of all test runs for a given test series

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGetAllTestRunsForSeries(ctx, operations.TestGetAllTestRunsForSeriesRequest{
        AppName: "ipsam",
        OwnerName: "alias",
        TestSeriesSlug: "suscipit",
    }, operations.TestGetAllTestRunsForSeriesSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestRuns != nil {
        // handle response
    }
}
```

## TestGetAllTestSeries

Returns list of all test series for an application

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGetAllTestSeries(ctx, operations.TestGetAllTestSeriesRequest{
        AppName: "deserunt",
        OwnerName: "molestias",
        Query: sdk.String("laborum"),
    }, operations.TestGetAllTestSeriesSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestSeries != nil {
        // handle response
    }
}
```

## TestGetDeviceConfigurations

Returns a list of available devices

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGetDeviceConfigurations(ctx, operations.TestGetDeviceConfigurationsRequest{
        AppName: "est",
        AppUploadID: sdk.String("94c02644-cf5e-49d9-a457-8adc1ac600de"),
        OwnerName: "maxime",
    }, operations.TestGetDeviceConfigurationsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestGetDeviceConfigurations200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## TestGetDeviceSetOfOwner

Gets a device set belonging to the owner

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGetDeviceSetOfOwner(ctx, operations.TestGetDeviceSetOfOwnerRequest{
        AppName: "consequatur",
        ID: "01ac802e-2ec0-49ff-8f0f-816ff3477c13",
        OwnerName: "vero",
    }, operations.TestGetDeviceSetOfOwnerSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceSet != nil {
        // handle response
    }
}
```

## TestGetDeviceSetOfUser

Gets a device set belonging to the user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGetDeviceSetOfUser(ctx, operations.TestGetDeviceSetOfUserRequest{
        AppName: "excepturi",
        ID: "02c14125-b096-40a6-a815-1a472af923c5",
        OwnerName: "cupiditate",
    }, operations.TestGetDeviceSetOfUserSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceSet != nil {
        // handle response
    }
}
```

## TestGetSubscriptions

Get information about the currently active subscriptions, if any

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGetSubscriptions(ctx, operations.TestGetSubscriptionsRequest{
        AppName: "aliquam",
        OwnerName: "excepturi",
    }, operations.TestGetSubscriptionsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```

## TestGetTestReport

Returns a single test report

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGetTestReport(ctx, operations.TestGetTestReportRequest{
        AppName: "maiores",
        OwnerName: "laudantium",
        TestRunID: "3f350cf8-76ff-4b90-9c6e-cbb4e243cf78",
    }, operations.TestGetTestReportSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestGetTestReport200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TestGetTestRun

Returns a single test runs

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGetTestRun(ctx, operations.TestGetTestRunRequest{
        AppName: "sint",
        OwnerName: "repellat",
        TestRunID: "fafeda53-e5ae-46e0-ac18-4c2b9c247c88",
    }, operations.TestGetTestRunSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestRun != nil {
        // handle response
    }
}
```

## TestGetTestRunState

Gets state of the test run

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGetTestRunState(ctx, operations.TestGetTestRunStateRequest{
        AppName: "amet",
        OwnerName: "molestiae",
        TestRunID: "amet",
    }, operations.TestGetTestRunStateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestRunState != nil {
        // handle response
    }
}
```

## TestGetTestRuns

Returns a list of test runs

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestGetTestRuns(ctx, operations.TestGetTestRunsRequest{
        AppName: "laborum",
        OwnerName: "modi",
    }, operations.TestGetTestRunsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestRuns != nil {
        // handle response
    }
}
```

## TestListDeviceSetsOfOwner

Lists device sets belonging to the owner

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestListDeviceSetsOfOwner(ctx, operations.TestListDeviceSetsOfOwnerRequest{
        AppName: "perferendis",
        OwnerName: "necessitatibus",
    }, operations.TestListDeviceSetsOfOwnerSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceSets != nil {
        // handle response
    }
}
```

## TestListDeviceSetsOfUser

Lists device sets belonging to the user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestListDeviceSetsOfUser(ctx, operations.TestListDeviceSetsOfUserRequest{
        AppName: "architecto",
        OwnerName: "molestias",
    }, operations.TestListDeviceSetsOfUserSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceSets != nil {
        // handle response
    }
}
```

## TestPatchTestSeries

Updates name and slug of a test series

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestPatchTestSeries(ctx, operations.TestPatchTestSeriesRequest{
        RequestBody: operations.TestPatchTestSeriesNameOfTheTestSeries{
            Name: "Ashley Wunsch",
        },
        AppName: "earum",
        OwnerName: "veniam",
        TestSeriesSlug: "ipsam",
    }, operations.TestPatchTestSeriesSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestSeries != nil {
        // handle response
    }
}
```

## TestStartTestRun

Starts test run

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestStartTestRun(ctx, operations.TestStartTestRunRequest{
        RequestBody: operations.TestStartTestRunTestCloudStartTestRunOptions{
            DeviceSelection: "eaque",
            Language: sdk.String("exercitationem"),
            Locale: sdk.String("veniam"),
            TestFramework: "nihil",
            TestParameters: map[string]interface{}{
                "nisi": "tenetur",
                "quis": "quibusdam",
            },
            TestSeries: sdk.String("nemo"),
        },
        AppName: "suscipit",
        OwnerName: "pariatur",
        TestRunID: "sit",
    }, operations.TestStartTestRunSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestCloudTestRunStartResult != nil {
        // handle response
    }
}
```

## TestStartUploadingFile

Uploads file for a test run

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestStartUploadingFile(ctx, operations.TestStartUploadingFileRequest{
        AppName: "quidem",
        OwnerName: "repellendus",
        TestRunID: "perferendis",
    }, operations.TestStartUploadingFileSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TestStopTestRun

Stop a test run execution

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestStopTestRun(ctx, operations.TestStopTestRunRequest{
        AppName: "id",
        OwnerName: "sapiente",
        TestRunID: "sed",
    }, operations.TestStopTestRunSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestRun != nil {
        // handle response
    }
}
```

## TestUpdateDeviceSetOfOwner

Updates a device set belonging to the owner

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestUpdateDeviceSetOfOwner(ctx, operations.TestUpdateDeviceSetOfOwnerRequest{
        RequestBody: operations.TestUpdateDeviceSetOfOwnerDeviceSetUpdateInformation{
            Devices: []string{
                "repellat",
                "repudiandae",
                "architecto",
                "adipisci",
            },
            Name: "Roderick Grimes",
        },
        AppName: "explicabo",
        ID: "cba3f894-1aeb-4c0b-80a6-924d3b2ecfcc",
        OwnerName: "quos",
    }, operations.TestUpdateDeviceSetOfOwnerSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceSet != nil {
        // handle response
    }
}
```

## TestUpdateDeviceSetOfUser

Updates a device set belonging to the user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestUpdateDeviceSetOfUser(ctx, operations.TestUpdateDeviceSetOfUserRequest{
        RequestBody: operations.TestUpdateDeviceSetOfUserDeviceSetUpdateInformation{
            Devices: []string{
                "voluptatum",
                "iste",
                "corporis",
                "accusantium",
            },
            Name: "Susan Wyman",
        },
        AppName: "possimus",
        ID: "3d6fa180-4e54-4c82-b168-a363c8873e48",
        OwnerName: "numquam",
    }, operations.TestUpdateDeviceSetOfUserSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceSet != nil {
        // handle response
    }
}
```

## TestUploadHash

Adds file with the given hash to a test run

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestUploadHash(ctx, operations.TestUploadHashRequest{
        RequestBody: operations.TestUploadHashTestCloudFileHash{
            ByteRange: sdk.String("sequi"),
            Checksum: "voluptatum",
            FileType: operations.TestUploadHashTestCloudFileHashFileTypeEnumDsymFile,
            RelativePath: "rerum",
        },
        AppName: "veritatis",
        OwnerName: "tenetur",
        TestRunID: "autem",
    }, operations.TestUploadHashSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TestUploadHashesBatch

Adds file with the given hash to a test run

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.TestUploadHashesBatch(ctx, operations.TestUploadHashesBatchRequest{
        RequestBody: []TestUploadHashesBatchTestCloudFileHash{
            operations.TestUploadHashesBatchTestCloudFileHash{
                Checksum: "totam",
                FileType: operations.TestUploadHashesBatchTestCloudFileHashFileTypeEnumTestFile,
                RelativePath: "deserunt",
            },
            operations.TestUploadHashesBatchTestCloudFileHash{
                Checksum: "magni",
                FileType: operations.TestUploadHashesBatchTestCloudFileHashFileTypeEnumAppFile,
                RelativePath: "voluptas",
            },
            operations.TestUploadHashesBatchTestCloudFileHash{
                Checksum: "animi",
                FileType: operations.TestUploadHashesBatchTestCloudFileHashFileTypeEnumAppFile,
                RelativePath: "alias",
            },
        },
        AppName: "fuga",
        OwnerName: "aut",
        TestRunID: "dolore",
    }, operations.TestUploadHashesBatchSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestCloudFileHashResponses != nil {
        // handle response
    }
}
```
