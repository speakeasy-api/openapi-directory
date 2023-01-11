package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReEncryptRequest {
    public ReEncryptHeaders headers;
    public ReEncryptRequest withHeaders(ReEncryptHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReEncryptRequest request;
    public ReEncryptRequest withRequest(openapisdk.models.shared.ReEncryptRequest request) {
        this.request = request;
        return this;
    }
}