package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePipelineVariableForTeamRequest {
    public UpdatePipelineVariableForTeamPathParams pathParams;
    public UpdatePipelineVariableForTeamRequest withPathParams(UpdatePipelineVariableForTeamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public UpdatePipelineVariableForTeamRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}