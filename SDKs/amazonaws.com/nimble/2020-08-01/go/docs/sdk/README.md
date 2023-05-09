# SDK

## Overview

<p>Welcome to the Amazon Nimble Studio API reference. This API reference provides methods, schema, resources, parameters, and more to help you get the most out of Nimble Studio.</p> <p>Nimble Studio is a virtual studio that empowers visual effects, animation, and interactive content teams to create content securely within a scalable, private cloud service.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/nimble/>
### Available Operations

* [AcceptEulas](#accepteulas) - Accept EULAs.
* [CreateLaunchProfile](#createlaunchprofile) - Create a launch profile.
* [CreateStreamingImage](#createstreamingimage) - Creates a streaming image resource in a studio.
* [CreateStreamingSession](#createstreamingsession) - <p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in the <code>READY</code> state.</p>
* [CreateStreamingSessionStream](#createstreamingsessionstream) - <p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in the <code>READY</code> state.</p>
* [CreateStudio](#createstudio) - <p>Create a new studio.</p> <p>When creating a studio, two IAM roles must be provided: the admin role and the user role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p> <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy attached for the portal to function properly.</p> <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed policy attached for the portal to function properly.</p> <p>You may optionally specify a KMS key in the <code>StudioEncryptionConfiguration</code>.</p> <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an KMS key. By default, this key is owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key when calling <code>CreateStudio</code> to encrypt this data using a key you own and manage.</p> <p>When providing an KMS key during studio creation, Nimble Studio creates KMS grants in your account to provide your studio user and admin roles access to these KMS keys.</p> <p>If you delete this grant, the studio will no longer be accessible to your portal users.</p> <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>
* [CreateStudioComponent](#createstudiocomponent) - Creates a studio component resource.
* [DeleteLaunchProfile](#deletelaunchprofile) - Permanently delete a launch profile.
* [DeleteLaunchProfileMember](#deletelaunchprofilemember) - Delete a user from launch profile membership.
* [DeleteStreamingImage](#deletestreamingimage) - Delete streaming image.
* [DeleteStreamingSession](#deletestreamingsession) - <p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a <code>DELETED</code> state.</p> <p>A streaming session will count against your streaming session quota until it is marked <code>DELETED</code>.</p>
* [DeleteStudio](#deletestudio) - Delete a studio resource.
* [DeleteStudioComponent](#deletestudiocomponent) - Deletes a studio component resource.
* [DeleteStudioMember](#deletestudiomember) - Delete a user from studio membership.
* [GetEula](#geteula) - Get EULA.
* [GetLaunchProfile](#getlaunchprofile) - Get a launch profile.
* [GetLaunchProfileDetails](#getlaunchprofiledetails) - Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.
* [GetLaunchProfileInitialization](#getlaunchprofileinitialization) - Get a launch profile initialization.
* [GetLaunchProfileMember](#getlaunchprofilemember) - Get a user persona in launch profile membership.
* [GetStreamingImage](#getstreamingimage) - Get streaming image.
* [GetStreamingSession](#getstreamingsession) - <p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>
* [GetStreamingSessionBackup](#getstreamingsessionbackup) - <p>Gets <code>StreamingSessionBackup</code> resource.</p> <p>Invoke this operation to poll for a streaming session backup while stopping a streaming session.</p>
* [GetStreamingSessionStream](#getstreamingsessionstream) - <p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking <code>CreateStreamingSessionStream</code>.</p> <p>After the <code>StreamingSessionStream</code> changes to the <code>READY</code> state, the url property will contain a stream to be used with the DCV streaming client.</p>
* [GetStudio](#getstudio) - Get a studio resource.
* [GetStudioComponent](#getstudiocomponent) - Gets a studio component resource.
* [GetStudioMember](#getstudiomember) - Get a user's membership in a studio.
* [ListEulaAcceptances](#listeulaacceptances) - List EULA acceptances.
* [ListEulas](#listeulas) - List EULAs.
* [ListLaunchProfileMembers](#listlaunchprofilemembers) - Get all users in a given launch profile membership.
* [ListLaunchProfiles](#listlaunchprofiles) - List all the launch profiles a studio.
* [ListStreamingImages](#liststreamingimages) - <p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by Amazon Web Services, as well as streaming images that you have created in your studio.</p>
* [ListStreamingSessionBackups](#liststreamingsessionbackups) - Lists the backups of a streaming session in a studio.
* [ListStreamingSessions](#liststreamingsessions) - Lists the streaming sessions in a studio.
* [ListStudioComponents](#liststudiocomponents) - Lists the <code>StudioComponents</code> in a studio.
* [ListStudioMembers](#liststudiomembers) - <p>Get all users in a given studio membership.</p> <note> <p> <code>ListStudioMembers</code> only returns admin members.</p> </note>
* [ListStudios](#liststudios) - List studios in your Amazon Web Services accounts in the requested Amazon Web Services Region.
* [ListTagsForResource](#listtagsforresource) - <p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p> <p>This operation supports ARNs for all resource types in Nimble Studio that support tags, including studio, studio component, launch profile, streaming image, and streaming session. All resources that can be tagged will contain an ARN property, so you do not have to create this ARN yourself.</p>
* [PutLaunchProfileMembers](#putlaunchprofilemembers) - Add/update users with given persona to launch profile membership.
* [PutStudioMembers](#putstudiomembers) - Add/update users with given persona to studio membership.
* [StartStreamingSession](#startstreamingsession) - Transitions sessions from the <code>STOPPED</code> state into the <code>READY</code> state. The <code>START_IN_PROGRESS</code> state is the intermediate state between the <code>STOPPED</code> and <code>READY</code> states.
* [StartStudioSSOConfigurationRepair](#startstudiossoconfigurationrepair) - <p>Repairs the IAM Identity Center configuration for a given studio.</p> <p>If the studio has a valid IAM Identity Center configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid IAM Identity Center configuration currently associated with it, then a new IAM Identity Center application is created for the studio and the studio is changed to the <code>READY</code> state.</p> <p>After the IAM Identity Center application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>
* [StopStreamingSession](#stopstreamingsession) - Transitions sessions from the <code>READY</code> state into the <code>STOPPED</code> state. The <code>STOP_IN_PROGRESS</code> state is the intermediate state between the <code>READY</code> and <code>STOPPED</code> states.
* [TagResource](#tagresource) - Creates tags for a resource, given its ARN.
* [UntagResource](#untagresource) - Deletes the tags for a resource.
* [UpdateLaunchProfile](#updatelaunchprofile) - Update a launch profile.
* [UpdateLaunchProfileMember](#updatelaunchprofilemember) - Update a user persona in launch profile membership.
* [UpdateStreamingImage](#updatestreamingimage) - Update streaming image.
* [UpdateStudio](#updatestudio) - <p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>
* [UpdateStudioComponent](#updatestudiocomponent) - Updates a studio component resource.

## AcceptEulas

Accept EULAs.

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
    res, err := s.SDK.AcceptEulas(ctx, operations.AcceptEulasRequest{
        RequestBody: operations.AcceptEulasRequestBody{
            EulaIds: []string{
                "debitis",
                "ipsa",
            },
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzClientToken: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        StudioID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptEulasResponse != nil {
        // handle response
    }
}
```

## CreateLaunchProfile

Create a launch profile.

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
    res, err := s.SDK.CreateLaunchProfile(ctx, operations.CreateLaunchProfileRequest{
        RequestBody: operations.CreateLaunchProfileRequestBody{
            Description: sdk.String("nisi"),
            Ec2SubnetIds: []string{
                "temporibus",
                "ab",
                "quis",
                "veritatis",
            },
            LaunchProfileProtocolVersions: []string{
                "perferendis",
                "ipsam",
                "repellendus",
            },
            Name: "sapiente",
            StreamConfiguration: operations.CreateLaunchProfileRequestBodyStreamConfiguration{
                AutomaticTerminationMode: shared.AutomaticTerminationModeEnumActivated.ToPointer(),
                ClipboardMode: shared.StreamingClipboardModeEnumEnabled.ToPointer(),
                Ec2InstanceTypes: []shared.StreamingInstanceTypeEnum{
                    shared.StreamingInstanceTypeEnumG58xlarge,
                    shared.StreamingInstanceTypeEnumG516xlarge,
                    shared.StreamingInstanceTypeEnumG34xlarge,
                    shared.StreamingInstanceTypeEnumG54xlarge,
                },
                MaxSessionLengthInMinutes: sdk.Int64(800911),
                MaxStoppedSessionLengthInMinutes: sdk.Int64(461479),
                SessionBackup: &shared.StreamConfigurationSessionBackup{
                    MaxBackupsToRetain: sdk.Int64(520478),
                    Mode: shared.SessionBackupModeEnumDeactivated.ToPointer(),
                },
                SessionPersistenceMode: shared.SessionPersistenceModeEnumActivated.ToPointer(),
                SessionStorage: &shared.StreamConfigurationSessionStorage{
                    Mode: []shared.StreamingSessionStorageModeEnum{
                        shared.StreamingSessionStorageModeEnumUpload,
                    },
                    Root: &shared.StreamingSessionStorageRoot{
                        Linux: sdk.String("nam"),
                        Windows: sdk.String("officia"),
                    },
                },
                StreamingImageIds: []string{
                    "fugit",
                    "deleniti",
                    "hic",
                },
                VolumeConfiguration: &shared.VolumeConfiguration{
                    Iops: sdk.Int64(758616),
                    Size: sdk.Int64(521848),
                    Throughput: sdk.Int64(105907),
                },
            },
            StudioComponentIds: []string{
                "molestiae",
                "modi",
            },
            Tags: map[string]string{
                "impedit": "cum",
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzClientToken: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("sed"),
        StudioID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLaunchProfileResponse != nil {
        // handle response
    }
}
```

## CreateStreamingImage

Creates a streaming image resource in a studio.

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
    res, err := s.SDK.CreateStreamingImage(ctx, operations.CreateStreamingImageRequest{
        RequestBody: operations.CreateStreamingImageRequestBody{
            Description: sdk.String("dolor"),
            Ec2ImageID: "natus",
            Name: "laboriosam",
            Tags: map[string]string{
                "saepe": "fuga",
                "in": "corporis",
                "iste": "iure",
                "saepe": "quidem",
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzClientToken: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        StudioID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStreamingImageResponse != nil {
        // handle response
    }
}
```

## CreateStreamingSession

<p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in the <code>READY</code> state.</p>

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
    res, err := s.SDK.CreateStreamingSession(ctx, operations.CreateStreamingSessionRequest{
        RequestBody: operations.CreateStreamingSessionRequestBody{
            Ec2InstanceType: operations.CreateStreamingSessionRequestBodyEc2InstanceTypeEnumG4dn2xlarge.ToPointer(),
            LaunchProfileID: "nobis",
            OwnedBy: sdk.String("enim"),
            StreamingImageID: sdk.String("omnis"),
            Tags: map[string]string{
                "minima": "excepturi",
                "accusantium": "iure",
            },
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzClientToken: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        StudioID: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStreamingSessionResponse != nil {
        // handle response
    }
}
```

## CreateStreamingSessionStream

<p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in the <code>READY</code> state.</p>

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
    res, err := s.SDK.CreateStreamingSessionStream(ctx, operations.CreateStreamingSessionStreamRequest{
        RequestBody: operations.CreateStreamingSessionStreamRequestBody{
            ExpirationInSeconds: sdk.Int64(653108),
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzClientToken: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("quia"),
        SessionID: "quis",
        StudioID: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStreamingSessionStreamResponse != nil {
        // handle response
    }
}
```

## CreateStudio

<p>Create a new studio.</p> <p>When creating a studio, two IAM roles must be provided: the admin role and the user role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p> <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy attached for the portal to function properly.</p> <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed policy attached for the portal to function properly.</p> <p>You may optionally specify a KMS key in the <code>StudioEncryptionConfiguration</code>.</p> <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an KMS key. By default, this key is owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key when calling <code>CreateStudio</code> to encrypt this data using a key you own and manage.</p> <p>When providing an KMS key during studio creation, Nimble Studio creates KMS grants in your account to provide your studio user and admin roles access to these KMS keys.</p> <p>If you delete this grant, the studio will no longer be accessible to your portal users.</p> <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>

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
    res, err := s.SDK.CreateStudio(ctx, operations.CreateStudioRequest{
        RequestBody: operations.CreateStudioRequestBody{
            AdminRoleArn: "laborum",
            DisplayName: "animi",
            StudioEncryptionConfiguration: &operations.CreateStudioRequestBodyStudioEncryptionConfiguration{
                KeyArn: sdk.String("enim"),
                KeyType: shared.StudioEncryptionConfigurationKeyTypeEnumAwsOwnedKey.ToPointer(),
            },
            StudioName: "quo",
            Tags: map[string]string{
                "tenetur": "ipsam",
            },
            UserRoleArn: "id",
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzClientToken: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStudioResponse != nil {
        // handle response
    }
}
```

## CreateStudioComponent

Creates a studio component resource.

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
    res, err := s.SDK.CreateStudioComponent(ctx, operations.CreateStudioComponentRequest{
        RequestBody: operations.CreateStudioComponentRequestBody{
            Configuration: &operations.CreateStudioComponentRequestBodyConfiguration{
                ActiveDirectoryConfiguration: &shared.ActiveDirectoryConfiguration{
                    ComputerAttributes: []shared.ActiveDirectoryComputerAttribute{
                        shared.ActiveDirectoryComputerAttribute{
                            Name: sdk.String("Jessie Langosh V"),
                            Value: sdk.String("voluptate"),
                        },
                        shared.ActiveDirectoryComputerAttribute{
                            Name: sdk.String("Thomas Batz"),
                            Value: sdk.String("maiores"),
                        },
                        shared.ActiveDirectoryComputerAttribute{
                            Name: sdk.String("Stacy Gulgowski MD"),
                            Value: sdk.String("enim"),
                        },
                        shared.ActiveDirectoryComputerAttribute{
                            Name: sdk.String("Mrs. Leslie VonRueden"),
                            Value: sdk.String("molestias"),
                        },
                    },
                    DirectoryID: sdk.String("excepturi"),
                    OrganizationalUnitDistinguishedName: sdk.String("pariatur"),
                },
                ComputeFarmConfiguration: &shared.ComputeFarmConfiguration{
                    ActiveDirectoryUser: sdk.String("modi"),
                    Endpoint: sdk.String("praesentium"),
                },
                LicenseServiceConfiguration: &shared.LicenseServiceConfiguration{
                    Endpoint: sdk.String("rem"),
                },
                SharedFileSystemConfiguration: &shared.SharedFileSystemConfiguration{
                    Endpoint: sdk.String("voluptates"),
                    FileSystemID: sdk.String("quasi"),
                    LinuxMountPoint: sdk.String("repudiandae"),
                    ShareName: sdk.String("sint"),
                    WindowsMountDrive: sdk.String("veritatis"),
                },
            },
            Description: sdk.String("itaque"),
            Ec2SecurityGroupIds: []string{
                "enim",
                "consequatur",
            },
            InitializationScripts: []shared.StudioComponentInitializationScript{
                shared.StudioComponentInitializationScript{
                    LaunchProfileProtocolVersion: sdk.String("quibusdam"),
                    Platform: shared.LaunchProfilePlatformEnumLinux.ToPointer(),
                    RunContext: shared.StudioComponentInitializationScriptRunContextEnumUserInitialization.ToPointer(),
                    Script: sdk.String("distinctio"),
                },
                shared.StudioComponentInitializationScript{
                    LaunchProfileProtocolVersion: sdk.String("quibusdam"),
                    Platform: shared.LaunchProfilePlatformEnumLinux.ToPointer(),
                    RunContext: shared.StudioComponentInitializationScriptRunContextEnumSystemInitialization.ToPointer(),
                    Script: sdk.String("qui"),
                },
                shared.StudioComponentInitializationScript{
                    LaunchProfileProtocolVersion: sdk.String("aliquid"),
                    Platform: shared.LaunchProfilePlatformEnumWindows.ToPointer(),
                    RunContext: shared.StudioComponentInitializationScriptRunContextEnumUserInitialization.ToPointer(),
                    Script: sdk.String("perferendis"),
                },
            },
            Name: "magni",
            RuntimeRoleArn: sdk.String("assumenda"),
            ScriptParameters: []shared.ScriptParameterKeyValue{
                shared.ScriptParameterKeyValue{
                    Key: sdk.String("alias"),
                    Value: sdk.String("fugit"),
                },
                shared.ScriptParameterKeyValue{
                    Key: sdk.String("dolorum"),
                    Value: sdk.String("excepturi"),
                },
            },
            SecureInitializationRoleArn: sdk.String("tempora"),
            Subtype: operations.CreateStudioComponentRequestBodySubtypeEnumAmazonFsxForLustre.ToPointer(),
            Tags: map[string]string{
                "labore": "delectus",
                "eum": "non",
                "eligendi": "sint",
            },
            Type: operations.CreateStudioComponentRequestBodyTypeEnumSharedFileSystem,
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzClientToken: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        StudioID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStudioComponentResponse != nil {
        // handle response
    }
}
```

## DeleteLaunchProfile

Permanently delete a launch profile.

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
    res, err := s.SDK.DeleteLaunchProfile(ctx, operations.DeleteLaunchProfileRequest{
        XAmzAlgorithm: sdk.String("in"),
        XAmzClientToken: sdk.String("illum"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("facere"),
        LaunchProfileID: "ea",
        StudioID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLaunchProfileResponse != nil {
        // handle response
    }
}
```

## DeleteLaunchProfileMember

Delete a user from launch profile membership.

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
    res, err := s.SDK.DeleteLaunchProfileMember(ctx, operations.DeleteLaunchProfileMemberRequest{
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzClientToken: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("quidem"),
        LaunchProfileID: "provident",
        PrincipalID: "nam",
        StudioID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLaunchProfileMemberResponse != nil {
        // handle response
    }
}
```

## DeleteStreamingImage

Delete streaming image.

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
    res, err := s.SDK.DeleteStreamingImage(ctx, operations.DeleteStreamingImageRequest{
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzClientToken: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("natus"),
        StreamingImageID: "omnis",
        StudioID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteStreamingImageResponse != nil {
        // handle response
    }
}
```

## DeleteStreamingSession

<p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a <code>DELETED</code> state.</p> <p>A streaming session will count against your streaming session quota until it is marked <code>DELETED</code>.</p>

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
    res, err := s.SDK.DeleteStreamingSession(ctx, operations.DeleteStreamingSessionRequest{
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzClientToken: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        SessionID: "natus",
        StudioID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteStreamingSessionResponse != nil {
        // handle response
    }
}
```

## DeleteStudio

Delete a studio resource.

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
    res, err := s.SDK.DeleteStudio(ctx, operations.DeleteStudioRequest{
        XAmzAlgorithm: sdk.String("eum"),
        XAmzClientToken: sdk.String("vero"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("ullam"),
        StudioID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteStudioResponse != nil {
        // handle response
    }
}
```

## DeleteStudioComponent

Deletes a studio component resource.

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
    res, err := s.SDK.DeleteStudioComponent(ctx, operations.DeleteStudioComponentRequest{
        XAmzAlgorithm: sdk.String("quos"),
        XAmzClientToken: sdk.String("sint"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("eum"),
        StudioComponentID: "dolor",
        StudioID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteStudioComponentResponse != nil {
        // handle response
    }
}
```

## DeleteStudioMember

Delete a user from studio membership.

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
    res, err := s.SDK.DeleteStudioMember(ctx, operations.DeleteStudioMemberRequest{
        XAmzAlgorithm: sdk.String("odit"),
        XAmzClientToken: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("maxime"),
        PrincipalID: "deleniti",
        StudioID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteStudioMemberResponse != nil {
        // handle response
    }
}
```

## GetEula

Get EULA.

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
    res, err := s.SDK.GetEula(ctx, operations.GetEulaRequest{
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("nihil"),
        EulaID: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEulaResponse != nil {
        // handle response
    }
}
```

## GetLaunchProfile

Get a launch profile.

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
    res, err := s.SDK.GetLaunchProfile(ctx, operations.GetLaunchProfileRequest{
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        LaunchProfileID: "natus",
        StudioID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLaunchProfileResponse != nil {
        // handle response
    }
}
```

## GetLaunchProfileDetails

Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.

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
    res, err := s.SDK.GetLaunchProfileDetails(ctx, operations.GetLaunchProfileDetailsRequest{
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        LaunchProfileID: "odit",
        StudioID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLaunchProfileDetailsResponse != nil {
        // handle response
    }
}
```

## GetLaunchProfileInitialization

Get a launch profile initialization.

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
    res, err := s.SDK.GetLaunchProfileInitialization(ctx, operations.GetLaunchProfileInitializationRequest{
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("autem"),
        LaunchProfileID: "nam",
        LaunchProfileProtocolVersions: []string{
            "pariatur",
        },
        LaunchPurpose: "nemo",
        Platform: "voluptatibus",
        StudioID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLaunchProfileInitializationResponse != nil {
        // handle response
    }
}
```

## GetLaunchProfileMember

Get a user persona in launch profile membership.

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
    res, err := s.SDK.GetLaunchProfileMember(ctx, operations.GetLaunchProfileMemberRequest{
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("libero"),
        LaunchProfileID: "nobis",
        PrincipalID: "dolores",
        StudioID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLaunchProfileMemberResponse != nil {
        // handle response
    }
}
```

## GetStreamingImage

Get streaming image.

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
    res, err := s.SDK.GetStreamingImage(ctx, operations.GetStreamingImageRequest{
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        StreamingImageID: "dolores",
        StudioID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStreamingImageResponse != nil {
        // handle response
    }
}
```

## GetStreamingSession

<p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>

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
    res, err := s.SDK.GetStreamingSession(ctx, operations.GetStreamingSessionRequest{
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("omnis"),
        SessionID: "facilis",
        StudioID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStreamingSessionResponse != nil {
        // handle response
    }
}
```

## GetStreamingSessionBackup

<p>Gets <code>StreamingSessionBackup</code> resource.</p> <p>Invoke this operation to poll for a streaming session backup while stopping a streaming session.</p>

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
    res, err := s.SDK.GetStreamingSessionBackup(ctx, operations.GetStreamingSessionBackupRequest{
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        BackupID: "rerum",
        StudioID: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStreamingSessionBackupResponse != nil {
        // handle response
    }
}
```

## GetStreamingSessionStream

<p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking <code>CreateStreamingSessionStream</code>.</p> <p>After the <code>StreamingSessionStream</code> changes to the <code>READY</code> state, the url property will contain a stream to be used with the DCV streaming client.</p>

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
    res, err := s.SDK.GetStreamingSessionStream(ctx, operations.GetStreamingSessionStreamRequest{
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        SessionID: "provident",
        StreamID: "nobis",
        StudioID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStreamingSessionStreamResponse != nil {
        // handle response
    }
}
```

## GetStudio

Get a studio resource.

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
    res, err := s.SDK.GetStudio(ctx, operations.GetStudioRequest{
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolor"),
        StudioID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStudioResponse != nil {
        // handle response
    }
}
```

## GetStudioComponent

Gets a studio component resource.

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
    res, err := s.SDK.GetStudioComponent(ctx, operations.GetStudioComponentRequest{
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        StudioComponentID: "amet",
        StudioID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStudioComponentResponse != nil {
        // handle response
    }
}
```

## GetStudioMember

Get a user's membership in a studio.

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
    res, err := s.SDK.GetStudioMember(ctx, operations.GetStudioMemberRequest{
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        PrincipalID: "accusamus",
        StudioID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStudioMemberResponse != nil {
        // handle response
    }
}
```

## ListEulaAcceptances

List EULA acceptances.

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
    res, err := s.SDK.ListEulaAcceptances(ctx, operations.ListEulaAcceptancesRequest{
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        EulaIds: []string{
            "soluta",
        },
        NextToken: sdk.String("dolorum"),
        StudioID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEulaAcceptancesResponse != nil {
        // handle response
    }
}
```

## ListEulas

List EULAs.

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
    res, err := s.SDK.ListEulas(ctx, operations.ListEulasRequest{
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        EulaIds: []string{
            "ipsum",
            "voluptate",
        },
        NextToken: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEulasResponse != nil {
        // handle response
    }
}
```

## ListLaunchProfileMembers

Get all users in a given launch profile membership.

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
    res, err := s.SDK.ListLaunchProfileMembers(ctx, operations.ListLaunchProfileMembersRequest{
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        LaunchProfileID: "ad",
        MaxResults: sdk.Int64(904425),
        NextToken: sdk.String("suscipit"),
        StudioID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLaunchProfileMembersResponse != nil {
        // handle response
    }
}
```

## ListLaunchProfiles

List all the launch profiles a studio.

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
    res, err := s.SDK.ListLaunchProfiles(ctx, operations.ListLaunchProfilesRequest{
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("at"),
        MaxResults: sdk.Int64(311860),
        NextToken: sdk.String("tempora"),
        PrincipalID: sdk.String("vel"),
        States: []shared.LaunchProfileStateEnum{
            shared.LaunchProfileStateEnumUpdateFailed,
            shared.LaunchProfileStateEnumReady,
            shared.LaunchProfileStateEnumDeleteFailed,
            shared.LaunchProfileStateEnumUpdateFailed,
        },
        StudioID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLaunchProfilesResponse != nil {
        // handle response
    }
}
```

## ListStreamingImages

<p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by Amazon Web Services, as well as streaming images that you have created in your studio.</p>

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
    res, err := s.SDK.ListStreamingImages(ctx, operations.ListStreamingImagesRequest{
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("tempore"),
        NextToken: sdk.String("accusamus"),
        Owner: sdk.String("numquam"),
        StudioID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStreamingImagesResponse != nil {
        // handle response
    }
}
```

## ListStreamingSessionBackups

Lists the backups of a streaming session in a studio.

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
    res, err := s.SDK.ListStreamingSessionBackups(ctx, operations.ListStreamingSessionBackupsRequest{
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("neque"),
        NextToken: sdk.String("sed"),
        OwnedBy: sdk.String("vel"),
        StudioID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStreamingSessionBackupsResponse != nil {
        // handle response
    }
}
```

## ListStreamingSessions

Lists the streaming sessions in a studio.

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
    res, err := s.SDK.ListStreamingSessions(ctx, operations.ListStreamingSessionsRequest{
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        CreatedBy: sdk.String("maxime"),
        NextToken: sdk.String("pariatur"),
        OwnedBy: sdk.String("soluta"),
        SessionIds: sdk.String("dicta"),
        StudioID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStreamingSessionsResponse != nil {
        // handle response
    }
}
```

## ListStudioComponents

Lists the <code>StudioComponents</code> in a studio.

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
    res, err := s.SDK.ListStudioComponents(ctx, operations.ListStudioComponentsRequest{
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        MaxResults: sdk.Int64(463150),
        NextToken: sdk.String("molestias"),
        States: []shared.StudioComponentStateEnum{
            shared.StudioComponentStateEnumReady,
            shared.StudioComponentStateEnumReady,
            shared.StudioComponentStateEnumReady,
            shared.StudioComponentStateEnumReady,
        },
        StudioID: "odio",
        Types: []shared.StudioComponentTypeEnum{
            shared.StudioComponentTypeEnumSharedFileSystem,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStudioComponentsResponse != nil {
        // handle response
    }
}
```

## ListStudioMembers

<p>Get all users in a given studio membership.</p> <note> <p> <code>ListStudioMembers</code> only returns admin members.</p> </note>

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
    res, err := s.SDK.ListStudioMembers(ctx, operations.ListStudioMembersRequest{
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("et"),
        MaxResults: sdk.Int64(903720),
        NextToken: sdk.String("ipsum"),
        StudioID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStudioMembersResponse != nil {
        // handle response
    }
}
```

## ListStudios

List studios in your Amazon Web Services accounts in the requested Amazon Web Services Region.

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
    res, err := s.SDK.ListStudios(ctx, operations.ListStudiosRequest{
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        NextToken: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStudiosResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

<p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p> <p>This operation supports ARNs for all resource types in Nimble Studio that support tags, including studio, studio component, launch profile, streaming image, and streaming session. All resources that can be tagged will contain an ARN property, so you do not have to create this ARN yourself.</p>

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quas"),
        ResourceArn: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutLaunchProfileMembers

Add/update users with given persona to launch profile membership.

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
    res, err := s.SDK.PutLaunchProfileMembers(ctx, operations.PutLaunchProfileMembersRequest{
        RequestBody: operations.PutLaunchProfileMembersRequestBody{
            IdentityStoreID: "consequatur",
            Members: []shared.NewLaunchProfileMember{
                shared.NewLaunchProfileMember{
                    Persona: shared.LaunchProfilePersonaEnumUser,
                    PrincipalID: "repellendus",
                },
                shared.NewLaunchProfileMember{
                    Persona: shared.LaunchProfilePersonaEnumUser,
                    PrincipalID: "porro",
                },
                shared.NewLaunchProfileMember{
                    Persona: shared.LaunchProfilePersonaEnumUser,
                    PrincipalID: "doloribus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzClientToken: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        LaunchProfileID: "voluptatibus",
        StudioID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutLaunchProfileMembersResponse != nil {
        // handle response
    }
}
```

## PutStudioMembers

Add/update users with given persona to studio membership.

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
    res, err := s.SDK.PutStudioMembers(ctx, operations.PutStudioMembersRequest{
        RequestBody: operations.PutStudioMembersRequestBody{
            IdentityStoreID: "vero",
            Members: []shared.NewStudioMember{
                shared.NewStudioMember{
                    Persona: shared.StudioPersonaEnumAdministrator,
                    PrincipalID: "quis",
                },
                shared.NewStudioMember{
                    Persona: shared.StudioPersonaEnumAdministrator,
                    PrincipalID: "ipsum",
                },
                shared.NewStudioMember{
                    Persona: shared.StudioPersonaEnumAdministrator,
                    PrincipalID: "delectus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzClientToken: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quod"),
        StudioID: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutStudioMembersResponse != nil {
        // handle response
    }
}
```

## StartStreamingSession

Transitions sessions from the <code>STOPPED</code> state into the <code>READY</code> state. The <code>START_IN_PROGRESS</code> state is the intermediate state between the <code>STOPPED</code> and <code>READY</code> states.

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
    res, err := s.SDK.StartStreamingSession(ctx, operations.StartStreamingSessionRequest{
        RequestBody: operations.StartStreamingSessionRequestBody{
            BackupID: sdk.String("similique"),
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzClientToken: sdk.String("vero"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("natus"),
        SessionID: "impedit",
        StudioID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartStreamingSessionResponse != nil {
        // handle response
    }
}
```

## StartStudioSSOConfigurationRepair

<p>Repairs the IAM Identity Center configuration for a given studio.</p> <p>If the studio has a valid IAM Identity Center configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid IAM Identity Center configuration currently associated with it, then a new IAM Identity Center application is created for the studio and the studio is changed to the <code>READY</code> state.</p> <p>After the IAM Identity Center application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>

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
    res, err := s.SDK.StartStudioSSOConfigurationRepair(ctx, operations.StartStudioSSOConfigurationRepairRequest{
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzClientToken: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("iusto"),
        StudioID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartStudioSSOConfigurationRepairResponse != nil {
        // handle response
    }
}
```

## StopStreamingSession

Transitions sessions from the <code>READY</code> state into the <code>STOPPED</code> state. The <code>STOP_IN_PROGRESS</code> state is the intermediate state between the <code>READY</code> and <code>STOPPED</code> states.

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
    res, err := s.SDK.StopStreamingSession(ctx, operations.StopStreamingSessionRequest{
        RequestBody: operations.StopStreamingSessionRequestBody{
            VolumeRetentionMode: operations.StopStreamingSessionRequestBodyVolumeRetentionModeEnumRetain.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzClientToken: sdk.String("officia"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("possimus"),
        SessionID: "magnam",
        StudioID: "ratione",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopStreamingSessionResponse != nil {
        // handle response
    }
}
```

## TagResource

Creates tags for a resource, given its ARN.

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "laudantium": "dicta",
                "dolor": "maiores",
            },
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        ResourceArn: "quisquam",
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

Deletes the tags for a resource.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("inventore"),
        ResourceArn: "magnam",
        TagKeys: []string{
            "quo",
            "consectetur",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateLaunchProfile

Update a launch profile.

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
    res, err := s.SDK.UpdateLaunchProfile(ctx, operations.UpdateLaunchProfileRequest{
        RequestBody: operations.UpdateLaunchProfileRequestBody{
            Description: sdk.String("recusandae"),
            LaunchProfileProtocolVersions: []string{
                "minima",
            },
            Name: sdk.String("eaque"),
            StreamConfiguration: &operations.UpdateLaunchProfileRequestBodyStreamConfiguration{
                AutomaticTerminationMode: shared.AutomaticTerminationModeEnumActivated.ToPointer(),
                ClipboardMode: shared.StreamingClipboardModeEnumDisabled.ToPointer(),
                Ec2InstanceTypes: []shared.StreamingInstanceTypeEnum{
                    shared.StreamingInstanceTypeEnumG4dnXlarge,
                },
                MaxSessionLengthInMinutes: sdk.Int64(533466),
                MaxStoppedSessionLengthInMinutes: sdk.Int64(770581),
                SessionBackup: &shared.StreamConfigurationSessionBackup{
                    MaxBackupsToRetain: sdk.Int64(304582),
                    Mode: shared.SessionBackupModeEnumAutomatic.ToPointer(),
                },
                SessionPersistenceMode: shared.SessionPersistenceModeEnumActivated.ToPointer(),
                SessionStorage: &shared.StreamConfigurationSessionStorage{
                    Mode: []shared.StreamingSessionStorageModeEnum{
                        shared.StreamingSessionStorageModeEnumUpload,
                    },
                    Root: &shared.StreamingSessionStorageRoot{
                        Linux: sdk.String("non"),
                        Windows: sdk.String("et"),
                    },
                },
                StreamingImageIds: []string{
                    "laborum",
                    "placeat",
                    "velit",
                },
                VolumeConfiguration: &shared.VolumeConfiguration{
                    Iops: sdk.Int64(432148),
                    Size: sdk.Int64(420539),
                    Throughput: sdk.Int64(752135),
                },
            },
            StudioComponentIds: []string{
                "assumenda",
                "nulla",
                "voluptas",
            },
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzClientToken: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        LaunchProfileID: "magnam",
        StudioID: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLaunchProfileResponse != nil {
        // handle response
    }
}
```

## UpdateLaunchProfileMember

Update a user persona in launch profile membership.

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
    res, err := s.SDK.UpdateLaunchProfileMember(ctx, operations.UpdateLaunchProfileMemberRequest{
        RequestBody: operations.UpdateLaunchProfileMemberRequestBody{
            Persona: operations.UpdateLaunchProfileMemberRequestBodyPersonaEnumUser,
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzClientToken: sdk.String("esse"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        LaunchProfileID: "ut",
        PrincipalID: "eum",
        StudioID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLaunchProfileMemberResponse != nil {
        // handle response
    }
}
```

## UpdateStreamingImage

Update streaming image.

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
    res, err := s.SDK.UpdateStreamingImage(ctx, operations.UpdateStreamingImageRequest{
        RequestBody: operations.UpdateStreamingImageRequestBody{
            Description: sdk.String("assumenda"),
            Name: sdk.String("eos"),
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzClientToken: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("quo"),
        StreamingImageID: "illum",
        StudioID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateStreamingImageResponse != nil {
        // handle response
    }
}
```

## UpdateStudio

<p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>

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
    res, err := s.SDK.UpdateStudio(ctx, operations.UpdateStudioRequest{
        RequestBody: operations.UpdateStudioRequestBody{
            AdminRoleArn: sdk.String("fuga"),
            DisplayName: sdk.String("eius"),
            UserRoleArn: sdk.String("eos"),
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzClientToken: sdk.String("ab"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        StudioID: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateStudioResponse != nil {
        // handle response
    }
}
```

## UpdateStudioComponent

Updates a studio component resource.

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
    res, err := s.SDK.UpdateStudioComponent(ctx, operations.UpdateStudioComponentRequest{
        RequestBody: operations.UpdateStudioComponentRequestBody{
            Configuration: &operations.UpdateStudioComponentRequestBodyConfiguration{
                ActiveDirectoryConfiguration: &shared.ActiveDirectoryConfiguration{
                    ComputerAttributes: []shared.ActiveDirectoryComputerAttribute{
                        shared.ActiveDirectoryComputerAttribute{
                            Name: sdk.String("Sophie Bayer"),
                            Value: sdk.String("dignissimos"),
                        },
                        shared.ActiveDirectoryComputerAttribute{
                            Name: sdk.String("Jackie Leannon"),
                            Value: sdk.String("odio"),
                        },
                        shared.ActiveDirectoryComputerAttribute{
                            Name: sdk.String("Leslie Williamson"),
                            Value: sdk.String("molestiae"),
                        },
                        shared.ActiveDirectoryComputerAttribute{
                            Name: sdk.String("Robyn Keeling"),
                            Value: sdk.String("consequuntur"),
                        },
                    },
                    DirectoryID: sdk.String("deleniti"),
                    OrganizationalUnitDistinguishedName: sdk.String("fugit"),
                },
                ComputeFarmConfiguration: &shared.ComputeFarmConfiguration{
                    ActiveDirectoryUser: sdk.String("fuga"),
                    Endpoint: sdk.String("mollitia"),
                },
                LicenseServiceConfiguration: &shared.LicenseServiceConfiguration{
                    Endpoint: sdk.String("incidunt"),
                },
                SharedFileSystemConfiguration: &shared.SharedFileSystemConfiguration{
                    Endpoint: sdk.String("atque"),
                    FileSystemID: sdk.String("explicabo"),
                    LinuxMountPoint: sdk.String("minima"),
                    ShareName: sdk.String("nisi"),
                    WindowsMountDrive: sdk.String("fugit"),
                },
            },
            Description: sdk.String("sapiente"),
            Ec2SecurityGroupIds: []string{
                "ratione",
            },
            InitializationScripts: []shared.StudioComponentInitializationScript{
                shared.StudioComponentInitializationScript{
                    LaunchProfileProtocolVersion: sdk.String("saepe"),
                    Platform: shared.LaunchProfilePlatformEnumWindows.ToPointer(),
                    RunContext: shared.StudioComponentInitializationScriptRunContextEnumUserInitialization.ToPointer(),
                    Script: sdk.String("et"),
                },
            },
            Name: sdk.String("esse"),
            RuntimeRoleArn: sdk.String("eveniet"),
            ScriptParameters: []shared.ScriptParameterKeyValue{
                shared.ScriptParameterKeyValue{
                    Key: sdk.String("veritatis"),
                    Value: sdk.String("esse"),
                },
                shared.ScriptParameterKeyValue{
                    Key: sdk.String("quod"),
                    Value: sdk.String("nam"),
                },
                shared.ScriptParameterKeyValue{
                    Key: sdk.String("vero"),
                    Value: sdk.String("aliquid"),
                },
                shared.ScriptParameterKeyValue{
                    Key: sdk.String("quasi"),
                    Value: sdk.String("saepe"),
                },
            },
            SecureInitializationRoleArn: sdk.String("vel"),
            Subtype: operations.UpdateStudioComponentRequestBodySubtypeEnumAmazonFsxForLustre.ToPointer(),
            Type: operations.UpdateStudioComponentRequestBodyTypeEnumComputeFarm.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzClientToken: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("tempore"),
        StudioComponentID: "adipisci",
        StudioID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateStudioComponentResponse != nil {
        // handle response
    }
}
```
