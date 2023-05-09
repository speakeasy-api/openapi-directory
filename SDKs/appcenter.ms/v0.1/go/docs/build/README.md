# Build

### Available Operations

* [BranchConfigurationsCreate](#branchconfigurationscreate) - Configures the branch for build
* [BranchConfigurationsDelete](#branchconfigurationsdelete) - Deletes the branch build configuration
* [BranchConfigurationsGet](#branchconfigurationsget) - Gets the branch configuration
* [BranchConfigurationsUpdate](#branchconfigurationsupdate) - Reconfigures the branch for build
* [BuildConfigurationsGet](#buildconfigurationsget) - Gets the build configuration in Azure pipeline YAML format
* [BuildsCreate](#buildscreate) - Create a build
* [BuildsDistribute](#buildsdistribute) - Distribute a build
* [BuildsGet](#buildsget) - Returns the build detail for the given build ID
* [BuildsGetDownloadURI](#buildsgetdownloaduri) - Gets the download URI
* [BuildsGetLog](#buildsgetlog) - Get the build log
* [BuildsGetStatusByAppID](#buildsgetstatusbyappid) - Application specific build service status
* [BuildsListBranches](#buildslistbranches) - Returns the list of Git branches for this application
* [BuildsListByBranch](#buildslistbybranch) - Returns the list of builds for the branch
* [BuildsListToolsetProjects](#buildslisttoolsetprojects) - Returns the projects in the repository for the branch, for all toolsets
* [BuildsListToolsets](#buildslisttoolsets) - Returns available toolsets for application
* [~~BuildsListXamarinSDKBundles~~](#buildslistxamarinsdkbundles) - Gets the Xamarin SDK bundles available to this app :warning: **Deprecated**
* [~~BuildsListXcodeVersions~~](#buildslistxcodeversions) - Gets the Xcode versions available to this app :warning: **Deprecated**
* [BuildsUpdate](#buildsupdate) - Cancels a build
* [BuildsWebhook](#buildswebhook) - Public webhook sink
* [CommitsListByShaList](#commitslistbyshalist) - Returns commit information for a batch of shas
* [FileAssetsCreate](#fileassetscreate) - Create a new asset to upload a file
* [RepositoriesList](#repositorieslist) - Gets the repositories available from the source code host
* [RepositoryConfigurationsCreateOrUpdate](#repositoryconfigurationscreateorupdate) - Configures the repository for build
* [RepositoryConfigurationsDelete](#repositoryconfigurationsdelete) - Removes the configuration for the repository
* [RepositoryConfigurationsList](#repositoryconfigurationslist) - Returns the repository build configuration status of the app

## BranchConfigurationsCreate

Configures the branch for build

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
    res, err := s.Build.BranchConfigurationsCreate(ctx, operations.BranchConfigurationsCreateRequest{
        RequestBody: operations.BranchConfigurationsCreateRequestBody{
            ArtifactVersioning: &operations.BranchConfigurationsCreateRequestBodyArtifactVersioning{
                BuildNumberFormat: operations.BranchConfigurationsCreateRequestBodyArtifactVersioningBuildNumberFormatEnumTimestamp.ToPointer(),
            },
            BadgeIsEnabled: sdk.Bool(false),
            CloneFromBranch: sdk.String("temporibus"),
            Signed: sdk.Bool(false),
            TestsEnabled: sdk.Bool(false),
            Toolsets: &operations.BranchConfigurationsCreateRequestBodyToolsets{
                Android: &operations.BranchConfigurationsCreateRequestBodyToolsetsAndroid{
                    AutomaticSigning: sdk.Bool(false),
                    BuildVariant: sdk.String("release"),
                    GradleWrapperPath: sdk.String("android/gradlew"),
                    IsRoot: sdk.Bool(false),
                    KeyAlias: sdk.String("accusantium"),
                    KeyPassword: sdk.String("rem"),
                    KeystoreEncoded: sdk.String("aut"),
                    KeystoreFilename: sdk.String("laudantium"),
                    KeystorePassword: sdk.String("eum"),
                    Module: sdk.String("app"),
                    RunLint: sdk.Bool(false),
                    RunTests: sdk.Bool(false),
                },
                Javascript: &operations.BranchConfigurationsCreateRequestBodyToolsetsJavascript{
                    PackageJSONPath: sdk.String("mollitia"),
                    ReactNativeVersion: sdk.String("ab"),
                    RunTests: sdk.Bool(false),
                },
                Xamarin: &operations.BranchConfigurationsCreateRequestBodyToolsetsXamarin{
                    Args: sdk.String("corrupti"),
                    Configuration: sdk.String("non"),
                    IsSimBuild: sdk.Bool(false),
                    MonoVersion: sdk.String("voluptatem"),
                    P12File: sdk.String("dolor"),
                    P12Pwd: sdk.String("occaecati"),
                    ProvProfile: sdk.String("numquam"),
                    SDKBundle: sdk.String("impedit"),
                    SlnPath: sdk.String("explicabo"),
                    Symlink: sdk.String("voluptas"),
                },
                Xcode: &operations.BranchConfigurationsCreateRequestBodyToolsetsXcode{
                    AppExtensionProvisioningProfileFiles: []BranchConfigurationsCreateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles{
                        operations.BranchConfigurationsCreateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles{
                            FileID: sdk.String("dignissimos"),
                            FileName: sdk.String("dicta"),
                            TargetBundleIdentifier: sdk.String("maiores"),
                            UploadID: sdk.String("natus"),
                        },
                    },
                    ArchiveConfiguration: sdk.String("velit"),
                    AutomaticSigning: sdk.Bool(false),
                    CartfilePath: sdk.String("voluptatibus"),
                    CertificateEncoded: sdk.String("voluptas"),
                    CertificateFileID: sdk.String("asperiores"),
                    CertificateFilename: sdk.String("aperiam"),
                    CertificatePassword: sdk.String("ea"),
                    CertificateUploadID: sdk.String("quaerat"),
                    ForceLegacyBuildSystem: sdk.Bool(false),
                    PodfilePath: sdk.String("consequuntur"),
                    ProjectOrWorkspacePath: sdk.String("repellendus"),
                    ProvisioningProfileEncoded: sdk.String("officia"),
                    ProvisioningProfileFileID: sdk.String("maxime"),
                    ProvisioningProfileFilename: sdk.String("dignissimos"),
                    ProvisioningProfileUploadID: sdk.String("officia"),
                    Scheme: sdk.String("asperiores"),
                    TargetToArchive: sdk.String("nemo"),
                    TeamID: sdk.String("quae"),
                    XcodeProjectSha: sdk.String("quaerat"),
                    XcodeVersion: sdk.String("porro"),
                },
            },
            Trigger: operations.BranchConfigurationsCreateRequestBodyTriggerEnumManual.ToPointer(),
        },
        AppName: "labore",
        Branch: "ab",
        OwnerName: "adipisci",
    }, operations.BranchConfigurationsCreateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchConfigurationsCreate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BranchConfigurationsDelete

Deletes the branch build configuration

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
    res, err := s.Build.BranchConfigurationsDelete(ctx, operations.BranchConfigurationsDeleteRequest{
        RequestBody: map[string]interface{}{
            "id": "suscipit",
            "velit": "culpa",
            "est": "recusandae",
        },
        AppName: "totam",
        Branch: "fugiat",
        OwnerName: "vel",
    }, operations.BranchConfigurationsDeleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchConfigurationsDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BranchConfigurationsGet

Gets the branch configuration

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
    res, err := s.Build.BranchConfigurationsGet(ctx, operations.BranchConfigurationsGetRequest{
        AppName: "ducimus",
        Branch: "quos",
        OwnerName: "vel",
    }, operations.BranchConfigurationsGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchConfigurationsGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BranchConfigurationsUpdate

Reconfigures the branch for build

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
    res, err := s.Build.BranchConfigurationsUpdate(ctx, operations.BranchConfigurationsUpdateRequest{
        RequestBody: operations.BranchConfigurationsUpdateRequestBody{
            ArtifactVersioning: &operations.BranchConfigurationsUpdateRequestBodyArtifactVersioning{
                BuildNumberFormat: operations.BranchConfigurationsUpdateRequestBodyArtifactVersioningBuildNumberFormatEnumBuildID.ToPointer(),
            },
            BadgeIsEnabled: sdk.Bool(false),
            CloneFromBranch: sdk.String("possimus"),
            Signed: sdk.Bool(false),
            TestsEnabled: sdk.Bool(false),
            Toolsets: &operations.BranchConfigurationsUpdateRequestBodyToolsets{
                Android: &operations.BranchConfigurationsUpdateRequestBodyToolsetsAndroid{
                    AutomaticSigning: sdk.Bool(false),
                    BuildVariant: sdk.String("release"),
                    GradleWrapperPath: sdk.String("android/gradlew"),
                    IsRoot: sdk.Bool(false),
                    KeyAlias: sdk.String("facilis"),
                    KeyPassword: sdk.String("cum"),
                    KeystoreEncoded: sdk.String("commodi"),
                    KeystoreFilename: sdk.String("in"),
                    KeystorePassword: sdk.String("corporis"),
                    Module: sdk.String("app"),
                    RunLint: sdk.Bool(false),
                    RunTests: sdk.Bool(false),
                },
                Javascript: &operations.BranchConfigurationsUpdateRequestBodyToolsetsJavascript{
                    PackageJSONPath: sdk.String("reiciendis"),
                    ReactNativeVersion: sdk.String("assumenda"),
                    RunTests: sdk.Bool(false),
                },
                Xamarin: &operations.BranchConfigurationsUpdateRequestBodyToolsetsXamarin{
                    Args: sdk.String("nemo"),
                    Configuration: sdk.String("recusandae"),
                    IsSimBuild: sdk.Bool(false),
                    MonoVersion: sdk.String("aliquid"),
                    P12File: sdk.String("aperiam"),
                    P12Pwd: sdk.String("cum"),
                    ProvProfile: sdk.String("consectetur"),
                    SDKBundle: sdk.String("in"),
                    SlnPath: sdk.String("exercitationem"),
                    Symlink: sdk.String("earum"),
                },
                Xcode: &operations.BranchConfigurationsUpdateRequestBodyToolsetsXcode{
                    AppExtensionProvisioningProfileFiles: []BranchConfigurationsUpdateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles{
                        operations.BranchConfigurationsUpdateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles{
                            FileID: sdk.String("numquam"),
                            FileName: sdk.String("doloribus"),
                            TargetBundleIdentifier: sdk.String("suscipit"),
                            UploadID: sdk.String("reiciendis"),
                        },
                        operations.BranchConfigurationsUpdateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles{
                            FileID: sdk.String("quidem"),
                            FileName: sdk.String("saepe"),
                            TargetBundleIdentifier: sdk.String("necessitatibus"),
                            UploadID: sdk.String("dolore"),
                        },
                        operations.BranchConfigurationsUpdateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles{
                            FileID: sdk.String("sunt"),
                            FileName: sdk.String("asperiores"),
                            TargetBundleIdentifier: sdk.String("adipisci"),
                            UploadID: sdk.String("non"),
                        },
                        operations.BranchConfigurationsUpdateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles{
                            FileID: sdk.String("amet"),
                            FileName: sdk.String("beatae"),
                            TargetBundleIdentifier: sdk.String("dignissimos"),
                            UploadID: sdk.String("a"),
                        },
                    },
                    ArchiveConfiguration: sdk.String("debitis"),
                    AutomaticSigning: sdk.Bool(false),
                    CartfilePath: sdk.String("consectetur"),
                    CertificateEncoded: sdk.String("corporis"),
                    CertificateFileID: sdk.String("harum"),
                    CertificateFilename: sdk.String("laboriosam"),
                    CertificatePassword: sdk.String("ipsa"),
                    CertificateUploadID: sdk.String("voluptates"),
                    ForceLegacyBuildSystem: sdk.Bool(false),
                    PodfilePath: sdk.String("libero"),
                    ProjectOrWorkspacePath: sdk.String("vitae"),
                    ProvisioningProfileEncoded: sdk.String("accusamus"),
                    ProvisioningProfileFileID: sdk.String("similique"),
                    ProvisioningProfileFilename: sdk.String("tempora"),
                    ProvisioningProfileUploadID: sdk.String("aspernatur"),
                    Scheme: sdk.String("voluptas"),
                    TargetToArchive: sdk.String("voluptas"),
                    TeamID: sdk.String("voluptas"),
                    XcodeProjectSha: sdk.String("minima"),
                    XcodeVersion: sdk.String("nobis"),
                },
            },
            Trigger: operations.BranchConfigurationsUpdateRequestBodyTriggerEnumManual.ToPointer(),
        },
        AppName: "adipisci",
        Branch: "minus",
        OwnerName: "dolores",
    }, operations.BranchConfigurationsUpdateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchConfigurationsUpdate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BuildConfigurationsGet

Gets the build configuration in Azure pipeline YAML format

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
    res, err := s.Build.BuildConfigurationsGet(ctx, operations.BuildConfigurationsGetRequest{
        AppName: "blanditiis",
        Branch: "in",
        Format: operations.BuildConfigurationsGetFormatEnumYaml.ToPointer(),
        OwnerName: "aliquam",
    }, operations.BuildConfigurationsGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildConfigurationsGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BuildsCreate

Create a build

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
    res, err := s.Build.BuildsCreate(ctx, operations.BuildsCreateRequest{
        RequestBody: &operations.BuildsCreateRequestBody{
            Debug: sdk.Bool(false),
            SourceVersion: sdk.String("officiis"),
        },
        AppName: "temporibus",
        Branch: "ullam",
        OwnerName: "adipisci",
    }, operations.BuildsCreateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildsCreate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BuildsDistribute

Distribute a build

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
    res, err := s.Build.BuildsDistribute(ctx, operations.BuildsDistributeRequest{
        RequestBody: operations.BuildsDistributeRequestBody{
            Destinations: []BuildsDistributeRequestBodyDestinations{
                operations.BuildsDistributeRequestBodyDestinations{
                    ID: "88f3a8d8-f5c0-4b2f-afb7-b194a276b269",
                    Type: operations.BuildsDistributeRequestBodyDestinationsTypeEnumStore,
                },
                operations.BuildsDistributeRequestBodyDestinations{
                    ID: "6fe1f08f-4294-4e36-98f4-47f603e8b445",
                    Type: operations.BuildsDistributeRequestBodyDestinationsTypeEnumTester,
                },
                operations.BuildsDistributeRequestBodyDestinations{
                    ID: "80ca55ef-d20e-4457-a185-8b6a89fbe3a5",
                    Type: operations.BuildsDistributeRequestBodyDestinationsTypeEnumGroup,
                },
            },
            MandatoryUpdate: sdk.Bool(false),
            NotifyTesters: sdk.Bool(false),
            ReleaseNotes: sdk.String("dolorum"),
        },
        AppName: "corrupti",
        BuildID: 879235,
        OwnerName: "tempora",
    }, operations.BuildsDistributeSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildsDistribute200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BuildsGet

Returns the build detail for the given build ID

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
    res, err := s.Build.BuildsGet(ctx, operations.BuildsGetRequest{
        AppName: "atque",
        BuildID: 148268,
        OwnerName: "ut",
    }, operations.BuildsGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildsGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BuildsGetDownloadURI

Gets the download URI

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
    res, err := s.Build.BuildsGetDownloadURI(ctx, operations.BuildsGetDownloadURIRequest{
        AppName: "fugiat",
        BuildID: 30235,
        DownloadType: operations.BuildsGetDownloadURIDownloadTypeEnumMapping,
        OwnerName: "expedita",
    }, operations.BuildsGetDownloadURISecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildsGetDownloadURI200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BuildsGetLog

Get the build log

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
    res, err := s.Build.BuildsGetLog(ctx, operations.BuildsGetLogRequest{
        AppName: "magnam",
        BuildID: 7884,
        OwnerName: "esse",
    }, operations.BuildsGetLogSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildsGetLog200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BuildsGetStatusByAppID

Application specific build service status

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
    res, err := s.Build.BuildsGetStatusByAppID(ctx, operations.BuildsGetStatusByAppIDRequest{
        AppName: "ipsam",
        OwnerName: "sit",
    }, operations.BuildsGetStatusByAppIDSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildsGetStatusByAppID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BuildsListBranches

Returns the list of Git branches for this application

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
    res, err := s.Build.BuildsListBranches(ctx, operations.BuildsListBranchesRequest{
        AppName: "voluptatum",
        OwnerName: "quas",
    }, operations.BuildsListBranchesSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildsListBranches200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## BuildsListByBranch

Returns the list of builds for the branch

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
    res, err := s.Build.BuildsListByBranch(ctx, operations.BuildsListByBranchRequest{
        AppName: "repudiandae",
        Branch: "corporis",
        OwnerName: "et",
    }, operations.BuildsListByBranchSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildsListByBranch200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## BuildsListToolsetProjects

Returns the projects in the repository for the branch, for all toolsets

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
    res, err := s.Build.BuildsListToolsetProjects(ctx, operations.BuildsListToolsetProjectsRequest{
        AppName: "blanditiis",
        Branch: "ex",
        MaxSearchDepth: sdk.Int64(153627),
        Os: operations.BuildsListToolsetProjectsOsEnumIOs,
        OwnerName: "vel",
        Platform: operations.BuildsListToolsetProjectsPlatformEnumReactNative,
    }, operations.BuildsListToolsetProjectsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildsListToolsetProjects200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BuildsListToolsets

Returns available toolsets for application

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
    res, err := s.Build.BuildsListToolsets(ctx, operations.BuildsListToolsetsRequest{
        AppName: "saepe",
        OwnerName: "error",
        Tools: operations.BuildsListToolsetsToolsEnumXamarin.ToPointer(),
    }, operations.BuildsListToolsetsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildsListToolsets200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~BuildsListXamarinSDKBundles~~

Gets the Xamarin SDK bundles available to this app

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Build.BuildsListXamarinSDKBundles(ctx, operations.BuildsListXamarinSDKBundlesRequest{
        AppName: "incidunt",
        OwnerName: "reiciendis",
    }, operations.BuildsListXamarinSDKBundlesSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildsListXamarinSDKBundles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ~~BuildsListXcodeVersions~~

Gets the Xcode versions available to this app

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Build.BuildsListXcodeVersions(ctx, operations.BuildsListXcodeVersionsRequest{
        AppName: "dolorem",
        OwnerName: "harum",
    }, operations.BuildsListXcodeVersionsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildsListXcodeVersions200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## BuildsUpdate

Cancels a build

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
    res, err := s.Build.BuildsUpdate(ctx, operations.BuildsUpdateRequest{
        RequestBody: operations.BuildsUpdateRequestBody{
            Status: operations.BuildsUpdateRequestBodyStatusEnumCancelling.ToPointer(),
        },
        AppName: "dicta",
        BuildID: 99416,
        OwnerName: "occaecati",
    }, operations.BuildsUpdateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildsUpdate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BuildsWebhook

Public webhook sink

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
    res, err := s.Build.BuildsWebhook(ctx, map[string]interface{}{
        "quidem": "atque",
        "laborum": "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CommitsListByShaList

Returns commit information for a batch of shas

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
    res, err := s.Build.CommitsListByShaList(ctx, operations.CommitsListByShaListRequest{
        AppName: "tenetur",
        Hashes: []string{
            "alias",
            "amet",
        },
        OwnerName: "deserunt",
    }, operations.CommitsListByShaListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitsListByShaList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## FileAssetsCreate

Create a new asset to upload a file

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
    res, err := s.Build.FileAssetsCreate(ctx, operations.FileAssetsCreateRequest{
        RequestBody: map[string]interface{}{
            "unde": "reiciendis",
            "provident": "repellendus",
        },
        AppName: "delectus",
        OwnerName: "voluptates",
    }, operations.FileAssetsCreateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileAssetsCreate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RepositoriesList

Gets the repositories available from the source code host

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
    res, err := s.Build.RepositoriesList(ctx, operations.RepositoriesListRequest{
        AppName: "perferendis",
        Form: operations.RepositoriesListFormEnumFull.ToPointer(),
        OwnerName: "quidem",
        ServiceConnectionID: sdk.String("reprehenderit"),
        SourceHost: operations.RepositoriesListSourceHostEnumGitlab,
        VstsAccountName: sdk.String("fuga"),
        VstsProjectID: sdk.String("praesentium"),
    }, operations.RepositoriesListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoriesList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## RepositoryConfigurationsCreateOrUpdate

Configures the repository for build

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
    res, err := s.Build.RepositoryConfigurationsCreateOrUpdate(ctx, operations.RepositoryConfigurationsCreateOrUpdateRequest{
        RequestBody: operations.RepositoryConfigurationsCreateOrUpdateRequestBody{
            ExternalUserID: sdk.String("mollitia"),
            InstallationID: sdk.String("veniam"),
            RepoID: sdk.String("voluptatem"),
            RepoURL: "https://github.com/foo/bar.git",
            ServiceConnectionID: sdk.String("quisquam"),
        },
        AppName: "repudiandae",
        OwnerName: "quasi",
    }, operations.RepositoryConfigurationsCreateOrUpdateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryConfigurationsCreateOrUpdate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RepositoryConfigurationsDelete

Removes the configuration for the repository

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
    res, err := s.Build.RepositoryConfigurationsDelete(ctx, operations.RepositoryConfigurationsDeleteRequest{
        AppName: "atque",
        OwnerName: "reprehenderit",
    }, operations.RepositoryConfigurationsDeleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryConfigurationsDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RepositoryConfigurationsList

Returns the repository build configuration status of the app

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
    res, err := s.Build.RepositoryConfigurationsList(ctx, operations.RepositoryConfigurationsListRequest{
        AppName: "asperiores",
        IncludeInactive: sdk.Bool(false),
        OwnerName: "totam",
    }, operations.RepositoryConfigurationsListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryConfigurationsList200ApplicationJSONAnies != nil {
        // handle response
    }
}
```
