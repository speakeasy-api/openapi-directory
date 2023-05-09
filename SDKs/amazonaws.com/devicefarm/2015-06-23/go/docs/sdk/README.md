# SDK

## Overview

<p>Welcome to the AWS Device Farm API documentation, which contains APIs for:</p> <ul> <li> <p>Testing on desktop browsers</p> <p> Device Farm makes it possible for you to test your web applications on desktop browsers using Selenium. The APIs for desktop browser testing contain <code>TestGrid</code> in their names. For more information, see <a href="https://docs.aws.amazon.com/devicefarm/latest/testgrid/">Testing Web Applications on Selenium with Device Farm</a>.</p> </li> <li> <p>Testing on real mobile devices</p> <p>Device Farm makes it possible for you to test apps on physical phones, tablets, and other devices in the cloud. For more information, see the <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/">Device Farm Developer Guide</a>.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/devicefarm/>
### Available Operations

* [CreateDevicePool](#createdevicepool) - Creates a device pool.
* [CreateInstanceProfile](#createinstanceprofile) - Creates a profile that can be applied to one or more private fleet device instances.
* [CreateNetworkProfile](#createnetworkprofile) - Creates a network profile.
* [CreateProject](#createproject) - Creates a project.
* [CreateRemoteAccessSession](#createremoteaccesssession) - Specifies and starts a remote access session.
* [CreateTestGridProject](#createtestgridproject) - Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a> instances.
* [CreateTestGridURL](#createtestgridurl) - Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code> constructor.
* [CreateUpload](#createupload) - Uploads an app or test scripts.
* [CreateVPCEConfiguration](#createvpceconfiguration) - Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.
* [DeleteDevicePool](#deletedevicepool) - Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.
* [DeleteInstanceProfile](#deleteinstanceprofile) - Deletes a profile that can be applied to one or more private device instances.
* [DeleteNetworkProfile](#deletenetworkprofile) - Deletes a network profile.
* [DeleteProject](#deleteproject) - <p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
* [DeleteRemoteAccessSession](#deleteremoteaccesssession) - Deletes a completed remote access session and its results.
* [DeleteRun](#deleterun) - <p>Deletes the run, given the run ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
* [DeleteTestGridProject](#deletetestgridproject) - <p> Deletes a Selenium testing project and all content generated under it. </p> <important> <p>You cannot undo this operation.</p> </important> <note> <p>You cannot delete a project if it has active sessions.</p> </note>
* [DeleteUpload](#deleteupload) - Deletes an upload given the upload ARN.
* [DeleteVPCEConfiguration](#deletevpceconfiguration) - Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.
* [GetAccountSettings](#getaccountsettings) - Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.
* [GetDevice](#getdevice) - Gets information about a unique device type.
* [GetDeviceInstance](#getdeviceinstance) - Returns information about a device instance that belongs to a private device fleet.
* [GetDevicePool](#getdevicepool) - Gets information about a device pool.
* [GetDevicePoolCompatibility](#getdevicepoolcompatibility) - Gets information about compatibility with a device pool.
* [GetInstanceProfile](#getinstanceprofile) - Returns information about the specified instance profile.
* [GetJob](#getjob) - Gets information about a job.
* [GetNetworkProfile](#getnetworkprofile) - Returns information about a network profile.
* [GetOfferingStatus](#getofferingstatus) - Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [GetProject](#getproject) - Gets information about a project.
* [GetRemoteAccessSession](#getremoteaccesssession) - Returns a link to a currently running remote access session.
* [GetRun](#getrun) - Gets information about a run.
* [GetSuite](#getsuite) - Gets information about a suite.
* [GetTest](#gettest) - Gets information about a test.
* [GetTestGridProject](#gettestgridproject) - Retrieves information about a Selenium testing project.
* [GetTestGridSession](#gettestgridsession) - <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p> <ul> <li> <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p> </li> <li> <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p> </li> </ul> <p/>
* [GetUpload](#getupload) - Gets information about an upload.
* [GetVPCEConfiguration](#getvpceconfiguration) - Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.
* [InstallToRemoteAccessSession](#installtoremoteaccesssession) - Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.
* [ListArtifacts](#listartifacts) - Gets information about artifacts.
* [ListDeviceInstances](#listdeviceinstances) - Returns information about the private device instances associated with one or more AWS accounts.
* [ListDevicePools](#listdevicepools) - Gets information about device pools.
* [ListDevices](#listdevices) - Gets information about unique device types.
* [ListInstanceProfiles](#listinstanceprofiles) - Returns information about all the instance profiles in an AWS account.
* [ListJobs](#listjobs) - Gets information about jobs for a given test run.
* [ListNetworkProfiles](#listnetworkprofiles) - Returns the list of available network profiles.
* [ListOfferingPromotions](#listofferingpromotions) - Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.
* [ListOfferingTransactions](#listofferingtransactions) - Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [ListOfferings](#listofferings) - Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [ListProjects](#listprojects) - Gets information about projects.
* [ListRemoteAccessSessions](#listremoteaccesssessions) - Returns a list of all currently running remote access sessions.
* [ListRuns](#listruns) - Gets information about runs, given an AWS Device Farm project ARN.
* [ListSamples](#listsamples) - Gets information about samples, given an AWS Device Farm job ARN.
* [ListSuites](#listsuites) - Gets information about test suites for a given job.
* [ListTagsForResource](#listtagsforresource) - List the tags for an AWS Device Farm resource.
* [ListTestGridProjects](#listtestgridprojects) - Gets a list of all Selenium testing projects in your account.
* [ListTestGridSessionActions](#listtestgridsessionactions) - Returns a list of the actions taken in a <a>TestGridSession</a>.
* [ListTestGridSessionArtifacts](#listtestgridsessionartifacts) - Retrieves a list of artifacts created during the session.
* [ListTestGridSessions](#listtestgridsessions) - Retrieves a list of sessions for a <a>TestGridProject</a>.
* [ListTests](#listtests) - Gets information about tests in a given test suite.
* [ListUniqueProblems](#listuniqueproblems) - <p>Gets information about unique problems, such as exceptions or crashes.</p> <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (<code>OutOfBoundsException in MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many individual entries for that exception.</p>
* [ListUploads](#listuploads) - Gets information about uploads, given an AWS Device Farm project ARN.
* [ListVPCEConfigurations](#listvpceconfigurations) - Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.
* [PurchaseOffering](#purchaseoffering) - Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [RenewOffering](#renewoffering) - Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [ScheduleRun](#schedulerun) - Schedules a run.
* [StopJob](#stopjob) - Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device where tests have not started. You are not billed for this device. On the device where tests have started, setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown, and any tests that were in progress or already completed.
* [StopRemoteAccessSession](#stopremoteaccesssession) - Ends a specified remote access session.
* [StopRun](#stoprun) - Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices where tests have not started. You are not billed for these devices. On devices where tests have started executing, setup suite and teardown suite tests run to completion on those devices. You are billed for setup, teardown, and any tests that were in progress or already completed.
* [TagResource](#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
* [UntagResource](#untagresource) - Deletes the specified tags from a resource.
* [UpdateDeviceInstance](#updatedeviceinstance) - Updates information about a private device instance.
* [UpdateDevicePool](#updatedevicepool) - Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).
* [UpdateInstanceProfile](#updateinstanceprofile) - Updates information about an existing private device instance profile.
* [UpdateNetworkProfile](#updatenetworkprofile) - Updates the network profile.
* [UpdateProject](#updateproject) - Modifies the specified project name, given the project ARN and a new name.
* [UpdateTestGridProject](#updatetestgridproject) - Change details of a project.
* [UpdateUpload](#updateupload) - Updates an uploaded test spec.
* [UpdateVPCEConfiguration](#updatevpceconfiguration) - Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.

## CreateDevicePool

Creates a device pool.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDevicePool(ctx, operations.CreateDevicePoolRequest{
        CreateDevicePoolRequest: shared.CreateDevicePoolRequest{
            Description: sdk.String("voluptatum"),
            MaxDevices: sdk.Int64(479977),
            Name: "Charlie Walsh II",
            ProjectArn: "veritatis",
            Rules: []shared.Rule{
                shared.Rule{
                    Attribute: shared.DeviceAttributeEnumArn.ToPointer(),
                    Operator: shared.RuleOperatorEnumLessThanOrEquals.ToPointer(),
                    Value: sdk.String("repellendus"),
                },
                shared.Rule{
                    Attribute: shared.DeviceAttributeEnumAvailability.ToPointer(),
                    Operator: shared.RuleOperatorEnumNotIn.ToPointer(),
                    Value: sdk.String("odit"),
                },
                shared.Rule{
                    Attribute: shared.DeviceAttributeEnumModel.ToPointer(),
                    Operator: shared.RuleOperatorEnumNotIn.ToPointer(),
                    Value: sdk.String("maiores"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.CreateDevicePoolXAmzTargetEnumDeviceFarm20150623CreateDevicePool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDevicePoolResult != nil {
        // handle response
    }
}
```

## CreateInstanceProfile

Creates a profile that can be applied to one or more private fleet device instances.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateInstanceProfile(ctx, operations.CreateInstanceProfileRequest{
        CreateInstanceProfileRequest: shared.CreateInstanceProfileRequest{
            Description: sdk.String("dicta"),
            ExcludeAppPackagesFromCleanup: []string{
                "officia",
                "occaecati",
                "fugit",
            },
            Name: "Irvin Rosenbaum III",
            PackageCleanup: sdk.Bool(false),
            RebootAfterUse: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.CreateInstanceProfileXAmzTargetEnumDeviceFarm20150623CreateInstanceProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateInstanceProfileResult != nil {
        // handle response
    }
}
```

## CreateNetworkProfile

Creates a network profile.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateNetworkProfile(ctx, operations.CreateNetworkProfileRequest{
        CreateNetworkProfileRequest: shared.CreateNetworkProfileRequest{
            Description: sdk.String("excepturi"),
            DownlinkBandwidthBits: sdk.Int64(135218),
            DownlinkDelayMs: sdk.Int64(18789),
            DownlinkJitterMs: sdk.Int64(324141),
            DownlinkLossPercent: sdk.Int64(617636),
            Name: "Sheryl Fadel",
            ProjectArn: "hic",
            Type: shared.NetworkProfileTypeEnumPrivate.ToPointer(),
            UplinkBandwidthBits: sdk.Int64(681820),
            UplinkDelayMs: sdk.Int64(449950),
            UplinkJitterMs: sdk.Int64(359508),
            UplinkLossPercent: sdk.Int64(613064),
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.CreateNetworkProfileXAmzTargetEnumDeviceFarm20150623CreateNetworkProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkProfileResult != nil {
        // handle response
    }
}
```

## CreateProject

Creates a project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateProject(ctx, operations.CreateProjectRequest{
        CreateProjectRequest: shared.CreateProjectRequest{
            DefaultJobTimeoutMinutes: sdk.Int64(653140),
            Name: "Ernest Ebert",
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "enim",
                    "omnis",
                    "nemo",
                    "minima",
                },
                SubnetIds: []string{
                    "accusantium",
                    "iure",
                    "culpa",
                },
                VpcID: "doloribus",
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellat"),
        XAmzTarget: operations.CreateProjectXAmzTargetEnumDeviceFarm20150623CreateProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProjectResult != nil {
        // handle response
    }
}
```

## CreateRemoteAccessSession

Specifies and starts a remote access session.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateRemoteAccessSession(ctx, operations.CreateRemoteAccessSessionRequest{
        CreateRemoteAccessSessionRequest: shared.CreateRemoteAccessSessionRequest{
            ClientID: sdk.String("mollitia"),
            Configuration: &shared.CreateRemoteAccessSessionConfiguration{
                BillingMethod: shared.BillingMethodEnumUnmetered.ToPointer(),
                VpceConfigurationArns: []string{
                    "commodi",
                    "quam",
                },
            },
            DeviceArn: "molestiae",
            InstanceArn: sdk.String("velit"),
            InteractionMode: shared.InteractionModeEnumNoVideo.ToPointer(),
            Name: sdk.String("Beatrice Brown"),
            ProjectArn: "enim",
            RemoteDebugEnabled: sdk.Bool(false),
            RemoteRecordAppArn: sdk.String("odit"),
            RemoteRecordEnabled: sdk.Bool(false),
            SkipAppResign: sdk.Bool(false),
            SSHPublicKey: sdk.String("quo"),
        },
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.CreateRemoteAccessSessionXAmzTargetEnumDeviceFarm20150623CreateRemoteAccessSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRemoteAccessSessionResult != nil {
        // handle response
    }
}
```

## CreateTestGridProject

Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a> instances.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateTestGridProject(ctx, operations.CreateTestGridProjectRequest{
        CreateTestGridProjectRequest: shared.CreateTestGridProjectRequest{
            Description: sdk.String("error"),
            Name: "Neal Boyer",
            VpcConfig: &shared.TestGridVpcConfig{
                SecurityGroupIds: []string{
                    "nihil",
                    "praesentium",
                    "voluptatibus",
                    "ipsa",
                },
                SubnetIds: []string{
                    "voluptate",
                    "cum",
                    "perferendis",
                },
                VpcID: "doloremque",
            },
        },
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.CreateTestGridProjectXAmzTargetEnumDeviceFarm20150623CreateTestGridProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTestGridProjectResult != nil {
        // handle response
    }
}
```

## CreateTestGridURL

Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code> constructor.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateTestGridURL(ctx, operations.CreateTestGridURLRequest{
        CreateTestGridURLRequest: shared.CreateTestGridURLRequest{
            ExpiresInSeconds: 118727,
            ProjectArn: "harum",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.CreateTestGridURLXAmzTargetEnumDeviceFarm20150623CreateTestGridURL,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTestGridURLResult != nil {
        // handle response
    }
}
```

## CreateUpload

Uploads an app or test scripts.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateUpload(ctx, operations.CreateUploadRequest{
        CreateUploadRequest: shared.CreateUploadRequest{
            ContentType: sdk.String("molestias"),
            Name: "Ervin Gleason",
            ProjectArn: "voluptates",
            Type: shared.UploadTypeEnumExternalData,
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.CreateUploadXAmzTargetEnumDeviceFarm20150623CreateUpload,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUploadResult != nil {
        // handle response
    }
}
```

## CreateVPCEConfiguration

Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateVPCEConfiguration(ctx, operations.CreateVPCEConfigurationRequest{
        CreateVPCEConfigurationRequest: shared.CreateVPCEConfigurationRequest{
            ServiceDNSName: "est",
            VpceConfigurationDescription: sdk.String("quibusdam"),
            VpceConfigurationName: "explicabo",
            VpceServiceName: "deserunt",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.CreateVPCEConfigurationXAmzTargetEnumDeviceFarm20150623CreateVpceConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVPCEConfigurationResult != nil {
        // handle response
    }
}
```

## DeleteDevicePool

Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDevicePool(ctx, operations.DeleteDevicePoolRequest{
        DeleteDevicePoolRequest: shared.DeleteDevicePoolRequest{
            Arn: "quos",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DeleteDevicePoolXAmzTargetEnumDeviceFarm20150623DeleteDevicePool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDevicePoolResult != nil {
        // handle response
    }
}
```

## DeleteInstanceProfile

Deletes a profile that can be applied to one or more private device instances.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteInstanceProfile(ctx, operations.DeleteInstanceProfileRequest{
        DeleteInstanceProfileRequest: shared.DeleteInstanceProfileRequest{
            Arn: "excepturi",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.DeleteInstanceProfileXAmzTargetEnumDeviceFarm20150623DeleteInstanceProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteInstanceProfileResult != nil {
        // handle response
    }
}
```

## DeleteNetworkProfile

Deletes a network profile.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteNetworkProfile(ctx, operations.DeleteNetworkProfileRequest{
        DeleteNetworkProfileRequest: shared.DeleteNetworkProfileRequest{
            Arn: "eligendi",
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.DeleteNetworkProfileXAmzTargetEnumDeviceFarm20150623DeleteNetworkProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteNetworkProfileResult != nil {
        // handle response
    }
}
```

## DeleteProject

<p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteProject(ctx, operations.DeleteProjectRequest{
        DeleteProjectRequest: shared.DeleteProjectRequest{
            Arn: "debitis",
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.DeleteProjectXAmzTargetEnumDeviceFarm20150623DeleteProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProjectResult != nil {
        // handle response
    }
}
```

## DeleteRemoteAccessSession

Deletes a completed remote access session and its results.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRemoteAccessSession(ctx, operations.DeleteRemoteAccessSessionRequest{
        DeleteRemoteAccessSessionRequest: shared.DeleteRemoteAccessSessionRequest{
            Arn: "dicta",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.DeleteRemoteAccessSessionXAmzTargetEnumDeviceFarm20150623DeleteRemoteAccessSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRemoteAccessSessionResult != nil {
        // handle response
    }
}
```

## DeleteRun

<p>Deletes the run, given the run ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRun(ctx, operations.DeleteRunRequest{
        DeleteRunRequest: shared.DeleteRunRequest{
            Arn: "non",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.DeleteRunXAmzTargetEnumDeviceFarm20150623DeleteRun,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRunResult != nil {
        // handle response
    }
}
```

## DeleteTestGridProject

<p> Deletes a Selenium testing project and all content generated under it. </p> <important> <p>You cannot undo this operation.</p> </important> <note> <p>You cannot delete a project if it has active sessions.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteTestGridProject(ctx, operations.DeleteTestGridProjectRequest{
        DeleteTestGridProjectRequest: shared.DeleteTestGridProjectRequest{
            ProjectArn: "id",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.DeleteTestGridProjectXAmzTargetEnumDeviceFarm20150623DeleteTestGridProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTestGridProjectResult != nil {
        // handle response
    }
}
```

## DeleteUpload

Deletes an upload given the upload ARN.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteUpload(ctx, operations.DeleteUploadRequest{
        DeleteUploadRequest: shared.DeleteUploadRequest{
            Arn: "natus",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.DeleteUploadXAmzTargetEnumDeviceFarm20150623DeleteUpload,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUploadResult != nil {
        // handle response
    }
}
```

## DeleteVPCEConfiguration

Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteVPCEConfiguration(ctx, operations.DeleteVPCEConfigurationRequest{
        DeleteVPCEConfigurationRequest: shared.DeleteVPCEConfigurationRequest{
            Arn: "labore",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.DeleteVPCEConfigurationXAmzTargetEnumDeviceFarm20150623DeleteVpceConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVPCEConfigurationResult != nil {
        // handle response
    }
}
```

## GetAccountSettings

Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAccountSettings(ctx, operations.GetAccountSettingsRequest{
        RequestBody: map[string]interface{}{
            "magnam": "et",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.GetAccountSettingsXAmzTargetEnumDeviceFarm20150623GetAccountSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountSettingsResult != nil {
        // handle response
    }
}
```

## GetDevice

Gets information about a unique device type.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDevice(ctx, operations.GetDeviceRequest{
        GetDeviceRequest: shared.GetDeviceRequest{
            Arn: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.GetDeviceXAmzTargetEnumDeviceFarm20150623GetDevice,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceResult != nil {
        // handle response
    }
}
```

## GetDeviceInstance

Returns information about a device instance that belongs to a private device fleet.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDeviceInstance(ctx, operations.GetDeviceInstanceRequest{
        GetDeviceInstanceRequest: shared.GetDeviceInstanceRequest{
            Arn: "quasi",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.GetDeviceInstanceXAmzTargetEnumDeviceFarm20150623GetDeviceInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceInstanceResult != nil {
        // handle response
    }
}
```

## GetDevicePool

Gets information about a device pool.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDevicePool(ctx, operations.GetDevicePoolRequest{
        GetDevicePoolRequest: shared.GetDevicePoolRequest{
            Arn: "in",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("repellat"),
        XAmzTarget: operations.GetDevicePoolXAmzTargetEnumDeviceFarm20150623GetDevicePool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDevicePoolResult != nil {
        // handle response
    }
}
```

## GetDevicePoolCompatibility

Gets information about compatibility with a device pool.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDevicePoolCompatibility(ctx, operations.GetDevicePoolCompatibilityRequest{
        GetDevicePoolCompatibilityRequest: shared.GetDevicePoolCompatibilityRequest{
            AppArn: sdk.String("quibusdam"),
            Configuration: &shared.ScheduleRunConfiguration{
                AuxiliaryApps: []string{
                    "saepe",
                },
                BillingMethod: shared.BillingMethodEnumUnmetered.ToPointer(),
                CustomerArtifactPaths: &shared.CustomerArtifactPaths{
                    AndroidPaths: []string{
                        "consequuntur",
                    },
                    DeviceHostPaths: []string{
                        "natus",
                        "magni",
                        "sunt",
                    },
                    IosPaths: []string{
                        "illum",
                        "pariatur",
                        "maxime",
                        "ea",
                    },
                },
                ExtraDataPackageArn: sdk.String("excepturi"),
                Locale: sdk.String("odit"),
                Location: &shared.Location{
                    Latitude: 4071.83,
                    Longitude: 332.22,
                },
                NetworkProfileArn: sdk.String("ab"),
                Radios: &shared.Radios{
                    Bluetooth: sdk.Bool(false),
                    Gps: sdk.Bool(false),
                    Nfc: sdk.Bool(false),
                    Wifi: sdk.Bool(false),
                },
                VpceConfigurationArns: []string{
                    "quidem",
                    "ipsam",
                    "voluptate",
                    "autem",
                },
            },
            DevicePoolArn: "nam",
            Test: &shared.ScheduleRunTest{
                Filter: sdk.String("eaque"),
                Parameters: map[string]string{
                    "nemo": "voluptatibus",
                    "perferendis": "fugiat",
                    "amet": "aut",
                    "cumque": "corporis",
                },
                TestPackageArn: sdk.String("hic"),
                TestSpecArn: sdk.String("libero"),
                Type: shared.TestTypeEnumUiautomation,
            },
            TestType: shared.TestTypeEnumAppiumJavaJunit.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.GetDevicePoolCompatibilityXAmzTargetEnumDeviceFarm20150623GetDevicePoolCompatibility,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDevicePoolCompatibilityResult != nil {
        // handle response
    }
}
```

## GetInstanceProfile

Returns information about the specified instance profile.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetInstanceProfile(ctx, operations.GetInstanceProfileRequest{
        GetInstanceProfileRequest: shared.GetInstanceProfileRequest{
            Arn: "perferendis",
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.GetInstanceProfileXAmzTargetEnumDeviceFarm20150623GetInstanceProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInstanceProfileResult != nil {
        // handle response
    }
}
```

## GetJob

Gets information about a job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetJob(ctx, operations.GetJobRequest{
        GetJobRequest: shared.GetJobRequest{
            Arn: "recusandae",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("perspiciatis"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        XAmzTarget: operations.GetJobXAmzTargetEnumDeviceFarm20150623GetJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetJobResult != nil {
        // handle response
    }
}
```

## GetNetworkProfile

Returns information about a network profile.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetNetworkProfile(ctx, operations.GetNetworkProfileRequest{
        GetNetworkProfileRequest: shared.GetNetworkProfileRequest{
            Arn: "error",
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.GetNetworkProfileXAmzTargetEnumDeviceFarm20150623GetNetworkProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkProfileResult != nil {
        // handle response
    }
}
```

## GetOfferingStatus

Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetOfferingStatus(ctx, operations.GetOfferingStatusRequest{
        GetOfferingStatusRequest: shared.GetOfferingStatusRequest{
            NextToken: sdk.String("iste"),
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.GetOfferingStatusXAmzTargetEnumDeviceFarm20150623GetOfferingStatus,
        NextToken: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOfferingStatusResult != nil {
        // handle response
    }
}
```

## GetProject

Gets information about a project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetProject(ctx, operations.GetProjectRequest{
        GetProjectRequest: shared.GetProjectRequest{
            Arn: "quos",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.GetProjectXAmzTargetEnumDeviceFarm20150623GetProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProjectResult != nil {
        // handle response
    }
}
```

## GetRemoteAccessSession

Returns a link to a currently running remote access session.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRemoteAccessSession(ctx, operations.GetRemoteAccessSessionRequest{
        GetRemoteAccessSessionRequest: shared.GetRemoteAccessSessionRequest{
            Arn: "excepturi",
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.GetRemoteAccessSessionXAmzTargetEnumDeviceFarm20150623GetRemoteAccessSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRemoteAccessSessionResult != nil {
        // handle response
    }
}
```

## GetRun

Gets information about a run.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRun(ctx, operations.GetRunRequest{
        GetRunRequest: shared.GetRunRequest{
            Arn: "veritatis",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.GetRunXAmzTargetEnumDeviceFarm20150623GetRun,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRunResult != nil {
        // handle response
    }
}
```

## GetSuite

Gets information about a suite.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSuite(ctx, operations.GetSuiteRequest{
        GetSuiteRequest: shared.GetSuiteRequest{
            Arn: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.GetSuiteXAmzTargetEnumDeviceFarm20150623GetSuite,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSuiteResult != nil {
        // handle response
    }
}
```

## GetTest

Gets information about a test.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetTest(ctx, operations.GetTestRequest{
        GetTestRequest: shared.GetTestRequest{
            Arn: "soluta",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.GetTestXAmzTargetEnumDeviceFarm20150623GetTest,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTestResult != nil {
        // handle response
    }
}
```

## GetTestGridProject

Retrieves information about a Selenium testing project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetTestGridProject(ctx, operations.GetTestGridProjectRequest{
        GetTestGridProjectRequest: shared.GetTestGridProjectRequest{
            ProjectArn: "distinctio",
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.GetTestGridProjectXAmzTargetEnumDeviceFarm20150623GetTestGridProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTestGridProjectResult != nil {
        // handle response
    }
}
```

## GetTestGridSession

<p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p> <ul> <li> <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p> </li> <li> <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p> </li> </ul> <p/>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetTestGridSession(ctx, operations.GetTestGridSessionRequest{
        GetTestGridSessionRequest: shared.GetTestGridSessionRequest{
            ProjectArn: sdk.String("aspernatur"),
            SessionArn: sdk.String("perferendis"),
            SessionID: sdk.String("amet"),
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.GetTestGridSessionXAmzTargetEnumDeviceFarm20150623GetTestGridSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTestGridSessionResult != nil {
        // handle response
    }
}
```

## GetUpload

Gets information about an upload.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetUpload(ctx, operations.GetUploadRequest{
        GetUploadRequest: shared.GetUploadRequest{
            Arn: "minima",
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.GetUploadXAmzTargetEnumDeviceFarm20150623GetUpload,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUploadResult != nil {
        // handle response
    }
}
```

## GetVPCEConfiguration

Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetVPCEConfiguration(ctx, operations.GetVPCEConfigurationRequest{
        GetVPCEConfigurationRequest: shared.GetVPCEConfigurationRequest{
            Arn: "vel",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.GetVPCEConfigurationXAmzTargetEnumDeviceFarm20150623GetVpceConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVPCEConfigurationResult != nil {
        // handle response
    }
}
```

## InstallToRemoteAccessSession

Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.InstallToRemoteAccessSession(ctx, operations.InstallToRemoteAccessSessionRequest{
        InstallToRemoteAccessSessionRequest: shared.InstallToRemoteAccessSessionRequest{
            AppArn: "iusto",
            RemoteAccessSessionArn: "ipsum",
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.InstallToRemoteAccessSessionXAmzTargetEnumDeviceFarm20150623InstallToRemoteAccessSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstallToRemoteAccessSessionResult != nil {
        // handle response
    }
}
```

## ListArtifacts

Gets information about artifacts.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListArtifacts(ctx, operations.ListArtifactsRequest{
        ListArtifactsRequest: shared.ListArtifactsRequest{
            Arn: "dolorem",
            NextToken: sdk.String("sapiente"),
            Type: shared.ArtifactCategoryEnumFile,
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.ListArtifactsXAmzTargetEnumDeviceFarm20150623ListArtifacts,
        NextToken: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListArtifactsResult != nil {
        // handle response
    }
}
```

## ListDeviceInstances

Returns information about the private device instances associated with one or more AWS accounts.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDeviceInstances(ctx, operations.ListDeviceInstancesRequest{
        ListDeviceInstancesRequest: shared.ListDeviceInstancesRequest{
            MaxResults: sdk.Int64(646265),
            NextToken: sdk.String("quam"),
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.ListDeviceInstancesXAmzTargetEnumDeviceFarm20150623ListDeviceInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeviceInstancesResult != nil {
        // handle response
    }
}
```

## ListDevicePools

Gets information about device pools.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDevicePools(ctx, operations.ListDevicePoolsRequest{
        ListDevicePoolsRequest: shared.ListDevicePoolsRequest{
            Arn: "dicta",
            NextToken: sdk.String("laborum"),
            Type: shared.DevicePoolTypeEnumPrivate.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("quam"),
        XAmzTarget: operations.ListDevicePoolsXAmzTargetEnumDeviceFarm20150623ListDevicePools,
        NextToken: sdk.String("molestias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDevicePoolsResult != nil {
        // handle response
    }
}
```

## ListDevices

Gets information about unique device types.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDevices(ctx, operations.ListDevicesRequest{
        ListDevicesRequest: shared.ListDevicesRequest{
            Arn: sdk.String("temporibus"),
            Filters: []shared.DeviceFilter{
                shared.DeviceFilter{
                    Attribute: shared.DeviceFilterAttributeEnumOsVersion,
                    Operator: shared.RuleOperatorEnumLessThan,
                    Values: []string{
                        "odio",
                    },
                },
            },
            NextToken: sdk.String("sunt"),
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.ListDevicesXAmzTargetEnumDeviceFarm20150623ListDevices,
        NextToken: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDevicesResult != nil {
        // handle response
    }
}
```

## ListInstanceProfiles

Returns information about all the instance profiles in an AWS account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListInstanceProfiles(ctx, operations.ListInstanceProfilesRequest{
        ListInstanceProfilesRequest: shared.ListInstanceProfilesRequest{
            MaxResults: sdk.Int64(903720),
            NextToken: sdk.String("ipsum"),
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.ListInstanceProfilesXAmzTargetEnumDeviceFarm20150623ListInstanceProfiles,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstanceProfilesResult != nil {
        // handle response
    }
}
```

## ListJobs

Gets information about jobs for a given test run.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListJobs(ctx, operations.ListJobsRequest{
        ListJobsRequest: shared.ListJobsRequest{
            Arn: "dolorem",
            NextToken: sdk.String("dolore"),
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.ListJobsXAmzTargetEnumDeviceFarm20150623ListJobs,
        NextToken: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsResult != nil {
        // handle response
    }
}
```

## ListNetworkProfiles

Returns the list of available network profiles.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListNetworkProfiles(ctx, operations.ListNetworkProfilesRequest{
        ListNetworkProfilesRequest: shared.ListNetworkProfilesRequest{
            Arn: "consequatur",
            NextToken: sdk.String("est"),
            Type: shared.NetworkProfileTypeEnumPrivate.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.ListNetworkProfilesXAmzTargetEnumDeviceFarm20150623ListNetworkProfiles,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNetworkProfilesResult != nil {
        // handle response
    }
}
```

## ListOfferingPromotions

Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListOfferingPromotions(ctx, operations.ListOfferingPromotionsRequest{
        ListOfferingPromotionsRequest: shared.ListOfferingPromotionsRequest{
            NextToken: sdk.String("laudantium"),
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.ListOfferingPromotionsXAmzTargetEnumDeviceFarm20150623ListOfferingPromotions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOfferingPromotionsResult != nil {
        // handle response
    }
}
```

## ListOfferingTransactions

Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListOfferingTransactions(ctx, operations.ListOfferingTransactionsRequest{
        ListOfferingTransactionsRequest: shared.ListOfferingTransactionsRequest{
            NextToken: sdk.String("ipsum"),
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.ListOfferingTransactionsXAmzTargetEnumDeviceFarm20150623ListOfferingTransactions,
        NextToken: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOfferingTransactionsResult != nil {
        // handle response
    }
}
```

## ListOfferings

Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListOfferings(ctx, operations.ListOfferingsRequest{
        ListOfferingsRequest: shared.ListOfferingsRequest{
            NextToken: sdk.String("quod"),
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.ListOfferingsXAmzTargetEnumDeviceFarm20150623ListOfferings,
        NextToken: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOfferingsResult != nil {
        // handle response
    }
}
```

## ListProjects

Gets information about projects.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListProjects(ctx, operations.ListProjectsRequest{
        ListProjectsRequest: shared.ListProjectsRequest{
            Arn: sdk.String("sequi"),
            NextToken: sdk.String("natus"),
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.ListProjectsXAmzTargetEnumDeviceFarm20150623ListProjects,
        NextToken: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProjectsResult != nil {
        // handle response
    }
}
```

## ListRemoteAccessSessions

Returns a list of all currently running remote access sessions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRemoteAccessSessions(ctx, operations.ListRemoteAccessSessionsRequest{
        ListRemoteAccessSessionsRequest: shared.ListRemoteAccessSessionsRequest{
            Arn: "doloribus",
            NextToken: sdk.String("iusto"),
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.ListRemoteAccessSessionsXAmzTargetEnumDeviceFarm20150623ListRemoteAccessSessions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRemoteAccessSessionsResult != nil {
        // handle response
    }
}
```

## ListRuns

Gets information about runs, given an AWS Device Farm project ARN.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRuns(ctx, operations.ListRunsRequest{
        ListRunsRequest: shared.ListRunsRequest{
            Arn: "aspernatur",
            NextToken: sdk.String("vel"),
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.ListRunsXAmzTargetEnumDeviceFarm20150623ListRuns,
        NextToken: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRunsResult != nil {
        // handle response
    }
}
```

## ListSamples

Gets information about samples, given an AWS Device Farm job ARN.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSamples(ctx, operations.ListSamplesRequest{
        ListSamplesRequest: shared.ListSamplesRequest{
            Arn: "quasi",
            NextToken: sdk.String("ex"),
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.ListSamplesXAmzTargetEnumDeviceFarm20150623ListSamples,
        NextToken: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSamplesResult != nil {
        // handle response
    }
}
```

## ListSuites

Gets information about test suites for a given job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSuites(ctx, operations.ListSuitesRequest{
        ListSuitesRequest: shared.ListSuitesRequest{
            Arn: "impedit",
            NextToken: sdk.String("corporis"),
        },
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.ListSuitesXAmzTargetEnumDeviceFarm20150623ListSuites,
        NextToken: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSuitesResult != nil {
        // handle response
    }
}
```

## ListTagsForResource

List the tags for an AWS Device Farm resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceARN: "aspernatur",
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumDeviceFarm20150623ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTestGridProjects

Gets a list of all Selenium testing projects in your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTestGridProjects(ctx, operations.ListTestGridProjectsRequest{
        ListTestGridProjectsRequest: shared.ListTestGridProjectsRequest{
            MaxResult: sdk.Int64(770581),
            NextToken: sdk.String("aliquam"),
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.ListTestGridProjectsXAmzTargetEnumDeviceFarm20150623ListTestGridProjects,
        MaxResult: sdk.String("placeat"),
        NextToken: sdk.String("velit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTestGridProjectsResult != nil {
        // handle response
    }
}
```

## ListTestGridSessionActions

Returns a list of the actions taken in a <a>TestGridSession</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTestGridSessionActions(ctx, operations.ListTestGridSessionActionsRequest{
        ListTestGridSessionActionsRequest: shared.ListTestGridSessionActionsRequest{
            MaxResult: sdk.Int64(432148),
            NextToken: sdk.String("autem"),
            SessionArn: "nobis",
        },
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.ListTestGridSessionActionsXAmzTargetEnumDeviceFarm20150623ListTestGridSessionActions,
        MaxResult: sdk.String("numquam"),
        NextToken: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTestGridSessionActionsResult != nil {
        // handle response
    }
}
```

## ListTestGridSessionArtifacts

Retrieves a list of artifacts created during the session.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTestGridSessionArtifacts(ctx, operations.ListTestGridSessionArtifactsRequest{
        ListTestGridSessionArtifactsRequest: shared.ListTestGridSessionArtifactsRequest{
            MaxResult: sdk.Int64(591935),
            NextToken: sdk.String("ipsa"),
            SessionArn: "molestiae",
            Type: shared.TestGridSessionArtifactCategoryEnumVideo.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
        XAmzTarget: operations.ListTestGridSessionArtifactsXAmzTargetEnumDeviceFarm20150623ListTestGridSessionArtifacts,
        MaxResult: sdk.String("quidem"),
        NextToken: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTestGridSessionArtifactsResult != nil {
        // handle response
    }
}
```

## ListTestGridSessions

Retrieves a list of sessions for a <a>TestGridProject</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTestGridSessions(ctx, operations.ListTestGridSessionsRequest{
        ListTestGridSessionsRequest: shared.ListTestGridSessionsRequest{
            CreationTimeAfter: types.MustTimeFromString("2022-07-26T19:04:27.877Z"),
            CreationTimeBefore: types.MustTimeFromString("2022-03-05T04:36:55.913Z"),
            EndTimeAfter: types.MustTimeFromString("2022-06-29T02:09:48.123Z"),
            EndTimeBefore: types.MustTimeFromString("2022-09-28T10:00:45.702Z"),
            MaxResult: sdk.Int64(56848),
            NextToken: sdk.String("id"),
            ProjectArn: "quidem",
            Status: shared.TestGridSessionStatusEnumActive.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.ListTestGridSessionsXAmzTargetEnumDeviceFarm20150623ListTestGridSessions,
        MaxResult: sdk.String("ab"),
        NextToken: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTestGridSessionsResult != nil {
        // handle response
    }
}
```

## ListTests

Gets information about tests in a given test suite.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTests(ctx, operations.ListTestsRequest{
        ListTestsRequest: shared.ListTestsRequest{
            Arn: "consequatur",
            NextToken: sdk.String("tempora"),
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.ListTestsXAmzTargetEnumDeviceFarm20150623ListTests,
        NextToken: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTestsResult != nil {
        // handle response
    }
}
```

## ListUniqueProblems

<p>Gets information about unique problems, such as exceptions or crashes.</p> <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (<code>OutOfBoundsException in MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many individual entries for that exception.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListUniqueProblems(ctx, operations.ListUniqueProblemsRequest{
        ListUniqueProblemsRequest: shared.ListUniqueProblemsRequest{
            Arn: "distinctio",
            NextToken: sdk.String("quod"),
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.ListUniqueProblemsXAmzTargetEnumDeviceFarm20150623ListUniqueProblems,
        NextToken: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUniqueProblemsResult != nil {
        // handle response
    }
}
```

## ListUploads

Gets information about uploads, given an AWS Device Farm project ARN.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListUploads(ctx, operations.ListUploadsRequest{
        ListUploadsRequest: shared.ListUploadsRequest{
            Arn: "commodi",
            NextToken: sdk.String("sapiente"),
            Type: shared.UploadTypeEnumAppiumJavaTestngTestPackage.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.ListUploadsXAmzTargetEnumDeviceFarm20150623ListUploads,
        NextToken: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUploadsResult != nil {
        // handle response
    }
}
```

## ListVPCEConfigurations

Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListVPCEConfigurations(ctx, operations.ListVPCEConfigurationsRequest{
        ListVPCEConfigurationsRequest: shared.ListVPCEConfigurationsRequest{
            MaxResults: sdk.Int64(536178),
            NextToken: sdk.String("fugit"),
        },
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.ListVPCEConfigurationsXAmzTargetEnumDeviceFarm20150623ListVpceConfigurations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVPCEConfigurationsResult != nil {
        // handle response
    }
}
```

## PurchaseOffering

Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PurchaseOffering(ctx, operations.PurchaseOfferingRequest{
        PurchaseOfferingRequest: shared.PurchaseOfferingRequest{
            OfferingID: "fugit",
            OfferingPromotionID: sdk.String("sapiente"),
            Quantity: 159870,
        },
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.PurchaseOfferingXAmzTargetEnumDeviceFarm20150623PurchaseOffering,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PurchaseOfferingResult != nil {
        // handle response
    }
}
```

## RenewOffering

Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RenewOffering(ctx, operations.RenewOfferingRequest{
        RenewOfferingRequest: shared.RenewOfferingRequest{
            OfferingID: "eveniet",
            Quantity: 882042,
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.RenewOfferingXAmzTargetEnumDeviceFarm20150623RenewOffering,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RenewOfferingResult != nil {
        // handle response
    }
}
```

## ScheduleRun

Schedules a run.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ScheduleRun(ctx, operations.ScheduleRunRequest{
        ScheduleRunRequest: shared.ScheduleRunRequest{
            AppArn: sdk.String("saepe"),
            Configuration: &shared.ScheduleRunConfiguration{
                AuxiliaryApps: []string{
                    "harum",
                    "molestiae",
                },
                BillingMethod: shared.BillingMethodEnumUnmetered.ToPointer(),
                CustomerArtifactPaths: &shared.CustomerArtifactPaths{
                    AndroidPaths: []string{
                        "minima",
                        "distinctio",
                        "eligendi",
                    },
                    DeviceHostPaths: []string{
                        "culpa",
                    },
                    IosPaths: []string{
                        "adipisci",
                        "cumque",
                        "consequuntur",
                    },
                },
                ExtraDataPackageArn: sdk.String("consequatur"),
                Locale: sdk.String("minus"),
                Location: &shared.Location{
                    Latitude: 3082.86,
                    Longitude: 9591.67,
                },
                NetworkProfileArn: sdk.String("consectetur"),
                Radios: &shared.Radios{
                    Bluetooth: sdk.Bool(false),
                    Gps: sdk.Bool(false),
                    Nfc: sdk.Bool(false),
                    Wifi: sdk.Bool(false),
                },
                VpceConfigurationArns: []string{
                    "blanditiis",
                    "provident",
                },
            },
            DevicePoolArn: sdk.String("a"),
            DeviceSelectionConfiguration: &shared.DeviceSelectionConfiguration{
                Filters: []shared.DeviceFilter{
                    shared.DeviceFilter{
                        Attribute: shared.DeviceFilterAttributeEnumManufacturer,
                        Operator: shared.RuleOperatorEnumGreaterThan,
                        Values: []string{
                            "a",
                        },
                    },
                    shared.DeviceFilter{
                        Attribute: shared.DeviceFilterAttributeEnumRemoteAccessEnabled,
                        Operator: shared.RuleOperatorEnumGreaterThanOrEquals,
                        Values: []string{
                            "possimus",
                            "quia",
                            "eveniet",
                            "asperiores",
                        },
                    },
                    shared.DeviceFilter{
                        Attribute: shared.DeviceFilterAttributeEnumInstanceArn,
                        Operator: shared.RuleOperatorEnumEquals,
                        Values: []string{
                            "quasi",
                        },
                    },
                    shared.DeviceFilter{
                        Attribute: shared.DeviceFilterAttributeEnumRemoteAccessEnabled,
                        Operator: shared.RuleOperatorEnumIn,
                        Values: []string{
                            "tenetur",
                            "quae",
                        },
                    },
                },
                MaxDevices: 936747,
            },
            ExecutionConfiguration: &shared.ExecutionConfiguration{
                AccountsCleanup: sdk.Bool(false),
                AppPackagesCleanup: sdk.Bool(false),
                JobTimeoutMinutes: sdk.Int64(424032),
                SkipAppResign: sdk.Bool(false),
                VideoCapture: sdk.Bool(false),
            },
            Name: sdk.String("Charlotte Rempel"),
            ProjectArn: "accusantium",
            Test: shared.ScheduleRunTest{
                Filter: sdk.String("aliquam"),
                Parameters: map[string]string{
                    "dicta": "ullam",
                    "reprehenderit": "ullam",
                    "nisi": "aut",
                    "voluptatum": "qui",
                },
                TestPackageArn: sdk.String("quibusdam"),
                TestSpecArn: sdk.String("ex"),
                Type: shared.TestTypeEnumAppiumWebNode,
            },
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.ScheduleRunXAmzTargetEnumDeviceFarm20150623ScheduleRun,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduleRunResult != nil {
        // handle response
    }
}
```

## StopJob

Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device where tests have not started. You are not billed for this device. On the device where tests have started, setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown, and any tests that were in progress or already completed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopJob(ctx, operations.StopJobRequest{
        StopJobRequest: shared.StopJobRequest{
            Arn: "et",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.StopJobXAmzTargetEnumDeviceFarm20150623StopJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopJobResult != nil {
        // handle response
    }
}
```

## StopRemoteAccessSession

Ends a specified remote access session.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopRemoteAccessSession(ctx, operations.StopRemoteAccessSessionRequest{
        StopRemoteAccessSessionRequest: shared.StopRemoteAccessSessionRequest{
            Arn: "temporibus",
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.StopRemoteAccessSessionXAmzTargetEnumDeviceFarm20150623StopRemoteAccessSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopRemoteAccessSessionResult != nil {
        // handle response
    }
}
```

## StopRun

Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices where tests have not started. You are not billed for these devices. On devices where tests have started executing, setup suite and teardown suite tests run to completion on those devices. You are billed for setup, teardown, and any tests that were in progress or already completed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopRun(ctx, operations.StopRunRequest{
        StopRunRequest: shared.StopRunRequest{
            Arn: "corrupti",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.StopRunXAmzTargetEnumDeviceFarm20150623StopRun,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopRunResult != nil {
        // handle response
    }
}
```

## TagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceARN: "voluptas",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dignissimos",
                    Value: "dicta",
                },
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("aperiam"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumDeviceFarm20150623TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Deletes the specified tags from a resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceARN: "ea",
            TagKeys: []string{
                "consequuntur",
                "repellendus",
            },
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumDeviceFarm20150623UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateDeviceInstance

Updates information about a private device instance.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDeviceInstance(ctx, operations.UpdateDeviceInstanceRequest{
        UpdateDeviceInstanceRequest: shared.UpdateDeviceInstanceRequest{
            Arn: "quaerat",
            Labels: []string{
                "quod",
                "labore",
                "ab",
                "adipisci",
            },
            ProfileArn: sdk.String("fuga"),
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.UpdateDeviceInstanceXAmzTargetEnumDeviceFarm20150623UpdateDeviceInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceInstanceResult != nil {
        // handle response
    }
}
```

## UpdateDevicePool

Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDevicePool(ctx, operations.UpdateDevicePoolRequest{
        UpdateDevicePoolRequest: shared.UpdateDevicePoolRequest{
            Arn: "fugiat",
            ClearMaxDevices: sdk.Bool(false),
            Description: sdk.String("vel"),
            MaxDevices: sdk.Int64(497678),
            Name: sdk.String("Cecil Grant"),
            Rules: []shared.Rule{
                shared.Rule{
                    Attribute: shared.DeviceAttributeEnumRemoteDebugEnabled.ToPointer(),
                    Operator: shared.RuleOperatorEnumGreaterThan.ToPointer(),
                    Value: sdk.String("corporis"),
                },
                shared.Rule{
                    Attribute: shared.DeviceAttributeEnumAvailability.ToPointer(),
                    Operator: shared.RuleOperatorEnumNotIn.ToPointer(),
                    Value: sdk.String("nemo"),
                },
                shared.Rule{
                    Attribute: shared.DeviceAttributeEnumAvailability.ToPointer(),
                    Operator: shared.RuleOperatorEnumGreaterThan.ToPointer(),
                    Value: sdk.String("aperiam"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.UpdateDevicePoolXAmzTargetEnumDeviceFarm20150623UpdateDevicePool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDevicePoolResult != nil {
        // handle response
    }
}
```

## UpdateInstanceProfile

Updates information about an existing private device instance profile.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateInstanceProfile(ctx, operations.UpdateInstanceProfileRequest{
        UpdateInstanceProfileRequest: shared.UpdateInstanceProfileRequest{
            Arn: "doloribus",
            Description: sdk.String("suscipit"),
            ExcludeAppPackagesFromCleanup: []string{
                "quidem",
                "saepe",
                "necessitatibus",
                "dolore",
            },
            Name: sdk.String("Ollie Flatley"),
            PackageCleanup: sdk.Bool(false),
            RebootAfterUse: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.UpdateInstanceProfileXAmzTargetEnumDeviceFarm20150623UpdateInstanceProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateInstanceProfileResult != nil {
        // handle response
    }
}
```

## UpdateNetworkProfile

Updates the network profile.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateNetworkProfile(ctx, operations.UpdateNetworkProfileRequest{
        UpdateNetworkProfileRequest: shared.UpdateNetworkProfileRequest{
            Arn: "laboriosam",
            Description: sdk.String("ipsa"),
            DownlinkBandwidthBits: sdk.Int64(916727),
            DownlinkDelayMs: sdk.Int64(730709),
            DownlinkJitterMs: sdk.Int64(113816),
            DownlinkLossPercent: sdk.Int64(881721),
            Name: sdk.String("Ricky Cole"),
            Type: shared.NetworkProfileTypeEnumCurated.ToPointer(),
            UplinkBandwidthBits: sdk.Int64(324405),
            UplinkDelayMs: sdk.Int64(748789),
            UplinkJitterMs: sdk.Int64(680116),
            UplinkLossPercent: sdk.Int64(237807),
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("officiis"),
        XAmzTarget: operations.UpdateNetworkProfileXAmzTargetEnumDeviceFarm20150623UpdateNetworkProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkProfileResult != nil {
        // handle response
    }
}
```

## UpdateProject

Modifies the specified project name, given the project ARN and a new name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateProject(ctx, operations.UpdateProjectRequest{
        UpdateProjectRequest: shared.UpdateProjectRequest{
            Arn: "temporibus",
            DefaultJobTimeoutMinutes: sdk.Int64(351870),
            Name: sdk.String("Karla Kuvalis"),
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "culpa",
                },
                SubnetIds: []string{
                    "pariatur",
                    "totam",
                    "hic",
                },
                VpcID: "exercitationem",
            },
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.UpdateProjectXAmzTargetEnumDeviceFarm20150623UpdateProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProjectResult != nil {
        // handle response
    }
}
```

## UpdateTestGridProject

Change details of a project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateTestGridProject(ctx, operations.UpdateTestGridProjectRequest{
        UpdateTestGridProjectRequest: shared.UpdateTestGridProjectRequest{
            Description: sdk.String("facilis"),
            Name: sdk.String("Kristy Bernier"),
            ProjectArn: "laborum",
            VpcConfig: &shared.TestGridVpcConfig{
                SecurityGroupIds: []string{
                    "in",
                },
                SubnetIds: []string{
                    "quidem",
                    "explicabo",
                },
                VpcID: "voluptas",
            },
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("illo"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.UpdateTestGridProjectXAmzTargetEnumDeviceFarm20150623UpdateTestGridProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTestGridProjectResult != nil {
        // handle response
    }
}
```

## UpdateUpload

Updates an uploaded test spec.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateUpload(ctx, operations.UpdateUploadRequest{
        UpdateUploadRequest: shared.UpdateUploadRequest{
            Arn: "perferendis",
            ContentType: sdk.String("corrupti"),
            EditContent: sdk.Bool(false),
            Name: sdk.String("Troy Cormier"),
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.UpdateUploadXAmzTargetEnumDeviceFarm20150623UpdateUpload,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateUploadResult != nil {
        // handle response
    }
}
```

## UpdateVPCEConfiguration

Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateVPCEConfiguration(ctx, operations.UpdateVPCEConfigurationRequest{
        UpdateVPCEConfigurationRequest: shared.UpdateVPCEConfigurationRequest{
            Arn: "tempora",
            ServiceDNSName: sdk.String("voluptate"),
            VpceConfigurationDescription: sdk.String("reiciendis"),
            VpceConfigurationName: sdk.String("ex"),
            VpceServiceName: sdk.String("sit"),
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.UpdateVPCEConfigurationXAmzTargetEnumDeviceFarm20150623UpdateVpceConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateVPCEConfigurationResult != nil {
        // handle response
    }
}
```
