package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddDatabaseRequest {
    public AddDatabasePathParams pathParams;
    public AddDatabaseRequest withPathParams(AddDatabasePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems request;
    public AddDatabaseRequest withRequest(openapisdk.models.shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems request) {
        this.request = request;
        return this;
    }
}