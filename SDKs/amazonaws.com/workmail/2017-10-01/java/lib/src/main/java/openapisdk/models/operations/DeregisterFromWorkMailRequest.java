package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterFromWorkMailRequest {
    public DeregisterFromWorkMailHeaders headers;
    public DeregisterFromWorkMailRequest withHeaders(DeregisterFromWorkMailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterFromWorkMailRequest request;
    public DeregisterFromWorkMailRequest withRequest(openapisdk.models.shared.DeregisterFromWorkMailRequest request) {
        this.request = request;
        return this;
    }
}