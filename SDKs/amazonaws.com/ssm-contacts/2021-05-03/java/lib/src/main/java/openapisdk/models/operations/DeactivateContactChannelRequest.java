package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeactivateContactChannelRequest {
    public DeactivateContactChannelHeaders headers;
    public DeactivateContactChannelRequest withHeaders(DeactivateContactChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeactivateContactChannelRequest request;
    public DeactivateContactChannelRequest withRequest(openapisdk.models.shared.DeactivateContactChannelRequest request) {
        this.request = request;
        return this;
    }
}