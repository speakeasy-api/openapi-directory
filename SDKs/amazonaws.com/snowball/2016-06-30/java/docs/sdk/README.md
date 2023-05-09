# SDK

## Overview

The Amazon Web Services Snow Family provides a petabyte-scale data transport solution that uses secure devices to transfer large amounts of data between your on-premises data centers and Amazon Simple Storage Service (Amazon S3). The Snow Family commands described here provide access to the same functionality that is available in the Amazon Web Services Snow Family Management Console, which enables you to create and manage jobs for a Snow Family device. To transfer data locally with a Snow Family device, you'll need to use the Snowball Edge client or the Amazon S3 API Interface for Snowball or OpsHub for Snow Family. For more information, see the <a href="https://docs.aws.amazon.com/AWSImportExport/latest/ug/api-reference.html">User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/snowball/>
### Available Operations

* [cancelCluster](#cancelcluster) - Cancels a cluster job. You can only cancel a cluster job while it's in the <code>AwaitingQuorum</code> status. You'll have at least an hour after creating a cluster job to cancel it.
* [cancelJob](#canceljob) - Cancels the specified job. You can only cancel a job before its <code>JobState</code> value changes to <code>PreparingAppliance</code>. Requesting the <code>ListJobs</code> or <code>DescribeJob</code> action returns a job's <code>JobState</code> as part of the response element data returned.
* [createAddress](#createaddress) - Creates an address for a Snow device to be shipped to. In most regions, addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown.
* [createCluster](#createcluster) - Creates an empty cluster. Each cluster supports five nodes. You use the <a>CreateJob</a> action separately to create the jobs for each of these nodes. The cluster does not ship until these five node jobs have been created.
* [createJob](#createjob) - <p>Creates a job to import or export data between Amazon S3 and your on-premises data center. Your Amazon Web Services account must have the right trust policies and permissions in place to create a job for a Snow device. If you're creating a job for a node in a cluster, you only need to provide the <code>clusterId</code> value; the other job attributes are inherited from the cluster. </p> <note> <p>Only the Snowball; Edge device type is supported when ordering clustered jobs.</p> <p>The device capacity is optional.</p> <p>Availability of device types differ by Amazon Web Services Region. For more information about Region availability, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/?p=ngi&amp;loc=4">Amazon Web Services Regional Services</a>.</p> </note> <p/> <p class="title"> <b>Snow Family devices and their capacities.</b> </p> <ul> <li> <p>Device type: <b>SNC1_SSD</b> </p> <ul> <li> <p>Capacity: T14</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>SNC1_HDD</b> </p> <ul> <li> <p>Capacity: T8</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_S</b> </p> <ul> <li> <p>Capacity: T98</p> </li> <li> <p>Description: Snowball Edge Storage Optimized for data transfer only </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_CG</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized with GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_C</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized without GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE</b> </p> <ul> <li> <p>Capacity: T100</p> </li> <li> <p>Description: Snowball Edge Storage Optimized with EC2 Compute</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T50</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region </p> </note> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T80</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region. </p> </note> </li> </ul> <p/> </li> <li> <p>Device type: <b>V3_5C</b> </p> <ul> <li> <p>Capacity: T32</p> </li> <li> <p>Description: Snowball Edge Compute Optimized without GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>V3_5S</b> </p> <ul> <li> <p>Capacity: T240</p> </li> <li> <p>Description: Snowball Edge Storage Optimized 210TB</p> </li> </ul> <p/> </li> </ul>
* [createLongTermPricing](#createlongtermpricing) - Creates a job with the long-term usage option for a device. The long-term usage is a 1-year or 3-year long-term pricing type for the device. You are billed upfront, and Amazon Web Services provides discounts for long-term pricing. 
* [createReturnShippingLabel](#createreturnshippinglabel) - Creates a shipping label that will be used to return the Snow device to Amazon Web Services.
* [describeAddress](#describeaddress) - Takes an <code>AddressId</code> and returns specific details about that address in the form of an <code>Address</code> object.
* [describeAddresses](#describeaddresses) - Returns a specified number of <code>ADDRESS</code> objects. Calling this API in one of the US regions will return addresses from the list of all addresses associated with this account in all US regions.
* [describeCluster](#describecluster) - Returns information about a specific cluster including shipping information, cluster status, and other important metadata.
* [describeJob](#describejob) - Returns information about a specific job including shipping information, job status, and other important metadata. 
* [describeReturnShippingLabel](#describereturnshippinglabel) - Information on the shipping label of a Snow device that is being returned to Amazon Web Services.
* [getJobManifest](#getjobmanifest) - <p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the <code>GetJobManifest</code> action.</p> <p>The manifest is an encrypted file that you can download after your job enters the <code>WithCustomer</code> status. This is the only valid status for calling this API as the manifest and <code>UnlockCode</code> code value are used for securing your device and should only be used when you have the device. The manifest is decrypted by using the <code>UnlockCode</code> code value, when you pass both values to the Snow device through the Snowball client when the client is started for the first time. </p> <p>As a best practice, we recommend that you don't save a copy of an <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p> <p>The credentials of a given job, including its manifest file and unlock code, expire 360 days after the job is created.</p>
* [getJobUnlockCode](#getjobunlockcode) - <p>Returns the <code>UnlockCode</code> code value for the specified job. A particular <code>UnlockCode</code> value can be accessed for up to 360 days after the associated job has been created.</p> <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed along with the manifest to the Snow device through the Snowball client when the client is started for the first time. The only valid status for calling this API is <code>WithCustomer</code> as the manifest and <code>Unlock</code> code values are used for securing your device and should only be used when you have the device.</p> <p>As a best practice, we recommend that you don't save a copy of the <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p>
* [getSnowballUsage](#getsnowballusage) - <p>Returns information about the Snow Family service limit for your account, and also the number of Snow devices your account has in use.</p> <p>The default service limit for the number of Snow devices that you can have at one time is 1. If you want to increase your service limit, contact Amazon Web Services Support.</p>
* [getSoftwareUpdates](#getsoftwareupdates) - Returns an Amazon S3 presigned URL for an update file associated with a specified <code>JobId</code>.
* [listClusterJobs](#listclusterjobs) - Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.
* [listClusters](#listclusters) - Returns an array of <code>ClusterListEntry</code> objects of the specified length. Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other important status information.
* [listCompatibleImages](#listcompatibleimages) - This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs) that are owned by your Amazon Web Services accountthat would be supported for use on a Snow device. Currently, supported AMIs are based on the Amazon Linux-2, Ubuntu 20.04 LTS - Focal, or Ubuntu 22.04 LTS - Jammy images, available on the Amazon Web Services Marketplace. Ubuntu 16.04 LTS - Xenial (HVM) images are no longer supported in the Market, but still supported for use on devices through Amazon EC2 VM Import/Export and running locally in AMIs.
* [listJobs](#listjobs) - Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. Calling this API action in one of the US regions will return jobs from the list of all jobs associated with this account in all US regions.
* [listLongTermPricing](#listlongtermpricing) - Lists all long-term pricing types.
* [listServiceVersions](#listserviceversions) - Lists all supported versions for Snow on-device services. Returns an array of <code>ServiceVersion</code> object containing the supported versions for a particular service.
* [updateCluster](#updatecluster) - While a cluster's <code>ClusterState</code> value is in the <code>AwaitingQuorum</code> state, you can update some of the information associated with a cluster. Once the cluster changes to a different job state, usually 60 minutes after the cluster being created, this action is no longer available.
* [updateJob](#updatejob) - While a job's <code>JobState</code> value is <code>New</code>, you can update some of the information associated with a job. Once the job changes to a different job state, usually within 60 minutes of the job being created, this action is no longer available.
* [updateJobShipmentState](#updatejobshipmentstate) - Updates the state when a shipment state changes to a different state.
* [updateLongTermPricing](#updatelongtermpricing) - Updates the long-term pricing type.

## cancelCluster

Cancels a cluster job. You can only cancel a cluster job while it's in the <code>AwaitingQuorum</code> status. You'll have at least an hour after creating a cluster job to cancel it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelClusterRequest;
import org.openapis.openapi.models.operations.CancelClusterResponse;
import org.openapis.openapi.models.operations.CancelClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelClusterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelClusterRequest req = new CancelClusterRequest(                new CancelClusterRequest("deserunt");, CancelClusterXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CANCEL_CLUSTER) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            CancelClusterResponse res = sdk.sdk.cancelCluster(req);

            if (res.cancelClusterResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelJob

Cancels the specified job. You can only cancel a job before its <code>JobState</code> value changes to <code>PreparingAppliance</code>. Requesting the <code>ListJobs</code> or <code>DescribeJob</code> action returns a job's <code>JobState</code> as part of the response element data returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelJobRequest;
import org.openapis.openapi.models.operations.CancelJobResponse;
import org.openapis.openapi.models.operations.CancelJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelJobRequest req = new CancelJobRequest(                new CancelJobRequest("molestiae");, CancelJobXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CANCEL_JOB) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            CancelJobResponse res = sdk.sdk.cancelJob(req);

            if (res.cancelJobResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAddress

Creates an address for a Snow device to be shipped to. In most regions, addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAddressRequest;
import org.openapis.openapi.models.operations.CreateAddressResponse;
import org.openapis.openapi.models.operations.CreateAddressXAmzTargetEnum;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.CreateAddressRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAddressRequest req = new CreateAddressRequest(                new CreateAddressRequest(                new Address() {{
                                                addressId = "ab";
                                                city = "North Lydia";
                                                company = "Hills Group";
                                                country = "Uzbekistan";
                                                isRestricted = false;
                                                landmark = "quo";
                                                name = "Teri Strosin";
                                                phoneNumber = "quod";
                                                postalCode = "45761-7651";
                                                prefectureOrDistrict = "deleniti";
                                                stateOrProvince = "hic";
                                                street1 = "optio";
                                                street2 = "totam";
                                                street3 = "beatae";
                                            }};);, CreateAddressXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CREATE_ADDRESS) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "esse";
            }};            

            CreateAddressResponse res = sdk.sdk.createAddress(req);

            if (res.createAddressResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCluster

Creates an empty cluster. Each cluster supports five nodes. You use the <a>CreateJob</a> action separately to create the jobs for each of these nodes. The cluster does not ship until these five node jobs have been created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClusterRequest;
import org.openapis.openapi.models.operations.CreateClusterResponse;
import org.openapis.openapi.models.operations.CreateClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateClusterRequest;
import org.openapis.openapi.models.shared.DeviceServiceNameEnum;
import org.openapis.openapi.models.shared.EKSOnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.Ec2AmiResource;
import org.openapis.openapi.models.shared.EventTriggerDefinition;
import org.openapis.openapi.models.shared.INDTaxDocuments;
import org.openapis.openapi.models.shared.JobResource;
import org.openapis.openapi.models.shared.JobStateEnum;
import org.openapis.openapi.models.shared.JobTypeEnum;
import org.openapis.openapi.models.shared.KeyRange;
import org.openapis.openapi.models.shared.LambdaResource;
import org.openapis.openapi.models.shared.NFSOnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.OnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.RemoteManagementEnum;
import org.openapis.openapi.models.shared.S3OnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.S3Resource;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShippingOptionEnum;
import org.openapis.openapi.models.shared.SnowballCapacityEnum;
import org.openapis.openapi.models.shared.SnowballTypeEnum;
import org.openapis.openapi.models.shared.StorageUnitEnum;
import org.openapis.openapi.models.shared.TGWOnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.TargetOnDeviceService;
import org.openapis.openapi.models.shared.TaxDocuments;
import org.openapis.openapi.models.shared.TransferOptionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateClusterRequest req = new CreateClusterRequest(                new CreateClusterRequest("excepturi", JobTypeEnum.IMPORT_, ShippingOptionEnum.SECOND_DAY, SnowballTypeEnum.EDGE_C) {{
                                description = "natus";
                                forceCreateJobs = false;
                                forwardingAddressId = "sed";
                                initialClusterSize = 612096L;
                                kmsKeyARN = "dolor";
                                longTermPricingIds = new String[]{{
                                    add("laboriosam"),
                                    add("hic"),
                                    add("saepe"),
                                }};
                                notification = new Notification() {{
                                    jobStatesToNotify = new org.openapis.openapi.models.shared.JobStateEnum[]{{
                                        add(JobStateEnum.IN_TRANSIT_TO_AWS),
                                        add(JobStateEnum.WITH_CUSTOMER),
                                        add(JobStateEnum.WITH_AWS),
                                    }};
                                    notifyAll = false;
                                    snsTopicARN = "iure";
                                }};;
                                onDeviceServiceConfiguration = new OnDeviceServiceConfiguration() {{
                                    eksOnDeviceService = new EKSOnDeviceServiceConfiguration() {{
                                        eksAnywhereVersion = "saepe";
                                        kubernetesVersion = "quidem";
                                    }};;
                                    nfsOnDeviceService = new NFSOnDeviceServiceConfiguration() {{
                                        storageLimit = 99280L;
                                        storageUnit = StorageUnitEnum.TB;
                                    }};;
                                    s3OnDeviceService = new S3OnDeviceServiceConfiguration() {{
                                        faultTolerance = 60225L;
                                        serviceSize = 969810L;
                                        storageLimit = 6667.67;
                                        storageUnit = StorageUnitEnum.TB;
                                    }};;
                                    tgwOnDeviceService = new TGWOnDeviceServiceConfiguration() {{
                                        storageLimit = 653140L;
                                        storageUnit = StorageUnitEnum.TB;
                                    }};;
                                }};;
                                remoteManagement = RemoteManagementEnum.INSTALLED_AUTOSTART;
                                resources = new JobResource() {{
                                    ec2AmiResources = new org.openapis.openapi.models.shared.Ec2AmiResource[]{{
                                        add(new Ec2AmiResource("explicabo") {{
                                            amiId = "dolorem";
                                            snowballAmiId = "corporis";
                                        }}),
                                    }};
                                    lambdaResources = new org.openapis.openapi.models.shared.LambdaResource[]{{
                                        add(new LambdaResource() {{
                                            eventTriggers = new org.openapis.openapi.models.shared.EventTriggerDefinition[]{{
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "omnis";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "nemo";
                                                }}),
                                            }};
                                            lambdaArn = "minima";
                                        }}),
                                        add(new LambdaResource() {{
                                            eventTriggers = new org.openapis.openapi.models.shared.EventTriggerDefinition[]{{
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "accusantium";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "iure";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "culpa";
                                                }}),
                                            }};
                                            lambdaArn = "doloribus";
                                        }}),
                                        add(new LambdaResource() {{
                                            eventTriggers = new org.openapis.openapi.models.shared.EventTriggerDefinition[]{{
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "architecto";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "mollitia";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "dolorem";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "culpa";
                                                }}),
                                            }};
                                            lambdaArn = "consequuntur";
                                        }}),
                                        add(new LambdaResource() {{
                                            eventTriggers = new org.openapis.openapi.models.shared.EventTriggerDefinition[]{{
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "mollitia";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "occaecati";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "numquam";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "commodi";
                                                }}),
                                            }};
                                            lambdaArn = "quam";
                                        }}),
                                    }};
                                    s3Resources = new org.openapis.openapi.models.shared.S3Resource[]{{
                                        add(new S3Resource() {{
                                            bucketArn = "velit";
                                            keyRange = new KeyRange() {{
                                                beginMarker = "error";
                                                endMarker = "quia";
                                            }};
                                            targetOnDeviceServices = new org.openapis.openapi.models.shared.TargetOnDeviceService[]{{
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.NFS_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.LOCAL_USE;
                                                }}),
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.S3_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.IMPORT_;
                                                }}),
                                            }};
                                        }}),
                                        add(new S3Resource() {{
                                            bucketArn = "odit";
                                            keyRange = new KeyRange() {{
                                                beginMarker = "quo";
                                                endMarker = "sequi";
                                            }};
                                            targetOnDeviceServices = new org.openapis.openapi.models.shared.TargetOnDeviceService[]{{
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.NFS_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.EXPORT;
                                                }}),
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.S3_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.IMPORT_;
                                                }}),
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.NFS_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.EXPORT;
                                                }}),
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.S3_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.LOCAL_USE;
                                                }}),
                                            }};
                                        }}),
                                    }};
                                }};;
                                roleARN = "quasi";
                                snowballCapacityPreference = SnowballCapacityEnum.T240;
                                taxDocuments = new TaxDocuments() {{
                                    ind = new INDTaxDocuments() {{
                                        gstin = "voluptatibus";
                                    }};;
                                }};;
                            }};, CreateClusterXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CREATE_CLUSTER) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "praesentium";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "voluptate";
            }};            

            CreateClusterResponse res = sdk.sdk.createCluster(req);

            if (res.createClusterResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createJob

<p>Creates a job to import or export data between Amazon S3 and your on-premises data center. Your Amazon Web Services account must have the right trust policies and permissions in place to create a job for a Snow device. If you're creating a job for a node in a cluster, you only need to provide the <code>clusterId</code> value; the other job attributes are inherited from the cluster. </p> <note> <p>Only the Snowball; Edge device type is supported when ordering clustered jobs.</p> <p>The device capacity is optional.</p> <p>Availability of device types differ by Amazon Web Services Region. For more information about Region availability, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/?p=ngi&amp;loc=4">Amazon Web Services Regional Services</a>.</p> </note> <p/> <p class="title"> <b>Snow Family devices and their capacities.</b> </p> <ul> <li> <p>Device type: <b>SNC1_SSD</b> </p> <ul> <li> <p>Capacity: T14</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>SNC1_HDD</b> </p> <ul> <li> <p>Capacity: T8</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_S</b> </p> <ul> <li> <p>Capacity: T98</p> </li> <li> <p>Description: Snowball Edge Storage Optimized for data transfer only </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_CG</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized with GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_C</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized without GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE</b> </p> <ul> <li> <p>Capacity: T100</p> </li> <li> <p>Description: Snowball Edge Storage Optimized with EC2 Compute</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T50</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region </p> </note> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T80</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region. </p> </note> </li> </ul> <p/> </li> <li> <p>Device type: <b>V3_5C</b> </p> <ul> <li> <p>Capacity: T32</p> </li> <li> <p>Description: Snowball Edge Compute Optimized without GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>V3_5S</b> </p> <ul> <li> <p>Capacity: T240</p> </li> <li> <p>Description: Snowball Edge Storage Optimized 210TB</p> </li> </ul> <p/> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateJobRequest;
import org.openapis.openapi.models.operations.CreateJobResponse;
import org.openapis.openapi.models.operations.CreateJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateJobRequest;
import org.openapis.openapi.models.shared.DeviceConfiguration;
import org.openapis.openapi.models.shared.DeviceServiceNameEnum;
import org.openapis.openapi.models.shared.EKSOnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.Ec2AmiResource;
import org.openapis.openapi.models.shared.EventTriggerDefinition;
import org.openapis.openapi.models.shared.INDTaxDocuments;
import org.openapis.openapi.models.shared.JobResource;
import org.openapis.openapi.models.shared.JobStateEnum;
import org.openapis.openapi.models.shared.JobTypeEnum;
import org.openapis.openapi.models.shared.KeyRange;
import org.openapis.openapi.models.shared.LambdaResource;
import org.openapis.openapi.models.shared.NFSOnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.OnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.RemoteManagementEnum;
import org.openapis.openapi.models.shared.S3OnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.S3Resource;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShippingOptionEnum;
import org.openapis.openapi.models.shared.SnowballCapacityEnum;
import org.openapis.openapi.models.shared.SnowballTypeEnum;
import org.openapis.openapi.models.shared.SnowconeDeviceConfiguration;
import org.openapis.openapi.models.shared.StorageUnitEnum;
import org.openapis.openapi.models.shared.TGWOnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.TargetOnDeviceService;
import org.openapis.openapi.models.shared.TaxDocuments;
import org.openapis.openapi.models.shared.TransferOptionEnum;
import org.openapis.openapi.models.shared.WirelessConnection;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateJobRequest req = new CreateJobRequest(                new CreateJobRequest() {{
                                addressId = "perferendis";
                                clusterId = "doloremque";
                                description = "reprehenderit";
                                deviceConfiguration = new DeviceConfiguration() {{
                                    snowconeDeviceConfiguration = new SnowconeDeviceConfiguration() {{
                                        wirelessConnection = new WirelessConnection() {{
                                            isWifiEnabled = false;
                                        }};;
                                    }};;
                                }};;
                                forwardingAddressId = "ut";
                                jobType = JobTypeEnum.LOCAL_USE;
                                kmsKeyARN = "dicta";
                                longTermPricingId = "corporis";
                                notification = new Notification() {{
                                    jobStatesToNotify = new org.openapis.openapi.models.shared.JobStateEnum[]{{
                                        add(JobStateEnum.WITH_AWS_SORTING_FACILITY),
                                        add(JobStateEnum.PREPARING_APPLIANCE),
                                    }};
                                    notifyAll = false;
                                    snsTopicARN = "harum";
                                }};;
                                onDeviceServiceConfiguration = new OnDeviceServiceConfiguration() {{
                                    eksOnDeviceService = new EKSOnDeviceServiceConfiguration() {{
                                        eksAnywhereVersion = "enim";
                                        kubernetesVersion = "accusamus";
                                    }};;
                                    nfsOnDeviceService = new NFSOnDeviceServiceConfiguration() {{
                                        storageLimit = 414263L;
                                        storageUnit = StorageUnitEnum.TB;
                                    }};;
                                    s3OnDeviceService = new S3OnDeviceServiceConfiguration() {{
                                        faultTolerance = 918236L;
                                        serviceSize = 64147L;
                                        storageLimit = 2168.22;
                                        storageUnit = StorageUnitEnum.TB;
                                    }};;
                                    tgwOnDeviceService = new TGWOnDeviceServiceConfiguration() {{
                                        storageLimit = 692472L;
                                        storageUnit = StorageUnitEnum.TB;
                                    }};;
                                }};;
                                remoteManagement = RemoteManagementEnum.INSTALLED_AUTOSTART;
                                resources = new JobResource() {{
                                    ec2AmiResources = new org.openapis.openapi.models.shared.Ec2AmiResource[]{{
                                        add(new Ec2AmiResource("praesentium") {{
                                            amiId = "pariatur";
                                            snowballAmiId = "modi";
                                        }}),
                                        add(new Ec2AmiResource("quasi") {{
                                            amiId = "rem";
                                            snowballAmiId = "voluptates";
                                        }}),
                                        add(new Ec2AmiResource("veritatis") {{
                                            amiId = "repudiandae";
                                            snowballAmiId = "sint";
                                        }}),
                                    }};
                                    lambdaResources = new org.openapis.openapi.models.shared.LambdaResource[]{{
                                        add(new LambdaResource() {{
                                            eventTriggers = new org.openapis.openapi.models.shared.EventTriggerDefinition[]{{
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "enim";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "consequatur";
                                                }}),
                                            }};
                                            lambdaArn = "est";
                                        }}),
                                        add(new LambdaResource() {{
                                            eventTriggers = new org.openapis.openapi.models.shared.EventTriggerDefinition[]{{
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "explicabo";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "deserunt";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "distinctio";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "quibusdam";
                                                }}),
                                            }};
                                            lambdaArn = "labore";
                                        }}),
                                        add(new LambdaResource() {{
                                            eventTriggers = new org.openapis.openapi.models.shared.EventTriggerDefinition[]{{
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "qui";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "aliquid";
                                                }}),
                                            }};
                                            lambdaArn = "cupiditate";
                                        }}),
                                        add(new LambdaResource() {{
                                            eventTriggers = new org.openapis.openapi.models.shared.EventTriggerDefinition[]{{
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "perferendis";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "magni";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "assumenda";
                                                }}),
                                            }};
                                            lambdaArn = "ipsam";
                                        }}),
                                    }};
                                    s3Resources = new org.openapis.openapi.models.shared.S3Resource[]{{
                                        add(new S3Resource() {{
                                            bucketArn = "fugit";
                                            keyRange = new KeyRange() {{
                                                beginMarker = "dolorum";
                                                endMarker = "excepturi";
                                            }};
                                            targetOnDeviceServices = new org.openapis.openapi.models.shared.TargetOnDeviceService[]{{
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.S3_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.LOCAL_USE;
                                                }}),
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.NFS_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.LOCAL_USE;
                                                }}),
                                            }};
                                        }}),
                                    }};
                                }};;
                                roleARN = "eum";
                                shippingOption = ShippingOptionEnum.SECOND_DAY;
                                snowballCapacityPreference = SnowballCapacityEnum.T32;
                                snowballType = SnowballTypeEnum.SNC1_HDD;
                                taxDocuments = new TaxDocuments() {{
                                    ind = new INDTaxDocuments() {{
                                        gstin = "aliquid";
                                    }};;
                                }};;
                            }};, CreateJobXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CREATE_JOB) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "sint";
                xAmzDate = "officia";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "a";
            }};            

            CreateJobResponse res = sdk.sdk.createJob(req);

            if (res.createJobResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLongTermPricing

Creates a job with the long-term usage option for a device. The long-term usage is a 1-year or 3-year long-term pricing type for the device. You are billed upfront, and Amazon Web Services provides discounts for long-term pricing. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLongTermPricingRequest;
import org.openapis.openapi.models.operations.CreateLongTermPricingResponse;
import org.openapis.openapi.models.operations.CreateLongTermPricingXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLongTermPricingRequest;
import org.openapis.openapi.models.shared.LongTermPricingTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SnowballTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLongTermPricingRequest req = new CreateLongTermPricingRequest(                new CreateLongTermPricingRequest(LongTermPricingTypeEnum.THREE_YEAR) {{
                                isLongTermPricingAutoRenew = false;
                                snowballType = SnowballTypeEnum.EDGE_S;
                            }};, CreateLongTermPricingXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CREATE_LONG_TERM_PRICING) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "rerum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "facere";
            }};            

            CreateLongTermPricingResponse res = sdk.sdk.createLongTermPricing(req);

            if (res.createLongTermPricingResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReturnShippingLabel

Creates a shipping label that will be used to return the Snow device to Amazon Web Services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReturnShippingLabelRequest;
import org.openapis.openapi.models.operations.CreateReturnShippingLabelResponse;
import org.openapis.openapi.models.operations.CreateReturnShippingLabelXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateReturnShippingLabelRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShippingOptionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReturnShippingLabelRequest req = new CreateReturnShippingLabelRequest(                new CreateReturnShippingLabelRequest("aliquid") {{
                                shippingOption = ShippingOptionEnum.EXPRESS;
                            }};, CreateReturnShippingLabelXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CREATE_RETURN_SHIPPING_LABEL) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "non";
                xAmzCredential = "occaecati";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quidem";
            }};            

            CreateReturnShippingLabelResponse res = sdk.sdk.createReturnShippingLabel(req);

            if (res.createReturnShippingLabelResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAddress

Takes an <code>AddressId</code> and returns specific details about that address in the form of an <code>Address</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAddressRequest;
import org.openapis.openapi.models.operations.DescribeAddressResponse;
import org.openapis.openapi.models.operations.DescribeAddressXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAddressRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAddressRequest req = new DescribeAddressRequest(                new DescribeAddressRequest("nam");, DescribeAddressXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_DESCRIBE_ADDRESS) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "deleniti";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "amet";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "nisi";
            }};            

            DescribeAddressResponse res = sdk.sdk.describeAddress(req);

            if (res.describeAddressResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAddresses

Returns a specified number of <code>ADDRESS</code> objects. Calling this API in one of the US regions will return addresses from the list of all addresses associated with this account in all US regions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAddressesRequest;
import org.openapis.openapi.models.operations.DescribeAddressesResponse;
import org.openapis.openapi.models.operations.DescribeAddressesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAddressesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAddressesRequest req = new DescribeAddressesRequest(                new DescribeAddressesRequest() {{
                                maxResults = 618809L;
                                nextToken = "omnis";
                            }};, DescribeAddressesXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_DESCRIBE_ADDRESSES) {{
                maxResults = "molestiae";
                nextToken = "perferendis";
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "distinctio";
                xAmzDate = "id";
                xAmzSecurityToken = "labore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "suscipit";
            }};            

            DescribeAddressesResponse res = sdk.sdk.describeAddresses(req);

            if (res.describeAddressesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCluster

Returns information about a specific cluster including shipping information, cluster status, and other important metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeClusterRequest;
import org.openapis.openapi.models.operations.DescribeClusterResponse;
import org.openapis.openapi.models.operations.DescribeClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeClusterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeClusterRequest req = new DescribeClusterRequest(                new DescribeClusterRequest("nobis");, DescribeClusterXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_DESCRIBE_CLUSTER) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "vero";
                xAmzCredential = "aspernatur";
                xAmzDate = "architecto";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "et";
                xAmzSignedHeaders = "excepturi";
            }};            

            DescribeClusterResponse res = sdk.sdk.describeCluster(req);

            if (res.describeClusterResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeJob

Returns information about a specific job including shipping information, job status, and other important metadata. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeJobRequest;
import org.openapis.openapi.models.operations.DescribeJobResponse;
import org.openapis.openapi.models.operations.DescribeJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeJobRequest req = new DescribeJobRequest(                new DescribeJobRequest("provident");, DescribeJobXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_DESCRIBE_JOB) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "sint";
                xAmzCredential = "accusantium";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "ad";
            }};            

            DescribeJobResponse res = sdk.sdk.describeJob(req);

            if (res.describeJobResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeReturnShippingLabel

Information on the shipping label of a Snow device that is being returned to Amazon Web Services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReturnShippingLabelRequest;
import org.openapis.openapi.models.operations.DescribeReturnShippingLabelResponse;
import org.openapis.openapi.models.operations.DescribeReturnShippingLabelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeReturnShippingLabelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReturnShippingLabelRequest req = new DescribeReturnShippingLabelRequest(                new DescribeReturnShippingLabelRequest("dolor");, DescribeReturnShippingLabelXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_DESCRIBE_RETURN_SHIPPING_LABEL) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "odit";
                xAmzCredential = "nemo";
                xAmzDate = "quasi";
                xAmzSecurityToken = "iure";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "debitis";
            }};            

            DescribeReturnShippingLabelResponse res = sdk.sdk.describeReturnShippingLabel(req);

            if (res.describeReturnShippingLabelResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJobManifest

<p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the <code>GetJobManifest</code> action.</p> <p>The manifest is an encrypted file that you can download after your job enters the <code>WithCustomer</code> status. This is the only valid status for calling this API as the manifest and <code>UnlockCode</code> code value are used for securing your device and should only be used when you have the device. The manifest is decrypted by using the <code>UnlockCode</code> code value, when you pass both values to the Snow device through the Snowball client when the client is started for the first time. </p> <p>As a best practice, we recommend that you don't save a copy of an <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p> <p>The credentials of a given job, including its manifest file and unlock code, expire 360 days after the job is created.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobManifestRequest;
import org.openapis.openapi.models.operations.GetJobManifestResponse;
import org.openapis.openapi.models.operations.GetJobManifestXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetJobManifestRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetJobManifestRequest req = new GetJobManifestRequest(                new GetJobManifestRequest("maxime");, GetJobManifestXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_GET_JOB_MANIFEST) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "in";
                xAmzDate = "architecto";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "ullam";
            }};            

            GetJobManifestResponse res = sdk.sdk.getJobManifest(req);

            if (res.getJobManifestResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJobUnlockCode

<p>Returns the <code>UnlockCode</code> code value for the specified job. A particular <code>UnlockCode</code> value can be accessed for up to 360 days after the associated job has been created.</p> <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed along with the manifest to the Snow device through the Snowball client when the client is started for the first time. The only valid status for calling this API is <code>WithCustomer</code> as the manifest and <code>Unlock</code> code values are used for securing your device and should only be used when you have the device.</p> <p>As a best practice, we recommend that you don't save a copy of the <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobUnlockCodeRequest;
import org.openapis.openapi.models.operations.GetJobUnlockCodeResponse;
import org.openapis.openapi.models.operations.GetJobUnlockCodeXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetJobUnlockCodeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetJobUnlockCodeRequest req = new GetJobUnlockCodeRequest(                new GetJobUnlockCodeRequest("nihil");, GetJobUnlockCodeXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_GET_JOB_UNLOCK_CODE) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "sed";
                xAmzDate = "saepe";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "consequuntur";
            }};            

            GetJobUnlockCodeResponse res = sdk.sdk.getJobUnlockCode(req);

            if (res.getJobUnlockCodeResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSnowballUsage

<p>Returns information about the Snow Family service limit for your account, and also the number of Snow devices your account has in use.</p> <p>The default service limit for the number of Snow devices that you can have at one time is 1. If you want to increase your service limit, contact Amazon Web Services Support.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSnowballUsageRequest;
import org.openapis.openapi.models.operations.GetSnowballUsageResponse;
import org.openapis.openapi.models.operations.GetSnowballUsageXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSnowballUsageRequest req = new GetSnowballUsageRequest(                new java.util.HashMap<String, Object>() {{
                                put("magni", "sunt");
                                put("quo", "illum");
                                put("pariatur", "maxime");
                            }}, GetSnowballUsageXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_GET_SNOWBALL_USAGE) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "odit";
                xAmzDate = "ea";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "maiores";
            }};            

            GetSnowballUsageResponse res = sdk.sdk.getSnowballUsage(req);

            if (res.getSnowballUsageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSoftwareUpdates

Returns an Amazon S3 presigned URL for an update file associated with a specified <code>JobId</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSoftwareUpdatesRequest;
import org.openapis.openapi.models.operations.GetSoftwareUpdatesResponse;
import org.openapis.openapi.models.operations.GetSoftwareUpdatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSoftwareUpdatesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSoftwareUpdatesRequest req = new GetSoftwareUpdatesRequest(                new GetSoftwareUpdatesRequest("ipsam");, GetSoftwareUpdatesXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_GET_SOFTWARE_UPDATES) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "autem";
                xAmzCredential = "nam";
                xAmzDate = "eaque";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            GetSoftwareUpdatesResponse res = sdk.sdk.getSoftwareUpdates(req);

            if (res.getSoftwareUpdatesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listClusterJobs

Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListClusterJobsRequest;
import org.openapis.openapi.models.operations.ListClusterJobsResponse;
import org.openapis.openapi.models.operations.ListClusterJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListClusterJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListClusterJobsRequest req = new ListClusterJobsRequest(                new ListClusterJobsRequest("fugiat") {{
                                maxResults = 230742L;
                                nextToken = "aut";
                            }};, ListClusterJobsXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_LIST_CLUSTER_JOBS) {{
                maxResults = "cumque";
                nextToken = "corporis";
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "libero";
                xAmzCredential = "nobis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "quis";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "dignissimos";
            }};            

            ListClusterJobsResponse res = sdk.sdk.listClusterJobs(req);

            if (res.listClusterJobsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listClusters

Returns an array of <code>ClusterListEntry</code> objects of the specified length. Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other important status information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListClustersRequest;
import org.openapis.openapi.models.operations.ListClustersResponse;
import org.openapis.openapi.models.operations.ListClustersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListClustersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListClustersRequest req = new ListClustersRequest(                new ListClustersRequest() {{
                                maxResults = 338985L;
                                nextToken = "nesciunt";
                            }};, ListClustersXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_LIST_CLUSTERS) {{
                maxResults = "eos";
                nextToken = "perferendis";
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "minus";
                xAmzCredential = "quam";
                xAmzDate = "dolor";
                xAmzSecurityToken = "vero";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "hic";
            }};            

            ListClustersResponse res = sdk.sdk.listClusters(req);

            if (res.listClustersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCompatibleImages

This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs) that are owned by your Amazon Web Services accountthat would be supported for use on a Snow device. Currently, supported AMIs are based on the Amazon Linux-2, Ubuntu 20.04 LTS - Focal, or Ubuntu 22.04 LTS - Jammy images, available on the Amazon Web Services Marketplace. Ubuntu 16.04 LTS - Xenial (HVM) images are no longer supported in the Market, but still supported for use on devices through Amazon EC2 VM Import/Export and running locally in AMIs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCompatibleImagesRequest;
import org.openapis.openapi.models.operations.ListCompatibleImagesResponse;
import org.openapis.openapi.models.operations.ListCompatibleImagesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListCompatibleImagesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCompatibleImagesRequest req = new ListCompatibleImagesRequest(                new ListCompatibleImagesRequest() {{
                                maxResults = 608253L;
                                nextToken = "facilis";
                            }};, ListCompatibleImagesXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_LIST_COMPATIBLE_IMAGES) {{
                maxResults = "perspiciatis";
                nextToken = "voluptatem";
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "blanditiis";
                xAmzDate = "error";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "rerum";
            }};            

            ListCompatibleImagesResponse res = sdk.sdk.listCompatibleImages(req);

            if (res.listCompatibleImagesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listJobs

Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. Calling this API action in one of the US regions will return jobs from the list of all jobs associated with this account in all US regions.

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
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListJobsRequest req = new ListJobsRequest(                new ListJobsRequest() {{
                                maxResults = 992397L;
                                nextToken = "earum";
                            }};, ListJobsXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_LIST_JOBS) {{
                maxResults = "modi";
                nextToken = "iste";
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "pariatur";
                xAmzDate = "provident";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "delectus";
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

## listLongTermPricing

Lists all long-term pricing types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLongTermPricingRequest;
import org.openapis.openapi.models.operations.ListLongTermPricingResponse;
import org.openapis.openapi.models.operations.ListLongTermPricingXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListLongTermPricingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLongTermPricingRequest req = new ListLongTermPricingRequest(                new ListLongTermPricingRequest() {{
                                maxResults = 554242L;
                                nextToken = "aliquid";
                            }};, ListLongTermPricingXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_LIST_LONG_TERM_PRICING) {{
                maxResults = "dolorem";
                nextToken = "dolorem";
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "qui";
                xAmzCredential = "ipsum";
                xAmzDate = "hic";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "voluptate";
            }};            

            ListLongTermPricingResponse res = sdk.sdk.listLongTermPricing(req);

            if (res.listLongTermPricingResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceVersions

Lists all supported versions for Snow on-device services. Returns an array of <code>ServiceVersion</code> object containing the supported versions for a particular service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceVersionsRequest;
import org.openapis.openapi.models.operations.ListServiceVersionsResponse;
import org.openapis.openapi.models.operations.ListServiceVersionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DependentService;
import org.openapis.openapi.models.shared.ListServiceVersionsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNameEnum;
import org.openapis.openapi.models.shared.ServiceVersion;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServiceVersionsRequest req = new ListServiceVersionsRequest(                new ListServiceVersionsRequest(ServiceNameEnum.EKS_ANYWHERE) {{
                                dependentServices = new org.openapis.openapi.models.shared.DependentService[]{{
                                    add(new DependentService() {{
                                        serviceName = ServiceNameEnum.EKS_ANYWHERE;
                                        serviceVersion = new ServiceVersion() {{
                                            version = "numquam";
                                        }};
                                    }}),
                                }};
                                maxResults = 85295L;
                                nextToken = "ipsa";
                            }};, ListServiceVersionsXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_LIST_SERVICE_VERSIONS) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "iure";
                xAmzCredential = "odio";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            ListServiceVersionsResponse res = sdk.sdk.listServiceVersions(req);

            if (res.listServiceVersionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCluster

While a cluster's <code>ClusterState</code> value is in the <code>AwaitingQuorum</code> state, you can update some of the information associated with a cluster. Once the cluster changes to a different job state, usually 60 minutes after the cluster being created, this action is no longer available.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClusterRequest;
import org.openapis.openapi.models.operations.UpdateClusterResponse;
import org.openapis.openapi.models.operations.UpdateClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeviceServiceNameEnum;
import org.openapis.openapi.models.shared.EKSOnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.Ec2AmiResource;
import org.openapis.openapi.models.shared.EventTriggerDefinition;
import org.openapis.openapi.models.shared.JobResource;
import org.openapis.openapi.models.shared.JobStateEnum;
import org.openapis.openapi.models.shared.KeyRange;
import org.openapis.openapi.models.shared.LambdaResource;
import org.openapis.openapi.models.shared.NFSOnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.OnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.S3OnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.S3Resource;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShippingOptionEnum;
import org.openapis.openapi.models.shared.StorageUnitEnum;
import org.openapis.openapi.models.shared.TGWOnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.TargetOnDeviceService;
import org.openapis.openapi.models.shared.TransferOptionEnum;
import org.openapis.openapi.models.shared.UpdateClusterRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateClusterRequest req = new UpdateClusterRequest(                new UpdateClusterRequest("natus") {{
                                addressId = "eos";
                                description = "atque";
                                forwardingAddressId = "sit";
                                notification = new Notification() {{
                                    jobStatesToNotify = new org.openapis.openapi.models.shared.JobStateEnum[]{{
                                        add(JobStateEnum.NEW_),
                                        add(JobStateEnum.COMPLETE),
                                        add(JobStateEnum.IN_PROGRESS),
                                        add(JobStateEnum.WITH_AWS_SORTING_FACILITY),
                                    }};
                                    notifyAll = false;
                                    snsTopicARN = "voluptate";
                                }};;
                                onDeviceServiceConfiguration = new OnDeviceServiceConfiguration() {{
                                    eksOnDeviceService = new EKSOnDeviceServiceConfiguration() {{
                                        eksAnywhereVersion = "dolorum";
                                        kubernetesVersion = "deleniti";
                                    }};;
                                    nfsOnDeviceService = new NFSOnDeviceServiceConfiguration() {{
                                        storageLimit = 607045L;
                                        storageUnit = StorageUnitEnum.TB;
                                    }};;
                                    s3OnDeviceService = new S3OnDeviceServiceConfiguration() {{
                                        faultTolerance = 896672L;
                                        serviceSize = 714697L;
                                        storageLimit = 9903.39;
                                        storageUnit = StorageUnitEnum.TB;
                                    }};;
                                    tgwOnDeviceService = new TGWOnDeviceServiceConfiguration() {{
                                        storageLimit = 469497L;
                                        storageUnit = StorageUnitEnum.TB;
                                    }};;
                                }};;
                                resources = new JobResource() {{
                                    ec2AmiResources = new org.openapis.openapi.models.shared.Ec2AmiResource[]{{
                                        add(new Ec2AmiResource("saepe") {{
                                            amiId = "voluptate";
                                            snowballAmiId = "id";
                                        }}),
                                    }};
                                    lambdaResources = new org.openapis.openapi.models.shared.LambdaResource[]{{
                                        add(new LambdaResource() {{
                                            eventTriggers = new org.openapis.openapi.models.shared.EventTriggerDefinition[]{{
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "perferendis";
                                                }}),
                                            }};
                                            lambdaArn = "amet";
                                        }}),
                                        add(new LambdaResource() {{
                                            eventTriggers = new org.openapis.openapi.models.shared.EventTriggerDefinition[]{{
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "accusamus";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "ad";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "saepe";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "suscipit";
                                                }}),
                                            }};
                                            lambdaArn = "deserunt";
                                        }}),
                                    }};
                                    s3Resources = new org.openapis.openapi.models.shared.S3Resource[]{{
                                        add(new S3Resource() {{
                                            bucketArn = "minima";
                                            keyRange = new KeyRange() {{
                                                beginMarker = "repellendus";
                                                endMarker = "totam";
                                            }};
                                            targetOnDeviceServices = new org.openapis.openapi.models.shared.TargetOnDeviceService[]{{
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.NFS_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.LOCAL_USE;
                                                }}),
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.NFS_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.IMPORT_;
                                                }}),
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.NFS_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.LOCAL_USE;
                                                }}),
                                            }};
                                        }}),
                                        add(new S3Resource() {{
                                            bucketArn = "officiis";
                                            keyRange = new KeyRange() {{
                                                beginMarker = "qui";
                                                endMarker = "dolorum";
                                            }};
                                            targetOnDeviceServices = new org.openapis.openapi.models.shared.TargetOnDeviceService[]{{
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.NFS_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.LOCAL_USE;
                                                }}),
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.NFS_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.IMPORT_;
                                                }}),
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.S3_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.LOCAL_USE;
                                                }}),
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.NFS_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.LOCAL_USE;
                                                }}),
                                            }};
                                        }}),
                                        add(new S3Resource() {{
                                            bucketArn = "accusamus";
                                            keyRange = new KeyRange() {{
                                                beginMarker = "numquam";
                                                endMarker = "enim";
                                            }};
                                            targetOnDeviceServices = new org.openapis.openapi.models.shared.TargetOnDeviceService[]{{
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.S3_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.EXPORT;
                                                }}),
                                            }};
                                        }}),
                                    }};
                                }};;
                                roleARN = "nihil";
                                shippingOption = ShippingOptionEnum.SECOND_DAY;
                            }};, UpdateClusterXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_UPDATE_CLUSTER) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "neque";
                xAmzCredential = "sed";
                xAmzDate = "vel";
                xAmzSecurityToken = "libero";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "deserunt";
            }};            

            UpdateClusterResponse res = sdk.sdk.updateCluster(req);

            if (res.updateClusterResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateJob

While a job's <code>JobState</code> value is <code>New</code>, you can update some of the information associated with a job. Once the job changes to a different job state, usually within 60 minutes of the job being created, this action is no longer available.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateJobRequest;
import org.openapis.openapi.models.operations.UpdateJobResponse;
import org.openapis.openapi.models.operations.UpdateJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeviceServiceNameEnum;
import org.openapis.openapi.models.shared.EKSOnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.Ec2AmiResource;
import org.openapis.openapi.models.shared.EventTriggerDefinition;
import org.openapis.openapi.models.shared.JobResource;
import org.openapis.openapi.models.shared.JobStateEnum;
import org.openapis.openapi.models.shared.KeyRange;
import org.openapis.openapi.models.shared.LambdaResource;
import org.openapis.openapi.models.shared.NFSOnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.OnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.S3OnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.S3Resource;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShippingOptionEnum;
import org.openapis.openapi.models.shared.SnowballCapacityEnum;
import org.openapis.openapi.models.shared.StorageUnitEnum;
import org.openapis.openapi.models.shared.TGWOnDeviceServiceConfiguration;
import org.openapis.openapi.models.shared.TargetOnDeviceService;
import org.openapis.openapi.models.shared.TransferOptionEnum;
import org.openapis.openapi.models.shared.UpdateJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateJobRequest req = new UpdateJobRequest(                new UpdateJobRequest("ipsum") {{
                                addressId = "incidunt";
                                description = "qui";
                                forwardingAddressId = "cupiditate";
                                notification = new Notification() {{
                                    jobStatesToNotify = new org.openapis.openapi.models.shared.JobStateEnum[]{{
                                        add(JobStateEnum.LISTING),
                                        add(JobStateEnum.COMPLETE),
                                        add(JobStateEnum.PREPARING_APPLIANCE),
                                        add(JobStateEnum.IN_PROGRESS),
                                    }};
                                    notifyAll = false;
                                    snsTopicARN = "totam";
                                }};;
                                onDeviceServiceConfiguration = new OnDeviceServiceConfiguration() {{
                                    eksOnDeviceService = new EKSOnDeviceServiceConfiguration() {{
                                        eksAnywhereVersion = "incidunt";
                                        kubernetesVersion = "aspernatur";
                                    }};;
                                    nfsOnDeviceService = new NFSOnDeviceServiceConfiguration() {{
                                        storageLimit = 174909L;
                                        storageUnit = StorageUnitEnum.TB;
                                    }};;
                                    s3OnDeviceService = new S3OnDeviceServiceConfiguration() {{
                                        faultTolerance = 716860L;
                                        serviceSize = 704474L;
                                        storageLimit = 3960.6;
                                        storageUnit = StorageUnitEnum.TB;
                                    }};;
                                    tgwOnDeviceService = new TGWOnDeviceServiceConfiguration() {{
                                        storageLimit = 463150L;
                                        storageUnit = StorageUnitEnum.TB;
                                    }};;
                                }};;
                                resources = new JobResource() {{
                                    ec2AmiResources = new org.openapis.openapi.models.shared.Ec2AmiResource[]{{
                                        add(new Ec2AmiResource("neque") {{
                                            amiId = "temporibus";
                                            snowballAmiId = "qui";
                                        }}),
                                        add(new Ec2AmiResource("odio") {{
                                            amiId = "fugit";
                                            snowballAmiId = "magni";
                                        }}),
                                        add(new Ec2AmiResource("nam") {{
                                            amiId = "sunt";
                                            snowballAmiId = "ullam";
                                        }}),
                                    }};
                                    lambdaResources = new org.openapis.openapi.models.shared.LambdaResource[]{{
                                        add(new LambdaResource() {{
                                            eventTriggers = new org.openapis.openapi.models.shared.EventTriggerDefinition[]{{
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "cumque";
                                                }}),
                                            }};
                                            lambdaArn = "soluta";
                                        }}),
                                        add(new LambdaResource() {{
                                            eventTriggers = new org.openapis.openapi.models.shared.EventTriggerDefinition[]{{
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "et";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "saepe";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "ipsum";
                                                }}),
                                            }};
                                            lambdaArn = "veritatis";
                                        }}),
                                        add(new LambdaResource() {{
                                            eventTriggers = new org.openapis.openapi.models.shared.EventTriggerDefinition[]{{
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "quos";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "tempore";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "cupiditate";
                                                }}),
                                            }};
                                            lambdaArn = "aperiam";
                                        }}),
                                        add(new LambdaResource() {{
                                            eventTriggers = new org.openapis.openapi.models.shared.EventTriggerDefinition[]{{
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "dolorem";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "dolore";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "labore";
                                                }}),
                                                add(new EventTriggerDefinition() {{
                                                    eventResourceARN = "adipisci";
                                                }}),
                                            }};
                                            lambdaArn = "dolorum";
                                        }}),
                                    }};
                                    s3Resources = new org.openapis.openapi.models.shared.S3Resource[]{{
                                        add(new S3Resource() {{
                                            bucketArn = "quae";
                                            keyRange = new KeyRange() {{
                                                beginMarker = "aut";
                                                endMarker = "quas";
                                            }};
                                            targetOnDeviceServices = new org.openapis.openapi.models.shared.TargetOnDeviceService[]{{
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.NFS_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.LOCAL_USE;
                                                }}),
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.S3_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.LOCAL_USE;
                                                }}),
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.S3_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.IMPORT_;
                                                }}),
                                                add(new TargetOnDeviceService() {{
                                                    serviceName = DeviceServiceNameEnum.S3_ON_DEVICE_SERVICE;
                                                    transferOption = TransferOptionEnum.EXPORT;
                                                }}),
                                            }};
                                        }}),
                                    }};
                                }};;
                                roleARN = "qui";
                                shippingOption = ShippingOptionEnum.SECOND_DAY;
                                snowballCapacityPreference = SnowballCapacityEnum.T8;
                            }};, UpdateJobXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_UPDATE_JOB) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "voluptatibus";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "vero";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "quis";
            }};            

            UpdateJobResponse res = sdk.sdk.updateJob(req);

            if (res.updateJobResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateJobShipmentState

Updates the state when a shipment state changes to a different state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateJobShipmentStateRequest;
import org.openapis.openapi.models.operations.UpdateJobShipmentStateResponse;
import org.openapis.openapi.models.operations.UpdateJobShipmentStateXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShipmentStateEnum;
import org.openapis.openapi.models.shared.UpdateJobShipmentStateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateJobShipmentStateRequest req = new UpdateJobShipmentStateRequest(                new UpdateJobShipmentStateRequest("delectus", ShipmentStateEnum.RECEIVED);, UpdateJobShipmentStateXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_UPDATE_JOB_SHIPMENT_STATE) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "vero";
                xAmzCredential = "tenetur";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "hic";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quod";
            }};            

            UpdateJobShipmentStateResponse res = sdk.sdk.updateJobShipmentState(req);

            if (res.updateJobShipmentStateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLongTermPricing

Updates the long-term pricing type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLongTermPricingRequest;
import org.openapis.openapi.models.operations.UpdateLongTermPricingResponse;
import org.openapis.openapi.models.operations.UpdateLongTermPricingXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateLongTermPricingRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLongTermPricingRequest req = new UpdateLongTermPricingRequest(                new UpdateLongTermPricingRequest("similique") {{
                                isLongTermPricingAutoRenew = false;
                                replacementJob = "facilis";
                            }};, UpdateLongTermPricingXAmzTargetEnum.AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_UPDATE_LONG_TERM_PRICING) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "dolore";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "illum";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "natus";
            }};            

            UpdateLongTermPricingResponse res = sdk.sdk.updateLongTermPricing(req);

            if (res.updateLongTermPricingResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
