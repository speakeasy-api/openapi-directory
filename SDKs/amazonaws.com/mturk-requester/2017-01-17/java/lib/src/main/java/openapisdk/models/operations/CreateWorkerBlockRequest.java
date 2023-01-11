package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkerBlockRequest {
    public CreateWorkerBlockHeaders headers;
    public CreateWorkerBlockRequest withHeaders(CreateWorkerBlockHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateWorkerBlockRequest request;
    public CreateWorkerBlockRequest withRequest(openapisdk.models.shared.CreateWorkerBlockRequest request) {
        this.request = request;
        return this;
    }
}