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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateAssetsRequest;
import org.openapis.openapi.models.operations.AssociateAssetsRequestBody;
import org.openapis.openapi.models.operations.AssociateAssetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateAssetsRequest req = new AssociateAssetsRequest(                new AssociateAssetsRequestBody("magnam", "debitis") {{
                                clientToken = "ipsa";
                            }};, "delectus") {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            AssociateAssetsResponse res = sdk.sdk.associateAssets(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateTimeSeriesToAssetProperty

Associates a time series (data stream) with an asset property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateTimeSeriesToAssetPropertyRequest;
import org.openapis.openapi.models.operations.AssociateTimeSeriesToAssetPropertyRequestBody;
import org.openapis.openapi.models.operations.AssociateTimeSeriesToAssetPropertyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateTimeSeriesToAssetPropertyRequest req = new AssociateTimeSeriesToAssetPropertyRequest(                new AssociateTimeSeriesToAssetPropertyRequestBody() {{
                                clientToken = "nisi";
                            }};, "recusandae", "temporibus", "ab") {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "deserunt";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "sapiente";
            }};            

            AssociateTimeSeriesToAssetPropertyResponse res = sdk.sdk.associateTimeSeriesToAssetProperty(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchAssociateProjectAssets

Associates a group (batch) of assets with an IoT SiteWise Monitor project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchAssociateProjectAssetsRequest;
import org.openapis.openapi.models.operations.BatchAssociateProjectAssetsRequestBody;
import org.openapis.openapi.models.operations.BatchAssociateProjectAssetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchAssociateProjectAssetsRequest req = new BatchAssociateProjectAssetsRequest(                new BatchAssociateProjectAssetsRequestBody(                new String[]{{
                                                add("at"),
                                            }}) {{
                                clientToken = "at";
                            }};, "maiores") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
            }};            

            BatchAssociateProjectAssetsResponse res = sdk.sdk.batchAssociateProjectAssets(req);

            if (res.batchAssociateProjectAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDisassociateProjectAssets

Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDisassociateProjectAssetsRequest;
import org.openapis.openapi.models.operations.BatchDisassociateProjectAssetsRequestBody;
import org.openapis.openapi.models.operations.BatchDisassociateProjectAssetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDisassociateProjectAssetsRequest req = new BatchDisassociateProjectAssetsRequest(                new BatchDisassociateProjectAssetsRequestBody(                new String[]{{
                                                add("officia"),
                                                add("occaecati"),
                                                add("fugit"),
                                            }}) {{
                                clientToken = "deleniti";
                            }};, "hic") {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            BatchDisassociateProjectAssetsResponse res = sdk.sdk.batchDisassociateProjectAssets(req);

            if (res.batchDisassociateProjectAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetAssetPropertyAggregates

Gets aggregated values (for example, average, minimum, and maximum) for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetAssetPropertyAggregatesRequest;
import org.openapis.openapi.models.operations.BatchGetAssetPropertyAggregatesRequestBody;
import org.openapis.openapi.models.operations.BatchGetAssetPropertyAggregatesResponse;
import org.openapis.openapi.models.shared.AggregateTypeEnum;
import org.openapis.openapi.models.shared.BatchGetAssetPropertyAggregatesEntry;
import org.openapis.openapi.models.shared.QualityEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeOrderingEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetAssetPropertyAggregatesRequest req = new BatchGetAssetPropertyAggregatesRequest(                new BatchGetAssetPropertyAggregatesRequestBody(                new org.openapis.openapi.models.shared.BatchGetAssetPropertyAggregatesEntry[]{{
                                                add(new BatchGetAssetPropertyAggregatesEntry(                new org.openapis.openapi.models.shared.AggregateTypeEnum[]{{
                                                                    add(AggregateTypeEnum.MAXIMUM),
                                                                    add(AggregateTypeEnum.MINIMUM),
                                                                }}, OffsetDateTime.parse("2022-02-05T15:25:35.140Z"), "quidem", "architecto", OffsetDateTime.parse("2022-01-12T00:28:21.182Z")) {{
                                                    aggregateTypes = new org.openapis.openapi.models.shared.AggregateTypeEnum[]{{
                                                        add(AggregateTypeEnum.COUNT),
                                                        add(AggregateTypeEnum.MINIMUM),
                                                    }};
                                                    assetId = "aspernatur";
                                                    endDate = OffsetDateTime.parse("2022-09-04T16:31:28.618Z");
                                                    entryId = "natus";
                                                    propertyAlias = "sed";
                                                    propertyId = "iste";
                                                    qualities = new org.openapis.openapi.models.shared.QualityEnum[]{{
                                                        add(QualityEnum.BAD),
                                                    }};
                                                    resolution = "laboriosam";
                                                    startDate = OffsetDateTime.parse("2020-04-17T15:42:43.722Z");
                                                    timeOrdering = TimeOrderingEnum.DESCENDING;
                                                }}),
                                                add(new BatchGetAssetPropertyAggregatesEntry(                new org.openapis.openapi.models.shared.AggregateTypeEnum[]{{
                                                                    add(AggregateTypeEnum.AVERAGE),
                                                                    add(AggregateTypeEnum.MINIMUM),
                                                                    add(AggregateTypeEnum.COUNT),
                                                                    add(AggregateTypeEnum.MINIMUM),
                                                                }}, OffsetDateTime.parse("2022-01-02T17:10:32.894Z"), "mollitia", "occaecati", OffsetDateTime.parse("2022-08-02T18:07:51.623Z")) {{
                                                    aggregateTypes = new org.openapis.openapi.models.shared.AggregateTypeEnum[]{{
                                                        add(AggregateTypeEnum.MINIMUM),
                                                        add(AggregateTypeEnum.SUM),
                                                        add(AggregateTypeEnum.COUNT),
                                                    }};
                                                    assetId = "dolorem";
                                                    endDate = OffsetDateTime.parse("2022-11-14T22:36:19.385Z");
                                                    entryId = "nobis";
                                                    propertyAlias = "enim";
                                                    propertyId = "omnis";
                                                    qualities = new org.openapis.openapi.models.shared.QualityEnum[]{{
                                                        add(QualityEnum.GOOD),
                                                        add(QualityEnum.BAD),
                                                    }};
                                                    resolution = "accusantium";
                                                    startDate = OffsetDateTime.parse("2022-05-14T11:45:33.094Z");
                                                    timeOrdering = TimeOrderingEnum.DESCENDING;
                                                }}),
                                                add(new BatchGetAssetPropertyAggregatesEntry(                new org.openapis.openapi.models.shared.AggregateTypeEnum[]{{
                                                                    add(AggregateTypeEnum.AVERAGE),
                                                                    add(AggregateTypeEnum.AVERAGE),
                                                                    add(AggregateTypeEnum.MINIMUM),
                                                                    add(AggregateTypeEnum.STANDARD_DEVIATION),
                                                                }}, OffsetDateTime.parse("2022-10-22T20:21:20.741Z"), "reiciendis", "voluptatibus", OffsetDateTime.parse("2021-08-05T19:50:46.898Z")) {{
                                                    aggregateTypes = new org.openapis.openapi.models.shared.AggregateTypeEnum[]{{
                                                        add(AggregateTypeEnum.MAXIMUM),
                                                        add(AggregateTypeEnum.COUNT),
                                                    }};
                                                    assetId = "error";
                                                    endDate = OffsetDateTime.parse("2022-08-30T15:03:11.112Z");
                                                    entryId = "vitae";
                                                    propertyAlias = "laborum";
                                                    propertyId = "animi";
                                                    qualities = new org.openapis.openapi.models.shared.QualityEnum[]{{
                                                        add(QualityEnum.GOOD),
                                                        add(QualityEnum.UNCERTAIN),
                                                    }};
                                                    resolution = "sequi";
                                                    startDate = OffsetDateTime.parse("2021-11-23T05:54:08.890Z");
                                                    timeOrdering = TimeOrderingEnum.DESCENDING;
                                                }}),
                                            }}) {{
                                maxResults = 509624L;
                                nextToken = "voluptatibus";
                            }};) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "voluptate";
                xAmzDate = "cum";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "reprehenderit";
                maxResults = "ut";
                nextToken = "maiores";
            }};            

            BatchGetAssetPropertyAggregatesResponse res = sdk.sdk.batchGetAssetPropertyAggregates(req);

            if (res.batchGetAssetPropertyAggregatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetAssetPropertyValue

Gets the current value for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetAssetPropertyValueRequest;
import org.openapis.openapi.models.operations.BatchGetAssetPropertyValueRequestBody;
import org.openapis.openapi.models.operations.BatchGetAssetPropertyValueResponse;
import org.openapis.openapi.models.shared.BatchGetAssetPropertyValueEntry;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetAssetPropertyValueRequest req = new BatchGetAssetPropertyValueRequest(                new BatchGetAssetPropertyValueRequestBody(                new org.openapis.openapi.models.shared.BatchGetAssetPropertyValueEntry[]{{
                                                add(new BatchGetAssetPropertyValueEntry("enim") {{
                                                    assetId = "dolore";
                                                    entryId = "iusto";
                                                    propertyAlias = "dicta";
                                                    propertyId = "harum";
                                                }}),
                                                add(new BatchGetAssetPropertyValueEntry("ipsum") {{
                                                    assetId = "accusamus";
                                                    entryId = "commodi";
                                                    propertyAlias = "repudiandae";
                                                    propertyId = "quae";
                                                }}),
                                            }}) {{
                                nextToken = "quidem";
                            }};) {{
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "pariatur";
                xAmzDate = "modi";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "voluptates";
                nextToken = "quasi";
            }};            

            BatchGetAssetPropertyValueResponse res = sdk.sdk.batchGetAssetPropertyValue(req);

            if (res.batchGetAssetPropertyValueResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetAssetPropertyValueHistory

Gets the historical values for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetAssetPropertyValueHistoryRequest;
import org.openapis.openapi.models.operations.BatchGetAssetPropertyValueHistoryRequestBody;
import org.openapis.openapi.models.operations.BatchGetAssetPropertyValueHistoryResponse;
import org.openapis.openapi.models.shared.BatchGetAssetPropertyValueHistoryEntry;
import org.openapis.openapi.models.shared.QualityEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeOrderingEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetAssetPropertyValueHistoryRequest req = new BatchGetAssetPropertyValueHistoryRequest(                new BatchGetAssetPropertyValueHistoryRequestBody(                new org.openapis.openapi.models.shared.BatchGetAssetPropertyValueHistoryEntry[]{{
                                                add(new BatchGetAssetPropertyValueHistoryEntry("aliquid") {{
                                                    assetId = "veritatis";
                                                    endDate = OffsetDateTime.parse("2022-03-02T21:33:21.372Z");
                                                    entryId = "enim";
                                                    propertyAlias = "consequatur";
                                                    propertyId = "est";
                                                    qualities = new org.openapis.openapi.models.shared.QualityEnum[]{{
                                                        add(QualityEnum.GOOD),
                                                        add(QualityEnum.BAD),
                                                        add(QualityEnum.UNCERTAIN),
                                                        add(QualityEnum.UNCERTAIN),
                                                    }};
                                                    startDate = OffsetDateTime.parse("2022-09-26T08:57:48.803Z");
                                                    timeOrdering = TimeOrderingEnum.ASCENDING;
                                                }}),
                                                add(new BatchGetAssetPropertyValueHistoryEntry("facilis") {{
                                                    assetId = "cupiditate";
                                                    endDate = OffsetDateTime.parse("2022-12-17T07:42:55.593Z");
                                                    entryId = "magni";
                                                    propertyAlias = "assumenda";
                                                    propertyId = "ipsam";
                                                    qualities = new org.openapis.openapi.models.shared.QualityEnum[]{{
                                                        add(QualityEnum.GOOD),
                                                    }};
                                                    startDate = OffsetDateTime.parse("2021-11-11T04:17:07.569Z");
                                                    timeOrdering = TimeOrderingEnum.ASCENDING;
                                                }}),
                                                add(new BatchGetAssetPropertyValueHistoryEntry("debitis") {{
                                                    assetId = "tempore";
                                                    endDate = OffsetDateTime.parse("2022-01-14T19:13:42.009Z");
                                                    entryId = "eum";
                                                    propertyAlias = "non";
                                                    propertyId = "eligendi";
                                                    qualities = new org.openapis.openapi.models.shared.QualityEnum[]{{
                                                        add(QualityEnum.BAD),
                                                        add(QualityEnum.BAD),
                                                        add(QualityEnum.UNCERTAIN),
                                                    }};
                                                    startDate = OffsetDateTime.parse("2021-09-21T14:06:09.271Z");
                                                    timeOrdering = TimeOrderingEnum.ASCENDING;
                                                }}),
                                            }}) {{
                                maxResults = 952749L;
                                nextToken = "dolorum";
                            }};) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "in";
                xAmzCredential = "illum";
                xAmzDate = "maiores";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "magnam";
                maxResults = "cumque";
                nextToken = "facere";
            }};            

            BatchGetAssetPropertyValueHistoryResponse res = sdk.sdk.batchGetAssetPropertyValueHistory(req);

            if (res.batchGetAssetPropertyValueHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchPutAssetPropertyValue

<p>Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting data using the API</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> <important> <p>With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps outside of the inclusive range of [-7 days, +10 minutes] and returns a <code>TimestampOutOfRangeException</code> error.</p> <p>For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>, then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p> </important> <p>IoT SiteWise authorizes access to each <code>BatchPutAssetPropertyValue</code> entry individually. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-batchputassetpropertyvalue-action">BatchPutAssetPropertyValue authorization</a> in the <i>IoT SiteWise User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchPutAssetPropertyValueRequest;
import org.openapis.openapi.models.operations.BatchPutAssetPropertyValueRequestBody;
import org.openapis.openapi.models.operations.BatchPutAssetPropertyValueResponse;
import org.openapis.openapi.models.shared.AssetPropertyValue;
import org.openapis.openapi.models.shared.PutAssetPropertyValueEntry;
import org.openapis.openapi.models.shared.QualityEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeInNanos;
import org.openapis.openapi.models.shared.Variant;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchPutAssetPropertyValueRequest req = new BatchPutAssetPropertyValueRequest(                new BatchPutAssetPropertyValueRequestBody(                new org.openapis.openapi.models.shared.PutAssetPropertyValueEntry[]{{
                                                add(new PutAssetPropertyValueEntry("natus",                 new org.openapis.openapi.models.shared.AssetPropertyValue[]{{
                                                                    add(new AssetPropertyValue(                new TimeInNanos(354047L) {{
                                                                                        offsetInNanos = 590873L;
                                                                                    }};,                 new Variant() {{
                                                                                        booleanValue = false;
                                                                                        doubleValue = 5518.16;
                                                                                        integerValue = 574325L;
                                                                                        stringValue = "accusantium";
                                                                                    }};) {{
                                                                        quality = QualityEnum.BAD;
                                                                        timestamp = new TimeInNanos(102863L) {{
                                                                            offsetInNanos = 878453L;
                                                                            timeInSeconds = 135474L;
                                                                        }};
                                                                        value = new Variant() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 2982.82;
                                                                            integerValue = 92373L;
                                                                            stringValue = "excepturi";
                                                                        }};
                                                                    }}),
                                                                    add(new AssetPropertyValue(                new TimeInNanos(141264L) {{
                                                                                        offsetInNanos = 367562L;
                                                                                    }};,                 new Variant() {{
                                                                                        booleanValue = false;
                                                                                        doubleValue = 972.6;
                                                                                        integerValue = 435865L;
                                                                                        stringValue = "doloribus";
                                                                                    }};) {{
                                                                        quality = QualityEnum.BAD;
                                                                        timestamp = new TimeInNanos(320997L) {{
                                                                            offsetInNanos = 968962L;
                                                                            timeInSeconds = 652103L;
                                                                        }};
                                                                        value = new Variant() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 4314.18;
                                                                            integerValue = 221262L;
                                                                            stringValue = "necessitatibus";
                                                                        }};
                                                                    }}),
                                                                    add(new AssetPropertyValue(                new TimeInNanos(99569L) {{
                                                                                        offsetInNanos = 919483L;
                                                                                    }};,                 new Variant() {{
                                                                                        booleanValue = false;
                                                                                        doubleValue = 3523.12;
                                                                                        integerValue = 714242L;
                                                                                        stringValue = "nihil";
                                                                                    }};) {{
                                                                        quality = QualityEnum.UNCERTAIN;
                                                                        timestamp = new TimeInNanos(537023L) {{
                                                                            offsetInNanos = 260341L;
                                                                            timeInSeconds = 806194L;
                                                                        }};
                                                                        value = new Variant() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 7038.89;
                                                                            integerValue = 447926L;
                                                                            stringValue = "architecto";
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    assetId = "laborum";
                                                    entryId = "accusamus";
                                                    propertyAlias = "non";
                                                    propertyId = "occaecati";
                                                    propertyValues = new org.openapis.openapi.models.shared.AssetPropertyValue[]{{
                                                        add(new AssetPropertyValue(                new TimeInNanos(533206L) {{
                                                                            offsetInNanos = 956084L;
                                                                        }};,                 new Variant() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 2305.33;
                                                                            integerValue = 643990L;
                                                                            stringValue = "nisi";
                                                                        }};) {{
                                                            quality = QualityEnum.UNCERTAIN;
                                                            timestamp = new TimeInNanos(588465L) {{
                                                                offsetInNanos = 965417L;
                                                                timeInSeconds = 692532L;
                                                            }};
                                                            value = new Variant() {{
                                                                booleanValue = false;
                                                                doubleValue = 7252.55;
                                                                integerValue = 659669L;
                                                                stringValue = "blanditiis";
                                                            }};
                                                        }}),
                                                        add(new AssetPropertyValue(                new TimeInNanos(716075L) {{
                                                                            offsetInNanos = 660174L;
                                                                        }};,                 new Variant() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 2879.91;
                                                                            integerValue = 290077L;
                                                                            stringValue = "suscipit";
                                                                        }};) {{
                                                            quality = QualityEnum.BAD;
                                                            timestamp = new TimeInNanos(474867L) {{
                                                                offsetInNanos = 618809L;
                                                                timeInSeconds = 606393L;
                                                            }};
                                                            value = new Variant() {{
                                                                booleanValue = false;
                                                                doubleValue = 191.93;
                                                                integerValue = 470132L;
                                                                stringValue = "magnam";
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new PutAssetPropertyValueEntry("vero",                 new org.openapis.openapi.models.shared.AssetPropertyValue[]{{
                                                                    add(new AssetPropertyValue(                new TimeInNanos(164694L) {{
                                                                                        offsetInNanos = 500026L;
                                                                                    }};,                 new Variant() {{
                                                                                        booleanValue = false;
                                                                                        doubleValue = 6214.79;
                                                                                        integerValue = 50370L;
                                                                                        stringValue = "occaecati";
                                                                                    }};) {{
                                                                        quality = QualityEnum.UNCERTAIN;
                                                                        timestamp = new TimeInNanos(704415L) {{
                                                                            offsetInNanos = 928082L;
                                                                            timeInSeconds = 608253L;
                                                                        }};
                                                                        value = new Variant() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 5966.56;
                                                                            integerValue = 31838L;
                                                                            stringValue = "porro";
                                                                        }};
                                                                    }}),
                                                                    add(new AssetPropertyValue(                new TimeInNanos(535633L) {{
                                                                                        offsetInNanos = 864282L;
                                                                                    }};,                 new Variant() {{
                                                                                        booleanValue = false;
                                                                                        doubleValue = 5899.1;
                                                                                        integerValue = 750844L;
                                                                                        stringValue = "libero";
                                                                                    }};) {{
                                                                        quality = QualityEnum.UNCERTAIN;
                                                                        timestamp = new TimeInNanos(934214L) {{
                                                                            offsetInNanos = 237893L;
                                                                            timeInSeconds = 992397L;
                                                                        }};
                                                                        value = new Variant() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 2672.62;
                                                                            integerValue = 613966L;
                                                                            stringValue = "dolorum";
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    assetId = "repellat";
                                                    entryId = "quibusdam";
                                                    propertyAlias = "sed";
                                                    propertyId = "saepe";
                                                    propertyValues = new org.openapis.openapi.models.shared.AssetPropertyValue[]{{
                                                        add(new AssetPropertyValue(                new TimeInNanos(848009L) {{
                                                                            offsetInNanos = 864934L;
                                                                        }};,                 new Variant() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 8073.19;
                                                                            integerValue = 411397L;
                                                                            stringValue = "excepturi";
                                                                        }};) {{
                                                            quality = QualityEnum.GOOD;
                                                            timestamp = new TimeInNanos(615560L) {{
                                                                offsetInNanos = 162493L;
                                                                timeInSeconds = 508315L;
                                                            }};
                                                            value = new Variant() {{
                                                                booleanValue = false;
                                                                doubleValue = 1668.47;
                                                                integerValue = 123820L;
                                                                stringValue = "quo";
                                                            }};
                                                        }}),
                                                        add(new AssetPropertyValue(                new TimeInNanos(453543L) {{
                                                                            offsetInNanos = 420075L;
                                                                        }};,                 new Variant() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 7220.56;
                                                                            integerValue = 50588L;
                                                                            stringValue = "pariatur";
                                                                        }};) {{
                                                            quality = QualityEnum.GOOD;
                                                            timestamp = new TimeInNanos(69167L) {{
                                                                offsetInNanos = 407183L;
                                                                timeInSeconds = 33222L;
                                                            }};
                                                            value = new Variant() {{
                                                                booleanValue = false;
                                                                doubleValue = 9825.75;
                                                                integerValue = 697429L;
                                                                stringValue = "ipsam";
                                                            }};
                                                        }}),
                                                        add(new AssetPropertyValue(                new TimeInNanos(359978L) {{
                                                                            offsetInNanos = 944124L;
                                                                        }};,                 new Variant() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 7299.91;
                                                                            integerValue = 749999L;
                                                                            stringValue = "dolores";
                                                                        }};) {{
                                                            quality = QualityEnum.BAD;
                                                            timestamp = new TimeInNanos(855804L) {{
                                                                offsetInNanos = 975522L;
                                                                timeInSeconds = 16627L;
                                                            }};
                                                            value = new Variant() {{
                                                                booleanValue = false;
                                                                doubleValue = 2307.42;
                                                                integerValue = 11714L;
                                                                stringValue = "cumque";
                                                            }};
                                                        }}),
                                                        add(new AssetPropertyValue(                new TimeInNanos(18521L) {{
                                                                            offsetInNanos = 170986L;
                                                                        }};,                 new Variant() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 7936.98;
                                                                            integerValue = 463451L;
                                                                            stringValue = "dolor";
                                                                        }};) {{
                                                            quality = QualityEnum.BAD;
                                                            timestamp = new TimeInNanos(54338L) {{
                                                                offsetInNanos = 521037L;
                                                                timeInSeconds = 489549L;
                                                            }};
                                                            value = new Variant() {{
                                                                booleanValue = false;
                                                                doubleValue = 3389.85;
                                                                integerValue = 199996L;
                                                                stringValue = "eos";
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "quos";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolor";
            }};            

            BatchPutAssetPropertyValueResponse res = sdk.sdk.batchPutAssetPropertyValue(req);

            if (res.batchPutAssetPropertyValueResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAccessPolicy

Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccessPolicyRequest;
import org.openapis.openapi.models.operations.CreateAccessPolicyRequestBody;
import org.openapis.openapi.models.operations.CreateAccessPolicyRequestBodyAccessPolicyIdentity;
import org.openapis.openapi.models.operations.CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum;
import org.openapis.openapi.models.operations.CreateAccessPolicyRequestBodyAccessPolicyResource;
import org.openapis.openapi.models.operations.CreateAccessPolicyResponse;
import org.openapis.openapi.models.shared.GroupIdentity;
import org.openapis.openapi.models.shared.IAMRoleIdentity;
import org.openapis.openapi.models.shared.IAMUserIdentity;
import org.openapis.openapi.models.shared.PortalResource;
import org.openapis.openapi.models.shared.ProjectResource;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserIdentity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccessPolicyRequest req = new CreateAccessPolicyRequest(                new CreateAccessPolicyRequestBody(                new CreateAccessPolicyRequestBodyAccessPolicyIdentity() {{
                                                group = new GroupIdentity("ipsum");;
                                                iamRole = new IAMRoleIdentity("hic");;
                                                iamUser = new IAMUserIdentity("excepturi");;
                                                user = new UserIdentity("cum");;
                                            }};, CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum.ADMINISTRATOR,                 new CreateAccessPolicyRequestBodyAccessPolicyResource() {{
                                                portal = new PortalResource("dignissimos");;
                                                project = new ProjectResource("reiciendis");;
                                            }};) {{
                                clientToken = "amet";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("numquam", "veritatis");
                                    put("ipsa", "ipsa");
                                    put("iure", "odio");
                                }};
                            }};) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "quidem";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "eos";
            }};            

            CreateAccessPolicyResponse res = sdk.sdk.createAccessPolicy(req);

            if (res.createAccessPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAsset

Creates an asset from an existing asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html">Creating assets</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssetRequest;
import org.openapis.openapi.models.operations.CreateAssetRequestBody;
import org.openapis.openapi.models.operations.CreateAssetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAssetRequest req = new CreateAssetRequest(                new CreateAssetRequestBody("sit", "fugiat") {{
                                assetDescription = "ab";
                                clientToken = "soluta";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("iusto", "voluptate");
                                    put("dolorum", "deleniti");
                                    put("omnis", "necessitatibus");
                                }};
                            }};) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "nihil";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "id";
                xAmzSignedHeaders = "saepe";
            }};            

            CreateAssetResponse res = sdk.sdk.createAsset(req);

            if (res.createAssetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAssetModel

Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining asset models</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssetModelRequest;
import org.openapis.openapi.models.operations.CreateAssetModelRequestBody;
import org.openapis.openapi.models.operations.CreateAssetModelResponse;
import org.openapis.openapi.models.shared.AssetModelCompositeModelDefinition;
import org.openapis.openapi.models.shared.AssetModelHierarchyDefinition;
import org.openapis.openapi.models.shared.AssetModelPropertyDefinition;
import org.openapis.openapi.models.shared.Attribute;
import org.openapis.openapi.models.shared.ComputeLocationEnum;
import org.openapis.openapi.models.shared.ExpressionVariable;
import org.openapis.openapi.models.shared.ForwardingConfig;
import org.openapis.openapi.models.shared.ForwardingConfigStateEnum;
import org.openapis.openapi.models.shared.Measurement;
import org.openapis.openapi.models.shared.MeasurementProcessingConfig;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricProcessingConfig;
import org.openapis.openapi.models.shared.MetricWindow;
import org.openapis.openapi.models.shared.PropertyDataTypeEnum;
import org.openapis.openapi.models.shared.PropertyType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Transform;
import org.openapis.openapi.models.shared.TransformProcessingConfig;
import org.openapis.openapi.models.shared.TumblingWindow;
import org.openapis.openapi.models.shared.VariableValue;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAssetModelRequest req = new CreateAssetModelRequest(                new CreateAssetModelRequestBody("aspernatur") {{
                                assetModelCompositeModels = new org.openapis.openapi.models.shared.AssetModelCompositeModelDefinition[]{{
                                    add(new AssetModelCompositeModelDefinition("minima", "repellendus") {{
                                        description = "amet";
                                        name = "Tomas Hammes";
                                        properties = "deserunt";
                                        type = "provident";
                                    }}),
                                }};
                                assetModelDescription = "totam";
                                assetModelHierarchies = new org.openapis.openapi.models.shared.AssetModelHierarchyDefinition[]{{
                                    add(new AssetModelHierarchyDefinition("officiis", "qui") {{
                                        childAssetModelId = "alias";
                                        name = "Alex Goodwin";
                                    }}),
                                    add(new AssetModelHierarchyDefinition("quisquam", "tenetur") {{
                                        childAssetModelId = "dolorum";
                                        name = "Cory Pfeffer";
                                    }}),
                                    add(new AssetModelHierarchyDefinition("sapiente", "totam") {{
                                        childAssetModelId = "amet";
                                        name = "Tomas Funk";
                                    }}),
                                }};
                                assetModelProperties = new org.openapis.openapi.models.shared.AssetModelPropertyDefinition[]{{
                                    add(new AssetModelPropertyDefinition(PropertyDataTypeEnum.INTEGER, "eum",                 new PropertyType() {{
                                                        attribute = new Attribute() {{
                                                            defaultValue = "autem";
                                                        }};;
                                                        measurement = new Measurement() {{
                                                            processingConfig = new MeasurementProcessingConfig(                new ForwardingConfig(ForwardingConfigStateEnum.ENABLED););;
                                                        }};;
                                                        metric = new Metric("quas",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                            add(new ExpressionVariable("molestiae",                 new VariableValue("magnam") {{
                                                                                                hierarchyId = "odio";
                                                                                            }};) {{
                                                                                name = "Mrs. Shane Reinger";
                                                                                value = new VariableValue("ipsa") {{
                                                                                    hierarchyId = "explicabo";
                                                                                    propertyId = "provident";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("ut",                 new VariableValue("eum") {{
                                                                                                hierarchyId = "suscipit";
                                                                                            }};) {{
                                                                                name = "Joy Klocko";
                                                                                value = new VariableValue("fugiat") {{
                                                                                    hierarchyId = "reprehenderit";
                                                                                    propertyId = "quidem";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("quo",                 new VariableValue("illum") {{
                                                                                                hierarchyId = "quo";
                                                                                            }};) {{
                                                                                name = "Alan Lang Jr.";
                                                                                value = new VariableValue("neque") {{
                                                                                    hierarchyId = "id";
                                                                                    propertyId = "quidem";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("ipsam",                 new VariableValue("aspernatur") {{
                                                                                                hierarchyId = "sequi";
                                                                                            }};) {{
                                                                                name = "Herbert Daugherty V";
                                                                                value = new VariableValue("debitis") {{
                                                                                    hierarchyId = "consequatur";
                                                                                    propertyId = "tempora";
                                                                                }};
                                                                            }}),
                                                                        }},                 new MetricWindow() {{
                                                                            tumbling = new TumblingWindow("quo") {{
                                                                                offset = "esse";
                                                                            }};;
                                                                        }};) {{
                                                            processingConfig = new MetricProcessingConfig(ComputeLocationEnum.CLOUD);;
                                                        }};;
                                                        transform = new Transform("aperiam",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                            add(new ExpressionVariable("occaecati",                 new VariableValue("commodi") {{
                                                                                                hierarchyId = "sapiente";
                                                                                            }};) {{
                                                                                name = "Cody Blick";
                                                                                value = new VariableValue("odio") {{
                                                                                    hierarchyId = "accusamus";
                                                                                    propertyId = "aliquam";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("deleniti",                 new VariableValue("fugit") {{
                                                                                                hierarchyId = "fuga";
                                                                                            }};) {{
                                                                                name = "Miss Rosie Krajcik";
                                                                                value = new VariableValue("consequuntur") {{
                                                                                    hierarchyId = "quas";
                                                                                    propertyId = "praesentium";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("consequuntur",                 new VariableValue("ratione") {{
                                                                                                hierarchyId = "explicabo";
                                                                                            }};) {{
                                                                                name = "Randall Lindgren";
                                                                                value = new VariableValue("sapiente") {{
                                                                                    hierarchyId = "nisi";
                                                                                    propertyId = "fugit";
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            processingConfig = new TransformProcessingConfig(ComputeLocationEnum.CLOUD) {{
                                                                forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.ENABLED);;
                                                            }};;
                                                        }};;
                                                    }};) {{
                                        dataType = PropertyDataTypeEnum.STRING;
                                        dataTypeSpec = "expedita";
                                        name = "Jane Kassulke";
                                        type = new PropertyType() {{
                                            attribute = new Attribute() {{
                                                defaultValue = "deserunt";
                                            }};
                                            measurement = new Measurement() {{
                                                processingConfig = new MeasurementProcessingConfig(                new ForwardingConfig(ForwardingConfigStateEnum.DISABLED);) {{
                                                    forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.DISABLED) {{
                                                        state = ForwardingConfigStateEnum.DISABLED;
                                                    }};
                                                }};
                                            }};
                                            metric = new Metric("repellendus",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                add(new ExpressionVariable("occaecati",                 new VariableValue("voluptatibus") {{
                                                                                    hierarchyId = "quisquam";
                                                                                }};) {{
                                                                    name = "Alexander Prosacco";
                                                                    value = new VariableValue("odio") {{
                                                                        hierarchyId = "quae";
                                                                        propertyId = "laudantium";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("tenetur",                 new VariableValue("dignissimos") {{
                                                                                    hierarchyId = "hic";
                                                                                }};) {{
                                                                    name = "Arturo Hauck";
                                                                    value = new VariableValue("vero") {{
                                                                        hierarchyId = "voluptate";
                                                                        propertyId = "consectetur";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("quibusdam",                 new VariableValue("illum") {{
                                                                                    hierarchyId = "sequi";
                                                                                }};) {{
                                                                    name = "Jermaine Kuhic";
                                                                    value = new VariableValue("dolore") {{
                                                                        hierarchyId = "vero";
                                                                        propertyId = "ducimus";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("maiores",                 new VariableValue("doloribus") {{
                                                                                    hierarchyId = "iusto";
                                                                                }};) {{
                                                                    name = "Edmund Ankunding";
                                                                    value = new VariableValue("porro") {{
                                                                        hierarchyId = "nulla";
                                                                        propertyId = "fugit";
                                                                    }};
                                                                }}),
                                                            }},                 new MetricWindow() {{
                                                                tumbling = new TumblingWindow("eligendi") {{
                                                                    offset = "ducimus";
                                                                }};;
                                                            }};) {{
                                                expression = "qui";
                                                processingConfig = new MetricProcessingConfig(ComputeLocationEnum.CLOUD) {{
                                                    computeLocation = ComputeLocationEnum.CLOUD;
                                                }};
                                                variables = new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                    add(new ExpressionVariable("facilis",                 new VariableValue("aliquid") {{
                                                                        hierarchyId = "quam";
                                                                    }};) {{
                                                        name = "Keith Padberg";
                                                        value = new VariableValue("distinctio") {{
                                                            hierarchyId = "aspernatur";
                                                            propertyId = "dolores";
                                                        }};
                                                    }}),
                                                    add(new ExpressionVariable("ullam",                 new VariableValue("nam") {{
                                                                        hierarchyId = "hic";
                                                                    }};) {{
                                                        name = "Marty Deckow";
                                                        value = new VariableValue("sunt") {{
                                                            hierarchyId = "magni";
                                                            propertyId = "odio";
                                                        }};
                                                    }}),
                                                    add(new ExpressionVariable("quos",                 new VariableValue("tempore") {{
                                                                        hierarchyId = "cupiditate";
                                                                    }};) {{
                                                        name = "Erma Rogahn PhD";
                                                        value = new VariableValue("nobis") {{
                                                            hierarchyId = "ipsum";
                                                            propertyId = "veritatis";
                                                        }};
                                                    }}),
                                                    add(new ExpressionVariable("quae",                 new VariableValue("aut") {{
                                                                        hierarchyId = "quas";
                                                                    }};) {{
                                                        name = "Dixie Durgan";
                                                        value = new VariableValue("architecto") {{
                                                            hierarchyId = "adipisci";
                                                            propertyId = "dolorum";
                                                        }};
                                                    }}),
                                                }};
                                                window = new MetricWindow() {{
                                                    tumbling = new TumblingWindow("est") {{
                                                        interval = "itaque";
                                                        offset = "consequatur";
                                                    }};
                                                }};
                                            }};
                                            transform = new Transform("nulla",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                add(new ExpressionVariable("veniam",                 new VariableValue("aliquid") {{
                                                                                    hierarchyId = "inventore";
                                                                                }};) {{
                                                                    name = "Gordon Willms";
                                                                    value = new VariableValue("corporis") {{
                                                                        hierarchyId = "ea";
                                                                        propertyId = "impedit";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("a",                 new VariableValue("libero") {{
                                                                                    hierarchyId = "aut";
                                                                                }};) {{
                                                                    name = "Rosemary Ryan";
                                                                    value = new VariableValue("eaque") {{
                                                                        hierarchyId = "aspernatur";
                                                                        propertyId = "minima";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("et",                 new VariableValue("dolorum") {{
                                                                                    hierarchyId = "laborum";
                                                                                }};) {{
                                                                    name = "Margie Russel";
                                                                    value = new VariableValue("non") {{
                                                                        hierarchyId = "accusamus";
                                                                        propertyId = "inventore";
                                                                    }};
                                                                }}),
                                                            }}) {{
                                                expression = "alias";
                                                processingConfig = new TransformProcessingConfig(ComputeLocationEnum.EDGE) {{
                                                    computeLocation = ComputeLocationEnum.CLOUD;
                                                    forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.DISABLED) {{
                                                        state = ForwardingConfigStateEnum.DISABLED;
                                                    }};
                                                }};
                                                variables = new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                    add(new ExpressionVariable("maiores",                 new VariableValue("quasi") {{
                                                                        hierarchyId = "ex";
                                                                    }};) {{
                                                        name = "Elena Gulgowski";
                                                        value = new VariableValue("dolor") {{
                                                            hierarchyId = "laudantium";
                                                            propertyId = "dicta";
                                                        }};
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        unit = "placeat";
                                    }}),
                                    add(new AssetModelPropertyDefinition(PropertyDataTypeEnum.STRUCT, "officia",                 new PropertyType() {{
                                                        attribute = new Attribute() {{
                                                            defaultValue = "maxime";
                                                        }};;
                                                        measurement = new Measurement() {{
                                                            processingConfig = new MeasurementProcessingConfig(                new ForwardingConfig(ForwardingConfigStateEnum.DISABLED););;
                                                        }};;
                                                        metric = new Metric("officia",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                            add(new ExpressionVariable("fuga",                 new VariableValue("id") {{
                                                                                                hierarchyId = "suscipit";
                                                                                            }};) {{
                                                                                name = "Anna Hahn";
                                                                                value = new VariableValue("adipisci") {{
                                                                                    hierarchyId = "labore";
                                                                                    propertyId = "ab";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("quos",                 new VariableValue("vel") {{
                                                                                                hierarchyId = "labore";
                                                                                            }};) {{
                                                                                name = "Molly O'Reilly";
                                                                                value = new VariableValue("ducimus") {{
                                                                                    hierarchyId = "fugiat";
                                                                                    propertyId = "vel";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("nemo",                 new VariableValue("recusandae") {{
                                                                                                hierarchyId = "aliquid";
                                                                                            }};) {{
                                                                                name = "Johnathan Ritchie";
                                                                                value = new VariableValue("assumenda") {{
                                                                                    hierarchyId = "corporis";
                                                                                    propertyId = "reiciendis";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("doloribus",                 new VariableValue("suscipit") {{
                                                                                                hierarchyId = "reiciendis";
                                                                                            }};) {{
                                                                                name = "Karla Feest";
                                                                                value = new VariableValue("numquam") {{
                                                                                    hierarchyId = "earum";
                                                                                    propertyId = "facere";
                                                                                }};
                                                                            }}),
                                                                        }},                 new MetricWindow() {{
                                                                            tumbling = new TumblingWindow("quidem") {{
                                                                                offset = "saepe";
                                                                            }};;
                                                                        }};) {{
                                                            processingConfig = new MetricProcessingConfig(ComputeLocationEnum.CLOUD);;
                                                        }};;
                                                        transform = new Transform("dolore",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                            add(new ExpressionVariable("corporis",                 new VariableValue("harum") {{
                                                                                                hierarchyId = "laboriosam";
                                                                                            }};) {{
                                                                                name = "Chad Franey IV";
                                                                                value = new VariableValue("consectetur") {{
                                                                                    hierarchyId = "a";
                                                                                    propertyId = "debitis";
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            processingConfig = new TransformProcessingConfig(ComputeLocationEnum.EDGE) {{
                                                                forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.ENABLED);;
                                                            }};;
                                                        }};;
                                                    }};) {{
                                        dataType = PropertyDataTypeEnum.DOUBLE;
                                        dataTypeSpec = "et";
                                        name = "Ms. Olive Tillman";
                                        type = new PropertyType() {{
                                            attribute = new Attribute() {{
                                                defaultValue = "nam";
                                            }};
                                            measurement = new Measurement() {{
                                                processingConfig = new MeasurementProcessingConfig(                new ForwardingConfig(ForwardingConfigStateEnum.DISABLED);) {{
                                                    forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.DISABLED) {{
                                                        state = ForwardingConfigStateEnum.ENABLED;
                                                    }};
                                                }};
                                            }};
                                            metric = new Metric("error",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                add(new ExpressionVariable("quasi",                 new VariableValue("similique") {{
                                                                                    hierarchyId = "culpa";
                                                                                }};) {{
                                                                    name = "Rufus Crona";
                                                                    value = new VariableValue("consequuntur") {{
                                                                        hierarchyId = "facere";
                                                                        propertyId = "veritatis";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("illum",                 new VariableValue("soluta") {{
                                                                                    hierarchyId = "accusantium";
                                                                                }};) {{
                                                                    name = "Mandy Berge";
                                                                    value = new VariableValue("libero") {{
                                                                        hierarchyId = "in";
                                                                        propertyId = "eius";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("voluptatum",                 new VariableValue("qui") {{
                                                                                    hierarchyId = "quibusdam";
                                                                                }};) {{
                                                                    name = "Miranda Carter";
                                                                    value = new VariableValue("aut") {{
                                                                        hierarchyId = "ullam";
                                                                        propertyId = "nisi";
                                                                    }};
                                                                }}),
                                                            }},                 new MetricWindow() {{
                                                                tumbling = new TumblingWindow("ex") {{
                                                                    offset = "deleniti";
                                                                }};;
                                                            }};) {{
                                                expression = "saepe";
                                                processingConfig = new MetricProcessingConfig(ComputeLocationEnum.CLOUD) {{
                                                    computeLocation = ComputeLocationEnum.EDGE;
                                                }};
                                                variables = new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                    add(new ExpressionVariable("adipisci",                 new VariableValue("cumque") {{
                                                                        hierarchyId = "consequuntur";
                                                                    }};) {{
                                                        name = "Tracy Harber";
                                                        value = new VariableValue("tempore") {{
                                                            hierarchyId = "sit";
                                                            propertyId = "culpa";
                                                        }};
                                                    }}),
                                                    add(new ExpressionVariable("a",                 new VariableValue("nulla") {{
                                                                        hierarchyId = "quas";
                                                                    }};) {{
                                                        name = "Sadie Hackett";
                                                        value = new VariableValue("provident") {{
                                                            hierarchyId = "esse";
                                                            propertyId = "blanditiis";
                                                        }};
                                                    }}),
                                                }};
                                                window = new MetricWindow() {{
                                                    tumbling = new TumblingWindow("a") {{
                                                        interval = "esse";
                                                        offset = "quasi";
                                                    }};
                                                }};
                                            }};
                                            transform = new Transform("laudantium",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                add(new ExpressionVariable("explicabo",                 new VariableValue("voluptas") {{
                                                                                    hierarchyId = "aut";
                                                                                }};) {{
                                                                    name = "Andrew Little I";
                                                                    value = new VariableValue("impedit") {{
                                                                        hierarchyId = "occaecati";
                                                                        propertyId = "numquam";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("aperiam",                 new VariableValue("ea") {{
                                                                                    hierarchyId = "quaerat";
                                                                                }};) {{
                                                                    name = "Jean Wunsch";
                                                                    value = new VariableValue("asperiores") {{
                                                                        hierarchyId = "voluptatibus";
                                                                        propertyId = "voluptas";
                                                                    }};
                                                                }}),
                                                            }}) {{
                                                expression = "itaque";
                                                processingConfig = new TransformProcessingConfig(ComputeLocationEnum.CLOUD) {{
                                                    computeLocation = ComputeLocationEnum.CLOUD;
                                                    forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.ENABLED) {{
                                                        state = ForwardingConfigStateEnum.DISABLED;
                                                    }};
                                                }};
                                                variables = new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                    add(new ExpressionVariable("accusantium",                 new VariableValue("rem") {{
                                                                        hierarchyId = "aut";
                                                                    }};) {{
                                                        name = "Mrs. Carl Kling I";
                                                        value = new VariableValue("temporibus") {{
                                                            hierarchyId = "adipisci";
                                                            propertyId = "iste";
                                                        }};
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        unit = "consequuntur";
                                    }}),
                                }};
                                clientToken = "libero";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("accusamus", "similique");
                                }};
                            }};) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "voluptas";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "nobis";
            }};            

            CreateAssetModelResponse res = sdk.sdk.createAssetModel(req);

            if (res.createAssetModelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBulkImportJob

<p>Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/CreateBulkImportJob.html">Create a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <important> <p>You must enable IoT SiteWise to export data to Amazon S3 before you create a bulk import job. For more information about how to configure storage settings, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html">PutStorageConfiguration</a>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBulkImportJobRequest;
import org.openapis.openapi.models.operations.CreateBulkImportJobRequestBody;
import org.openapis.openapi.models.operations.CreateBulkImportJobRequestBodyErrorReportLocation;
import org.openapis.openapi.models.operations.CreateBulkImportJobRequestBodyJobConfiguration;
import org.openapis.openapi.models.operations.CreateBulkImportJobResponse;
import org.openapis.openapi.models.shared.ColumnNameEnum;
import org.openapis.openapi.models.shared.Csv;
import org.openapis.openapi.models.shared.File;
import org.openapis.openapi.models.shared.FileFormat;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBulkImportJobRequest req = new CreateBulkImportJobRequest(                new CreateBulkImportJobRequestBody(                new CreateBulkImportJobRequestBodyErrorReportLocation() {{
                                                bucket = "adipisci";
                                                prefix = "minus";
                                            }};,                 new org.openapis.openapi.models.shared.File[]{{
                                                add(new File("aliquam", "officiis") {{
                                                    bucket = "blanditiis";
                                                    key = "in";
                                                    versionId = "dolore";
                                                }}),
                                            }},                 new CreateBulkImportJobRequestBodyJobConfiguration() {{
                                                fileFormat = new FileFormat() {{
                                                    csv = new Csv() {{
                                                        columnNames = new org.openapis.openapi.models.shared.ColumnNameEnum[]{{
                                                            add(ColumnNameEnum.PROPERTY_ID),
                                                            add(ColumnNameEnum.ASSET_ID),
                                                            add(ColumnNameEnum.TIMESTAMP_NANO_OFFSET),
                                                            add(ColumnNameEnum.TIMESTAMP_SECONDS),
                                                        }};
                                                    }};;
                                                }};;
                                            }};, "quas", "hic");) {{
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "corrupti";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "totam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "exercitationem";
            }};            

            CreateBulkImportJobResponse res = sdk.sdk.createBulkImportJob(req);

            if (res.createBulkImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDashboard

Creates a dashboard in an IoT SiteWise Monitor project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDashboardRequest;
import org.openapis.openapi.models.operations.CreateDashboardRequestBody;
import org.openapis.openapi.models.operations.CreateDashboardResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDashboardRequest req = new CreateDashboardRequest(                new CreateDashboardRequestBody("sit", "rerum", "sed") {{
                                clientToken = "reiciendis";
                                dashboardDescription = "explicabo";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("facilis", "voluptate");
                                    put("expedita", "ab");
                                    put("iste", "dolore");
                                    put("laborum", "sed");
                                }};
                            }};) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "quidem";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "unde";
                xAmzSignedHeaders = "architecto";
            }};            

            CreateDashboardResponse res = sdk.sdk.createDashboard(req);

            if (res.createDashboardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGateway

Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGatewayRequest;
import org.openapis.openapi.models.operations.CreateGatewayRequestBody;
import org.openapis.openapi.models.operations.CreateGatewayRequestBodyGatewayPlatform;
import org.openapis.openapi.models.operations.CreateGatewayResponse;
import org.openapis.openapi.models.shared.Greengrass;
import org.openapis.openapi.models.shared.GreengrassV2;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGatewayRequest req = new CreateGatewayRequest(                new CreateGatewayRequestBody("sapiente",                 new CreateGatewayRequestBodyGatewayPlatform() {{
                                                greengrass = new Greengrass("debitis");;
                                                greengrassV2 = new GreengrassV2("illo");;
                                            }};) {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("perferendis", "corrupti");
                                    put("maiores", "incidunt");
                                    put("sed", "provident");
                                    put("eius", "necessitatibus");
                                }};
                            }};) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "ea";
                xAmzCredential = "occaecati";
                xAmzDate = "quos";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "tempora";
            }};            

            CreateGatewayResponse res = sdk.sdk.createGateway(req);

            if (res.createGatewayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPortal

<p>Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM to authenticate portal users and manage user permissions.</p> <note> <p>Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or removing portal administrators</a> in the <i>IoT SiteWise User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePortalRequest;
import org.openapis.openapi.models.operations.CreatePortalRequestBody;
import org.openapis.openapi.models.operations.CreatePortalRequestBodyAlarms;
import org.openapis.openapi.models.operations.CreatePortalRequestBodyPortalAuthModeEnum;
import org.openapis.openapi.models.operations.CreatePortalRequestBodyPortalLogoImageFile;
import org.openapis.openapi.models.operations.CreatePortalResponse;
import org.openapis.openapi.models.shared.ImageFileTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePortalRequest req = new CreatePortalRequest(                new CreatePortalRequestBody("reiciendis", "ex", "sit") {{
                                alarms = new CreatePortalRequestBodyAlarms() {{
                                    alarmRoleArn = "non";
                                    notificationLambdaArn = "officiis";
                                }};;
                                clientToken = "praesentium";
                                notificationSenderEmail = "facilis";
                                portalAuthMode = CreatePortalRequestBodyPortalAuthModeEnum.IAM;
                                portalDescription = "incidunt";
                                portalLogoImageFile = new CreatePortalRequestBodyPortalLogoImageFile() {{
                                    data = "ipsam";
                                    type = ImageFileTypeEnum.PNG;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("rem", "sit");
                                    put("nobis", "error");
                                    put("veniam", "minima");
                                    put("recusandae", "reiciendis");
                                }};
                            }};) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "magni";
                xAmzCredential = "aperiam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "in";
            }};            

            CreatePortalResponse res = sdk.sdk.createPortal(req);

            if (res.createPortalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProject

<p>Creates a project in the specified portal.</p> <note> <p>Make sure that the project name and description don't contain confidential information.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectRequestBody;
import org.openapis.openapi.models.operations.CreateProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProjectRequest req = new CreateProjectRequest(                new CreateProjectRequestBody("beatae", "laudantium") {{
                                clientToken = "exercitationem";
                                projectDescription = "praesentium";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("laboriosam", "dolorum");
                                    put("voluptatum", "error");
                                    put("hic", "expedita");
                                }};
                            }};) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "neque";
                xAmzCredential = "dolorum";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "officia";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "corrupti";
            }};            

            CreateProjectResponse res = sdk.sdk.createProject(req);

            if (res.createProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccessPolicy

Deletes an access policy that grants the specified identity access to the specified IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccessPolicyRequest;
import org.openapis.openapi.models.operations.DeleteAccessPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAccessPolicyRequest req = new DeleteAccessPolicyRequest("tempora") {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "ut";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "expedita";
                clientToken = "magnam";
            }};            

            DeleteAccessPolicyResponse res = sdk.sdk.deleteAccessPolicy(req);

            if (res.deleteAccessPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAsset

<p>Deletes an asset. This action can't be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>. </p> <note> <p>You can't delete an asset that's associated to another asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAssetRequest;
import org.openapis.openapi.models.operations.DeleteAssetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAssetRequest req = new DeleteAssetRequest("esse") {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "sit";
                xAmzCredential = "voluptatum";
                xAmzDate = "quas";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "et";
                clientToken = "blanditiis";
            }};            

            DeleteAssetResponse res = sdk.sdk.deleteAsset(req);

            if (res.deleteAssetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAssetModel

Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAssetModelRequest;
import org.openapis.openapi.models.operations.DeleteAssetModelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAssetModelRequest req = new DeleteAssetModelRequest("sed") {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "vel";
                xAmzCredential = "nostrum";
                xAmzDate = "saepe";
                xAmzSecurityToken = "error";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "incidunt";
                clientToken = "reiciendis";
            }};            

            DeleteAssetModelResponse res = sdk.sdk.deleteAssetModel(req);

            if (res.deleteAssetModelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDashboard

Deletes a dashboard from IoT SiteWise Monitor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDashboardRequest;
import org.openapis.openapi.models.operations.DeleteDashboardResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDashboardRequest req = new DeleteDashboardRequest("harum") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "occaecati";
                xAmzDate = "labore";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "laborum";
                clientToken = "nam";
            }};            

            DeleteDashboardResponse res = sdk.sdk.deleteDashboard(req);

            if (res.deleteDashboardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGateway

Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGatewayRequest;
import org.openapis.openapi.models.operations.DeleteGatewayResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGatewayRequest req = new DeleteGatewayRequest("laboriosam") {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "amet";
                xAmzCredential = "deserunt";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "unde";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "provident";
            }};            

            DeleteGatewayResponse res = sdk.sdk.deleteGateway(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePortal

Deletes a portal from IoT SiteWise Monitor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePortalRequest;
import org.openapis.openapi.models.operations.DeletePortalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePortalRequest req = new DeletePortalRequest("delectus") {{
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "est";
                xAmzDate = "quidem";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "fuga";
                clientToken = "praesentium";
            }};            

            DeletePortalResponse res = sdk.sdk.deletePortal(req);

            if (res.deletePortalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProject

Deletes a project from IoT SiteWise Monitor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectRequest;
import org.openapis.openapi.models.operations.DeleteProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProjectRequest req = new DeleteProjectRequest("veniam") {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "repudiandae";
                xAmzDate = "quasi";
                xAmzSecurityToken = "atque";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "asperiores";
                clientToken = "totam";
            }};            

            DeleteProjectResponse res = sdk.sdk.deleteProject(req);

            if (res.deleteProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTimeSeries

<p>Deletes a time series (data stream). If you delete a time series that's associated with an asset property, the asset property still exists, but the time series will no longer be associated with this asset property.</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTimeSeriesRequest;
import org.openapis.openapi.models.operations.DeleteTimeSeriesRequestBody;
import org.openapis.openapi.models.operations.DeleteTimeSeriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTimeSeriesRequest req = new DeleteTimeSeriesRequest(                new DeleteTimeSeriesRequestBody() {{
                                clientToken = "quidem";
                            }};) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "et";
                xAmzCredential = "esse";
                xAmzDate = "amet";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "atque";
                alias = "error";
                assetId = "officiis";
                propertyId = "officiis";
            }};            

            DeleteTimeSeriesResponse res = sdk.sdk.deleteTimeSeries(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAccessPolicy

Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAccessPolicyRequest;
import org.openapis.openapi.models.operations.DescribeAccessPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAccessPolicyRequest req = new DescribeAccessPolicyRequest("natus") {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "ex";
                xAmzDate = "maiores";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "at";
                xAmzSignedHeaders = "error";
            }};            

            DescribeAccessPolicyResponse res = sdk.sdk.describeAccessPolicy(req);

            if (res.describeAccessPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAsset

Retrieves information about an asset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAssetRequest;
import org.openapis.openapi.models.operations.DescribeAssetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAssetRequest req = new DescribeAssetRequest("suscipit") {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "atque";
                xAmzCredential = "atque";
                xAmzDate = "sunt";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "repellendus";
                excludeProperties = false;
            }};            

            DescribeAssetResponse res = sdk.sdk.describeAsset(req);

            if (res.describeAssetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAssetModel

Retrieves information about an asset model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAssetModelRequest;
import org.openapis.openapi.models.operations.DescribeAssetModelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAssetModelRequest req = new DescribeAssetModelRequest("reiciendis") {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "dicta";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "enim";
                excludeProperties = false;
            }};            

            DescribeAssetModelResponse res = sdk.sdk.describeAssetModel(req);

            if (res.describeAssetModelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAssetProperty

<p>Retrieves information about an asset property.</p> <note> <p>When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation's response includes the new default value.</p> </note> <p>This operation doesn't return the value of the asset property. To get the value of an asset property, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html">GetAssetPropertyValue</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAssetPropertyRequest;
import org.openapis.openapi.models.operations.DescribeAssetPropertyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAssetPropertyRequest req = new DescribeAssetPropertyRequest("velit", "a") {{
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "saepe";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            DescribeAssetPropertyResponse res = sdk.sdk.describeAssetProperty(req);

            if (res.describeAssetPropertyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBulkImportJob

Retrieves information about a bulk import job request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/DescribeBulkImportJob.html">Describe a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBulkImportJobRequest;
import org.openapis.openapi.models.operations.DescribeBulkImportJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBulkImportJobRequest req = new DescribeBulkImportJobRequest("adipisci") {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "consequuntur";
                xAmzDate = "fugit";
                xAmzSecurityToken = "id";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            DescribeBulkImportJobResponse res = sdk.sdk.describeBulkImportJob(req);

            if (res.describeBulkImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDashboard

Retrieves information about a dashboard.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDashboardRequest;
import org.openapis.openapi.models.operations.DescribeDashboardResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDashboardRequest req = new DescribeDashboardRequest("illo") {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "eveniet";
                xAmzDate = "non";
                xAmzSecurityToken = "vero";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "iure";
            }};            

            DescribeDashboardResponse res = sdk.sdk.describeDashboard(req);

            if (res.describeDashboardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDefaultEncryptionConfiguration

Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified Region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDefaultEncryptionConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeDefaultEncryptionConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDefaultEncryptionConfigurationRequest req = new DescribeDefaultEncryptionConfigurationRequest() {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "quae";
                xAmzCredential = "molestiae";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "qui";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "iure";
            }};            

            DescribeDefaultEncryptionConfigurationResponse res = sdk.sdk.describeDefaultEncryptionConfiguration(req);

            if (res.describeDefaultEncryptionConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeGateway

Retrieves information about a gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeGatewayRequest;
import org.openapis.openapi.models.operations.DescribeGatewayResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeGatewayRequest req = new DescribeGatewayRequest("ratione") {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "voluptatum";
                xAmzDate = "rem";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "repellat";
            }};            

            DescribeGatewayResponse res = sdk.sdk.describeGateway(req);

            if (res.describeGatewayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeGatewayCapabilityConfiguration

Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeGatewayCapabilityConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeGatewayCapabilityConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeGatewayCapabilityConfigurationRequest req = new DescribeGatewayCapabilityConfigurationRequest("corporis", "perspiciatis") {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "voluptas";
                xAmzDate = "alias";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "dolores";
            }};            

            DescribeGatewayCapabilityConfigurationResponse res = sdk.sdk.describeGatewayCapabilityConfiguration(req);

            if (res.describeGatewayCapabilityConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLoggingOptions

Retrieves the current IoT SiteWise logging options.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLoggingOptionsRequest;
import org.openapis.openapi.models.operations.DescribeLoggingOptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLoggingOptionsRequest req = new DescribeLoggingOptionsRequest() {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "dolorum";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "quae";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "omnis";
            }};            

            DescribeLoggingOptionsResponse res = sdk.sdk.describeLoggingOptions(req);

            if (res.describeLoggingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePortal

Retrieves information about a portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePortalRequest;
import org.openapis.openapi.models.operations.DescribePortalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePortalRequest req = new DescribePortalRequest("molestiae") {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "ut";
                xAmzCredential = "culpa";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "eum";
            }};            

            DescribePortalResponse res = sdk.sdk.describePortal(req);

            if (res.describePortalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeProject

Retrieves information about a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeProjectRequest;
import org.openapis.openapi.models.operations.DescribeProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeProjectRequest req = new DescribeProjectRequest("recusandae") {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "provident";
                xAmzCredential = "quis";
                xAmzDate = "eum";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "aspernatur";
            }};            

            DescribeProjectResponse res = sdk.sdk.describeProject(req);

            if (res.describeProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeStorageConfiguration

Retrieves information about the storage configuration for IoT SiteWise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeStorageConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeStorageConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStorageConfigurationRequest req = new DescribeStorageConfigurationRequest() {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "animi";
                xAmzCredential = "nostrum";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "provident";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "animi";
            }};            

            DescribeStorageConfigurationResponse res = sdk.sdk.describeStorageConfiguration(req);

            if (res.describeStorageConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTimeSeries

<p>Retrieves information about a time series (data stream).</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTimeSeriesRequest;
import org.openapis.openapi.models.operations.DescribeTimeSeriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTimeSeriesRequest req = new DescribeTimeSeriesRequest() {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "repellat";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "in";
                xAmzSignedHeaders = "nam";
                alias = "earum";
                assetId = "officia";
                propertyId = "laborum";
            }};            

            DescribeTimeSeriesResponse res = sdk.sdk.describeTimeSeries(req);

            if (res.describeTimeSeriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateAssets

Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateAssetsRequest;
import org.openapis.openapi.models.operations.DisassociateAssetsRequestBody;
import org.openapis.openapi.models.operations.DisassociateAssetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateAssetsRequest req = new DisassociateAssetsRequest(                new DisassociateAssetsRequestBody("modi", "voluptatibus") {{
                                clientToken = "molestias";
                            }};, "officiis") {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "vitae";
                xAmzDate = "rerum";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "inventore";
            }};            

            DisassociateAssetsResponse res = sdk.sdk.disassociateAssets(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateTimeSeriesFromAssetProperty

Disassociates a time series (data stream) from an asset property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateTimeSeriesFromAssetPropertyRequest;
import org.openapis.openapi.models.operations.DisassociateTimeSeriesFromAssetPropertyRequestBody;
import org.openapis.openapi.models.operations.DisassociateTimeSeriesFromAssetPropertyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateTimeSeriesFromAssetPropertyRequest req = new DisassociateTimeSeriesFromAssetPropertyRequest(                new DisassociateTimeSeriesFromAssetPropertyRequestBody() {{
                                clientToken = "cumque";
                            }};, "quae", "perferendis", "velit") {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "eum";
                xAmzCredential = "eius";
                xAmzDate = "rem";
                xAmzSecurityToken = "at";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "eos";
            }};            

            DisassociateTimeSeriesFromAssetPropertyResponse res = sdk.sdk.disassociateTimeSeriesFromAssetProperty(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssetPropertyAggregates

<p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssetPropertyAggregatesRequest;
import org.openapis.openapi.models.operations.GetAssetPropertyAggregatesResponse;
import org.openapis.openapi.models.operations.GetAssetPropertyAggregatesTimeOrderingEnum;
import org.openapis.openapi.models.shared.AggregateTypeEnum;
import org.openapis.openapi.models.shared.QualityEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAssetPropertyAggregatesRequest req = new GetAssetPropertyAggregatesRequest(                new org.openapis.openapi.models.shared.AggregateTypeEnum[]{{
                                add(AggregateTypeEnum.AVERAGE),
                                add(AggregateTypeEnum.COUNT),
                            }}, OffsetDateTime.parse("2022-06-02T01:22:45.175Z"), "provident", OffsetDateTime.parse("2020-10-06T18:56:18.922Z")) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "illum";
                xAmzCredential = "eaque";
                xAmzDate = "earum";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "debitis";
                assetId = "aliquid";
                maxResults = 780931L;
                nextToken = "suscipit";
                propertyAlias = "dolorem";
                propertyId = "fugit";
                qualities = new org.openapis.openapi.models.shared.QualityEnum[]{{
                    add(QualityEnum.UNCERTAIN),
                    add(QualityEnum.GOOD),
                    add(QualityEnum.BAD),
                    add(QualityEnum.UNCERTAIN),
                }};
                timeOrdering = GetAssetPropertyAggregatesTimeOrderingEnum.DESCENDING;
            }};            

            GetAssetPropertyAggregatesResponse res = sdk.sdk.getAssetPropertyAggregates(req);

            if (res.getAssetPropertyAggregatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssetPropertyValue

<p>Gets an asset property's current value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssetPropertyValueRequest;
import org.openapis.openapi.models.operations.GetAssetPropertyValueResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAssetPropertyValueRequest req = new GetAssetPropertyValueRequest() {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "et";
                xAmzCredential = "ducimus";
                xAmzDate = "natus";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "adipisci";
                assetId = "quasi";
                propertyAlias = "magni";
                propertyId = "doloribus";
            }};            

            GetAssetPropertyValueResponse res = sdk.sdk.getAssetPropertyValue(req);

            if (res.getAssetPropertyValueResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssetPropertyValueHistory

<p>Gets the history of an asset property's values. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssetPropertyValueHistoryRequest;
import org.openapis.openapi.models.operations.GetAssetPropertyValueHistoryResponse;
import org.openapis.openapi.models.operations.GetAssetPropertyValueHistoryTimeOrderingEnum;
import org.openapis.openapi.models.shared.QualityEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAssetPropertyValueHistoryRequest req = new GetAssetPropertyValueHistoryRequest() {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "tempora";
                xAmzDate = "nihil";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "iusto";
                assetId = "esse";
                endDate = OffsetDateTime.parse("2021-01-15T15:03:36.543Z");
                maxResults = 967260L;
                nextToken = "vel";
                propertyAlias = "architecto";
                propertyId = "fugiat";
                qualities = new org.openapis.openapi.models.shared.QualityEnum[]{{
                    add(QualityEnum.GOOD),
                }};
                startDate = OffsetDateTime.parse("2022-09-23T23:49:53.776Z");
                timeOrdering = GetAssetPropertyValueHistoryTimeOrderingEnum.ASCENDING;
            }};            

            GetAssetPropertyValueHistoryResponse res = sdk.sdk.getAssetPropertyValueHistory(req);

            if (res.getAssetPropertyValueHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInterpolatedAssetPropertyValues

<p>Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data.</p> <p>For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInterpolatedAssetPropertyValuesQualityEnum;
import org.openapis.openapi.models.operations.GetInterpolatedAssetPropertyValuesRequest;
import org.openapis.openapi.models.operations.GetInterpolatedAssetPropertyValuesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInterpolatedAssetPropertyValuesRequest req = new GetInterpolatedAssetPropertyValuesRequest(235263L, 399812L, GetInterpolatedAssetPropertyValuesQualityEnum.GOOD, 671384L, "sunt") {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "expedita";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "officia";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "aliquid";
                assetId = "perferendis";
                endTimeOffsetInNanos = 431760L;
                intervalWindowInSeconds = 374753L;
                maxResults = 614528L;
                nextToken = "id";
                propertyAlias = "ab";
                propertyId = "error";
                startTimeOffsetInNanos = 822407L;
            }};            

            GetInterpolatedAssetPropertyValuesResponse res = sdk.sdk.getInterpolatedAssetPropertyValues(req);

            if (res.getInterpolatedAssetPropertyValuesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccessPolicies

Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccessPoliciesIdentityTypeEnum;
import org.openapis.openapi.models.operations.ListAccessPoliciesRequest;
import org.openapis.openapi.models.operations.ListAccessPoliciesResourceTypeEnum;
import org.openapis.openapi.models.operations.ListAccessPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccessPoliciesRequest req = new ListAccessPoliciesRequest() {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "libero";
                xAmzDate = "ad";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "vitae";
                iamArn = "repellendus";
                identityId = "ex";
                identityType = ListAccessPoliciesIdentityTypeEnum.IAM;
                maxResults = 405373L;
                nextToken = "ut";
                resourceId = "ad";
                resourceType = ListAccessPoliciesResourceTypeEnum.PROJECT;
            }};            

            ListAccessPoliciesResponse res = sdk.sdk.listAccessPolicies(req);

            if (res.listAccessPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssetModelProperties

Retrieves a paginated list of properties associated with an asset model. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssetModelPropertiesFilterEnum;
import org.openapis.openapi.models.operations.ListAssetModelPropertiesRequest;
import org.openapis.openapi.models.operations.ListAssetModelPropertiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssetModelPropertiesRequest req = new ListAssetModelPropertiesRequest("molestias") {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "beatae";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "rerum";
                filter = ListAssetModelPropertiesFilterEnum.BASE;
                maxResults = 634786L;
                nextToken = "voluptatem";
            }};            

            ListAssetModelPropertiesResponse res = sdk.sdk.listAssetModelProperties(req);

            if (res.listAssetModelPropertiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssetModels

Retrieves a paginated list of summaries of all asset models.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssetModelsRequest;
import org.openapis.openapi.models.operations.ListAssetModelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssetModelsRequest req = new ListAssetModelsRequest() {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "fuga";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "alias";
                maxResults = 534917L;
                nextToken = "earum";
            }};            

            ListAssetModelsResponse res = sdk.sdk.listAssetModels(req);

            if (res.listAssetModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssetProperties

Retrieves a paginated list of properties associated with an asset. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssetPropertiesFilterEnum;
import org.openapis.openapi.models.operations.ListAssetPropertiesRequest;
import org.openapis.openapi.models.operations.ListAssetPropertiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssetPropertiesRequest req = new ListAssetPropertiesRequest("sapiente") {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "minus";
                xAmzCredential = "nemo";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "perferendis";
                filter = ListAssetPropertiesFilterEnum.BASE;
                maxResults = 518150L;
                nextToken = "impedit";
            }};            

            ListAssetPropertiesResponse res = sdk.sdk.listAssetProperties(req);

            if (res.listAssetPropertiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssetRelationships

Retrieves a paginated list of asset relationships for an asset. You can use this operation to identify an asset's root asset and all associated assets between that asset and its root.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssetRelationshipsRequest;
import org.openapis.openapi.models.operations.ListAssetRelationshipsResponse;
import org.openapis.openapi.models.operations.ListAssetRelationshipsTraversalTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssetRelationshipsRequest req = new ListAssetRelationshipsRequest("nam", ListAssetRelationshipsTraversalTypeEnum.PATH_TO_ROOT) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "dolor";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "veritatis";
                maxResults = 274575L;
                nextToken = "dolor";
            }};            

            ListAssetRelationshipsResponse res = sdk.sdk.listAssetRelationships(req);

            if (res.listAssetRelationshipsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssets

<p>Retrieves a paginated list of asset summaries.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List assets based on a specific asset model.</p> </li> <li> <p>List top-level assets.</p> </li> </ul> <p>You can't use this operation to list all assets. To retrieve summaries for all of your assets, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html">ListAssetModels</a> to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssetsFilterEnum;
import org.openapis.openapi.models.operations.ListAssetsRequest;
import org.openapis.openapi.models.operations.ListAssetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssetsRequest req = new ListAssetsRequest() {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "sit";
                xAmzCredential = "modi";
                xAmzDate = "fugit";
                xAmzSecurityToken = "ab";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "quae";
                assetModelId = "dolor";
                filter = ListAssetsFilterEnum.TOP_LEVEL;
                maxResults = 369490L;
                nextToken = "consequuntur";
            }};            

            ListAssetsResponse res = sdk.sdk.listAssets(req);

            if (res.listAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssociatedAssets

<p>Retrieves a paginated list of associated assets.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List child assets associated to a parent asset by a hierarchy that you specify.</p> </li> <li> <p>List an asset's parent asset.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssociatedAssetsRequest;
import org.openapis.openapi.models.operations.ListAssociatedAssetsResponse;
import org.openapis.openapi.models.operations.ListAssociatedAssetsTraversalDirectionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssociatedAssetsRequest req = new ListAssociatedAssetsRequest("quas") {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "officiis";
                xAmzDate = "esse";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "veniam";
                hierarchyId = "nesciunt";
                maxResults = 712927L;
                nextToken = "eum";
                traversalDirection = ListAssociatedAssetsTraversalDirectionEnum.PARENT;
            }};            

            ListAssociatedAssetsResponse res = sdk.sdk.listAssociatedAssets(req);

            if (res.listAssociatedAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBulkImportJobs

Retrieves a paginated list of bulk import job requests. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ListBulkImportJobs.html">List bulk import jobs (CLI)</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBulkImportJobsFilterEnum;
import org.openapis.openapi.models.operations.ListBulkImportJobsRequest;
import org.openapis.openapi.models.operations.ListBulkImportJobsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBulkImportJobsRequest req = new ListBulkImportJobsRequest() {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "ab";
                xAmzDate = "porro";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "laboriosam";
                filter = ListBulkImportJobsFilterEnum.COMPLETED;
                maxResults = 160393L;
                nextToken = "voluptatem";
            }};            

            ListBulkImportJobsResponse res = sdk.sdk.listBulkImportJobs(req);

            if (res.listBulkImportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDashboards

Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDashboardsRequest;
import org.openapis.openapi.models.operations.ListDashboardsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDashboardsRequest req = new ListDashboardsRequest("necessitatibus") {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "at";
                xAmzDate = "vero";
                xAmzSecurityToken = "est";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "sequi";
                maxResults = 987349L;
                nextToken = "repudiandae";
            }};            

            ListDashboardsResponse res = sdk.sdk.listDashboards(req);

            if (res.listDashboardsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGateways

Retrieves a paginated list of gateways.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGatewaysRequest;
import org.openapis.openapi.models.operations.ListGatewaysResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGatewaysRequest req = new ListGatewaysRequest() {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "voluptate";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "officia";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "numquam";
                maxResults = 364912L;
                nextToken = "quos";
            }};            

            ListGatewaysResponse res = sdk.sdk.listGateways(req);

            if (res.listGatewaysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPortals

Retrieves a paginated list of IoT SiteWise Monitor portals.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPortalsRequest;
import org.openapis.openapi.models.operations.ListPortalsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPortalsRequest req = new ListPortalsRequest() {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "nesciunt";
                xAmzDate = "fuga";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "quasi";
                maxResults = 524380L;
                nextToken = "fugiat";
            }};            

            ListPortalsResponse res = sdk.sdk.listPortals(req);

            if (res.listPortalsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProjectAssets

Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProjectAssetsRequest;
import org.openapis.openapi.models.operations.ListProjectAssetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProjectAssetsRequest req = new ListProjectAssetsRequest("nisi") {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "aperiam";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "alias";
                maxResults = 608989L;
                nextToken = "eos";
            }};            

            ListProjectAssetsResponse res = sdk.sdk.listProjectAssets(req);

            if (res.listProjectAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProjects

Retrieves a paginated list of projects for an IoT SiteWise Monitor portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProjectsRequest;
import org.openapis.openapi.models.operations.ListProjectsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProjectsRequest req = new ListProjectsRequest("iste") {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "fuga";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "omnis";
                maxResults = 966390L;
                nextToken = "minima";
            }};            

            ListProjectsResponse res = sdk.sdk.listProjects(req);

            if (res.listProjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Retrieves the list of tags for an IoT SiteWise resource.

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
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("maxime") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "quos";
                xAmzDate = "commodi";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "totam";
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

## listTimeSeries

Retrieves a paginated list of time series (data streams).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTimeSeriesRequest;
import org.openapis.openapi.models.operations.ListTimeSeriesResponse;
import org.openapis.openapi.models.operations.ListTimeSeriesTimeSeriesTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTimeSeriesRequest req = new ListTimeSeriesRequest() {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "nam";
                xAmzCredential = "vero";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "alias";
                aliasPrefix = "quasi";
                assetId = "non";
                maxResults = 978548L;
                nextToken = "enim";
                timeSeriesType = ListTimeSeriesTimeSeriesTypeEnum.DISASSOCIATED;
            }};            

            ListTimeSeriesResponse res = sdk.sdk.listTimeSeries(req);

            if (res.listTimeSeriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDefaultEncryptionConfiguration

Sets the default encryption configuration for the Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDefaultEncryptionConfigurationRequest;
import org.openapis.openapi.models.operations.PutDefaultEncryptionConfigurationRequestBody;
import org.openapis.openapi.models.operations.PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum;
import org.openapis.openapi.models.operations.PutDefaultEncryptionConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutDefaultEncryptionConfigurationRequest req = new PutDefaultEncryptionConfigurationRequest(                new PutDefaultEncryptionConfigurationRequestBody(PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum.KMS_BASED_ENCRYPTION) {{
                                kmsKeyId = "esse";
                            }};) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "est";
                xAmzDate = "quis";
                xAmzSecurityToken = "sint";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "impedit";
            }};            

            PutDefaultEncryptionConfigurationResponse res = sdk.sdk.putDefaultEncryptionConfiguration(req);

            if (res.putDefaultEncryptionConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putLoggingOptions

Sets logging options for IoT SiteWise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutLoggingOptionsRequest;
import org.openapis.openapi.models.operations.PutLoggingOptionsRequestBody;
import org.openapis.openapi.models.operations.PutLoggingOptionsRequestBodyLoggingOptions;
import org.openapis.openapi.models.operations.PutLoggingOptionsResponse;
import org.openapis.openapi.models.shared.LoggingLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutLoggingOptionsRequest req = new PutLoggingOptionsRequest(                new PutLoggingOptionsRequestBody(                new PutLoggingOptionsRequestBodyLoggingOptions() {{
                                                level = LoggingLevelEnum.OFF;
                                            }};);) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "ex";
                xAmzCredential = "voluptas";
                xAmzDate = "debitis";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "minus";
            }};            

            PutLoggingOptionsResponse res = sdk.sdk.putLoggingOptions(req);

            if (res.putLoggingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putStorageConfiguration

Configures storage settings for IoT SiteWise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutStorageConfigurationRequest;
import org.openapis.openapi.models.operations.PutStorageConfigurationRequestBody;
import org.openapis.openapi.models.operations.PutStorageConfigurationRequestBodyDisassociatedDataStorageEnum;
import org.openapis.openapi.models.operations.PutStorageConfigurationRequestBodyMultiLayerStorage;
import org.openapis.openapi.models.operations.PutStorageConfigurationRequestBodyRetentionPeriod;
import org.openapis.openapi.models.operations.PutStorageConfigurationRequestBodyStorageTypeEnum;
import org.openapis.openapi.models.operations.PutStorageConfigurationResponse;
import org.openapis.openapi.models.shared.CustomerManagedS3Storage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutStorageConfigurationRequest req = new PutStorageConfigurationRequest(                new PutStorageConfigurationRequestBody(PutStorageConfigurationRequestBodyStorageTypeEnum.MULTI_LAYER_STORAGE) {{
                                disassociatedDataStorage = PutStorageConfigurationRequestBodyDisassociatedDataStorageEnum.ENABLED;
                                multiLayerStorage = new PutStorageConfigurationRequestBodyMultiLayerStorage() {{
                                    customerManagedS3Storage = new CustomerManagedS3Storage("velit", "atque");;
                                }};;
                                retentionPeriod = new PutStorageConfigurationRequestBodyRetentionPeriod() {{
                                    numberOfDays = 216457L;
                                    unlimited = false;
                                }};;
                            }};) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "soluta";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "nam";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "iusto";
            }};            

            PutStorageConfigurationResponse res = sdk.sdk.putStorageConfiguration(req);

            if (res.putStorageConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.

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
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("dignissimos", "neque");
                                            }});, "quo") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "iure";
                xAmzDate = "odit";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "magnam";
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

Removes a tag from an IoT SiteWise resource.

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
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("inventore",                 new String[]{{
                                add("libero"),
                                add("architecto"),
                                add("voluptatibus"),
                                add("quia"),
                            }}) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "velit";
                xAmzDate = "illo";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "ea";
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

## updateAccessPolicy

Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor portal or project resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccessPolicyRequest;
import org.openapis.openapi.models.operations.UpdateAccessPolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateAccessPolicyRequestBodyAccessPolicyIdentity;
import org.openapis.openapi.models.operations.UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum;
import org.openapis.openapi.models.operations.UpdateAccessPolicyRequestBodyAccessPolicyResource;
import org.openapis.openapi.models.operations.UpdateAccessPolicyResponse;
import org.openapis.openapi.models.shared.GroupIdentity;
import org.openapis.openapi.models.shared.IAMRoleIdentity;
import org.openapis.openapi.models.shared.IAMUserIdentity;
import org.openapis.openapi.models.shared.PortalResource;
import org.openapis.openapi.models.shared.ProjectResource;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserIdentity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAccessPolicyRequest req = new UpdateAccessPolicyRequest(                new UpdateAccessPolicyRequestBody(                new UpdateAccessPolicyRequestBodyAccessPolicyIdentity() {{
                                                group = new GroupIdentity("vero");;
                                                iamRole = new IAMRoleIdentity("excepturi");;
                                                iamUser = new IAMUserIdentity("eum");;
                                                user = new UserIdentity("velit");;
                                            }};, UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum.ADMINISTRATOR,                 new UpdateAccessPolicyRequestBodyAccessPolicyResource() {{
                                                portal = new PortalResource("perspiciatis");;
                                                project = new ProjectResource("earum");;
                                            }};) {{
                                clientToken = "dicta";
                            }};, "impedit") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "iste";
                xAmzCredential = "itaque";
                xAmzDate = "alias";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "velit";
            }};            

            UpdateAccessPolicyResponse res = sdk.sdk.updateAccessPolicy(req);

            if (res.updateAccessPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAsset

Updates an asset's name. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAssetRequest;
import org.openapis.openapi.models.operations.UpdateAssetRequestBody;
import org.openapis.openapi.models.operations.UpdateAssetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAssetRequest req = new UpdateAssetRequest(                new UpdateAssetRequestBody("non") {{
                                assetDescription = "dolor";
                                clientToken = "iusto";
                            }};, "sit") {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "officia";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "ea";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "voluptas";
            }};            

            UpdateAssetResponse res = sdk.sdk.updateAsset(req);

            if (res.updateAssetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAssetModel

<p>Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.</p> <important> <p>This operation overwrites the existing model with the provided model. To avoid deleting your asset model's properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p> <p>If you remove a property from an asset model, IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, IoT SiteWise disassociates every asset associated with that hierarchy. You can't change the type or data type of an existing property.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAssetModelRequest;
import org.openapis.openapi.models.operations.UpdateAssetModelRequestBody;
import org.openapis.openapi.models.operations.UpdateAssetModelResponse;
import org.openapis.openapi.models.shared.AssetModelCompositeModel;
import org.openapis.openapi.models.shared.AssetModelHierarchy;
import org.openapis.openapi.models.shared.AssetModelProperty;
import org.openapis.openapi.models.shared.Attribute;
import org.openapis.openapi.models.shared.ComputeLocationEnum;
import org.openapis.openapi.models.shared.ExpressionVariable;
import org.openapis.openapi.models.shared.ForwardingConfig;
import org.openapis.openapi.models.shared.ForwardingConfigStateEnum;
import org.openapis.openapi.models.shared.Measurement;
import org.openapis.openapi.models.shared.MeasurementProcessingConfig;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricProcessingConfig;
import org.openapis.openapi.models.shared.MetricWindow;
import org.openapis.openapi.models.shared.PropertyDataTypeEnum;
import org.openapis.openapi.models.shared.PropertyType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Transform;
import org.openapis.openapi.models.shared.TransformProcessingConfig;
import org.openapis.openapi.models.shared.TumblingWindow;
import org.openapis.openapi.models.shared.VariableValue;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAssetModelRequest req = new UpdateAssetModelRequest(                new UpdateAssetModelRequestBody("placeat") {{
                                assetModelCompositeModels = new org.openapis.openapi.models.shared.AssetModelCompositeModel[]{{
                                    add(new AssetModelCompositeModel("itaque", "et") {{
                                        description = "expedita";
                                        id = "8f759eac-55a9-4741-9311-352965bb8a72";
                                        name = "Mr. Anne Kautzer";
                                        properties = "neque";
                                        type = "exercitationem";
                                    }}),
                                    add(new AssetModelCompositeModel("necessitatibus", "tempore") {{
                                        description = "ipsum";
                                        id = "9dbc2259-b1ab-4da8-8070-e1084cb0672d";
                                        name = "Jodi Schumm";
                                        properties = "provident";
                                        type = "accusamus";
                                    }}),
                                    add(new AssetModelCompositeModel("fugit", "numquam") {{
                                        description = "sint";
                                        id = "665b85ef-bd02-4bae-8be2-d782259e3ea4";
                                        name = "Tim Breitenberg";
                                        properties = "delectus";
                                        type = "cupiditate";
                                    }}),
                                }};
                                assetModelDescription = "numquam";
                                assetModelHierarchies = new org.openapis.openapi.models.shared.AssetModelHierarchy[]{{
                                    add(new AssetModelHierarchy("delectus", "tempore") {{
                                        childAssetModelId = "at";
                                        id = "a7ce52b8-95c5-437c-a454-efb0b34896c3";
                                        name = "Grant Heathcote";
                                    }}),
                                }};
                                assetModelProperties = new org.openapis.openapi.models.shared.AssetModelProperty[]{{
                                    add(new AssetModelProperty(PropertyDataTypeEnum.STRING, "labore",                 new PropertyType() {{
                                                        attribute = new Attribute() {{
                                                            defaultValue = "assumenda";
                                                        }};;
                                                        measurement = new Measurement() {{
                                                            processingConfig = new MeasurementProcessingConfig(                new ForwardingConfig(ForwardingConfigStateEnum.DISABLED););;
                                                        }};;
                                                        metric = new Metric("quisquam",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                            add(new ExpressionVariable("provident",                 new VariableValue("repudiandae") {{
                                                                                                hierarchyId = "rerum";
                                                                                            }};) {{
                                                                                name = "Cornelius Altenwerth";
                                                                                value = new VariableValue("quas") {{
                                                                                    hierarchyId = "nam";
                                                                                    propertyId = "expedita";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("impedit",                 new VariableValue("commodi") {{
                                                                                                hierarchyId = "aut";
                                                                                            }};) {{
                                                                                name = "Ana Swift";
                                                                                value = new VariableValue("commodi") {{
                                                                                    hierarchyId = "iure";
                                                                                    propertyId = "dolorem";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("amet",                 new VariableValue("quasi") {{
                                                                                                hierarchyId = "dicta";
                                                                                            }};) {{
                                                                                name = "Lauren Beier";
                                                                                value = new VariableValue("cum") {{
                                                                                    hierarchyId = "praesentium";
                                                                                    propertyId = "quidem";
                                                                                }};
                                                                            }}),
                                                                        }},                 new MetricWindow() {{
                                                                            tumbling = new TumblingWindow("laudantium") {{
                                                                                offset = "doloremque";
                                                                            }};;
                                                                        }};) {{
                                                            processingConfig = new MetricProcessingConfig(ComputeLocationEnum.CLOUD);;
                                                        }};;
                                                        transform = new Transform("iusto",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                            add(new ExpressionVariable("itaque",                 new VariableValue("facilis") {{
                                                                                                hierarchyId = "corrupti";
                                                                                            }};) {{
                                                                                name = "Lorenzo Treutel";
                                                                                value = new VariableValue("molestiae") {{
                                                                                    hierarchyId = "consequatur";
                                                                                    propertyId = "nemo";
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            processingConfig = new TransformProcessingConfig(ComputeLocationEnum.EDGE) {{
                                                                forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.ENABLED);;
                                                            }};;
                                                        }};;
                                                    }};) {{
                                        dataType = PropertyDataTypeEnum.STRING;
                                        dataTypeSpec = "repellat";
                                        id = "d5707577-9291-477d-aac6-46ecb573409e";
                                        name = "Dr. Elvira Robel";
                                        type = new PropertyType() {{
                                            attribute = new Attribute() {{
                                                defaultValue = "animi";
                                            }};
                                            measurement = new Measurement() {{
                                                processingConfig = new MeasurementProcessingConfig(                new ForwardingConfig(ForwardingConfigStateEnum.DISABLED);) {{
                                                    forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.ENABLED) {{
                                                        state = ForwardingConfigStateEnum.DISABLED;
                                                    }};
                                                }};
                                            }};
                                            metric = new Metric("enim",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                add(new ExpressionVariable("quos",                 new VariableValue("iste") {{
                                                                                    hierarchyId = "assumenda";
                                                                                }};) {{
                                                                    name = "Willard Larson";
                                                                    value = new VariableValue("architecto") {{
                                                                        hierarchyId = "eaque";
                                                                        propertyId = "saepe";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("saepe",                 new VariableValue("deserunt") {{
                                                                                    hierarchyId = "doloremque";
                                                                                }};) {{
                                                                    name = "Dr. Marco Frami";
                                                                    value = new VariableValue("adipisci") {{
                                                                        hierarchyId = "cum";
                                                                        propertyId = "ipsum";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("magnam",                 new VariableValue("itaque") {{
                                                                                    hierarchyId = "sed";
                                                                                }};) {{
                                                                    name = "Ms. Sally Rempel";
                                                                    value = new VariableValue("non") {{
                                                                        hierarchyId = "eligendi";
                                                                        propertyId = "possimus";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("exercitationem",                 new VariableValue("ab") {{
                                                                                    hierarchyId = "velit";
                                                                                }};) {{
                                                                    name = "Jerome Cruickshank";
                                                                    value = new VariableValue("amet") {{
                                                                        hierarchyId = "odit";
                                                                        propertyId = "pariatur";
                                                                    }};
                                                                }}),
                                                            }},                 new MetricWindow() {{
                                                                tumbling = new TumblingWindow("facilis") {{
                                                                    offset = "tempore";
                                                                }};;
                                                            }};) {{
                                                expression = "consequuntur";
                                                processingConfig = new MetricProcessingConfig(ComputeLocationEnum.CLOUD) {{
                                                    computeLocation = ComputeLocationEnum.CLOUD;
                                                }};
                                                variables = new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                    add(new ExpressionVariable("nemo",                 new VariableValue("aliquam") {{
                                                                        hierarchyId = "nostrum";
                                                                    }};) {{
                                                        name = "Mrs. Elisa Bogisich";
                                                        value = new VariableValue("occaecati") {{
                                                            hierarchyId = "libero";
                                                            propertyId = "excepturi";
                                                        }};
                                                    }}),
                                                }};
                                                window = new MetricWindow() {{
                                                    tumbling = new TumblingWindow("sint") {{
                                                        interval = "doloribus";
                                                        offset = "eligendi";
                                                    }};
                                                }};
                                            }};
                                            transform = new Transform("fugiat",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                add(new ExpressionVariable("fugiat",                 new VariableValue("ad") {{
                                                                                    hierarchyId = "aspernatur";
                                                                                }};) {{
                                                                    name = "Miss Kelly Ernser";
                                                                    value = new VariableValue("esse") {{
                                                                        hierarchyId = "vitae";
                                                                        propertyId = "dignissimos";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("accusamus",                 new VariableValue("saepe") {{
                                                                                    hierarchyId = "tempore";
                                                                                }};) {{
                                                                    name = "Marta Kub";
                                                                    value = new VariableValue("incidunt") {{
                                                                        hierarchyId = "illo";
                                                                        propertyId = "ab";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("quisquam",                 new VariableValue("sequi") {{
                                                                                    hierarchyId = "nihil";
                                                                                }};) {{
                                                                    name = "Julia Wisozk";
                                                                    value = new VariableValue("repellat") {{
                                                                        hierarchyId = "praesentium";
                                                                        propertyId = "nemo";
                                                                    }};
                                                                }}),
                                                            }}) {{
                                                expression = "nisi";
                                                processingConfig = new TransformProcessingConfig(ComputeLocationEnum.CLOUD) {{
                                                    computeLocation = ComputeLocationEnum.CLOUD;
                                                    forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.ENABLED) {{
                                                        state = ForwardingConfigStateEnum.DISABLED;
                                                    }};
                                                }};
                                                variables = new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                    add(new ExpressionVariable("voluptatibus",                 new VariableValue("voluptatibus") {{
                                                                        hierarchyId = "consequuntur";
                                                                    }};) {{
                                                        name = "Alma Rempel";
                                                        value = new VariableValue("ad") {{
                                                            hierarchyId = "facilis";
                                                            propertyId = "ipsum";
                                                        }};
                                                    }}),
                                                    add(new ExpressionVariable("est",                 new VariableValue("rem") {{
                                                                        hierarchyId = "eligendi";
                                                                    }};) {{
                                                        name = "Marcus Prohaska";
                                                        value = new VariableValue("iusto") {{
                                                            hierarchyId = "nostrum";
                                                            propertyId = "neque";
                                                        }};
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        unit = "deleniti";
                                    }}),
                                    add(new AssetModelProperty(PropertyDataTypeEnum.INTEGER, "dolore",                 new PropertyType() {{
                                                        attribute = new Attribute() {{
                                                            defaultValue = "modi";
                                                        }};;
                                                        measurement = new Measurement() {{
                                                            processingConfig = new MeasurementProcessingConfig(                new ForwardingConfig(ForwardingConfigStateEnum.ENABLED););;
                                                        }};;
                                                        metric = new Metric("maxime",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                            add(new ExpressionVariable("reiciendis",                 new VariableValue("ab") {{
                                                                                                hierarchyId = "sint";
                                                                                            }};) {{
                                                                                name = "Nadine Terry";
                                                                                value = new VariableValue("totam") {{
                                                                                    hierarchyId = "porro";
                                                                                    propertyId = "accusamus";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("corporis",                 new VariableValue("voluptas") {{
                                                                                                hierarchyId = "consequuntur";
                                                                                            }};) {{
                                                                                name = "Joy Kessler";
                                                                                value = new VariableValue("neque") {{
                                                                                    hierarchyId = "debitis";
                                                                                    propertyId = "vel";
                                                                                }};
                                                                            }}),
                                                                        }},                 new MetricWindow() {{
                                                                            tumbling = new TumblingWindow("officia") {{
                                                                                offset = "reprehenderit";
                                                                            }};;
                                                                        }};) {{
                                                            processingConfig = new MetricProcessingConfig(ComputeLocationEnum.CLOUD);;
                                                        }};;
                                                        transform = new Transform("eius",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                            add(new ExpressionVariable("quos",                 new VariableValue("doloribus") {{
                                                                                                hierarchyId = "fugiat";
                                                                                            }};) {{
                                                                                name = "Emilio Barton";
                                                                                value = new VariableValue("aliquam") {{
                                                                                    hierarchyId = "neque";
                                                                                    propertyId = "facere";
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            processingConfig = new TransformProcessingConfig(ComputeLocationEnum.CLOUD) {{
                                                                forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.ENABLED);;
                                                            }};;
                                                        }};;
                                                    }};) {{
                                        dataType = PropertyDataTypeEnum.STRUCT;
                                        dataTypeSpec = "eos";
                                        id = "810331f3-981d-44c7-80b6-07f3c93c73b9";
                                        name = "Luke Fay";
                                        type = new PropertyType() {{
                                            attribute = new Attribute() {{
                                                defaultValue = "quo";
                                            }};
                                            measurement = new Measurement() {{
                                                processingConfig = new MeasurementProcessingConfig(                new ForwardingConfig(ForwardingConfigStateEnum.ENABLED);) {{
                                                    forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.ENABLED) {{
                                                        state = ForwardingConfigStateEnum.ENABLED;
                                                    }};
                                                }};
                                            }};
                                            metric = new Metric("exercitationem",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                add(new ExpressionVariable("deleniti",                 new VariableValue("enim") {{
                                                                                    hierarchyId = "voluptate";
                                                                                }};) {{
                                                                    name = "Casey Gleason PhD";
                                                                    value = new VariableValue("odit") {{
                                                                        hierarchyId = "rem";
                                                                        propertyId = "aperiam";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("dignissimos",                 new VariableValue("fugiat") {{
                                                                                    hierarchyId = "nostrum";
                                                                                }};) {{
                                                                    name = "Warren Rempel I";
                                                                    value = new VariableValue("mollitia") {{
                                                                        hierarchyId = "eum";
                                                                        propertyId = "nesciunt";
                                                                    }};
                                                                }}),
                                                            }},                 new MetricWindow() {{
                                                                tumbling = new TumblingWindow("molestiae") {{
                                                                    offset = "veniam";
                                                                }};;
                                                            }};) {{
                                                expression = "dignissimos";
                                                processingConfig = new MetricProcessingConfig(ComputeLocationEnum.EDGE) {{
                                                    computeLocation = ComputeLocationEnum.CLOUD;
                                                }};
                                                variables = new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                    add(new ExpressionVariable("hic",                 new VariableValue("deserunt") {{
                                                                        hierarchyId = "delectus";
                                                                    }};) {{
                                                        name = "Roy Christiansen";
                                                        value = new VariableValue("illo") {{
                                                            hierarchyId = "non";
                                                            propertyId = "ab";
                                                        }};
                                                    }}),
                                                }};
                                                window = new MetricWindow() {{
                                                    tumbling = new TumblingWindow("in") {{
                                                        interval = "non";
                                                        offset = "distinctio";
                                                    }};
                                                }};
                                            }};
                                            transform = new Transform("modi",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                add(new ExpressionVariable("impedit",                 new VariableValue("ducimus") {{
                                                                                    hierarchyId = "odit";
                                                                                }};) {{
                                                                    name = "Ross Nikolaus";
                                                                    value = new VariableValue("ea") {{
                                                                        hierarchyId = "sequi";
                                                                        propertyId = "aliquid";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("nisi",                 new VariableValue("rerum") {{
                                                                                    hierarchyId = "recusandae";
                                                                                }};) {{
                                                                    name = "Faith Zulauf";
                                                                    value = new VariableValue("doloremque") {{
                                                                        hierarchyId = "natus";
                                                                        propertyId = "accusamus";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("eligendi",                 new VariableValue("quae") {{
                                                                                    hierarchyId = "officiis";
                                                                                }};) {{
                                                                    name = "Kyle Leffler";
                                                                    value = new VariableValue("voluptatibus") {{
                                                                        hierarchyId = "quisquam";
                                                                        propertyId = "dicta";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("a",                 new VariableValue("iste") {{
                                                                                    hierarchyId = "dicta";
                                                                                }};) {{
                                                                    name = "Alice Hamill";
                                                                    value = new VariableValue("reiciendis") {{
                                                                        hierarchyId = "perferendis";
                                                                        propertyId = "facilis";
                                                                    }};
                                                                }}),
                                                            }}) {{
                                                expression = "reiciendis";
                                                processingConfig = new TransformProcessingConfig(ComputeLocationEnum.EDGE) {{
                                                    computeLocation = ComputeLocationEnum.EDGE;
                                                    forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.DISABLED) {{
                                                        state = ForwardingConfigStateEnum.DISABLED;
                                                    }};
                                                }};
                                                variables = new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                    add(new ExpressionVariable("quaerat",                 new VariableValue("itaque") {{
                                                                        hierarchyId = "minus";
                                                                    }};) {{
                                                        name = "Gertrude Gerhold";
                                                        value = new VariableValue("nesciunt") {{
                                                            hierarchyId = "voluptate";
                                                            propertyId = "consectetur";
                                                        }};
                                                    }}),
                                                    add(new ExpressionVariable("alias",                 new VariableValue("rem") {{
                                                                        hierarchyId = "aut";
                                                                    }};) {{
                                                        name = "Lola Kshlerin MD";
                                                        value = new VariableValue("fuga") {{
                                                            hierarchyId = "amet";
                                                            propertyId = "autem";
                                                        }};
                                                    }}),
                                                    add(new ExpressionVariable("officia",                 new VariableValue("sed") {{
                                                                        hierarchyId = "voluptatem";
                                                                    }};) {{
                                                        name = "Mr. Dwayne Sipes PhD";
                                                        value = new VariableValue("nulla") {{
                                                            hierarchyId = "delectus";
                                                            propertyId = "mollitia";
                                                        }};
                                                    }}),
                                                    add(new ExpressionVariable("explicabo",                 new VariableValue("beatae") {{
                                                                        hierarchyId = "aliquid";
                                                                    }};) {{
                                                        name = "Mrs. Olive Weissnat";
                                                        value = new VariableValue("harum") {{
                                                            hierarchyId = "qui";
                                                            propertyId = "necessitatibus";
                                                        }};
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        unit = "quos";
                                    }}),
                                    add(new AssetModelProperty(PropertyDataTypeEnum.DOUBLE, "quae",                 new PropertyType() {{
                                                        attribute = new Attribute() {{
                                                            defaultValue = "magni";
                                                        }};;
                                                        measurement = new Measurement() {{
                                                            processingConfig = new MeasurementProcessingConfig(                new ForwardingConfig(ForwardingConfigStateEnum.ENABLED););;
                                                        }};;
                                                        metric = new Metric("sed",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                            add(new ExpressionVariable("asperiores",                 new VariableValue("rem") {{
                                                                                                hierarchyId = "dicta";
                                                                                            }};) {{
                                                                                name = "Jose Mante";
                                                                                value = new VariableValue("alias") {{
                                                                                    hierarchyId = "laudantium";
                                                                                    propertyId = "maiores";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("quasi",                 new VariableValue("neque") {{
                                                                                                hierarchyId = "vero";
                                                                                            }};) {{
                                                                                name = "Lana Yost";
                                                                                value = new VariableValue("eligendi") {{
                                                                                    hierarchyId = "esse";
                                                                                    propertyId = "in";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("rerum",                 new VariableValue("alias") {{
                                                                                                hierarchyId = "error";
                                                                                            }};) {{
                                                                                name = "Edward Denesik II";
                                                                                value = new VariableValue("corporis") {{
                                                                                    hierarchyId = "dicta";
                                                                                    propertyId = "odit";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("quae",                 new VariableValue("similique") {{
                                                                                                hierarchyId = "incidunt";
                                                                                            }};) {{
                                                                                name = "Carol O'Reilly";
                                                                                value = new VariableValue("ullam") {{
                                                                                    hierarchyId = "quas";
                                                                                    propertyId = "veritatis";
                                                                                }};
                                                                            }}),
                                                                        }},                 new MetricWindow() {{
                                                                            tumbling = new TumblingWindow("quam") {{
                                                                                offset = "magni";
                                                                            }};;
                                                                        }};) {{
                                                            processingConfig = new MetricProcessingConfig(ComputeLocationEnum.CLOUD);;
                                                        }};;
                                                        transform = new Transform("delectus",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                            add(new ExpressionVariable("laudantium",                 new VariableValue("velit") {{
                                                                                                hierarchyId = "reiciendis";
                                                                                            }};) {{
                                                                                name = "Peggy Schneider";
                                                                                value = new VariableValue("maiores") {{
                                                                                    hierarchyId = "aliquam";
                                                                                    propertyId = "excepturi";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("asperiores",                 new VariableValue("a") {{
                                                                                                hierarchyId = "nobis";
                                                                                            }};) {{
                                                                                name = "Renee Beer";
                                                                                value = new VariableValue("aliquid") {{
                                                                                    hierarchyId = "quas";
                                                                                    propertyId = "molestiae";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("quidem",                 new VariableValue("modi") {{
                                                                                                hierarchyId = "voluptates";
                                                                                            }};) {{
                                                                                name = "Steven Carter";
                                                                                value = new VariableValue("tempore") {{
                                                                                    hierarchyId = "eveniet";
                                                                                    propertyId = "porro";
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            processingConfig = new TransformProcessingConfig(ComputeLocationEnum.EDGE) {{
                                                                forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.DISABLED);;
                                                            }};;
                                                        }};;
                                                    }};) {{
                                        dataType = PropertyDataTypeEnum.INTEGER;
                                        dataTypeSpec = "vitae";
                                        id = "3a1f5fd9-4259-4c0b-b6f2-5ea944f3b756";
                                        name = "Andrew Brekke";
                                        type = new PropertyType() {{
                                            attribute = new Attribute() {{
                                                defaultValue = "quisquam";
                                            }};
                                            measurement = new Measurement() {{
                                                processingConfig = new MeasurementProcessingConfig(                new ForwardingConfig(ForwardingConfigStateEnum.ENABLED);) {{
                                                    forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.DISABLED) {{
                                                        state = ForwardingConfigStateEnum.DISABLED;
                                                    }};
                                                }};
                                            }};
                                            metric = new Metric("architecto",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                add(new ExpressionVariable("debitis",                 new VariableValue("ullam") {{
                                                                                    hierarchyId = "architecto";
                                                                                }};) {{
                                                                    name = "Frank Rolfson";
                                                                    value = new VariableValue("perspiciatis") {{
                                                                        hierarchyId = "dicta";
                                                                        propertyId = "vel";
                                                                    }};
                                                                }}),
                                                            }},                 new MetricWindow() {{
                                                                tumbling = new TumblingWindow("accusantium") {{
                                                                    offset = "perferendis";
                                                                }};;
                                                            }};) {{
                                                expression = "minima";
                                                processingConfig = new MetricProcessingConfig(ComputeLocationEnum.EDGE) {{
                                                    computeLocation = ComputeLocationEnum.EDGE;
                                                }};
                                                variables = new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                    add(new ExpressionVariable("impedit",                 new VariableValue("sit") {{
                                                                        hierarchyId = "nemo";
                                                                    }};) {{
                                                        name = "Amber Fisher";
                                                        value = new VariableValue("facilis") {{
                                                            hierarchyId = "exercitationem";
                                                            propertyId = "expedita";
                                                        }};
                                                    }}),
                                                    add(new ExpressionVariable("a",                 new VariableValue("quisquam") {{
                                                                        hierarchyId = "enim";
                                                                    }};) {{
                                                        name = "Eugene Feeney";
                                                        value = new VariableValue("itaque") {{
                                                            hierarchyId = "veniam";
                                                            propertyId = "quod";
                                                        }};
                                                    }}),
                                                }};
                                                window = new MetricWindow() {{
                                                    tumbling = new TumblingWindow("officiis") {{
                                                        interval = "doloribus";
                                                        offset = "assumenda";
                                                    }};
                                                }};
                                            }};
                                            transform = new Transform("laborum",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                add(new ExpressionVariable("est",                 new VariableValue("occaecati") {{
                                                                                    hierarchyId = "labore";
                                                                                }};) {{
                                                                    name = "Randall Schmitt III";
                                                                    value = new VariableValue("laborum") {{
                                                                        hierarchyId = "deserunt";
                                                                        propertyId = "molestias";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("nostrum",                 new VariableValue("officiis") {{
                                                                                    hierarchyId = "unde";
                                                                                }};) {{
                                                                    name = "Thomas Conroy";
                                                                    value = new VariableValue("hic") {{
                                                                        hierarchyId = "quaerat";
                                                                        propertyId = "eligendi";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("facere",                 new VariableValue("impedit") {{
                                                                                    hierarchyId = "quasi";
                                                                                }};) {{
                                                                    name = "Jeremiah O'Hara";
                                                                    value = new VariableValue("fuga") {{
                                                                        hierarchyId = "esse";
                                                                        propertyId = "corrupti";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("eaque",                 new VariableValue("architecto") {{
                                                                                    hierarchyId = "similique";
                                                                                }};) {{
                                                                    name = "Mr. Forrest Howe";
                                                                    value = new VariableValue("consequatur") {{
                                                                        hierarchyId = "necessitatibus";
                                                                        propertyId = "maxime";
                                                                    }};
                                                                }}),
                                                            }}) {{
                                                expression = "veritatis";
                                                processingConfig = new TransformProcessingConfig(ComputeLocationEnum.CLOUD) {{
                                                    computeLocation = ComputeLocationEnum.CLOUD;
                                                    forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.DISABLED) {{
                                                        state = ForwardingConfigStateEnum.ENABLED;
                                                    }};
                                                }};
                                                variables = new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                    add(new ExpressionVariable("natus",                 new VariableValue("provident") {{
                                                                        hierarchyId = "cum";
                                                                    }};) {{
                                                        name = "Delia Franecki";
                                                        value = new VariableValue("odio") {{
                                                            hierarchyId = "laboriosam";
                                                            propertyId = "sed";
                                                        }};
                                                    }}),
                                                    add(new ExpressionVariable("hic",                 new VariableValue("cum") {{
                                                                        hierarchyId = "aspernatur";
                                                                    }};) {{
                                                        name = "Andres Predovic";
                                                        value = new VariableValue("perspiciatis") {{
                                                            hierarchyId = "unde";
                                                            propertyId = "modi";
                                                        }};
                                                    }}),
                                                    add(new ExpressionVariable("quo",                 new VariableValue("nesciunt") {{
                                                                        hierarchyId = "illum";
                                                                    }};) {{
                                                        name = "Alton Goyette";
                                                        value = new VariableValue("autem") {{
                                                            hierarchyId = "id";
                                                            propertyId = "saepe";
                                                        }};
                                                    }}),
                                                    add(new ExpressionVariable("pariatur",                 new VariableValue("ad") {{
                                                                        hierarchyId = "facere";
                                                                    }};) {{
                                                        name = "Desiree Quigley";
                                                        value = new VariableValue("distinctio") {{
                                                            hierarchyId = "assumenda";
                                                            propertyId = "recusandae";
                                                        }};
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        unit = "porro";
                                    }}),
                                    add(new AssetModelProperty(PropertyDataTypeEnum.BOOLEAN_, "commodi",                 new PropertyType() {{
                                                        attribute = new Attribute() {{
                                                            defaultValue = "alias";
                                                        }};;
                                                        measurement = new Measurement() {{
                                                            processingConfig = new MeasurementProcessingConfig(                new ForwardingConfig(ForwardingConfigStateEnum.ENABLED););;
                                                        }};;
                                                        metric = new Metric("aut",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                            add(new ExpressionVariable("unde",                 new VariableValue("illo") {{
                                                                                                hierarchyId = "nihil";
                                                                                            }};) {{
                                                                                name = "Jay Morar";
                                                                                value = new VariableValue("occaecati") {{
                                                                                    hierarchyId = "placeat";
                                                                                    propertyId = "voluptas";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("cumque",                 new VariableValue("delectus") {{
                                                                                                hierarchyId = "labore";
                                                                                            }};) {{
                                                                                name = "Miss Juana Hilpert MD";
                                                                                value = new VariableValue("beatae") {{
                                                                                    hierarchyId = "facere";
                                                                                    propertyId = "facilis";
                                                                                }};
                                                                            }}),
                                                                        }},                 new MetricWindow() {{
                                                                            tumbling = new TumblingWindow("expedita") {{
                                                                                offset = "corrupti";
                                                                            }};;
                                                                        }};) {{
                                                            processingConfig = new MetricProcessingConfig(ComputeLocationEnum.CLOUD);;
                                                        }};;
                                                        transform = new Transform("atque",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                            add(new ExpressionVariable("id",                 new VariableValue("excepturi") {{
                                                                                                hierarchyId = "occaecati";
                                                                                            }};) {{
                                                                                name = "Jody Will";
                                                                                value = new VariableValue("porro") {{
                                                                                    hierarchyId = "quod";
                                                                                    propertyId = "minus";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("pariatur",                 new VariableValue("eligendi") {{
                                                                                                hierarchyId = "recusandae";
                                                                                            }};) {{
                                                                                name = "Garrett Koch";
                                                                                value = new VariableValue("fugit") {{
                                                                                    hierarchyId = "accusantium";
                                                                                    propertyId = "soluta";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("rerum",                 new VariableValue("doloremque") {{
                                                                                                hierarchyId = "voluptatem";
                                                                                            }};) {{
                                                                                name = "Maria Larson";
                                                                                value = new VariableValue("magni") {{
                                                                                    hierarchyId = "voluptates";
                                                                                    propertyId = "tempora";
                                                                                }};
                                                                            }}),
                                                                            add(new ExpressionVariable("rerum",                 new VariableValue("deserunt") {{
                                                                                                hierarchyId = "atque";
                                                                                            }};) {{
                                                                                name = "Cristina Keeling";
                                                                                value = new VariableValue("atque") {{
                                                                                    hierarchyId = "blanditiis";
                                                                                    propertyId = "nihil";
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            processingConfig = new TransformProcessingConfig(ComputeLocationEnum.EDGE) {{
                                                                forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.ENABLED);;
                                                            }};;
                                                        }};;
                                                    }};) {{
                                        dataType = PropertyDataTypeEnum.STRING;
                                        dataTypeSpec = "eligendi";
                                        id = "f789ffaf-eda5-43e5-ae6e-0ac184c2b9c2";
                                        name = "Bessie Schmidt";
                                        type = new PropertyType() {{
                                            attribute = new Attribute() {{
                                                defaultValue = "amet";
                                            }};
                                            measurement = new Measurement() {{
                                                processingConfig = new MeasurementProcessingConfig(                new ForwardingConfig(ForwardingConfigStateEnum.ENABLED);) {{
                                                    forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.DISABLED) {{
                                                        state = ForwardingConfigStateEnum.DISABLED;
                                                    }};
                                                }};
                                            }};
                                            metric = new Metric("nisi",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                add(new ExpressionVariable("perferendis",                 new VariableValue("id") {{
                                                                                    hierarchyId = "sapiente";
                                                                                }};) {{
                                                                    name = "Rosemarie Hilll";
                                                                    value = new VariableValue("repellendus") {{
                                                                        hierarchyId = "sit";
                                                                        propertyId = "quidem";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("voluptatibus",                 new VariableValue("iure") {{
                                                                                    hierarchyId = "explicabo";
                                                                                }};) {{
                                                                    name = "Elena Zieme I";
                                                                    value = new VariableValue("dolore") {{
                                                                        hierarchyId = "pariatur";
                                                                        propertyId = "harum";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("quasi",                 new VariableValue("mollitia") {{
                                                                                    hierarchyId = "accusamus";
                                                                                }};) {{
                                                                    name = "Dominic Pagac";
                                                                    value = new VariableValue("non") {{
                                                                        hierarchyId = "praesentium";
                                                                        propertyId = "error";
                                                                    }};
                                                                }}),
                                                                add(new ExpressionVariable("excepturi",                 new VariableValue("magni") {{
                                                                                    hierarchyId = "tempora";
                                                                                }};) {{
                                                                    name = "Rodolfo Baumbach";
                                                                    value = new VariableValue("aliquid") {{
                                                                        hierarchyId = "eaque";
                                                                        propertyId = "deserunt";
                                                                    }};
                                                                }}),
                                                            }},                 new MetricWindow() {{
                                                                tumbling = new TumblingWindow("possimus") {{
                                                                    offset = "dolor";
                                                                }};;
                                                            }};) {{
                                                expression = "modi";
                                                processingConfig = new MetricProcessingConfig(ComputeLocationEnum.CLOUD) {{
                                                    computeLocation = ComputeLocationEnum.EDGE;
                                                }};
                                                variables = new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                    add(new ExpressionVariable("ipsam",                 new VariableValue("eaque") {{
                                                                        hierarchyId = "exercitationem";
                                                                    }};) {{
                                                        name = "Micheal Cassin";
                                                        value = new VariableValue("veniam") {{
                                                            hierarchyId = "odit";
                                                            propertyId = "earum";
                                                        }};
                                                    }}),
                                                }};
                                                window = new MetricWindow() {{
                                                    tumbling = new TumblingWindow("ad") {{
                                                        interval = "veniam";
                                                        offset = "nihil";
                                                    }};
                                                }};
                                            }};
                                            transform = new Transform("numquam",                 new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                                add(new ExpressionVariable("deserunt",                 new VariableValue("magni") {{
                                                                                    hierarchyId = "nihil";
                                                                                }};) {{
                                                                    name = "Dr. Mark Prosacco";
                                                                    value = new VariableValue("porro") {{
                                                                        hierarchyId = "quidem";
                                                                        propertyId = "totam";
                                                                    }};
                                                                }}),
                                                            }}) {{
                                                expression = "rerum";
                                                processingConfig = new TransformProcessingConfig(ComputeLocationEnum.CLOUD) {{
                                                    computeLocation = ComputeLocationEnum.EDGE;
                                                    forwardingConfig = new ForwardingConfig(ForwardingConfigStateEnum.ENABLED) {{
                                                        state = ForwardingConfigStateEnum.ENABLED;
                                                    }};
                                                }};
                                                variables = new org.openapis.openapi.models.shared.ExpressionVariable[]{{
                                                    add(new ExpressionVariable("aut",                 new VariableValue("doloribus") {{
                                                                        hierarchyId = "nostrum";
                                                                    }};) {{
                                                        name = "Julian Ziemann";
                                                        value = new VariableValue("illo") {{
                                                            hierarchyId = "corporis";
                                                            propertyId = "accusantium";
                                                        }};
                                                    }}),
                                                    add(new ExpressionVariable("quos",                 new VariableValue("aperiam") {{
                                                                        hierarchyId = "non";
                                                                    }};) {{
                                                        name = "Woodrow DuBuque";
                                                        value = new VariableValue("quae") {{
                                                            hierarchyId = "sapiente";
                                                            propertyId = "mollitia";
                                                        }};
                                                    }}),
                                                    add(new ExpressionVariable("aliquid",                 new VariableValue("laudantium") {{
                                                                        hierarchyId = "est";
                                                                    }};) {{
                                                        name = "Derek Haag";
                                                        value = new VariableValue("inventore") {{
                                                            hierarchyId = "consequuntur";
                                                            propertyId = "maiores";
                                                        }};
                                                    }}),
                                                    add(new ExpressionVariable("recusandae",                 new VariableValue("tempora") {{
                                                                        hierarchyId = "blanditiis";
                                                                    }};) {{
                                                        name = "Vicki Feeney";
                                                        value = new VariableValue("adipisci") {{
                                                            hierarchyId = "voluptatum";
                                                            propertyId = "ducimus";
                                                        }};
                                                    }}),
                                                }};
                                            }};
                                        }};
                                        unit = "voluptas";
                                    }}),
                                }};
                                clientToken = "architecto";
                            }};, "est") {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "rem";
                xAmzCredential = "magni";
                xAmzDate = "quae";
                xAmzSecurityToken = "quas";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "enim";
            }};            

            UpdateAssetModelResponse res = sdk.sdk.updateAssetModel(req);

            if (res.updateAssetModelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAssetProperty

<p>Updates an asset property's alias and notification state.</p> <important> <p>This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html">DescribeAssetProperty</a>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAssetPropertyRequest;
import org.openapis.openapi.models.operations.UpdateAssetPropertyRequestBody;
import org.openapis.openapi.models.operations.UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum;
import org.openapis.openapi.models.operations.UpdateAssetPropertyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAssetPropertyRequest req = new UpdateAssetPropertyRequest(                new UpdateAssetPropertyRequestBody() {{
                                clientToken = "sapiente";
                                propertyAlias = "saepe";
                                propertyNotificationState = UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum.DISABLED;
                                propertyUnit = "officia";
                            }};, "natus", "cumque") {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "doloribus";
                xAmzDate = "quia";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "cumque";
            }};            

            UpdateAssetPropertyResponse res = sdk.sdk.updateAssetProperty(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDashboard

Updates an IoT SiteWise Monitor dashboard.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDashboardRequest;
import org.openapis.openapi.models.operations.UpdateDashboardRequestBody;
import org.openapis.openapi.models.operations.UpdateDashboardResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDashboardRequest req = new UpdateDashboardRequest(                new UpdateDashboardRequestBody("enim", "eum") {{
                                clientToken = "nemo";
                                dashboardDescription = "illum";
                            }};, "nesciunt") {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "odio";
                xAmzCredential = "minus";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "praesentium";
            }};            

            UpdateDashboardResponse res = sdk.sdk.updateDashboard(req);

            if (res.updateDashboardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGateway

Updates a gateway's name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGatewayRequest;
import org.openapis.openapi.models.operations.UpdateGatewayRequestBody;
import org.openapis.openapi.models.operations.UpdateGatewayResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGatewayRequest req = new UpdateGatewayRequest(                new UpdateGatewayRequestBody("fugit");, "sit") {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "sed";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "delectus";
            }};            

            UpdateGatewayResponse res = sdk.sdk.updateGateway(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGatewayCapabilityConfiguration

Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGatewayCapabilityConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateGatewayCapabilityConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateGatewayCapabilityConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGatewayCapabilityConfigurationRequest req = new UpdateGatewayCapabilityConfigurationRequest(                new UpdateGatewayCapabilityConfigurationRequestBody("aliquam", "deserunt");, "modi") {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "eius";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "at";
                xAmzSignedHeaders = "dolorem";
            }};            

            UpdateGatewayCapabilityConfigurationResponse res = sdk.sdk.updateGatewayCapabilityConfiguration(req);

            if (res.updateGatewayCapabilityConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePortal

Updates an IoT SiteWise Monitor portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePortalRequest;
import org.openapis.openapi.models.operations.UpdatePortalRequestBody;
import org.openapis.openapi.models.operations.UpdatePortalRequestBodyAlarms;
import org.openapis.openapi.models.operations.UpdatePortalRequestBodyPortalLogoImage;
import org.openapis.openapi.models.operations.UpdatePortalResponse;
import org.openapis.openapi.models.shared.ImageFile;
import org.openapis.openapi.models.shared.ImageFileTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePortalRequest req = new UpdatePortalRequest(                new UpdatePortalRequestBody("aspernatur", "inventore", "sequi") {{
                                alarms = new UpdatePortalRequestBodyAlarms() {{
                                    alarmRoleArn = "fugit";
                                    notificationLambdaArn = "fuga";
                                }};;
                                clientToken = "hic";
                                notificationSenderEmail = "eaque";
                                portalDescription = "dolorem";
                                portalLogoImage = new UpdatePortalRequestBodyPortalLogoImage() {{
                                    file = new ImageFile("architecto", ImageFileTypeEnum.PNG);;
                                    id = "02d514f4-cc6f-418b-b962-1a6a4f77a87e";
                                }};;
                            }};, "earum") {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "eius";
                xAmzDate = "rerum";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "ipsam";
            }};            

            UpdatePortalResponse res = sdk.sdk.updatePortal(req);

            if (res.updatePortalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProject

Updates an IoT SiteWise Monitor project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectRequest;
import org.openapis.openapi.models.operations.UpdateProjectRequestBody;
import org.openapis.openapi.models.operations.UpdateProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProjectRequest req = new UpdateProjectRequest(                new UpdateProjectRequestBody("impedit") {{
                                clientToken = "aliquid";
                                projectDescription = "quis";
                            }};, "facilis") {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "ut";
                xAmzCredential = "quaerat";
                xAmzDate = "architecto";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "dolor";
            }};            

            UpdateProjectResponse res = sdk.sdk.updateProject(req);

            if (res.updateProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
