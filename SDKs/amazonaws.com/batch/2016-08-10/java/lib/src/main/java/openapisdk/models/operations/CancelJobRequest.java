package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelJobRequest {
    public CancelJobHeaders headers;
    public CancelJobRequest withHeaders(CancelJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CancelJobRequestBody request;
    public CancelJobRequest withRequest(CancelJobRequestBody request) {
        this.request = request;
        return this;
    }
}