package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterResourceRequest {
    public DeregisterResourceHeaders headers;
    public DeregisterResourceRequest withHeaders(DeregisterResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterResourceRequest request;
    public DeregisterResourceRequest withRequest(openapisdk.models.shared.DeregisterResourceRequest request) {
        this.request = request;
        return this;
    }
}