package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTrustRequest {
    public DeleteTrustHeaders headers;
    public DeleteTrustRequest withHeaders(DeleteTrustHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteTrustRequest request;
    public DeleteTrustRequest withRequest(openapisdk.models.shared.DeleteTrustRequest request) {
        this.request = request;
        return this;
    }
}