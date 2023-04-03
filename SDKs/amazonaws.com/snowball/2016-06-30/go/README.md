# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/snowball/2016-06-30/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CancelClusterRequest{
        CancelClusterRequest: shared.CancelClusterRequest{
            ClusterID: "corrupti",
        },
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
        XAmzTarget: "AWSIESnowballJobManagementService.CancelCluster",
    }

    ctx := context.Background()
    res, err := s.CancelCluster(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelClusterResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CancelCluster` - Cancels a cluster job. You can only cancel a cluster job while it's in the <code>AwaitingQuorum</code> status. You'll have at least an hour after creating a cluster job to cancel it.
* `CancelJob` - Cancels the specified job. You can only cancel a job before its <code>JobState</code> value changes to <code>PreparingAppliance</code>. Requesting the <code>ListJobs</code> or <code>DescribeJob</code> action returns a job's <code>JobState</code> as part of the response element data returned.
* `CreateAddress` - Creates an address for a Snow device to be shipped to. In most regions, addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown.
* `CreateCluster` - Creates an empty cluster. Each cluster supports five nodes. You use the <a>CreateJob</a> action separately to create the jobs for each of these nodes. The cluster does not ship until these five node jobs have been created.
* `CreateJob` - <p>Creates a job to import or export data between Amazon S3 and your on-premises data center. Your Amazon Web Services account must have the right trust policies and permissions in place to create a job for a Snow device. If you're creating a job for a node in a cluster, you only need to provide the <code>clusterId</code> value; the other job attributes are inherited from the cluster. </p> <note> <p>Only the Snowball; Edge device type is supported when ordering clustered jobs.</p> <p>The device capacity is optional.</p> <p>Availability of device types differ by Amazon Web Services Region. For more information about Region availability, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/?p=ngi&amp;loc=4">Amazon Web Services Regional Services</a>.</p> </note> <p/> <p class="title"> <b>Snow Family devices and their capacities.</b> </p> <ul> <li> <p>Snow Family device type: <b>SNC1_SSD</b> </p> <ul> <li> <p>Capacity: T14</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Snow Family device type: <b>SNC1_HDD</b> </p> <ul> <li> <p>Capacity: T8</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_S</b> </p> <ul> <li> <p>Capacity: T98</p> </li> <li> <p>Description: Snowball Edge Storage Optimized for data transfer only </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_CG</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized with GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_C</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized without GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE</b> </p> <ul> <li> <p>Capacity: T100</p> </li> <li> <p>Description: Snowball Edge Storage Optimized with EC2 Compute</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T50</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region </p> </note> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T80</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region. </p> </note> </li> </ul> <p/> </li> </ul>
* `CreateLongTermPricing` - Creates a job with the long-term usage option for a device. The long-term usage is a 1-year or 3-year long-term pricing type for the device. You are billed upfront, and Amazon Web Services provides discounts for long-term pricing. 
* `CreateReturnShippingLabel` - Creates a shipping label that will be used to return the Snow device to Amazon Web Services.
* `DescribeAddress` - Takes an <code>AddressId</code> and returns specific details about that address in the form of an <code>Address</code> object.
* `DescribeAddresses` - Returns a specified number of <code>ADDRESS</code> objects. Calling this API in one of the US regions will return addresses from the list of all addresses associated with this account in all US regions.
* `DescribeCluster` - Returns information about a specific cluster including shipping information, cluster status, and other important metadata.
* `DescribeJob` - Returns information about a specific job including shipping information, job status, and other important metadata. 
* `DescribeReturnShippingLabel` - Information on the shipping label of a Snow device that is being returned to Amazon Web Services.
* `GetJobManifest` - <p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the <code>GetJobManifest</code> action.</p> <p>The manifest is an encrypted file that you can download after your job enters the <code>WithCustomer</code> status. This is the only valid status for calling this API as the manifest and <code>UnlockCode</code> code value are used for securing your device and should only be used when you have the device. The manifest is decrypted by using the <code>UnlockCode</code> code value, when you pass both values to the Snow device through the Snowball client when the client is started for the first time. </p> <p>As a best practice, we recommend that you don't save a copy of an <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p> <p>The credentials of a given job, including its manifest file and unlock code, expire 360 days after the job is created.</p>
* `GetJobUnlockCode` - <p>Returns the <code>UnlockCode</code> code value for the specified job. A particular <code>UnlockCode</code> value can be accessed for up to 360 days after the associated job has been created.</p> <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed along with the manifest to the Snow device through the Snowball client when the client is started for the first time. The only valid status for calling this API is <code>WithCustomer</code> as the manifest and <code>Unlock</code> code values are used for securing your device and should only be used when you have the device.</p> <p>As a best practice, we recommend that you don't save a copy of the <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p>
* `GetSnowballUsage` - <p>Returns information about the Snow Family service limit for your account, and also the number of Snow devices your account has in use.</p> <p>The default service limit for the number of Snow devices that you can have at one time is 1. If you want to increase your service limit, contact Amazon Web Services Support.</p>
* `GetSoftwareUpdates` - Returns an Amazon S3 presigned URL for an update file associated with a specified <code>JobId</code>.
* `ListClusterJobs` - Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.
* `ListClusters` - Returns an array of <code>ClusterListEntry</code> objects of the specified length. Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other important status information.
* `ListCompatibleImages` - This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs) that are owned by your Amazon Web Services accountthat would be supported for use on a Snow device. Currently, supported AMIs are based on the CentOS 7 (x86_64) - with Updates HVM, Ubuntu Server 14.04 LTS (HVM), and Ubuntu 16.04 LTS - Xenial (HVM) images, available on the Amazon Web Services Marketplace.
* `ListJobs` - Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. Calling this API action in one of the US regions will return jobs from the list of all jobs associated with this account in all US regions.
* `ListLongTermPricing` - Lists all long-term pricing types.
* `ListServiceVersions` - Lists all supported versions for Snow on-device services. Returns an array of <code>ServiceVersion</code> object containing the supported versions for a particular service.
* `UpdateCluster` - While a cluster's <code>ClusterState</code> value is in the <code>AwaitingQuorum</code> state, you can update some of the information associated with a cluster. Once the cluster changes to a different job state, usually 60 minutes after the cluster being created, this action is no longer available.
* `UpdateJob` - While a job's <code>JobState</code> value is <code>New</code>, you can update some of the information associated with a job. Once the job changes to a different job state, usually within 60 minutes of the job being created, this action is no longer available.
* `UpdateJobShipmentState` - Updates the state when a shipment state changes to a different state.
* `UpdateLongTermPricing` - Updates the long-term pricing type.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
