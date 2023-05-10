# SDK

## Overview

Welcome to the IoT SiteWise API Reference. IoT SiteWise is an Amazon Web Services service that connects <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">Industrial Internet of Things (IIoT)</a> devices to the power of the Amazon Web Services Cloud. For more information, see the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/">IoT SiteWise User Guide</a>. For information about IoT SiteWise quotas, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotsitewise/>
### Available Operations

* [associateAssets](#associateassets) - Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/add-associated-assets.html">Associating assets</a> in the <i>IoT SiteWise User Guide</i>.
* [associateTimeSeriesToAssetProperty](#associatetimeseriestoassetproperty) - Associates a time series (data stream) with an asset property.
* [batchAssociateProjectAssets](#batchassociateprojectassets) - Associates a group (batch) of assets with an IoT SiteWise Monitor project.
* [batchDisassociateProjectAssets](#batchdisassociateprojectassets) - Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.
* [batchGetAssetPropertyAggregates](#batchgetassetpropertyaggregates) - Gets aggregated values (for example, average, minimum, and maximum) for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.
* [batchGetAssetPropertyValue](#batchgetassetpropertyvalue) - Gets the current value for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.
* [batchGetAssetPropertyValueHistory](#batchgetassetpropertyvaluehistory) - Gets the historical values for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.
* [batchPutAssetPropertyValue](#batchputassetpropertyvalue) - <p>Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting data using the API</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> <important> <p>With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps outside of the inclusive range of [-7 days, +10 minutes] and returns a <code>TimestampOutOfRangeException</code> error.</p> <p>For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>, then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p> </important> <p>IoT SiteWise authorizes access to each <code>BatchPutAssetPropertyValue</code> entry individually. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-batchputassetpropertyvalue-action">BatchPutAssetPropertyValue authorization</a> in the <i>IoT SiteWise User Guide</i>.</p>
* [createAccessPolicy](#createaccesspolicy) - Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource.
* [createAsset](#createasset) - Creates an asset from an existing asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html">Creating assets</a> in the <i>IoT SiteWise User Guide</i>.
* [createAssetModel](#createassetmodel) - Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining asset models</a> in the <i>IoT SiteWise User Guide</i>.
* [createBulkImportJob](#createbulkimportjob) - <p>Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/CreateBulkImportJob.html">Create a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <important> <p>You must enable IoT SiteWise to export data to Amazon S3 before you create a bulk import job. For more information about how to configure storage settings, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html">PutStorageConfiguration</a>.</p> </important>
* [createDashboard](#createdashboard) - Creates a dashboard in an IoT SiteWise Monitor project.
* [createGateway](#creategateway) - Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>.
* [createPortal](#createportal) - <p>Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM to authenticate portal users and manage user permissions.</p> <note> <p>Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or removing portal administrators</a> in the <i>IoT SiteWise User Guide</i>.</p> </note>
* [createProject](#createproject) - <p>Creates a project in the specified portal.</p> <note> <p>Make sure that the project name and description don't contain confidential information.</p> </note>
* [deleteAccessPolicy](#deleteaccesspolicy) - Deletes an access policy that grants the specified identity access to the specified IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor resource.
* [deleteAsset](#deleteasset) - <p>Deletes an asset. This action can't be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>. </p> <note> <p>You can't delete an asset that's associated to another asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p> </note>
* [deleteAssetModel](#deleteassetmodel) - Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>.
* [deleteDashboard](#deletedashboard) - Deletes a dashboard from IoT SiteWise Monitor.
* [deleteGateway](#deletegateway) - Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system.
* [deletePortal](#deleteportal) - Deletes a portal from IoT SiteWise Monitor.
* [deleteProject](#deleteproject) - Deletes a project from IoT SiteWise Monitor.
* [deleteTimeSeries](#deletetimeseries) - <p>Deletes a time series (data stream). If you delete a time series that's associated with an asset property, the asset property still exists, but the time series will no longer be associated with this asset property.</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>
* [describeAccessPolicy](#describeaccesspolicy) - Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project.
* [describeAsset](#describeasset) - Retrieves information about an asset.
* [describeAssetModel](#describeassetmodel) - Retrieves information about an asset model.
* [describeAssetProperty](#describeassetproperty) - <p>Retrieves information about an asset property.</p> <note> <p>When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation's response includes the new default value.</p> </note> <p>This operation doesn't return the value of the asset property. To get the value of an asset property, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html">GetAssetPropertyValue</a>.</p>
* [describeBulkImportJob](#describebulkimportjob) - Retrieves information about a bulk import job request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/DescribeBulkImportJob.html">Describe a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.
* [describeDashboard](#describedashboard) - Retrieves information about a dashboard.
* [describeDefaultEncryptionConfiguration](#describedefaultencryptionconfiguration) - Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified Region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.
* [describeGateway](#describegateway) - Retrieves information about a gateway.
* [describeGatewayCapabilityConfiguration](#describegatewaycapabilityconfiguration) - Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.
* [describeLoggingOptions](#describeloggingoptions) - Retrieves the current IoT SiteWise logging options.
* [describePortal](#describeportal) - Retrieves information about a portal.
* [describeProject](#describeproject) - Retrieves information about a project.
* [describeStorageConfiguration](#describestorageconfiguration) - Retrieves information about the storage configuration for IoT SiteWise.
* [describeTimeSeries](#describetimeseries) - <p>Retrieves information about a time series (data stream).</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>
* [disassociateAssets](#disassociateassets) - Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.
* [disassociateTimeSeriesFromAssetProperty](#disassociatetimeseriesfromassetproperty) - Disassociates a time series (data stream) from an asset property.
* [getAssetPropertyAggregates](#getassetpropertyaggregates) - <p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
* [getAssetPropertyValue](#getassetpropertyvalue) - <p>Gets an asset property's current value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
* [getAssetPropertyValueHistory](#getassetpropertyvaluehistory) - <p>Gets the history of an asset property's values. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
* [getInterpolatedAssetPropertyValues](#getinterpolatedassetpropertyvalues) - <p>Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data.</p> <p>For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
* [listAccessPolicies](#listaccesspolicies) - Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).
* [listAssetModelProperties](#listassetmodelproperties) - Retrieves a paginated list of properties associated with an asset model. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.
* [listAssetModels](#listassetmodels) - Retrieves a paginated list of summaries of all asset models.
* [listAssetProperties](#listassetproperties) - Retrieves a paginated list of properties associated with an asset. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.
* [listAssetRelationships](#listassetrelationships) - Retrieves a paginated list of asset relationships for an asset. You can use this operation to identify an asset's root asset and all associated assets between that asset and its root.
* [listAssets](#listassets) - <p>Retrieves a paginated list of asset summaries.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List assets based on a specific asset model.</p> </li> <li> <p>List top-level assets.</p> </li> </ul> <p>You can't use this operation to list all assets. To retrieve summaries for all of your assets, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html">ListAssetModels</a> to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.</p>
* [listAssociatedAssets](#listassociatedassets) - <p>Retrieves a paginated list of associated assets.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List child assets associated to a parent asset by a hierarchy that you specify.</p> </li> <li> <p>List an asset's parent asset.</p> </li> </ul>
* [listBulkImportJobs](#listbulkimportjobs) - Retrieves a paginated list of bulk import job requests. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ListBulkImportJobs.html">List bulk import jobs (CLI)</a> in the <i>IoT SiteWise User Guide</i>.
* [listDashboards](#listdashboards) - Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.
* [listGateways](#listgateways) - Retrieves a paginated list of gateways.
* [listPortals](#listportals) - Retrieves a paginated list of IoT SiteWise Monitor portals.
* [listProjectAssets](#listprojectassets) - Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.
* [listProjects](#listprojects) - Retrieves a paginated list of projects for an IoT SiteWise Monitor portal.
* [listTagsForResource](#listtagsforresource) - Retrieves the list of tags for an IoT SiteWise resource.
* [listTimeSeries](#listtimeseries) - Retrieves a paginated list of time series (data streams).
* [putDefaultEncryptionConfiguration](#putdefaultencryptionconfiguration) - Sets the default encryption configuration for the Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.
* [putLoggingOptions](#putloggingoptions) - Sets logging options for IoT SiteWise.
* [putStorageConfiguration](#putstorageconfiguration) - Configures storage settings for IoT SiteWise.
* [tagResource](#tagresource) - Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.
* [untagResource](#untagresource) - Removes a tag from an IoT SiteWise resource.
* [updateAccessPolicy](#updateaccesspolicy) - Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor portal or project resource.
* [updateAsset](#updateasset) - Updates an asset's name. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.
* [updateAssetModel](#updateassetmodel) - <p>Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.</p> <important> <p>This operation overwrites the existing model with the provided model. To avoid deleting your asset model's properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p> <p>If you remove a property from an asset model, IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, IoT SiteWise disassociates every asset associated with that hierarchy. You can't change the type or data type of an existing property.</p> </important>
* [updateAssetProperty](#updateassetproperty) - <p>Updates an asset property's alias and notification state.</p> <important> <p>This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html">DescribeAssetProperty</a>.</p> </important>
* [updateDashboard](#updatedashboard) - Updates an IoT SiteWise Monitor dashboard.
* [updateGateway](#updategateway) - Updates a gateway's name.
* [updateGatewayCapabilityConfiguration](#updategatewaycapabilityconfiguration) - Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.
* [updatePortal](#updateportal) - Updates an IoT SiteWise Monitor portal.
* [updateProject](#updateproject) - Updates an IoT SiteWise Monitor project.

## associateAssets

Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/add-associated-assets.html">Associating assets</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateAssetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateAssetsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateAssetsRequest();
    $request->requestBody = new AssociateAssetsRequestBody();
    $request->requestBody->childAssetId = 'suscipit';
    $request->requestBody->clientToken = 'iure';
    $request->requestBody->hierarchyId = 'magnam';
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'minus';
    $request->assetId = 'placeat';

    $response = $sdk->sdk->associateAssets($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateTimeSeriesToAssetProperty

Associates a time series (data stream) with an asset property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateTimeSeriesToAssetPropertyRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateTimeSeriesToAssetPropertyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateTimeSeriesToAssetPropertyRequest();
    $request->requestBody = new AssociateTimeSeriesToAssetPropertyRequestBody();
    $request->requestBody->clientToken = 'voluptatum';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';
    $request->alias = 'veritatis';
    $request->assetId = 'deserunt';
    $request->propertyId = 'perferendis';

    $response = $sdk->sdk->associateTimeSeriesToAssetProperty($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchAssociateProjectAssets

Associates a group (batch) of assets with an IoT SiteWise Monitor project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateProjectAssetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateProjectAssetsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchAssociateProjectAssetsRequest();
    $request->requestBody = new BatchAssociateProjectAssetsRequestBody();
    $request->requestBody->assetIds = [
        'repellendus',
        'sapiente',
    ];
    $request->requestBody->clientToken = 'quo';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'quod';
    $request->projectId = 'esse';

    $response = $sdk->sdk->batchAssociateProjectAssets($request);

    if ($response->batchAssociateProjectAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDisassociateProjectAssets

Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateProjectAssetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateProjectAssetsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDisassociateProjectAssetsRequest();
    $request->requestBody = new BatchDisassociateProjectAssetsRequestBody();
    $request->requestBody->assetIds = [
        'porro',
        'dolorum',
        'dicta',
    ];
    $request->requestBody->clientToken = 'nam';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';
    $request->projectId = 'beatae';

    $response = $sdk->sdk->batchDisassociateProjectAssets($request);

    if ($response->batchDisassociateProjectAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetAssetPropertyAggregates

Gets aggregated values (for example, average, minimum, and maximum) for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetAssetPropertyAggregatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetAssetPropertyAggregatesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetAssetPropertyAggregatesEntry;
use \OpenAPI\OpenAPI\Models\Shared\AggregateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\QualityEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOrderingEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetAssetPropertyAggregatesRequest();
    $request->requestBody = new BatchGetAssetPropertyAggregatesRequestBody();
    $request->requestBody->entries = [
        new BatchGetAssetPropertyAggregatesEntry(),
        new BatchGetAssetPropertyAggregatesEntry(),
    ];
    $request->requestBody->maxResults = 473600;
    $request->requestBody->nextToken = 'modi';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->maxResults = 'perferendis';
    $request->nextToken = 'ad';

    $response = $sdk->sdk->batchGetAssetPropertyAggregates($request);

    if ($response->batchGetAssetPropertyAggregatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetAssetPropertyValue

Gets the current value for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetAssetPropertyValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetAssetPropertyValueRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetAssetPropertyValueEntry;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetAssetPropertyValueRequest();
    $request->requestBody = new BatchGetAssetPropertyValueRequestBody();
    $request->requestBody->entries = [
        new BatchGetAssetPropertyValueEntry(),
        new BatchGetAssetPropertyValueEntry(),
        new BatchGetAssetPropertyValueEntry(),
    ];
    $request->requestBody->nextToken = 'sed';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';
    $request->nextToken = 'in';

    $response = $sdk->sdk->batchGetAssetPropertyValue($request);

    if ($response->batchGetAssetPropertyValueResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetAssetPropertyValueHistory

Gets the historical values for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetAssetPropertyValueHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetAssetPropertyValueHistoryRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetAssetPropertyValueHistoryEntry;
use \OpenAPI\OpenAPI\Models\Shared\QualityEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOrderingEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetAssetPropertyValueHistoryRequest();
    $request->requestBody = new BatchGetAssetPropertyValueHistoryRequestBody();
    $request->requestBody->entries = [
        new BatchGetAssetPropertyValueHistoryEntry(),
        new BatchGetAssetPropertyValueHistoryEntry(),
    ];
    $request->requestBody->maxResults = 613064;
    $request->requestBody->nextToken = 'iure';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->maxResults = 'laborum';
    $request->nextToken = 'dolores';

    $response = $sdk->sdk->batchGetAssetPropertyValueHistory($request);

    if ($response->batchGetAssetPropertyValueHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchPutAssetPropertyValue

<p>Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting data using the API</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> <important> <p>With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps outside of the inclusive range of [-7 days, +10 minutes] and returns a <code>TimestampOutOfRangeException</code> error.</p> <p>For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>, then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p> </important> <p>IoT SiteWise authorizes access to each <code>BatchPutAssetPropertyValue</code> entry individually. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-batchputassetpropertyvalue-action">BatchPutAssetPropertyValue authorization</a> in the <i>IoT SiteWise User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutAssetPropertyValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutAssetPropertyValueRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\PutAssetPropertyValueEntry;
use \OpenAPI\OpenAPI\Models\Shared\AssetPropertyValue;
use \OpenAPI\OpenAPI\Models\Shared\QualityEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeInNanos;
use \OpenAPI\OpenAPI\Models\Shared\Variant;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPutAssetPropertyValueRequest();
    $request->requestBody = new BatchPutAssetPropertyValueRequestBody();
    $request->requestBody->entries = [
        new PutAssetPropertyValueEntry(),
    ];
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->batchPutAssetPropertyValue($request);

    if ($response->batchPutAssetPropertyValueResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAccessPolicy

Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessPolicyRequestBodyAccessPolicyIdentity;
use \OpenAPI\OpenAPI\Models\Shared\GroupIdentity;
use \OpenAPI\OpenAPI\Models\Shared\IAMRoleIdentity;
use \OpenAPI\OpenAPI\Models\Shared\IAMUserIdentity;
use \OpenAPI\OpenAPI\Models\Shared\UserIdentity;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessPolicyRequestBodyAccessPolicyResource;
use \OpenAPI\OpenAPI\Models\Shared\PortalResource;
use \OpenAPI\OpenAPI\Models\Shared\ProjectResource;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccessPolicyRequest();
    $request->requestBody = new CreateAccessPolicyRequestBody();
    $request->requestBody->accessPolicyIdentity = new CreateAccessPolicyRequestBodyAccessPolicyIdentity();
    $request->requestBody->accessPolicyIdentity->group = new GroupIdentity();
    $request->requestBody->accessPolicyIdentity->group->id = '907aff1a-3a2f-4a94-a773-9251aa52c3f5';
    $request->requestBody->accessPolicyIdentity->iamRole = new IAMRoleIdentity();
    $request->requestBody->accessPolicyIdentity->iamRole->arn = 'id';
    $request->requestBody->accessPolicyIdentity->iamUser = new IAMUserIdentity();
    $request->requestBody->accessPolicyIdentity->iamUser->arn = 'possimus';
    $request->requestBody->accessPolicyIdentity->user = new UserIdentity();
    $request->requestBody->accessPolicyIdentity->user->id = '019da1ff-e78f-4097-b007-4f15471b5e6e';
    $request->requestBody->accessPolicyPermission = CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum::ADMINISTRATOR;
    $request->requestBody->accessPolicyResource = new CreateAccessPolicyRequestBodyAccessPolicyResource();
    $request->requestBody->accessPolicyResource->portal = new PortalResource();
    $request->requestBody->accessPolicyResource->portal->id = '3b99d488-e1e9-41e4-90ad-2abd44269802';
    $request->requestBody->accessPolicyResource->project = new ProjectResource();
    $request->requestBody->accessPolicyResource->project->id = 'd502a94b-b4f6-43c9-a9e9-a3efa77dfb14';
    $request->requestBody->clientToken = 'cumque';
    $request->requestBody->tags = [
        'ea' => 'aliquid',
        'laborum' => 'accusamus',
        'non' => 'occaecati',
        'enim' => 'accusamus',
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->createAccessPolicy($request);

    if ($response->createAccessPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAsset

Creates an asset from an existing asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html">Creating assets</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssetRequest();
    $request->requestBody = new CreateAssetRequestBody();
    $request->requestBody->assetDescription = 'sapiente';
    $request->requestBody->assetModelId = 'amet';
    $request->requestBody->assetName = 'deserunt';
    $request->requestBody->clientToken = 'nisi';
    $request->requestBody->tags = [
        'natus' => 'omnis',
        'molestiae' => 'perferendis',
    ];
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->createAsset($request);

    if ($response->createAssetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAssetModel

Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining asset models</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetModelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetModelRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AssetModelCompositeModelDefinition;
use \OpenAPI\OpenAPI\Models\Shared\AssetModelHierarchyDefinition;
use \OpenAPI\OpenAPI\Models\Shared\AssetModelPropertyDefinition;
use \OpenAPI\OpenAPI\Models\Shared\PropertyDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyType;
use \OpenAPI\OpenAPI\Models\Shared\Attribute;
use \OpenAPI\OpenAPI\Models\Shared\Measurement;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementProcessingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingConfigStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\MetricProcessingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ComputeLocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExpressionVariable;
use \OpenAPI\OpenAPI\Models\Shared\VariableValue;
use \OpenAPI\OpenAPI\Models\Shared\MetricWindow;
use \OpenAPI\OpenAPI\Models\Shared\TumblingWindow;
use \OpenAPI\OpenAPI\Models\Shared\Transform;
use \OpenAPI\OpenAPI\Models\Shared\TransformProcessingConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssetModelRequest();
    $request->requestBody = new CreateAssetModelRequestBody();
    $request->requestBody->assetModelCompositeModels = [
        new AssetModelCompositeModelDefinition(),
        new AssetModelCompositeModelDefinition(),
        new AssetModelCompositeModelDefinition(),
    ];
    $request->requestBody->assetModelDescription = 'nobis';
    $request->requestBody->assetModelHierarchies = [
        new AssetModelHierarchyDefinition(),
        new AssetModelHierarchyDefinition(),
    ];
    $request->requestBody->assetModelName = 'vero';
    $request->requestBody->assetModelProperties = [
        new AssetModelPropertyDefinition(),
    ];
    $request->requestBody->clientToken = 'architecto';
    $request->requestBody->tags = [
        'et' => 'excepturi',
        'ullam' => 'provident',
    ];
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->createAssetModel($request);

    if ($response->createAssetModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBulkImportJob

<p>Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/CreateBulkImportJob.html">Create a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <important> <p>You must enable IoT SiteWise to export data to Amazon S3 before you create a bulk import job. For more information about how to configure storage settings, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html">PutStorageConfiguration</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBulkImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBulkImportJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateBulkImportJobRequestBodyErrorReportLocation;
use \OpenAPI\OpenAPI\Models\Shared\File;
use \OpenAPI\OpenAPI\Models\Operations\CreateBulkImportJobRequestBodyJobConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FileFormat;
use \OpenAPI\OpenAPI\Models\Shared\Csv;
use \OpenAPI\OpenAPI\Models\Shared\ColumnNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBulkImportJobRequest();
    $request->requestBody = new CreateBulkImportJobRequestBody();
    $request->requestBody->errorReportLocation = new CreateBulkImportJobRequestBodyErrorReportLocation();
    $request->requestBody->errorReportLocation->bucket = 'eum';
    $request->requestBody->errorReportLocation->prefix = 'dolor';
    $request->requestBody->files = [
        new File(),
        new File(),
        new File(),
        new File(),
    ];
    $request->requestBody->jobConfiguration = new CreateBulkImportJobRequestBodyJobConfiguration();
    $request->requestBody->jobConfiguration->fileFormat = new FileFormat();
    $request->requestBody->jobConfiguration->fileFormat->csv = new Csv();
    $request->requestBody->jobConfiguration->fileFormat->csv->columnNames = [
        ColumnNameEnum::PROPERTY_ID,
    ];
    $request->requestBody->jobName = 'quasi';
    $request->requestBody->jobRoleArn = 'iure';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->createBulkImportJob($request);

    if ($response->createBulkImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDashboard

Creates a dashboard in an IoT SiteWise Monitor project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDashboardRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDashboardRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDashboardRequest();
    $request->requestBody = new CreateDashboardRequestBody();
    $request->requestBody->clientToken = 'architecto';
    $request->requestBody->dashboardDefinition = 'architecto';
    $request->requestBody->dashboardDescription = 'repudiandae';
    $request->requestBody->dashboardName = 'ullam';
    $request->requestBody->projectId = 'expedita';
    $request->requestBody->tags = [
        'repellat' => 'quibusdam',
        'sed' => 'saepe',
    ];
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'sunt';

    $response = $sdk->sdk->createDashboard($request);

    if ($response->createDashboardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGateway

Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGatewayRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGatewayRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateGatewayRequestBodyGatewayPlatform;
use \OpenAPI\OpenAPI\Models\Shared\Greengrass;
use \OpenAPI\OpenAPI\Models\Shared\GreengrassV2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGatewayRequest();
    $request->requestBody = new CreateGatewayRequestBody();
    $request->requestBody->gatewayName = 'quo';
    $request->requestBody->gatewayPlatform = new CreateGatewayRequestBodyGatewayPlatform();
    $request->requestBody->gatewayPlatform->greengrass = new Greengrass();
    $request->requestBody->gatewayPlatform->greengrass->groupArn = 'illum';
    $request->requestBody->gatewayPlatform->greengrassV2 = new GreengrassV2();
    $request->requestBody->gatewayPlatform->greengrassV2->coreDeviceThingName = 'pariatur';
    $request->requestBody->tags = [
        'ea' => 'excepturi',
        'odit' => 'ea',
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->createGateway($request);

    if ($response->createGatewayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPortal

<p>Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM to authenticate portal users and manage user permissions.</p> <note> <p>Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or removing portal administrators</a> in the <i>IoT SiteWise User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortalRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortalRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortalRequestBodyAlarms;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortalRequestBodyPortalAuthModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortalRequestBodyPortalLogoImageFile;
use \OpenAPI\OpenAPI\Models\Shared\ImageFileTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePortalRequest();
    $request->requestBody = new CreatePortalRequestBody();
    $request->requestBody->alarms = new CreatePortalRequestBodyAlarms();
    $request->requestBody->alarms->alarmRoleArn = 'voluptatibus';
    $request->requestBody->alarms->notificationLambdaArn = 'perferendis';
    $request->requestBody->clientToken = 'fugiat';
    $request->requestBody->notificationSenderEmail = 'amet';
    $request->requestBody->portalAuthMode = CreatePortalRequestBodyPortalAuthModeEnum::IAM;
    $request->requestBody->portalContactEmail = 'cumque';
    $request->requestBody->portalDescription = 'corporis';
    $request->requestBody->portalLogoImageFile = new CreatePortalRequestBodyPortalLogoImageFile();
    $request->requestBody->portalLogoImageFile->data = 'hic';
    $request->requestBody->portalLogoImageFile->type = ImageFileTypeEnum::PNG;
    $request->requestBody->portalName = 'libero';
    $request->requestBody->roleArn = 'nobis';
    $request->requestBody->tags = [
        'quis' => 'totam',
    ];
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->createPortal($request);

    if ($response->createPortalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProject

<p>Creates a project in the specified portal.</p> <note> <p>Make sure that the project name and description don't contain confidential information.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectRequest();
    $request->requestBody = new CreateProjectRequestBody();
    $request->requestBody->clientToken = 'minus';
    $request->requestBody->portalId = 'quam';
    $request->requestBody->projectDescription = 'dolor';
    $request->requestBody->projectName = 'vero';
    $request->requestBody->tags = [
        'hic' => 'recusandae',
        'omnis' => 'facilis',
    ];
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'eaque';

    $response = $sdk->sdk->createProject($request);

    if ($response->createProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccessPolicy

Deletes an access policy that grants the specified identity access to the specified IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccessPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccessPolicyRequest();
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'iste';
    $request->accessPolicyId = 'dolorum';
    $request->clientToken = 'deleniti';

    $response = $sdk->sdk->deleteAccessPolicy($request);

    if ($response->deleteAccessPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAsset

<p>Deletes an asset. This action can't be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>. </p> <note> <p>You can't delete an asset that's associated to another asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAssetRequest();
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'quos';
    $request->assetId = 'aliquid';
    $request->clientToken = 'dolorem';

    $response = $sdk->sdk->deleteAsset($request);

    if ($response->deleteAssetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAssetModel

Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssetModelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAssetModelRequest();
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'cum';
    $request->assetModelId = 'voluptate';
    $request->clientToken = 'dignissimos';

    $response = $sdk->sdk->deleteAssetModel($request);

    if ($response->deleteAssetModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDashboard

Deletes a dashboard from IoT SiteWise Monitor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDashboardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDashboardRequest();
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->clientToken = 'iure';
    $request->dashboardId = 'odio';

    $response = $sdk->sdk->deleteDashboard($request);

    if ($response->deleteDashboardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGateway

Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGatewayRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGatewayRequest();
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'eos';
    $request->gatewayId = 'atque';

    $response = $sdk->sdk->deleteGateway($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePortal

Deletes a portal from IoT SiteWise Monitor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePortalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePortalRequest();
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->clientToken = 'dolorum';
    $request->portalId = 'deleniti';

    $response = $sdk->sdk->deletePortal($request);

    if ($response->deletePortalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProject

Deletes a project from IoT SiteWise Monitor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectRequest();
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->clientToken = 'id';
    $request->projectId = 'saepe';

    $response = $sdk->sdk->deleteProject($request);

    if ($response->deleteProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTimeSeries

<p>Deletes a time series (data stream). If you delete a time series that's associated with an asset property, the asset property still exists, but the time series will no longer be associated with this asset property.</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTimeSeriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTimeSeriesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTimeSeriesRequest();
    $request->requestBody = new DeleteTimeSeriesRequestBody();
    $request->requestBody->clientToken = 'eius';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'saepe';
    $request->alias = 'suscipit';
    $request->assetId = 'deserunt';
    $request->propertyId = 'provident';

    $response = $sdk->sdk->deleteTimeSeries($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAccessPolicy

Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccessPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAccessPolicyRequest();
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->accessPolicyId = 'tempora';

    $response = $sdk->sdk->describeAccessPolicy($request);

    if ($response->describeAccessPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAsset

Retrieves information about an asset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAssetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAssetRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'esse';
    $request->assetId = 'harum';
    $request->excludeProperties = false;

    $response = $sdk->sdk->describeAsset($request);

    if ($response->describeAssetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAssetModel

Retrieves information about an asset model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAssetModelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAssetModelRequest();
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->assetModelId = 'numquam';
    $request->excludeProperties = false;

    $response = $sdk->sdk->describeAssetModel($request);

    if ($response->describeAssetModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAssetProperty

<p>Retrieves information about an asset property.</p> <note> <p>When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation's response includes the new default value.</p> </note> <p>This operation doesn't return the value of the asset property. To get the value of an asset property, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html">GetAssetPropertyValue</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAssetPropertyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAssetPropertyRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'expedita';
    $request->assetId = 'neque';
    $request->propertyId = 'sed';

    $response = $sdk->sdk->describeAssetProperty($request);

    if ($response->describeAssetPropertyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBulkImportJob

Retrieves information about a bulk import job request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/DescribeBulkImportJob.html">Describe a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBulkImportJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBulkImportJobRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->jobId = 'qui';

    $response = $sdk->sdk->describeBulkImportJob($request);

    if ($response->describeBulkImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDashboard

Retrieves information about a dashboard.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDashboardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDashboardRequest();
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'totam';
    $request->dashboardId = 'incidunt';

    $response = $sdk->sdk->describeDashboard($request);

    if ($response->describeDashboardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDefaultEncryptionConfiguration

Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified Region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDefaultEncryptionConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDefaultEncryptionConfigurationRequest();
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestias';

    $response = $sdk->sdk->describeDefaultEncryptionConfiguration($request);

    if ($response->describeDefaultEncryptionConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeGateway

Retrieves information about a gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGatewayRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeGatewayRequest();
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'sunt';
    $request->gatewayId = 'ullam';

    $response = $sdk->sdk->describeGateway($request);

    if ($response->describeGatewayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeGatewayCapabilityConfiguration

Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGatewayCapabilityConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeGatewayCapabilityConfigurationRequest();
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'et';
    $request->capabilityNamespace = 'saepe';
    $request->gatewayId = 'ipsum';

    $response = $sdk->sdk->describeGatewayCapabilityConfiguration($request);

    if ($response->describeGatewayCapabilityConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLoggingOptions

Retrieves the current IoT SiteWise logging options.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLoggingOptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLoggingOptionsRequest();
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->describeLoggingOptions($request);

    if ($response->describeLoggingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePortal

Retrieves information about a portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePortalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePortalRequest();
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'quae';
    $request->portalId = 'aut';

    $response = $sdk->sdk->describePortal($request);

    if ($response->describePortalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProject

Retrieves information about a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProjectRequest();
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->projectId = 'ut';

    $response = $sdk->sdk->describeProject($request);

    if ($response->describeProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStorageConfiguration

Retrieves information about the storage configuration for IoT SiteWise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStorageConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStorageConfigurationRequest();
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->describeStorageConfiguration($request);

    if ($response->describeStorageConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTimeSeries

<p>Retrieves information about a time series (data stream).</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTimeSeriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTimeSeriesRequest();
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'delectus';
    $request->alias = 'voluptate';
    $request->assetId = 'consectetur';
    $request->propertyId = 'vero';

    $response = $sdk->sdk->describeTimeSeries($request);

    if ($response->describeTimeSeriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateAssets

Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateAssetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateAssetsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateAssetsRequest();
    $request->requestBody = new DisassociateAssetsRequestBody();
    $request->requestBody->childAssetId = 'tenetur';
    $request->requestBody->clientToken = 'dignissimos';
    $request->requestBody->hierarchyId = 'hic';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->assetId = 'dolore';

    $response = $sdk->sdk->disassociateAssets($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateTimeSeriesFromAssetProperty

Disassociates a time series (data stream) from an asset property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateTimeSeriesFromAssetPropertyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateTimeSeriesFromAssetPropertyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateTimeSeriesFromAssetPropertyRequest();
    $request->requestBody = new DisassociateTimeSeriesFromAssetPropertyRequestBody();
    $request->requestBody->clientToken = 'quibusdam';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'exercitationem';
    $request->alias = 'nulla';
    $request->assetId = 'fugit';
    $request->propertyId = 'porro';

    $response = $sdk->sdk->disassociateTimeSeriesFromAssetProperty($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssetPropertyAggregates

<p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetPropertyAggregatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AggregateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetPropertyAggregatesTimeOrderingEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssetPropertyAggregatesRequest();
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'officia';
    $request->aggregateTypes = [
        AggregateTypeEnum::MAXIMUM,
        AggregateTypeEnum::MAXIMUM,
    ];
    $request->assetId = 'aspernatur';
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-06T22:14:54.933Z');
    $request->maxResults = 297842;
    $request->nextToken = 'ratione';
    $request->propertyAlias = 'ex';
    $request->propertyId = 'laudantium';
    $request->qualities = [
        QualityEnum::GOOD,
    ];
    $request->resolution = 'maiores';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-05T18:23:03.713Z');
    $request->timeOrdering = GetAssetPropertyAggregatesTimeOrderingEnum::DESCENDING;

    $response = $sdk->sdk->getAssetPropertyAggregates($request);

    if ($response->getAssetPropertyAggregatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssetPropertyValue

<p>Gets an asset property's current value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetPropertyValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssetPropertyValueRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'ea';
    $request->assetId = 'impedit';
    $request->propertyAlias = 'corporis';
    $request->propertyId = 'veniam';

    $response = $sdk->sdk->getAssetPropertyValue($request);

    if ($response->getAssetPropertyValueResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssetPropertyValueHistory

<p>Gets the history of an asset property's values. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetPropertyValueHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetPropertyValueHistoryTimeOrderingEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssetPropertyValueHistoryRequest();
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->assetId = 'aspernatur';
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-12T11:58:39.585Z');
    $request->maxResults = 952871;
    $request->nextToken = 'libero';
    $request->propertyAlias = 'aut';
    $request->propertyId = 'aut';
    $request->qualities = [
        QualityEnum::UNCERTAIN,
        QualityEnum::GOOD,
        QualityEnum::GOOD,
    ];
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-05T22:09:33.495Z');
    $request->timeOrdering = GetAssetPropertyValueHistoryTimeOrderingEnum::ASCENDING;

    $response = $sdk->sdk->getAssetPropertyValueHistory($request);

    if ($response->getAssetPropertyValueHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInterpolatedAssetPropertyValues

<p>Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data.</p> <p>For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInterpolatedAssetPropertyValuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInterpolatedAssetPropertyValuesQualityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInterpolatedAssetPropertyValuesRequest();
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'autem';
    $request->assetId = 'nobis';
    $request->endTimeInSeconds = 557369;
    $request->endTimeOffsetInNanos = 829603;
    $request->intervalInSeconds = 860552;
    $request->intervalWindowInSeconds = 379034;
    $request->maxResults = 727044;
    $request->nextToken = 'quasi';
    $request->propertyAlias = 'tempora';
    $request->propertyId = 'numquam';
    $request->quality = GetInterpolatedAssetPropertyValuesQualityEnum::GOOD;
    $request->startTimeInSeconds = 591935;
    $request->startTimeOffsetInNanos = 55374;
    $request->type = 'molestiae';

    $response = $sdk->sdk->getInterpolatedAssetPropertyValues($request);

    if ($response->getInterpolatedAssetPropertyValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccessPolicies

Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccessPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAccessPoliciesIdentityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAccessPoliciesResourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccessPoliciesRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'fuga';
    $request->iamArn = 'reprehenderit';
    $request->identityId = 'quidem';
    $request->identityType = ListAccessPoliciesIdentityTypeEnum::IAM;
    $request->maxResults = 283519;
    $request->nextToken = 'eum';
    $request->resourceId = 'suscipit';
    $request->resourceType = ListAccessPoliciesResourceTypeEnum::PROJECT;

    $response = $sdk->sdk->listAccessPolicies($request);

    if ($response->listAccessPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssetModelProperties

Retrieves a paginated list of properties associated with an asset model. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssetModelPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssetModelPropertiesFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssetModelPropertiesRequest();
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'quidem';
    $request->assetModelId = 'neque';
    $request->filter = ListAssetModelPropertiesFilterEnum::BASE;
    $request->maxResults = 847276;
    $request->nextToken = 'quo';

    $response = $sdk->sdk->listAssetModelProperties($request);

    if ($response->listAssetModelPropertiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssetModels

Retrieves a paginated list of summaries of all asset models.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssetModelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssetModelsRequest();
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->maxResults = 272822;
    $request->nextToken = 'debitis';

    $response = $sdk->sdk->listAssetModels($request);

    if ($response->listAssetModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssetProperties

Retrieves a paginated list of properties associated with an asset. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssetPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssetPropertiesFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssetPropertiesRequest();
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->assetId = 'distinctio';
    $request->filter = ListAssetPropertiesFilterEnum::BASE;
    $request->maxResults = 490819;
    $request->nextToken = 'inventore';

    $response = $sdk->sdk->listAssetProperties($request);

    if ($response->listAssetPropertiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssetRelationships

Retrieves a paginated list of asset relationships for an asset. You can use this operation to identify an asset's root asset and all associated assets between that asset and its root.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssetRelationshipsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssetRelationshipsTraversalTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssetRelationshipsRequest();
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'commodi';
    $request->assetId = 'sapiente';
    $request->maxResults = 174112;
    $request->nextToken = 'deserunt';
    $request->traversalType = ListAssetRelationshipsTraversalTypeEnum::PATH_TO_ROOT;

    $response = $sdk->sdk->listAssetRelationships($request);

    if ($response->listAssetRelationshipsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssets

<p>Retrieves a paginated list of asset summaries.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List assets based on a specific asset model.</p> </li> <li> <p>List top-level assets.</p> </li> </ul> <p>You can't use this operation to list all assets. To retrieve summaries for all of your assets, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html">ListAssetModels</a> to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssetsFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssetsRequest();
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->assetModelId = 'deleniti';
    $request->filter = ListAssetsFilterEnum::ALL;
    $request->maxResults = 681393;
    $request->nextToken = 'mollitia';

    $response = $sdk->sdk->listAssets($request);

    if ($response->listAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssociatedAssets

<p>Retrieves a paginated list of associated assets.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List child assets associated to a parent asset by a hierarchy that you specify.</p> </li> <li> <p>List an asset's parent asset.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociatedAssetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociatedAssetsTraversalDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssociatedAssetsRequest();
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->assetId = 'consequuntur';
    $request->hierarchyId = 'ratione';
    $request->maxResults = 129412;
    $request->nextToken = 'saepe';
    $request->traversalDirection = ListAssociatedAssetsTraversalDirectionEnum::CHILD;

    $response = $sdk->sdk->listAssociatedAssets($request);

    if ($response->listAssociatedAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBulkImportJobs

Retrieves a paginated list of bulk import job requests. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ListBulkImportJobs.html">List bulk import jobs (CLI)</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBulkImportJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBulkImportJobsFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBulkImportJobsRequest();
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'esse';
    $request->filter = ListBulkImportJobsFilterEnum::COMPLETED_WITH_FAILURES;
    $request->maxResults = 724168;
    $request->nextToken = 'vero';

    $response = $sdk->sdk->listBulkImportJobs($request);

    if ($response->listBulkImportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDashboards

Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDashboardsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDashboardsRequest();
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'rerum';
    $request->maxResults = 580197;
    $request->nextToken = 'minima';
    $request->projectId = 'distinctio';

    $response = $sdk->sdk->listDashboards($request);

    if ($response->listDashboardsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGateways

Retrieves a paginated list of gateways.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGatewaysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGatewaysRequest();
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->maxResults = 9766;
    $request->nextToken = 'minus';

    $response = $sdk->sdk->listGateways($request);

    if ($response->listGatewaysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPortals

Retrieves a paginated list of IoT SiteWise Monitor portals.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPortalsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPortalsRequest();
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'a';
    $request->maxResults = 857723;
    $request->nextToken = 'quas';

    $response = $sdk->sdk->listPortals($request);

    if ($response->listPortalsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProjectAssets

Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProjectAssetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProjectAssetsRequest();
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'possimus';
    $request->maxResults = 157632;
    $request->nextToken = 'eveniet';
    $request->projectId = 'asperiores';

    $response = $sdk->sdk->listProjectAssets($request);

    if ($response->listProjectAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProjects

Retrieves a paginated list of projects for an IoT SiteWise Monitor portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProjectsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProjectsRequest();
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->maxResults = 949298;
    $request->nextToken = 'quae';
    $request->portalId = 'earum';

    $response = $sdk->sdk->listProjects($request);

    if ($response->listProjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Retrieves the list of tags for an IoT SiteWise resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->resourceArn = 'aliquam';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTimeSeries

Retrieves a paginated list of time series (data streams).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTimeSeriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTimeSeriesTimeSeriesTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTimeSeriesRequest();
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'aut';
    $request->aliasPrefix = 'voluptatum';
    $request->assetId = 'qui';
    $request->maxResults = 845358;
    $request->nextToken = 'ex';
    $request->timeSeriesType = ListTimeSeriesTimeSeriesTypeEnum::DISASSOCIATED;

    $response = $sdk->sdk->listTimeSeries($request);

    if ($response->listTimeSeriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDefaultEncryptionConfiguration

Sets the default encryption configuration for the Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutDefaultEncryptionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutDefaultEncryptionConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDefaultEncryptionConfigurationRequest();
    $request->requestBody = new PutDefaultEncryptionConfigurationRequestBody();
    $request->requestBody->encryptionType = PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum::KMS_BASED_ENCRYPTION;
    $request->requestBody->kmsKeyId = 'dolorum';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->putDefaultEncryptionConfiguration($request);

    if ($response->putDefaultEncryptionConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putLoggingOptions

Sets logging options for IoT SiteWise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutLoggingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutLoggingOptionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutLoggingOptionsRequestBodyLoggingOptions;
use \OpenAPI\OpenAPI\Models\Shared\LoggingLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutLoggingOptionsRequest();
    $request->requestBody = new PutLoggingOptionsRequestBody();
    $request->requestBody->loggingOptions = new PutLoggingOptionsRequestBodyLoggingOptions();
    $request->requestBody->loggingOptions->level = LoggingLevelEnum::ERROR;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->putLoggingOptions($request);

    if ($response->putLoggingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putStorageConfiguration

Configures storage settings for IoT SiteWise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutStorageConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutStorageConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutStorageConfigurationRequestBodyDisassociatedDataStorageEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutStorageConfigurationRequestBodyMultiLayerStorage;
use \OpenAPI\OpenAPI\Models\Shared\CustomerManagedS3Storage;
use \OpenAPI\OpenAPI\Models\Operations\PutStorageConfigurationRequestBodyRetentionPeriod;
use \OpenAPI\OpenAPI\Models\Operations\PutStorageConfigurationRequestBodyStorageTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutStorageConfigurationRequest();
    $request->requestBody = new PutStorageConfigurationRequestBody();
    $request->requestBody->disassociatedDataStorage = PutStorageConfigurationRequestBodyDisassociatedDataStorageEnum::DISABLED;
    $request->requestBody->multiLayerStorage = new PutStorageConfigurationRequestBodyMultiLayerStorage();
    $request->requestBody->multiLayerStorage->customerManagedS3Storage = new CustomerManagedS3Storage();
    $request->requestBody->multiLayerStorage->customerManagedS3Storage->roleArn = 'aut';
    $request->requestBody->multiLayerStorage->customerManagedS3Storage->s3ResourceArn = 'laudantium';
    $request->requestBody->retentionPeriod = new PutStorageConfigurationRequestBodyRetentionPeriod();
    $request->requestBody->retentionPeriod->numberOfDays = 428796;
    $request->requestBody->retentionPeriod->unlimited = false;
    $request->requestBody->storageType = PutStorageConfigurationRequestBodyStorageTypeEnum::MULTI_LAYER_STORAGE;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->putStorageConfiguration($request);

    if ($response->putStorageConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'explicabo' => 'voluptas',
        'aut' => 'dignissimos',
        'dicta' => 'maiores',
        'natus' => 'velit',
    ];
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->resourceArn = 'repellendus';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes a tag from an IoT SiteWise resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quae';
    $request->resourceArn = 'quaerat';
    $request->tagKeys = [
        'quod',
        'labore',
        'ab',
        'adipisci',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccessPolicy

Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor portal or project resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccessPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccessPolicyRequestBodyAccessPolicyIdentity;
use \OpenAPI\OpenAPI\Models\Shared\GroupIdentity;
use \OpenAPI\OpenAPI\Models\Shared\IAMRoleIdentity;
use \OpenAPI\OpenAPI\Models\Shared\IAMUserIdentity;
use \OpenAPI\OpenAPI\Models\Shared\UserIdentity;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccessPolicyRequestBodyAccessPolicyResource;
use \OpenAPI\OpenAPI\Models\Shared\PortalResource;
use \OpenAPI\OpenAPI\Models\Shared\ProjectResource;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccessPolicyRequest();
    $request->requestBody = new UpdateAccessPolicyRequestBody();
    $request->requestBody->accessPolicyIdentity = new UpdateAccessPolicyRequestBodyAccessPolicyIdentity();
    $request->requestBody->accessPolicyIdentity->group = new GroupIdentity();
    $request->requestBody->accessPolicyIdentity->group->id = 'aa63aae8-d678-464d-bb67-5fd5e60b375e';
    $request->requestBody->accessPolicyIdentity->iamRole = new IAMRoleIdentity();
    $request->requestBody->accessPolicyIdentity->iamRole->arn = 'facere';
    $request->requestBody->accessPolicyIdentity->iamUser = new IAMUserIdentity();
    $request->requestBody->accessPolicyIdentity->iamUser->arn = 'numquam';
    $request->requestBody->accessPolicyIdentity->user = new UserIdentity();
    $request->requestBody->accessPolicyIdentity->user->id = 'f6fbee41-f333-417f-a35b-60eb1ea42655';
    $request->requestBody->accessPolicyPermission = UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum::ADMINISTRATOR;
    $request->requestBody->accessPolicyResource = new UpdateAccessPolicyRequestBodyAccessPolicyResource();
    $request->requestBody->accessPolicyResource->portal = new PortalResource();
    $request->requestBody->accessPolicyResource->portal->id = 'ba3c2874-4ed5-43b8-8f3a-8d8f5c0b2f2f';
    $request->requestBody->accessPolicyResource->project = new ProjectResource();
    $request->requestBody->accessPolicyResource->project->id = 'b7b194a2-76b2-4691-afe1-f08f4294e369';
    $request->requestBody->clientToken = 'quos';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'sit';
    $request->accessPolicyId = 'non';

    $response = $sdk->sdk->updateAccessPolicy($request);

    if ($response->updateAccessPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAsset

Updates an asset's name. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAssetRequest();
    $request->requestBody = new UpdateAssetRequestBody();
    $request->requestBody->assetDescription = 'officiis';
    $request->requestBody->assetName = 'praesentium';
    $request->requestBody->clientToken = 'facilis';
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'nobis';
    $request->assetId = 'error';

    $response = $sdk->sdk->updateAsset($request);

    if ($response->updateAssetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAssetModel

<p>Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.</p> <important> <p>This operation overwrites the existing model with the provided model. To avoid deleting your asset model's properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p> <p>If you remove a property from an asset model, IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, IoT SiteWise disassociates every asset associated with that hierarchy. You can't change the type or data type of an existing property.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssetModelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssetModelRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AssetModelCompositeModel;
use \OpenAPI\OpenAPI\Models\Shared\AssetModelHierarchy;
use \OpenAPI\OpenAPI\Models\Shared\AssetModelProperty;
use \OpenAPI\OpenAPI\Models\Shared\PropertyDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyType;
use \OpenAPI\OpenAPI\Models\Shared\Attribute;
use \OpenAPI\OpenAPI\Models\Shared\Measurement;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementProcessingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingConfigStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\MetricProcessingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ComputeLocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExpressionVariable;
use \OpenAPI\OpenAPI\Models\Shared\VariableValue;
use \OpenAPI\OpenAPI\Models\Shared\MetricWindow;
use \OpenAPI\OpenAPI\Models\Shared\TumblingWindow;
use \OpenAPI\OpenAPI\Models\Shared\Transform;
use \OpenAPI\OpenAPI\Models\Shared\TransformProcessingConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAssetModelRequest();
    $request->requestBody = new UpdateAssetModelRequestBody();
    $request->requestBody->assetModelCompositeModels = [
        new AssetModelCompositeModel(),
        new AssetModelCompositeModel(),
    ];
    $request->requestBody->assetModelDescription = 'minima';
    $request->requestBody->assetModelHierarchies = [
        new AssetModelHierarchy(),
        new AssetModelHierarchy(),
        new AssetModelHierarchy(),
        new AssetModelHierarchy(),
    ];
    $request->requestBody->assetModelName = 'reiciendis';
    $request->requestBody->assetModelProperties = [
        new AssetModelProperty(),
        new AssetModelProperty(),
        new AssetModelProperty(),
        new AssetModelProperty(),
    ];
    $request->requestBody->clientToken = 'magni';
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'beatae';
    $request->assetModelId = 'laudantium';

    $response = $sdk->sdk->updateAssetModel($request);

    if ($response->updateAssetModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAssetProperty

<p>Updates an asset property's alias and notification state.</p> <important> <p>This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html">DescribeAssetProperty</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssetPropertyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssetPropertyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAssetPropertyRequest();
    $request->requestBody = new UpdateAssetPropertyRequestBody();
    $request->requestBody->clientToken = 'exercitationem';
    $request->requestBody->propertyAlias = 'praesentium';
    $request->requestBody->propertyNotificationState = UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum::DISABLED;
    $request->requestBody->propertyUnit = 'laboriosam';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'neque';
    $request->assetId = 'dolorum';
    $request->propertyId = 'nostrum';

    $response = $sdk->sdk->updateAssetProperty($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDashboard

Updates an IoT SiteWise Monitor dashboard.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDashboardRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDashboardRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDashboardRequest();
    $request->requestBody = new UpdateDashboardRequestBody();
    $request->requestBody->clientToken = 'officia';
    $request->requestBody->dashboardDefinition = 'dolorum';
    $request->requestBody->dashboardDescription = 'corrupti';
    $request->requestBody->dashboardName = 'accusamus';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'culpa';
    $request->dashboardId = 'expedita';

    $response = $sdk->sdk->updateDashboard($request);

    if ($response->updateDashboardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGateway

Updates a gateway's name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGatewayRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGatewayRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGatewayRequest();
    $request->requestBody = new UpdateGatewayRequestBody();
    $request->requestBody->gatewayName = 'magnam';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->gatewayId = 'corporis';

    $response = $sdk->sdk->updateGateway($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGatewayCapabilityConfiguration

Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGatewayCapabilityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGatewayCapabilityConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGatewayCapabilityConfigurationRequest();
    $request->requestBody = new UpdateGatewayCapabilityConfigurationRequestBody();
    $request->requestBody->capabilityConfiguration = 'et';
    $request->requestBody->capabilityNamespace = 'blanditiis';
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'error';
    $request->gatewayId = 'consequatur';

    $response = $sdk->sdk->updateGatewayCapabilityConfiguration($request);

    if ($response->updateGatewayCapabilityConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePortal

Updates an IoT SiteWise Monitor portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortalRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortalRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortalRequestBodyAlarms;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortalRequestBodyPortalLogoImage;
use \OpenAPI\OpenAPI\Models\Shared\ImageFile;
use \OpenAPI\OpenAPI\Models\Shared\ImageFileTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePortalRequest();
    $request->requestBody = new UpdatePortalRequestBody();
    $request->requestBody->alarms = new UpdatePortalRequestBodyAlarms();
    $request->requestBody->alarms->alarmRoleArn = 'incidunt';
    $request->requestBody->alarms->notificationLambdaArn = 'reiciendis';
    $request->requestBody->clientToken = 'dolorem';
    $request->requestBody->notificationSenderEmail = 'harum';
    $request->requestBody->portalContactEmail = 'dicta';
    $request->requestBody->portalDescription = 'architecto';
    $request->requestBody->portalLogoImage = new UpdatePortalRequestBodyPortalLogoImage();
    $request->requestBody->portalLogoImage->file = new ImageFile();
    $request->requestBody->portalLogoImage->file->data = 'occaecati';
    $request->requestBody->portalLogoImage->file->type = ImageFileTypeEnum::PNG;
    $request->requestBody->portalLogoImage->id = '4b8abf60-3a79-4f9d-be0a-b7da8a50ce18';
    $request->requestBody->portalName = 'reprehenderit';
    $request->requestBody->roleArn = 'asperiores';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'amet';
    $request->portalId = 'assumenda';

    $response = $sdk->sdk->updatePortal($request);

    if ($response->updatePortalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProject

Updates an IoT SiteWise Monitor project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectRequest();
    $request->requestBody = new UpdateProjectRequestBody();
    $request->requestBody->clientToken = 'ea';
    $request->requestBody->projectDescription = 'atque';
    $request->requestBody->projectName = 'error';
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'ex';
    $request->projectId = 'maiores';

    $response = $sdk->sdk->updateProject($request);

    if ($response->updateProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
