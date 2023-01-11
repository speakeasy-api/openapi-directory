package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkloadRequest {
    public CreateWorkloadHeaders headers;
    public CreateWorkloadRequest withHeaders(CreateWorkloadHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateWorkloadRequestBody request;
    public CreateWorkloadRequest withRequest(CreateWorkloadRequestBody request) {
        this.request = request;
        return this;
    }
}