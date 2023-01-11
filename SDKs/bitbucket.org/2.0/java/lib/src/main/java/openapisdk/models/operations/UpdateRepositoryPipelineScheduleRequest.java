package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRepositoryPipelineScheduleRequest {
    public UpdateRepositoryPipelineSchedulePathParams pathParams;
    public UpdateRepositoryPipelineScheduleRequest withPathParams(UpdateRepositoryPipelineSchedulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public UpdateRepositoryPipelineScheduleRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}