package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddConnectionPoolRequest {
    public AddConnectionPoolPathParams pathParams;
    public AddConnectionPoolRequest withPathParams(AddConnectionPoolPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems request;
    public AddConnectionPoolRequest withRequest(openapisdk.models.shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems request) {
        this.request = request;
        return this;
    }
}