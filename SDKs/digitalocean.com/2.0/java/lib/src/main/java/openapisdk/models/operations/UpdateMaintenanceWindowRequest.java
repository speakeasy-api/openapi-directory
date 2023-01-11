package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMaintenanceWindowRequest {
    public UpdateMaintenanceWindowPathParams pathParams;
    public UpdateMaintenanceWindowRequest withPathParams(UpdateMaintenanceWindowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesMaintenanceWindowAllOf0Input request;
    public UpdateMaintenanceWindowRequest withRequest(openapisdk.models.shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesMaintenanceWindowAllOf0Input request) {
        this.request = request;
        return this;
    }
}