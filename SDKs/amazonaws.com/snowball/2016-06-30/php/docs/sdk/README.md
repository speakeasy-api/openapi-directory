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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelClusterRequest();
    $request->cancelClusterRequest = new CancelClusterRequest();
    $request->cancelClusterRequest->clusterId = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = CancelClusterXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CANCEL_CLUSTER;

    $response = $sdk->sdk->cancelCluster($request);

    if ($response->cancelClusterResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelJob

Cancels the specified job. You can only cancel a job before its <code>JobState</code> value changes to <code>PreparingAppliance</code>. Requesting the <code>ListJobs</code> or <code>DescribeJob</code> action returns a job's <code>JobState</code> as part of the response element data returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelJobRequest();
    $request->cancelJobRequest = new CancelJobRequest();
    $request->cancelJobRequest->jobId = 'delectus';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = CancelJobXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CANCEL_JOB;

    $response = $sdk->sdk->cancelJob($request);

    if ($response->cancelJobResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAddress

Creates an address for a Snow device to be shipped to. In most regions, addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Operations\CreateAddressXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAddressRequest();
    $request->createAddressRequest = new CreateAddressRequest();
    $request->createAddressRequest->address = new Address();
    $request->createAddressRequest->address->addressId = 'excepturi';
    $request->createAddressRequest->address->city = 'Fort Rocky';
    $request->createAddressRequest->address->company = 'Hauck Inc';
    $request->createAddressRequest->address->country = 'Nigeria';
    $request->createAddressRequest->address->isRestricted = false;
    $request->createAddressRequest->address->landmark = 'perferendis';
    $request->createAddressRequest->address->name = 'Estelle Will';
    $request->createAddressRequest->address->phoneNumber = 'at';
    $request->createAddressRequest->address->postalCode = '94784-5761';
    $request->createAddressRequest->address->prefectureOrDistrict = 'nam';
    $request->createAddressRequest->address->stateOrProvince = 'officia';
    $request->createAddressRequest->address->street1 = 'occaecati';
    $request->createAddressRequest->address->street2 = 'fugit';
    $request->createAddressRequest->address->street3 = 'deleniti';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = CreateAddressXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CREATE_ADDRESS;

    $response = $sdk->sdk->createAddress($request);

    if ($response->createAddressResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCluster

Creates an empty cluster. Each cluster supports five nodes. You use the <a>CreateJob</a> action separately to create the jobs for each of these nodes. The cluster does not ship until these five node jobs have been created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\JobStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EKSOnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\NFSOnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StorageUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3OnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\TGWOnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RemoteManagementEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobResource;
use \OpenAPI\OpenAPI\Models\Shared\Ec2AmiResource;
use \OpenAPI\OpenAPI\Models\Shared\LambdaResource;
use \OpenAPI\OpenAPI\Models\Shared\EventTriggerDefinition;
use \OpenAPI\OpenAPI\Models\Shared\S3Resource;
use \OpenAPI\OpenAPI\Models\Shared\KeyRange;
use \OpenAPI\OpenAPI\Models\Shared\TargetOnDeviceService;
use \OpenAPI\OpenAPI\Models\Shared\DeviceServiceNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShippingOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnowballCapacityEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnowballTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaxDocuments;
use \OpenAPI\OpenAPI\Models\Shared\INDTaxDocuments;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClusterRequest();
    $request->createClusterRequest = new CreateClusterRequest();
    $request->createClusterRequest->addressId = 'qui';
    $request->createClusterRequest->description = 'impedit';
    $request->createClusterRequest->forceCreateJobs = false;
    $request->createClusterRequest->forwardingAddressId = 'cum';
    $request->createClusterRequest->initialClusterSize = 456150;
    $request->createClusterRequest->jobType = JobTypeEnum::IMPORT;
    $request->createClusterRequest->kmsKeyARN = 'excepturi';
    $request->createClusterRequest->longTermPricingIds = [
        'perferendis',
    ];
    $request->createClusterRequest->notification = new Notification();
    $request->createClusterRequest->notification->jobStatesToNotify = [
        JobStateEnum::IN_PROGRESS,
        JobStateEnum::PREPARING_APPLIANCE,
    ];
    $request->createClusterRequest->notification->notifyAll = false;
    $request->createClusterRequest->notification->snsTopicARN = 'iste';
    $request->createClusterRequest->onDeviceServiceConfiguration = new OnDeviceServiceConfiguration();
    $request->createClusterRequest->onDeviceServiceConfiguration->eksOnDeviceService = new EKSOnDeviceServiceConfiguration();
    $request->createClusterRequest->onDeviceServiceConfiguration->eksOnDeviceService->eksAnywhereVersion = 'dolor';
    $request->createClusterRequest->onDeviceServiceConfiguration->eksOnDeviceService->kubernetesVersion = 'natus';
    $request->createClusterRequest->onDeviceServiceConfiguration->nfsOnDeviceService = new NFSOnDeviceServiceConfiguration();
    $request->createClusterRequest->onDeviceServiceConfiguration->nfsOnDeviceService->storageLimit = 386489;
    $request->createClusterRequest->onDeviceServiceConfiguration->nfsOnDeviceService->storageUnit = StorageUnitEnum::TB;
    $request->createClusterRequest->onDeviceServiceConfiguration->s3OnDeviceService = new S3OnDeviceServiceConfiguration();
    $request->createClusterRequest->onDeviceServiceConfiguration->s3OnDeviceService->faultTolerance = 943749;
    $request->createClusterRequest->onDeviceServiceConfiguration->s3OnDeviceService->serviceSize = 902599;
    $request->createClusterRequest->onDeviceServiceConfiguration->s3OnDeviceService->storageLimit = 6818.2;
    $request->createClusterRequest->onDeviceServiceConfiguration->s3OnDeviceService->storageUnit = StorageUnitEnum::TB;
    $request->createClusterRequest->onDeviceServiceConfiguration->tgwOnDeviceService = new TGWOnDeviceServiceConfiguration();
    $request->createClusterRequest->onDeviceServiceConfiguration->tgwOnDeviceService->storageLimit = 449950;
    $request->createClusterRequest->onDeviceServiceConfiguration->tgwOnDeviceService->storageUnit = StorageUnitEnum::TB;
    $request->createClusterRequest->remoteManagement = RemoteManagementEnum::INSTALLED_ONLY;
    $request->createClusterRequest->resources = new JobResource();
    $request->createClusterRequest->resources->ec2AmiResources = [
        new Ec2AmiResource(),
        new Ec2AmiResource(),
        new Ec2AmiResource(),
    ];
    $request->createClusterRequest->resources->lambdaResources = [
        new LambdaResource(),
        new LambdaResource(),
    ];
    $request->createClusterRequest->resources->s3Resources = [
        new S3Resource(),
        new S3Resource(),
        new S3Resource(),
        new S3Resource(),
    ];
    $request->createClusterRequest->roleARN = 'quidem';
    $request->createClusterRequest->shippingOption = ShippingOptionEnum::SECOND_DAY;
    $request->createClusterRequest->snowballCapacityPreference = SnowballCapacityEnum::T50;
    $request->createClusterRequest->snowballType = SnowballTypeEnum::V35_S;
    $request->createClusterRequest->taxDocuments = new TaxDocuments();
    $request->createClusterRequest->taxDocuments->ind = new INDTaxDocuments();
    $request->createClusterRequest->taxDocuments->ind->gstin = 'est';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = CreateClusterXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CREATE_CLUSTER;

    $response = $sdk->sdk->createCluster($request);

    if ($response->createClusterResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createJob

<p>Creates a job to import or export data between Amazon S3 and your on-premises data center. Your Amazon Web Services account must have the right trust policies and permissions in place to create a job for a Snow device. If you're creating a job for a node in a cluster, you only need to provide the <code>clusterId</code> value; the other job attributes are inherited from the cluster. </p> <note> <p>Only the Snowball; Edge device type is supported when ordering clustered jobs.</p> <p>The device capacity is optional.</p> <p>Availability of device types differ by Amazon Web Services Region. For more information about Region availability, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/?p=ngi&amp;loc=4">Amazon Web Services Regional Services</a>.</p> </note> <p/> <p class="title"> <b>Snow Family devices and their capacities.</b> </p> <ul> <li> <p>Device type: <b>SNC1_SSD</b> </p> <ul> <li> <p>Capacity: T14</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>SNC1_HDD</b> </p> <ul> <li> <p>Capacity: T8</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_S</b> </p> <ul> <li> <p>Capacity: T98</p> </li> <li> <p>Description: Snowball Edge Storage Optimized for data transfer only </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_CG</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized with GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_C</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized without GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE</b> </p> <ul> <li> <p>Capacity: T100</p> </li> <li> <p>Description: Snowball Edge Storage Optimized with EC2 Compute</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T50</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region </p> </note> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T80</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region. </p> </note> </li> </ul> <p/> </li> <li> <p>Device type: <b>V3_5C</b> </p> <ul> <li> <p>Capacity: T32</p> </li> <li> <p>Description: Snowball Edge Compute Optimized without GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>V3_5S</b> </p> <ul> <li> <p>Capacity: T240</p> </li> <li> <p>Description: Snowball Edge Storage Optimized 210TB</p> </li> </ul> <p/> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SnowconeDeviceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WirelessConnection;
use \OpenAPI\OpenAPI\Models\Shared\JobTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\JobStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EKSOnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\NFSOnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StorageUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3OnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\TGWOnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RemoteManagementEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobResource;
use \OpenAPI\OpenAPI\Models\Shared\Ec2AmiResource;
use \OpenAPI\OpenAPI\Models\Shared\LambdaResource;
use \OpenAPI\OpenAPI\Models\Shared\EventTriggerDefinition;
use \OpenAPI\OpenAPI\Models\Shared\S3Resource;
use \OpenAPI\OpenAPI\Models\Shared\KeyRange;
use \OpenAPI\OpenAPI\Models\Shared\TargetOnDeviceService;
use \OpenAPI\OpenAPI\Models\Shared\DeviceServiceNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShippingOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnowballCapacityEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnowballTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaxDocuments;
use \OpenAPI\OpenAPI\Models\Shared\INDTaxDocuments;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateJobRequest();
    $request->createJobRequest = new CreateJobRequest();
    $request->createJobRequest->addressId = 'enim';
    $request->createJobRequest->clusterId = 'omnis';
    $request->createJobRequest->description = 'nemo';
    $request->createJobRequest->deviceConfiguration = new DeviceConfiguration();
    $request->createJobRequest->deviceConfiguration->snowconeDeviceConfiguration = new SnowconeDeviceConfiguration();
    $request->createJobRequest->deviceConfiguration->snowconeDeviceConfiguration->wirelessConnection = new WirelessConnection();
    $request->createJobRequest->deviceConfiguration->snowconeDeviceConfiguration->wirelessConnection->isWifiEnabled = false;
    $request->createJobRequest->forwardingAddressId = 'minima';
    $request->createJobRequest->jobType = JobTypeEnum::EXPORT;
    $request->createJobRequest->kmsKeyARN = 'accusantium';
    $request->createJobRequest->longTermPricingId = 'iure';
    $request->createJobRequest->notification = new Notification();
    $request->createJobRequest->notification->jobStatesToNotify = [
        JobStateEnum::PENDING,
        JobStateEnum::PENDING,
        JobStateEnum::PREPARING_APPLIANCE,
    ];
    $request->createJobRequest->notification->notifyAll = false;
    $request->createJobRequest->notification->snsTopicARN = 'mollitia';
    $request->createJobRequest->onDeviceServiceConfiguration = new OnDeviceServiceConfiguration();
    $request->createJobRequest->onDeviceServiceConfiguration->eksOnDeviceService = new EKSOnDeviceServiceConfiguration();
    $request->createJobRequest->onDeviceServiceConfiguration->eksOnDeviceService->eksAnywhereVersion = 'dolorem';
    $request->createJobRequest->onDeviceServiceConfiguration->eksOnDeviceService->kubernetesVersion = 'culpa';
    $request->createJobRequest->onDeviceServiceConfiguration->nfsOnDeviceService = new NFSOnDeviceServiceConfiguration();
    $request->createJobRequest->onDeviceServiceConfiguration->nfsOnDeviceService->storageLimit = 161309;
    $request->createJobRequest->onDeviceServiceConfiguration->nfsOnDeviceService->storageUnit = StorageUnitEnum::TB;
    $request->createJobRequest->onDeviceServiceConfiguration->s3OnDeviceService = new S3OnDeviceServiceConfiguration();
    $request->createJobRequest->onDeviceServiceConfiguration->s3OnDeviceService->faultTolerance = 995300;
    $request->createJobRequest->onDeviceServiceConfiguration->s3OnDeviceService->serviceSize = 653108;
    $request->createJobRequest->onDeviceServiceConfiguration->s3OnDeviceService->storageLimit = 5818.5;
    $request->createJobRequest->onDeviceServiceConfiguration->s3OnDeviceService->storageUnit = StorageUnitEnum::TB;
    $request->createJobRequest->onDeviceServiceConfiguration->tgwOnDeviceService = new TGWOnDeviceServiceConfiguration();
    $request->createJobRequest->onDeviceServiceConfiguration->tgwOnDeviceService->storageLimit = 253291;
    $request->createJobRequest->onDeviceServiceConfiguration->tgwOnDeviceService->storageUnit = StorageUnitEnum::TB;
    $request->createJobRequest->remoteManagement = RemoteManagementEnum::INSTALLED_ONLY;
    $request->createJobRequest->resources = new JobResource();
    $request->createJobRequest->resources->ec2AmiResources = [
        new Ec2AmiResource(),
        new Ec2AmiResource(),
    ];
    $request->createJobRequest->resources->lambdaResources = [
        new LambdaResource(),
        new LambdaResource(),
    ];
    $request->createJobRequest->resources->s3Resources = [
        new S3Resource(),
    ];
    $request->createJobRequest->roleARN = 'error';
    $request->createJobRequest->shippingOption = ShippingOptionEnum::SECOND_DAY;
    $request->createJobRequest->snowballCapacityPreference = SnowballCapacityEnum::T42;
    $request->createJobRequest->snowballType = SnowballTypeEnum::STANDARD;
    $request->createJobRequest->taxDocuments = new TaxDocuments();
    $request->createJobRequest->taxDocuments->ind = new INDTaxDocuments();
    $request->createJobRequest->taxDocuments->ind->gstin = 'laborum';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = CreateJobXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CREATE_JOB;

    $response = $sdk->sdk->createJob($request);

    if ($response->createJobResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLongTermPricing

Creates a job with the long-term usage option for a device. The long-term usage is a 1-year or 3-year long-term pricing type for the device. You are billed upfront, and Amazon Web Services provides discounts for long-term pricing. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLongTermPricingRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLongTermPricingRequest;
use \OpenAPI\OpenAPI\Models\Shared\LongTermPricingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnowballTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateLongTermPricingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLongTermPricingRequest();
    $request->createLongTermPricingRequest = new CreateLongTermPricingRequest();
    $request->createLongTermPricingRequest->isLongTermPricingAutoRenew = false;
    $request->createLongTermPricingRequest->longTermPricingType = LongTermPricingTypeEnum::THREE_YEAR;
    $request->createLongTermPricingRequest->snowballType = SnowballTypeEnum::V35_C;
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = CreateLongTermPricingXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CREATE_LONG_TERM_PRICING;

    $response = $sdk->sdk->createLongTermPricing($request);

    if ($response->createLongTermPricingResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createReturnShippingLabel

Creates a shipping label that will be used to return the Snow device to Amazon Web Services.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateReturnShippingLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateReturnShippingLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShippingOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateReturnShippingLabelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReturnShippingLabelRequest();
    $request->createReturnShippingLabelRequest = new CreateReturnShippingLabelRequest();
    $request->createReturnShippingLabelRequest->jobId = 'voluptatibus';
    $request->createReturnShippingLabelRequest->shippingOption = ShippingOptionEnum::STANDARD;
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = CreateReturnShippingLabelXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CREATE_RETURN_SHIPPING_LABEL;

    $response = $sdk->sdk->createReturnShippingLabel($request);

    if ($response->createReturnShippingLabelResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAddress

Takes an <code>AddressId</code> and returns specific details about that address in the form of an <code>Address</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAddressXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAddressRequest();
    $request->describeAddressRequest = new DescribeAddressRequest();
    $request->describeAddressRequest->addressId = 'perferendis';
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = DescribeAddressXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_DESCRIBE_ADDRESS;

    $response = $sdk->sdk->describeAddress($request);

    if ($response->describeAddressResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAddresses

Returns a specified number of <code>ADDRESS</code> objects. Calling this API in one of the US regions will return addresses from the list of all addresses associated with this account in all US regions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAddressesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAddressesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAddressesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAddressesRequest();
    $request->describeAddressesRequest = new DescribeAddressesRequest();
    $request->describeAddressesRequest->maxResults = 480894;
    $request->describeAddressesRequest->nextToken = 'dicta';
    $request->maxResults = 'harum';
    $request->nextToken = 'enim';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'molestias';
    $request->xAmzTarget = DescribeAddressesXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_DESCRIBE_ADDRESSES;

    $response = $sdk->sdk->describeAddresses($request);

    if ($response->describeAddressesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCluster

Returns information about a specific cluster including shipping information, cluster status, and other important metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeClusterRequest();
    $request->describeClusterRequest = new DescribeClusterRequest();
    $request->describeClusterRequest->clusterId = 'excepturi';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = DescribeClusterXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_DESCRIBE_CLUSTER;

    $response = $sdk->sdk->describeCluster($request);

    if ($response->describeClusterResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeJob

Returns information about a specific job including shipping information, job status, and other important metadata. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeJobRequest();
    $request->describeJobRequest = new DescribeJobRequest();
    $request->describeJobRequest->jobId = 'sint';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = DescribeJobXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_DESCRIBE_JOB;

    $response = $sdk->sdk->describeJob($request);

    if ($response->describeJobResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeReturnShippingLabel

Information on the shipping label of a Snow device that is being returned to Amazon Web Services.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReturnShippingLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeReturnShippingLabelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReturnShippingLabelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeReturnShippingLabelRequest();
    $request->describeReturnShippingLabelRequest = new DescribeReturnShippingLabelRequest();
    $request->describeReturnShippingLabelRequest->jobId = 'explicabo';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = DescribeReturnShippingLabelXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_DESCRIBE_RETURN_SHIPPING_LABEL;

    $response = $sdk->sdk->describeReturnShippingLabel($request);

    if ($response->describeReturnShippingLabelResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobManifest

<p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the <code>GetJobManifest</code> action.</p> <p>The manifest is an encrypted file that you can download after your job enters the <code>WithCustomer</code> status. This is the only valid status for calling this API as the manifest and <code>UnlockCode</code> code value are used for securing your device and should only be used when you have the device. The manifest is decrypted by using the <code>UnlockCode</code> code value, when you pass both values to the Snow device through the Snowball client when the client is started for the first time. </p> <p>As a best practice, we recommend that you don't save a copy of an <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p> <p>The credentials of a given job, including its manifest file and unlock code, expire 360 days after the job is created.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobManifestRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetJobManifestRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetJobManifestXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobManifestRequest();
    $request->getJobManifestRequest = new GetJobManifestRequest();
    $request->getJobManifestRequest->jobId = 'cupiditate';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = GetJobManifestXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_GET_JOB_MANIFEST;

    $response = $sdk->sdk->getJobManifest($request);

    if ($response->getJobManifestResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobUnlockCode

<p>Returns the <code>UnlockCode</code> code value for the specified job. A particular <code>UnlockCode</code> value can be accessed for up to 360 days after the associated job has been created.</p> <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed along with the manifest to the Snow device through the Snowball client when the client is started for the first time. The only valid status for calling this API is <code>WithCustomer</code> as the manifest and <code>Unlock</code> code values are used for securing your device and should only be used when you have the device.</p> <p>As a best practice, we recommend that you don't save a copy of the <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobUnlockCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetJobUnlockCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetJobUnlockCodeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobUnlockCodeRequest();
    $request->getJobUnlockCodeRequest = new GetJobUnlockCodeRequest();
    $request->getJobUnlockCodeRequest->jobId = 'dolorum';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = GetJobUnlockCodeXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_GET_JOB_UNLOCK_CODE;

    $response = $sdk->sdk->getJobUnlockCode($request);

    if ($response->getJobUnlockCodeResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSnowballUsage

<p>Returns information about the Snow Family service limit for your account, and also the number of Snow devices your account has in use.</p> <p>The default service limit for the number of Snow devices that you can have at one time is 1. If you want to increase your service limit, contact Amazon Web Services Support.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSnowballUsageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSnowballUsageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSnowballUsageRequest();
    $request->requestBody = [
        'eligendi' => 'sint',
    ];
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = GetSnowballUsageXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_GET_SNOWBALL_USAGE;

    $response = $sdk->sdk->getSnowballUsage($request);

    if ($response->getSnowballUsageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSoftwareUpdates

Returns an Amazon S3 presigned URL for an update file associated with a specified <code>JobId</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSoftwareUpdatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSoftwareUpdatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSoftwareUpdatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSoftwareUpdatesRequest();
    $request->getSoftwareUpdatesRequest = new GetSoftwareUpdatesRequest();
    $request->getSoftwareUpdatesRequest->jobId = 'a';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = GetSoftwareUpdatesXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_GET_SOFTWARE_UPDATES;

    $response = $sdk->sdk->getSoftwareUpdates($request);

    if ($response->getSoftwareUpdatesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listClusterJobs

Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListClusterJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListClusterJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListClusterJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListClusterJobsRequest();
    $request->listClusterJobsRequest = new ListClusterJobsRequest();
    $request->listClusterJobsRequest->clusterId = 'magnam';
    $request->listClusterJobsRequest->maxResults = 767024;
    $request->listClusterJobsRequest->nextToken = 'facere';
    $request->maxResults = 'ea';
    $request->nextToken = 'aliquid';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = ListClusterJobsXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_LIST_CLUSTER_JOBS;

    $response = $sdk->sdk->listClusterJobs($request);

    if ($response->listClusterJobsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listClusters

Returns an array of <code>ClusterListEntry</code> objects of the specified length. Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other important status information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListClustersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListClustersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListClustersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListClustersRequest();
    $request->listClustersRequest = new ListClustersRequest();
    $request->listClustersRequest->maxResults = 692532;
    $request->listClustersRequest->nextToken = 'provident';
    $request->maxResults = 'nam';
    $request->nextToken = 'id';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = ListClustersXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_LIST_CLUSTERS;

    $response = $sdk->sdk->listClusters($request);

    if ($response->listClustersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCompatibleImages

This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs) that are owned by your Amazon Web Services accountthat would be supported for use on a Snow device. Currently, supported AMIs are based on the Amazon Linux-2, Ubuntu 20.04 LTS - Focal, or Ubuntu 22.04 LTS - Jammy images, available on the Amazon Web Services Marketplace. Ubuntu 16.04 LTS - Xenial (HVM) images are no longer supported in the Market, but still supported for use on devices through Amazon EC2 VM Import/Export and running locally in AMIs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCompatibleImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCompatibleImagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCompatibleImagesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCompatibleImagesRequest();
    $request->listCompatibleImagesRequest = new ListCompatibleImagesRequest();
    $request->listCompatibleImagesRequest->maxResults = 618809;
    $request->listCompatibleImagesRequest->nextToken = 'omnis';
    $request->maxResults = 'molestiae';
    $request->nextToken = 'perferendis';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = ListCompatibleImagesXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_LIST_COMPATIBLE_IMAGES;

    $response = $sdk->sdk->listCompatibleImages($request);

    if ($response->listCompatibleImagesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJobs

Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. Calling this API action in one of the US regions will return jobs from the list of all jobs associated with this account in all US regions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListJobsRequest();
    $request->listJobsRequest = new ListJobsRequest();
    $request->listJobsRequest->maxResults = 618016;
    $request->listJobsRequest->nextToken = 'nobis';
    $request->maxResults = 'eum';
    $request->nextToken = 'vero';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = ListJobsXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_LIST_JOBS;

    $response = $sdk->sdk->listJobs($request);

    if ($response->listJobsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLongTermPricing

Lists all long-term pricing types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLongTermPricingRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLongTermPricingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLongTermPricingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLongTermPricingRequest();
    $request->listLongTermPricingRequest = new ListLongTermPricingRequest();
    $request->listLongTermPricingRequest->maxResults = 551816;
    $request->listLongTermPricingRequest->nextToken = 'sint';
    $request->maxResults = 'accusantium';
    $request->nextToken = 'mollitia';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = ListLongTermPricingXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_LIST_LONG_TERM_PRICING;

    $response = $sdk->sdk->listLongTermPricing($request);

    if ($response->listLongTermPricingResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceVersions

Lists all supported versions for Snow on-device services. Returns an array of <code>ServiceVersion</code> object containing the supported versions for a particular service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServiceVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DependentService;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceVersion;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceVersionsRequest();
    $request->listServiceVersionsRequest = new ListServiceVersionsRequest();
    $request->listServiceVersionsRequest->dependentServices = [
        new DependentService(),
        new DependentService(),
    ];
    $request->listServiceVersionsRequest->maxResults = 97260;
    $request->listServiceVersionsRequest->nextToken = 'iure';
    $request->listServiceVersionsRequest->serviceName = ServiceNameEnum::EKS_ANYWHERE;
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = ListServiceVersionsXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_LIST_SERVICE_VERSIONS;

    $response = $sdk->sdk->listServiceVersions($request);

    if ($response->listServiceVersionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCluster

While a cluster's <code>ClusterState</code> value is in the <code>AwaitingQuorum</code> state, you can update some of the information associated with a cluster. Once the cluster changes to a different job state, usually 60 minutes after the cluster being created, this action is no longer available.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\JobStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EKSOnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\NFSOnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StorageUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3OnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\TGWOnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\JobResource;
use \OpenAPI\OpenAPI\Models\Shared\Ec2AmiResource;
use \OpenAPI\OpenAPI\Models\Shared\LambdaResource;
use \OpenAPI\OpenAPI\Models\Shared\EventTriggerDefinition;
use \OpenAPI\OpenAPI\Models\Shared\S3Resource;
use \OpenAPI\OpenAPI\Models\Shared\KeyRange;
use \OpenAPI\OpenAPI\Models\Shared\TargetOnDeviceService;
use \OpenAPI\OpenAPI\Models\Shared\DeviceServiceNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShippingOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClusterRequest();
    $request->updateClusterRequest = new UpdateClusterRequest();
    $request->updateClusterRequest->addressId = 'architecto';
    $request->updateClusterRequest->clusterId = 'repudiandae';
    $request->updateClusterRequest->description = 'ullam';
    $request->updateClusterRequest->forwardingAddressId = 'expedita';
    $request->updateClusterRequest->notification = new Notification();
    $request->updateClusterRequest->notification->jobStatesToNotify = [
        JobStateEnum::PENDING,
        JobStateEnum::CANCELLED,
    ];
    $request->updateClusterRequest->notification->notifyAll = false;
    $request->updateClusterRequest->notification->snsTopicARN = 'sed';
    $request->updateClusterRequest->onDeviceServiceConfiguration = new OnDeviceServiceConfiguration();
    $request->updateClusterRequest->onDeviceServiceConfiguration->eksOnDeviceService = new EKSOnDeviceServiceConfiguration();
    $request->updateClusterRequest->onDeviceServiceConfiguration->eksOnDeviceService->eksAnywhereVersion = 'saepe';
    $request->updateClusterRequest->onDeviceServiceConfiguration->eksOnDeviceService->kubernetesVersion = 'pariatur';
    $request->updateClusterRequest->onDeviceServiceConfiguration->nfsOnDeviceService = new NFSOnDeviceServiceConfiguration();
    $request->updateClusterRequest->onDeviceServiceConfiguration->nfsOnDeviceService->storageLimit = 37559;
    $request->updateClusterRequest->onDeviceServiceConfiguration->nfsOnDeviceService->storageUnit = StorageUnitEnum::TB;
    $request->updateClusterRequest->onDeviceServiceConfiguration->s3OnDeviceService = new S3OnDeviceServiceConfiguration();
    $request->updateClusterRequest->onDeviceServiceConfiguration->s3OnDeviceService->faultTolerance = 162493;
    $request->updateClusterRequest->onDeviceServiceConfiguration->s3OnDeviceService->serviceSize = 508315;
    $request->updateClusterRequest->onDeviceServiceConfiguration->s3OnDeviceService->storageLimit = 6155.6;
    $request->updateClusterRequest->onDeviceServiceConfiguration->s3OnDeviceService->storageUnit = StorageUnitEnum::TB;
    $request->updateClusterRequest->onDeviceServiceConfiguration->tgwOnDeviceService = new TGWOnDeviceServiceConfiguration();
    $request->updateClusterRequest->onDeviceServiceConfiguration->tgwOnDeviceService->storageLimit = 166847;
    $request->updateClusterRequest->onDeviceServiceConfiguration->tgwOnDeviceService->storageUnit = StorageUnitEnum::TB;
    $request->updateClusterRequest->resources = new JobResource();
    $request->updateClusterRequest->resources->ec2AmiResources = [
        new Ec2AmiResource(),
    ];
    $request->updateClusterRequest->resources->lambdaResources = [
        new LambdaResource(),
        new LambdaResource(),
        new LambdaResource(),
        new LambdaResource(),
    ];
    $request->updateClusterRequest->resources->s3Resources = [
        new S3Resource(),
        new S3Resource(),
        new S3Resource(),
        new S3Resource(),
    ];
    $request->updateClusterRequest->roleARN = 'pariatur';
    $request->updateClusterRequest->shippingOption = ShippingOptionEnum::STANDARD;
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = UpdateClusterXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_UPDATE_CLUSTER;

    $response = $sdk->sdk->updateCluster($request);

    if ($response->updateClusterResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateJob

While a job's <code>JobState</code> value is <code>New</code>, you can update some of the information associated with a job. Once the job changes to a different job state, usually within 60 minutes of the job being created, this action is no longer available.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\JobStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EKSOnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\NFSOnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StorageUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3OnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\TGWOnDeviceServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\JobResource;
use \OpenAPI\OpenAPI\Models\Shared\Ec2AmiResource;
use \OpenAPI\OpenAPI\Models\Shared\LambdaResource;
use \OpenAPI\OpenAPI\Models\Shared\EventTriggerDefinition;
use \OpenAPI\OpenAPI\Models\Shared\S3Resource;
use \OpenAPI\OpenAPI\Models\Shared\KeyRange;
use \OpenAPI\OpenAPI\Models\Shared\TargetOnDeviceService;
use \OpenAPI\OpenAPI\Models\Shared\DeviceServiceNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShippingOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnowballCapacityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateJobRequest();
    $request->updateJobRequest = new UpdateJobRequest();
    $request->updateJobRequest->addressId = 'quidem';
    $request->updateJobRequest->description = 'ipsam';
    $request->updateJobRequest->forwardingAddressId = 'voluptate';
    $request->updateJobRequest->jobId = 'autem';
    $request->updateJobRequest->notification = new Notification();
    $request->updateJobRequest->notification->jobStatesToNotify = [
        JobStateEnum::NEW,
        JobStateEnum::LISTING,
        JobStateEnum::WITH_CUSTOMER,
    ];
    $request->updateJobRequest->notification->notifyAll = false;
    $request->updateJobRequest->notification->snsTopicARN = 'voluptatibus';
    $request->updateJobRequest->onDeviceServiceConfiguration = new OnDeviceServiceConfiguration();
    $request->updateJobRequest->onDeviceServiceConfiguration->eksOnDeviceService = new EKSOnDeviceServiceConfiguration();
    $request->updateJobRequest->onDeviceServiceConfiguration->eksOnDeviceService->eksAnywhereVersion = 'perferendis';
    $request->updateJobRequest->onDeviceServiceConfiguration->eksOnDeviceService->kubernetesVersion = 'fugiat';
    $request->updateJobRequest->onDeviceServiceConfiguration->nfsOnDeviceService = new NFSOnDeviceServiceConfiguration();
    $request->updateJobRequest->onDeviceServiceConfiguration->nfsOnDeviceService->storageLimit = 230742;
    $request->updateJobRequest->onDeviceServiceConfiguration->nfsOnDeviceService->storageUnit = StorageUnitEnum::TB;
    $request->updateJobRequest->onDeviceServiceConfiguration->s3OnDeviceService = new S3OnDeviceServiceConfiguration();
    $request->updateJobRequest->onDeviceServiceConfiguration->s3OnDeviceService->faultTolerance = 11714;
    $request->updateJobRequest->onDeviceServiceConfiguration->s3OnDeviceService->serviceSize = 764912;
    $request->updateJobRequest->onDeviceServiceConfiguration->s3OnDeviceService->storageLimit = 3599.78;
    $request->updateJobRequest->onDeviceServiceConfiguration->s3OnDeviceService->storageUnit = StorageUnitEnum::TB;
    $request->updateJobRequest->onDeviceServiceConfiguration->tgwOnDeviceService = new TGWOnDeviceServiceConfiguration();
    $request->updateJobRequest->onDeviceServiceConfiguration->tgwOnDeviceService->storageLimit = 944124;
    $request->updateJobRequest->onDeviceServiceConfiguration->tgwOnDeviceService->storageUnit = StorageUnitEnum::TB;
    $request->updateJobRequest->resources = new JobResource();
    $request->updateJobRequest->resources->ec2AmiResources = [
        new Ec2AmiResource(),
        new Ec2AmiResource(),
        new Ec2AmiResource(),
    ];
    $request->updateJobRequest->resources->lambdaResources = [
        new LambdaResource(),
        new LambdaResource(),
        new LambdaResource(),
    ];
    $request->updateJobRequest->resources->s3Resources = [
        new S3Resource(),
    ];
    $request->updateJobRequest->roleARN = 'quis';
    $request->updateJobRequest->shippingOption = ShippingOptionEnum::EXPRESS;
    $request->updateJobRequest->snowballCapacityPreference = SnowballCapacityEnum::T98;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = UpdateJobXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_UPDATE_JOB;

    $response = $sdk->sdk->updateJob($request);

    if ($response->updateJobResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateJobShipmentState

Updates the state when a shipment state changes to a different state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobShipmentStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateJobShipmentStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShipmentStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobShipmentStateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateJobShipmentStateRequest();
    $request->updateJobShipmentStateRequest = new UpdateJobShipmentStateRequest();
    $request->updateJobShipmentStateRequest->jobId = 'quam';
    $request->updateJobShipmentStateRequest->shipmentState = ShipmentStateEnum::RECEIVED;
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'perspiciatis';
    $request->xAmzTarget = UpdateJobShipmentStateXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_UPDATE_JOB_SHIPMENT_STATE;

    $response = $sdk->sdk->updateJobShipmentState($request);

    if ($response->updateJobShipmentStateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLongTermPricing

Updates the long-term pricing type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLongTermPricingRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLongTermPricingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLongTermPricingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLongTermPricingRequest();
    $request->updateLongTermPricingRequest = new UpdateLongTermPricingRequest();
    $request->updateLongTermPricingRequest->isLongTermPricingAutoRenew = false;
    $request->updateLongTermPricingRequest->longTermPricingId = 'voluptatem';
    $request->updateLongTermPricingRequest->replacementJob = 'porro';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = UpdateLongTermPricingXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_UPDATE_LONG_TERM_PRICING;

    $response = $sdk->sdk->updateLongTermPricing($request);

    if ($response->updateLongTermPricingResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
