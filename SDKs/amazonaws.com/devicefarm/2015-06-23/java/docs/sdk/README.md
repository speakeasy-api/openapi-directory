# SDK

## Overview

<p>Welcome to the AWS Device Farm API documentation, which contains APIs for:</p> <ul> <li> <p>Testing on desktop browsers</p> <p> Device Farm makes it possible for you to test your web applications on desktop browsers using Selenium. The APIs for desktop browser testing contain <code>TestGrid</code> in their names. For more information, see <a href="https://docs.aws.amazon.com/devicefarm/latest/testgrid/">Testing Web Applications on Selenium with Device Farm</a>.</p> </li> <li> <p>Testing on real mobile devices</p> <p>Device Farm makes it possible for you to test apps on physical phones, tablets, and other devices in the cloud. For more information, see the <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/">Device Farm Developer Guide</a>.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/devicefarm/>
### Available Operations

* [createDevicePool](#createdevicepool) - Creates a device pool.
* [createInstanceProfile](#createinstanceprofile) - Creates a profile that can be applied to one or more private fleet device instances.
* [createNetworkProfile](#createnetworkprofile) - Creates a network profile.
* [createProject](#createproject) - Creates a project.
* [createRemoteAccessSession](#createremoteaccesssession) - Specifies and starts a remote access session.
* [createTestGridProject](#createtestgridproject) - Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a> instances.
* [createTestGridUrl](#createtestgridurl) - Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code> constructor.
* [createUpload](#createupload) - Uploads an app or test scripts.
* [createVPCEConfiguration](#createvpceconfiguration) - Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.
* [deleteDevicePool](#deletedevicepool) - Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.
* [deleteInstanceProfile](#deleteinstanceprofile) - Deletes a profile that can be applied to one or more private device instances.
* [deleteNetworkProfile](#deletenetworkprofile) - Deletes a network profile.
* [deleteProject](#deleteproject) - <p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
* [deleteRemoteAccessSession](#deleteremoteaccesssession) - Deletes a completed remote access session and its results.
* [deleteRun](#deleterun) - <p>Deletes the run, given the run ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
* [deleteTestGridProject](#deletetestgridproject) - <p> Deletes a Selenium testing project and all content generated under it. </p> <important> <p>You cannot undo this operation.</p> </important> <note> <p>You cannot delete a project if it has active sessions.</p> </note>
* [deleteUpload](#deleteupload) - Deletes an upload given the upload ARN.
* [deleteVPCEConfiguration](#deletevpceconfiguration) - Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.
* [getAccountSettings](#getaccountsettings) - Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.
* [getDevice](#getdevice) - Gets information about a unique device type.
* [getDeviceInstance](#getdeviceinstance) - Returns information about a device instance that belongs to a private device fleet.
* [getDevicePool](#getdevicepool) - Gets information about a device pool.
* [getDevicePoolCompatibility](#getdevicepoolcompatibility) - Gets information about compatibility with a device pool.
* [getInstanceProfile](#getinstanceprofile) - Returns information about the specified instance profile.
* [getJob](#getjob) - Gets information about a job.
* [getNetworkProfile](#getnetworkprofile) - Returns information about a network profile.
* [getOfferingStatus](#getofferingstatus) - Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [getProject](#getproject) - Gets information about a project.
* [getRemoteAccessSession](#getremoteaccesssession) - Returns a link to a currently running remote access session.
* [getRun](#getrun) - Gets information about a run.
* [getSuite](#getsuite) - Gets information about a suite.
* [getTest](#gettest) - Gets information about a test.
* [getTestGridProject](#gettestgridproject) - Retrieves information about a Selenium testing project.
* [getTestGridSession](#gettestgridsession) - <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p> <ul> <li> <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p> </li> <li> <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p> </li> </ul> <p/>
* [getUpload](#getupload) - Gets information about an upload.
* [getVPCEConfiguration](#getvpceconfiguration) - Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.
* [installToRemoteAccessSession](#installtoremoteaccesssession) - Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.
* [listArtifacts](#listartifacts) - Gets information about artifacts.
* [listDeviceInstances](#listdeviceinstances) - Returns information about the private device instances associated with one or more AWS accounts.
* [listDevicePools](#listdevicepools) - Gets information about device pools.
* [listDevices](#listdevices) - Gets information about unique device types.
* [listInstanceProfiles](#listinstanceprofiles) - Returns information about all the instance profiles in an AWS account.
* [listJobs](#listjobs) - Gets information about jobs for a given test run.
* [listNetworkProfiles](#listnetworkprofiles) - Returns the list of available network profiles.
* [listOfferingPromotions](#listofferingpromotions) - Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.
* [listOfferingTransactions](#listofferingtransactions) - Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [listOfferings](#listofferings) - Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [listProjects](#listprojects) - Gets information about projects.
* [listRemoteAccessSessions](#listremoteaccesssessions) - Returns a list of all currently running remote access sessions.
* [listRuns](#listruns) - Gets information about runs, given an AWS Device Farm project ARN.
* [listSamples](#listsamples) - Gets information about samples, given an AWS Device Farm job ARN.
* [listSuites](#listsuites) - Gets information about test suites for a given job.
* [listTagsForResource](#listtagsforresource) - List the tags for an AWS Device Farm resource.
* [listTestGridProjects](#listtestgridprojects) - Gets a list of all Selenium testing projects in your account.
* [listTestGridSessionActions](#listtestgridsessionactions) - Returns a list of the actions taken in a <a>TestGridSession</a>.
* [listTestGridSessionArtifacts](#listtestgridsessionartifacts) - Retrieves a list of artifacts created during the session.
* [listTestGridSessions](#listtestgridsessions) - Retrieves a list of sessions for a <a>TestGridProject</a>.
* [listTests](#listtests) - Gets information about tests in a given test suite.
* [listUniqueProblems](#listuniqueproblems) - <p>Gets information about unique problems, such as exceptions or crashes.</p> <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (<code>OutOfBoundsException in MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many individual entries for that exception.</p>
* [listUploads](#listuploads) - Gets information about uploads, given an AWS Device Farm project ARN.
* [listVPCEConfigurations](#listvpceconfigurations) - Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.
* [purchaseOffering](#purchaseoffering) - Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [renewOffering](#renewoffering) - Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [scheduleRun](#schedulerun) - Schedules a run.
* [stopJob](#stopjob) - Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device where tests have not started. You are not billed for this device. On the device where tests have started, setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown, and any tests that were in progress or already completed.
* [stopRemoteAccessSession](#stopremoteaccesssession) - Ends a specified remote access session.
* [stopRun](#stoprun) - Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices where tests have not started. You are not billed for these devices. On devices where tests have started executing, setup suite and teardown suite tests run to completion on those devices. You are billed for setup, teardown, and any tests that were in progress or already completed.
* [tagResource](#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
* [untagResource](#untagresource) - Deletes the specified tags from a resource.
* [updateDeviceInstance](#updatedeviceinstance) - Updates information about a private device instance.
* [updateDevicePool](#updatedevicepool) - Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).
* [updateInstanceProfile](#updateinstanceprofile) - Updates information about an existing private device instance profile.
* [updateNetworkProfile](#updatenetworkprofile) - Updates the network profile.
* [updateProject](#updateproject) - Modifies the specified project name, given the project ARN and a new name.
* [updateTestGridProject](#updatetestgridproject) - Change details of a project.
* [updateUpload](#updateupload) - Updates an uploaded test spec.
* [updateVPCEConfiguration](#updatevpceconfiguration) - Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.

## createDevicePool

Creates a device pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDevicePoolRequest;
import org.openapis.openapi.models.operations.CreateDevicePoolResponse;
import org.openapis.openapi.models.operations.CreateDevicePoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDevicePoolRequest;
import org.openapis.openapi.models.shared.DeviceAttributeEnum;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleOperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDevicePoolRequest req = new CreateDevicePoolRequest(                new CreateDevicePoolRequest("recusandae", "temporibus",                 new org.openapis.openapi.models.shared.Rule[]{{
                                                add(new Rule() {{
                                                    attribute = DeviceAttributeEnum.REMOTE_ACCESS_ENABLED;
                                                    operator = RuleOperatorEnum.EQUALS;
                                                    value = "deserunt";
                                                }}),
                                            }}) {{
                                description = "perferendis";
                                maxDevices = 368241L;
                            }};, CreateDevicePoolXAmzTargetEnum.DEVICE_FARM20150623_CREATE_DEVICE_POOL) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quo";
                xAmzDate = "odit";
                xAmzSecurityToken = "at";
                xAmzSignature = "at";
                xAmzSignedHeaders = "maiores";
            }};            

            CreateDevicePoolResponse res = sdk.sdk.createDevicePool(req);

            if (res.createDevicePoolResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInstanceProfile

Creates a profile that can be applied to one or more private fleet device instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInstanceProfileRequest;
import org.openapis.openapi.models.operations.CreateInstanceProfileResponse;
import org.openapis.openapi.models.operations.CreateInstanceProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateInstanceProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateInstanceProfileRequest req = new CreateInstanceProfileRequest(                new CreateInstanceProfileRequest("quod") {{
                                description = "quod";
                                excludeAppPackagesFromCleanup = new String[]{{
                                    add("totam"),
                                    add("porro"),
                                }};
                                packageCleanup = false;
                                rebootAfterUse = false;
                            }};, CreateInstanceProfileXAmzTargetEnum.DEVICE_FARM20150623_CREATE_INSTANCE_PROFILE) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
            }};            

            CreateInstanceProfileResponse res = sdk.sdk.createInstanceProfile(req);

            if (res.createInstanceProfileResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkProfile

Creates a network profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkProfileRequest;
import org.openapis.openapi.models.operations.CreateNetworkProfileResponse;
import org.openapis.openapi.models.operations.CreateNetworkProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateNetworkProfileRequest;
import org.openapis.openapi.models.shared.NetworkProfileTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkProfileRequest req = new CreateNetworkProfileRequest(                new CreateNetworkProfileRequest("optio", "totam") {{
                                description = "beatae";
                                downlinkBandwidthBits = 414662L;
                                downlinkDelayMs = 473600L;
                                downlinkJitterMs = 264555L;
                                downlinkLossPercent = 186332L;
                                type = NetworkProfileTypeEnum.PRIVATE_;
                                uplinkBandwidthBits = 736918L;
                                uplinkDelayMs = 456150L;
                                uplinkJitterMs = 216550L;
                                uplinkLossPercent = 568434L;
                            }};, CreateNetworkProfileXAmzTargetEnum.DEVICE_FARM20150623_CREATE_NETWORK_PROFILE) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ad";
                xAmzDate = "natus";
                xAmzSecurityToken = "sed";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolor";
            }};            

            CreateNetworkProfileResponse res = sdk.sdk.createNetworkProfile(req);

            if (res.createNetworkProfileResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProject

Creates a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectResponse;
import org.openapis.openapi.models.operations.CreateProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateProjectRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProjectRequest req = new CreateProjectRequest(                new CreateProjectRequest("laboriosam") {{
                                defaultJobTimeoutMinutes = 943749L;
                                vpcConfig = new VpcConfig(                new String[]{{
                                                    add("fuga"),
                                                    add("in"),
                                                    add("corporis"),
                                                    add("iste"),
                                                }},                 new String[]{{
                                                    add("saepe"),
                                                    add("quidem"),
                                                }}, "architecto");;
                            }};, CreateProjectXAmzTargetEnum.DEVICE_FARM20150623_CREATE_PROJECT) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "est";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "dolorem";
            }};            

            CreateProjectResponse res = sdk.sdk.createProject(req);

            if (res.createProjectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRemoteAccessSession

Specifies and starts a remote access session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRemoteAccessSessionRequest;
import org.openapis.openapi.models.operations.CreateRemoteAccessSessionResponse;
import org.openapis.openapi.models.operations.CreateRemoteAccessSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.BillingMethodEnum;
import org.openapis.openapi.models.shared.CreateRemoteAccessSessionConfiguration;
import org.openapis.openapi.models.shared.CreateRemoteAccessSessionRequest;
import org.openapis.openapi.models.shared.InteractionModeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRemoteAccessSessionRequest req = new CreateRemoteAccessSessionRequest(                new CreateRemoteAccessSessionRequest("explicabo", "nobis") {{
                                clientId = "enim";
                                configuration = new CreateRemoteAccessSessionConfiguration() {{
                                    billingMethod = BillingMethodEnum.UNMETERED;
                                    vpceConfigurationArns = new String[]{{
                                        add("minima"),
                                        add("excepturi"),
                                    }};
                                }};;
                                instanceArn = "accusantium";
                                interactionMode = InteractionModeEnum.NO_VIDEO;
                                name = "Miss Aubrey Williamson";
                                remoteDebugEnabled = false;
                                remoteRecordAppArn = "culpa";
                                remoteRecordEnabled = false;
                                skipAppResign = false;
                                sshPublicKey = "consequuntur";
                            }};, CreateRemoteAccessSessionXAmzTargetEnum.DEVICE_FARM20150623_CREATE_REMOTE_ACCESS_SESSION) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "occaecati";
                xAmzDate = "numquam";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestiae";
            }};            

            CreateRemoteAccessSessionResponse res = sdk.sdk.createRemoteAccessSession(req);

            if (res.createRemoteAccessSessionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTestGridProject

Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a> instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTestGridProjectRequest;
import org.openapis.openapi.models.operations.CreateTestGridProjectResponse;
import org.openapis.openapi.models.operations.CreateTestGridProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateTestGridProjectRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestGridVpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTestGridProjectRequest req = new CreateTestGridProjectRequest(                new CreateTestGridProjectRequest("error") {{
                                description = "quia";
                                vpcConfig = new TestGridVpcConfig(                new String[]{{
                                                    add("vitae"),
                                                    add("laborum"),
                                                }},                 new String[]{{
                                                    add("enim"),
                                                    add("odit"),
                                                    add("quo"),
                                                }}, "sequi");;
                            }};, CreateTestGridProjectXAmzTargetEnum.DEVICE_FARM20150623_CREATE_TEST_GRID_PROJECT) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "id";
                xAmzDate = "possimus";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "error";
            }};            

            CreateTestGridProjectResponse res = sdk.sdk.createTestGridProject(req);

            if (res.createTestGridProjectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTestGridUrl

Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code> constructor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTestGridUrlRequest;
import org.openapis.openapi.models.operations.CreateTestGridUrlResponse;
import org.openapis.openapi.models.operations.CreateTestGridUrlXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateTestGridUrlRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTestGridUrlRequest req = new CreateTestGridUrlRequest(                new CreateTestGridUrlRequest(673660L, "quasi");, CreateTestGridUrlXAmzTargetEnum.DEVICE_FARM20150623_CREATE_TEST_GRID_URL) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "vero";
                xAmzDate = "nihil";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "ipsa";
            }};            

            CreateTestGridUrlResponse res = sdk.sdk.createTestGridUrl(req);

            if (res.createTestGridUrlResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUpload

Uploads an app or test scripts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUploadRequest;
import org.openapis.openapi.models.operations.CreateUploadResponse;
import org.openapis.openapi.models.operations.CreateUploadXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateUploadRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UploadTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUploadRequest req = new CreateUploadRequest(                new CreateUploadRequest("voluptate", "cum", UploadTypeEnum.ANDROID_APP) {{
                                contentType = "doloremque";
                            }};, CreateUploadXAmzTargetEnum.DEVICE_FARM20150623_CREATE_UPLOAD) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "ut";
                xAmzCredential = "maiores";
                xAmzDate = "dicta";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "iusto";
            }};            

            CreateUploadResponse res = sdk.sdk.createUpload(req);

            if (res.createUploadResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVPCEConfiguration

Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVPCEConfigurationRequest;
import org.openapis.openapi.models.operations.CreateVPCEConfigurationResponse;
import org.openapis.openapi.models.operations.CreateVPCEConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateVPCEConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVPCEConfigurationRequest req = new CreateVPCEConfigurationRequest(                new CreateVPCEConfigurationRequest("harum", "enim", "accusamus") {{
                                vpceConfigurationDescription = "commodi";
                            }};, CreateVPCEConfigurationXAmzTargetEnum.DEVICE_FARM20150623_CREATE_VPCE_CONFIGURATION) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "quae";
                xAmzCredential = "ipsum";
                xAmzDate = "quidem";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "pariatur";
            }};            

            CreateVPCEConfigurationResponse res = sdk.sdk.createVPCEConfiguration(req);

            if (res.createVPCEConfigurationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDevicePool

Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDevicePoolRequest;
import org.openapis.openapi.models.operations.DeleteDevicePoolResponse;
import org.openapis.openapi.models.operations.DeleteDevicePoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDevicePoolRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDevicePoolRequest req = new DeleteDevicePoolRequest(                new DeleteDevicePoolRequest("praesentium");, DeleteDevicePoolXAmzTargetEnum.DEVICE_FARM20150623_DELETE_DEVICE_POOL) {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "quasi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "sint";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "itaque";
            }};            

            DeleteDevicePoolResponse res = sdk.sdk.deleteDevicePool(req);

            if (res.deleteDevicePoolResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInstanceProfile

Deletes a profile that can be applied to one or more private device instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInstanceProfileRequest;
import org.openapis.openapi.models.operations.DeleteInstanceProfileResponse;
import org.openapis.openapi.models.operations.DeleteInstanceProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteInstanceProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteInstanceProfileRequest req = new DeleteInstanceProfileRequest(                new DeleteInstanceProfileRequest("enim");, DeleteInstanceProfileXAmzTargetEnum.DEVICE_FARM20150623_DELETE_INSTANCE_PROFILE) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "quibusdam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quibusdam";
            }};            

            DeleteInstanceProfileResponse res = sdk.sdk.deleteInstanceProfile(req);

            if (res.deleteInstanceProfileResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkProfile

Deletes a network profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkProfileRequest;
import org.openapis.openapi.models.operations.DeleteNetworkProfileResponse;
import org.openapis.openapi.models.operations.DeleteNetworkProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteNetworkProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkProfileRequest req = new DeleteNetworkProfileRequest(                new DeleteNetworkProfileRequest("modi");, DeleteNetworkProfileXAmzTargetEnum.DEVICE_FARM20150623_DELETE_NETWORK_PROFILE) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "cupiditate";
                xAmzDate = "quos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "assumenda";
            }};            

            DeleteNetworkProfileResponse res = sdk.sdk.deleteNetworkProfile(req);

            if (res.deleteNetworkProfileResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProject

<p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectRequest;
import org.openapis.openapi.models.operations.DeleteProjectResponse;
import org.openapis.openapi.models.operations.DeleteProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteProjectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProjectRequest req = new DeleteProjectRequest(                new DeleteProjectRequest("alias");, DeleteProjectXAmzTargetEnum.DEVICE_FARM20150623_DELETE_PROJECT) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "excepturi";
                xAmzDate = "tempora";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "labore";
            }};            

            DeleteProjectResponse res = sdk.sdk.deleteProject(req);

            if (res.deleteProjectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRemoteAccessSession

Deletes a completed remote access session and its results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRemoteAccessSessionRequest;
import org.openapis.openapi.models.operations.DeleteRemoteAccessSessionResponse;
import org.openapis.openapi.models.operations.DeleteRemoteAccessSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRemoteAccessSessionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRemoteAccessSessionRequest req = new DeleteRemoteAccessSessionRequest(                new DeleteRemoteAccessSessionRequest("eum");, DeleteRemoteAccessSessionXAmzTargetEnum.DEVICE_FARM20150623_DELETE_REMOTE_ACCESS_SESSION) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "sint";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "provident";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "sint";
            }};            

            DeleteRemoteAccessSessionResponse res = sdk.sdk.deleteRemoteAccessSession(req);

            if (res.deleteRemoteAccessSessionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRun

<p>Deletes the run, given the run ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRunRequest;
import org.openapis.openapi.models.operations.DeleteRunResponse;
import org.openapis.openapi.models.operations.DeleteRunXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRunRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRunRequest req = new DeleteRunRequest(                new DeleteRunRequest("dolor");, DeleteRunXAmzTargetEnum.DEVICE_FARM20150623_DELETE_RUN) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "a";
                xAmzCredential = "dolorum";
                xAmzDate = "in";
                xAmzSecurityToken = "in";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "maiores";
            }};            

            DeleteRunResponse res = sdk.sdk.deleteRun(req);

            if (res.deleteRunResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTestGridProject

<p> Deletes a Selenium testing project and all content generated under it. </p> <important> <p>You cannot undo this operation.</p> </important> <note> <p>You cannot delete a project if it has active sessions.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTestGridProjectRequest;
import org.openapis.openapi.models.operations.DeleteTestGridProjectResponse;
import org.openapis.openapi.models.operations.DeleteTestGridProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTestGridProjectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTestGridProjectRequest req = new DeleteTestGridProjectRequest(                new DeleteTestGridProjectRequest("dicta");, DeleteTestGridProjectXAmzTargetEnum.DEVICE_FARM20150623_DELETE_TEST_GRID_PROJECT) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "facere";
                xAmzDate = "ea";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "accusamus";
            }};            

            DeleteTestGridProjectResponse res = sdk.sdk.deleteTestGridProject(req);

            if (res.deleteTestGridProjectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUpload

Deletes an upload given the upload ARN.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUploadRequest;
import org.openapis.openapi.models.operations.DeleteUploadResponse;
import org.openapis.openapi.models.operations.DeleteUploadXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteUploadRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUploadRequest req = new DeleteUploadRequest(                new DeleteUploadRequest("occaecati");, DeleteUploadXAmzTargetEnum.DEVICE_FARM20150623_DELETE_UPLOAD) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "delectus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "id";
            }};            

            DeleteUploadResponse res = sdk.sdk.deleteUpload(req);

            if (res.deleteUploadResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVPCEConfiguration

Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVPCEConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteVPCEConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteVPCEConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteVPCEConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVPCEConfigurationRequest req = new DeleteVPCEConfigurationRequest(                new DeleteVPCEConfigurationRequest("deleniti");, DeleteVPCEConfigurationXAmzTargetEnum.DEVICE_FARM20150623_DELETE_VPCE_CONFIGURATION) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "amet";
                xAmzCredential = "deserunt";
                xAmzDate = "nisi";
                xAmzSecurityToken = "vel";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "omnis";
            }};            

            DeleteVPCEConfigurationResponse res = sdk.sdk.deleteVPCEConfiguration(req);

            if (res.deleteVPCEConfigurationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountSettings

Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountSettingsRequest;
import org.openapis.openapi.models.operations.GetAccountSettingsResponse;
import org.openapis.openapi.models.operations.GetAccountSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountSettingsRequest req = new GetAccountSettingsRequest(                new java.util.HashMap<String, Object>() {{
                                put("nihil", "magnam");
                            }}, GetAccountSettingsXAmzTargetEnum.DEVICE_FARM20150623_GET_ACCOUNT_SETTINGS) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "id";
                xAmzCredential = "labore";
                xAmzDate = "labore";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "nobis";
            }};            

            GetAccountSettingsResponse res = sdk.sdk.getAccountSettings(req);

            if (res.getAccountSettingsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevice

Gets information about a unique device type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceRequest;
import org.openapis.openapi.models.operations.GetDeviceResponse;
import org.openapis.openapi.models.operations.GetDeviceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDeviceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceRequest req = new GetDeviceRequest(                new GetDeviceRequest("vero");, GetDeviceXAmzTargetEnum.DEVICE_FARM20150623_GET_DEVICE) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "magnam";
                xAmzDate = "et";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "provident";
            }};            

            GetDeviceResponse res = sdk.sdk.getDevice(req);

            if (res.getDeviceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceInstance

Returns information about a device instance that belongs to a private device fleet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceInstanceRequest;
import org.openapis.openapi.models.operations.GetDeviceInstanceResponse;
import org.openapis.openapi.models.operations.GetDeviceInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDeviceInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceInstanceRequest req = new GetDeviceInstanceRequest(                new GetDeviceInstanceRequest("sint");, GetDeviceInstanceXAmzTargetEnum.DEVICE_FARM20150623_GET_DEVICE_INSTANCE) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "reiciendis";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ad";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "dolor";
            }};            

            GetDeviceInstanceResponse res = sdk.sdk.getDeviceInstance(req);

            if (res.getDeviceInstanceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevicePool

Gets information about a device pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDevicePoolRequest;
import org.openapis.openapi.models.operations.GetDevicePoolResponse;
import org.openapis.openapi.models.operations.GetDevicePoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDevicePoolRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDevicePoolRequest req = new GetDevicePoolRequest(                new GetDevicePoolRequest("odit");, GetDevicePoolXAmzTargetEnum.DEVICE_FARM20150623_GET_DEVICE_POOL) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "iure";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "maxime";
            }};            

            GetDevicePoolResponse res = sdk.sdk.getDevicePool(req);

            if (res.getDevicePoolResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevicePoolCompatibility

Gets information about compatibility with a device pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDevicePoolCompatibilityRequest;
import org.openapis.openapi.models.operations.GetDevicePoolCompatibilityResponse;
import org.openapis.openapi.models.operations.GetDevicePoolCompatibilityXAmzTargetEnum;
import org.openapis.openapi.models.shared.BillingMethodEnum;
import org.openapis.openapi.models.shared.CustomerArtifactPaths;
import org.openapis.openapi.models.shared.GetDevicePoolCompatibilityRequest;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.Radios;
import org.openapis.openapi.models.shared.ScheduleRunConfiguration;
import org.openapis.openapi.models.shared.ScheduleRunTest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDevicePoolCompatibilityRequest req = new GetDevicePoolCompatibilityRequest(                new GetDevicePoolCompatibilityRequest("facilis") {{
                                appArn = "in";
                                configuration = new ScheduleRunConfiguration() {{
                                    auxiliaryApps = new String[]{{
                                        add("architecto"),
                                    }};
                                    billingMethod = BillingMethodEnum.UNMETERED;
                                    customerArtifactPaths = new CustomerArtifactPaths() {{
                                        androidPaths = new String[]{{
                                            add("expedita"),
                                            add("nihil"),
                                        }};
                                        deviceHostPaths = new String[]{{
                                            add("quibusdam"),
                                            add("sed"),
                                            add("saepe"),
                                            add("pariatur"),
                                        }};
                                        iosPaths = new String[]{{
                                            add("consequuntur"),
                                        }};
                                    }};;
                                    extraDataPackageArn = "praesentium";
                                    locale = "natus";
                                    location = new Location(1668.47, 1238.2);;
                                    networkProfileArn = "quo";
                                    radios = new Radios() {{
                                        bluetooth = false;
                                        gps = false;
                                        nfc = false;
                                        wifi = false;
                                    }};;
                                    vpceConfigurationArns = new String[]{{
                                        add("pariatur"),
                                        add("maxime"),
                                        add("ea"),
                                        add("excepturi"),
                                    }};
                                }};;
                                test = new ScheduleRunTest(TestTypeEnum.WEB_PERFORMANCE_PROFILE) {{
                                    filter = "ea";
                                    parameters = new java.util.HashMap<String, String>() {{
                                        put("ab", "maiores");
                                    }};
                                    testPackageArn = "quidem";
                                    testSpecArn = "ipsam";
                                }};;
                                testType = TestTypeEnum.APPIUM_WEB_JAVA_TESTNG;
                            }};, GetDevicePoolCompatibilityXAmzTargetEnum.DEVICE_FARM20150623_GET_DEVICE_POOL_COMPATIBILITY) {{
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "nam";
                xAmzCredential = "eaque";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "perferendis";
            }};            

            GetDevicePoolCompatibilityResponse res = sdk.sdk.getDevicePoolCompatibility(req);

            if (res.getDevicePoolCompatibilityResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstanceProfile

Returns information about the specified instance profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstanceProfileRequest;
import org.openapis.openapi.models.operations.GetInstanceProfileResponse;
import org.openapis.openapi.models.operations.GetInstanceProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetInstanceProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstanceProfileRequest req = new GetInstanceProfileRequest(                new GetInstanceProfileRequest("amet");, GetInstanceProfileXAmzTargetEnum.DEVICE_FARM20150623_GET_INSTANCE_PROFILE) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "corporis";
                xAmzDate = "hic";
                xAmzSecurityToken = "libero";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "dolores";
            }};            

            GetInstanceProfileResponse res = sdk.sdk.getInstanceProfile(req);

            if (res.getInstanceProfileResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJob

Gets information about a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobRequest;
import org.openapis.openapi.models.operations.GetJobResponse;
import org.openapis.openapi.models.operations.GetJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetJobRequest req = new GetJobRequest(                new GetJobRequest("totam");, GetJobXAmzTargetEnum.DEVICE_FARM20150623_GET_JOB) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "quis";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "eos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "dolores";
            }};            

            GetJobResponse res = sdk.sdk.getJob(req);

            if (res.getJobResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkProfile

Returns information about a network profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkProfileRequest;
import org.openapis.openapi.models.operations.GetNetworkProfileResponse;
import org.openapis.openapi.models.operations.GetNetworkProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetNetworkProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkProfileRequest req = new GetNetworkProfileRequest(                new GetNetworkProfileRequest("quam");, GetNetworkProfileXAmzTargetEnum.DEVICE_FARM20150623_GET_NETWORK_PROFILE) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nostrum";
                xAmzDate = "hic";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "facilis";
            }};            

            GetNetworkProfileResponse res = sdk.sdk.getNetworkProfile(req);

            if (res.getNetworkProfileResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingStatus

Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingStatusRequest;
import org.openapis.openapi.models.operations.GetOfferingStatusResponse;
import org.openapis.openapi.models.operations.GetOfferingStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetOfferingStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingStatusRequest req = new GetOfferingStatusRequest(                new GetOfferingStatusRequest() {{
                                nextToken = "voluptatem";
                            }};, GetOfferingStatusXAmzTargetEnum.DEVICE_FARM20150623_GET_OFFERING_STATUS) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "blanditiis";
                xAmzDate = "error";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "rerum";
                nextToken = "adipisci";
            }};            

            GetOfferingStatusResponse res = sdk.sdk.getOfferingStatus(req);

            if (res.getOfferingStatusResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProject

Gets information about a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectRequest;
import org.openapis.openapi.models.operations.GetProjectResponse;
import org.openapis.openapi.models.operations.GetProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetProjectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProjectRequest req = new GetProjectRequest(                new GetProjectRequest("earum");, GetProjectXAmzTargetEnum.DEVICE_FARM20150623_GET_PROJECT) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nobis";
            }};            

            GetProjectResponse res = sdk.sdk.getProject(req);

            if (res.getProjectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRemoteAccessSession

Returns a link to a currently running remote access session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRemoteAccessSessionRequest;
import org.openapis.openapi.models.operations.GetRemoteAccessSessionResponse;
import org.openapis.openapi.models.operations.GetRemoteAccessSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRemoteAccessSessionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRemoteAccessSessionRequest req = new GetRemoteAccessSessionRequest(                new GetRemoteAccessSessionRequest("delectus");, GetRemoteAccessSessionXAmzTargetEnum.DEVICE_FARM20150623_GET_REMOTE_ACCESS_SESSION) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "quos";
                xAmzCredential = "aliquid";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "qui";
            }};            

            GetRemoteAccessSessionResponse res = sdk.sdk.getRemoteAccessSession(req);

            if (res.getRemoteAccessSessionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRun

Gets information about a run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRunRequest;
import org.openapis.openapi.models.operations.GetRunResponse;
import org.openapis.openapi.models.operations.GetRunXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRunRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRunRequest req = new GetRunRequest(                new GetRunRequest("hic");, GetRunXAmzTargetEnum.DEVICE_FARM20150623_GET_RUN) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "cum";
                xAmzCredential = "voluptate";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "dolorum";
            }};            

            GetRunResponse res = sdk.sdk.getRun(req);

            if (res.getRunResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSuite

Gets information about a suite.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSuiteRequest;
import org.openapis.openapi.models.operations.GetSuiteResponse;
import org.openapis.openapi.models.operations.GetSuiteXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSuiteRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSuiteRequest req = new GetSuiteRequest(                new GetSuiteRequest("veritatis");, GetSuiteXAmzTargetEnum.DEVICE_FARM20150623_GET_SUITE) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "iure";
                xAmzDate = "odio";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "quidem";
            }};            

            GetSuiteResponse res = sdk.sdk.getSuite(req);

            if (res.getSuiteResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTest

Gets information about a test.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTestRequest;
import org.openapis.openapi.models.operations.GetTestResponse;
import org.openapis.openapi.models.operations.GetTestXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetTestRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTestRequest req = new GetTestRequest(                new GetTestRequest("voluptas");, GetTestXAmzTargetEnum.DEVICE_FARM20150623_GET_TEST) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "eos";
                xAmzCredential = "atque";
                xAmzDate = "sit";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "soluta";
            }};            

            GetTestResponse res = sdk.sdk.getTest(req);

            if (res.getTestResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTestGridProject

Retrieves information about a Selenium testing project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTestGridProjectRequest;
import org.openapis.openapi.models.operations.GetTestGridProjectResponse;
import org.openapis.openapi.models.operations.GetTestGridProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetTestGridProjectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTestGridProjectRequest req = new GetTestGridProjectRequest(                new GetTestGridProjectRequest("iusto");, GetTestGridProjectXAmzTargetEnum.DEVICE_FARM20150623_GET_TEST_GRID_PROJECT) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "deleniti";
                xAmzDate = "omnis";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "asperiores";
            }};            

            GetTestGridProjectResponse res = sdk.sdk.getTestGridProject(req);

            if (res.getTestGridProjectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTestGridSession

<p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p> <ul> <li> <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p> </li> <li> <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p> </li> </ul> <p/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTestGridSessionRequest;
import org.openapis.openapi.models.operations.GetTestGridSessionResponse;
import org.openapis.openapi.models.operations.GetTestGridSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetTestGridSessionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTestGridSessionRequest req = new GetTestGridSessionRequest(                new GetTestGridSessionRequest() {{
                                projectArn = "ipsum";
                                sessionArn = "voluptate";
                                sessionId = "id";
                            }};, GetTestGridSessionXAmzTargetEnum.DEVICE_FARM20150623_GET_TEST_GRID_SESSION) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "eius";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "accusamus";
            }};            

            GetTestGridSessionResponse res = sdk.sdk.getTestGridSession(req);

            if (res.getTestGridSessionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpload

Gets information about an upload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUploadRequest;
import org.openapis.openapi.models.operations.GetUploadResponse;
import org.openapis.openapi.models.operations.GetUploadXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetUploadRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUploadRequest req = new GetUploadRequest(                new GetUploadRequest("saepe");, GetUploadXAmzTargetEnum.DEVICE_FARM20150623_GET_UPLOAD) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "provident";
                xAmzDate = "minima";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "similique";
            }};            

            GetUploadResponse res = sdk.sdk.getUpload(req);

            if (res.getUploadResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVPCEConfiguration

Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVPCEConfigurationRequest;
import org.openapis.openapi.models.operations.GetVPCEConfigurationResponse;
import org.openapis.openapi.models.operations.GetVPCEConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetVPCEConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetVPCEConfigurationRequest req = new GetVPCEConfigurationRequest(                new GetVPCEConfigurationRequest("at");, GetVPCEConfigurationXAmzTargetEnum.DEVICE_FARM20150623_GET_VPCE_CONFIGURATION) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "vel";
                xAmzDate = "quod";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "dolorum";
            }};            

            GetVPCEConfigurationResponse res = sdk.sdk.getVPCEConfiguration(req);

            if (res.getVPCEConfigurationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## installToRemoteAccessSession

Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InstallToRemoteAccessSessionRequest;
import org.openapis.openapi.models.operations.InstallToRemoteAccessSessionResponse;
import org.openapis.openapi.models.operations.InstallToRemoteAccessSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.InstallToRemoteAccessSessionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InstallToRemoteAccessSessionRequest req = new InstallToRemoteAccessSessionRequest(                new InstallToRemoteAccessSessionRequest("esse", "harum");, InstallToRemoteAccessSessionXAmzTargetEnum.DEVICE_FARM20150623_INSTALL_TO_REMOTE_ACCESS_SESSION) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quisquam";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "amet";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "accusamus";
            }};            

            InstallToRemoteAccessSessionResponse res = sdk.sdk.installToRemoteAccessSession(req);

            if (res.installToRemoteAccessSessionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listArtifacts

Gets information about artifacts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListArtifactsRequest;
import org.openapis.openapi.models.operations.ListArtifactsResponse;
import org.openapis.openapi.models.operations.ListArtifactsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ArtifactCategoryEnum;
import org.openapis.openapi.models.shared.ListArtifactsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListArtifactsRequest req = new ListArtifactsRequest(                new ListArtifactsRequest("enim", ArtifactCategoryEnum.SCREENSHOT) {{
                                nextToken = "sapiente";
                            }};, ListArtifactsXAmzTargetEnum.DEVICE_FARM20150623_LIST_ARTIFACTS) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "sit";
                xAmzDate = "expedita";
                xAmzSecurityToken = "neque";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "vel";
                nextToken = "libero";
            }};            

            ListArtifactsResponse res = sdk.sdk.listArtifacts(req);

            if (res.listArtifactsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeviceInstances

Returns information about the private device instances associated with one or more AWS accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeviceInstancesRequest;
import org.openapis.openapi.models.operations.ListDeviceInstancesResponse;
import org.openapis.openapi.models.operations.ListDeviceInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDeviceInstancesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeviceInstancesRequest req = new ListDeviceInstancesRequest(                new ListDeviceInstancesRequest() {{
                                maxResults = 646265L;
                                nextToken = "quam";
                            }};, ListDeviceInstancesXAmzTargetEnum.DEVICE_FARM20150623_LIST_DEVICE_INSTANCES) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "qui";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "soluta";
            }};            

            ListDeviceInstancesResponse res = sdk.sdk.listDeviceInstances(req);

            if (res.listDeviceInstancesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDevicePools

Gets information about device pools.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDevicePoolsRequest;
import org.openapis.openapi.models.operations.ListDevicePoolsResponse;
import org.openapis.openapi.models.operations.ListDevicePoolsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DevicePoolTypeEnum;
import org.openapis.openapi.models.shared.ListDevicePoolsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDevicePoolsRequest req = new ListDevicePoolsRequest(                new ListDevicePoolsRequest("laborum") {{
                                nextToken = "totam";
                                type = DevicePoolTypeEnum.CURATED;
                            }};, ListDevicePoolsXAmzTargetEnum.DEVICE_FARM20150623_LIST_DEVICE_POOLS) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "distinctio";
                xAmzDate = "facilis";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestias";
                nextToken = "temporibus";
            }};            

            ListDevicePoolsResponse res = sdk.sdk.listDevicePools(req);

            if (res.listDevicePoolsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDevices

Gets information about unique device types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDevicesRequest;
import org.openapis.openapi.models.operations.ListDevicesResponse;
import org.openapis.openapi.models.operations.ListDevicesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeviceFilter;
import org.openapis.openapi.models.shared.DeviceFilterAttributeEnum;
import org.openapis.openapi.models.shared.ListDevicesRequest;
import org.openapis.openapi.models.shared.RuleOperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDevicesRequest req = new ListDevicesRequest(                new ListDevicesRequest() {{
                                arn = "neque";
                                filters = new org.openapis.openapi.models.shared.DeviceFilter[]{{
                                    add(new DeviceFilter(DeviceFilterAttributeEnum.REMOTE_DEBUG_ENABLED, RuleOperatorEnum.CONTAINS,                 new String[]{{
                                                        add("cumque"),
                                                    }}) {{
                                        attribute = DeviceFilterAttributeEnum.PLATFORM;
                                        operator = RuleOperatorEnum.GREATER_THAN;
                                        values = new String[]{{
                                            add("ullam"),
                                        }};
                                    }}),
                                }};
                                nextToken = "soluta";
                            }};, ListDevicesXAmzTargetEnum.DEVICE_FARM20150623_LIST_DEVICES) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "et";
                xAmzCredential = "saepe";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "quos";
                nextToken = "tempore";
            }};            

            ListDevicesResponse res = sdk.sdk.listDevices(req);

            if (res.listDevicesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInstanceProfiles

Returns information about all the instance profiles in an AWS account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInstanceProfilesRequest;
import org.openapis.openapi.models.operations.ListInstanceProfilesResponse;
import org.openapis.openapi.models.operations.ListInstanceProfilesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListInstanceProfilesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListInstanceProfilesRequest req = new ListInstanceProfilesRequest(                new ListInstanceProfilesRequest() {{
                                maxResults = 45614L;
                                nextToken = "delectus";
                            }};, ListInstanceProfilesXAmzTargetEnum.DEVICE_FARM20150623_LIST_INSTANCE_PROFILES) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "labore";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "quae";
            }};            

            ListInstanceProfilesResponse res = sdk.sdk.listInstanceProfiles(req);

            if (res.listInstanceProfilesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listJobs

Gets information about jobs for a given test run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListJobsRequest;
import org.openapis.openapi.models.operations.ListJobsResponse;
import org.openapis.openapi.models.operations.ListJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListJobsRequest req = new ListJobsRequest(                new ListJobsRequest("quas") {{
                                nextToken = "itaque";
                            }};, ListJobsXAmzTargetEnum.DEVICE_FARM20150623_LIST_JOBS) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "repellendus";
                xAmzDate = "porro";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "facilis";
                nextToken = "cupiditate";
            }};            

            ListJobsResponse res = sdk.sdk.listJobs(req);

            if (res.listJobsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNetworkProfiles

Returns the list of available network profiles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNetworkProfilesRequest;
import org.openapis.openapi.models.operations.ListNetworkProfilesResponse;
import org.openapis.openapi.models.operations.ListNetworkProfilesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListNetworkProfilesRequest;
import org.openapis.openapi.models.shared.NetworkProfileTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListNetworkProfilesRequest req = new ListNetworkProfilesRequest(                new ListNetworkProfilesRequest("quae") {{
                                nextToken = "laudantium";
                                type = NetworkProfileTypeEnum.CURATED;
                            }};, ListNetworkProfilesXAmzTargetEnum.DEVICE_FARM20150623_LIST_NETWORK_PROFILES) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "quisquam";
                xAmzDate = "vero";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "ipsum";
            }};            

            ListNetworkProfilesResponse res = sdk.sdk.listNetworkProfiles(req);

            if (res.listNetworkProfilesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOfferingPromotions

Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOfferingPromotionsRequest;
import org.openapis.openapi.models.operations.ListOfferingPromotionsResponse;
import org.openapis.openapi.models.operations.ListOfferingPromotionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListOfferingPromotionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOfferingPromotionsRequest req = new ListOfferingPromotionsRequest(                new ListOfferingPromotionsRequest() {{
                                nextToken = "voluptate";
                            }};, ListOfferingPromotionsXAmzTargetEnum.DEVICE_FARM20150623_LIST_OFFERING_PROMOTIONS) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "vero";
                xAmzCredential = "tenetur";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "hic";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quod";
            }};            

            ListOfferingPromotionsResponse res = sdk.sdk.listOfferingPromotions(req);

            if (res.listOfferingPromotionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOfferingTransactions

Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOfferingTransactionsRequest;
import org.openapis.openapi.models.operations.ListOfferingTransactionsResponse;
import org.openapis.openapi.models.operations.ListOfferingTransactionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListOfferingTransactionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOfferingTransactionsRequest req = new ListOfferingTransactionsRequest(                new ListOfferingTransactionsRequest() {{
                                nextToken = "similique";
                            }};, ListOfferingTransactionsXAmzTargetEnum.DEVICE_FARM20150623_LIST_OFFERING_TRANSACTIONS) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "vero";
                xAmzCredential = "ducimus";
                xAmzDate = "dolore";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "sequi";
                nextToken = "natus";
            }};            

            ListOfferingTransactionsResponse res = sdk.sdk.listOfferingTransactions(req);

            if (res.listOfferingTransactionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOfferings

Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOfferingsRequest;
import org.openapis.openapi.models.operations.ListOfferingsResponse;
import org.openapis.openapi.models.operations.ListOfferingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListOfferingsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOfferingsRequest req = new ListOfferingsRequest(                new ListOfferingsRequest() {{
                                nextToken = "aut";
                            }};, ListOfferingsXAmzTargetEnum.DEVICE_FARM20150623_LIST_OFFERINGS) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "nulla";
                xAmzDate = "fugit";
                xAmzSecurityToken = "porro";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "doloribus";
                nextToken = "iusto";
            }};            

            ListOfferingsResponse res = sdk.sdk.listOfferings(req);

            if (res.listOfferingsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProjects

Gets information about projects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProjectsRequest;
import org.openapis.openapi.models.operations.ListProjectsResponse;
import org.openapis.openapi.models.operations.ListProjectsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListProjectsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProjectsRequest req = new ListProjectsRequest(                new ListProjectsRequest() {{
                                arn = "ducimus";
                                nextToken = "alias";
                            }};, ListProjectsXAmzTargetEnum.DEVICE_FARM20150623_LIST_PROJECTS) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "ipsam";
                xAmzDate = "ea";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "possimus";
                nextToken = "magnam";
            }};            

            ListProjectsResponse res = sdk.sdk.listProjects(req);

            if (res.listProjectsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRemoteAccessSessions

Returns a list of all currently running remote access sessions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRemoteAccessSessionsRequest;
import org.openapis.openapi.models.operations.ListRemoteAccessSessionsResponse;
import org.openapis.openapi.models.operations.ListRemoteAccessSessionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRemoteAccessSessionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRemoteAccessSessionsRequest req = new ListRemoteAccessSessionsRequest(                new ListRemoteAccessSessionsRequest("ex") {{
                                nextToken = "laudantium";
                            }};, ListRemoteAccessSessionsXAmzTargetEnum.DEVICE_FARM20150623_LIST_REMOTE_ACCESS_SESSIONS) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "maiores";
                xAmzDate = "quasi";
                xAmzSecurityToken = "ex";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "excepturi";
            }};            

            ListRemoteAccessSessionsResponse res = sdk.sdk.listRemoteAccessSessions(req);

            if (res.listRemoteAccessSessionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRuns

Gets information about runs, given an AWS Device Farm project ARN.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRunsRequest;
import org.openapis.openapi.models.operations.ListRunsResponse;
import org.openapis.openapi.models.operations.ListRunsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRunsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRunsRequest req = new ListRunsRequest(                new ListRunsRequest("nostrum") {{
                                nextToken = "sapiente";
                            }};, ListRunsXAmzTargetEnum.DEVICE_FARM20150623_LIST_RUNS) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ea";
                xAmzDate = "impedit";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "aliquid";
                nextToken = "inventore";
            }};            

            ListRunsResponse res = sdk.sdk.listRuns(req);

            if (res.listRunsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSamples

Gets information about samples, given an AWS Device Farm job ARN.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSamplesRequest;
import org.openapis.openapi.models.operations.ListSamplesResponse;
import org.openapis.openapi.models.operations.ListSamplesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSamplesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSamplesRequest req = new ListSamplesRequest(                new ListSamplesRequest("ea") {{
                                nextToken = "quo";
                            }};, ListSamplesXAmzTargetEnum.DEVICE_FARM20150623_LIST_SAMPLES) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aspernatur";
                xAmzDate = "minima";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "a";
                xAmzSignedHeaders = "libero";
                nextToken = "aut";
            }};            

            ListSamplesResponse res = sdk.sdk.listSamples(req);

            if (res.listSamplesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSuites

Gets information about test suites for a given job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSuitesRequest;
import org.openapis.openapi.models.operations.ListSuitesResponse;
import org.openapis.openapi.models.operations.ListSuitesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSuitesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSuitesRequest req = new ListSuitesRequest(                new ListSuitesRequest("deleniti") {{
                                nextToken = "impedit";
                            }};, ListSuitesXAmzTargetEnum.DEVICE_FARM20150623_LIST_SUITES) {{
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "accusamus";
                xAmzDate = "inventore";
                xAmzSecurityToken = "non";
                xAmzSignature = "et";
                xAmzSignedHeaders = "dolorum";
                nextToken = "laborum";
            }};            

            ListSuitesResponse res = sdk.sdk.listSuites(req);

            if (res.listSuitesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

List the tags for an AWS Device Farm resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("velit");, ListTagsForResourceXAmzTargetEnum.DEVICE_FARM20150623_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "autem";
                xAmzCredential = "nobis";
                xAmzDate = "quas";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "voluptas";
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

## listTestGridProjects

Gets a list of all Selenium testing projects in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTestGridProjectsRequest;
import org.openapis.openapi.models.operations.ListTestGridProjectsResponse;
import org.openapis.openapi.models.operations.ListTestGridProjectsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTestGridProjectsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTestGridProjectsRequest req = new ListTestGridProjectsRequest(                new ListTestGridProjectsRequest() {{
                                maxResult = 96549L;
                                nextToken = "tempora";
                            }};, ListTestGridProjectsXAmzTargetEnum.DEVICE_FARM20150623_LIST_TEST_GRID_PROJECTS) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "provident";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "odio";
                maxResult = "eius";
                nextToken = "esse";
            }};            

            ListTestGridProjectsResponse res = sdk.sdk.listTestGridProjects(req);

            if (res.listTestGridProjectsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTestGridSessionActions

Returns a list of the actions taken in a <a>TestGridSession</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTestGridSessionActionsRequest;
import org.openapis.openapi.models.operations.ListTestGridSessionActionsResponse;
import org.openapis.openapi.models.operations.ListTestGridSessionActionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTestGridSessionActionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTestGridSessionActionsRequest req = new ListTestGridSessionActionsRequest(                new ListTestGridSessionActionsRequest("rem") {{
                                maxResult = 683282L;
                                nextToken = "reprehenderit";
                            }};, ListTestGridSessionActionsXAmzTargetEnum.DEVICE_FARM20150623_LIST_TEST_GRID_SESSION_ACTIONS) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ut";
                xAmzDate = "eum";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "eos";
                maxResult = "praesentium";
                nextToken = "quisquam";
            }};            

            ListTestGridSessionActionsResponse res = sdk.sdk.listTestGridSessionActions(req);

            if (res.listTestGridSessionActionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTestGridSessionArtifacts

Retrieves a list of artifacts created during the session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTestGridSessionArtifactsRequest;
import org.openapis.openapi.models.operations.ListTestGridSessionArtifactsResponse;
import org.openapis.openapi.models.operations.ListTestGridSessionArtifactsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTestGridSessionArtifactsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestGridSessionArtifactCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTestGridSessionArtifactsRequest req = new ListTestGridSessionArtifactsRequest(                new ListTestGridSessionArtifactsRequest("ipsa") {{
                                maxResult = 660040L;
                                nextToken = "quidem";
                                type = TestGridSessionArtifactCategoryEnum.VIDEO;
                            }};, ListTestGridSessionArtifactsXAmzTargetEnum.DEVICE_FARM20150623_LIST_TEST_GRID_SESSION_ARTIFACTS) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "illum";
                xAmzCredential = "quo";
                xAmzDate = "fuga";
                xAmzSecurityToken = "eius";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "voluptas";
                maxResult = "ab";
                nextToken = "cupiditate";
            }};            

            ListTestGridSessionArtifactsResponse res = sdk.sdk.listTestGridSessionArtifacts(req);

            if (res.listTestGridSessionArtifactsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTestGridSessions

Retrieves a list of sessions for a <a>TestGridProject</a>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTestGridSessionsRequest;
import org.openapis.openapi.models.operations.ListTestGridSessionsResponse;
import org.openapis.openapi.models.operations.ListTestGridSessionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTestGridSessionsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestGridSessionStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTestGridSessionsRequest req = new ListTestGridSessionsRequest(                new ListTestGridSessionsRequest("tempora") {{
                                creationTimeAfter = OffsetDateTime.parse("2021-11-20T21:59:17.660Z");
                                creationTimeBefore = OffsetDateTime.parse("2022-10-21T01:48:15.498Z");
                                endTimeAfter = OffsetDateTime.parse("2021-08-15T10:59:14.485Z");
                                endTimeBefore = OffsetDateTime.parse("2022-11-13T03:35:18.820Z");
                                maxResult = 715179L;
                                nextToken = "quod";
                                status = TestGridSessionStatusEnum.CLOSED;
                            }};, ListTestGridSessionsXAmzTargetEnum.DEVICE_FARM20150623_LIST_TEST_GRID_SESSIONS) {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "totam";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "occaecati";
                maxResult = "commodi";
                nextToken = "sapiente";
            }};            

            ListTestGridSessionsResponse res = sdk.sdk.listTestGridSessions(req);

            if (res.listTestGridSessionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTests

Gets information about tests in a given test suite.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTestsRequest;
import org.openapis.openapi.models.operations.ListTestsResponse;
import org.openapis.openapi.models.operations.ListTestsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTestsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTestsRequest req = new ListTestsRequest(                new ListTestsRequest("deserunt") {{
                                nextToken = "molestiae";
                            }};, ListTestsXAmzTargetEnum.DEVICE_FARM20150623_LIST_TESTS) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "porro";
                xAmzCredential = "eum";
                xAmzDate = "quas";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "deleniti";
                nextToken = "fugit";
            }};            

            ListTestsResponse res = sdk.sdk.listTests(req);

            if (res.listTestsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUniqueProblems

<p>Gets information about unique problems, such as exceptions or crashes.</p> <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (<code>OutOfBoundsException in MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many individual entries for that exception.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUniqueProblemsRequest;
import org.openapis.openapi.models.operations.ListUniqueProblemsResponse;
import org.openapis.openapi.models.operations.ListUniqueProblemsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListUniqueProblemsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUniqueProblemsRequest req = new ListUniqueProblemsRequest(                new ListUniqueProblemsRequest("mollitia") {{
                                nextToken = "incidunt";
                            }};, ListUniqueProblemsXAmzTargetEnum.DEVICE_FARM20150623_LIST_UNIQUE_PROBLEMS) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "minima";
                xAmzDate = "nisi";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consequuntur";
                nextToken = "ratione";
            }};            

            ListUniqueProblemsResponse res = sdk.sdk.listUniqueProblems(req);

            if (res.listUniqueProblemsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUploads

Gets information about uploads, given an AWS Device Farm project ARN.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUploadsRequest;
import org.openapis.openapi.models.operations.ListUploadsResponse;
import org.openapis.openapi.models.operations.ListUploadsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListUploadsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UploadTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUploadsRequest req = new ListUploadsRequest(                new ListUploadsRequest("saepe") {{
                                nextToken = "occaecati";
                                type = UploadTypeEnum.UIAUTOMATOR_TEST_PACKAGE;
                            }};, ListUploadsXAmzTargetEnum.DEVICE_FARM20150623_LIST_UPLOADS) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "esse";
                xAmzCredential = "eveniet";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "quod";
                nextToken = "nam";
            }};            

            ListUploadsResponse res = sdk.sdk.listUploads(req);

            if (res.listUploadsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVPCEConfigurations

Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVPCEConfigurationsRequest;
import org.openapis.openapi.models.operations.ListVPCEConfigurationsResponse;
import org.openapis.openapi.models.operations.ListVPCEConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListVPCEConfigurationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVPCEConfigurationsRequest req = new ListVPCEConfigurationsRequest(                new ListVPCEConfigurationsRequest() {{
                                maxResults = 399025L;
                                nextToken = "quasi";
                            }};, ListVPCEConfigurationsXAmzTargetEnum.DEVICE_FARM20150623_LIST_VPCE_CONFIGURATIONS) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "vel";
                xAmzCredential = "harum";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "minima";
            }};            

            ListVPCEConfigurationsResponse res = sdk.sdk.listVPCEConfigurations(req);

            if (res.listVPCEConfigurationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## purchaseOffering

Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PurchaseOfferingRequest;
import org.openapis.openapi.models.operations.PurchaseOfferingResponse;
import org.openapis.openapi.models.operations.PurchaseOfferingXAmzTargetEnum;
import org.openapis.openapi.models.shared.PurchaseOfferingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PurchaseOfferingRequest req = new PurchaseOfferingRequest(                new PurchaseOfferingRequest("eligendi", 27069L) {{
                                offeringPromotionId = "culpa";
                            }};, PurchaseOfferingXAmzTargetEnum.DEVICE_FARM20150623_PURCHASE_OFFERING) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "cumque";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quaerat";
            }};            

            PurchaseOfferingResponse res = sdk.sdk.purchaseOffering(req);

            if (res.purchaseOfferingResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## renewOffering

Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenewOfferingRequest;
import org.openapis.openapi.models.operations.RenewOfferingResponse;
import org.openapis.openapi.models.operations.RenewOfferingXAmzTargetEnum;
import org.openapis.openapi.models.shared.RenewOfferingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RenewOfferingRequest req = new RenewOfferingRequest(                new RenewOfferingRequest("consectetur", 458139L);, RenewOfferingXAmzTargetEnum.DEVICE_FARM20150623_RENEW_OFFERING) {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "provident";
                xAmzCredential = "a";
                xAmzDate = "nulla";
                xAmzSecurityToken = "quas";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "quasi";
            }};            

            RenewOfferingResponse res = sdk.sdk.renewOffering(req);

            if (res.renewOfferingResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scheduleRun

Schedules a run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScheduleRunRequest;
import org.openapis.openapi.models.operations.ScheduleRunResponse;
import org.openapis.openapi.models.operations.ScheduleRunXAmzTargetEnum;
import org.openapis.openapi.models.shared.BillingMethodEnum;
import org.openapis.openapi.models.shared.CustomerArtifactPaths;
import org.openapis.openapi.models.shared.DeviceFilter;
import org.openapis.openapi.models.shared.DeviceFilterAttributeEnum;
import org.openapis.openapi.models.shared.DeviceSelectionConfiguration;
import org.openapis.openapi.models.shared.ExecutionConfiguration;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.Radios;
import org.openapis.openapi.models.shared.RuleOperatorEnum;
import org.openapis.openapi.models.shared.ScheduleRunConfiguration;
import org.openapis.openapi.models.shared.ScheduleRunRequest;
import org.openapis.openapi.models.shared.ScheduleRunTest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ScheduleRunRequest req = new ScheduleRunRequest(                new ScheduleRunRequest("error",                 new ScheduleRunTest(TestTypeEnum.APPIUM_WEB_RUBY) {{
                                                filter = "pariatur";
                                                parameters = new java.util.HashMap<String, String>() {{
                                                    put("quia", "eveniet");
                                                    put("asperiores", "facere");
                                                    put("veritatis", "consequuntur");
                                                    put("quasi", "similique");
                                                }};
                                                testPackageArn = "culpa";
                                                testSpecArn = "aliquid";
                                            }};) {{
                                appArn = "tenetur";
                                configuration = new ScheduleRunConfiguration() {{
                                    auxiliaryApps = new String[]{{
                                        add("earum"),
                                    }};
                                    billingMethod = BillingMethodEnum.METERED;
                                    customerArtifactPaths = new CustomerArtifactPaths() {{
                                        androidPaths = new String[]{{
                                            add("eius"),
                                            add("libero"),
                                        }};
                                        deviceHostPaths = new String[]{{
                                            add("soluta"),
                                            add("accusantium"),
                                            add("aliquam"),
                                            add("sapiente"),
                                        }};
                                        iosPaths = new String[]{{
                                            add("ullam"),
                                        }};
                                    }};;
                                    extraDataPackageArn = "reprehenderit";
                                    locale = "ullam";
                                    location = new Location(3917.74, 163.28);;
                                    networkProfileArn = "voluptatum";
                                    radios = new Radios() {{
                                        bluetooth = false;
                                        gps = false;
                                        nfc = false;
                                        wifi = false;
                                    }};;
                                    vpceConfigurationArns = new String[]{{
                                        add("quibusdam"),
                                    }};
                                }};;
                                devicePoolArn = "ex";
                                deviceSelectionConfiguration = new DeviceSelectionConfiguration(                new org.openapis.openapi.models.shared.DeviceFilter[]{{
                                                    add(new DeviceFilter(DeviceFilterAttributeEnum.FLEET_TYPE, RuleOperatorEnum.EQUALS,                 new String[]{{
                                                                        add("et"),
                                                                        add("voluptate"),
                                                                        add("ipsa"),
                                                                        add("minima"),
                                                                    }}) {{
                                                        attribute = DeviceFilterAttributeEnum.FLEET_TYPE;
                                                        operator = RuleOperatorEnum.IN;
                                                        values = new String[]{{
                                                            add("omnis"),
                                                        }};
                                                    }}),
                                                    add(new DeviceFilter(DeviceFilterAttributeEnum.INSTANCE_LABELS, RuleOperatorEnum.EQUALS,                 new String[]{{
                                                                        add("aut"),
                                                                        add("laudantium"),
                                                                        add("eum"),
                                                                    }}) {{
                                                        attribute = DeviceFilterAttributeEnum.PLATFORM;
                                                        operator = RuleOperatorEnum.LESS_THAN;
                                                        values = new String[]{{
                                                            add("iste"),
                                                        }};
                                                    }}),
                                                    add(new DeviceFilter(DeviceFilterAttributeEnum.MANUFACTURER, RuleOperatorEnum.LESS_THAN_OR_EQUALS,                 new String[]{{
                                                                        add("explicabo"),
                                                                        add("voluptas"),
                                                                        add("aut"),
                                                                        add("dignissimos"),
                                                                    }}) {{
                                                        attribute = DeviceFilterAttributeEnum.REMOTE_ACCESS_ENABLED;
                                                        operator = RuleOperatorEnum.EQUALS;
                                                        values = new String[]{{
                                                            add("non"),
                                                            add("voluptatem"),
                                                            add("dolor"),
                                                        }};
                                                    }}),
                                                }}, 115484L);;
                                executionConfiguration = new ExecutionConfiguration() {{
                                    accountsCleanup = false;
                                    appPackagesCleanup = false;
                                    jobTimeoutMinutes = 981640L;
                                    skipAppResign = false;
                                    videoCapture = false;
                                }};;
                                name = "Lee Wiza";
                            }};, ScheduleRunXAmzTargetEnum.DEVICE_FARM20150623_SCHEDULE_RUN) {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "quaerat";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "maxime";
            }};            

            ScheduleRunResponse res = sdk.sdk.scheduleRun(req);

            if (res.scheduleRunResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopJob

Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device where tests have not started. You are not billed for this device. On the device where tests have started, setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown, and any tests that were in progress or already completed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopJobRequest;
import org.openapis.openapi.models.operations.StopJobResponse;
import org.openapis.openapi.models.operations.StopJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopJobRequest req = new StopJobRequest(                new StopJobRequest("officia");, StopJobXAmzTargetEnum.DEVICE_FARM20150623_STOP_JOB) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "quae";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "porro";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "labore";
            }};            

            StopJobResponse res = sdk.sdk.stopJob(req);

            if (res.stopJobResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopRemoteAccessSession

Ends a specified remote access session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopRemoteAccessSessionRequest;
import org.openapis.openapi.models.operations.StopRemoteAccessSessionResponse;
import org.openapis.openapi.models.operations.StopRemoteAccessSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopRemoteAccessSessionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopRemoteAccessSessionRequest req = new StopRemoteAccessSessionRequest(                new StopRemoteAccessSessionRequest("adipisci");, StopRemoteAccessSessionXAmzTargetEnum.DEVICE_FARM20150623_STOP_REMOTE_ACCESS_SESSION) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "id";
                xAmzCredential = "suscipit";
                xAmzDate = "velit";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "est";
                xAmzSignedHeaders = "recusandae";
            }};            

            StopRemoteAccessSessionResponse res = sdk.sdk.stopRemoteAccessSession(req);

            if (res.stopRemoteAccessSessionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopRun

Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices where tests have not started. You are not billed for these devices. On devices where tests have started executing, setup suite and teardown suite tests run to completion on those devices. You are billed for setup, teardown, and any tests that were in progress or already completed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopRunRequest;
import org.openapis.openapi.models.operations.StopRunResponse;
import org.openapis.openapi.models.operations.StopRunXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopRunRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopRunRequest req = new StopRunRequest(                new StopRunRequest("fugiat");, StopRunXAmzTargetEnum.DEVICE_FARM20150623_STOP_RUN) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "quos";
                xAmzDate = "vel";
                xAmzSecurityToken = "labore";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "facilis";
            }};            

            StopRunResponse res = sdk.sdk.stopRun(req);

            if (res.stopRunResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("commodi",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("assumenda", "nemo") {{
                                                    key = "corporis";
                                                    value = "reiciendis";
                                                }}),
                                                add(new Tag("aperiam", "cum") {{
                                                    key = "recusandae";
                                                    value = "aliquid";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.DEVICE_FARM20150623_TAG_RESOURCE) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "in";
                xAmzCredential = "exercitationem";
                xAmzDate = "earum";
                xAmzSecurityToken = "facere";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "doloribus";
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

Deletes the specified tags from a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("reiciendis",                 new String[]{{
                                                add("saepe"),
                                                add("necessitatibus"),
                                                add("dolore"),
                                            }});, UntagResourceXAmzTargetEnum.DEVICE_FARM20150623_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "adipisci";
                xAmzDate = "non";
                xAmzSecurityToken = "amet";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "dignissimos";
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

## updateDeviceInstance

Updates information about a private device instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceInstanceRequest;
import org.openapis.openapi.models.operations.UpdateDeviceInstanceResponse;
import org.openapis.openapi.models.operations.UpdateDeviceInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDeviceInstanceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceInstanceRequest req = new UpdateDeviceInstanceRequest(                new UpdateDeviceInstanceRequest("debitis") {{
                                labels = new String[]{{
                                    add("corporis"),
                                }};
                                profileArn = "harum";
                            }};, UpdateDeviceInstanceXAmzTargetEnum.DEVICE_FARM20150623_UPDATE_DEVICE_INSTANCE) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "voluptates";
                xAmzDate = "libero";
                xAmzSecurityToken = "vitae";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "similique";
            }};            

            UpdateDeviceInstanceResponse res = sdk.sdk.updateDeviceInstance(req);

            if (res.updateDeviceInstanceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDevicePool

Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDevicePoolRequest;
import org.openapis.openapi.models.operations.UpdateDevicePoolResponse;
import org.openapis.openapi.models.operations.UpdateDevicePoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeviceAttributeEnum;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleOperatorEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDevicePoolRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDevicePoolRequest req = new UpdateDevicePoolRequest(                new UpdateDevicePoolRequest("aspernatur") {{
                                clearMaxDevices = false;
                                description = "voluptas";
                                maxDevices = 374244L;
                                name = "Cathy Rohan";
                                rules = new org.openapis.openapi.models.shared.Rule[]{{
                                    add(new Rule() {{
                                        attribute = DeviceAttributeEnum.FORM_FACTOR;
                                        operator = RuleOperatorEnum.GREATER_THAN_OR_EQUALS;
                                        value = "in";
                                    }}),
                                    add(new Rule() {{
                                        attribute = DeviceAttributeEnum.MANUFACTURER;
                                        operator = RuleOperatorEnum.LESS_THAN_OR_EQUALS;
                                        value = "officiis";
                                    }}),
                                    add(new Rule() {{
                                        attribute = DeviceAttributeEnum.OS_VERSION;
                                        operator = RuleOperatorEnum.LESS_THAN_OR_EQUALS;
                                        value = "adipisci";
                                    }}),
                                    add(new Rule() {{
                                        attribute = DeviceAttributeEnum.FLEET_TYPE;
                                        operator = RuleOperatorEnum.GREATER_THAN_OR_EQUALS;
                                        value = "quas";
                                    }}),
                                }};
                            }};, UpdateDevicePoolXAmzTargetEnum.DEVICE_FARM20150623_UPDATE_DEVICE_POOL) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "culpa";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "hic";
            }};            

            UpdateDevicePoolResponse res = sdk.sdk.updateDevicePool(req);

            if (res.updateDevicePoolResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInstanceProfile

Updates information about an existing private device instance profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInstanceProfileRequest;
import org.openapis.openapi.models.operations.UpdateInstanceProfileResponse;
import org.openapis.openapi.models.operations.UpdateInstanceProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateInstanceProfileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateInstanceProfileRequest req = new UpdateInstanceProfileRequest(                new UpdateInstanceProfileRequest("nobis") {{
                                description = "sit";
                                excludeAppPackagesFromCleanup = new String[]{{
                                    add("sed"),
                                    add("reiciendis"),
                                    add("explicabo"),
                                }};
                                name = "Johnathan Klein V";
                                packageCleanup = false;
                                rebootAfterUse = false;
                            }};, UpdateInstanceProfileXAmzTargetEnum.DEVICE_FARM20150623_UPDATE_INSTANCE_PROFILE) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "sed";
                xAmzDate = "in";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "explicabo";
            }};            

            UpdateInstanceProfileResponse res = sdk.sdk.updateInstanceProfile(req);

            if (res.updateInstanceProfileResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkProfile

Updates the network profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkProfileRequest;
import org.openapis.openapi.models.operations.UpdateNetworkProfileResponse;
import org.openapis.openapi.models.operations.UpdateNetworkProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.NetworkProfileTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateNetworkProfileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkProfileRequest req = new UpdateNetworkProfileRequest(                new UpdateNetworkProfileRequest("unde") {{
                                description = "architecto";
                                downlinkBandwidthBits = 382808L;
                                downlinkDelayMs = 960257L;
                                downlinkJitterMs = 895386L;
                                downlinkLossPercent = 72434L;
                                name = "Thomas Lockman";
                                type = NetworkProfileTypeEnum.CURATED;
                                uplinkBandwidthBits = 592231L;
                                uplinkDelayMs = 258702L;
                                uplinkJitterMs = 896762L;
                                uplinkLossPercent = 215529L;
                            }};, UpdateNetworkProfileXAmzTargetEnum.DEVICE_FARM20150623_UPDATE_NETWORK_PROFILE) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "quos";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "voluptate";
            }};            

            UpdateNetworkProfileResponse res = sdk.sdk.updateNetworkProfile(req);

            if (res.updateNetworkProfileResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProject

Modifies the specified project name, given the project ARN and a new name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectRequest;
import org.openapis.openapi.models.operations.UpdateProjectResponse;
import org.openapis.openapi.models.operations.UpdateProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateProjectRequest;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProjectRequest req = new UpdateProjectRequest(                new UpdateProjectRequest("ex") {{
                                defaultJobTimeoutMinutes = 25497L;
                                name = "Cecelia Lakin";
                                vpcConfig = new VpcConfig(                new String[]{{
                                                    add("ipsam"),
                                                    add("debitis"),
                                                }},                 new String[]{{
                                                    add("sit"),
                                                    add("nobis"),
                                                    add("error"),
                                                }}, "veniam");;
                            }};, UpdateProjectXAmzTargetEnum.DEVICE_FARM20150623_UPDATE_PROJECT) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "reiciendis";
                xAmzDate = "nulla";
                xAmzSecurityToken = "magni";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateProjectResponse res = sdk.sdk.updateProject(req);

            if (res.updateProjectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTestGridProject

Change details of a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTestGridProjectRequest;
import org.openapis.openapi.models.operations.UpdateTestGridProjectResponse;
import org.openapis.openapi.models.operations.UpdateTestGridProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestGridVpcConfig;
import org.openapis.openapi.models.shared.UpdateTestGridProjectRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTestGridProjectRequest req = new UpdateTestGridProjectRequest(                new UpdateTestGridProjectRequest("veniam") {{
                                description = "in";
                                name = "Jack Langworth";
                                vpcConfig = new TestGridVpcConfig(                new String[]{{
                                                    add("laboriosam"),
                                                    add("dolorum"),
                                                    add("voluptatum"),
                                                }},                 new String[]{{
                                                    add("hic"),
                                                    add("expedita"),
                                                    add("debitis"),
                                                }}, "neque");;
                            }};, UpdateTestGridProjectXAmzTargetEnum.DEVICE_FARM20150623_UPDATE_TEST_GRID_PROJECT) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "officia";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "tempora";
            }};            

            UpdateTestGridProjectResponse res = sdk.sdk.updateTestGridProject(req);

            if (res.updateTestGridProjectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUpload

Updates an uploaded test spec.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUploadRequest;
import org.openapis.openapi.models.operations.UpdateUploadResponse;
import org.openapis.openapi.models.operations.UpdateUploadXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateUploadRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateUploadRequest req = new UpdateUploadRequest(                new UpdateUploadRequest("fugit") {{
                                contentType = "ut";
                                editContent = false;
                                name = "George Nicolas";
                            }};, UpdateUploadXAmzTargetEnum.DEVICE_FARM20150623_UPDATE_UPLOAD) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsam";
                xAmzDate = "sit";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "repudiandae";
            }};            

            UpdateUploadResponse res = sdk.sdk.updateUpload(req);

            if (res.updateUploadResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVPCEConfiguration

Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVPCEConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateVPCEConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateVPCEConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateVPCEConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVPCEConfigurationRequest req = new UpdateVPCEConfigurationRequest(                new UpdateVPCEConfigurationRequest("et") {{
                                serviceDnsName = "blanditiis";
                                vpceConfigurationDescription = "ex";
                                vpceConfigurationName = "sed";
                                vpceServiceName = "sit";
                            }};, UpdateVPCEConfigurationXAmzTargetEnum.DEVICE_FARM20150623_UPDATE_VPCE_CONFIGURATION) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "saepe";
                xAmzDate = "error";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "reiciendis";
            }};            

            UpdateVPCEConfigurationResponse res = sdk.sdk.updateVPCEConfiguration(req);

            if (res.updateVPCEConfigurationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
