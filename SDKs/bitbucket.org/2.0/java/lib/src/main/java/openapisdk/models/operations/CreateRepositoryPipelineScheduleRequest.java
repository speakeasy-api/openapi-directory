package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRepositoryPipelineScheduleRequest {
    public CreateRepositoryPipelineSchedulePathParams pathParams;
    public CreateRepositoryPipelineScheduleRequest withPathParams(CreateRepositoryPipelineSchedulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CreateRepositoryPipelineScheduleRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}