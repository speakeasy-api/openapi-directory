package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetDevicePositionRequest {
    public BatchGetDevicePositionPathParams pathParams;
    public BatchGetDevicePositionRequest withPathParams(BatchGetDevicePositionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchGetDevicePositionHeaders headers;
    public BatchGetDevicePositionRequest withHeaders(BatchGetDevicePositionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchGetDevicePositionRequestBody request;
    public BatchGetDevicePositionRequest withRequest(BatchGetDevicePositionRequestBody request) {
        this.request = request;
        return this;
    }
}