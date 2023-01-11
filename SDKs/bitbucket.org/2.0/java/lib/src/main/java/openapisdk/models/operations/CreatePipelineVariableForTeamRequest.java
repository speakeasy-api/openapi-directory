package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePipelineVariableForTeamRequest {
    public CreatePipelineVariableForTeamPathParams pathParams;
    public CreatePipelineVariableForTeamRequest withPathParams(CreatePipelineVariableForTeamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreatePipelineVariableForTeamQueryParams queryParams;
    public CreatePipelineVariableForTeamRequest withQueryParams(CreatePipelineVariableForTeamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CreatePipelineVariableForTeamRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}