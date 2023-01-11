package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeauthorizeConnectionRequest {
    public DeauthorizeConnectionHeaders headers;
    public DeauthorizeConnectionRequest withHeaders(DeauthorizeConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeauthorizeConnectionRequest request;
    public DeauthorizeConnectionRequest withRequest(openapisdk.models.shared.DeauthorizeConnectionRequest request) {
        this.request = request;
        return this;
    }
}