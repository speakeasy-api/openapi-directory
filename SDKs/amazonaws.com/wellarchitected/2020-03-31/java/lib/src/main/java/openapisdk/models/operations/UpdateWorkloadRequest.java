package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkloadRequest {
    public UpdateWorkloadPathParams pathParams;
    public UpdateWorkloadRequest withPathParams(UpdateWorkloadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateWorkloadHeaders headers;
    public UpdateWorkloadRequest withHeaders(UpdateWorkloadHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateWorkloadRequestBody request;
    public UpdateWorkloadRequest withRequest(UpdateWorkloadRequestBody request) {
        this.request = request;
        return this;
    }
}