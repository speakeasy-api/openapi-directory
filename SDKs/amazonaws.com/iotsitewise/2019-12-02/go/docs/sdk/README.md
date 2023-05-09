# SDK

## Overview

Welcome to the IoT SiteWise API Reference. IoT SiteWise is an Amazon Web Services service that connects <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">Industrial Internet of Things (IIoT)</a> devices to the power of the Amazon Web Services Cloud. For more information, see the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/">IoT SiteWise User Guide</a>. For information about IoT SiteWise quotas, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotsitewise/>
### Available Operations

* [AssociateAssets](#associateassets) - Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/add-associated-assets.html">Associating assets</a> in the <i>IoT SiteWise User Guide</i>.
* [AssociateTimeSeriesToAssetProperty](#associatetimeseriestoassetproperty) - Associates a time series (data stream) with an asset property.
* [BatchAssociateProjectAssets](#batchassociateprojectassets) - Associates a group (batch) of assets with an IoT SiteWise Monitor project.
* [BatchDisassociateProjectAssets](#batchdisassociateprojectassets) - Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.
* [BatchGetAssetPropertyAggregates](#batchgetassetpropertyaggregates) - Gets aggregated values (for example, average, minimum, and maximum) for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.
* [BatchGetAssetPropertyValue](#batchgetassetpropertyvalue) - Gets the current value for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.
* [BatchGetAssetPropertyValueHistory](#batchgetassetpropertyvaluehistory) - Gets the historical values for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.
* [BatchPutAssetPropertyValue](#batchputassetpropertyvalue) - <p>Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting data using the API</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> <important> <p>With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps outside of the inclusive range of [-7 days, +10 minutes] and returns a <code>TimestampOutOfRangeException</code> error.</p> <p>For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>, then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p> </important> <p>IoT SiteWise authorizes access to each <code>BatchPutAssetPropertyValue</code> entry individually. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-batchputassetpropertyvalue-action">BatchPutAssetPropertyValue authorization</a> in the <i>IoT SiteWise User Guide</i>.</p>
* [CreateAccessPolicy](#createaccesspolicy) - Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource.
* [CreateAsset](#createasset) - Creates an asset from an existing asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html">Creating assets</a> in the <i>IoT SiteWise User Guide</i>.
* [CreateAssetModel](#createassetmodel) - Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining asset models</a> in the <i>IoT SiteWise User Guide</i>.
* [CreateBulkImportJob](#createbulkimportjob) - <p>Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/CreateBulkImportJob.html">Create a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <important> <p>You must enable IoT SiteWise to export data to Amazon S3 before you create a bulk import job. For more information about how to configure storage settings, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html">PutStorageConfiguration</a>.</p> </important>
* [CreateDashboard](#createdashboard) - Creates a dashboard in an IoT SiteWise Monitor project.
* [CreateGateway](#creategateway) - Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>.
* [CreatePortal](#createportal) - <p>Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM to authenticate portal users and manage user permissions.</p> <note> <p>Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or removing portal administrators</a> in the <i>IoT SiteWise User Guide</i>.</p> </note>
* [CreateProject](#createproject) - <p>Creates a project in the specified portal.</p> <note> <p>Make sure that the project name and description don't contain confidential information.</p> </note>
* [DeleteAccessPolicy](#deleteaccesspolicy) - Deletes an access policy that grants the specified identity access to the specified IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor resource.
* [DeleteAsset](#deleteasset) - <p>Deletes an asset. This action can't be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>. </p> <note> <p>You can't delete an asset that's associated to another asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p> </note>
* [DeleteAssetModel](#deleteassetmodel) - Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>.
* [DeleteDashboard](#deletedashboard) - Deletes a dashboard from IoT SiteWise Monitor.
* [DeleteGateway](#deletegateway) - Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system.
* [DeletePortal](#deleteportal) - Deletes a portal from IoT SiteWise Monitor.
* [DeleteProject](#deleteproject) - Deletes a project from IoT SiteWise Monitor.
* [DeleteTimeSeries](#deletetimeseries) - <p>Deletes a time series (data stream). If you delete a time series that's associated with an asset property, the asset property still exists, but the time series will no longer be associated with this asset property.</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>
* [DescribeAccessPolicy](#describeaccesspolicy) - Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project.
* [DescribeAsset](#describeasset) - Retrieves information about an asset.
* [DescribeAssetModel](#describeassetmodel) - Retrieves information about an asset model.
* [DescribeAssetProperty](#describeassetproperty) - <p>Retrieves information about an asset property.</p> <note> <p>When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation's response includes the new default value.</p> </note> <p>This operation doesn't return the value of the asset property. To get the value of an asset property, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html">GetAssetPropertyValue</a>.</p>
* [DescribeBulkImportJob](#describebulkimportjob) - Retrieves information about a bulk import job request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/DescribeBulkImportJob.html">Describe a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.
* [DescribeDashboard](#describedashboard) - Retrieves information about a dashboard.
* [DescribeDefaultEncryptionConfiguration](#describedefaultencryptionconfiguration) - Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified Region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.
* [DescribeGateway](#describegateway) - Retrieves information about a gateway.
* [DescribeGatewayCapabilityConfiguration](#describegatewaycapabilityconfiguration) - Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.
* [DescribeLoggingOptions](#describeloggingoptions) - Retrieves the current IoT SiteWise logging options.
* [DescribePortal](#describeportal) - Retrieves information about a portal.
* [DescribeProject](#describeproject) - Retrieves information about a project.
* [DescribeStorageConfiguration](#describestorageconfiguration) - Retrieves information about the storage configuration for IoT SiteWise.
* [DescribeTimeSeries](#describetimeseries) - <p>Retrieves information about a time series (data stream).</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>
* [DisassociateAssets](#disassociateassets) - Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.
* [DisassociateTimeSeriesFromAssetProperty](#disassociatetimeseriesfromassetproperty) - Disassociates a time series (data stream) from an asset property.
* [GetAssetPropertyAggregates](#getassetpropertyaggregates) - <p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
* [GetAssetPropertyValue](#getassetpropertyvalue) - <p>Gets an asset property's current value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
* [GetAssetPropertyValueHistory](#getassetpropertyvaluehistory) - <p>Gets the history of an asset property's values. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
* [GetInterpolatedAssetPropertyValues](#getinterpolatedassetpropertyvalues) - <p>Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data.</p> <p>For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
* [ListAccessPolicies](#listaccesspolicies) - Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).
* [ListAssetModelProperties](#listassetmodelproperties) - Retrieves a paginated list of properties associated with an asset model. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.
* [ListAssetModels](#listassetmodels) - Retrieves a paginated list of summaries of all asset models.
* [ListAssetProperties](#listassetproperties) - Retrieves a paginated list of properties associated with an asset. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.
* [ListAssetRelationships](#listassetrelationships) - Retrieves a paginated list of asset relationships for an asset. You can use this operation to identify an asset's root asset and all associated assets between that asset and its root.
* [ListAssets](#listassets) - <p>Retrieves a paginated list of asset summaries.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List assets based on a specific asset model.</p> </li> <li> <p>List top-level assets.</p> </li> </ul> <p>You can't use this operation to list all assets. To retrieve summaries for all of your assets, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html">ListAssetModels</a> to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.</p>
* [ListAssociatedAssets](#listassociatedassets) - <p>Retrieves a paginated list of associated assets.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List child assets associated to a parent asset by a hierarchy that you specify.</p> </li> <li> <p>List an asset's parent asset.</p> </li> </ul>
* [ListBulkImportJobs](#listbulkimportjobs) - Retrieves a paginated list of bulk import job requests. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ListBulkImportJobs.html">List bulk import jobs (CLI)</a> in the <i>IoT SiteWise User Guide</i>.
* [ListDashboards](#listdashboards) - Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.
* [ListGateways](#listgateways) - Retrieves a paginated list of gateways.
* [ListPortals](#listportals) - Retrieves a paginated list of IoT SiteWise Monitor portals.
* [ListProjectAssets](#listprojectassets) - Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.
* [ListProjects](#listprojects) - Retrieves a paginated list of projects for an IoT SiteWise Monitor portal.
* [ListTagsForResource](#listtagsforresource) - Retrieves the list of tags for an IoT SiteWise resource.
* [ListTimeSeries](#listtimeseries) - Retrieves a paginated list of time series (data streams).
* [PutDefaultEncryptionConfiguration](#putdefaultencryptionconfiguration) - Sets the default encryption configuration for the Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.
* [PutLoggingOptions](#putloggingoptions) - Sets logging options for IoT SiteWise.
* [PutStorageConfiguration](#putstorageconfiguration) - Configures storage settings for IoT SiteWise.
* [TagResource](#tagresource) - Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.
* [UntagResource](#untagresource) - Removes a tag from an IoT SiteWise resource.
* [UpdateAccessPolicy](#updateaccesspolicy) - Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor portal or project resource.
* [UpdateAsset](#updateasset) - Updates an asset's name. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.
* [UpdateAssetModel](#updateassetmodel) - <p>Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.</p> <important> <p>This operation overwrites the existing model with the provided model. To avoid deleting your asset model's properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p> <p>If you remove a property from an asset model, IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, IoT SiteWise disassociates every asset associated with that hierarchy. You can't change the type or data type of an existing property.</p> </important>
* [UpdateAssetProperty](#updateassetproperty) - <p>Updates an asset property's alias and notification state.</p> <important> <p>This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html">DescribeAssetProperty</a>.</p> </important>
* [UpdateDashboard](#updatedashboard) - Updates an IoT SiteWise Monitor dashboard.
* [UpdateGateway](#updategateway) - Updates a gateway's name.
* [UpdateGatewayCapabilityConfiguration](#updategatewaycapabilityconfiguration) - Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.
* [UpdatePortal](#updateportal) - Updates an IoT SiteWise Monitor portal.
* [UpdateProject](#updateproject) - Updates an IoT SiteWise Monitor project.

## AssociateAssets

Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/add-associated-assets.html">Associating assets</a> in the <i>IoT SiteWise User Guide</i>.

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
    res, err := s.SDK.AssociateAssets(ctx, operations.AssociateAssetsRequest{
        RequestBody: operations.AssociateAssetsRequestBody{
            ChildAssetID: "suscipit",
            ClientToken: sdk.String("iure"),
            HierarchyID: "magnam",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("minus"),
        AssetID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AssociateTimeSeriesToAssetProperty

Associates a time series (data stream) with an asset property.

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
    res, err := s.SDK.AssociateTimeSeriesToAssetProperty(ctx, operations.AssociateTimeSeriesToAssetPropertyRequest{
        RequestBody: operations.AssociateTimeSeriesToAssetPropertyRequestBody{
            ClientToken: sdk.String("voluptatum"),
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("quis"),
        Alias: "veritatis",
        AssetID: "deserunt",
        PropertyID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## BatchAssociateProjectAssets

Associates a group (batch) of assets with an IoT SiteWise Monitor project.

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
    res, err := s.SDK.BatchAssociateProjectAssets(ctx, operations.BatchAssociateProjectAssetsRequest{
        RequestBody: operations.BatchAssociateProjectAssetsRequestBody{
            AssetIds: []string{
                "repellendus",
                "sapiente",
            },
            ClientToken: sdk.String("quo"),
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("quod"),
        ProjectID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAssociateProjectAssetsResponse != nil {
        // handle response
    }
}
```

## BatchDisassociateProjectAssets

Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.

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
    res, err := s.SDK.BatchDisassociateProjectAssets(ctx, operations.BatchDisassociateProjectAssetsRequest{
        RequestBody: operations.BatchDisassociateProjectAssetsRequestBody{
            AssetIds: []string{
                "porro",
                "dolorum",
                "dicta",
            },
            ClientToken: sdk.String("nam"),
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("totam"),
        ProjectID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDisassociateProjectAssetsResponse != nil {
        // handle response
    }
}
```

## BatchGetAssetPropertyAggregates

Gets aggregated values (for example, average, minimum, and maximum) for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.

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
    res, err := s.SDK.BatchGetAssetPropertyAggregates(ctx, operations.BatchGetAssetPropertyAggregatesRequest{
        RequestBody: operations.BatchGetAssetPropertyAggregatesRequestBody{
            Entries: []shared.BatchGetAssetPropertyAggregatesEntry{
                shared.BatchGetAssetPropertyAggregatesEntry{
                    AggregateTypes: []shared.AggregateTypeEnum{
                        shared.AggregateTypeEnumCount,
                        shared.AggregateTypeEnumCount,
                    },
                    AssetID: sdk.String("impedit"),
                    EndDate: types.MustTimeFromString("2022-02-02T00:14:45.467Z"),
                    EntryID: "ipsum",
                    PropertyAlias: sdk.String("excepturi"),
                    PropertyID: sdk.String("aspernatur"),
                    Qualities: []shared.QualityEnum{
                        shared.QualityEnumGood,
                    },
                    Resolution: "natus",
                    StartDate: types.MustTimeFromString("2022-05-22T14:02:28.908Z"),
                    TimeOrdering: shared.TimeOrderingEnumAscending.ToPointer(),
                },
                shared.BatchGetAssetPropertyAggregatesEntry{
                    AggregateTypes: []shared.AggregateTypeEnum{
                        shared.AggregateTypeEnumMaximum,
                        shared.AggregateTypeEnumStandardDeviation,
                        shared.AggregateTypeEnumStandardDeviation,
                    },
                    AssetID: sdk.String("fuga"),
                    EndDate: types.MustTimeFromString("2022-08-22T18:42:38.160Z"),
                    EntryID: "iste",
                    PropertyAlias: sdk.String("iure"),
                    PropertyID: sdk.String("saepe"),
                    Qualities: []shared.QualityEnum{
                        shared.QualityEnumGood,
                        shared.QualityEnumGood,
                        shared.QualityEnumUncertain,
                    },
                    Resolution: "est",
                    StartDate: types.MustTimeFromString("2021-08-29T10:25:27.700Z"),
                    TimeOrdering: shared.TimeOrderingEnumAscending.ToPointer(),
                },
            },
            MaxResults: sdk.Int64(210382),
            NextToken: sdk.String("corporis"),
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        MaxResults: sdk.String("accusantium"),
        NextToken: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAssetPropertyAggregatesResponse != nil {
        // handle response
    }
}
```

## BatchGetAssetPropertyValue

Gets the current value for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.

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
    res, err := s.SDK.BatchGetAssetPropertyValue(ctx, operations.BatchGetAssetPropertyValueRequest{
        RequestBody: operations.BatchGetAssetPropertyValueRequestBody{
            Entries: []shared.BatchGetAssetPropertyValueEntry{
                shared.BatchGetAssetPropertyValueEntry{
                    AssetID: sdk.String("doloribus"),
                    EntryID: "sapiente",
                    PropertyAlias: sdk.String("architecto"),
                    PropertyID: sdk.String("mollitia"),
                },
                shared.BatchGetAssetPropertyValueEntry{
                    AssetID: sdk.String("dolorem"),
                    EntryID: "culpa",
                    PropertyAlias: sdk.String("consequuntur"),
                    PropertyID: sdk.String("repellat"),
                },
                shared.BatchGetAssetPropertyValueEntry{
                    AssetID: sdk.String("mollitia"),
                    EntryID: "occaecati",
                    PropertyAlias: sdk.String("numquam"),
                    PropertyID: sdk.String("commodi"),
                },
            },
            NextToken: sdk.String("quam"),
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("laborum"),
        NextToken: sdk.String("animi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAssetPropertyValueResponse != nil {
        // handle response
    }
}
```

## BatchGetAssetPropertyValueHistory

Gets the historical values for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.

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
    res, err := s.SDK.BatchGetAssetPropertyValueHistory(ctx, operations.BatchGetAssetPropertyValueHistoryRequest{
        RequestBody: operations.BatchGetAssetPropertyValueHistoryRequestBody{
            Entries: []shared.BatchGetAssetPropertyValueHistoryEntry{
                shared.BatchGetAssetPropertyValueHistoryEntry{
                    AssetID: sdk.String("odit"),
                    EndDate: types.MustTimeFromString("2022-05-30T17:48:55.594Z"),
                    EntryID: "tenetur",
                    PropertyAlias: sdk.String("ipsam"),
                    PropertyID: sdk.String("id"),
                    Qualities: []shared.QualityEnum{
                        shared.QualityEnumGood,
                        shared.QualityEnumGood,
                        shared.QualityEnumBad,
                        shared.QualityEnumUncertain,
                    },
                    StartDate: types.MustTimeFromString("2022-10-22T20:21:20.741Z"),
                    TimeOrdering: shared.TimeOrderingEnumDescending.ToPointer(),
                },
                shared.BatchGetAssetPropertyValueHistoryEntry{
                    AssetID: sdk.String("voluptatibus"),
                    EndDate: types.MustTimeFromString("2021-08-05T19:50:46.898Z"),
                    EntryID: "praesentium",
                    PropertyAlias: sdk.String("voluptatibus"),
                    PropertyID: sdk.String("ipsa"),
                    Qualities: []shared.QualityEnum{
                        shared.QualityEnumBad,
                        shared.QualityEnumUncertain,
                        shared.QualityEnumGood,
                    },
                    StartDate: types.MustTimeFromString("2022-07-23T18:36:43.822Z"),
                    TimeOrdering: shared.TimeOrderingEnumAscending.ToPointer(),
                },
            },
            MaxResults: sdk.Int64(979587),
            NextToken: sdk.String("dicta"),
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        MaxResults: sdk.String("commodi"),
        NextToken: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAssetPropertyValueHistoryResponse != nil {
        // handle response
    }
}
```

## BatchPutAssetPropertyValue

<p>Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting data using the API</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> <important> <p>With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps outside of the inclusive range of [-7 days, +10 minutes] and returns a <code>TimestampOutOfRangeException</code> error.</p> <p>For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>, then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p> </important> <p>IoT SiteWise authorizes access to each <code>BatchPutAssetPropertyValue</code> entry individually. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-batchputassetpropertyvalue-action">BatchPutAssetPropertyValue authorization</a> in the <i>IoT SiteWise User Guide</i>.</p>

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
    res, err := s.SDK.BatchPutAssetPropertyValue(ctx, operations.BatchPutAssetPropertyValueRequest{
        RequestBody: operations.BatchPutAssetPropertyValueRequestBody{
            Entries: []shared.PutAssetPropertyValueEntry{
                shared.PutAssetPropertyValueEntry{
                    AssetID: sdk.String("ipsum"),
                    EntryID: "quidem",
                    PropertyAlias: sdk.String("molestias"),
                    PropertyID: sdk.String("excepturi"),
                    PropertyValues: []shared.AssetPropertyValue{
                        shared.AssetPropertyValue{
                            Quality: shared.QualityEnumGood.ToPointer(),
                            Timestamp: shared.TimeInNanos{
                                OffsetInNanos: sdk.Int64(508969),
                                TimeInSeconds: 523248,
                            },
                            Value: shared.Variant{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(9167.23),
                                IntegerValue: sdk.Int64(93940),
                                StringValue: sdk.String("repudiandae"),
                            },
                        },
                        shared.AssetPropertyValue{
                            Quality: shared.QualityEnumBad.ToPointer(),
                            Timestamp: shared.TimeInNanos{
                                OffsetInNanos: sdk.Int64(83112),
                                TimeInSeconds: 929297,
                            },
                            Value: shared.Variant{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(2777.18),
                                IntegerValue: sdk.Int64(318569),
                                StringValue: sdk.String("consequatur"),
                            },
                        },
                        shared.AssetPropertyValue{
                            Quality: shared.QualityEnumUncertain.ToPointer(),
                            Timestamp: shared.TimeInNanos{
                                OffsetInNanos: sdk.Int64(842342),
                                TimeInSeconds: 131797,
                            },
                            Value: shared.Variant{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6471.74),
                                IntegerValue: sdk.Int64(716327),
                                StringValue: sdk.String("quibusdam"),
                            },
                        },
                        shared.AssetPropertyValue{
                            Quality: shared.QualityEnumGood.ToPointer(),
                            Timestamp: shared.TimeInNanos{
                                OffsetInNanos: sdk.Int64(264730),
                                TimeInSeconds: 183191,
                            },
                            Value: shared.Variant{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(3978.21),
                                IntegerValue: sdk.Int64(586513),
                                StringValue: sdk.String("quos"),
                            },
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutAssetPropertyValueResponse != nil {
        // handle response
    }
}
```

## CreateAccessPolicy

Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource.

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
    res, err := s.SDK.CreateAccessPolicy(ctx, operations.CreateAccessPolicyRequest{
        RequestBody: operations.CreateAccessPolicyRequestBody{
            AccessPolicyIdentity: operations.CreateAccessPolicyRequestBodyAccessPolicyIdentity{
                Group: &shared.GroupIdentity{
                    ID: "94bb4f63-c969-4e9a-befa-77dfb14cd66a",
                },
                IamRole: &shared.IAMRoleIdentity{
                    Arn: "accusamus",
                },
                IamUser: &shared.IAMUserIdentity{
                    Arn: "non",
                },
                User: &shared.UserIdentity{
                    ID: "95efb9ba-88f3-4a66-9970-74ba4469b6e2",
                },
            },
            AccessPolicyPermission: operations.CreateAccessPolicyRequestBodyAccessPolicyPermissionEnumAdministrator,
            AccessPolicyResource: operations.CreateAccessPolicyRequestBodyAccessPolicyResource{
                Portal: &shared.PortalResource{
                    ID: "41959890-afa5-463e-a516-fe4c8b711e5b",
                },
                Project: &shared.ProjectResource{
                    ID: "7fd2ed02-8921-4cdd-8692-601fb576b0d5",
                },
            },
            ClientToken: sdk.String("voluptatibus"),
            Tags: map[string]string{
                "fugiat": "amet",
            },
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAccessPolicyResponse != nil {
        // handle response
    }
}
```

## CreateAsset

Creates an asset from an existing asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html">Creating assets</a> in the <i>IoT SiteWise User Guide</i>.

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
    res, err := s.SDK.CreateAsset(ctx, operations.CreateAssetRequest{
        RequestBody: operations.CreateAssetRequestBody{
            AssetDescription: sdk.String("quis"),
            AssetModelID: "totam",
            AssetName: "dignissimos",
            ClientToken: sdk.String("eaque"),
            Tags: map[string]string{
                "nesciunt": "eos",
                "perferendis": "dolores",
            },
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAssetResponse != nil {
        // handle response
    }
}
```

## CreateAssetModel

Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining asset models</a> in the <i>IoT SiteWise User Guide</i>.

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
    res, err := s.SDK.CreateAssetModel(ctx, operations.CreateAssetModelRequest{
        RequestBody: operations.CreateAssetModelRequestBody{
            AssetModelCompositeModels: []shared.AssetModelCompositeModelDefinition{
                shared.AssetModelCompositeModelDefinition{
                    Description: sdk.String("facilis"),
                    Name: "George Sawayn",
                    Properties: sdk.String("error"),
                    Type: "eaque",
                },
                shared.AssetModelCompositeModelDefinition{
                    Description: sdk.String("occaecati"),
                    Name: "Travis Zemlak",
                    Properties: sdk.String("iste"),
                    Type: "dolorum",
                },
                shared.AssetModelCompositeModelDefinition{
                    Description: sdk.String("deleniti"),
                    Name: "Rene Rolfson",
                    Properties: sdk.String("quaerat"),
                    Type: "quos",
                },
            },
            AssetModelDescription: sdk.String("aliquid"),
            AssetModelHierarchies: []shared.AssetModelHierarchyDefinition{
                shared.AssetModelHierarchyDefinition{
                    ChildAssetModelID: "dolorem",
                    Name: "Norma Erdman",
                },
            },
            AssetModelName: "cum",
            AssetModelProperties: []shared.AssetModelPropertyDefinition{
                shared.AssetModelPropertyDefinition{
                    DataType: shared.PropertyDataTypeEnumDouble,
                    DataTypeSpec: sdk.String("reiciendis"),
                    Name: "Mr. Lee Funk III",
                    Type: shared.PropertyType{
                        Attribute: &shared.Attribute{
                            DefaultValue: sdk.String("odio"),
                        },
                        Measurement: &shared.Measurement{
                            ProcessingConfig: &shared.MeasurementProcessingConfig{
                                ForwardingConfig: shared.ForwardingConfig{
                                    State: shared.ForwardingConfigStateEnumDisabled,
                                },
                            },
                        },
                        Metric: &shared.Metric{
                            Expression: "accusamus",
                            ProcessingConfig: &shared.MetricProcessingConfig{
                                ComputeLocation: shared.ComputeLocationEnumCloud,
                            },
                            Variables: []shared.ExpressionVariable{
                                shared.ExpressionVariable{
                                    Name: "Faye Daugherty PhD",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("ab"),
                                        PropertyID: "soluta",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Ted Kling",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("omnis"),
                                        PropertyID: "necessitatibus",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Emmett Kovacek",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("id"),
                                        PropertyID: "saepe",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Judy Aufderhar",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("accusamus"),
                                        PropertyID: "ad",
                                    },
                                },
                            },
                            Window: shared.MetricWindow{
                                Tumbling: &shared.TumblingWindow{
                                    Interval: "saepe",
                                    Offset: sdk.String("suscipit"),
                                },
                            },
                        },
                        Transform: &shared.Transform{
                            Expression: "deserunt",
                            ProcessingConfig: &shared.TransformProcessingConfig{
                                ComputeLocation: shared.ComputeLocationEnumCloud,
                                ForwardingConfig: &shared.ForwardingConfig{
                                    State: shared.ForwardingConfigStateEnumDisabled,
                                },
                            },
                            Variables: []shared.ExpressionVariable{
                                shared.ExpressionVariable{
                                    Name: "Donnie Abbott",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("tempora"),
                                        PropertyID: "vel",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Erick Denesik",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("esse"),
                                        PropertyID: "harum",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Tracy Schamberger",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("tempore"),
                                        PropertyID: "accusamus",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Darlene Effertz",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("nihil"),
                                        PropertyID: "sit",
                                    },
                                },
                            },
                        },
                    },
                    Unit: sdk.String("expedita"),
                },
                shared.AssetModelPropertyDefinition{
                    DataType: shared.PropertyDataTypeEnumInteger,
                    DataTypeSpec: sdk.String("sed"),
                    Name: "Kelli Hintz",
                    Type: shared.PropertyType{
                        Attribute: &shared.Attribute{
                            DefaultValue: sdk.String("ipsum"),
                        },
                        Measurement: &shared.Measurement{
                            ProcessingConfig: &shared.MeasurementProcessingConfig{
                                ForwardingConfig: shared.ForwardingConfig{
                                    State: shared.ForwardingConfigStateEnumDisabled,
                                },
                            },
                        },
                        Metric: &shared.Metric{
                            Expression: "qui",
                            ProcessingConfig: &shared.MetricProcessingConfig{
                                ComputeLocation: shared.ComputeLocationEnumCloud,
                            },
                            Variables: []shared.ExpressionVariable{
                                shared.ExpressionVariable{
                                    Name: "Dominic Carroll",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("incidunt"),
                                        PropertyID: "aspernatur",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Verna Purdy",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("molestias"),
                                        PropertyID: "temporibus",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Gladys Considine",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("sunt"),
                                        PropertyID: "ullam",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Terrell Bartell",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("nobis"),
                                        PropertyID: "et",
                                    },
                                },
                            },
                            Window: shared.MetricWindow{
                                Tumbling: &shared.TumblingWindow{
                                    Interval: "saepe",
                                    Offset: sdk.String("ipsum"),
                                },
                            },
                        },
                        Transform: &shared.Transform{
                            Expression: "veritatis",
                            ProcessingConfig: &shared.TransformProcessingConfig{
                                ComputeLocation: shared.ComputeLocationEnumCloud,
                                ForwardingConfig: &shared.ForwardingConfig{
                                    State: shared.ForwardingConfigStateEnumEnabled,
                                },
                            },
                            Variables: []shared.ExpressionVariable{
                                shared.ExpressionVariable{
                                    Name: "Kevin Willms",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("labore"),
                                        PropertyID: "adipisci",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Ms. Joe Berge",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("consequatur"),
                                        PropertyID: "est",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Sherman Wyman",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("cupiditate"),
                                        PropertyID: "qui",
                                    },
                                },
                            },
                        },
                    },
                    Unit: sdk.String("quae"),
                },
            },
            ClientToken: sdk.String("laudantium"),
            Tags: map[string]string{
                "occaecati": "voluptatibus",
                "quisquam": "vero",
            },
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAssetModelResponse != nil {
        // handle response
    }
}
```

## CreateBulkImportJob

<p>Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/CreateBulkImportJob.html">Create a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <important> <p>You must enable IoT SiteWise to export data to Amazon S3 before you create a bulk import job. For more information about how to configure storage settings, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html">PutStorageConfiguration</a>.</p> </important>

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
    res, err := s.SDK.CreateBulkImportJob(ctx, operations.CreateBulkImportJobRequest{
        RequestBody: operations.CreateBulkImportJobRequestBody{
            ErrorReportLocation: operations.CreateBulkImportJobRequestBodyErrorReportLocation{
                Bucket: sdk.String("tenetur"),
                Prefix: sdk.String("dignissimos"),
            },
            Files: []shared.File{
                shared.File{
                    Bucket: "distinctio",
                    Key: "quod",
                    VersionID: sdk.String("odio"),
                },
                shared.File{
                    Bucket: "similique",
                    Key: "facilis",
                    VersionID: sdk.String("vero"),
                },
                shared.File{
                    Bucket: "ducimus",
                    Key: "dolore",
                    VersionID: sdk.String("quibusdam"),
                },
                shared.File{
                    Bucket: "illum",
                    Key: "sequi",
                    VersionID: sdk.String("natus"),
                },
            },
            JobConfiguration: operations.CreateBulkImportJobRequestBodyJobConfiguration{
                FileFormat: &shared.FileFormat{
                    Csv: &shared.Csv{
                        ColumnNames: []shared.ColumnNameEnum{
                            shared.ColumnNameEnumAlias,
                            shared.ColumnNameEnumValue,
                            shared.ColumnNameEnumPropertyID,
                            shared.ColumnNameEnumQuality,
                        },
                    },
                },
            },
            JobName: "fugit",
            JobRoleArn: "porro",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBulkImportJobResponse != nil {
        // handle response
    }
}
```

## CreateDashboard

Creates a dashboard in an IoT SiteWise Monitor project.

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
    res, err := s.SDK.CreateDashboard(ctx, operations.CreateDashboardRequest{
        RequestBody: operations.CreateDashboardRequestBody{
            ClientToken: sdk.String("tempora"),
            DashboardDefinition: "ipsam",
            DashboardDescription: sdk.String("ea"),
            DashboardName: "aspernatur",
            ProjectID: "vel",
            Tags: map[string]string{
                "magnam": "ratione",
                "ex": "laudantium",
                "dicta": "dolor",
                "maiores": "quasi",
            },
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("quisquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDashboardResponse != nil {
        // handle response
    }
}
```

## CreateGateway

Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>.

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
    res, err := s.SDK.CreateGateway(ctx, operations.CreateGatewayRequest{
        RequestBody: operations.CreateGatewayRequestBody{
            GatewayName: "saepe",
            GatewayPlatform: operations.CreateGatewayRequestBodyGatewayPlatform{
                Greengrass: &shared.Greengrass{
                    GroupArn: "ea",
                },
                GreengrassV2: &shared.GreengrassV2{
                    CoreDeviceThingName: "impedit",
                },
            },
            Tags: map[string]string{
                "veniam": "aliquid",
                "inventore": "magnam",
            },
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("eaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGatewayResponse != nil {
        // handle response
    }
}
```

## CreatePortal

<p>Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM to authenticate portal users and manage user permissions.</p> <note> <p>Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or removing portal administrators</a> in the <i>IoT SiteWise User Guide</i>.</p> </note>

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
    res, err := s.SDK.CreatePortal(ctx, operations.CreatePortalRequest{
        RequestBody: operations.CreatePortalRequestBody{
            Alarms: &operations.CreatePortalRequestBodyAlarms{
                AlarmRoleArn: sdk.String("a"),
                NotificationLambdaArn: sdk.String("libero"),
            },
            ClientToken: sdk.String("aut"),
            NotificationSenderEmail: sdk.String("aut"),
            PortalAuthMode: operations.CreatePortalRequestBodyPortalAuthModeEnumSso.ToPointer(),
            PortalContactEmail: "impedit",
            PortalDescription: sdk.String("aliquam"),
            PortalLogoImageFile: &operations.CreatePortalRequestBodyPortalLogoImageFile{
                Data: sdk.String("fugit"),
                Type: shared.ImageFileTypeEnumPng.ToPointer(),
            },
            PortalName: "accusamus",
            RoleArn: "inventore",
            Tags: map[string]string{
                "et": "dolorum",
                "laborum": "placeat",
            },
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePortalResponse != nil {
        // handle response
    }
}
```

## CreateProject

<p>Creates a project in the specified portal.</p> <note> <p>Make sure that the project name and description don't contain confidential information.</p> </note>

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
    res, err := s.SDK.CreateProject(ctx, operations.CreateProjectRequest{
        RequestBody: operations.CreateProjectRequestBody{
            ClientToken: sdk.String("voluptas"),
            PortalID: "libero",
            ProjectDescription: sdk.String("quasi"),
            ProjectName: "tempora",
            Tags: map[string]string{
                "explicabo": "provident",
                "ipsa": "molestiae",
            },
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProjectResponse != nil {
        // handle response
    }
}
```

## DeleteAccessPolicy

Deletes an access policy that grants the specified identity access to the specified IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor resource.

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
    res, err := s.SDK.DeleteAccessPolicy(ctx, operations.DeleteAccessPolicyRequest{
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        AccessPolicyID: "eos",
        ClientToken: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAccessPolicyResponse != nil {
        // handle response
    }
}
```

## DeleteAsset

<p>Deletes an asset. This action can't be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>. </p> <note> <p>You can't delete an asset that's associated to another asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p> </note>

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
    res, err := s.SDK.DeleteAsset(ctx, operations.DeleteAssetRequest{
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("quo"),
        AssetID: "illum",
        ClientToken: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAssetResponse != nil {
        // handle response
    }
}
```

## DeleteAssetModel

Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>.

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
    res, err := s.SDK.DeleteAssetModel(ctx, operations.DeleteAssetModelRequest{
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        AssetModelID: "tempora",
        ClientToken: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAssetModelResponse != nil {
        // handle response
    }
}
```

## DeleteDashboard

Deletes a dashboard from IoT SiteWise Monitor.

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
    res, err := s.SDK.DeleteDashboard(ctx, operations.DeleteDashboardRequest{
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("aperiam"),
        ClientToken: sdk.String("distinctio"),
        DashboardID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDashboardResponse != nil {
        // handle response
    }
}
```

## DeleteGateway

Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system.

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
    res, err := s.SDK.DeleteGateway(ctx, operations.DeleteGatewayRequest{
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("odio"),
        GatewayID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePortal

Deletes a portal from IoT SiteWise Monitor.

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
    res, err := s.SDK.DeletePortal(ctx, operations.DeletePortalRequest{
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("porro"),
        ClientToken: sdk.String("eum"),
        PortalID: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePortalResponse != nil {
        // handle response
    }
}
```

## DeleteProject

Deletes a project from IoT SiteWise Monitor.

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
    res, err := s.SDK.DeleteProject(ctx, operations.DeleteProjectRequest{
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        ClientToken: sdk.String("atque"),
        ProjectID: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProjectResponse != nil {
        // handle response
    }
}
```

## DeleteTimeSeries

<p>Deletes a time series (data stream). If you delete a time series that's associated with an asset property, the asset property still exists, but the time series will no longer be associated with this asset property.</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>

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
    res, err := s.SDK.DeleteTimeSeries(ctx, operations.DeleteTimeSeriesRequest{
        RequestBody: operations.DeleteTimeSeriesRequestBody{
            ClientToken: sdk.String("minima"),
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("saepe"),
        Alias: sdk.String("occaecati"),
        AssetID: sdk.String("atque"),
        PropertyID: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeAccessPolicy

Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project.

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
    res, err := s.SDK.DescribeAccessPolicy(ctx, operations.DescribeAccessPolicyRequest{
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("nam"),
        AccessPolicyID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAccessPolicyResponse != nil {
        // handle response
    }
}
```

## DescribeAsset

Retrieves information about an asset.

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
    res, err := s.SDK.DescribeAsset(ctx, operations.DescribeAssetRequest{
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("rerum"),
        AssetID: "occaecati",
        ExcludeProperties: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAssetResponse != nil {
        // handle response
    }
}
```

## DescribeAssetModel

Retrieves information about an asset model.

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
    res, err := s.SDK.DescribeAssetModel(ctx, operations.DescribeAssetModelRequest{
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        AssetModelID: "cumque",
        ExcludeProperties: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAssetModelResponse != nil {
        // handle response
    }
}
```

## DescribeAssetProperty

<p>Retrieves information about an asset property.</p> <note> <p>When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation's response includes the new default value.</p> </note> <p>This operation doesn't return the value of the asset property. To get the value of an asset property, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html">GetAssetPropertyValue</a>.</p>

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
    res, err := s.SDK.DescribeAssetProperty(ctx, operations.DescribeAssetPropertyRequest{
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("esse"),
        AssetID: "blanditiis",
        PropertyID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAssetPropertyResponse != nil {
        // handle response
    }
}
```

## DescribeBulkImportJob

Retrieves information about a bulk import job request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/DescribeBulkImportJob.html">Describe a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.

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
    res, err := s.SDK.DescribeBulkImportJob(ctx, operations.DescribeBulkImportJobRequest{
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("error"),
        JobID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBulkImportJobResponse != nil {
        // handle response
    }
}
```

## DescribeDashboard

Retrieves information about a dashboard.

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
    res, err := s.SDK.DescribeDashboard(ctx, operations.DescribeDashboardRequest{
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        DashboardID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDashboardResponse != nil {
        // handle response
    }
}
```

## DescribeDefaultEncryptionConfiguration

Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified Region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.

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
    res, err := s.SDK.DescribeDefaultEncryptionConfiguration(ctx, operations.DescribeDefaultEncryptionConfigurationRequest{
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDefaultEncryptionConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeGateway

Retrieves information about a gateway.

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
    res, err := s.SDK.DescribeGateway(ctx, operations.DescribeGatewayRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        GatewayID: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGatewayResponse != nil {
        // handle response
    }
}
```

## DescribeGatewayCapabilityConfiguration

Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.

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
    res, err := s.SDK.DescribeGatewayCapabilityConfiguration(ctx, operations.DescribeGatewayCapabilityConfigurationRequest{
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("aut"),
        CapabilityNamespace: "voluptatum",
        GatewayID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGatewayCapabilityConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeLoggingOptions

Retrieves the current IoT SiteWise logging options.

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
    res, err := s.SDK.DescribeLoggingOptions(ctx, operations.DescribeLoggingOptionsRequest{
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLoggingOptionsResponse != nil {
        // handle response
    }
}
```

## DescribePortal

Retrieves information about a portal.

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
    res, err := s.SDK.DescribePortal(ctx, operations.DescribePortalRequest{
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("minima"),
        PortalID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePortalResponse != nil {
        // handle response
    }
}
```

## DescribeProject

Retrieves information about a project.

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
    res, err := s.SDK.DescribeProject(ctx, operations.DescribeProjectRequest{
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("aut"),
        ProjectID: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProjectResponse != nil {
        // handle response
    }
}
```

## DescribeStorageConfiguration

Retrieves information about the storage configuration for IoT SiteWise.

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
    res, err := s.SDK.DescribeStorageConfiguration(ctx, operations.DescribeStorageConfigurationRequest{
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeStorageConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeTimeSeries

<p>Retrieves information about a time series (data stream).</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>

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
    res, err := s.SDK.DescribeTimeSeries(ctx, operations.DescribeTimeSeriesRequest{
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        Alias: sdk.String("dicta"),
        AssetID: sdk.String("maiores"),
        PropertyID: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTimeSeriesResponse != nil {
        // handle response
    }
}
```

## DisassociateAssets

Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.

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
    res, err := s.SDK.DisassociateAssets(ctx, operations.DisassociateAssetsRequest{
        RequestBody: operations.DisassociateAssetsRequestBody{
            ChildAssetID: "velit",
            ClientToken: sdk.String("voluptatibus"),
            HierarchyID: "voluptas",
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("officia"),
        AssetID: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisassociateTimeSeriesFromAssetProperty

Disassociates a time series (data stream) from an asset property.

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
    res, err := s.SDK.DisassociateTimeSeriesFromAssetProperty(ctx, operations.DisassociateTimeSeriesFromAssetPropertyRequest{
        RequestBody: operations.DisassociateTimeSeriesFromAssetPropertyRequestBody{
            ClientToken: sdk.String("dignissimos"),
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("quod"),
        Alias: "labore",
        AssetID: "ab",
        PropertyID: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAssetPropertyAggregates

<p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

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
    res, err := s.SDK.GetAssetPropertyAggregates(ctx, operations.GetAssetPropertyAggregatesRequest{
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        AggregateTypes: []shared.AggregateTypeEnum{
            shared.AggregateTypeEnumStandardDeviation,
            shared.AggregateTypeEnumMaximum,
            shared.AggregateTypeEnumMaximum,
        },
        AssetID: sdk.String("quos"),
        EndDate: types.MustTimeFromString("2022-09-18T05:25:42.565Z"),
        MaxResults: sdk.Int64(822560),
        NextToken: sdk.String("facilis"),
        PropertyAlias: sdk.String("cum"),
        PropertyID: sdk.String("commodi"),
        Qualities: []shared.QualityEnum{
            shared.QualityEnumBad,
            shared.QualityEnumUncertain,
        },
        Resolution: "assumenda",
        StartDate: types.MustTimeFromString("2022-01-28T09:17:23.255Z"),
        TimeOrdering: operations.GetAssetPropertyAggregatesTimeOrderingEnumAscending.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAssetPropertyAggregatesResponse != nil {
        // handle response
    }
}
```

## GetAssetPropertyValue

<p>Gets an asset property's current value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

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
    res, err := s.SDK.GetAssetPropertyValue(ctx, operations.GetAssetPropertyValueRequest{
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("facere"),
        AssetID: sdk.String("numquam"),
        PropertyAlias: sdk.String("doloribus"),
        PropertyID: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAssetPropertyValueResponse != nil {
        // handle response
    }
}
```

## GetAssetPropertyValueHistory

<p>Gets the history of an asset property's values. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

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
    res, err := s.SDK.GetAssetPropertyValueHistory(ctx, operations.GetAssetPropertyValueHistoryRequest{
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        AssetID: sdk.String("adipisci"),
        EndDate: types.MustTimeFromString("2022-10-09T16:24:37.905Z"),
        MaxResults: sdk.Int64(105906),
        NextToken: sdk.String("dignissimos"),
        PropertyAlias: sdk.String("a"),
        PropertyID: sdk.String("debitis"),
        Qualities: []shared.QualityEnum{
            shared.QualityEnumBad,
        },
        StartDate: types.MustTimeFromString("2022-03-25T18:38:24.627Z"),
        TimeOrdering: operations.GetAssetPropertyValueHistoryTimeOrderingEnumAscending.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAssetPropertyValueHistoryResponse != nil {
        // handle response
    }
}
```

## GetInterpolatedAssetPropertyValues

<p>Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data.</p> <p>For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

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
    res, err := s.SDK.GetInterpolatedAssetPropertyValues(ctx, operations.GetInterpolatedAssetPropertyValuesRequest{
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        AssetID: sdk.String("voluptas"),
        EndTimeInSeconds: 374244,
        EndTimeOffsetInNanos: sdk.Int64(374296),
        IntervalInSeconds: 324405,
        IntervalWindowInSeconds: sdk.Int64(748789),
        MaxResults: sdk.Int64(680116),
        NextToken: sdk.String("adipisci"),
        PropertyAlias: sdk.String("minus"),
        PropertyID: sdk.String("dolores"),
        Quality: operations.GetInterpolatedAssetPropertyValuesQualityEnumBad,
        StartTimeInSeconds: 449292,
        StartTimeOffsetInNanos: sdk.Int64(296242),
        Type: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInterpolatedAssetPropertyValuesResponse != nil {
        // handle response
    }
}
```

## ListAccessPolicies

Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).

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
    res, err := s.SDK.ListAccessPolicies(ctx, operations.ListAccessPoliciesRequest{
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("quas"),
        IamArn: sdk.String("hic"),
        IdentityID: sdk.String("nesciunt"),
        IdentityType: operations.ListAccessPoliciesIdentityTypeEnumGroup.ToPointer(),
        MaxResults: sdk.Int64(548519),
        NextToken: sdk.String("pariatur"),
        ResourceID: sdk.String("totam"),
        ResourceType: operations.ListAccessPoliciesResourceTypeEnumProject.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccessPoliciesResponse != nil {
        // handle response
    }
}
```

## ListAssetModelProperties

Retrieves a paginated list of properties associated with an asset model. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.

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
    res, err := s.SDK.ListAssetModelProperties(ctx, operations.ListAssetModelPropertiesRequest{
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        AssetModelID: "asperiores",
        Filter: operations.ListAssetModelPropertiesFilterEnumBase.ToPointer(),
        MaxResults: sdk.Int64(451822),
        NextToken: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssetModelPropertiesResponse != nil {
        // handle response
    }
}
```

## ListAssetModels

Retrieves a paginated list of summaries of all asset models.

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
    res, err := s.SDK.ListAssetModels(ctx, operations.ListAssetModelsRequest{
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("commodi"),
        MaxResults: sdk.Int64(696077),
        NextToken: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssetModelsResponse != nil {
        // handle response
    }
}
```

## ListAssetProperties

Retrieves a paginated list of properties associated with an asset. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.

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
    res, err := s.SDK.ListAssetProperties(ctx, operations.ListAssetPropertiesRequest{
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("illo"),
        AssetID: "reiciendis",
        Filter: operations.ListAssetPropertiesFilterEnumAll.ToPointer(),
        MaxResults: sdk.Int64(546885),
        NextToken: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssetPropertiesResponse != nil {
        // handle response
    }
}
```

## ListAssetRelationships

Retrieves a paginated list of asset relationships for an asset. You can use this operation to identify an asset's root asset and all associated assets between that asset and its root.

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
    res, err := s.SDK.ListAssetRelationships(ctx, operations.ListAssetRelationshipsRequest{
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("ea"),
        AssetID: "occaecati",
        MaxResults: sdk.Int64(552078),
        NextToken: sdk.String("voluptatibus"),
        TraversalType: operations.ListAssetRelationshipsTraversalTypeEnumPathToRoot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssetRelationshipsResponse != nil {
        // handle response
    }
}
```

## ListAssets

<p>Retrieves a paginated list of asset summaries.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List assets based on a specific asset model.</p> </li> <li> <p>List top-level assets.</p> </li> </ul> <p>You can't use this operation to list all assets. To retrieve summaries for all of your assets, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html">ListAssetModels</a> to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.</p>

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
    res, err := s.SDK.ListAssets(ctx, operations.ListAssetsRequest{
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("non"),
        AssetModelID: sdk.String("officiis"),
        Filter: operations.ListAssetsFilterEnumTopLevel.ToPointer(),
        MaxResults: sdk.Int64(708609),
        NextToken: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssetsResponse != nil {
        // handle response
    }
}
```

## ListAssociatedAssets

<p>Retrieves a paginated list of associated assets.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List child assets associated to a parent asset by a hierarchy that you specify.</p> </li> <li> <p>List an asset's parent asset.</p> </li> </ul>

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
    res, err := s.SDK.ListAssociatedAssets(ctx, operations.ListAssociatedAssetsRequest{
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("error"),
        AssetID: "veniam",
        HierarchyID: sdk.String("minima"),
        MaxResults: sdk.Int64(924159),
        NextToken: sdk.String("reiciendis"),
        TraversalDirection: operations.ListAssociatedAssetsTraversalDirectionEnumChild.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssociatedAssetsResponse != nil {
        // handle response
    }
}
```

## ListBulkImportJobs

Retrieves a paginated list of bulk import job requests. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ListBulkImportJobs.html">List bulk import jobs (CLI)</a> in the <i>IoT SiteWise User Guide</i>.

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
    res, err := s.SDK.ListBulkImportJobs(ctx, operations.ListBulkImportJobsRequest{
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("officiis"),
        Filter: operations.ListBulkImportJobsFilterEnumAll.ToPointer(),
        MaxResults: sdk.Int64(512452),
        NextToken: sdk.String("exercitationem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBulkImportJobsResponse != nil {
        // handle response
    }
}
```

## ListDashboards

Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.

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
    res, err := s.SDK.ListDashboards(ctx, operations.ListDashboardsRequest{
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("hic"),
        MaxResults: sdk.Int64(710529),
        NextToken: sdk.String("debitis"),
        ProjectID: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDashboardsResponse != nil {
        // handle response
    }
}
```

## ListGateways

Retrieves a paginated list of gateways.

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
    res, err := s.SDK.ListGateways(ctx, operations.ListGatewaysRequest{
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        MaxResults: sdk.Int64(543678),
        NextToken: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGatewaysResponse != nil {
        // handle response
    }
}
```

## ListPortals

Retrieves a paginated list of IoT SiteWise Monitor portals.

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
    res, err := s.SDK.ListPortals(ctx, operations.ListPortalsRequest{
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        MaxResults: sdk.Int64(460220),
        NextToken: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPortalsResponse != nil {
        // handle response
    }
}
```

## ListProjectAssets

Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.

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
    res, err := s.SDK.ListProjectAssets(ctx, operations.ListProjectAssetsRequest{
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        MaxResults: sdk.Int64(405942),
        NextToken: sdk.String("sed"),
        ProjectID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProjectAssetsResponse != nil {
        // handle response
    }
}
```

## ListProjects

Retrieves a paginated list of projects for an IoT SiteWise Monitor portal.

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
    res, err := s.SDK.ListProjects(ctx, operations.ListProjectsRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        MaxResults: sdk.Int64(209750),
        NextToken: sdk.String("harum"),
        PortalID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProjectsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Retrieves the list of tags for an IoT SiteWise resource.

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
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("nam"),
        ResourceArn: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTimeSeries

Retrieves a paginated list of time series (data streams).

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
    res, err := s.SDK.ListTimeSeries(ctx, operations.ListTimeSeriesRequest{
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("unde"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        AliasPrefix: sdk.String("provident"),
        AssetID: sdk.String("repellendus"),
        MaxResults: sdk.Int64(962771),
        NextToken: sdk.String("voluptates"),
        TimeSeriesType: operations.ListTimeSeriesTimeSeriesTypeEnumAssociated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTimeSeriesResponse != nil {
        // handle response
    }
}
```

## PutDefaultEncryptionConfiguration

Sets the default encryption configuration for the Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.

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
    res, err := s.SDK.PutDefaultEncryptionConfiguration(ctx, operations.PutDefaultEncryptionConfigurationRequest{
        RequestBody: operations.PutDefaultEncryptionConfigurationRequestBody{
            EncryptionType: operations.PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnumKmsBasedEncryption,
            KmsKeyID: sdk.String("quidem"),
        },
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("veniam"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutDefaultEncryptionConfigurationResponse != nil {
        // handle response
    }
}
```

## PutLoggingOptions

Sets logging options for IoT SiteWise.

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
    res, err := s.SDK.PutLoggingOptions(ctx, operations.PutLoggingOptionsRequest{
        RequestBody: operations.PutLoggingOptionsRequestBody{
            LoggingOptions: operations.PutLoggingOptionsRequestBodyLoggingOptions{
                Level: shared.LoggingLevelEnumOff.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutLoggingOptionsResponse != nil {
        // handle response
    }
}
```

## PutStorageConfiguration

Configures storage settings for IoT SiteWise.

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
    res, err := s.SDK.PutStorageConfiguration(ctx, operations.PutStorageConfigurationRequest{
        RequestBody: operations.PutStorageConfigurationRequestBody{
            DisassociatedDataStorage: operations.PutStorageConfigurationRequestBodyDisassociatedDataStorageEnumDisabled.ToPointer(),
            MultiLayerStorage: &operations.PutStorageConfigurationRequestBodyMultiLayerStorage{
                CustomerManagedS3Storage: &shared.CustomerManagedS3Storage{
                    RoleArn: "maxime",
                    S3ResourceArn: "et",
                },
            },
            RetentionPeriod: &operations.PutStorageConfigurationRequestBodyRetentionPeriod{
                NumberOfDays: sdk.Int64(461007),
                Unlimited: sdk.Bool(false),
            },
            StorageType: operations.PutStorageConfigurationRequestBodyStorageTypeEnumSitewiseDefaultStorage,
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutStorageConfigurationResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.

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
                "minima": "aspernatur",
                "ex": "maiores",
                "corrupti": "at",
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("sunt"),
        ResourceArn: "recusandae",
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

Removes a tag from an IoT SiteWise resource.

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
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("dicta"),
        ResourceArn: "accusantium",
        TagKeys: []string{
            "dolores",
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

## UpdateAccessPolicy

Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor portal or project resource.

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
    res, err := s.SDK.UpdateAccessPolicy(ctx, operations.UpdateAccessPolicyRequest{
        RequestBody: operations.UpdateAccessPolicyRequestBody{
            AccessPolicyIdentity: operations.UpdateAccessPolicyRequestBodyAccessPolicyIdentity{
                Group: &shared.GroupIdentity{
                    ID: "563f94e2-9e97-43e9-a2a5-7a15be3e0608",
                },
                IamRole: &shared.IAMRoleIdentity{
                    Arn: "quae",
                },
                IamUser: &shared.IAMUserIdentity{
                    Arn: "molestiae",
                },
                User: &shared.UserIdentity{
                    ID: "e2b6e3ab-8845-4f05-97a6-0ff2a54a31e9",
                },
            },
            AccessPolicyPermission: operations.UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnumAdministrator,
            AccessPolicyResource: operations.UpdateAccessPolicyRequestBodyAccessPolicyResource{
                Portal: &shared.PortalResource{
                    ID: "764a3e86-5e79-456f-9251-a5a9da660ff5",
                },
                Project: &shared.ProjectResource{
                    ID: "7bfaad4f-9efc-41b4-912c-1032648dc2f6",
                },
            },
            ClientToken: sdk.String("dicta"),
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("hic"),
        AccessPolicyID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAccessPolicyResponse != nil {
        // handle response
    }
}
```

## UpdateAsset

Updates an asset's name. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.

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
    res, err := s.SDK.UpdateAsset(ctx, operations.UpdateAssetRequest{
        RequestBody: operations.UpdateAssetRequestBody{
            AssetDescription: sdk.String("eaque"),
            AssetName: "earum",
            ClientToken: sdk.String("perspiciatis"),
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("fugit"),
        AssetID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAssetResponse != nil {
        // handle response
    }
}
```

## UpdateAssetModel

<p>Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.</p> <important> <p>This operation overwrites the existing model with the provided model. To avoid deleting your asset model's properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p> <p>If you remove a property from an asset model, IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, IoT SiteWise disassociates every asset associated with that hierarchy. You can't change the type or data type of an existing property.</p> </important>

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
    res, err := s.SDK.UpdateAssetModel(ctx, operations.UpdateAssetModelRequest{
        RequestBody: operations.UpdateAssetModelRequestBody{
            AssetModelCompositeModels: []shared.AssetModelCompositeModel{
                shared.AssetModelCompositeModel{
                    Description: sdk.String("ratione"),
                    ID: sdk.String("aed01179-9631-42fd-a047-71778ff61d01"),
                    Name: "Anita Koch",
                    Properties: sdk.String("aliquid"),
                    Type: "ipsa",
                },
                shared.AssetModelCompositeModel{
                    Description: sdk.String("laborum"),
                    ID: sdk.String("15db6a66-0659-4a1a-9eaa-b5851d6c645b"),
                    Name: "Leona Rippin IV",
                    Properties: sdk.String("omnis"),
                    Type: "veritatis",
                },
                shared.AssetModelCompositeModel{
                    Description: sdk.String("rerum"),
                    ID: sdk.String("aa0fe1ad-e008-4e6f-8c5f-350d8cdb5a34"),
                    Name: "Cassandra Bogan",
                    Properties: sdk.String("consequatur"),
                    Type: "architecto",
                },
            },
            AssetModelDescription: sdk.String("sit"),
            AssetModelHierarchies: []shared.AssetModelHierarchy{
                shared.AssetModelHierarchy{
                    ChildAssetModelID: "fugit",
                    ID: sdk.String("1813d520-8ece-47e2-93b6-68451c6c6e20"),
                    Name: "Alyssa Boyer",
                },
                shared.AssetModelHierarchy{
                    ChildAssetModelID: "vero",
                    ID: sdk.String("ab3fec95-78a6-4458-8273-a8418d162309"),
                    Name: "Dominic Abernathy",
                },
            },
            AssetModelName: "occaecati",
            AssetModelProperties: []shared.AssetModelProperty{
                shared.AssetModelProperty{
                    DataType: shared.PropertyDataTypeEnumString,
                    DataTypeSpec: sdk.String("inventore"),
                    ID: sdk.String("aefb9f58-c4d8-46e6-8e4b-e056013f59da"),
                    Name: "Ida Kilback",
                    Type: shared.PropertyType{
                        Attribute: &shared.Attribute{
                            DefaultValue: sdk.String("sint"),
                        },
                        Measurement: &shared.Measurement{
                            ProcessingConfig: &shared.MeasurementProcessingConfig{
                                ForwardingConfig: shared.ForwardingConfig{
                                    State: shared.ForwardingConfigStateEnumEnabled,
                                },
                            },
                        },
                        Metric: &shared.Metric{
                            Expression: "impedit",
                            ProcessingConfig: &shared.MetricProcessingConfig{
                                ComputeLocation: shared.ComputeLocationEnumCloud,
                            },
                            Variables: []shared.ExpressionVariable{
                                shared.ExpressionVariable{
                                    Name: "Ruben Hodkiewicz",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("quae"),
                                        PropertyID: "minus",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Pablo Feeney",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("ipsum"),
                                        PropertyID: "impedit",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Shelia Walker",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("iusto"),
                                        PropertyID: "voluptate",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Stella DuBuque",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("quibusdam"),
                                        PropertyID: "iure",
                                    },
                                },
                            },
                            Window: shared.MetricWindow{
                                Tumbling: &shared.TumblingWindow{
                                    Interval: "odit",
                                    Offset: sdk.String("voluptatibus"),
                                },
                            },
                        },
                        Transform: &shared.Transform{
                            Expression: "vel",
                            ProcessingConfig: &shared.TransformProcessingConfig{
                                ComputeLocation: shared.ComputeLocationEnumEdge,
                                ForwardingConfig: &shared.ForwardingConfig{
                                    State: shared.ForwardingConfigStateEnumEnabled,
                                },
                            },
                            Variables: []shared.ExpressionVariable{
                                shared.ExpressionVariable{
                                    Name: "Wm Brakus",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("porro"),
                                        PropertyID: "aliquam",
                                    },
                                },
                            },
                        },
                    },
                    Unit: sdk.String("velit"),
                },
                shared.AssetModelProperty{
                    DataType: shared.PropertyDataTypeEnumString,
                    DataTypeSpec: sdk.String("accusantium"),
                    ID: sdk.String("661e9634-9e1c-4f9e-86e3-a437000ae6b6"),
                    Name: "Guadalupe Mertz",
                    Type: shared.PropertyType{
                        Attribute: &shared.Attribute{
                            DefaultValue: sdk.String("a"),
                        },
                        Measurement: &shared.Measurement{
                            ProcessingConfig: &shared.MeasurementProcessingConfig{
                                ForwardingConfig: shared.ForwardingConfig{
                                    State: shared.ForwardingConfigStateEnumDisabled,
                                },
                            },
                        },
                        Metric: &shared.Metric{
                            Expression: "ullam",
                            ProcessingConfig: &shared.MetricProcessingConfig{
                                ComputeLocation: shared.ComputeLocationEnumCloud,
                            },
                            Variables: []shared.ExpressionVariable{
                                shared.ExpressionVariable{
                                    Name: "Rodolfo Hintz",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("error"),
                                        PropertyID: "esse",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Christine Swift Jr.",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("dolorem"),
                                        PropertyID: "ad",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Margarita Jacobson",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("libero"),
                                        PropertyID: "rem",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Mr. Lonnie Considine",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("quae"),
                                        PropertyID: "quae",
                                    },
                                },
                            },
                            Window: shared.MetricWindow{
                                Tumbling: &shared.TumblingWindow{
                                    Interval: "modi",
                                    Offset: sdk.String("neque"),
                                },
                            },
                        },
                        Transform: &shared.Transform{
                            Expression: "exercitationem",
                            ProcessingConfig: &shared.TransformProcessingConfig{
                                ComputeLocation: shared.ComputeLocationEnumCloud,
                                ForwardingConfig: &shared.ForwardingConfig{
                                    State: shared.ForwardingConfigStateEnumDisabled,
                                },
                            },
                            Variables: []shared.ExpressionVariable{
                                shared.ExpressionVariable{
                                    Name: "Orville Ratke",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("quia"),
                                        PropertyID: "nostrum",
                                    },
                                },
                            },
                        },
                    },
                    Unit: sdk.String("omnis"),
                },
                shared.AssetModelProperty{
                    DataType: shared.PropertyDataTypeEnumBoolean,
                    DataTypeSpec: sdk.String("dicta"),
                    ID: sdk.String("abda8c07-0e10-484c-b067-2d1ad879eeb9"),
                    Name: "Stacey Hintz",
                    Type: shared.PropertyType{
                        Attribute: &shared.Attribute{
                            DefaultValue: sdk.String("corporis"),
                        },
                        Measurement: &shared.Measurement{
                            ProcessingConfig: &shared.MeasurementProcessingConfig{
                                ForwardingConfig: shared.ForwardingConfig{
                                    State: shared.ForwardingConfigStateEnumEnabled,
                                },
                            },
                        },
                        Metric: &shared.Metric{
                            Expression: "voluptatibus",
                            ProcessingConfig: &shared.MetricProcessingConfig{
                                ComputeLocation: shared.ComputeLocationEnumCloud,
                            },
                            Variables: []shared.ExpressionVariable{
                                shared.ExpressionVariable{
                                    Name: "Rachel Powlowski",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("accusantium"),
                                        PropertyID: "expedita",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Jesse Sporer",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("odit"),
                                        PropertyID: "explicabo",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Natasha Wehner",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("similique"),
                                        PropertyID: "ut",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Tim Breitenberg",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("delectus"),
                                        PropertyID: "cupiditate",
                                    },
                                },
                            },
                            Window: shared.MetricWindow{
                                Tumbling: &shared.TumblingWindow{
                                    Interval: "fugit",
                                    Offset: sdk.String("numquam"),
                                },
                            },
                        },
                        Transform: &shared.Transform{
                            Expression: "numquam",
                            ProcessingConfig: &shared.TransformProcessingConfig{
                                ComputeLocation: shared.ComputeLocationEnumEdge,
                                ForwardingConfig: &shared.ForwardingConfig{
                                    State: shared.ForwardingConfigStateEnumEnabled,
                                },
                            },
                            Variables: []shared.ExpressionVariable{
                                shared.ExpressionVariable{
                                    Name: "Kara Tromp",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("expedita"),
                                        PropertyID: "voluptatum",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Warren Schowalter",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("in"),
                                        PropertyID: "minus",
                                    },
                                },
                                shared.ExpressionVariable{
                                    Name: "Emma Herzog",
                                    Value: shared.VariableValue{
                                        HierarchyID: sdk.String("maiores"),
                                        PropertyID: "tempore",
                                    },
                                },
                            },
                        },
                    },
                    Unit: sdk.String("aperiam"),
                },
            },
            ClientToken: sdk.String("libero"),
        },
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("velit"),
        AssetModelID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAssetModelResponse != nil {
        // handle response
    }
}
```

## UpdateAssetProperty

<p>Updates an asset property's alias and notification state.</p> <important> <p>This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html">DescribeAssetProperty</a>.</p> </important>

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
    res, err := s.SDK.UpdateAssetProperty(ctx, operations.UpdateAssetPropertyRequest{
        RequestBody: operations.UpdateAssetPropertyRequestBody{
            ClientToken: sdk.String("fuga"),
            PropertyAlias: sdk.String("nostrum"),
            PropertyNotificationState: operations.UpdateAssetPropertyRequestBodyPropertyNotificationStateEnumDisabled.ToPointer(),
            PropertyUnit: sdk.String("impedit"),
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("nemo"),
        AssetID: "reprehenderit",
        PropertyID: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateDashboard

Updates an IoT SiteWise Monitor dashboard.

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
    res, err := s.SDK.UpdateDashboard(ctx, operations.UpdateDashboardRequest{
        RequestBody: operations.UpdateDashboardRequestBody{
            ClientToken: sdk.String("odio"),
            DashboardDefinition: "minima",
            DashboardDescription: sdk.String("in"),
            DashboardName: "ducimus",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        DashboardID: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDashboardResponse != nil {
        // handle response
    }
}
```

## UpdateGateway

Updates a gateway's name.

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
    res, err := s.SDK.UpdateGateway(ctx, operations.UpdateGatewayRequest{
        RequestBody: operations.UpdateGatewayRequestBody{
            GatewayName: "similique",
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("quidem"),
        GatewayID: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateGatewayCapabilityConfiguration

Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.

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
    res, err := s.SDK.UpdateGatewayCapabilityConfiguration(ctx, operations.UpdateGatewayCapabilityConfigurationRequest{
        RequestBody: operations.UpdateGatewayCapabilityConfigurationRequestBody{
            CapabilityConfiguration: "quam",
            CapabilityNamespace: "dolorem",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("cum"),
        GatewayID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGatewayCapabilityConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdatePortal

Updates an IoT SiteWise Monitor portal.

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
    res, err := s.SDK.UpdatePortal(ctx, operations.UpdatePortalRequest{
        RequestBody: operations.UpdatePortalRequestBody{
            Alarms: &operations.UpdatePortalRequestBodyAlarms{
                AlarmRoleArn: sdk.String("earum"),
                NotificationLambdaArn: sdk.String("veniam"),
            },
            ClientToken: sdk.String("animi"),
            NotificationSenderEmail: sdk.String("dolores"),
            PortalContactEmail: "nam",
            PortalDescription: sdk.String("dicta"),
            PortalLogoImage: &operations.UpdatePortalRequestBodyPortalLogoImage{
                File: &shared.ImageFile{
                    Data: "consequuntur",
                    Type: shared.ImageFileTypeEnumPng,
                },
                ID: sdk.String("eb07f116-db99-4545-bc95-fa88970e189d"),
            },
            PortalName: "tempore",
            RoleArn: "libero",
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        PortalID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePortalResponse != nil {
        // handle response
    }
}
```

## UpdateProject

Updates an IoT SiteWise Monitor project.

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
    res, err := s.SDK.UpdateProject(ctx, operations.UpdateProjectRequest{
        RequestBody: operations.UpdateProjectRequestBody{
            ClientToken: sdk.String("deserunt"),
            ProjectDescription: sdk.String("doloremque"),
            ProjectName: "quis",
        },
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("possimus"),
        ProjectID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProjectResponse != nil {
        // handle response
    }
}
```
