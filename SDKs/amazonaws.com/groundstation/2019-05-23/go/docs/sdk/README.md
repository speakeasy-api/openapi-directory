# SDK

## Overview

Welcome to the AWS Ground Station API Reference. AWS Ground Station is a fully managed service that enables you to control satellite communications, downlink and process satellite data, and scale your satellite operations efficiently and cost-effectively without having to build or manage your own ground station infrastructure.

Amazon Web Services documentation
<https://docs.aws.amazon.com/groundstation/>
### Available Operations

* [CancelContact](#cancelcontact) - Cancels a contact with a specified contact ID.
* [CreateConfig](#createconfig) - <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p> <p>Only one type of <code>configData</code> can be specified.</p>
* [CreateDataflowEndpointGroup](#createdataflowendpointgroup) - <p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p> <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code> to specify which endpoints to use during a contact.</p> <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code> must match a <code>DataflowEndpoint</code> in the same group.</p>
* [CreateEphemeris](#createephemeris) - Creates an Ephemeris with the specified <code>EphemerisData</code>.
* [CreateMissionProfile](#createmissionprofile) - <p>Creates a mission profile.</p> <p> <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
* [DeleteConfig](#deleteconfig) - Deletes a <code>Config</code>.
* [DeleteDataflowEndpointGroup](#deletedataflowendpointgroup) - Deletes a dataflow endpoint group.
* [DeleteEphemeris](#deleteephemeris) - Deletes an ephemeris
* [DeleteMissionProfile](#deletemissionprofile) - Deletes a mission profile.
* [DescribeContact](#describecontact) - Describes an existing contact.
* [DescribeEphemeris](#describeephemeris) - Describes an existing ephemeris.
* [GetAgentConfiguration](#getagentconfiguration) - <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Gets the latest configuration information for a registered agent.</p>
* [GetConfig](#getconfig) - <p>Returns <code>Config</code> information.</p> <p>Only one <code>Config</code> response can be returned.</p>
* [GetDataflowEndpointGroup](#getdataflowendpointgroup) - Returns the dataflow endpoint group.
* [GetMinuteUsage](#getminuteusage) - Returns the number of minutes used by account.
* [GetMissionProfile](#getmissionprofile) - Returns a mission profile.
* [GetSatellite](#getsatellite) - Returns a satellite.
* [ListConfigs](#listconfigs) - Returns a list of <code>Config</code> objects.
* [ListContacts](#listcontacts) - <p>Returns a list of contacts.</p> <p>If <code>statusList</code> contains AVAILABLE, the request must include <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>. </p>
* [ListDataflowEndpointGroups](#listdataflowendpointgroups) - Returns a list of <code>DataflowEndpoint</code> groups.
* [ListEphemerides](#listephemerides) - List existing ephemerides.
* [ListGroundStations](#listgroundstations) - Returns a list of ground stations. 
* [ListMissionProfiles](#listmissionprofiles) - Returns a list of mission profiles.
* [ListSatellites](#listsatellites) - Returns a list of satellites.
* [ListTagsForResource](#listtagsforresource) - Returns a list of tags for a specified resource.
* [RegisterAgent](#registeragent) - <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p> Registers a new agent with AWS Ground Station. </p>
* [ReserveContact](#reservecontact) - Reserves a contact using specified parameters.
* [TagResource](#tagresource) - Assigns a tag to a resource.
* [UntagResource](#untagresource) - Deassigns a resource tag.
* [UpdateAgentStatus](#updateagentstatus) - <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Update the status of the agent.</p>
* [UpdateConfig](#updateconfig) - <p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>
* [UpdateEphemeris](#updateephemeris) - Updates an existing ephemeris
* [UpdateMissionProfile](#updatemissionprofile) - <p>Updates a mission profile.</p> <p>Updating a mission profile will not update the execution parameters for existing future contacts.</p>

## CancelContact

Cancels a contact with a specified contact ID.

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
    res, err := s.SDK.CancelContact(ctx, operations.CancelContactRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("debitis"),
        ContactID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactIDResponse != nil {
        // handle response
    }
}
```

## CreateConfig

<p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p> <p>Only one type of <code>configData</code> can be specified.</p>

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
    res, err := s.SDK.CreateConfig(ctx, operations.CreateConfigRequest{
        RequestBody: operations.CreateConfigRequestBody{
            ConfigData: operations.CreateConfigRequestBodyConfigData{
                AntennaDownlinkConfig: &shared.AntennaDownlinkConfig{
                    SpectrumConfig: shared.SpectrumConfig{
                        Bandwidth: shared.FrequencyBandwidth{
                            Units: shared.BandwidthUnitsEnumKHz,
                            Value: 2726.56,
                        },
                        CenterFrequency: shared.Frequency{
                            Units: shared.FrequencyUnitsEnumMHz,
                            Value: 4776.65,
                        },
                        Polarization: shared.PolarizationEnumRightHand.ToPointer(),
                    },
                },
                AntennaDownlinkDemodDecodeConfig: &shared.AntennaDownlinkDemodDecodeConfig{
                    DecodeConfig: shared.DecodeConfig{
                        UnvalidatedJSON: "placeat",
                    },
                    DemodulationConfig: shared.DemodulationConfig{
                        UnvalidatedJSON: "voluptatum",
                    },
                    SpectrumConfig: shared.SpectrumConfig{
                        Bandwidth: shared.FrequencyBandwidth{
                            Units: shared.BandwidthUnitsEnumMHz,
                            Value: 5680.45,
                        },
                        CenterFrequency: shared.Frequency{
                            Units: shared.FrequencyUnitsEnumMHz,
                            Value: 9255.97,
                        },
                        Polarization: shared.PolarizationEnumRightHand.ToPointer(),
                    },
                },
                AntennaUplinkConfig: &shared.AntennaUplinkConfig{
                    SpectrumConfig: shared.UplinkSpectrumConfig{
                        CenterFrequency: shared.Frequency{
                            Units: shared.FrequencyUnitsEnumGHz,
                            Value: 3373.96,
                        },
                        Polarization: shared.PolarizationEnumLeftHand.ToPointer(),
                    },
                    TargetEirp: shared.Eirp{
                        Units: shared.EirpUnitsEnumDBw,
                        Value: 6481.72,
                    },
                    TransmitDisabled: sdk.Bool(false),
                },
                DataflowEndpointConfig: &shared.DataflowEndpointConfig{
                    DataflowEndpointName: "perferendis",
                    DataflowEndpointRegion: sdk.String("ipsam"),
                },
                S3RecordingConfig: &shared.S3RecordingConfig{
                    BucketArn: "repellendus",
                    Prefix: sdk.String("sapiente"),
                    RoleArn: "quo",
                },
                TrackingConfig: &shared.TrackingConfig{
                    Autotrack: shared.CriticalityEnumPreferred,
                },
                UplinkEchoConfig: &shared.UplinkEchoConfig{
                    AntennaUplinkConfigArn: "at",
                    Enabled: false,
                },
            },
            Name: "Emilio Krajcik",
            Tags: map[string]string{
                "totam": "porro",
                "dolorum": "dicta",
            },
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("optio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigIDResponse != nil {
        // handle response
    }
}
```

## CreateDataflowEndpointGroup

<p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p> <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code> to specify which endpoints to use during a contact.</p> <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code> must match a <code>DataflowEndpoint</code> in the same group.</p>

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
    res, err := s.SDK.CreateDataflowEndpointGroup(ctx, operations.CreateDataflowEndpointGroupRequest{
        RequestBody: operations.CreateDataflowEndpointGroupRequestBody{
            ContactPostPassDurationSeconds: sdk.Int64(521848),
            ContactPrePassDurationSeconds: sdk.Int64(105907),
            EndpointDetails: []shared.EndpointDetails{
                shared.EndpointDetails{
                    AwsGroundStationAgentEndpoint: &shared.AwsGroundStationAgentEndpoint{
                        AgentStatus: shared.AgentStatusEnumFailed.ToPointer(),
                        AuditResults: shared.AuditResultsEnumHealthy.ToPointer(),
                        EgressAddress: shared.ConnectionDetails{
                            Mtu: sdk.Int64(186332),
                            SocketAddress: shared.SocketAddress{
                                Name: "Jonathon Klocko",
                                Port: 135218,
                            },
                        },
                        IngressAddress: shared.RangedConnectionDetails{
                            Mtu: sdk.Int64(18789),
                            SocketAddress: shared.RangedSocketAddress{
                                Name: "Faye Cormier",
                                PortRange: shared.IntegerRange{
                                    Maximum: 616934,
                                    Minimum: 386489,
                                },
                            },
                        },
                        Name: "Elias Parker",
                    },
                    Endpoint: &shared.DataflowEndpoint{
                        Address: &shared.SocketAddress{
                            Name: "Brad Turcotte Jr.",
                            Port: 969810,
                        },
                        Mtu: sdk.Int64(666767),
                        Name: sdk.String("Cameron Dach"),
                        Status: shared.EndpointStatusEnumCreated.ToPointer(),
                    },
                    HealthReasons: []shared.CapabilityHealthReasonEnum{
                        shared.CapabilityHealthReasonEnumNotAuthorizedToCreateSlr,
                        shared.CapabilityHealthReasonEnumInitializingDataplane,
                        shared.CapabilityHealthReasonEnumNotAuthorizedToCreateSlr,
                        shared.CapabilityHealthReasonEnumNotAuthorizedToCreateSlr,
                    },
                    HealthStatus: shared.CapabilityHealthEnumHealthy.ToPointer(),
                    SecurityDetails: &shared.SecurityDetails{
                        RoleArn: "accusantium",
                        SecurityGroupIds: []string{
                            "culpa",
                            "doloribus",
                        },
                        SubnetIds: []string{
                            "architecto",
                            "mollitia",
                            "dolorem",
                            "culpa",
                        },
                    },
                },
                shared.EndpointDetails{
                    AwsGroundStationAgentEndpoint: &shared.AwsGroundStationAgentEndpoint{
                        AgentStatus: shared.AgentStatusEnumSuccess.ToPointer(),
                        AuditResults: shared.AuditResultsEnumUnhealthy.ToPointer(),
                        EgressAddress: shared.ConnectionDetails{
                            Mtu: sdk.Int64(653108),
                            SocketAddress: shared.SocketAddress{
                                Name: "Francis Jerde",
                                Port: 244425,
                            },
                        },
                        IngressAddress: shared.RangedConnectionDetails{
                            Mtu: sdk.Int64(623510),
                            SocketAddress: shared.RangedSocketAddress{
                                Name: "Beatrice Brown",
                                PortRange: shared.IntegerRange{
                                    Maximum: 317202,
                                    Minimum: 138183,
                                },
                            },
                        },
                        Name: "Jimmy Wiegand",
                    },
                    Endpoint: &shared.DataflowEndpoint{
                        Address: &shared.SocketAddress{
                            Name: "Richard Boyer",
                            Port: 673660,
                        },
                        Mtu: sdk.Int64(96098),
                        Name: sdk.String("Jan Thiel"),
                        Status: shared.EndpointStatusEnumFailed.ToPointer(),
                    },
                    HealthReasons: []shared.CapabilityHealthReasonEnum{
                        shared.CapabilityHealthReasonEnumInitializingDataplane,
                    },
                    HealthStatus: shared.CapabilityHealthEnumUnhealthy.ToPointer(),
                    SecurityDetails: &shared.SecurityDetails{
                        RoleArn: "cum",
                        SecurityGroupIds: []string{
                            "doloremque",
                        },
                        SubnetIds: []string{
                            "ut",
                            "maiores",
                        },
                    },
                },
            },
            Tags: map[string]string{
                "corporis": "dolore",
            },
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataflowEndpointGroupIDResponse != nil {
        // handle response
    }
}
```

## CreateEphemeris

Creates an Ephemeris with the specified <code>EphemerisData</code>.

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
    res, err := s.SDK.CreateEphemeris(ctx, operations.CreateEphemerisRequest{
        RequestBody: operations.CreateEphemerisRequestBody{
            Enabled: sdk.Bool(false),
            Ephemeris: &operations.CreateEphemerisRequestBodyEphemeris{
                Oem: &shared.OEMEphemeris{
                    OemData: sdk.String("quae"),
                    S3Object: &shared.S3Object{
                        Bucket: sdk.String("ipsum"),
                        Key: sdk.String("quidem"),
                        Version: sdk.String("molestias"),
                    },
                },
                Tle: &shared.TLEEphemeris{
                    S3Object: &shared.S3Object{
                        Bucket: sdk.String("excepturi"),
                        Key: sdk.String("pariatur"),
                        Version: sdk.String("modi"),
                    },
                    TleData: []shared.TLEData{
                        shared.TLEData{
                            TleLine1: "rem",
                            TleLine2: "voluptates",
                            ValidTimeRange: shared.TimeRange{
                                EndTime: types.MustTimeFromString("2022-01-29T18:39:33.469Z"),
                                StartTime: types.MustTimeFromString("2022-11-01T07:52:08.326Z"),
                            },
                        },
                        shared.TLEData{
                            TleLine1: "itaque",
                            TleLine2: "incidunt",
                            ValidTimeRange: shared.TimeRange{
                                EndTime: types.MustTimeFromString("2022-12-28T14:02:06.064Z"),
                                StartTime: types.MustTimeFromString("2021-04-26T02:10:00.226Z"),
                            },
                        },
                        shared.TLEData{
                            TleLine1: "explicabo",
                            TleLine2: "deserunt",
                            ValidTimeRange: shared.TimeRange{
                                EndTime: types.MustTimeFromString("2021-04-26T18:54:54.344Z"),
                                StartTime: types.MustTimeFromString("2022-09-26T08:57:48.803Z"),
                            },
                        },
                    },
                },
            },
            ExpirationTime: types.MustTimeFromString("2022-08-08T19:05:24.174Z"),
            KmsKeyArn: sdk.String("cupiditate"),
            Name: "Christopher Cummerata",
            Priority: sdk.Int64(4695),
            SatelliteID: "fugit",
            Tags: map[string]string{
                "excepturi": "tempora",
                "facilis": "tempore",
                "labore": "delectus",
            },
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EphemerisIDResponse != nil {
        // handle response
    }
}
```

## CreateMissionProfile

<p>Creates a mission profile.</p> <p> <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>

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
    res, err := s.SDK.CreateMissionProfile(ctx, operations.CreateMissionProfileRequest{
        RequestBody: operations.CreateMissionProfileRequestBody{
            ContactPostPassDurationSeconds: sdk.Int64(572252),
            ContactPrePassDurationSeconds: sdk.Int64(638921),
            DataflowEdges: [][]string{
                []string{
                    "a",
                    "dolorum",
                    "in",
                    "in",
                },
            },
            MinimumViableContactDurationSeconds: 846409,
            Name: "Jean Buckridge",
            StreamsKmsKey: &operations.CreateMissionProfileRequestBodyStreamsKmsKey{
                KmsAliasArn: sdk.String("facere"),
                KmsKeyArn: sdk.String("ea"),
            },
            StreamsKmsRole: sdk.String("aliquid"),
            Tags: map[string]string{
                "accusamus": "non",
                "occaecati": "enim",
                "accusamus": "delectus",
            },
            TrackingConfigArn: "quidem",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MissionProfileIDResponse != nil {
        // handle response
    }
}
```

## DeleteConfig

Deletes a <code>Config</code>.

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
    res, err := s.SDK.DeleteConfig(ctx, operations.DeleteConfigRequest{
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        ConfigID: "nihil",
        ConfigType: operations.DeleteConfigConfigTypeEnumAntennaUplink,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigIDResponse != nil {
        // handle response
    }
}
```

## DeleteDataflowEndpointGroup

Deletes a dataflow endpoint group.

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
    res, err := s.SDK.DeleteDataflowEndpointGroup(ctx, operations.DeleteDataflowEndpointGroupRequest{
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("nobis"),
        DataflowEndpointGroupID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataflowEndpointGroupIDResponse != nil {
        // handle response
    }
}
```

## DeleteEphemeris

Deletes an ephemeris

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
    res, err := s.SDK.DeleteEphemeris(ctx, operations.DeleteEphemerisRequest{
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("ullam"),
        EphemerisID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EphemerisIDResponse != nil {
        // handle response
    }
}
```

## DeleteMissionProfile

Deletes a mission profile.

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
    res, err := s.SDK.DeleteMissionProfile(ctx, operations.DeleteMissionProfileRequest{
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("ad"),
        MissionProfileID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MissionProfileIDResponse != nil {
        // handle response
    }
}
```

## DescribeContact

Describes an existing contact.

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
    res, err := s.SDK.DescribeContact(ctx, operations.DescribeContactRequest{
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        ContactID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeContactResponse != nil {
        // handle response
    }
}
```

## DescribeEphemeris

Describes an existing ephemeris.

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
    res, err := s.SDK.DescribeEphemeris(ctx, operations.DescribeEphemerisRequest{
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("architecto"),
        EphemerisID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEphemerisResponse != nil {
        // handle response
    }
}
```

## GetAgentConfiguration

<note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Gets the latest configuration information for a registered agent.</p>

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
    res, err := s.SDK.GetAgentConfiguration(ctx, operations.GetAgentConfigurationRequest{
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("saepe"),
        AgentID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAgentConfigurationResponse != nil {
        // handle response
    }
}
```

## GetConfig

<p>Returns <code>Config</code> information.</p> <p>Only one <code>Config</code> response can be returned.</p>

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
    res, err := s.SDK.GetConfig(ctx, operations.GetConfigRequest{
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("quo"),
        ConfigID: "illum",
        ConfigType: operations.GetConfigConfigTypeEnumS3Recording,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConfigResponse != nil {
        // handle response
    }
}
```

## GetDataflowEndpointGroup

Returns the dataflow endpoint group.

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
    res, err := s.SDK.GetDataflowEndpointGroup(ctx, operations.GetDataflowEndpointGroupRequest{
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("ab"),
        DataflowEndpointGroupID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDataflowEndpointGroupResponse != nil {
        // handle response
    }
}
```

## GetMinuteUsage

Returns the number of minutes used by account.

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
    res, err := s.SDK.GetMinuteUsage(ctx, operations.GetMinuteUsageRequest{
        RequestBody: operations.GetMinuteUsageRequestBody{
            Month: 697429,
            Year: 373291,
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMinuteUsageResponse != nil {
        // handle response
    }
}
```

## GetMissionProfile

Returns a mission profile.

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
    res, err := s.SDK.GetMissionProfile(ctx, operations.GetMissionProfileRequest{
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("hic"),
        MissionProfileID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMissionProfileResponse != nil {
        // handle response
    }
}
```

## GetSatellite

Returns a satellite.

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
    res, err := s.SDK.GetSatellite(ctx, operations.GetSatelliteRequest{
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("quis"),
        SatelliteID: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSatelliteResponse != nil {
        // handle response
    }
}
```

## ListConfigs

Returns a list of <code>Config</code> objects.

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
    res, err := s.SDK.ListConfigs(ctx, operations.ListConfigsRequest{
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("vero"),
        MaxResults: sdk.Int64(345352),
        NextToken: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConfigsResponse != nil {
        // handle response
    }
}
```

## ListContacts

<p>Returns a list of contacts.</p> <p>If <code>statusList</code> contains AVAILABLE, the request must include <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListContacts(ctx, operations.ListContactsRequest{
        RequestBody: operations.ListContactsRequestBody{
            EndTime: types.MustTimeFromString("2021-03-05T23:06:52.311Z"),
            GroundStation: sdk.String("facilis"),
            MaxResults: sdk.Int64(596656),
            MissionProfileArn: sdk.String("voluptatem"),
            NextToken: sdk.String("porro"),
            SatelliteArn: sdk.String("consequuntur"),
            StartTime: types.MustTimeFromString("2021-10-04T07:41:53.553Z"),
            StatusList: []shared.ContactStatusEnum{
                shared.ContactStatusEnumFailedToSchedule,
            },
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        MaxResults: sdk.String("deleniti"),
        NextToken: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContactsResponse != nil {
        // handle response
    }
}
```

## ListDataflowEndpointGroups

Returns a list of <code>DataflowEndpoint</code> groups.

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
    res, err := s.SDK.ListDataflowEndpointGroups(ctx, operations.ListDataflowEndpointGroupsRequest{
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        MaxResults: sdk.Int64(212390),
        NextToken: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDataflowEndpointGroupsResponse != nil {
        // handle response
    }
}
```

## ListEphemerides

List existing ephemerides.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListEphemerides(ctx, operations.ListEphemeridesRequest{
        RequestBody: operations.ListEphemeridesRequestBody{
            EndTime: types.MustTimeFromString("2022-10-25T00:56:56.568Z"),
            SatelliteID: "ipsum",
            StartTime: types.MustTimeFromString("2021-04-17T07:36:26.867Z"),
            StatusList: []shared.EphemerisStatusEnum{
                shared.EphemerisStatusEnumError,
                shared.EphemerisStatusEnumError,
                shared.EphemerisStatusEnumExpired,
            },
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("iure"),
        MaxResults: sdk.Int64(487838),
        NextToken: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEphemeridesResponse != nil {
        // handle response
    }
}
```

## ListGroundStations

Returns a list of ground stations. 

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
    res, err := s.SDK.ListGroundStations(ctx, operations.ListGroundStationsRequest{
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
        MaxResults: sdk.Int64(24678),
        NextToken: sdk.String("fugiat"),
        SatelliteID: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroundStationsResponse != nil {
        // handle response
    }
}
```

## ListMissionProfiles

Returns a list of mission profiles.

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
    res, err := s.SDK.ListMissionProfiles(ctx, operations.ListMissionProfilesRequest{
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("omnis"),
        MaxResults: sdk.Int64(896672),
        NextToken: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMissionProfilesResponse != nil {
        // handle response
    }
}
```

## ListSatellites

Returns a list of satellites.

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
    res, err := s.SDK.ListSatellites(ctx, operations.ListSatellitesRequest{
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("eius"),
        MaxResults: sdk.Int64(137220),
        NextToken: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSatellitesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Returns a list of tags for a specified resource.

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
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        ResourceArn: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## RegisterAgent

<note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p> Registers a new agent with AWS Ground Station. </p>

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
    res, err := s.SDK.RegisterAgent(ctx, operations.RegisterAgentRequest{
        RequestBody: operations.RegisterAgentRequestBody{
            AgentDetails: operations.RegisterAgentRequestBodyAgentDetails{
                AgentCPUCores: []int64{
                    831049,
                    519711,
                },
                AgentVersion: sdk.String("similique"),
                ComponentVersions: []shared.ComponentVersion{
                    shared.ComponentVersion{
                        ComponentType: "at",
                        Versions: []string{
                            "tempora",
                            "vel",
                        },
                    },
                },
                InstanceID: sdk.String("quod"),
                InstanceType: sdk.String("officiis"),
                ReservedCPUCores: []int64{
                    679880,
                },
            },
            DiscoveryData: operations.RegisterAgentRequestBodyDiscoveryData{
                CapabilityArns: []string{
                    "esse",
                    "harum",
                    "iusto",
                    "ipsum",
                },
                PrivateIPAddresses: []string{
                    "tenetur",
                    "amet",
                    "tempore",
                    "accusamus",
                },
                PublicIPAddresses: []string{
                    "enim",
                    "dolorem",
                },
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterAgentResponse != nil {
        // handle response
    }
}
```

## ReserveContact

Reserves a contact using specified parameters.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ReserveContact(ctx, operations.ReserveContactRequest{
        RequestBody: operations.ReserveContactRequestBody{
            EndTime: types.MustTimeFromString("2022-04-09T09:19:35.125Z"),
            GroundStation: "voluptas",
            MissionProfileArn: "deserunt",
            SatelliteArn: "quam",
            StartTime: types.MustTimeFromString("2022-09-21T15:58:20.330Z"),
            Tags: map[string]string{
                "cupiditate": "maxime",
            },
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactIDResponse != nil {
        // handle response
    }
}
```

## TagResource

Assigns a tag to a resource.

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
                "distinctio": "facilis",
            },
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("fugit"),
        ResourceArn: "magni",
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

Deassigns a resource tag.

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
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("cumque"),
        ResourceArn: "soluta",
        TagKeys: []string{
            "et",
            "saepe",
            "ipsum",
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

## UpdateAgentStatus

<note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Update the status of the agent.</p>

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
    res, err := s.SDK.UpdateAgentStatus(ctx, operations.UpdateAgentStatusRequest{
        RequestBody: operations.UpdateAgentStatusRequestBody{
            AggregateStatus: operations.UpdateAgentStatusRequestBodyAggregateStatus{
                SignatureMap: map[string]bool{
                    "nobis": false,
                },
                Status: shared.AgentStatusEnumActive.ToPointer(),
            },
            ComponentStatuses: []shared.ComponentStatusData{
                shared.ComponentStatusData{
                    BytesReceived: sdk.Int64(584476),
                    BytesSent: sdk.Int64(45614),
                    CapabilityArn: "delectus",
                    ComponentType: "dolorem",
                    DataflowID: "dolore",
                    PacketsDropped: sdk.Int64(286915),
                    Status: shared.AgentStatusEnumSuccess,
                },
                shared.ComponentStatusData{
                    BytesReceived: sdk.Int64(677263),
                    BytesSent: sdk.Int64(100294),
                    CapabilityArn: "quae",
                    ComponentType: "aut",
                    DataflowID: "quas",
                    PacketsDropped: sdk.Int64(929530),
                    Status: shared.AgentStatusEnumSuccess,
                },
                shared.ComponentStatusData{
                    BytesReceived: sdk.Int64(669917),
                    BytesSent: sdk.Int64(833038),
                    CapabilityArn: "porro",
                    ComponentType: "doloribus",
                    DataflowID: "ut",
                    PacketsDropped: sdk.Int64(703495),
                    Status: shared.AgentStatusEnumActive,
                },
            },
            TaskID: "qui",
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("vero"),
        AgentID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAgentStatusResponse != nil {
        // handle response
    }
}
```

## UpdateConfig

<p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>

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
    res, err := s.SDK.UpdateConfig(ctx, operations.UpdateConfigRequest{
        RequestBody: operations.UpdateConfigRequestBody{
            ConfigData: operations.UpdateConfigRequestBodyConfigData{
                AntennaDownlinkConfig: &shared.AntennaDownlinkConfig{
                    SpectrumConfig: shared.SpectrumConfig{
                        Bandwidth: shared.FrequencyBandwidth{
                            Units: shared.BandwidthUnitsEnumMHz,
                            Value: 2184.03,
                        },
                        CenterFrequency: shared.Frequency{
                            Units: shared.FrequencyUnitsEnumKHz,
                            Value: 4551.69,
                        },
                        Polarization: shared.PolarizationEnumLeftHand.ToPointer(),
                    },
                },
                AntennaDownlinkDemodDecodeConfig: &shared.AntennaDownlinkDemodDecodeConfig{
                    DecodeConfig: shared.DecodeConfig{
                        UnvalidatedJSON: "vero",
                    },
                    DemodulationConfig: shared.DemodulationConfig{
                        UnvalidatedJSON: "tenetur",
                    },
                    SpectrumConfig: shared.SpectrumConfig{
                        Bandwidth: shared.FrequencyBandwidth{
                            Units: shared.BandwidthUnitsEnumMHz,
                            Value: 9413.78,
                        },
                        CenterFrequency: shared.Frequency{
                            Units: shared.FrequencyUnitsEnumKHz,
                            Value: 7992.03,
                        },
                        Polarization: shared.PolarizationEnumNone.ToPointer(),
                    },
                },
                AntennaUplinkConfig: &shared.AntennaUplinkConfig{
                    SpectrumConfig: shared.UplinkSpectrumConfig{
                        CenterFrequency: shared.Frequency{
                            Units: shared.FrequencyUnitsEnumMHz,
                            Value: 7085.48,
                        },
                        Polarization: shared.PolarizationEnumRightHand.ToPointer(),
                    },
                    TargetEirp: shared.Eirp{
                        Units: shared.EirpUnitsEnumDBw,
                        Value: 4981.4,
                    },
                    TransmitDisabled: sdk.Bool(false),
                },
                DataflowEndpointConfig: &shared.DataflowEndpointConfig{
                    DataflowEndpointName: "dolore",
                    DataflowEndpointRegion: sdk.String("quibusdam"),
                },
                S3RecordingConfig: &shared.S3RecordingConfig{
                    BucketArn: "illum",
                    Prefix: sdk.String("sequi"),
                    RoleArn: "natus",
                },
                TrackingConfig: &shared.TrackingConfig{
                    Autotrack: shared.CriticalityEnumRequired,
                },
                UplinkEchoConfig: &shared.UplinkEchoConfig{
                    AntennaUplinkConfigArn: "aut",
                    Enabled: false,
                },
            },
            Name: "Greg Stoltenberg",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("officia"),
        ConfigID: "tempora",
        ConfigType: operations.UpdateConfigConfigTypeEnumAntennaUplink,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigIDResponse != nil {
        // handle response
    }
}
```

## UpdateEphemeris

Updates an existing ephemeris

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
    res, err := s.SDK.UpdateEphemeris(ctx, operations.UpdateEphemerisRequest{
        RequestBody: operations.UpdateEphemerisRequestBody{
            Enabled: false,
            Name: sdk.String("Judy Keebler"),
            Priority: sdk.Int64(189848),
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("ex"),
        EphemerisID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EphemerisIDResponse != nil {
        // handle response
    }
}
```

## UpdateMissionProfile

<p>Updates a mission profile.</p> <p>Updating a mission profile will not update the execution parameters for existing future contacts.</p>

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
    res, err := s.SDK.UpdateMissionProfile(ctx, operations.UpdateMissionProfileRequest{
        RequestBody: operations.UpdateMissionProfileRequestBody{
            ContactPostPassDurationSeconds: sdk.Int64(569211),
            ContactPrePassDurationSeconds: sdk.Int64(972920),
            DataflowEdges: [][]string{
                []string{
                    "quisquam",
                    "saepe",
                    "ea",
                    "impedit",
                },
                []string{
                    "veniam",
                    "aliquid",
                },
            },
            MinimumViableContactDurationSeconds: sdk.Int64(81101),
            Name: sdk.String("Rosemary Ryan"),
            StreamsKmsKey: &operations.UpdateMissionProfileRequestBodyStreamsKmsKey{
                KmsAliasArn: sdk.String("aspernatur"),
                KmsKeyArn: sdk.String("minima"),
            },
            StreamsKmsRole: sdk.String("eaque"),
            TrackingConfigArn: sdk.String("a"),
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("fugit"),
        MissionProfileID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MissionProfileIDResponse != nil {
        // handle response
    }
}
```
