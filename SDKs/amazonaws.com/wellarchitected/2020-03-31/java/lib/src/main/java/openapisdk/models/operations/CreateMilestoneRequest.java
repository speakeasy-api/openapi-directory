package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMilestoneRequest {
    public CreateMilestonePathParams pathParams;
    public CreateMilestoneRequest withPathParams(CreateMilestonePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateMilestoneHeaders headers;
    public CreateMilestoneRequest withHeaders(CreateMilestoneHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateMilestoneRequestBody request;
    public CreateMilestoneRequest withRequest(CreateMilestoneRequestBody request) {
        this.request = request;
        return this;
    }
}