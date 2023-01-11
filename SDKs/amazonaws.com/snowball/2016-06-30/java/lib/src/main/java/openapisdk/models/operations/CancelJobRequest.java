package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelJobRequest {
    public CancelJobHeaders headers;
    public CancelJobRequest withHeaders(CancelJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelJobRequest request;
    public CancelJobRequest withRequest(openapisdk.models.shared.CancelJobRequest request) {
        this.request = request;
        return this;
    }
}