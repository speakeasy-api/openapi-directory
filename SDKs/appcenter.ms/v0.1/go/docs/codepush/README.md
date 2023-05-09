# Codepush

### Available Operations

* [CodePushAcquisitionGetAcquisitionStatus](#codepushacquisitiongetacquisitionstatus) - Returns the acquisition service status to the caller
* [CodePushAcquisitionUpdateCheck](#codepushacquisitionupdatecheck) - Check for updates
* [CodePushAcquisitionUpdateDeployStatus](#codepushacquisitionupdatedeploystatus) - Report Deployment status metric
* [CodePushAcquisitionUpdateDownloadStatus](#codepushacquisitionupdatedownloadstatus) - Report download of specified release
* [CodePushDeploymentMetricsGet](#codepushdeploymentmetricsget) - Gets all releases metrics for specified Deployment
* [CodePushDeploymentReleaseRollback](#codepushdeploymentreleaserollback) - Rollback the latest or a specific release for an app deployment
* [CodePushDeploymentReleasesCreate](#codepushdeploymentreleasescreate) - Create a new CodePush release for the specified deployment
* [CodePushDeploymentReleasesDelete](#codepushdeploymentreleasesdelete) - Clears a Deployment of releases
* [CodePushDeploymentReleasesGet](#codepushdeploymentreleasesget) - Gets the history of releases on a Deployment
* [CodePushDeploymentUploadCreate](#codepushdeploymentuploadcreate) - Create a new CodePush release upload for the specified deployment
* [CodePushDeploymentsCreate](#codepushdeploymentscreate) - Creates a CodePush Deployment for the given app
* [CodePushDeploymentsDelete](#codepushdeploymentsdelete) - Deletes a CodePush Deployment for the given app
* [CodePushDeploymentsGet](#codepushdeploymentsget) - Gets a CodePush Deployment for the given app
* [CodePushDeploymentsList](#codepushdeploymentslist) - Gets a list of CodePush deployments for the given app
* [CodePushDeploymentsPromote](#codepushdeploymentspromote) - Promote one release (default latest one) from one deployment to another
* [CodePushDeploymentsUpdate](#codepushdeploymentsupdate) - Modifies a CodePush Deployment for the given app
* [DeploymentReleasesUpdate](#deploymentreleasesupdate) - Modifies a CodePush release metadata under the given Deployment
* [LegacyCodePushAcquisitionUpdateCheck](#legacycodepushacquisitionupdatecheck) - Check for updates
* [LegacyCodePushAcquisitionUpdateDownloadStatus](#legacycodepushacquisitionupdatedownloadstatus) - Report download of specified release
* [LegacyCodePushAcquisitionUpdateInstallsStatus](#legacycodepushacquisitionupdateinstallsstatus) - Report deploy of specified release

## CodePushAcquisitionGetAcquisitionStatus

Returns the acquisition service status to the caller

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Codepush.CodePushAcquisitionGetAcquisitionStatus(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CodePushAcquisitionGetAcquisitionStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodePushAcquisitionUpdateCheck

Check for updates

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
    res, err := s.Codepush.CodePushAcquisitionUpdateCheck(ctx, operations.CodePushAcquisitionUpdateCheckRequest{
        AppVersion: "suscipit",
        ClientUniqueID: sdk.String("quidem"),
        DeploymentKey: "maxime",
        IsCompanion: sdk.Bool(false),
        Label: sdk.String("et"),
        PackageHash: sdk.String("esse"),
        PreviousDeploymentKey: sdk.String("amet"),
        PreviousLabelOrAppVersion: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodePushAcquisitionUpdateCheck200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodePushAcquisitionUpdateDeployStatus

Report Deployment status metric

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
    res, err := s.Codepush.CodePushAcquisitionUpdateDeployStatus(ctx, operations.CodePushAcquisitionUpdateDeployStatusRequestBody{
        AppVersion: sdk.String("ea"),
        ClientUniqueID: sdk.String("atque"),
        DeploymentKey: "error",
        Label: sdk.String("officiis"),
        PreviousDeploymentKey: sdk.String("officiis"),
        PreviousLabelOrAppVersion: sdk.String("accusamus"),
        Status: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CodePushAcquisitionUpdateDownloadStatus

Report download of specified release

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
    res, err := s.Codepush.CodePushAcquisitionUpdateDownloadStatus(ctx, operations.CodePushAcquisitionUpdateDownloadStatusRequestBody{
        AppVersion: sdk.String("minima"),
        ClientUniqueID: sdk.String("aspernatur"),
        DeploymentKey: "ex",
        Label: sdk.String("maiores"),
        PreviousDeploymentKey: sdk.String("corrupti"),
        PreviousLabelOrAppVersion: sdk.String("at"),
        Status: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CodePushDeploymentMetricsGet

Gets all releases metrics for specified Deployment

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
    res, err := s.Codepush.CodePushDeploymentMetricsGet(ctx, operations.CodePushDeploymentMetricsGetRequest{
        AppName: "blanditiis",
        DeploymentName: "suscipit",
        OwnerName: "repudiandae",
    }, operations.CodePushDeploymentMetricsGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodePushDeploymentMetricsGet200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CodePushDeploymentReleaseRollback

Rollback the latest or a specific release for an app deployment

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
    res, err := s.Codepush.CodePushDeploymentReleaseRollback(ctx, operations.CodePushDeploymentReleaseRollbackRequest{
        RequestBody: &operations.CodePushDeploymentReleaseRollbackRequestBody{
            Label: sdk.String("atque"),
        },
        AppName: "atque",
        DeploymentName: "sunt",
        OwnerName: "recusandae",
    }, operations.CodePushDeploymentReleaseRollbackSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodePushDeploymentReleaseRollback201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodePushDeploymentReleasesCreate

Create a new CodePush release for the specified deployment

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
    res, err := s.Codepush.CodePushDeploymentReleasesCreate(ctx, operations.CodePushDeploymentReleasesCreateRequest{
        RequestBody: operations.CodePushDeploymentReleasesCreateRequestBody{
            DeploymentName: sdk.String("dolorum"),
            Description: sdk.String("repellendus"),
            Disabled: sdk.Bool(false),
            Mandatory: sdk.Bool(false),
            NoDuplicateReleaseError: sdk.Bool(false),
            ReleaseUpload: operations.CodePushDeploymentReleasesCreateRequestBodyReleaseUpload{
                ID: "4f0e1012-563f-494e-a9e9-73e922a57a15",
                Token: "quidem",
                UploadDomain: "eveniet",
            },
            Rollout: sdk.Int64(247399),
            TargetBinaryVersion: "vero",
        },
        AppName: "doloremque",
        DeploymentName: "iure",
        OwnerName: "ipsa",
    }, operations.CodePushDeploymentReleasesCreateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodePushDeploymentReleasesCreate201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodePushDeploymentReleasesDelete

Clears a Deployment of releases

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
    res, err := s.Codepush.CodePushDeploymentReleasesDelete(ctx, operations.CodePushDeploymentReleasesDeleteRequest{
        AppName: "totam",
        DeploymentName: "quae",
        OwnerName: "molestiae",
    }, operations.CodePushDeploymentReleasesDeleteSecurity{
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

## CodePushDeploymentReleasesGet

Gets the history of releases on a Deployment

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
    res, err := s.Codepush.CodePushDeploymentReleasesGet(ctx, operations.CodePushDeploymentReleasesGetRequest{
        AppName: "eveniet",
        DeploymentName: "qui",
        OwnerName: "cum",
    }, operations.CodePushDeploymentReleasesGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodePushDeploymentReleasesGet200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## CodePushDeploymentUploadCreate

Create a new CodePush release upload for the specified deployment

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
    res, err := s.Codepush.CodePushDeploymentUploadCreate(ctx, operations.CodePushDeploymentUploadCreateRequest{
        AppName: "iure",
        DeploymentName: "necessitatibus",
        OwnerName: "ratione",
    }, operations.CodePushDeploymentUploadCreateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodePushDeploymentUploadCreate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodePushDeploymentsCreate

Creates a CodePush Deployment for the given app

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
    res, err := s.Codepush.CodePushDeploymentsCreate(ctx, operations.CodePushDeploymentsCreateRequest{
        RequestBody: operations.CodePushDeploymentsCreateRequestBody{
            Key: sdk.String("laborum"),
            LatestRelease: &operations.CodePushDeploymentsCreateRequestBodyLatestRelease{
                BlobURL: sdk.String("distinctio"),
                Description: sdk.String("voluptatum"),
                DiffPackageMap: map[string]CodePushDeploymentsCreateRequestBodyLatestReleaseDiffPackageMap{
                    "aliquam": operations.CodePushDeploymentsCreateRequestBodyLatestReleaseDiffPackageMap{
                        Size: 3205.65,
                        URL: "repellat",
                    },
                    "alias": operations.CodePushDeploymentsCreateRequestBodyLatestReleaseDiffPackageMap{
                        Size: 3621.89,
                        URL: "perspiciatis",
                    },
                    "nihil": operations.CodePushDeploymentsCreateRequestBodyLatestReleaseDiffPackageMap{
                        Size: 6490.78,
                        URL: "voluptas",
                    },
                },
                IsDisabled: sdk.Bool(false),
                IsMandatory: sdk.Bool(false),
                Label: sdk.String("alias"),
                OriginalDeployment: sdk.String("maiores"),
                OriginalLabel: sdk.String("reiciendis"),
                PackageHash: sdk.String("dolores"),
                ReleaseMethod: operations.CodePushDeploymentsCreateRequestBodyLatestReleaseReleaseMethodEnumPromote.ToPointer(),
                ReleasedBy: sdk.String("minima"),
                Rollout: sdk.Int64(293144),
                Size: sdk.Float64(6803.49),
                TargetBinaryRange: sdk.String("nesciunt"),
                UploadTime: sdk.Int64(63207),
            },
            Name: "Arturo Hagenes",
        },
        AppName: "ut",
        OwnerName: "culpa",
    }, operations.CodePushDeploymentsCreateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodePushDeploymentsCreate201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodePushDeploymentsDelete

Deletes a CodePush Deployment for the given app

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
    res, err := s.Codepush.CodePushDeploymentsDelete(ctx, operations.CodePushDeploymentsDeleteRequest{
        RequestBody: map[string]interface{}{
            "debitis": "laudantium",
        },
        AppName: "eum",
        DeploymentName: "nemo",
        OwnerName: "recusandae",
    }, operations.CodePushDeploymentsDeleteSecurity{
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

## CodePushDeploymentsGet

Gets a CodePush Deployment for the given app

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
    res, err := s.Codepush.CodePushDeploymentsGet(ctx, operations.CodePushDeploymentsGetRequest{
        AppName: "esse",
        DeploymentName: "provident",
        OwnerName: "quis",
    }, operations.CodePushDeploymentsGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodePushDeploymentsGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodePushDeploymentsList

Gets a list of CodePush deployments for the given app

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
    res, err := s.Codepush.CodePushDeploymentsList(ctx, operations.CodePushDeploymentsListRequest{
        AppName: "eum",
        OwnerName: "reiciendis",
    }, operations.CodePushDeploymentsListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodePushDeploymentsList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CodePushDeploymentsPromote

Promote one release (default latest one) from one deployment to another

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
    res, err := s.Codepush.CodePushDeploymentsPromote(ctx, operations.CodePushDeploymentsPromoteRequest{
        RequestBody: &operations.CodePushDeploymentsPromoteRequestBody{
            Description: sdk.String("provident"),
            IsDisabled: sdk.Bool(false),
            IsMandatory: sdk.Bool(false),
            Label: sdk.String("aspernatur"),
            Rollout: sdk.Int64(354506),
            TargetBinaryRange: sdk.String("quasi"),
        },
        AppName: "animi",
        DeploymentName: "nostrum",
        OwnerName: "mollitia",
        PromoteDeploymentName: "provident",
    }, operations.CodePushDeploymentsPromoteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodePushDeploymentsPromote200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodePushDeploymentsUpdate

Modifies a CodePush Deployment for the given app

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
    res, err := s.Codepush.CodePushDeploymentsUpdate(ctx, operations.CodePushDeploymentsUpdateRequest{
        RequestBody: operations.CodePushDeploymentsUpdateRequestBody{
            Name: "Lynn Jacobson DVM",
        },
        AppName: "doloribus",
        DeploymentName: "ullam",
        OwnerName: "in",
    }, operations.CodePushDeploymentsUpdateSecurity{
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

## DeploymentReleasesUpdate

Modifies a CodePush release metadata under the given Deployment

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
    res, err := s.Codepush.DeploymentReleasesUpdate(ctx, operations.DeploymentReleasesUpdateRequest{
        RequestBody: operations.DeploymentReleasesUpdateRequestBody{
            Description: sdk.String("nam"),
            IsDisabled: sdk.Bool(false),
            IsMandatory: sdk.Bool(false),
            Rollout: sdk.Int64(937636),
            TargetBinaryRange: sdk.String("officia"),
        },
        AppName: "laborum",
        DeploymentName: "placeat",
        OwnerName: "modi",
        ReleaseLabel: "voluptatibus",
    }, operations.DeploymentReleasesUpdateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeploymentReleasesUpdate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## LegacyCodePushAcquisitionUpdateCheck

Check for updates

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
    res, err := s.Codepush.LegacyCodePushAcquisitionUpdateCheck(ctx, operations.LegacyCodePushAcquisitionUpdateCheckRequest{
        AppVersion: sdk.String("molestias"),
        ClientUniqueID: sdk.String("officiis"),
        DeploymentKey: sdk.String("sapiente"),
        IsCompanion: sdk.String("cumque"),
        Label: sdk.String("vitae"),
        PackageHash: sdk.String("rerum"),
    }, operations.LegacyCodePushAcquisitionUpdateCheckSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LegacyCodePushAcquisitionUpdateCheck200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## LegacyCodePushAcquisitionUpdateDownloadStatus

Report download of specified release

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
    res, err := s.Codepush.LegacyCodePushAcquisitionUpdateDownloadStatus(ctx, operations.LegacyCodePushAcquisitionUpdateDownloadStatusRequestBody{
        AppVersion: sdk.String("tempora"),
        ClientUniqueID: sdk.String("quis"),
        DeploymentKey: sdk.String("inventore"),
        Label: sdk.String("fugit"),
        PreviousDeploymentKey: sdk.String("cumque"),
        PreviousLabelOrAppVersion: sdk.String("quae"),
        Status: sdk.String("perferendis"),
    }, operations.LegacyCodePushAcquisitionUpdateDownloadStatusSecurity{
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

## LegacyCodePushAcquisitionUpdateInstallsStatus

Report deploy of specified release

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
    res, err := s.Codepush.LegacyCodePushAcquisitionUpdateInstallsStatus(ctx, operations.LegacyCodePushAcquisitionUpdateInstallsStatusRequestBody{
        AppVersion: sdk.String("velit"),
        ClientUniqueID: sdk.String("aspernatur"),
        DeploymentKey: sdk.String("eum"),
        Label: sdk.String("eius"),
        PreviousDeploymentKey: sdk.String("rem"),
        PreviousLabelOrAppVersion: sdk.String("at"),
        Status: sdk.String("impedit"),
    }, operations.LegacyCodePushAcquisitionUpdateInstallsStatusSecurity{
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
