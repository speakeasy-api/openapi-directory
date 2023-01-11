package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSqlModeRequest {
    public UpdateSqlModePathParams pathParams;
    public UpdateSqlModeRequest withPathParams(UpdateSqlModePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1sqlModeGetResponses200ContentApplication1jsonSchema request;
    public UpdateSqlModeRequest withRequest(openapisdk.models.shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1sqlModeGetResponses200ContentApplication1jsonSchema request) {
        this.request = request;
        return this;
    }
}