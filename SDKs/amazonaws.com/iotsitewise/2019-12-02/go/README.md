# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iotsitewise/2019-12-02/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.AssociateAssets(ctx, operations.AssociateAssetsRequest{
        RequestBody: operations.AssociateAssetsRequestBody{
            ChildAssetID: "corrupti",
            ClientToken: sdk.String("provident"),
            HierarchyID: "distinctio",
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("error"),
        AssetID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AssociateAssets](docs/sdk/README.md#associateassets) - Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/add-associated-assets.html">Associating assets</a> in the <i>IoT SiteWise User Guide</i>.
* [AssociateTimeSeriesToAssetProperty](docs/sdk/README.md#associatetimeseriestoassetproperty) - Associates a time series (data stream) with an asset property.
* [BatchAssociateProjectAssets](docs/sdk/README.md#batchassociateprojectassets) - Associates a group (batch) of assets with an IoT SiteWise Monitor project.
* [BatchDisassociateProjectAssets](docs/sdk/README.md#batchdisassociateprojectassets) - Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.
* [BatchGetAssetPropertyAggregates](docs/sdk/README.md#batchgetassetpropertyaggregates) - Gets aggregated values (for example, average, minimum, and maximum) for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.
* [BatchGetAssetPropertyValue](docs/sdk/README.md#batchgetassetpropertyvalue) - Gets the current value for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.
* [BatchGetAssetPropertyValueHistory](docs/sdk/README.md#batchgetassetpropertyvaluehistory) - Gets the historical values for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.
* [BatchPutAssetPropertyValue](docs/sdk/README.md#batchputassetpropertyvalue) - <p>Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting data using the API</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> <important> <p>With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps outside of the inclusive range of [-7 days, +10 minutes] and returns a <code>TimestampOutOfRangeException</code> error.</p> <p>For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>, then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p> </important> <p>IoT SiteWise authorizes access to each <code>BatchPutAssetPropertyValue</code> entry individually. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-batchputassetpropertyvalue-action">BatchPutAssetPropertyValue authorization</a> in the <i>IoT SiteWise User Guide</i>.</p>
* [CreateAccessPolicy](docs/sdk/README.md#createaccesspolicy) - Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource.
* [CreateAsset](docs/sdk/README.md#createasset) - Creates an asset from an existing asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html">Creating assets</a> in the <i>IoT SiteWise User Guide</i>.
* [CreateAssetModel](docs/sdk/README.md#createassetmodel) - Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining asset models</a> in the <i>IoT SiteWise User Guide</i>.
* [CreateBulkImportJob](docs/sdk/README.md#createbulkimportjob) - <p>Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/CreateBulkImportJob.html">Create a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <important> <p>You must enable IoT SiteWise to export data to Amazon S3 before you create a bulk import job. For more information about how to configure storage settings, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html">PutStorageConfiguration</a>.</p> </important>
* [CreateDashboard](docs/sdk/README.md#createdashboard) - Creates a dashboard in an IoT SiteWise Monitor project.
* [CreateGateway](docs/sdk/README.md#creategateway) - Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>.
* [CreatePortal](docs/sdk/README.md#createportal) - <p>Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM to authenticate portal users and manage user permissions.</p> <note> <p>Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or removing portal administrators</a> in the <i>IoT SiteWise User Guide</i>.</p> </note>
* [CreateProject](docs/sdk/README.md#createproject) - <p>Creates a project in the specified portal.</p> <note> <p>Make sure that the project name and description don't contain confidential information.</p> </note>
* [DeleteAccessPolicy](docs/sdk/README.md#deleteaccesspolicy) - Deletes an access policy that grants the specified identity access to the specified IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor resource.
* [DeleteAsset](docs/sdk/README.md#deleteasset) - <p>Deletes an asset. This action can't be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>. </p> <note> <p>You can't delete an asset that's associated to another asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p> </note>
* [DeleteAssetModel](docs/sdk/README.md#deleteassetmodel) - Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>.
* [DeleteDashboard](docs/sdk/README.md#deletedashboard) - Deletes a dashboard from IoT SiteWise Monitor.
* [DeleteGateway](docs/sdk/README.md#deletegateway) - Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system.
* [DeletePortal](docs/sdk/README.md#deleteportal) - Deletes a portal from IoT SiteWise Monitor.
* [DeleteProject](docs/sdk/README.md#deleteproject) - Deletes a project from IoT SiteWise Monitor.
* [DeleteTimeSeries](docs/sdk/README.md#deletetimeseries) - <p>Deletes a time series (data stream). If you delete a time series that's associated with an asset property, the asset property still exists, but the time series will no longer be associated with this asset property.</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>
* [DescribeAccessPolicy](docs/sdk/README.md#describeaccesspolicy) - Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project.
* [DescribeAsset](docs/sdk/README.md#describeasset) - Retrieves information about an asset.
* [DescribeAssetModel](docs/sdk/README.md#describeassetmodel) - Retrieves information about an asset model.
* [DescribeAssetProperty](docs/sdk/README.md#describeassetproperty) - <p>Retrieves information about an asset property.</p> <note> <p>When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation's response includes the new default value.</p> </note> <p>This operation doesn't return the value of the asset property. To get the value of an asset property, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html">GetAssetPropertyValue</a>.</p>
* [DescribeBulkImportJob](docs/sdk/README.md#describebulkimportjob) - Retrieves information about a bulk import job request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/DescribeBulkImportJob.html">Describe a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.
* [DescribeDashboard](docs/sdk/README.md#describedashboard) - Retrieves information about a dashboard.
* [DescribeDefaultEncryptionConfiguration](docs/sdk/README.md#describedefaultencryptionconfiguration) - Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified Region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.
* [DescribeGateway](docs/sdk/README.md#describegateway) - Retrieves information about a gateway.
* [DescribeGatewayCapabilityConfiguration](docs/sdk/README.md#describegatewaycapabilityconfiguration) - Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.
* [DescribeLoggingOptions](docs/sdk/README.md#describeloggingoptions) - Retrieves the current IoT SiteWise logging options.
* [DescribePortal](docs/sdk/README.md#describeportal) - Retrieves information about a portal.
* [DescribeProject](docs/sdk/README.md#describeproject) - Retrieves information about a project.
* [DescribeStorageConfiguration](docs/sdk/README.md#describestorageconfiguration) - Retrieves information about the storage configuration for IoT SiteWise.
* [DescribeTimeSeries](docs/sdk/README.md#describetimeseries) - <p>Retrieves information about a time series (data stream).</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>
* [DisassociateAssets](docs/sdk/README.md#disassociateassets) - Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.
* [DisassociateTimeSeriesFromAssetProperty](docs/sdk/README.md#disassociatetimeseriesfromassetproperty) - Disassociates a time series (data stream) from an asset property.
* [GetAssetPropertyAggregates](docs/sdk/README.md#getassetpropertyaggregates) - <p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
* [GetAssetPropertyValue](docs/sdk/README.md#getassetpropertyvalue) - <p>Gets an asset property's current value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
* [GetAssetPropertyValueHistory](docs/sdk/README.md#getassetpropertyvaluehistory) - <p>Gets the history of an asset property's values. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
* [GetInterpolatedAssetPropertyValues](docs/sdk/README.md#getinterpolatedassetpropertyvalues) - <p>Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data.</p> <p>For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
* [ListAccessPolicies](docs/sdk/README.md#listaccesspolicies) - Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).
* [ListAssetModelProperties](docs/sdk/README.md#listassetmodelproperties) - Retrieves a paginated list of properties associated with an asset model. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.
* [ListAssetModels](docs/sdk/README.md#listassetmodels) - Retrieves a paginated list of summaries of all asset models.
* [ListAssetProperties](docs/sdk/README.md#listassetproperties) - Retrieves a paginated list of properties associated with an asset. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.
* [ListAssetRelationships](docs/sdk/README.md#listassetrelationships) - Retrieves a paginated list of asset relationships for an asset. You can use this operation to identify an asset's root asset and all associated assets between that asset and its root.
* [ListAssets](docs/sdk/README.md#listassets) - <p>Retrieves a paginated list of asset summaries.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List assets based on a specific asset model.</p> </li> <li> <p>List top-level assets.</p> </li> </ul> <p>You can't use this operation to list all assets. To retrieve summaries for all of your assets, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html">ListAssetModels</a> to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.</p>
* [ListAssociatedAssets](docs/sdk/README.md#listassociatedassets) - <p>Retrieves a paginated list of associated assets.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List child assets associated to a parent asset by a hierarchy that you specify.</p> </li> <li> <p>List an asset's parent asset.</p> </li> </ul>
* [ListBulkImportJobs](docs/sdk/README.md#listbulkimportjobs) - Retrieves a paginated list of bulk import job requests. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ListBulkImportJobs.html">List bulk import jobs (CLI)</a> in the <i>IoT SiteWise User Guide</i>.
* [ListDashboards](docs/sdk/README.md#listdashboards) - Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.
* [ListGateways](docs/sdk/README.md#listgateways) - Retrieves a paginated list of gateways.
* [ListPortals](docs/sdk/README.md#listportals) - Retrieves a paginated list of IoT SiteWise Monitor portals.
* [ListProjectAssets](docs/sdk/README.md#listprojectassets) - Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.
* [ListProjects](docs/sdk/README.md#listprojects) - Retrieves a paginated list of projects for an IoT SiteWise Monitor portal.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Retrieves the list of tags for an IoT SiteWise resource.
* [ListTimeSeries](docs/sdk/README.md#listtimeseries) - Retrieves a paginated list of time series (data streams).
* [PutDefaultEncryptionConfiguration](docs/sdk/README.md#putdefaultencryptionconfiguration) - Sets the default encryption configuration for the Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.
* [PutLoggingOptions](docs/sdk/README.md#putloggingoptions) - Sets logging options for IoT SiteWise.
* [PutStorageConfiguration](docs/sdk/README.md#putstorageconfiguration) - Configures storage settings for IoT SiteWise.
* [TagResource](docs/sdk/README.md#tagresource) - Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes a tag from an IoT SiteWise resource.
* [UpdateAccessPolicy](docs/sdk/README.md#updateaccesspolicy) - Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor portal or project resource.
* [UpdateAsset](docs/sdk/README.md#updateasset) - Updates an asset's name. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.
* [UpdateAssetModel](docs/sdk/README.md#updateassetmodel) - <p>Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.</p> <important> <p>This operation overwrites the existing model with the provided model. To avoid deleting your asset model's properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p> <p>If you remove a property from an asset model, IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, IoT SiteWise disassociates every asset associated with that hierarchy. You can't change the type or data type of an existing property.</p> </important>
* [UpdateAssetProperty](docs/sdk/README.md#updateassetproperty) - <p>Updates an asset property's alias and notification state.</p> <important> <p>This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html">DescribeAssetProperty</a>.</p> </important>
* [UpdateDashboard](docs/sdk/README.md#updatedashboard) - Updates an IoT SiteWise Monitor dashboard.
* [UpdateGateway](docs/sdk/README.md#updategateway) - Updates a gateway's name.
* [UpdateGatewayCapabilityConfiguration](docs/sdk/README.md#updategatewaycapabilityconfiguration) - Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.
* [UpdatePortal](docs/sdk/README.md#updateportal) - Updates an IoT SiteWise Monitor portal.
* [UpdateProject](docs/sdk/README.md#updateproject) - Updates an IoT SiteWise Monitor project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
