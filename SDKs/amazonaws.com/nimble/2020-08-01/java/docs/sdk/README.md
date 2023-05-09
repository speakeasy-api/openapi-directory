# SDK

## Overview

<p>Welcome to the Amazon Nimble Studio API reference. This API reference provides methods, schema, resources, parameters, and more to help you get the most out of Nimble Studio.</p> <p>Nimble Studio is a virtual studio that empowers visual effects, animation, and interactive content teams to create content securely within a scalable, private cloud service.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/nimble/>
### Available Operations

* [acceptEulas](#accepteulas) - Accept EULAs.
* [createLaunchProfile](#createlaunchprofile) - Create a launch profile.
* [createStreamingImage](#createstreamingimage) - Creates a streaming image resource in a studio.
* [createStreamingSession](#createstreamingsession) - <p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in the <code>READY</code> state.</p>
* [createStreamingSessionStream](#createstreamingsessionstream) - <p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in the <code>READY</code> state.</p>
* [createStudio](#createstudio) - <p>Create a new studio.</p> <p>When creating a studio, two IAM roles must be provided: the admin role and the user role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p> <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy attached for the portal to function properly.</p> <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed policy attached for the portal to function properly.</p> <p>You may optionally specify a KMS key in the <code>StudioEncryptionConfiguration</code>.</p> <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an KMS key. By default, this key is owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key when calling <code>CreateStudio</code> to encrypt this data using a key you own and manage.</p> <p>When providing an KMS key during studio creation, Nimble Studio creates KMS grants in your account to provide your studio user and admin roles access to these KMS keys.</p> <p>If you delete this grant, the studio will no longer be accessible to your portal users.</p> <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>
* [createStudioComponent](#createstudiocomponent) - Creates a studio component resource.
* [deleteLaunchProfile](#deletelaunchprofile) - Permanently delete a launch profile.
* [deleteLaunchProfileMember](#deletelaunchprofilemember) - Delete a user from launch profile membership.
* [deleteStreamingImage](#deletestreamingimage) - Delete streaming image.
* [deleteStreamingSession](#deletestreamingsession) - <p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a <code>DELETED</code> state.</p> <p>A streaming session will count against your streaming session quota until it is marked <code>DELETED</code>.</p>
* [deleteStudio](#deletestudio) - Delete a studio resource.
* [deleteStudioComponent](#deletestudiocomponent) - Deletes a studio component resource.
* [deleteStudioMember](#deletestudiomember) - Delete a user from studio membership.
* [getEula](#geteula) - Get EULA.
* [getLaunchProfile](#getlaunchprofile) - Get a launch profile.
* [getLaunchProfileDetails](#getlaunchprofiledetails) - Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.
* [getLaunchProfileInitialization](#getlaunchprofileinitialization) - Get a launch profile initialization.
* [getLaunchProfileMember](#getlaunchprofilemember) - Get a user persona in launch profile membership.
* [getStreamingImage](#getstreamingimage) - Get streaming image.
* [getStreamingSession](#getstreamingsession) - <p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>
* [getStreamingSessionBackup](#getstreamingsessionbackup) - <p>Gets <code>StreamingSessionBackup</code> resource.</p> <p>Invoke this operation to poll for a streaming session backup while stopping a streaming session.</p>
* [getStreamingSessionStream](#getstreamingsessionstream) - <p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking <code>CreateStreamingSessionStream</code>.</p> <p>After the <code>StreamingSessionStream</code> changes to the <code>READY</code> state, the url property will contain a stream to be used with the DCV streaming client.</p>
* [getStudio](#getstudio) - Get a studio resource.
* [getStudioComponent](#getstudiocomponent) - Gets a studio component resource.
* [getStudioMember](#getstudiomember) - Get a user's membership in a studio.
* [listEulaAcceptances](#listeulaacceptances) - List EULA acceptances.
* [listEulas](#listeulas) - List EULAs.
* [listLaunchProfileMembers](#listlaunchprofilemembers) - Get all users in a given launch profile membership.
* [listLaunchProfiles](#listlaunchprofiles) - List all the launch profiles a studio.
* [listStreamingImages](#liststreamingimages) - <p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by Amazon Web Services, as well as streaming images that you have created in your studio.</p>
* [listStreamingSessionBackups](#liststreamingsessionbackups) - Lists the backups of a streaming session in a studio.
* [listStreamingSessions](#liststreamingsessions) - Lists the streaming sessions in a studio.
* [listStudioComponents](#liststudiocomponents) - Lists the <code>StudioComponents</code> in a studio.
* [listStudioMembers](#liststudiomembers) - <p>Get all users in a given studio membership.</p> <note> <p> <code>ListStudioMembers</code> only returns admin members.</p> </note>
* [listStudios](#liststudios) - List studios in your Amazon Web Services accounts in the requested Amazon Web Services Region.
* [listTagsForResource](#listtagsforresource) - <p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p> <p>This operation supports ARNs for all resource types in Nimble Studio that support tags, including studio, studio component, launch profile, streaming image, and streaming session. All resources that can be tagged will contain an ARN property, so you do not have to create this ARN yourself.</p>
* [putLaunchProfileMembers](#putlaunchprofilemembers) - Add/update users with given persona to launch profile membership.
* [putStudioMembers](#putstudiomembers) - Add/update users with given persona to studio membership.
* [startStreamingSession](#startstreamingsession) - Transitions sessions from the <code>STOPPED</code> state into the <code>READY</code> state. The <code>START_IN_PROGRESS</code> state is the intermediate state between the <code>STOPPED</code> and <code>READY</code> states.
* [startStudioSSOConfigurationRepair](#startstudiossoconfigurationrepair) - <p>Repairs the IAM Identity Center configuration for a given studio.</p> <p>If the studio has a valid IAM Identity Center configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid IAM Identity Center configuration currently associated with it, then a new IAM Identity Center application is created for the studio and the studio is changed to the <code>READY</code> state.</p> <p>After the IAM Identity Center application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>
* [stopStreamingSession](#stopstreamingsession) - Transitions sessions from the <code>READY</code> state into the <code>STOPPED</code> state. The <code>STOP_IN_PROGRESS</code> state is the intermediate state between the <code>READY</code> and <code>STOPPED</code> states.
* [tagResource](#tagresource) - Creates tags for a resource, given its ARN.
* [untagResource](#untagresource) - Deletes the tags for a resource.
* [updateLaunchProfile](#updatelaunchprofile) - Update a launch profile.
* [updateLaunchProfileMember](#updatelaunchprofilemember) - Update a user persona in launch profile membership.
* [updateStreamingImage](#updatestreamingimage) - Update streaming image.
* [updateStudio](#updatestudio) - <p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>
* [updateStudioComponent](#updatestudiocomponent) - Updates a studio component resource.

## acceptEulas

Accept EULAs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptEulasRequest;
import org.openapis.openapi.models.operations.AcceptEulasRequestBody;
import org.openapis.openapi.models.operations.AcceptEulasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptEulasRequest req = new AcceptEulasRequest(                new AcceptEulasRequestBody() {{
                                eulaIds = new String[]{{
                                    add("delectus"),
                                }};
                            }};, "tempora") {{
                xAmzAlgorithm = "suscipit";
                xAmzClientToken = "molestiae";
                xAmzContentSha256 = "minus";
                xAmzCredential = "placeat";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "nisi";
            }};            

            AcceptEulasResponse res = sdk.sdk.acceptEulas(req);

            if (res.acceptEulasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLaunchProfile

Create a launch profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLaunchProfileRequest;
import org.openapis.openapi.models.operations.CreateLaunchProfileRequestBody;
import org.openapis.openapi.models.operations.CreateLaunchProfileRequestBodyStreamConfiguration;
import org.openapis.openapi.models.operations.CreateLaunchProfileResponse;
import org.openapis.openapi.models.shared.AutomaticTerminationModeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SessionBackupModeEnum;
import org.openapis.openapi.models.shared.SessionPersistenceModeEnum;
import org.openapis.openapi.models.shared.StreamConfigurationSessionBackup;
import org.openapis.openapi.models.shared.StreamConfigurationSessionStorage;
import org.openapis.openapi.models.shared.StreamingClipboardModeEnum;
import org.openapis.openapi.models.shared.StreamingInstanceTypeEnum;
import org.openapis.openapi.models.shared.StreamingSessionStorageModeEnum;
import org.openapis.openapi.models.shared.StreamingSessionStorageRoot;
import org.openapis.openapi.models.shared.VolumeConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLaunchProfileRequest req = new CreateLaunchProfileRequest(                new CreateLaunchProfileRequestBody(                new String[]{{
                                                add("ab"),
                                                add("quis"),
                                                add("veritatis"),
                                                add("deserunt"),
                                            }},                 new String[]{{
                                                add("ipsam"),
                                            }}, "repellendus",                 new CreateLaunchProfileRequestBodyStreamConfiguration() {{
                                                automaticTerminationMode = AutomaticTerminationModeEnum.ACTIVATED;
                                                clipboardMode = StreamingClipboardModeEnum.DISABLED;
                                                ec2InstanceTypes = new org.openapis.openapi.models.shared.StreamingInstanceTypeEnum[]{{
                                                    add(StreamingInstanceTypeEnum.G58XLARGE),
                                                }};
                                                maxSessionLengthInMinutes = 870088L;
                                                maxStoppedSessionLengthInMinutes = 978619L;
                                                sessionBackup = new StreamConfigurationSessionBackup() {{
                                                    maxBackupsToRetain = 473608L;
                                                    mode = SessionBackupModeEnum.DEACTIVATED;
                                                }};;
                                                sessionPersistenceMode = SessionPersistenceModeEnum.ACTIVATED;
                                                sessionStorage = new StreamConfigurationSessionStorage(                new org.openapis.openapi.models.shared.StreamingSessionStorageModeEnum[]{{
                                                                    add(StreamingSessionStorageModeEnum.UPLOAD),
                                                                    add(StreamingSessionStorageModeEnum.UPLOAD),
                                                                }}) {{
                                                    root = new StreamingSessionStorageRoot() {{
                                                        linux = "totam";
                                                        windows = "porro";
                                                    }};;
                                                }};;
                                                streamingImageIds = new String[]{{
                                                    add("dicta"),
                                                    add("nam"),
                                                    add("officia"),
                                                }};
                                                volumeConfiguration = new VolumeConfiguration() {{
                                                    iops = 582020L;
                                                    size = 143353L;
                                                    throughput = 537373L;
                                                }};;
                                            }};,                 new String[]{{
                                                add("optio"),
                                                add("totam"),
                                                add("beatae"),
                                                add("commodi"),
                                            }}) {{
                                description = "molestiae";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("qui", "impedit");
                                    put("cum", "esse");
                                }};
                            }};, "ipsum") {{
                xAmzAlgorithm = "excepturi";
                xAmzClientToken = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ad";
                xAmzDate = "natus";
                xAmzSecurityToken = "sed";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolor";
            }};            

            CreateLaunchProfileResponse res = sdk.sdk.createLaunchProfile(req);

            if (res.createLaunchProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStreamingImage

Creates a streaming image resource in a studio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStreamingImageRequest;
import org.openapis.openapi.models.operations.CreateStreamingImageRequestBody;
import org.openapis.openapi.models.operations.CreateStreamingImageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStreamingImageRequest req = new CreateStreamingImageRequest(                new CreateStreamingImageRequestBody("laboriosam", "hic") {{
                                description = "saepe";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("in", "corporis");
                                    put("iste", "iure");
                                    put("saepe", "quidem");
                                }};
                            }};, "architecto") {{
                xAmzAlgorithm = "ipsa";
                xAmzClientToken = "reiciendis";
                xAmzContentSha256 = "est";
                xAmzCredential = "mollitia";
                xAmzDate = "laborum";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "corporis";
            }};            

            CreateStreamingImageResponse res = sdk.sdk.createStreamingImage(req);

            if (res.createStreamingImageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStreamingSession

<p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in the <code>READY</code> state.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStreamingSessionRequest;
import org.openapis.openapi.models.operations.CreateStreamingSessionRequestBody;
import org.openapis.openapi.models.operations.CreateStreamingSessionRequestBodyEc2InstanceTypeEnum;
import org.openapis.openapi.models.operations.CreateStreamingSessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStreamingSessionRequest req = new CreateStreamingSessionRequest(                new CreateStreamingSessionRequestBody("nobis") {{
                                ec2InstanceType = CreateStreamingSessionRequestBodyEc2InstanceTypeEnum.G4DN12XLARGE;
                                ownedBy = "omnis";
                                streamingImageId = "nemo";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("excepturi", "accusantium");
                                    put("iure", "culpa");
                                }};
                            }};, "doloribus") {{
                xAmzAlgorithm = "sapiente";
                xAmzClientToken = "architecto";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "dolorem";
                xAmzDate = "culpa";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "mollitia";
            }};            

            CreateStreamingSessionResponse res = sdk.sdk.createStreamingSession(req);

            if (res.createStreamingSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStreamingSessionStream

<p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in the <code>READY</code> state.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStreamingSessionStreamRequest;
import org.openapis.openapi.models.operations.CreateStreamingSessionStreamRequestBody;
import org.openapis.openapi.models.operations.CreateStreamingSessionStreamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStreamingSessionStreamRequest req = new CreateStreamingSessionStreamRequest(                new CreateStreamingSessionStreamRequestBody() {{
                                expirationInSeconds = 253291L;
                            }};, "commodi", "quam") {{
                xAmzAlgorithm = "molestiae";
                xAmzClientToken = "velit";
                xAmzContentSha256 = "error";
                xAmzCredential = "quia";
                xAmzDate = "quis";
                xAmzSecurityToken = "vitae";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "animi";
            }};            

            CreateStreamingSessionStreamResponse res = sdk.sdk.createStreamingSessionStream(req);

            if (res.createStreamingSessionStreamResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStudio

<p>Create a new studio.</p> <p>When creating a studio, two IAM roles must be provided: the admin role and the user role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p> <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy attached for the portal to function properly.</p> <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed policy attached for the portal to function properly.</p> <p>You may optionally specify a KMS key in the <code>StudioEncryptionConfiguration</code>.</p> <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an KMS key. By default, this key is owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key when calling <code>CreateStudio</code> to encrypt this data using a key you own and manage.</p> <p>When providing an KMS key during studio creation, Nimble Studio creates KMS grants in your account to provide your studio user and admin roles access to these KMS keys.</p> <p>If you delete this grant, the studio will no longer be accessible to your portal users.</p> <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStudioRequest;
import org.openapis.openapi.models.operations.CreateStudioRequestBody;
import org.openapis.openapi.models.operations.CreateStudioRequestBodyStudioEncryptionConfiguration;
import org.openapis.openapi.models.operations.CreateStudioResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StudioEncryptionConfigurationKeyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStudioRequest req = new CreateStudioRequest(                new CreateStudioRequestBody("odit", "quo", "sequi", "tenetur") {{
                                studioEncryptionConfiguration = new CreateStudioRequestBodyStudioEncryptionConfiguration() {{
                                    keyArn = "ipsam";
                                    keyType = StudioEncryptionConfigurationKeyTypeEnum.CUSTOMER_MANAGED_KEY;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("aut", "quasi");
                                    put("error", "temporibus");
                                    put("laborum", "quasi");
                                    put("reiciendis", "voluptatibus");
                                }};
                            }};) {{
                xAmzAlgorithm = "vero";
                xAmzClientToken = "nihil";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "voluptatibus";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "cum";
            }};            

            CreateStudioResponse res = sdk.sdk.createStudio(req);

            if (res.createStudioResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStudioComponent

Creates a studio component resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStudioComponentRequest;
import org.openapis.openapi.models.operations.CreateStudioComponentRequestBody;
import org.openapis.openapi.models.operations.CreateStudioComponentRequestBodyConfiguration;
import org.openapis.openapi.models.operations.CreateStudioComponentRequestBodySubtypeEnum;
import org.openapis.openapi.models.operations.CreateStudioComponentRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateStudioComponentResponse;
import org.openapis.openapi.models.shared.ActiveDirectoryComputerAttribute;
import org.openapis.openapi.models.shared.ActiveDirectoryConfiguration;
import org.openapis.openapi.models.shared.ComputeFarmConfiguration;
import org.openapis.openapi.models.shared.LaunchProfilePlatformEnum;
import org.openapis.openapi.models.shared.LicenseServiceConfiguration;
import org.openapis.openapi.models.shared.ScriptParameterKeyValue;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SharedFileSystemConfiguration;
import org.openapis.openapi.models.shared.StudioComponentInitializationScript;
import org.openapis.openapi.models.shared.StudioComponentInitializationScriptRunContextEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStudioComponentRequest req = new CreateStudioComponentRequest(                new CreateStudioComponentRequestBody("doloremque", CreateStudioComponentRequestBodyTypeEnum.COMPUTE_FARM) {{
                                configuration = new CreateStudioComponentRequestBodyConfiguration() {{
                                    activeDirectoryConfiguration = new ActiveDirectoryConfiguration() {{
                                        computerAttributes = new org.openapis.openapi.models.shared.ActiveDirectoryComputerAttribute[]{{
                                            add(new ActiveDirectoryComputerAttribute() {{
                                                name = "Willie Hessel";
                                                value = "dicta";
                                            }}),
                                            add(new ActiveDirectoryComputerAttribute() {{
                                                name = "Bill Thompson";
                                                value = "quae";
                                            }}),
                                        }};
                                        directoryId = "ipsum";
                                        organizationalUnitDistinguishedName = "quidem";
                                    }};;
                                    computeFarmConfiguration = new ComputeFarmConfiguration() {{
                                        activeDirectoryUser = "molestias";
                                        endpoint = "excepturi";
                                    }};;
                                    licenseServiceConfiguration = new LicenseServiceConfiguration() {{
                                        endpoint = "pariatur";
                                    }};;
                                    sharedFileSystemConfiguration = new SharedFileSystemConfiguration() {{
                                        endpoint = "modi";
                                        fileSystemId = "praesentium";
                                        linuxMountPoint = "rem";
                                        shareName = "voluptates";
                                        windowsMountDrive = "quasi";
                                    }};;
                                }};;
                                description = "repudiandae";
                                ec2SecurityGroupIds = new String[]{{
                                    add("veritatis"),
                                    add("itaque"),
                                    add("incidunt"),
                                }};
                                initializationScripts = new org.openapis.openapi.models.shared.StudioComponentInitializationScript[]{{
                                    add(new StudioComponentInitializationScript() {{
                                        launchProfileProtocolVersion = "consequatur";
                                        platform = LaunchProfilePlatformEnum.WINDOWS;
                                        runContext = StudioComponentInitializationScriptRunContextEnum.USER_INITIALIZATION;
                                        script = "explicabo";
                                    }}),
                                    add(new StudioComponentInitializationScript() {{
                                        launchProfileProtocolVersion = "deserunt";
                                        platform = LaunchProfilePlatformEnum.WINDOWS;
                                        runContext = StudioComponentInitializationScriptRunContextEnum.USER_INITIALIZATION;
                                        script = "labore";
                                    }}),
                                }};
                                runtimeRoleArn = "modi";
                                scriptParameters = new org.openapis.openapi.models.shared.ScriptParameterKeyValue[]{{
                                    add(new ScriptParameterKeyValue() {{
                                        key = "aliquid";
                                        value = "cupiditate";
                                    }}),
                                }};
                                secureInitializationRoleArn = "quos";
                                subtype = CreateStudioComponentRequestBodySubtypeEnum.AWS_MANAGED_MICROSOFT_AD;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("assumenda", "ipsam");
                                }};
                            }};, "alias") {{
                xAmzAlgorithm = "fugit";
                xAmzClientToken = "dolorum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "tempora";
                xAmzDate = "facilis";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "delectus";
            }};            

            CreateStudioComponentResponse res = sdk.sdk.createStudioComponent(req);

            if (res.createStudioComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLaunchProfile

Permanently delete a launch profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLaunchProfileRequest;
import org.openapis.openapi.models.operations.DeleteLaunchProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLaunchProfileRequest req = new DeleteLaunchProfileRequest("non", "eligendi") {{
                xAmzAlgorithm = "sint";
                xAmzClientToken = "aliquid";
                xAmzContentSha256 = "provident";
                xAmzCredential = "necessitatibus";
                xAmzDate = "sint";
                xAmzSecurityToken = "officia";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "debitis";
            }};            

            DeleteLaunchProfileResponse res = sdk.sdk.deleteLaunchProfile(req);

            if (res.deleteLaunchProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLaunchProfileMember

Delete a user from launch profile membership.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLaunchProfileMemberRequest;
import org.openapis.openapi.models.operations.DeleteLaunchProfileMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLaunchProfileMemberRequest req = new DeleteLaunchProfileMemberRequest("dolorum", "in", "in") {{
                xAmzAlgorithm = "illum";
                xAmzClientToken = "maiores";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "dicta";
                xAmzDate = "magnam";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "ea";
            }};            

            DeleteLaunchProfileMemberResponse res = sdk.sdk.deleteLaunchProfileMember(req);

            if (res.deleteLaunchProfileMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStreamingImage

Delete streaming image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStreamingImageRequest;
import org.openapis.openapi.models.operations.DeleteStreamingImageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteStreamingImageRequest req = new DeleteStreamingImageRequest("laborum", "accusamus") {{
                xAmzAlgorithm = "non";
                xAmzClientToken = "occaecati";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "delectus";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nam";
            }};            

            DeleteStreamingImageResponse res = sdk.sdk.deleteStreamingImage(req);

            if (res.deleteStreamingImageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStreamingSession

<p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a <code>DELETED</code> state.</p> <p>A streaming session will count against your streaming session quota until it is marked <code>DELETED</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStreamingSessionRequest;
import org.openapis.openapi.models.operations.DeleteStreamingSessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteStreamingSessionRequest req = new DeleteStreamingSessionRequest("blanditiis", "deleniti") {{
                xAmzAlgorithm = "sapiente";
                xAmzClientToken = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "nisi";
                xAmzDate = "vel";
                xAmzSecurityToken = "natus";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "molestiae";
            }};            

            DeleteStreamingSessionResponse res = sdk.sdk.deleteStreamingSession(req);

            if (res.deleteStreamingSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStudio

Delete a studio resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStudioRequest;
import org.openapis.openapi.models.operations.DeleteStudioResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteStudioRequest req = new DeleteStudioRequest("nihil") {{
                xAmzAlgorithm = "magnam";
                xAmzClientToken = "distinctio";
                xAmzContentSha256 = "id";
                xAmzCredential = "labore";
                xAmzDate = "labore";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "nobis";
            }};            

            DeleteStudioResponse res = sdk.sdk.deleteStudio(req);

            if (res.deleteStudioResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStudioComponent

Deletes a studio component resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStudioComponentRequest;
import org.openapis.openapi.models.operations.DeleteStudioComponentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteStudioComponentRequest req = new DeleteStudioComponentRequest("vero", "aspernatur") {{
                xAmzAlgorithm = "architecto";
                xAmzClientToken = "magnam";
                xAmzContentSha256 = "et";
                xAmzCredential = "excepturi";
                xAmzDate = "ullam";
                xAmzSecurityToken = "provident";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "sint";
            }};            

            DeleteStudioComponentResponse res = sdk.sdk.deleteStudioComponent(req);

            if (res.deleteStudioComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStudioMember

Delete a user from studio membership.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStudioMemberRequest;
import org.openapis.openapi.models.operations.DeleteStudioMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteStudioMemberRequest req = new DeleteStudioMemberRequest("mollitia", "reiciendis") {{
                xAmzAlgorithm = "mollitia";
                xAmzClientToken = "ad";
                xAmzContentSha256 = "eum";
                xAmzCredential = "dolor";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "odit";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quasi";
            }};            

            DeleteStudioMemberResponse res = sdk.sdk.deleteStudioMember(req);

            if (res.deleteStudioMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEula

Get EULA.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEulaRequest;
import org.openapis.openapi.models.operations.GetEulaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEulaRequest req = new GetEulaRequest("doloribus") {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "maxime";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "architecto";
            }};            

            GetEulaResponse res = sdk.sdk.getEula(req);

            if (res.getEulaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLaunchProfile

Get a launch profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLaunchProfileRequest;
import org.openapis.openapi.models.operations.GetLaunchProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLaunchProfileRequest req = new GetLaunchProfileRequest("repudiandae", "ullam") {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "repellat";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "sed";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "pariatur";
            }};            

            GetLaunchProfileResponse res = sdk.sdk.getLaunchProfile(req);

            if (res.getLaunchProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLaunchProfileDetails

Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLaunchProfileDetailsRequest;
import org.openapis.openapi.models.operations.GetLaunchProfileDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLaunchProfileDetailsRequest req = new GetLaunchProfileDetailsRequest("consequuntur", "praesentium") {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "magni";
                xAmzCredential = "sunt";
                xAmzDate = "quo";
                xAmzSecurityToken = "illum";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "maxime";
            }};            

            GetLaunchProfileDetailsResponse res = sdk.sdk.getLaunchProfileDetails(req);

            if (res.getLaunchProfileDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLaunchProfileInitialization

Get a launch profile initialization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLaunchProfileInitializationRequest;
import org.openapis.openapi.models.operations.GetLaunchProfileInitializationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLaunchProfileInitializationRequest req = new GetLaunchProfileInitializationRequest("excepturi",                 new String[]{{
                                add("ea"),
                            }}, "accusantium", "ab", "maiores") {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "voluptate";
                xAmzDate = "autem";
                xAmzSecurityToken = "nam";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "pariatur";
            }};            

            GetLaunchProfileInitializationResponse res = sdk.sdk.getLaunchProfileInitialization(req);

            if (res.getLaunchProfileInitializationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLaunchProfileMember

Get a user persona in launch profile membership.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLaunchProfileMemberRequest;
import org.openapis.openapi.models.operations.GetLaunchProfileMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLaunchProfileMemberRequest req = new GetLaunchProfileMemberRequest("voluptatibus", "perferendis", "fugiat") {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "aut";
                xAmzCredential = "cumque";
                xAmzDate = "corporis";
                xAmzSecurityToken = "hic";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "nobis";
            }};            

            GetLaunchProfileMemberResponse res = sdk.sdk.getLaunchProfileMember(req);

            if (res.getLaunchProfileMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStreamingImage

Get streaming image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStreamingImageRequest;
import org.openapis.openapi.models.operations.GetStreamingImageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStreamingImageRequest req = new GetStreamingImageRequest("quis", "totam") {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "quis";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "eos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "dolores";
            }};            

            GetStreamingImageResponse res = sdk.sdk.getStreamingImage(req);

            if (res.getStreamingImageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStreamingSession

<p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStreamingSessionRequest;
import org.openapis.openapi.models.operations.GetStreamingSessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStreamingSessionRequest req = new GetStreamingSessionRequest("quam", "dolor") {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "hic";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            GetStreamingSessionResponse res = sdk.sdk.getStreamingSession(req);

            if (res.getStreamingSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStreamingSessionBackup

<p>Gets <code>StreamingSessionBackup</code> resource.</p> <p>Invoke this operation to poll for a streaming session backup while stopping a streaming session.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStreamingSessionBackupRequest;
import org.openapis.openapi.models.operations.GetStreamingSessionBackupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStreamingSessionBackupRequest req = new GetStreamingSessionBackupRequest("porro", "consequuntur") {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "error";
                xAmzCredential = "eaque";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "asperiores";
            }};            

            GetStreamingSessionBackupResponse res = sdk.sdk.getStreamingSessionBackup(req);

            if (res.getStreamingSessionBackupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStreamingSessionStream

<p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking <code>CreateStreamingSessionStream</code>.</p> <p>After the <code>StreamingSessionStream</code> changes to the <code>READY</code> state, the url property will contain a stream to be used with the DCV streaming client.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStreamingSessionStreamRequest;
import org.openapis.openapi.models.operations.GetStreamingSessionStreamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStreamingSessionStreamRequest req = new GetStreamingSessionStreamRequest("modi", "iste", "dolorum") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "provident";
                xAmzDate = "nobis";
                xAmzSecurityToken = "libero";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quaerat";
            }};            

            GetStreamingSessionStreamResponse res = sdk.sdk.getStreamingSessionStream(req);

            if (res.getStreamingSessionStreamResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStudio

Get a studio resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStudioRequest;
import org.openapis.openapi.models.operations.GetStudioResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStudioRequest req = new GetStudioRequest("aliquid") {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolor";
                xAmzDate = "qui";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "excepturi";
            }};            

            GetStudioResponse res = sdk.sdk.getStudio(req);

            if (res.getStudioResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStudioComponent

Gets a studio component resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStudioComponentRequest;
import org.openapis.openapi.models.operations.GetStudioComponentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStudioComponentRequest req = new GetStudioComponentRequest("voluptate", "dignissimos") {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "amet";
                xAmzCredential = "dolorum";
                xAmzDate = "numquam";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "ipsa";
            }};            

            GetStudioComponentResponse res = sdk.sdk.getStudioComponent(req);

            if (res.getStudioComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStudioMember

Get a user's membership in a studio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStudioMemberRequest;
import org.openapis.openapi.models.operations.GetStudioMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStudioMemberRequest req = new GetStudioMemberRequest("odio", "quaerat") {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "voluptatibus";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "natus";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "atque";
            }};            

            GetStudioMemberResponse res = sdk.sdk.getStudioMember(req);

            if (res.getStudioMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEulaAcceptances

List EULA acceptances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEulaAcceptancesRequest;
import org.openapis.openapi.models.operations.ListEulaAcceptancesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEulaAcceptancesRequest req = new ListEulaAcceptancesRequest("fugiat") {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dolorum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
                eulaIds = new String[]{{
                    add("necessitatibus"),
                    add("distinctio"),
                    add("asperiores"),
                }};
                nextToken = "nihil";
            }};            

            ListEulaAcceptancesResponse res = sdk.sdk.listEulaAcceptances(req);

            if (res.listEulaAcceptancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEulas

List EULAs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEulasRequest;
import org.openapis.openapi.models.operations.ListEulasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEulasRequest req = new ListEulasRequest() {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "id";
                xAmzCredential = "saepe";
                xAmzDate = "eius";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "amet";
                eulaIds = new String[]{{
                    add("accusamus"),
                    add("ad"),
                    add("saepe"),
                    add("suscipit"),
                }};
                nextToken = "deserunt";
            }};            

            ListEulasResponse res = sdk.sdk.listEulas(req);

            if (res.listEulasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLaunchProfileMembers

Get all users in a given launch profile membership.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLaunchProfileMembersRequest;
import org.openapis.openapi.models.operations.ListLaunchProfileMembersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLaunchProfileMembersRequest req = new ListLaunchProfileMembersRequest("minima", "repellendus") {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "similique";
                xAmzCredential = "alias";
                xAmzDate = "at";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "vel";
                maxResults = 798047L;
                nextToken = "officiis";
            }};            

            ListLaunchProfileMembersResponse res = sdk.sdk.listLaunchProfileMembers(req);

            if (res.listLaunchProfileMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLaunchProfiles

List all the launch profiles a studio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLaunchProfilesRequest;
import org.openapis.openapi.models.operations.ListLaunchProfilesResponse;
import org.openapis.openapi.models.shared.LaunchProfileStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLaunchProfilesRequest req = new ListLaunchProfilesRequest("dolorum") {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "esse";
                xAmzCredential = "harum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "tenetur";
                maxResults = 229442L;
                nextToken = "tempore";
                principalId = "accusamus";
                states = new org.openapis.openapi.models.shared.LaunchProfileStateEnum[]{{
                    add(LaunchProfileStateEnum.UPDATE_IN_PROGRESS),
                    add(LaunchProfileStateEnum.READY),
                }};
            }};            

            ListLaunchProfilesResponse res = sdk.sdk.listLaunchProfiles(req);

            if (res.listLaunchProfilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStreamingImages

<p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by Amazon Web Services, as well as streaming images that you have created in your studio.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStreamingImagesRequest;
import org.openapis.openapi.models.operations.ListStreamingImagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStreamingImagesRequest req = new ListStreamingImagesRequest("totam") {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "sit";
                xAmzCredential = "expedita";
                xAmzDate = "neque";
                xAmzSecurityToken = "sed";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "libero";
                nextToken = "voluptas";
                owner = "deserunt";
            }};            

            ListStreamingImagesResponse res = sdk.sdk.listStreamingImages(req);

            if (res.listStreamingImagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStreamingSessionBackups

Lists the backups of a streaming session in a studio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStreamingSessionBackupsRequest;
import org.openapis.openapi.models.operations.ListStreamingSessionBackupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStreamingSessionBackupsRequest req = new ListStreamingSessionBackupsRequest("ipsum") {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "qui";
                xAmzCredential = "cupiditate";
                xAmzDate = "maxime";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "dicta";
                nextToken = "laborum";
                ownedBy = "totam";
            }};            

            ListStreamingSessionBackupsResponse res = sdk.sdk.listStreamingSessionBackups(req);

            if (res.listStreamingSessionBackupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStreamingSessions

Lists the streaming sessions in a studio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStreamingSessionsRequest;
import org.openapis.openapi.models.operations.ListStreamingSessionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStreamingSessionsRequest req = new ListStreamingSessionsRequest("aspernatur") {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "facilis";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "temporibus";
                createdBy = "qui";
                nextToken = "neque";
                ownedBy = "fugit";
                sessionIds = "magni";
            }};            

            ListStreamingSessionsResponse res = sdk.sdk.listStreamingSessions(req);

            if (res.listStreamingSessionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStudioComponents

Lists the <code>StudioComponents</code> in a studio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStudioComponentsRequest;
import org.openapis.openapi.models.operations.ListStudioComponentsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StudioComponentStateEnum;
import org.openapis.openapi.models.shared.StudioComponentTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStudioComponentsRequest req = new ListStudioComponentsRequest("sunt") {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nam";
                xAmzCredential = "hic";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "nobis";
                maxResults = 92596L;
                nextToken = "saepe";
                states = new org.openapis.openapi.models.shared.StudioComponentStateEnum[]{{
                    add(StudioComponentStateEnum.CREATE_IN_PROGRESS),
                }};
                types = new org.openapis.openapi.models.shared.StudioComponentTypeEnum[]{{
                    add(StudioComponentTypeEnum.COMPUTE_FARM),
                    add(StudioComponentTypeEnum.LICENSE_SERVICE),
                    add(StudioComponentTypeEnum.COMPUTE_FARM),
                }};
            }};            

            ListStudioComponentsResponse res = sdk.sdk.listStudioComponents(req);

            if (res.listStudioComponentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStudioMembers

<p>Get all users in a given studio membership.</p> <note> <p> <code>ListStudioMembers</code> only returns admin members.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStudioMembersRequest;
import org.openapis.openapi.models.operations.ListStudioMembersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStudioMembersRequest req = new ListStudioMembersRequest("delectus") {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "labore";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "quae";
                maxResults = 16429L;
                nextToken = "quas";
            }};            

            ListStudioMembersResponse res = sdk.sdk.listStudioMembers(req);

            if (res.listStudioMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStudios

List studios in your Amazon Web Services accounts in the requested Amazon Web Services Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStudiosRequest;
import org.openapis.openapi.models.operations.ListStudiosResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStudiosRequest req = new ListStudiosRequest() {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "repellendus";
                xAmzDate = "porro";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "facilis";
                nextToken = "cupiditate";
            }};            

            ListStudiosResponse res = sdk.sdk.listStudios(req);

            if (res.listStudiosResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p> <p>This operation supports ARNs for all resource types in Nimble Studio that support tags, including studio, studio component, launch profile, streaming image, and streaming session. All resources that can be tagged will contain an ARN property, so you do not have to create this ARN yourself.</p>

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
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("quae") {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "odio";
                xAmzCredential = "occaecati";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "omnis";
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

## putLaunchProfileMembers

Add/update users with given persona to launch profile membership.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutLaunchProfileMembersRequest;
import org.openapis.openapi.models.operations.PutLaunchProfileMembersRequestBody;
import org.openapis.openapi.models.operations.PutLaunchProfileMembersResponse;
import org.openapis.openapi.models.shared.LaunchProfilePersonaEnum;
import org.openapis.openapi.models.shared.NewLaunchProfileMember;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutLaunchProfileMembersRequest req = new PutLaunchProfileMembersRequest(                new PutLaunchProfileMembersRequestBody("ipsum",                 new org.openapis.openapi.models.shared.NewLaunchProfileMember[]{{
                                                add(new NewLaunchProfileMember(LaunchProfilePersonaEnum.USER, "consectetur") {{
                                                    persona = LaunchProfilePersonaEnum.USER;
                                                    principalId = "voluptate";
                                                }}),
                                                add(new NewLaunchProfileMember(LaunchProfilePersonaEnum.USER, "tenetur") {{
                                                    persona = LaunchProfilePersonaEnum.USER;
                                                    principalId = "vero";
                                                }}),
                                                add(new NewLaunchProfileMember(LaunchProfilePersonaEnum.USER, "hic") {{
                                                    persona = LaunchProfilePersonaEnum.USER;
                                                    principalId = "dignissimos";
                                                }}),
                                                add(new NewLaunchProfileMember(LaunchProfilePersonaEnum.USER, "quod") {{
                                                    persona = LaunchProfilePersonaEnum.USER;
                                                    principalId = "distinctio";
                                                }}),
                                            }});, "odio", "similique") {{
                xAmzAlgorithm = "facilis";
                xAmzClientToken = "vero";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "dolore";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "illum";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "natus";
            }};            

            PutLaunchProfileMembersResponse res = sdk.sdk.putLaunchProfileMembers(req);

            if (res.putLaunchProfileMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putStudioMembers

Add/update users with given persona to studio membership.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutStudioMembersRequest;
import org.openapis.openapi.models.operations.PutStudioMembersRequestBody;
import org.openapis.openapi.models.operations.PutStudioMembersResponse;
import org.openapis.openapi.models.shared.NewStudioMember;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StudioPersonaEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutStudioMembersRequest req = new PutStudioMembersRequest(                new PutStudioMembersRequestBody("aut",                 new org.openapis.openapi.models.shared.NewStudioMember[]{{
                                                add(new NewStudioMember(StudioPersonaEnum.ADMINISTRATOR, "nulla") {{
                                                    persona = StudioPersonaEnum.ADMINISTRATOR;
                                                    principalId = "exercitationem";
                                                }}),
                                                add(new NewStudioMember(StudioPersonaEnum.ADMINISTRATOR, "porro") {{
                                                    persona = StudioPersonaEnum.ADMINISTRATOR;
                                                    principalId = "fugit";
                                                }}),
                                                add(new NewStudioMember(StudioPersonaEnum.ADMINISTRATOR, "doloribus") {{
                                                    persona = StudioPersonaEnum.ADMINISTRATOR;
                                                    principalId = "maiores";
                                                }}),
                                                add(new NewStudioMember(StudioPersonaEnum.ADMINISTRATOR, "eligendi") {{
                                                    persona = StudioPersonaEnum.ADMINISTRATOR;
                                                    principalId = "iusto";
                                                }}),
                                            }});, "ducimus") {{
                xAmzAlgorithm = "alias";
                xAmzClientToken = "officia";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "ipsam";
                xAmzDate = "ea";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "possimus";
            }};            

            PutStudioMembersResponse res = sdk.sdk.putStudioMembers(req);

            if (res.putStudioMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startStreamingSession

Transitions sessions from the <code>STOPPED</code> state into the <code>READY</code> state. The <code>START_IN_PROGRESS</code> state is the intermediate state between the <code>STOPPED</code> and <code>READY</code> states.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartStreamingSessionRequest;
import org.openapis.openapi.models.operations.StartStreamingSessionRequestBody;
import org.openapis.openapi.models.operations.StartStreamingSessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartStreamingSessionRequest req = new StartStreamingSessionRequest(                new StartStreamingSessionRequestBody() {{
                                backupId = "ratione";
                            }};, "ex", "laudantium") {{
                xAmzAlgorithm = "dicta";
                xAmzClientToken = "dolor";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quasi";
                xAmzDate = "ex";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            StartStreamingSessionResponse res = sdk.sdk.startStreamingSession(req);

            if (res.startStreamingSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startStudioSSOConfigurationRepair

<p>Repairs the IAM Identity Center configuration for a given studio.</p> <p>If the studio has a valid IAM Identity Center configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid IAM Identity Center configuration currently associated with it, then a new IAM Identity Center application is created for the studio and the studio is changed to the <code>READY</code> state.</p> <p>After the IAM Identity Center application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartStudioSSOConfigurationRepairRequest;
import org.openapis.openapi.models.operations.StartStudioSSOConfigurationRepairResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartStudioSSOConfigurationRepairRequest req = new StartStudioSSOConfigurationRepairRequest("sapiente") {{
                xAmzAlgorithm = "quisquam";
                xAmzClientToken = "saepe";
                xAmzContentSha256 = "ea";
                xAmzCredential = "impedit";
                xAmzDate = "corporis";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "inventore";
            }};            

            StartStudioSSOConfigurationRepairResponse res = sdk.sdk.startStudioSSOConfigurationRepair(req);

            if (res.startStudioSSOConfigurationRepairResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopStreamingSession

Transitions sessions from the <code>READY</code> state into the <code>STOPPED</code> state. The <code>STOP_IN_PROGRESS</code> state is the intermediate state between the <code>READY</code> and <code>STOPPED</code> states.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopStreamingSessionRequest;
import org.openapis.openapi.models.operations.StopStreamingSessionRequestBody;
import org.openapis.openapi.models.operations.StopStreamingSessionRequestBodyVolumeRetentionModeEnum;
import org.openapis.openapi.models.operations.StopStreamingSessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopStreamingSessionRequest req = new StopStreamingSessionRequest(                new StopStreamingSessionRequestBody() {{
                                volumeRetentionMode = StopStreamingSessionRequestBodyVolumeRetentionModeEnum.RETAIN;
                            }};, "quo", "consectetur") {{
                xAmzAlgorithm = "recusandae";
                xAmzClientToken = "aspernatur";
                xAmzContentSha256 = "minima";
                xAmzCredential = "eaque";
                xAmzDate = "a";
                xAmzSecurityToken = "libero";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "aut";
            }};            

            StopStreamingSessionResponse res = sdk.sdk.stopStreamingSession(req);

            if (res.stopStreamingSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Creates tags for a resource, given its ARN.

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
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody() {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("aliquam", "fugit");
                                    put("accusamus", "inventore");
                                    put("non", "et");
                                    put("dolorum", "laborum");
                                }};
                            }};, "placeat") {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "eum";
                xAmzCredential = "autem";
                xAmzDate = "nobis";
                xAmzSecurityToken = "quas";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "nulla";
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

Deletes the tags for a resource.

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
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("libero",                 new String[]{{
                                add("tempora"),
                            }}) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "provident";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "odio";
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

## updateLaunchProfile

Update a launch profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLaunchProfileRequest;
import org.openapis.openapi.models.operations.UpdateLaunchProfileRequestBody;
import org.openapis.openapi.models.operations.UpdateLaunchProfileRequestBodyStreamConfiguration;
import org.openapis.openapi.models.operations.UpdateLaunchProfileResponse;
import org.openapis.openapi.models.shared.AutomaticTerminationModeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SessionBackupModeEnum;
import org.openapis.openapi.models.shared.SessionPersistenceModeEnum;
import org.openapis.openapi.models.shared.StreamConfigurationSessionBackup;
import org.openapis.openapi.models.shared.StreamConfigurationSessionStorage;
import org.openapis.openapi.models.shared.StreamingClipboardModeEnum;
import org.openapis.openapi.models.shared.StreamingInstanceTypeEnum;
import org.openapis.openapi.models.shared.StreamingSessionStorageModeEnum;
import org.openapis.openapi.models.shared.StreamingSessionStorageRoot;
import org.openapis.openapi.models.shared.VolumeConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLaunchProfileRequest req = new UpdateLaunchProfileRequest(                new UpdateLaunchProfileRequestBody() {{
                                description = "esse";
                                launchProfileProtocolVersions = new String[]{{
                                    add("rem"),
                                    add("fuga"),
                                }};
                                name = "reprehenderit";
                                streamConfiguration = new UpdateLaunchProfileRequestBodyStreamConfiguration() {{
                                    automaticTerminationMode = AutomaticTerminationModeEnum.ACTIVATED;
                                    clipboardMode = StreamingClipboardModeEnum.DISABLED;
                                    ec2InstanceTypes = new org.openapis.openapi.models.shared.StreamingInstanceTypeEnum[]{{
                                        add(StreamingInstanceTypeEnum.G4DN16XLARGE),
                                        add(StreamingInstanceTypeEnum.G4DN12XLARGE),
                                    }};
                                    maxSessionLengthInMinutes = 826871L;
                                    maxStoppedSessionLengthInMinutes = 181151L;
                                    sessionBackup = new StreamConfigurationSessionBackup() {{
                                        maxBackupsToRetain = 509342L;
                                        mode = SessionBackupModeEnum.DEACTIVATED;
                                    }};;
                                    sessionPersistenceMode = SessionPersistenceModeEnum.DEACTIVATED;
                                    sessionStorage = new StreamConfigurationSessionStorage(                new org.openapis.openapi.models.shared.StreamingSessionStorageModeEnum[]{{
                                                        add(StreamingSessionStorageModeEnum.UPLOAD),
                                                    }}) {{
                                        root = new StreamingSessionStorageRoot() {{
                                            linux = "id";
                                            windows = "quidem";
                                        }};;
                                    }};;
                                    streamingImageIds = new String[]{{
                                        add("quo"),
                                    }};
                                    volumeConfiguration = new VolumeConfiguration() {{
                                        iops = 847276L;
                                        size = 777408L;
                                        throughput = 681359L;
                                    }};;
                                }};;
                                studioComponentIds = new String[]{{
                                    add("eos"),
                                    add("voluptas"),
                                }};
                            }};, "ab", "cupiditate") {{
                xAmzAlgorithm = "consequatur";
                xAmzClientToken = "tempora";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsam";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "esse";
            }};            

            UpdateLaunchProfileResponse res = sdk.sdk.updateLaunchProfile(req);

            if (res.updateLaunchProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLaunchProfileMember

Update a user persona in launch profile membership.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLaunchProfileMemberRequest;
import org.openapis.openapi.models.operations.UpdateLaunchProfileMemberRequestBody;
import org.openapis.openapi.models.operations.UpdateLaunchProfileMemberRequestBodyPersonaEnum;
import org.openapis.openapi.models.operations.UpdateLaunchProfileMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLaunchProfileMemberRequest req = new UpdateLaunchProfileMemberRequest(                new UpdateLaunchProfileMemberRequestBody(UpdateLaunchProfileMemberRequestBodyPersonaEnum.USER);, "aperiam", "distinctio", "quod") {{
                xAmzAlgorithm = "dignissimos";
                xAmzClientToken = "inventore";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "totam";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "occaecati";
            }};            

            UpdateLaunchProfileMemberResponse res = sdk.sdk.updateLaunchProfileMember(req);

            if (res.updateLaunchProfileMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStreamingImage

Update streaming image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStreamingImageRequest;
import org.openapis.openapi.models.operations.UpdateStreamingImageRequestBody;
import org.openapis.openapi.models.operations.UpdateStreamingImageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateStreamingImageRequest req = new UpdateStreamingImageRequest(                new UpdateStreamingImageRequestBody() {{
                                description = "sapiente";
                                name = "dolores";
                            }};, "deserunt", "molestiae") {{
                xAmzAlgorithm = "accusantium";
                xAmzClientToken = "porro";
                xAmzContentSha256 = "eum";
                xAmzCredential = "quas";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "fugit";
            }};            

            UpdateStreamingImageResponse res = sdk.sdk.updateStreamingImage(req);

            if (res.updateStreamingImageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStudio

<p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStudioRequest;
import org.openapis.openapi.models.operations.UpdateStudioRequestBody;
import org.openapis.openapi.models.operations.UpdateStudioResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateStudioRequest req = new UpdateStudioRequest(                new UpdateStudioRequestBody() {{
                                adminRoleArn = "mollitia";
                                displayName = "incidunt";
                                userRoleArn = "atque";
                            }};, "explicabo") {{
                xAmzAlgorithm = "minima";
                xAmzClientToken = "nisi";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "sapiente";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateStudioResponse res = sdk.sdk.updateStudio(req);

            if (res.updateStudioResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStudioComponent

Updates a studio component resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStudioComponentRequest;
import org.openapis.openapi.models.operations.UpdateStudioComponentRequestBody;
import org.openapis.openapi.models.operations.UpdateStudioComponentRequestBodyConfiguration;
import org.openapis.openapi.models.operations.UpdateStudioComponentRequestBodySubtypeEnum;
import org.openapis.openapi.models.operations.UpdateStudioComponentRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.UpdateStudioComponentResponse;
import org.openapis.openapi.models.shared.ActiveDirectoryComputerAttribute;
import org.openapis.openapi.models.shared.ActiveDirectoryConfiguration;
import org.openapis.openapi.models.shared.ComputeFarmConfiguration;
import org.openapis.openapi.models.shared.LaunchProfilePlatformEnum;
import org.openapis.openapi.models.shared.LicenseServiceConfiguration;
import org.openapis.openapi.models.shared.ScriptParameterKeyValue;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SharedFileSystemConfiguration;
import org.openapis.openapi.models.shared.StudioComponentInitializationScript;
import org.openapis.openapi.models.shared.StudioComponentInitializationScriptRunContextEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateStudioComponentRequest req = new UpdateStudioComponentRequest(                new UpdateStudioComponentRequestBody() {{
                                configuration = new UpdateStudioComponentRequestBodyConfiguration() {{
                                    activeDirectoryConfiguration = new ActiveDirectoryConfiguration() {{
                                        computerAttributes = new org.openapis.openapi.models.shared.ActiveDirectoryComputerAttribute[]{{
                                            add(new ActiveDirectoryComputerAttribute() {{
                                                name = "Tamara Vandervort IV";
                                                value = "quod";
                                            }}),
                                            add(new ActiveDirectoryComputerAttribute() {{
                                                name = "Dr. Ignacio Jacobi";
                                                value = "harum";
                                            }}),
                                            add(new ActiveDirectoryComputerAttribute() {{
                                                name = "Luz McClure";
                                                value = "eligendi";
                                            }}),
                                        }};
                                        directoryId = "sit";
                                        organizationalUnitDistinguishedName = "culpa";
                                    }};;
                                    computeFarmConfiguration = new ComputeFarmConfiguration() {{
                                        activeDirectoryUser = "tempore";
                                        endpoint = "adipisci";
                                    }};;
                                    licenseServiceConfiguration = new LicenseServiceConfiguration() {{
                                        endpoint = "cumque";
                                    }};;
                                    sharedFileSystemConfiguration = new SharedFileSystemConfiguration() {{
                                        endpoint = "consequuntur";
                                        fileSystemId = "consequatur";
                                        linuxMountPoint = "minus";
                                        shareName = "quaerat";
                                        windowsMountDrive = "sapiente";
                                    }};;
                                }};;
                                description = "consectetur";
                                ec2SecurityGroupIds = new String[]{{
                                    add("blanditiis"),
                                    add("provident"),
                                }};
                                initializationScripts = new org.openapis.openapi.models.shared.StudioComponentInitializationScript[]{{
                                    add(new StudioComponentInitializationScript() {{
                                        launchProfileProtocolVersion = "nulla";
                                        platform = LaunchProfilePlatformEnum.WINDOWS;
                                        runContext = StudioComponentInitializationScriptRunContextEnum.SYSTEM_INITIALIZATION;
                                        script = "quasi";
                                    }}),
                                    add(new StudioComponentInitializationScript() {{
                                        launchProfileProtocolVersion = "a";
                                        platform = LaunchProfilePlatformEnum.WINDOWS;
                                        runContext = StudioComponentInitializationScriptRunContextEnum.USER_INITIALIZATION;
                                        script = "pariatur";
                                    }}),
                                    add(new StudioComponentInitializationScript() {{
                                        launchProfileProtocolVersion = "possimus";
                                        platform = LaunchProfilePlatformEnum.LINUX;
                                        runContext = StudioComponentInitializationScriptRunContextEnum.USER_INITIALIZATION;
                                        script = "asperiores";
                                    }}),
                                    add(new StudioComponentInitializationScript() {{
                                        launchProfileProtocolVersion = "facere";
                                        platform = LaunchProfilePlatformEnum.LINUX;
                                        runContext = StudioComponentInitializationScriptRunContextEnum.SYSTEM_INITIALIZATION;
                                        script = "quasi";
                                    }}),
                                }};
                                name = "similique";
                                runtimeRoleArn = "culpa";
                                scriptParameters = new org.openapis.openapi.models.shared.ScriptParameterKeyValue[]{{
                                    add(new ScriptParameterKeyValue() {{
                                        key = "tenetur";
                                        value = "quae";
                                    }}),
                                    add(new ScriptParameterKeyValue() {{
                                        key = "earum";
                                        value = "vel";
                                    }}),
                                }};
                                secureInitializationRoleArn = "in";
                                subtype = UpdateStudioComponentRequestBodySubtypeEnum.AMAZON_FSX_FOR_WINDOWS;
                                type = UpdateStudioComponentRequestBodyTypeEnum.LICENSE_SERVICE;
                            }};, "illum", "soluta") {{
                xAmzAlgorithm = "accusantium";
                xAmzClientToken = "aliquam";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "dicta";
                xAmzDate = "ullam";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "nisi";
            }};            

            UpdateStudioComponentResponse res = sdk.sdk.updateStudioComponent(req);

            if (res.updateStudioComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
