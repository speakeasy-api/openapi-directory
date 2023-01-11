package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContactChannelRequest {
    public GetContactChannelHeaders headers;
    public GetContactChannelRequest withHeaders(GetContactChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetContactChannelRequest request;
    public GetContactChannelRequest withRequest(openapisdk.models.shared.GetContactChannelRequest request) {
        this.request = request;
        return this;
    }
}