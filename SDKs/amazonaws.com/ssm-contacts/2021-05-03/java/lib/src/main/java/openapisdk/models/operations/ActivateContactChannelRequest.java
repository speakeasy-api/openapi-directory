package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivateContactChannelRequest {
    public ActivateContactChannelHeaders headers;
    public ActivateContactChannelRequest withHeaders(ActivateContactChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ActivateContactChannelRequest request;
    public ActivateContactChannelRequest withRequest(openapisdk.models.shared.ActivateContactChannelRequest request) {
        this.request = request;
        return this;
    }
}