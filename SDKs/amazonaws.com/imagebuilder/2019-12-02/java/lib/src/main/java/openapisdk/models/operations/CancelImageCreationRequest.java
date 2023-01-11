package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelImageCreationRequest {
    public CancelImageCreationHeaders headers;
    public CancelImageCreationRequest withHeaders(CancelImageCreationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CancelImageCreationRequestBody request;
    public CancelImageCreationRequest withRequest(CancelImageCreationRequestBody request) {
        this.request = request;
        return this;
    }
}