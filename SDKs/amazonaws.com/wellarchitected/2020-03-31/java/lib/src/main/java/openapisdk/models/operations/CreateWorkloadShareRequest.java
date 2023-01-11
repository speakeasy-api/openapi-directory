package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkloadShareRequest {
    public CreateWorkloadSharePathParams pathParams;
    public CreateWorkloadShareRequest withPathParams(CreateWorkloadSharePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateWorkloadShareHeaders headers;
    public CreateWorkloadShareRequest withHeaders(CreateWorkloadShareHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateWorkloadShareRequestBody request;
    public CreateWorkloadShareRequest withRequest(CreateWorkloadShareRequestBody request) {
        this.request = request;
        return this;
    }
}