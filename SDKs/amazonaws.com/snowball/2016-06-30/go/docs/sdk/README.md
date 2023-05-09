# SDK

## Overview

The Amazon Web Services Snow Family provides a petabyte-scale data transport solution that uses secure devices to transfer large amounts of data between your on-premises data centers and Amazon Simple Storage Service (Amazon S3). The Snow Family commands described here provide access to the same functionality that is available in the Amazon Web Services Snow Family Management Console, which enables you to create and manage jobs for a Snow Family device. To transfer data locally with a Snow Family device, you'll need to use the Snowball Edge client or the Amazon S3 API Interface for Snowball or OpsHub for Snow Family. For more information, see the <a href="https://docs.aws.amazon.com/AWSImportExport/latest/ug/api-reference.html">User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/snowball/>
### Available Operations

* [CancelCluster](#cancelcluster) - Cancels a cluster job. You can only cancel a cluster job while it's in the <code>AwaitingQuorum</code> status. You'll have at least an hour after creating a cluster job to cancel it.
* [CancelJob](#canceljob) - Cancels the specified job. You can only cancel a job before its <code>JobState</code> value changes to <code>PreparingAppliance</code>. Requesting the <code>ListJobs</code> or <code>DescribeJob</code> action returns a job's <code>JobState</code> as part of the response element data returned.
* [CreateAddress](#createaddress) - Creates an address for a Snow device to be shipped to. In most regions, addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown.
* [CreateCluster](#createcluster) - Creates an empty cluster. Each cluster supports five nodes. You use the <a>CreateJob</a> action separately to create the jobs for each of these nodes. The cluster does not ship until these five node jobs have been created.
* [CreateJob](#createjob) - <p>Creates a job to import or export data between Amazon S3 and your on-premises data center. Your Amazon Web Services account must have the right trust policies and permissions in place to create a job for a Snow device. If you're creating a job for a node in a cluster, you only need to provide the <code>clusterId</code> value; the other job attributes are inherited from the cluster. </p> <note> <p>Only the Snowball; Edge device type is supported when ordering clustered jobs.</p> <p>The device capacity is optional.</p> <p>Availability of device types differ by Amazon Web Services Region. For more information about Region availability, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/?p=ngi&amp;loc=4">Amazon Web Services Regional Services</a>.</p> </note> <p/> <p class="title"> <b>Snow Family devices and their capacities.</b> </p> <ul> <li> <p>Device type: <b>SNC1_SSD</b> </p> <ul> <li> <p>Capacity: T14</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>SNC1_HDD</b> </p> <ul> <li> <p>Capacity: T8</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_S</b> </p> <ul> <li> <p>Capacity: T98</p> </li> <li> <p>Description: Snowball Edge Storage Optimized for data transfer only </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_CG</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized with GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_C</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized without GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE</b> </p> <ul> <li> <p>Capacity: T100</p> </li> <li> <p>Description: Snowball Edge Storage Optimized with EC2 Compute</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T50</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region </p> </note> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T80</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region. </p> </note> </li> </ul> <p/> </li> <li> <p>Device type: <b>V3_5C</b> </p> <ul> <li> <p>Capacity: T32</p> </li> <li> <p>Description: Snowball Edge Compute Optimized without GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>V3_5S</b> </p> <ul> <li> <p>Capacity: T240</p> </li> <li> <p>Description: Snowball Edge Storage Optimized 210TB</p> </li> </ul> <p/> </li> </ul>
* [CreateLongTermPricing](#createlongtermpricing) - Creates a job with the long-term usage option for a device. The long-term usage is a 1-year or 3-year long-term pricing type for the device. You are billed upfront, and Amazon Web Services provides discounts for long-term pricing. 
* [CreateReturnShippingLabel](#createreturnshippinglabel) - Creates a shipping label that will be used to return the Snow device to Amazon Web Services.
* [DescribeAddress](#describeaddress) - Takes an <code>AddressId</code> and returns specific details about that address in the form of an <code>Address</code> object.
* [DescribeAddresses](#describeaddresses) - Returns a specified number of <code>ADDRESS</code> objects. Calling this API in one of the US regions will return addresses from the list of all addresses associated with this account in all US regions.
* [DescribeCluster](#describecluster) - Returns information about a specific cluster including shipping information, cluster status, and other important metadata.
* [DescribeJob](#describejob) - Returns information about a specific job including shipping information, job status, and other important metadata. 
* [DescribeReturnShippingLabel](#describereturnshippinglabel) - Information on the shipping label of a Snow device that is being returned to Amazon Web Services.
* [GetJobManifest](#getjobmanifest) - <p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the <code>GetJobManifest</code> action.</p> <p>The manifest is an encrypted file that you can download after your job enters the <code>WithCustomer</code> status. This is the only valid status for calling this API as the manifest and <code>UnlockCode</code> code value are used for securing your device and should only be used when you have the device. The manifest is decrypted by using the <code>UnlockCode</code> code value, when you pass both values to the Snow device through the Snowball client when the client is started for the first time. </p> <p>As a best practice, we recommend that you don't save a copy of an <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p> <p>The credentials of a given job, including its manifest file and unlock code, expire 360 days after the job is created.</p>
* [GetJobUnlockCode](#getjobunlockcode) - <p>Returns the <code>UnlockCode</code> code value for the specified job. A particular <code>UnlockCode</code> value can be accessed for up to 360 days after the associated job has been created.</p> <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed along with the manifest to the Snow device through the Snowball client when the client is started for the first time. The only valid status for calling this API is <code>WithCustomer</code> as the manifest and <code>Unlock</code> code values are used for securing your device and should only be used when you have the device.</p> <p>As a best practice, we recommend that you don't save a copy of the <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p>
* [GetSnowballUsage](#getsnowballusage) - <p>Returns information about the Snow Family service limit for your account, and also the number of Snow devices your account has in use.</p> <p>The default service limit for the number of Snow devices that you can have at one time is 1. If you want to increase your service limit, contact Amazon Web Services Support.</p>
* [GetSoftwareUpdates](#getsoftwareupdates) - Returns an Amazon S3 presigned URL for an update file associated with a specified <code>JobId</code>.
* [ListClusterJobs](#listclusterjobs) - Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.
* [ListClusters](#listclusters) - Returns an array of <code>ClusterListEntry</code> objects of the specified length. Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other important status information.
* [ListCompatibleImages](#listcompatibleimages) - This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs) that are owned by your Amazon Web Services accountthat would be supported for use on a Snow device. Currently, supported AMIs are based on the Amazon Linux-2, Ubuntu 20.04 LTS - Focal, or Ubuntu 22.04 LTS - Jammy images, available on the Amazon Web Services Marketplace. Ubuntu 16.04 LTS - Xenial (HVM) images are no longer supported in the Market, but still supported for use on devices through Amazon EC2 VM Import/Export and running locally in AMIs.
* [ListJobs](#listjobs) - Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. Calling this API action in one of the US regions will return jobs from the list of all jobs associated with this account in all US regions.
* [ListLongTermPricing](#listlongtermpricing) - Lists all long-term pricing types.
* [ListServiceVersions](#listserviceversions) - Lists all supported versions for Snow on-device services. Returns an array of <code>ServiceVersion</code> object containing the supported versions for a particular service.
* [UpdateCluster](#updatecluster) - While a cluster's <code>ClusterState</code> value is in the <code>AwaitingQuorum</code> state, you can update some of the information associated with a cluster. Once the cluster changes to a different job state, usually 60 minutes after the cluster being created, this action is no longer available.
* [UpdateJob](#updatejob) - While a job's <code>JobState</code> value is <code>New</code>, you can update some of the information associated with a job. Once the job changes to a different job state, usually within 60 minutes of the job being created, this action is no longer available.
* [UpdateJobShipmentState](#updatejobshipmentstate) - Updates the state when a shipment state changes to a different state.
* [UpdateLongTermPricing](#updatelongtermpricing) - Updates the long-term pricing type.

## CancelCluster

Cancels a cluster job. You can only cancel a cluster job while it's in the <code>AwaitingQuorum</code> status. You'll have at least an hour after creating a cluster job to cancel it.

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
    res, err := s.SDK.CancelCluster(ctx, operations.CancelClusterRequest{
        CancelClusterRequest: shared.CancelClusterRequest{
            ClusterID: "vel",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.CancelClusterXAmzTargetEnumAwsieSnowballJobManagementServiceCancelCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelClusterResult != nil {
        // handle response
    }
}
```

## CancelJob

Cancels the specified job. You can only cancel a job before its <code>JobState</code> value changes to <code>PreparingAppliance</code>. Requesting the <code>ListJobs</code> or <code>DescribeJob</code> action returns a job's <code>JobState</code> as part of the response element data returned.

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
    res, err := s.SDK.CancelJob(ctx, operations.CancelJobRequest{
        CancelJobRequest: shared.CancelJobRequest{
            JobID: "delectus",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.CancelJobXAmzTargetEnumAwsieSnowballJobManagementServiceCancelJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelJobResult != nil {
        // handle response
    }
}
```

## CreateAddress

Creates an address for a Snow device to be shipped to. In most regions, addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown.

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
    res, err := s.SDK.CreateAddress(ctx, operations.CreateAddressRequest{
        CreateAddressRequest: shared.CreateAddressRequest{
            Address: shared.Address{
                AddressID: sdk.String("excepturi"),
                City: sdk.String("Fort Rocky"),
                Company: sdk.String("Hauck Inc"),
                Country: sdk.String("Nigeria"),
                IsRestricted: sdk.Bool(false),
                Landmark: sdk.String("perferendis"),
                Name: sdk.String("Estelle Will"),
                PhoneNumber: sdk.String("at"),
                PostalCode: sdk.String("94784-5761"),
                PrefectureOrDistrict: sdk.String("nam"),
                StateOrProvince: sdk.String("officia"),
                Street1: sdk.String("occaecati"),
                Street2: sdk.String("fugit"),
                Street3: sdk.String("deleniti"),
            },
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.CreateAddressXAmzTargetEnumAwsieSnowballJobManagementServiceCreateAddress,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAddressResult != nil {
        // handle response
    }
}
```

## CreateCluster

Creates an empty cluster. Each cluster supports five nodes. You use the <a>CreateJob</a> action separately to create the jobs for each of these nodes. The cluster does not ship until these five node jobs have been created.

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
    res, err := s.SDK.CreateCluster(ctx, operations.CreateClusterRequest{
        CreateClusterRequest: shared.CreateClusterRequest{
            AddressID: "qui",
            Description: sdk.String("impedit"),
            ForceCreateJobs: sdk.Bool(false),
            ForwardingAddressID: sdk.String("cum"),
            InitialClusterSize: sdk.Int64(456150),
            JobType: shared.JobTypeEnumImport,
            KmsKeyARN: sdk.String("excepturi"),
            LongTermPricingIds: []string{
                "perferendis",
            },
            Notification: &shared.Notification{
                JobStatesToNotify: []shared.JobStateEnum{
                    shared.JobStateEnumInProgress,
                    shared.JobStateEnumPreparingAppliance,
                },
                NotifyAll: sdk.Bool(false),
                SnsTopicARN: sdk.String("iste"),
            },
            OnDeviceServiceConfiguration: &shared.OnDeviceServiceConfiguration{
                EKSOnDeviceService: &shared.EKSOnDeviceServiceConfiguration{
                    EKSAnywhereVersion: sdk.String("dolor"),
                    KubernetesVersion: sdk.String("natus"),
                },
                NFSOnDeviceService: &shared.NFSOnDeviceServiceConfiguration{
                    StorageLimit: sdk.Int64(386489),
                    StorageUnit: shared.StorageUnitEnumTb.ToPointer(),
                },
                S3OnDeviceService: &shared.S3OnDeviceServiceConfiguration{
                    FaultTolerance: sdk.Int64(943749),
                    ServiceSize: sdk.Int64(902599),
                    StorageLimit: sdk.Float64(6818.2),
                    StorageUnit: shared.StorageUnitEnumTb.ToPointer(),
                },
                TGWOnDeviceService: &shared.TGWOnDeviceServiceConfiguration{
                    StorageLimit: sdk.Int64(449950),
                    StorageUnit: shared.StorageUnitEnumTb.ToPointer(),
                },
            },
            RemoteManagement: shared.RemoteManagementEnumInstalledOnly.ToPointer(),
            Resources: &shared.JobResource{
                Ec2AmiResources: []shared.Ec2AmiResource{
                    shared.Ec2AmiResource{
                        AmiID: "iure",
                        SnowballAmiID: sdk.String("saepe"),
                    },
                    shared.Ec2AmiResource{
                        AmiID: "quidem",
                        SnowballAmiID: sdk.String("architecto"),
                    },
                    shared.Ec2AmiResource{
                        AmiID: "ipsa",
                        SnowballAmiID: sdk.String("reiciendis"),
                    },
                },
                LambdaResources: []shared.LambdaResource{
                    shared.LambdaResource{
                        EventTriggers: []shared.EventTriggerDefinition{
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("laborum"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("dolores"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("dolorem"),
                            },
                        },
                        LambdaArn: sdk.String("corporis"),
                    },
                    shared.LambdaResource{
                        EventTriggers: []shared.EventTriggerDefinition{
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("nobis"),
                            },
                        },
                        LambdaArn: sdk.String("enim"),
                    },
                    shared.LambdaResource{
                        EventTriggers: []shared.EventTriggerDefinition{
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("nemo"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("minima"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("excepturi"),
                            },
                        },
                        LambdaArn: sdk.String("accusantium"),
                    },
                },
                S3Resources: []shared.S3Resource{
                    shared.S3Resource{
                        BucketArn: sdk.String("culpa"),
                        KeyRange: &shared.KeyRange{
                            BeginMarker: sdk.String("doloribus"),
                            EndMarker: sdk.String("sapiente"),
                        },
                        TargetOnDeviceServices: []shared.TargetOnDeviceService{
                            shared.TargetOnDeviceService{
                                ServiceName: shared.DeviceServiceNameEnumS3OnDeviceService.ToPointer(),
                                TransferOption: shared.TransferOptionEnumImport.ToPointer(),
                            },
                        },
                    },
                    shared.S3Resource{
                        BucketArn: sdk.String("culpa"),
                        KeyRange: &shared.KeyRange{
                            BeginMarker: sdk.String("consequuntur"),
                            EndMarker: sdk.String("repellat"),
                        },
                        TargetOnDeviceServices: []shared.TargetOnDeviceService{
                            shared.TargetOnDeviceService{
                                ServiceName: shared.DeviceServiceNameEnumS3OnDeviceService.ToPointer(),
                                TransferOption: shared.TransferOptionEnumImport.ToPointer(),
                            },
                            shared.TargetOnDeviceService{
                                ServiceName: shared.DeviceServiceNameEnumNfsOnDeviceService.ToPointer(),
                                TransferOption: shared.TransferOptionEnumExport.ToPointer(),
                            },
                            shared.TargetOnDeviceService{
                                ServiceName: shared.DeviceServiceNameEnumNfsOnDeviceService.ToPointer(),
                                TransferOption: shared.TransferOptionEnumImport.ToPointer(),
                            },
                        },
                    },
                },
            },
            RoleARN: sdk.String("error"),
            ShippingOption: shared.ShippingOptionEnumSecondDay,
            SnowballCapacityPreference: shared.SnowballCapacityEnumT42.ToPointer(),
            SnowballType: shared.SnowballTypeEnumStandard,
            TaxDocuments: &shared.TaxDocuments{
                Ind: &shared.INDTaxDocuments{
                    Gstin: sdk.String("laborum"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.CreateClusterXAmzTargetEnumAwsieSnowballJobManagementServiceCreateCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterResult != nil {
        // handle response
    }
}
```

## CreateJob

<p>Creates a job to import or export data between Amazon S3 and your on-premises data center. Your Amazon Web Services account must have the right trust policies and permissions in place to create a job for a Snow device. If you're creating a job for a node in a cluster, you only need to provide the <code>clusterId</code> value; the other job attributes are inherited from the cluster. </p> <note> <p>Only the Snowball; Edge device type is supported when ordering clustered jobs.</p> <p>The device capacity is optional.</p> <p>Availability of device types differ by Amazon Web Services Region. For more information about Region availability, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/?p=ngi&amp;loc=4">Amazon Web Services Regional Services</a>.</p> </note> <p/> <p class="title"> <b>Snow Family devices and their capacities.</b> </p> <ul> <li> <p>Device type: <b>SNC1_SSD</b> </p> <ul> <li> <p>Capacity: T14</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>SNC1_HDD</b> </p> <ul> <li> <p>Capacity: T8</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_S</b> </p> <ul> <li> <p>Capacity: T98</p> </li> <li> <p>Description: Snowball Edge Storage Optimized for data transfer only </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_CG</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized with GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_C</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized without GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE</b> </p> <ul> <li> <p>Capacity: T100</p> </li> <li> <p>Description: Snowball Edge Storage Optimized with EC2 Compute</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T50</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region </p> </note> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T80</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region. </p> </note> </li> </ul> <p/> </li> <li> <p>Device type: <b>V3_5C</b> </p> <ul> <li> <p>Capacity: T32</p> </li> <li> <p>Description: Snowball Edge Compute Optimized without GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>V3_5S</b> </p> <ul> <li> <p>Capacity: T240</p> </li> <li> <p>Description: Snowball Edge Storage Optimized 210TB</p> </li> </ul> <p/> </li> </ul>

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
    res, err := s.SDK.CreateJob(ctx, operations.CreateJobRequest{
        CreateJobRequest: shared.CreateJobRequest{
            AddressID: sdk.String("id"),
            ClusterID: sdk.String("possimus"),
            Description: sdk.String("aut"),
            DeviceConfiguration: &shared.DeviceConfiguration{
                SnowconeDeviceConfiguration: &shared.SnowconeDeviceConfiguration{
                    WirelessConnection: &shared.WirelessConnection{
                        IsWifiEnabled: sdk.Bool(false),
                    },
                },
            },
            ForwardingAddressID: sdk.String("quasi"),
            JobType: shared.JobTypeEnumExport.ToPointer(),
            KmsKeyARN: sdk.String("temporibus"),
            LongTermPricingID: sdk.String("laborum"),
            Notification: &shared.Notification{
                JobStatesToNotify: []shared.JobStateEnum{
                    shared.JobStateEnumPending,
                },
                NotifyAll: sdk.Bool(false),
                SnsTopicARN: sdk.String("voluptatibus"),
            },
            OnDeviceServiceConfiguration: &shared.OnDeviceServiceConfiguration{
                EKSOnDeviceService: &shared.EKSOnDeviceServiceConfiguration{
                    EKSAnywhereVersion: sdk.String("vero"),
                    KubernetesVersion: sdk.String("nihil"),
                },
                NFSOnDeviceService: &shared.NFSOnDeviceServiceConfiguration{
                    StorageLimit: sdk.Int64(509624),
                    StorageUnit: shared.StorageUnitEnumTb.ToPointer(),
                },
                S3OnDeviceService: &shared.S3OnDeviceServiceConfiguration{
                    FaultTolerance: sdk.Int64(976762),
                    ServiceSize: sdk.Int64(55714),
                    StorageLimit: sdk.Float64(6048.46),
                    StorageUnit: shared.StorageUnitEnumTb.ToPointer(),
                },
                TGWOnDeviceService: &shared.TGWOnDeviceServiceConfiguration{
                    StorageLimit: sdk.Int64(451159),
                    StorageUnit: shared.StorageUnitEnumTb.ToPointer(),
                },
            },
            RemoteManagement: shared.RemoteManagementEnumInstalledAutostart.ToPointer(),
            Resources: &shared.JobResource{
                Ec2AmiResources: []shared.Ec2AmiResource{
                    shared.Ec2AmiResource{
                        AmiID: "doloremque",
                        SnowballAmiID: sdk.String("reprehenderit"),
                    },
                },
                LambdaResources: []shared.LambdaResource{
                    shared.LambdaResource{
                        EventTriggers: []shared.EventTriggerDefinition{
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("dicta"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("corporis"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("dolore"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("iusto"),
                            },
                        },
                        LambdaArn: sdk.String("dicta"),
                    },
                    shared.LambdaResource{
                        EventTriggers: []shared.EventTriggerDefinition{
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("enim"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("accusamus"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("commodi"),
                            },
                        },
                        LambdaArn: sdk.String("repudiandae"),
                    },
                },
                S3Resources: []shared.S3Resource{
                    shared.S3Resource{
                        BucketArn: sdk.String("ipsum"),
                        KeyRange: &shared.KeyRange{
                            BeginMarker: sdk.String("quidem"),
                            EndMarker: sdk.String("molestias"),
                        },
                        TargetOnDeviceServices: []shared.TargetOnDeviceService{
                            shared.TargetOnDeviceService{
                                ServiceName: shared.DeviceServiceNameEnumS3OnDeviceService.ToPointer(),
                                TransferOption: shared.TransferOptionEnumImport.ToPointer(),
                            },
                            shared.TargetOnDeviceService{
                                ServiceName: shared.DeviceServiceNameEnumS3OnDeviceService.ToPointer(),
                                TransferOption: shared.TransferOptionEnumExport.ToPointer(),
                            },
                            shared.TargetOnDeviceService{
                                ServiceName: shared.DeviceServiceNameEnumS3OnDeviceService.ToPointer(),
                                TransferOption: shared.TransferOptionEnumImport.ToPointer(),
                            },
                        },
                    },
                },
            },
            RoleARN: sdk.String("repudiandae"),
            ShippingOption: shared.ShippingOptionEnumExpress.ToPointer(),
            SnowballCapacityPreference: shared.SnowballCapacityEnumT50.ToPointer(),
            SnowballType: shared.SnowballTypeEnumV35S.ToPointer(),
            TaxDocuments: &shared.TaxDocuments{
                Ind: &shared.INDTaxDocuments{
                    Gstin: sdk.String("incidunt"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.CreateJobXAmzTargetEnumAwsieSnowballJobManagementServiceCreateJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateJobResult != nil {
        // handle response
    }
}
```

## CreateLongTermPricing

Creates a job with the long-term usage option for a device. The long-term usage is a 1-year or 3-year long-term pricing type for the device. You are billed upfront, and Amazon Web Services provides discounts for long-term pricing. 

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
    res, err := s.SDK.CreateLongTermPricing(ctx, operations.CreateLongTermPricingRequest{
        CreateLongTermPricingRequest: shared.CreateLongTermPricingRequest{
            IsLongTermPricingAutoRenew: sdk.Bool(false),
            LongTermPricingType: shared.LongTermPricingTypeEnumOneMonth,
            SnowballType: shared.SnowballTypeEnumEdgeC.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("magni"),
        XAmzTarget: operations.CreateLongTermPricingXAmzTargetEnumAwsieSnowballJobManagementServiceCreateLongTermPricing,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLongTermPricingResult != nil {
        // handle response
    }
}
```

## CreateReturnShippingLabel

Creates a shipping label that will be used to return the Snow device to Amazon Web Services.

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
    res, err := s.SDK.CreateReturnShippingLabel(ctx, operations.CreateReturnShippingLabelRequest{
        CreateReturnShippingLabelRequest: shared.CreateReturnShippingLabelRequest{
            JobID: "assumenda",
            ShippingOption: shared.ShippingOptionEnumNextDay.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("tempore"),
        XAmzTarget: operations.CreateReturnShippingLabelXAmzTargetEnumAwsieSnowballJobManagementServiceCreateReturnShippingLabel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateReturnShippingLabelResult != nil {
        // handle response
    }
}
```

## DescribeAddress

Takes an <code>AddressId</code> and returns specific details about that address in the form of an <code>Address</code> object.

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
    res, err := s.SDK.DescribeAddress(ctx, operations.DescribeAddressRequest{
        DescribeAddressRequest: shared.DescribeAddressRequest{
            AddressID: "labore",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.DescribeAddressXAmzTargetEnumAwsieSnowballJobManagementServiceDescribeAddress,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAddressResult != nil {
        // handle response
    }
}
```

## DescribeAddresses

Returns a specified number of <code>ADDRESS</code> objects. Calling this API in one of the US regions will return addresses from the list of all addresses associated with this account in all US regions.

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
    res, err := s.SDK.DescribeAddresses(ctx, operations.DescribeAddressesRequest{
        DescribeAddressesRequest: shared.DescribeAddressesRequest{
            MaxResults: sdk.Int64(896039),
            NextToken: sdk.String("sint"),
        },
        MaxResults: sdk.String("officia"),
        NextToken: sdk.String("dolor"),
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DescribeAddressesXAmzTargetEnumAwsieSnowballJobManagementServiceDescribeAddresses,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAddressesResult != nil {
        // handle response
    }
}
```

## DescribeCluster

Returns information about a specific cluster including shipping information, cluster status, and other important metadata.

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
    res, err := s.SDK.DescribeCluster(ctx, operations.DescribeClusterRequest{
        DescribeClusterRequest: shared.DescribeClusterRequest{
            ClusterID: "rerum",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.DescribeClusterXAmzTargetEnumAwsieSnowballJobManagementServiceDescribeCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeClusterResult != nil {
        // handle response
    }
}
```

## DescribeJob

Returns information about a specific job including shipping information, job status, and other important metadata. 

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
    res, err := s.SDK.DescribeJob(ctx, operations.DescribeJobRequest{
        DescribeJobRequest: shared.DescribeJobRequest{
            JobID: "accusamus",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.DescribeJobXAmzTargetEnumAwsieSnowballJobManagementServiceDescribeJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeJobResult != nil {
        // handle response
    }
}
```

## DescribeReturnShippingLabel

Information on the shipping label of a Snow device that is being returned to Amazon Web Services.

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
    res, err := s.SDK.DescribeReturnShippingLabel(ctx, operations.DescribeReturnShippingLabelRequest{
        DescribeReturnShippingLabelRequest: shared.DescribeReturnShippingLabelRequest{
            JobID: "nam",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.DescribeReturnShippingLabelXAmzTargetEnumAwsieSnowballJobManagementServiceDescribeReturnShippingLabel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReturnShippingLabelResult != nil {
        // handle response
    }
}
```

## GetJobManifest

<p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the <code>GetJobManifest</code> action.</p> <p>The manifest is an encrypted file that you can download after your job enters the <code>WithCustomer</code> status. This is the only valid status for calling this API as the manifest and <code>UnlockCode</code> code value are used for securing your device and should only be used when you have the device. The manifest is decrypted by using the <code>UnlockCode</code> code value, when you pass both values to the Snow device through the Snowball client when the client is started for the first time. </p> <p>As a best practice, we recommend that you don't save a copy of an <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p> <p>The credentials of a given job, including its manifest file and unlock code, expire 360 days after the job is created.</p>

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
    res, err := s.SDK.GetJobManifest(ctx, operations.GetJobManifestRequest{
        GetJobManifestRequest: shared.GetJobManifestRequest{
            JobID: "vel",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.GetJobManifestXAmzTargetEnumAwsieSnowballJobManagementServiceGetJobManifest,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetJobManifestResult != nil {
        // handle response
    }
}
```

## GetJobUnlockCode

<p>Returns the <code>UnlockCode</code> code value for the specified job. A particular <code>UnlockCode</code> value can be accessed for up to 360 days after the associated job has been created.</p> <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed along with the manifest to the Snow device through the Snowball client when the client is started for the first time. The only valid status for calling this API is <code>WithCustomer</code> as the manifest and <code>Unlock</code> code values are used for securing your device and should only be used when you have the device.</p> <p>As a best practice, we recommend that you don't save a copy of the <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p>

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
    res, err := s.SDK.GetJobUnlockCode(ctx, operations.GetJobUnlockCodeRequest{
        GetJobUnlockCodeRequest: shared.GetJobUnlockCodeRequest{
            JobID: "id",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.GetJobUnlockCodeXAmzTargetEnumAwsieSnowballJobManagementServiceGetJobUnlockCode,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetJobUnlockCodeResult != nil {
        // handle response
    }
}
```

## GetSnowballUsage

<p>Returns information about the Snow Family service limit for your account, and also the number of Snow devices your account has in use.</p> <p>The default service limit for the number of Snow devices that you can have at one time is 1. If you want to increase your service limit, contact Amazon Web Services Support.</p>

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
    res, err := s.SDK.GetSnowballUsage(ctx, operations.GetSnowballUsageRequest{
        RequestBody: map[string]interface{}{
            "architecto": "magnam",
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.GetSnowballUsageXAmzTargetEnumAwsieSnowballJobManagementServiceGetSnowballUsage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSnowballUsageResult != nil {
        // handle response
    }
}
```

## GetSoftwareUpdates

Returns an Amazon S3 presigned URL for an update file associated with a specified <code>JobId</code>.

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
    res, err := s.SDK.GetSoftwareUpdates(ctx, operations.GetSoftwareUpdatesRequest{
        GetSoftwareUpdatesRequest: shared.GetSoftwareUpdatesRequest{
            JobID: "mollitia",
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.GetSoftwareUpdatesXAmzTargetEnumAwsieSnowballJobManagementServiceGetSoftwareUpdates,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSoftwareUpdatesResult != nil {
        // handle response
    }
}
```

## ListClusterJobs

Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.

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
    res, err := s.SDK.ListClusterJobs(ctx, operations.ListClusterJobsRequest{
        ListClusterJobsRequest: shared.ListClusterJobsRequest{
            ClusterID: "nemo",
            MaxResults: sdk.Int64(97260),
            NextToken: sdk.String("iure"),
        },
        MaxResults: sdk.String("doloribus"),
        NextToken: sdk.String("debitis"),
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.ListClusterJobsXAmzTargetEnumAwsieSnowballJobManagementServiceListClusterJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClusterJobsResult != nil {
        // handle response
    }
}
```

## ListClusters

Returns an array of <code>ClusterListEntry</code> objects of the specified length. Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other important status information.

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
    res, err := s.SDK.ListClusters(ctx, operations.ListClustersRequest{
        ListClustersRequest: shared.ListClustersRequest{
            MaxResults: sdk.Int64(919483),
            NextToken: sdk.String("ullam"),
        },
        MaxResults: sdk.String("expedita"),
        NextToken: sdk.String("nihil"),
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.ListClustersXAmzTargetEnumAwsieSnowballJobManagementServiceListClusters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClustersResult != nil {
        // handle response
    }
}
```

## ListCompatibleImages

This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs) that are owned by your Amazon Web Services accountthat would be supported for use on a Snow device. Currently, supported AMIs are based on the Amazon Linux-2, Ubuntu 20.04 LTS - Focal, or Ubuntu 22.04 LTS - Jammy images, available on the Amazon Web Services Marketplace. Ubuntu 16.04 LTS - Xenial (HVM) images are no longer supported in the Market, but still supported for use on devices through Amazon EC2 VM Import/Export and running locally in AMIs.

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
    res, err := s.SDK.ListCompatibleImages(ctx, operations.ListCompatibleImagesRequest{
        ListCompatibleImagesRequest: shared.ListCompatibleImagesRequest{
            MaxResults: sdk.Int64(508315),
            NextToken: sdk.String("natus"),
        },
        MaxResults: sdk.String("magni"),
        NextToken: sdk.String("sunt"),
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.ListCompatibleImagesXAmzTargetEnumAwsieSnowballJobManagementServiceListCompatibleImages,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCompatibleImagesResult != nil {
        // handle response
    }
}
```

## ListJobs

Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. Calling this API action in one of the US regions will return jobs from the list of all jobs associated with this account in all US regions.

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
            MaxResults: sdk.Int64(407183),
            NextToken: sdk.String("accusantium"),
        },
        MaxResults: sdk.String("ab"),
        NextToken: sdk.String("maiores"),
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.ListJobsXAmzTargetEnumAwsieSnowballJobManagementServiceListJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsResult != nil {
        // handle response
    }
}
```

## ListLongTermPricing

Lists all long-term pricing types.

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
    res, err := s.SDK.ListLongTermPricing(ctx, operations.ListLongTermPricingRequest{
        ListLongTermPricingRequest: shared.ListLongTermPricingRequest{
            MaxResults: sdk.Int64(365496),
            NextToken: sdk.String("voluptatibus"),
        },
        MaxResults: sdk.String("perferendis"),
        NextToken: sdk.String("fugiat"),
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.ListLongTermPricingXAmzTargetEnumAwsieSnowballJobManagementServiceListLongTermPricing,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLongTermPricingResult != nil {
        // handle response
    }
}
```

## ListServiceVersions

Lists all supported versions for Snow on-device services. Returns an array of <code>ServiceVersion</code> object containing the supported versions for a particular service.

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
    res, err := s.SDK.ListServiceVersions(ctx, operations.ListServiceVersionsRequest{
        ListServiceVersionsRequest: shared.ListServiceVersionsRequest{
            DependentServices: []shared.DependentService{
                shared.DependentService{
                    ServiceName: shared.ServiceNameEnumKubernetes.ToPointer(),
                    ServiceVersion: &shared.ServiceVersion{
                        Version: sdk.String("totam"),
                    },
                },
            },
            MaxResults: sdk.Int64(489549),
            NextToken: sdk.String("eaque"),
            ServiceName: shared.ServiceNameEnumKubernetes,
        },
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.ListServiceVersionsXAmzTargetEnumAwsieSnowballJobManagementServiceListServiceVersions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceVersionsResult != nil {
        // handle response
    }
}
```

## UpdateCluster

While a cluster's <code>ClusterState</code> value is in the <code>AwaitingQuorum</code> state, you can update some of the information associated with a cluster. Once the cluster changes to a different job state, usually 60 minutes after the cluster being created, this action is no longer available.

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
    res, err := s.SDK.UpdateCluster(ctx, operations.UpdateClusterRequest{
        UpdateClusterRequest: shared.UpdateClusterRequest{
            AddressID: sdk.String("vero"),
            ClusterID: "nostrum",
            Description: sdk.String("hic"),
            ForwardingAddressID: sdk.String("recusandae"),
            Notification: &shared.Notification{
                JobStatesToNotify: []shared.JobStateEnum{
                    shared.JobStateEnumComplete,
                    shared.JobStateEnumWithAws,
                    shared.JobStateEnumNew,
                },
                NotifyAll: sdk.Bool(false),
                SnsTopicARN: sdk.String("porro"),
            },
            OnDeviceServiceConfiguration: &shared.OnDeviceServiceConfiguration{
                EKSOnDeviceService: &shared.EKSOnDeviceServiceConfiguration{
                    EKSAnywhereVersion: sdk.String("consequuntur"),
                    KubernetesVersion: sdk.String("blanditiis"),
                },
                NFSOnDeviceService: &shared.NFSOnDeviceServiceConfiguration{
                    StorageLimit: sdk.Int64(621479),
                    StorageUnit: shared.StorageUnitEnumTb.ToPointer(),
                },
                S3OnDeviceService: &shared.S3OnDeviceServiceConfiguration{
                    FaultTolerance: sdk.Int64(50370),
                    ServiceSize: sdk.Int64(577229),
                    StorageLimit: sdk.Float64(6990.98),
                    StorageUnit: shared.StorageUnitEnumTb.ToPointer(),
                },
                TGWOnDeviceService: &shared.TGWOnDeviceServiceConfiguration{
                    StorageLimit: sdk.Int64(237893),
                    StorageUnit: shared.StorageUnitEnumTb.ToPointer(),
                },
            },
            Resources: &shared.JobResource{
                Ec2AmiResources: []shared.Ec2AmiResource{
                    shared.Ec2AmiResource{
                        AmiID: "earum",
                        SnowballAmiID: sdk.String("modi"),
                    },
                    shared.Ec2AmiResource{
                        AmiID: "iste",
                        SnowballAmiID: sdk.String("dolorum"),
                    },
                    shared.Ec2AmiResource{
                        AmiID: "deleniti",
                        SnowballAmiID: sdk.String("pariatur"),
                    },
                    shared.Ec2AmiResource{
                        AmiID: "provident",
                        SnowballAmiID: sdk.String("nobis"),
                    },
                },
                LambdaResources: []shared.LambdaResource{
                    shared.LambdaResource{
                        EventTriggers: []shared.EventTriggerDefinition{
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("quaerat"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("quos"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("aliquid"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("dolorem"),
                            },
                        },
                        LambdaArn: sdk.String("dolorem"),
                    },
                    shared.LambdaResource{
                        EventTriggers: []shared.EventTriggerDefinition{
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("qui"),
                            },
                        },
                        LambdaArn: sdk.String("ipsum"),
                    },
                    shared.LambdaResource{
                        EventTriggers: []shared.EventTriggerDefinition{
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("excepturi"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("cum"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("voluptate"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("dignissimos"),
                            },
                        },
                        LambdaArn: sdk.String("reiciendis"),
                    },
                },
                S3Resources: []shared.S3Resource{
                    shared.S3Resource{
                        BucketArn: sdk.String("dolorum"),
                        KeyRange: &shared.KeyRange{
                            BeginMarker: sdk.String("numquam"),
                            EndMarker: sdk.String("veritatis"),
                        },
                        TargetOnDeviceServices: []shared.TargetOnDeviceService{
                            shared.TargetOnDeviceService{
                                ServiceName: shared.DeviceServiceNameEnumNfsOnDeviceService.ToPointer(),
                                TransferOption: shared.TransferOptionEnumExport.ToPointer(),
                            },
                        },
                    },
                },
            },
            RoleARN: sdk.String("odio"),
            ShippingOption: shared.ShippingOptionEnumNextDay.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.UpdateClusterXAmzTargetEnumAwsieSnowballJobManagementServiceUpdateCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateClusterResult != nil {
        // handle response
    }
}
```

## UpdateJob

While a job's <code>JobState</code> value is <code>New</code>, you can update some of the information associated with a job. Once the job changes to a different job state, usually within 60 minutes of the job being created, this action is no longer available.

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
    res, err := s.SDK.UpdateJob(ctx, operations.UpdateJobRequest{
        UpdateJobRequest: shared.UpdateJobRequest{
            AddressID: sdk.String("sit"),
            Description: sdk.String("fugiat"),
            ForwardingAddressID: sdk.String("ab"),
            JobID: "soluta",
            Notification: &shared.Notification{
                JobStatesToNotify: []shared.JobStateEnum{
                    shared.JobStateEnumWithAwsSortingFacility,
                    shared.JobStateEnumInTransitToAws,
                    shared.JobStateEnumInProgress,
                },
                NotifyAll: sdk.Bool(false),
                SnsTopicARN: sdk.String("deleniti"),
            },
            OnDeviceServiceConfiguration: &shared.OnDeviceServiceConfiguration{
                EKSOnDeviceService: &shared.EKSOnDeviceServiceConfiguration{
                    EKSAnywhereVersion: sdk.String("omnis"),
                    KubernetesVersion: sdk.String("necessitatibus"),
                },
                NFSOnDeviceService: &shared.NFSOnDeviceServiceConfiguration{
                    StorageLimit: sdk.Int64(714697),
                    StorageUnit: shared.StorageUnitEnumTb.ToPointer(),
                },
                S3OnDeviceService: &shared.S3OnDeviceServiceConfiguration{
                    FaultTolerance: sdk.Int64(990339),
                    ServiceSize: sdk.Int64(469497),
                    StorageLimit: sdk.Float64(2168.97),
                    StorageUnit: shared.StorageUnitEnumTb.ToPointer(),
                },
                TGWOnDeviceService: &shared.TGWOnDeviceServiceConfiguration{
                    StorageLimit: sdk.Int64(456015),
                    StorageUnit: shared.StorageUnitEnumTb.ToPointer(),
                },
            },
            Resources: &shared.JobResource{
                Ec2AmiResources: []shared.Ec2AmiResource{
                    shared.Ec2AmiResource{
                        AmiID: "saepe",
                        SnowballAmiID: sdk.String("eius"),
                    },
                    shared.Ec2AmiResource{
                        AmiID: "aspernatur",
                        SnowballAmiID: sdk.String("perferendis"),
                    },
                    shared.Ec2AmiResource{
                        AmiID: "amet",
                        SnowballAmiID: sdk.String("optio"),
                    },
                },
                LambdaResources: []shared.LambdaResource{
                    shared.LambdaResource{
                        EventTriggers: []shared.EventTriggerDefinition{
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("saepe"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("suscipit"),
                            },
                        },
                        LambdaArn: sdk.String("deserunt"),
                    },
                    shared.LambdaResource{
                        EventTriggers: []shared.EventTriggerDefinition{
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("minima"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("repellendus"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("totam"),
                            },
                        },
                        LambdaArn: sdk.String("similique"),
                    },
                    shared.LambdaResource{
                        EventTriggers: []shared.EventTriggerDefinition{
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("at"),
                            },
                        },
                        LambdaArn: sdk.String("quaerat"),
                    },
                    shared.LambdaResource{
                        EventTriggers: []shared.EventTriggerDefinition{
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("vel"),
                            },
                            shared.EventTriggerDefinition{
                                EventResourceARN: sdk.String("quod"),
                            },
                        },
                        LambdaArn: sdk.String("officiis"),
                    },
                },
                S3Resources: []shared.S3Resource{
                    shared.S3Resource{
                        BucketArn: sdk.String("dolorum"),
                        KeyRange: &shared.KeyRange{
                            BeginMarker: sdk.String("a"),
                            EndMarker: sdk.String("esse"),
                        },
                        TargetOnDeviceServices: []shared.TargetOnDeviceService{
                            shared.TargetOnDeviceService{
                                ServiceName: shared.DeviceServiceNameEnumNfsOnDeviceService.ToPointer(),
                                TransferOption: shared.TransferOptionEnumImport.ToPointer(),
                            },
                            shared.TargetOnDeviceService{
                                ServiceName: shared.DeviceServiceNameEnumS3OnDeviceService.ToPointer(),
                                TransferOption: shared.TransferOptionEnumLocalUse.ToPointer(),
                            },
                            shared.TargetOnDeviceService{
                                ServiceName: shared.DeviceServiceNameEnumNfsOnDeviceService.ToPointer(),
                                TransferOption: shared.TransferOptionEnumLocalUse.ToPointer(),
                            },
                        },
                    },
                },
            },
            RoleARN: sdk.String("accusamus"),
            ShippingOption: shared.ShippingOptionEnumNextDay.ToPointer(),
            SnowballCapacityPreference: shared.SnowballCapacityEnumT42.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.UpdateJobXAmzTargetEnumAwsieSnowballJobManagementServiceUpdateJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateJobResult != nil {
        // handle response
    }
}
```

## UpdateJobShipmentState

Updates the state when a shipment state changes to a different state.

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
    res, err := s.SDK.UpdateJobShipmentState(ctx, operations.UpdateJobShipmentStateRequest{
        UpdateJobShipmentStateRequest: shared.UpdateJobShipmentStateRequest{
            JobID: "sed",
            ShipmentState: shared.ShipmentStateEnumReceived,
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.UpdateJobShipmentStateXAmzTargetEnumAwsieSnowballJobManagementServiceUpdateJobShipmentState,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateJobShipmentStateResult != nil {
        // handle response
    }
}
```

## UpdateLongTermPricing

Updates the long-term pricing type.

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
    res, err := s.SDK.UpdateLongTermPricing(ctx, operations.UpdateLongTermPricingRequest{
        UpdateLongTermPricingRequest: shared.UpdateLongTermPricingRequest{
            IsLongTermPricingAutoRenew: sdk.Bool(false),
            LongTermPricingID: "cupiditate",
            ReplacementJob: sdk.String("maxime"),
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.UpdateLongTermPricingXAmzTargetEnumAwsieSnowballJobManagementServiceUpdateLongTermPricing,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLongTermPricingResult != nil {
        // handle response
    }
}
```
