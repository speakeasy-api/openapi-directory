package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteContactChannelRequest {
    public DeleteContactChannelHeaders headers;
    public DeleteContactChannelRequest withHeaders(DeleteContactChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteContactChannelRequest request;
    public DeleteContactChannelRequest withRequest(openapisdk.models.shared.DeleteContactChannelRequest request) {
        this.request = request;
        return this;
    }
}