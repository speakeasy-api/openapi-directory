# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/iotsitewise/2019-12-02/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateAssetsRequest(
    request_body=operations.AssociateAssetsRequestBody(
        child_asset_id="corrupti",
        client_token="provident",
        hierarchy_id="distinctio",
    ),
    x_amz_algorithm="quibusdam",
    x_amz_content_sha256="unde",
    x_amz_credential="nulla",
    x_amz_date="corrupti",
    x_amz_security_token="illum",
    x_amz_signature="vel",
    x_amz_signed_headers="error",
    asset_id="deserunt",
)
    
res = s.associate_assets(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associate_assets` - Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/add-associated-assets.html">Associating assets</a> in the <i>IoT SiteWise User Guide</i>.
* `associate_time_series_to_asset_property` - Associates a time series (data stream) with an asset property.
* `batch_associate_project_assets` - Associates a group (batch) of assets with an IoT SiteWise Monitor project.
* `batch_disassociate_project_assets` - Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.
* `batch_get_asset_property_aggregates` - Gets aggregated values (for example, average, minimum, and maximum) for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.
* `batch_get_asset_property_value` - Gets the current value for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.
* `batch_get_asset_property_value_history` - Gets the historical values for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.
* `batch_put_asset_property_value` - <p>Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting data using the API</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> <important> <p>With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps outside of the inclusive range of [-7 days, +10 minutes] and returns a <code>TimestampOutOfRangeException</code> error.</p> <p>For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>, then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p> </important> <p>IoT SiteWise authorizes access to each <code>BatchPutAssetPropertyValue</code> entry individually. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-batchputassetpropertyvalue-action">BatchPutAssetPropertyValue authorization</a> in the <i>IoT SiteWise User Guide</i>.</p>
* `create_access_policy` - Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource.
* `create_asset` - Creates an asset from an existing asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html">Creating assets</a> in the <i>IoT SiteWise User Guide</i>.
* `create_asset_model` - Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining asset models</a> in the <i>IoT SiteWise User Guide</i>.
* `create_bulk_import_job` - <p>Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/CreateBulkImportJob.html">Create a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <important> <p>You must enable IoT SiteWise to export data to Amazon S3 before you create a bulk import job. For more information about how to configure storage settings, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html">PutStorageConfiguration</a>.</p> </important>
* `create_dashboard` - Creates a dashboard in an IoT SiteWise Monitor project.
* `create_gateway` - Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>.
* `create_portal` - <p>Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM to authenticate portal users and manage user permissions.</p> <note> <p>Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or removing portal administrators</a> in the <i>IoT SiteWise User Guide</i>.</p> </note>
* `create_project` - <p>Creates a project in the specified portal.</p> <note> <p>Make sure that the project name and description don't contain confidential information.</p> </note>
* `delete_access_policy` - Deletes an access policy that grants the specified identity access to the specified IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor resource.
* `delete_asset` - <p>Deletes an asset. This action can't be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>. </p> <note> <p>You can't delete an asset that's associated to another asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p> </note>
* `delete_asset_model` - Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>.
* `delete_dashboard` - Deletes a dashboard from IoT SiteWise Monitor.
* `delete_gateway` - Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system.
* `delete_portal` - Deletes a portal from IoT SiteWise Monitor.
* `delete_project` - Deletes a project from IoT SiteWise Monitor.
* `delete_time_series` - <p>Deletes a time series (data stream). If you delete a time series that's associated with an asset property, the asset property still exists, but the time series will no longer be associated with this asset property.</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>
* `describe_access_policy` - Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project.
* `describe_asset` - Retrieves information about an asset.
* `describe_asset_model` - Retrieves information about an asset model.
* `describe_asset_property` - <p>Retrieves information about an asset property.</p> <note> <p>When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation's response includes the new default value.</p> </note> <p>This operation doesn't return the value of the asset property. To get the value of an asset property, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html">GetAssetPropertyValue</a>.</p>
* `describe_bulk_import_job` - Retrieves information about a bulk import job request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/DescribeBulkImportJob.html">Describe a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.
* `describe_dashboard` - Retrieves information about a dashboard.
* `describe_default_encryption_configuration` - Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified Region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.
* `describe_gateway` - Retrieves information about a gateway.
* `describe_gateway_capability_configuration` - Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.
* `describe_logging_options` - Retrieves the current IoT SiteWise logging options.
* `describe_portal` - Retrieves information about a portal.
* `describe_project` - Retrieves information about a project.
* `describe_storage_configuration` - Retrieves information about the storage configuration for IoT SiteWise.
* `describe_time_series` - <p>Retrieves information about a time series (data stream).</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>
* `disassociate_assets` - Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.
* `disassociate_time_series_from_asset_property` - Disassociates a time series (data stream) from an asset property.
* `get_asset_property_aggregates` - <p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
* `get_asset_property_value` - <p>Gets an asset property's current value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
* `get_asset_property_value_history` - <p>Gets the history of an asset property's values. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
* `get_interpolated_asset_property_values` - <p>Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data.</p> <p>For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
* `list_access_policies` - Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).
* `list_asset_model_properties` - Retrieves a paginated list of properties associated with an asset model. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.
* `list_asset_models` - Retrieves a paginated list of summaries of all asset models.
* `list_asset_properties` - Retrieves a paginated list of properties associated with an asset. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.
* `list_asset_relationships` - Retrieves a paginated list of asset relationships for an asset. You can use this operation to identify an asset's root asset and all associated assets between that asset and its root.
* `list_assets` - <p>Retrieves a paginated list of asset summaries.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List assets based on a specific asset model.</p> </li> <li> <p>List top-level assets.</p> </li> </ul> <p>You can't use this operation to list all assets. To retrieve summaries for all of your assets, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html">ListAssetModels</a> to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.</p>
* `list_associated_assets` - <p>Retrieves a paginated list of associated assets.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List child assets associated to a parent asset by a hierarchy that you specify.</p> </li> <li> <p>List an asset's parent asset.</p> </li> </ul>
* `list_bulk_import_jobs` - Retrieves a paginated list of bulk import job requests. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ListBulkImportJobs.html">List bulk import jobs (CLI)</a> in the <i>IoT SiteWise User Guide</i>.
* `list_dashboards` - Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.
* `list_gateways` - Retrieves a paginated list of gateways.
* `list_portals` - Retrieves a paginated list of IoT SiteWise Monitor portals.
* `list_project_assets` - Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.
* `list_projects` - Retrieves a paginated list of projects for an IoT SiteWise Monitor portal.
* `list_tags_for_resource` - Retrieves the list of tags for an IoT SiteWise resource.
* `list_time_series` - Retrieves a paginated list of time series (data streams).
* `put_default_encryption_configuration` - Sets the default encryption configuration for the Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.
* `put_logging_options` - Sets logging options for IoT SiteWise.
* `put_storage_configuration` - Configures storage settings for IoT SiteWise.
* `tag_resource` - Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.
* `untag_resource` - Removes a tag from an IoT SiteWise resource.
* `update_access_policy` - Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor portal or project resource.
* `update_asset` - Updates an asset's name. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.
* `update_asset_model` - <p>Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.</p> <important> <p>This operation overwrites the existing model with the provided model. To avoid deleting your asset model's properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p> <p>If you remove a property from an asset model, IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, IoT SiteWise disassociates every asset associated with that hierarchy. You can't change the type or data type of an existing property.</p> </important>
* `update_asset_property` - <p>Updates an asset property's alias and notification state.</p> <important> <p>This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html">DescribeAssetProperty</a>.</p> </important>
* `update_dashboard` - Updates an IoT SiteWise Monitor dashboard.
* `update_gateway` - Updates a gateway's name.
* `update_gateway_capability_configuration` - Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.
* `update_portal` - Updates an IoT SiteWise Monitor portal.
* `update_project` - Updates an IoT SiteWise Monitor project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
