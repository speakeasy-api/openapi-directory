package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DecryptRequest {
    public DecryptHeaders headers;
    public DecryptRequest withHeaders(DecryptHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DecryptRequest request;
    public DecryptRequest withRequest(openapisdk.models.shared.DecryptRequest request) {
        this.request = request;
        return this;
    }
}