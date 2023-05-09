# SDK

## Overview

Welcome to the AWS Ground Station API Reference. AWS Ground Station is a fully managed service that enables you to control satellite communications, downlink and process satellite data, and scale your satellite operations efficiently and cost-effectively without having to build or manage your own ground station infrastructure.

Amazon Web Services documentation
<https://docs.aws.amazon.com/groundstation/>
### Available Operations

* [cancelContact](#cancelcontact) - Cancels a contact with a specified contact ID.
* [createConfig](#createconfig) - <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p> <p>Only one type of <code>configData</code> can be specified.</p>
* [createDataflowEndpointGroup](#createdataflowendpointgroup) - <p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p> <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code> to specify which endpoints to use during a contact.</p> <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code> must match a <code>DataflowEndpoint</code> in the same group.</p>
* [createEphemeris](#createephemeris) - Creates an Ephemeris with the specified <code>EphemerisData</code>.
* [createMissionProfile](#createmissionprofile) - <p>Creates a mission profile.</p> <p> <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
* [deleteConfig](#deleteconfig) - Deletes a <code>Config</code>.
* [deleteDataflowEndpointGroup](#deletedataflowendpointgroup) - Deletes a dataflow endpoint group.
* [deleteEphemeris](#deleteephemeris) - Deletes an ephemeris
* [deleteMissionProfile](#deletemissionprofile) - Deletes a mission profile.
* [describeContact](#describecontact) - Describes an existing contact.
* [describeEphemeris](#describeephemeris) - Describes an existing ephemeris.
* [getAgentConfiguration](#getagentconfiguration) - <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Gets the latest configuration information for a registered agent.</p>
* [getConfig](#getconfig) - <p>Returns <code>Config</code> information.</p> <p>Only one <code>Config</code> response can be returned.</p>
* [getDataflowEndpointGroup](#getdataflowendpointgroup) - Returns the dataflow endpoint group.
* [getMinuteUsage](#getminuteusage) - Returns the number of minutes used by account.
* [getMissionProfile](#getmissionprofile) - Returns a mission profile.
* [getSatellite](#getsatellite) - Returns a satellite.
* [listConfigs](#listconfigs) - Returns a list of <code>Config</code> objects.
* [listContacts](#listcontacts) - <p>Returns a list of contacts.</p> <p>If <code>statusList</code> contains AVAILABLE, the request must include <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>. </p>
* [listDataflowEndpointGroups](#listdataflowendpointgroups) - Returns a list of <code>DataflowEndpoint</code> groups.
* [listEphemerides](#listephemerides) - List existing ephemerides.
* [listGroundStations](#listgroundstations) - Returns a list of ground stations. 
* [listMissionProfiles](#listmissionprofiles) - Returns a list of mission profiles.
* [listSatellites](#listsatellites) - Returns a list of satellites.
* [listTagsForResource](#listtagsforresource) - Returns a list of tags for a specified resource.
* [registerAgent](#registeragent) - <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p> Registers a new agent with AWS Ground Station. </p>
* [reserveContact](#reservecontact) - Reserves a contact using specified parameters.
* [tagResource](#tagresource) - Assigns a tag to a resource.
* [untagResource](#untagresource) - Deassigns a resource tag.
* [updateAgentStatus](#updateagentstatus) - <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Update the status of the agent.</p>
* [updateConfig](#updateconfig) - <p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>
* [updateEphemeris](#updateephemeris) - Updates an existing ephemeris
* [updateMissionProfile](#updatemissionprofile) - <p>Updates a mission profile.</p> <p>Updating a mission profile will not update the execution parameters for existing future contacts.</p>

## cancelContact

Cancels a contact with a specified contact ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelContactRequest;
import org.openapis.openapi.models.operations.CancelContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelContactRequest req = new CancelContactRequest("deserunt") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            CancelContactResponse res = sdk.sdk.cancelContact(req);

            if (res.contactIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConfig

<p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p> <p>Only one type of <code>configData</code> can be specified.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConfigRequest;
import org.openapis.openapi.models.operations.CreateConfigRequestBody;
import org.openapis.openapi.models.operations.CreateConfigRequestBodyConfigData;
import org.openapis.openapi.models.operations.CreateConfigResponse;
import org.openapis.openapi.models.shared.AntennaDownlinkConfig;
import org.openapis.openapi.models.shared.AntennaDownlinkDemodDecodeConfig;
import org.openapis.openapi.models.shared.AntennaUplinkConfig;
import org.openapis.openapi.models.shared.BandwidthUnitsEnum;
import org.openapis.openapi.models.shared.CriticalityEnum;
import org.openapis.openapi.models.shared.DataflowEndpointConfig;
import org.openapis.openapi.models.shared.DecodeConfig;
import org.openapis.openapi.models.shared.DemodulationConfig;
import org.openapis.openapi.models.shared.Eirp;
import org.openapis.openapi.models.shared.EirpUnitsEnum;
import org.openapis.openapi.models.shared.Frequency;
import org.openapis.openapi.models.shared.FrequencyBandwidth;
import org.openapis.openapi.models.shared.FrequencyUnitsEnum;
import org.openapis.openapi.models.shared.PolarizationEnum;
import org.openapis.openapi.models.shared.S3RecordingConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SpectrumConfig;
import org.openapis.openapi.models.shared.TrackingConfig;
import org.openapis.openapi.models.shared.UplinkEchoConfig;
import org.openapis.openapi.models.shared.UplinkSpectrumConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConfigRequest req = new CreateConfigRequest(                new CreateConfigRequestBody(                new CreateConfigRequestBodyConfigData() {{
                                                antennaDownlinkConfig = new AntennaDownlinkConfig(                new SpectrumConfig(                new FrequencyBandwidth(BandwidthUnitsEnum.M_HZ, 7917.25);,                 new Frequency(FrequencyUnitsEnum.K_HZ, 5288.95);) {{
                                                                    polarization = PolarizationEnum.NONE;
                                                                }};);;
                                                antennaDownlinkDemodDecodeConfig = new AntennaDownlinkDemodDecodeConfig(                new DecodeConfig("excepturi");,                 new DemodulationConfig("nisi");,                 new SpectrumConfig(                new FrequencyBandwidth(BandwidthUnitsEnum.K_HZ, 8360.79);,                 new Frequency(FrequencyUnitsEnum.G_HZ, 3373.96);) {{
                                                                    polarization = PolarizationEnum.LEFT_HAND;
                                                                }};);;
                                                antennaUplinkConfig = new AntennaUplinkConfig(                new UplinkSpectrumConfig(                new Frequency(FrequencyUnitsEnum.M_HZ, 202.18);) {{
                                                                    polarization = PolarizationEnum.NONE;
                                                                }};,                 new Eirp(EirpUnitsEnum.DBW, 8326.2);) {{
                                                    transmitDisabled = false;
                                                }};;
                                                dataflowEndpointConfig = new DataflowEndpointConfig("sapiente") {{
                                                    dataflowEndpointRegion = "quo";
                                                }};;
                                                s3RecordingConfig = new S3RecordingConfig("odit", "at") {{
                                                    prefix = "at";
                                                }};;
                                                trackingConfig = new TrackingConfig(CriticalityEnum.REQUIRED);;
                                                uplinkEchoConfig = new UplinkEchoConfig("molestiae", false);;
                                            }};, "quod") {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("esse", "totam");
                                    put("porro", "dolorum");
                                    put("dicta", "nam");
                                    put("officia", "occaecati");
                                }};
                            }};) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "hic";
                xAmzDate = "optio";
                xAmzSecurityToken = "totam";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "commodi";
            }};            

            CreateConfigResponse res = sdk.sdk.createConfig(req);

            if (res.configIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDataflowEndpointGroup

<p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p> <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code> to specify which endpoints to use during a contact.</p> <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code> must match a <code>DataflowEndpoint</code> in the same group.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDataflowEndpointGroupRequest;
import org.openapis.openapi.models.operations.CreateDataflowEndpointGroupRequestBody;
import org.openapis.openapi.models.operations.CreateDataflowEndpointGroupResponse;
import org.openapis.openapi.models.shared.AgentStatusEnum;
import org.openapis.openapi.models.shared.AuditResultsEnum;
import org.openapis.openapi.models.shared.AwsGroundStationAgentEndpoint;
import org.openapis.openapi.models.shared.CapabilityHealthEnum;
import org.openapis.openapi.models.shared.CapabilityHealthReasonEnum;
import org.openapis.openapi.models.shared.ConnectionDetails;
import org.openapis.openapi.models.shared.DataflowEndpoint;
import org.openapis.openapi.models.shared.EndpointDetails;
import org.openapis.openapi.models.shared.EndpointStatusEnum;
import org.openapis.openapi.models.shared.IntegerRange;
import org.openapis.openapi.models.shared.RangedConnectionDetails;
import org.openapis.openapi.models.shared.RangedSocketAddress;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SecurityDetails;
import org.openapis.openapi.models.shared.SocketAddress;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDataflowEndpointGroupRequest req = new CreateDataflowEndpointGroupRequest(                new CreateDataflowEndpointGroupRequestBody(                new org.openapis.openapi.models.shared.EndpointDetails[]{{
                                                add(new EndpointDetails() {{
                                                    awsGroundStationAgentEndpoint = new AwsGroundStationAgentEndpoint(                new ConnectionDetails(                new SocketAddress("enim", 607831L);) {{
                                                                        mtu = 363711L;
                                                                    }};,                 new RangedConnectionDetails(                new RangedSocketAddress("minima",                 new IntegerRange(570197L, 38425L););) {{
                                                                        mtu = 438601L;
                                                                    }};, "culpa") {{
                                                        agentStatus = AgentStatusEnum.SUCCESS;
                                                        auditResults = AuditResultsEnum.UNHEALTHY;
                                                        egressAddress = new ConnectionDetails(                new SocketAddress("dolor", 616934L);) {{
                                                            mtu = 736918L;
                                                            socketAddress = new SocketAddress("sed", 612096L) {{
                                                                name = "Edna Mante II";
                                                                port = 617636L;
                                                            }};
                                                        }};
                                                        ingressAddress = new RangedConnectionDetails(                new RangedSocketAddress("est",                 new IntegerRange(653140L, 670638L););) {{
                                                            mtu = 386489L;
                                                            socketAddress = new RangedSocketAddress("architecto",                 new IntegerRange(60225L, 969810L);) {{
                                                                name = "Elias Parker";
                                                                portRange = new IntegerRange(902349L, 697631L) {{
                                                                    maximum = 613064L;
                                                                    minimum = 437032L;
                                                                }};
                                                            }};
                                                        }};
                                                        name = "Connie Herzog";
                                                    }};
                                                    endpoint = new DataflowEndpoint() {{
                                                        address = new SocketAddress("consequuntur", 995300L) {{
                                                            name = "Darrin Brakus";
                                                            port = 635059L;
                                                        }};
                                                        mtu = 653108L;
                                                        name = "Francis Jerde";
                                                        status = EndpointStatusEnum.CREATING;
                                                    }};
                                                    healthReasons = new org.openapis.openapi.models.shared.CapabilityHealthReasonEnum[]{{
                                                        add(CapabilityHealthReasonEnum.INVALID_IP_OWNERSHIP),
                                                        add(CapabilityHealthReasonEnum.NOT_AUTHORIZED_TO_CREATE_SLR),
                                                        add(CapabilityHealthReasonEnum.NO_REGISTERED_AGENT),
                                                    }};
                                                    healthStatus = CapabilityHealthEnum.HEALTHY;
                                                    securityDetails = new SecurityDetails("ipsam",                 new String[]{{
                                                                        add("possimus"),
                                                                        add("aut"),
                                                                        add("quasi"),
                                                                    }},                 new String[]{{
                                                                        add("temporibus"),
                                                                        add("laborum"),
                                                                        add("quasi"),
                                                                    }}) {{
                                                        roleArn = "animi";
                                                        securityGroupIds = new String[]{{
                                                            add("odit"),
                                                            add("quo"),
                                                        }};
                                                        subnetIds = new String[]{{
                                                            add("tenetur"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EndpointDetails() {{
                                                    awsGroundStationAgentEndpoint = new AwsGroundStationAgentEndpoint(                new ConnectionDetails(                new SocketAddress("sint", 83112L);) {{
                                                                        mtu = 929297L;
                                                                    }};,                 new RangedConnectionDetails(                new RangedSocketAddress("incidunt",                 new IntegerRange(318569L, 9356L););) {{
                                                                        mtu = 667411L;
                                                                    }};, "quibusdam") {{
                                                        agentStatus = AgentStatusEnum.INACTIVE;
                                                        auditResults = AuditResultsEnum.UNHEALTHY;
                                                        egressAddress = new ConnectionDetails(                new SocketAddress("reprehenderit", 282807L);) {{
                                                            mtu = 878194L;
                                                            socketAddress = new SocketAddress("perferendis", 39187L) {{
                                                                name = "Miss Irma Wolff";
                                                                port = 739264L;
                                                            }};
                                                        }};
                                                        ingressAddress = new RangedConnectionDetails(                new RangedSocketAddress("molestias",                 new IntegerRange(566602L, 865103L););) {{
                                                            mtu = 979587L;
                                                            socketAddress = new RangedSocketAddress("quae",                 new IntegerRange(216822L, 692472L);) {{
                                                                name = "Stacy Gulgowski MD";
                                                                portRange = new IntegerRange(414263L, 918236L) {{
                                                                    maximum = 317983L;
                                                                    minimum = 880476L;
                                                                }};
                                                            }};
                                                        }};
                                                        name = "Irma Ledner DVM";
                                                    }};
                                                    endpoint = new DataflowEndpoint() {{
                                                        address = new SocketAddress("qui", 397821L) {{
                                                            name = "Joanna Rau";
                                                            port = 264730L;
                                                        }};
                                                        mtu = 586513L;
                                                        name = "Christopher Cummerata";
                                                        status = EndpointStatusEnum.CREATED;
                                                    }};
                                                    healthReasons = new org.openapis.openapi.models.shared.CapabilityHealthReasonEnum[]{{
                                                        add(CapabilityHealthReasonEnum.INITIALIZING_DATAPLANE),
                                                    }};
                                                    healthStatus = CapabilityHealthEnum.HEALTHY;
                                                    securityDetails = new SecurityDetails("sint",                 new String[]{{
                                                                        add("provident"),
                                                                        add("necessitatibus"),
                                                                    }},                 new String[]{{
                                                                        add("officia"),
                                                                        add("dolor"),
                                                                        add("debitis"),
                                                                    }}) {{
                                                        roleArn = "tempora";
                                                        securityGroupIds = new String[]{{
                                                            add("tempore"),
                                                            add("labore"),
                                                            add("delectus"),
                                                        }};
                                                        subnetIds = new String[]{{
                                                            add("non"),
                                                            add("eligendi"),
                                                        }};
                                                    }};
                                                }}),
                                            }}) {{
                                contactPostPassDurationSeconds = 952749L;
                                contactPrePassDurationSeconds = 680056L;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("in", "illum");
                                    put("maiores", "rerum");
                                }};
                            }};) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "cumque";
                xAmzDate = "facere";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "laborum";
            }};            

            CreateDataflowEndpointGroupResponse res = sdk.sdk.createDataflowEndpointGroup(req);

            if (res.dataflowEndpointGroupIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEphemeris

Creates an Ephemeris with the specified <code>EphemerisData</code>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEphemerisRequest;
import org.openapis.openapi.models.operations.CreateEphemerisRequestBody;
import org.openapis.openapi.models.operations.CreateEphemerisRequestBodyEphemeris;
import org.openapis.openapi.models.operations.CreateEphemerisResponse;
import org.openapis.openapi.models.shared.OEMEphemeris;
import org.openapis.openapi.models.shared.S3Object;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TLEData;
import org.openapis.openapi.models.shared.TLEEphemeris;
import org.openapis.openapi.models.shared.TimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEphemerisRequest req = new CreateEphemerisRequest(                new CreateEphemerisRequestBody("non", "occaecati") {{
                                enabled = false;
                                ephemeris = new CreateEphemerisRequestBodyEphemeris() {{
                                    oem = new OEMEphemeris() {{
                                        oemData = "enim";
                                        s3Object = new S3Object() {{
                                            bucket = "accusamus";
                                            key = "delectus";
                                            version = "quidem";
                                        }};;
                                    }};;
                                    tle = new TLEEphemeris() {{
                                        s3Object = new S3Object() {{
                                            bucket = "provident";
                                            key = "nam";
                                            version = "id";
                                        }};;
                                        tleData = new org.openapis.openapi.models.shared.TLEData[]{{
                                            add(new TLEData("nihil", "magnam",                 new TimeRange(OffsetDateTime.parse("2021-09-06T01:45:34.248Z"), OffsetDateTime.parse("2022-09-17T02:55:11.783Z"));) {{
                                                tleLine1 = "deleniti";
                                                tleLine2 = "sapiente";
                                                validTimeRange = new TimeRange(OffsetDateTime.parse("2021-10-15T07:59:26.631Z"), OffsetDateTime.parse("2022-12-24T23:52:02.245Z")) {{
                                                    endTime = OffsetDateTime.parse("2022-05-10T22:38:44.806Z");
                                                    startTime = OffsetDateTime.parse("2022-07-30T07:01:46.758Z");
                                                }};
                                            }}),
                                            add(new TLEData("ullam", "provident",                 new TimeRange(OffsetDateTime.parse("2021-11-07T17:49:17.039Z"), OffsetDateTime.parse("2022-05-07T13:57:38.738Z"));) {{
                                                tleLine1 = "suscipit";
                                                tleLine2 = "natus";
                                                validTimeRange = new TimeRange(OffsetDateTime.parse("2022-09-14T03:02:47.808Z"), OffsetDateTime.parse("2022-06-06T23:06:26.119Z")) {{
                                                    endTime = OffsetDateTime.parse("2022-02-21T23:58:20.071Z");
                                                    startTime = OffsetDateTime.parse("2022-08-05T15:44:28.456Z");
                                                }};
                                            }}),
                                            add(new TLEData("doloribus", "debitis",                 new TimeRange(OffsetDateTime.parse("2022-03-12T17:44:26.081Z"), OffsetDateTime.parse("2021-08-05T03:52:18.835Z"));) {{
                                                tleLine1 = "reiciendis";
                                                tleLine2 = "mollitia";
                                                validTimeRange = new TimeRange(OffsetDateTime.parse("2022-08-19T20:09:28.183Z"), OffsetDateTime.parse("2022-07-25T21:49:23.340Z")) {{
                                                    endTime = OffsetDateTime.parse("2022-07-27T12:46:27.682Z");
                                                    startTime = OffsetDateTime.parse("2022-02-07T18:15:06.372Z");
                                                }};
                                            }}),
                                        }};
                                    }};;
                                }};;
                                expirationTime = OffsetDateTime.parse("2022-11-25T10:00:44.006Z");
                                kmsKeyArn = "architecto";
                                priority = 919483L;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("expedita", "nihil");
                                    put("repellat", "quibusdam");
                                }};
                            }};) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "pariatur";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "natus";
            }};            

            CreateEphemerisResponse res = sdk.sdk.createEphemeris(req);

            if (res.ephemerisIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMissionProfile

<p>Creates a mission profile.</p> <p> <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMissionProfileRequest;
import org.openapis.openapi.models.operations.CreateMissionProfileRequestBody;
import org.openapis.openapi.models.operations.CreateMissionProfileRequestBodyStreamsKmsKey;
import org.openapis.openapi.models.operations.CreateMissionProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMissionProfileRequest req = new CreateMissionProfileRequest(                new CreateMissionProfileRequestBody(                new String[][]{{
                                                add(new String[]{{
                                                    add("illum"),
                                                    add("pariatur"),
                                                    add("maxime"),
                                                    add("ea"),
                                                }}),
                                            }}, 569101L, "odit", "ea") {{
                                contactPostPassDurationSeconds = 33222L;
                                contactPrePassDurationSeconds = 69167L;
                                streamsKmsKey = new CreateMissionProfileRequestBodyStreamsKmsKey() {{
                                    kmsAliasArn = "maiores";
                                    kmsKeyArn = "quidem";
                                }};;
                                streamsKmsRole = "ipsam";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("autem", "nam");
                                    put("eaque", "pariatur");
                                }};
                            }};) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "perferendis";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "amet";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "cumque";
            }};            

            CreateMissionProfileResponse res = sdk.sdk.createMissionProfile(req);

            if (res.missionProfileIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConfig

Deletes a <code>Config</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConfigConfigTypeEnum;
import org.openapis.openapi.models.operations.DeleteConfigRequest;
import org.openapis.openapi.models.operations.DeleteConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConfigRequest req = new DeleteConfigRequest("hic", DeleteConfigConfigTypeEnum.UPLINK_ECHO) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "quis";
                xAmzDate = "totam";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "quis";
            }};            

            DeleteConfigResponse res = sdk.sdk.deleteConfig(req);

            if (res.configIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDataflowEndpointGroup

Deletes a dataflow endpoint group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDataflowEndpointGroupRequest;
import org.openapis.openapi.models.operations.DeleteDataflowEndpointGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDataflowEndpointGroupRequest req = new DeleteDataflowEndpointGroupRequest("eos") {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "minus";
                xAmzDate = "quam";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nostrum";
            }};            

            DeleteDataflowEndpointGroupResponse res = sdk.sdk.deleteDataflowEndpointGroup(req);

            if (res.dataflowEndpointGroupIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEphemeris

Deletes an ephemeris

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEphemerisRequest;
import org.openapis.openapi.models.operations.DeleteEphemerisResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEphemerisRequest req = new DeleteEphemerisRequest("recusandae") {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "perspiciatis";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "porro";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "blanditiis";
            }};            

            DeleteEphemerisResponse res = sdk.sdk.deleteEphemeris(req);

            if (res.ephemerisIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMissionProfile

Deletes a mission profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMissionProfileRequest;
import org.openapis.openapi.models.operations.DeleteMissionProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMissionProfileRequest req = new DeleteMissionProfileRequest("eaque") {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "adipisci";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "earum";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "iste";
            }};            

            DeleteMissionProfileResponse res = sdk.sdk.deleteMissionProfile(req);

            if (res.missionProfileIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeContact

Describes an existing contact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeContactRequest;
import org.openapis.openapi.models.operations.DescribeContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeContactRequest req = new DescribeContactRequest("deleniti") {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nobis";
                xAmzDate = "libero";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "quos";
            }};            

            DescribeContactResponse res = sdk.sdk.describeContact(req);

            if (res.describeContactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEphemeris

Describes an existing ephemeris.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEphemerisRequest;
import org.openapis.openapi.models.operations.DescribeEphemerisResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEphemerisRequest req = new DescribeEphemerisRequest("dolorem") {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "qui";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "hic";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "cum";
            }};            

            DescribeEphemerisResponse res = sdk.sdk.describeEphemeris(req);

            if (res.describeEphemerisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAgentConfiguration

<note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Gets the latest configuration information for a registered agent.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAgentConfigurationRequest;
import org.openapis.openapi.models.operations.GetAgentConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAgentConfigurationRequest req = new GetAgentConfigurationRequest("dignissimos") {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "amet";
                xAmzCredential = "dolorum";
                xAmzDate = "numquam";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "ipsa";
            }};            

            GetAgentConfigurationResponse res = sdk.sdk.getAgentConfiguration(req);

            if (res.getAgentConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfig

<p>Returns <code>Config</code> information.</p> <p>Only one <code>Config</code> response can be returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigConfigTypeEnum;
import org.openapis.openapi.models.operations.GetConfigRequest;
import org.openapis.openapi.models.operations.GetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConfigRequest req = new GetConfigRequest("odio", GetConfigConfigTypeEnum.ANTENNA_UPLINK) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "voluptatibus";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "natus";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "atque";
            }};            

            GetConfigResponse res = sdk.sdk.getConfig(req);

            if (res.getConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataflowEndpointGroup

Returns the dataflow endpoint group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataflowEndpointGroupRequest;
import org.openapis.openapi.models.operations.GetDataflowEndpointGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDataflowEndpointGroupRequest req = new GetDataflowEndpointGroupRequest("fugiat") {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dolorum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
            }};            

            GetDataflowEndpointGroupResponse res = sdk.sdk.getDataflowEndpointGroup(req);

            if (res.getDataflowEndpointGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMinuteUsage

Returns the number of minutes used by account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMinuteUsageRequest;
import org.openapis.openapi.models.operations.GetMinuteUsageRequestBody;
import org.openapis.openapi.models.operations.GetMinuteUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMinuteUsageRequest req = new GetMinuteUsageRequest(                new GetMinuteUsageRequestBody(896672L, 714697L);) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "ipsum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "id";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "eius";
            }};            

            GetMinuteUsageResponse res = sdk.sdk.getMinuteUsage(req);

            if (res.getMinuteUsageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMissionProfile

Returns a mission profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMissionProfileRequest;
import org.openapis.openapi.models.operations.GetMissionProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMissionProfileRequest req = new GetMissionProfileRequest("perferendis") {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "optio";
                xAmzCredential = "accusamus";
                xAmzDate = "ad";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "deserunt";
            }};            

            GetMissionProfileResponse res = sdk.sdk.getMissionProfile(req);

            if (res.getMissionProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSatellite

Returns a satellite.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSatelliteRequest;
import org.openapis.openapi.models.operations.GetSatelliteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSatelliteRequest req = new GetSatelliteRequest("minima") {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "totam";
                xAmzCredential = "similique";
                xAmzDate = "alias";
                xAmzSecurityToken = "at";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "tempora";
            }};            

            GetSatelliteResponse res = sdk.sdk.getSatellite(req);

            if (res.getSatelliteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConfigs

Returns a list of <code>Config</code> objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConfigsRequest;
import org.openapis.openapi.models.operations.ListConfigsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConfigsRequest req = new ListConfigsRequest() {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "qui";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "a";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "harum";
                maxResults = 483409L;
                nextToken = "ipsum";
            }};            

            ListConfigsResponse res = sdk.sdk.listConfigs(req);

            if (res.listConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listContacts

<p>Returns a list of contacts.</p> <p>If <code>statusList</code> contains AVAILABLE, the request must include <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>. </p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListContactsRequest;
import org.openapis.openapi.models.operations.ListContactsRequestBody;
import org.openapis.openapi.models.operations.ListContactsResponse;
import org.openapis.openapi.models.shared.ContactStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListContactsRequest req = new ListContactsRequest(                new ListContactsRequestBody(OffsetDateTime.parse("2022-04-24T18:16:06.669Z"), OffsetDateTime.parse("2021-03-29T09:11:09.370Z"),                 new org.openapis.openapi.models.shared.ContactStatusEnum[]{{
                                                add(ContactStatusEnum.CANCELLING),
                                                add(ContactStatusEnum.AWS_FAILED),
                                            }}) {{
                                groundStation = "sapiente";
                                maxResults = 518201L;
                                missionProfileArn = "nihil";
                                nextToken = "sit";
                                satelliteArn = "expedita";
                            }};) {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "sed";
                xAmzCredential = "vel";
                xAmzDate = "libero";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "quam";
                maxResults = "ipsum";
                nextToken = "incidunt";
            }};            

            ListContactsResponse res = sdk.sdk.listContacts(req);

            if (res.listContactsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDataflowEndpointGroups

Returns a list of <code>DataflowEndpoint</code> groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDataflowEndpointGroupsRequest;
import org.openapis.openapi.models.operations.ListDataflowEndpointGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDataflowEndpointGroupsRequest req = new ListDataflowEndpointGroupsRequest() {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "pariatur";
                xAmzDate = "soluta";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "totam";
                maxResults = 276894L;
                nextToken = "aspernatur";
            }};            

            ListDataflowEndpointGroupsResponse res = sdk.sdk.listDataflowEndpointGroups(req);

            if (res.listDataflowEndpointGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEphemerides

List existing ephemerides.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEphemeridesRequest;
import org.openapis.openapi.models.operations.ListEphemeridesRequestBody;
import org.openapis.openapi.models.operations.ListEphemeridesResponse;
import org.openapis.openapi.models.shared.EphemerisStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEphemeridesRequest req = new ListEphemeridesRequest(                new ListEphemeridesRequestBody(OffsetDateTime.parse("2021-08-04T17:36:39.068Z"), "aliquid", OffsetDateTime.parse("2022-06-08T14:54:33.206Z")) {{
                                statusList = new org.openapis.openapi.models.shared.EphemerisStatusEnum[]{{
                                    add(EphemerisStatusEnum.INVALID),
                                    add(EphemerisStatusEnum.INVALID),
                                    add(EphemerisStatusEnum.VALIDATING),
                                    add(EphemerisStatusEnum.VALIDATING),
                                }};
                            }};) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "ullam";
                xAmzDate = "nam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "cumque";
                maxResults = 746994L;
                nextToken = "nobis";
            }};            

            ListEphemeridesResponse res = sdk.sdk.listEphemerides(req);

            if (res.listEphemeridesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGroundStations

Returns a list of ground stations. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGroundStationsRequest;
import org.openapis.openapi.models.operations.ListGroundStationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGroundStationsRequest req = new ListGroundStationsRequest() {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "veritatis";
                xAmzDate = "nobis";
                xAmzSecurityToken = "quos";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "cupiditate";
                maxResults = 45614L;
                nextToken = "delectus";
                satelliteId = "dolorem";
            }};            

            ListGroundStationsResponse res = sdk.sdk.listGroundStations(req);

            if (res.listGroundStationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMissionProfiles

Returns a list of mission profiles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMissionProfilesRequest;
import org.openapis.openapi.models.operations.ListMissionProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMissionProfilesRequest req = new ListMissionProfilesRequest() {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "dolorum";
                xAmzDate = "architecto";
                xAmzSecurityToken = "quae";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quas";
                maxResults = 929530L;
                nextToken = "consequatur";
            }};            

            ListMissionProfilesResponse res = sdk.sdk.listMissionProfiles(req);

            if (res.listMissionProfilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSatellites

Returns a list of satellites.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSatellitesRequest;
import org.openapis.openapi.models.operations.ListSatellitesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSatellitesRequest req = new ListSatellitesRequest() {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "porro";
                xAmzCredential = "doloribus";
                xAmzDate = "ut";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "qui";
                maxResults = 63955L;
                nextToken = "laudantium";
            }};            

            ListSatellitesResponse res = sdk.sdk.listSatellites(req);

            if (res.listSatellitesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns a list of tags for a specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("occaecati") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "vero";
                xAmzDate = "omnis";
                xAmzSecurityToken = "quis";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "delectus";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerAgent

<note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p> Registers a new agent with AWS Ground Station. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterAgentRequest;
import org.openapis.openapi.models.operations.RegisterAgentRequestBody;
import org.openapis.openapi.models.operations.RegisterAgentRequestBodyAgentDetails;
import org.openapis.openapi.models.operations.RegisterAgentRequestBodyDiscoveryData;
import org.openapis.openapi.models.operations.RegisterAgentResponse;
import org.openapis.openapi.models.shared.ComponentVersion;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterAgentRequest req = new RegisterAgentRequest(                new RegisterAgentRequestBody(                new RegisterAgentRequestBodyAgentDetails() {{
                                                agentCpuCores = new Long[]{{
                                                    add(878870L),
                                                }};
                                                agentVersion = "tenetur";
                                                componentVersions = new org.openapis.openapi.models.shared.ComponentVersion[]{{
                                                    add(new ComponentVersion("facilis",                 new String[]{{
                                                                        add("ducimus"),
                                                                        add("dolore"),
                                                                        add("quibusdam"),
                                                                        add("illum"),
                                                                    }}) {{
                                                        componentType = "hic";
                                                        versions = new String[]{{
                                                            add("quod"),
                                                            add("odio"),
                                                            add("similique"),
                                                        }};
                                                    }}),
                                                    add(new ComponentVersion("exercitationem",                 new String[]{{
                                                                        add("fugit"),
                                                                        add("porro"),
                                                                        add("maiores"),
                                                                        add("doloribus"),
                                                                    }}) {{
                                                        componentType = "sequi";
                                                        versions = new String[]{{
                                                            add("impedit"),
                                                            add("aut"),
                                                            add("voluptatibus"),
                                                        }};
                                                    }}),
                                                }};
                                                instanceId = "iusto";
                                                instanceType = "eligendi";
                                                reservedCpuCores = new Long[]{{
                                                    add(4048L),
                                                    add(639473L),
                                                }};
                                            }};,                 new RegisterAgentRequestBodyDiscoveryData() {{
                                                capabilityArns = new String[]{{
                                                    add("ipsam"),
                                                    add("ea"),
                                                }};
                                                privateIpAddresses = new String[]{{
                                                    add("vel"),
                                                }};
                                                publicIpAddresses = new String[]{{
                                                    add("magnam"),
                                                    add("ratione"),
                                                    add("ex"),
                                                    add("laudantium"),
                                                }};
                                            }};);) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "maiores";
                xAmzDate = "quasi";
                xAmzSecurityToken = "ex";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "excepturi";
            }};            

            RegisterAgentResponse res = sdk.sdk.registerAgent(req);

            if (res.registerAgentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reserveContact

Reserves a contact using specified parameters.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReserveContactRequest;
import org.openapis.openapi.models.operations.ReserveContactRequestBody;
import org.openapis.openapi.models.operations.ReserveContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReserveContactRequest req = new ReserveContactRequest(                new ReserveContactRequestBody(OffsetDateTime.parse("2022-01-15T07:05:18.296Z"), "quisquam", "saepe", "ea", OffsetDateTime.parse("2021-12-03T14:20:49.127Z")) {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("aliquid", "inventore");
                                    put("magnam", "ea");
                                }};
                            }};) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "recusandae";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "minima";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "a";
            }};            

            ReserveContactResponse res = sdk.sdk.reserveContact(req);

            if (res.contactIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Assigns a tag to a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("aut", "deleniti");
                                            }});, "impedit") {{
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "accusamus";
                xAmzDate = "inventore";
                xAmzSecurityToken = "non";
                xAmzSignature = "et";
                xAmzSignedHeaders = "dolorum";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Deassigns a resource tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("placeat",                 new String[]{{
                                add("eum"),
                            }}) {{
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "quas";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "libero";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAgentStatus

<note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Update the status of the agent.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAgentStatusRequest;
import org.openapis.openapi.models.operations.UpdateAgentStatusRequestBody;
import org.openapis.openapi.models.operations.UpdateAgentStatusRequestBodyAggregateStatus;
import org.openapis.openapi.models.operations.UpdateAgentStatusResponse;
import org.openapis.openapi.models.shared.AgentStatusEnum;
import org.openapis.openapi.models.shared.ComponentStatusData;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAgentStatusRequest req = new UpdateAgentStatusRequest(                new UpdateAgentStatusRequestBody(                new UpdateAgentStatusRequestBodyAggregateStatus() {{
                                                signatureMap = new java.util.HashMap<String, Boolean>() {{
                                                    put("numquam", false);
                                                    put("explicabo", false);
                                                }};
                                                status = AgentStatusEnum.ACTIVE;
                                            }};,                 new org.openapis.openapi.models.shared.ComponentStatusData[]{{
                                                add(new ComponentStatusData("fuga", "reprehenderit", "quidem", AgentStatusEnum.INACTIVE) {{
                                                    bytesReceived = 476477L;
                                                    bytesSent = 301598L;
                                                    capabilityArn = "odio";
                                                    componentType = "eius";
                                                    dataflowId = "esse";
                                                    packetsDropped = 456141L;
                                                    status = AgentStatusEnum.ACTIVE;
                                                }}),
                                            }}, "ut");, "eum") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "eos";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "ipsa";
            }};            

            UpdateAgentStatusResponse res = sdk.sdk.updateAgentStatus(req);

            if (res.updateAgentStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConfig

<p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConfigConfigTypeEnum;
import org.openapis.openapi.models.operations.UpdateConfigRequest;
import org.openapis.openapi.models.operations.UpdateConfigRequestBody;
import org.openapis.openapi.models.operations.UpdateConfigRequestBodyConfigData;
import org.openapis.openapi.models.operations.UpdateConfigResponse;
import org.openapis.openapi.models.shared.AntennaDownlinkConfig;
import org.openapis.openapi.models.shared.AntennaDownlinkDemodDecodeConfig;
import org.openapis.openapi.models.shared.AntennaUplinkConfig;
import org.openapis.openapi.models.shared.BandwidthUnitsEnum;
import org.openapis.openapi.models.shared.CriticalityEnum;
import org.openapis.openapi.models.shared.DataflowEndpointConfig;
import org.openapis.openapi.models.shared.DecodeConfig;
import org.openapis.openapi.models.shared.DemodulationConfig;
import org.openapis.openapi.models.shared.Eirp;
import org.openapis.openapi.models.shared.EirpUnitsEnum;
import org.openapis.openapi.models.shared.Frequency;
import org.openapis.openapi.models.shared.FrequencyBandwidth;
import org.openapis.openapi.models.shared.FrequencyUnitsEnum;
import org.openapis.openapi.models.shared.PolarizationEnum;
import org.openapis.openapi.models.shared.S3RecordingConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SpectrumConfig;
import org.openapis.openapi.models.shared.TrackingConfig;
import org.openapis.openapi.models.shared.UplinkEchoConfig;
import org.openapis.openapi.models.shared.UplinkSpectrumConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConfigRequest req = new UpdateConfigRequest(                new UpdateConfigRequestBody(                new UpdateConfigRequestBodyConfigData() {{
                                                antennaDownlinkConfig = new AntennaDownlinkConfig(                new SpectrumConfig(                new FrequencyBandwidth(BandwidthUnitsEnum.K_HZ, 2065.94);,                 new Frequency(FrequencyUnitsEnum.K_HZ, 8472.76);) {{
                                                                    polarization = PolarizationEnum.RIGHT_HAND;
                                                                }};);;
                                                antennaDownlinkDemodDecodeConfig = new AntennaDownlinkDemodDecodeConfig(                new DecodeConfig("fuga");,                 new DemodulationConfig("eius");,                 new SpectrumConfig(                new FrequencyBandwidth(BandwidthUnitsEnum.G_HZ, 3738.13);,                 new Frequency(FrequencyUnitsEnum.G_HZ, 5876);) {{
                                                                    polarization = PolarizationEnum.LEFT_HAND;
                                                                }};);;
                                                antennaUplinkConfig = new AntennaUplinkConfig(                new UplinkSpectrumConfig(                new Frequency(FrequencyUnitsEnum.G_HZ, 8920.5);) {{
                                                                    polarization = PolarizationEnum.NONE;
                                                                }};,                 new Eirp(EirpUnitsEnum.DBW, 1334.65);) {{
                                                    transmitDisabled = false;
                                                }};;
                                                dataflowEndpointConfig = new DataflowEndpointConfig("sequi") {{
                                                    dataflowEndpointRegion = "quo";
                                                }};;
                                                s3RecordingConfig = new S3RecordingConfig("esse", "recusandae") {{
                                                    prefix = "aperiam";
                                                }};;
                                                trackingConfig = new TrackingConfig(CriticalityEnum.REQUIRED);;
                                                uplinkEchoConfig = new UplinkEchoConfig("quod", false);;
                                            }};, "dignissimos");, "inventore", UpdateConfigConfigTypeEnum.DATAFLOW_ENDPOINT) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "aliquam";
                xAmzDate = "odio";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "sapiente";
            }};            

            UpdateConfigResponse res = sdk.sdk.updateConfig(req);

            if (res.configIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEphemeris

Updates an existing ephemeris

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEphemerisRequest;
import org.openapis.openapi.models.operations.UpdateEphemerisRequestBody;
import org.openapis.openapi.models.operations.UpdateEphemerisResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEphemerisRequest req = new UpdateEphemerisRequest(                new UpdateEphemerisRequestBody(false) {{
                                name = "Fernando Barton";
                                priority = 556429L;
                            }};, "praesentium") {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "fugit";
                xAmzDate = "fuga";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "atque";
            }};            

            UpdateEphemerisResponse res = sdk.sdk.updateEphemeris(req);

            if (res.ephemerisIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMissionProfile

<p>Updates a mission profile.</p> <p>Updating a mission profile will not update the execution parameters for existing future contacts.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMissionProfileRequest;
import org.openapis.openapi.models.operations.UpdateMissionProfileRequestBody;
import org.openapis.openapi.models.operations.UpdateMissionProfileRequestBodyStreamsKmsKey;
import org.openapis.openapi.models.operations.UpdateMissionProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMissionProfileRequest req = new UpdateMissionProfileRequest(                new UpdateMissionProfileRequestBody() {{
                                contactPostPassDurationSeconds = 325685L;
                                contactPrePassDurationSeconds = 392676L;
                                dataflowEdges = new String[][]{{
                                    add(new String[]{{
                                        add("consequuntur"),
                                        add("ratione"),
                                        add("explicabo"),
                                        add("saepe"),
                                    }}),
                                }};
                                minimumViableContactDurationSeconds = 578922L;
                                name = "Carl Koch";
                                streamsKmsKey = new UpdateMissionProfileRequestBodyStreamsKmsKey() {{
                                    kmsAliasArn = "veritatis";
                                    kmsKeyArn = "esse";
                                }};;
                                streamsKmsRole = "quod";
                                trackingConfigArn = "nam";
                            }};, "vero") {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "saepe";
                xAmzDate = "vel";
                xAmzSecurityToken = "harum";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "rerum";
            }};            

            UpdateMissionProfileResponse res = sdk.sdk.updateMissionProfile(req);

            if (res.missionProfileIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
