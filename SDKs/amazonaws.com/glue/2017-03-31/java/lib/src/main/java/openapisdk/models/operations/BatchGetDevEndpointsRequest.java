package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetDevEndpointsRequest {
    public BatchGetDevEndpointsHeaders headers;
    public BatchGetDevEndpointsRequest withHeaders(BatchGetDevEndpointsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetDevEndpointsRequest request;
    public BatchGetDevEndpointsRequest withRequest(openapisdk.models.shared.BatchGetDevEndpointsRequest request) {
        this.request = request;
        return this;
    }
}