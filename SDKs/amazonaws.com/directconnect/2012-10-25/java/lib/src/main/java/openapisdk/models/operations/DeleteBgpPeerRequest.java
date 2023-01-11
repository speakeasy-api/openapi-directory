package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBgpPeerRequest {
    public DeleteBgpPeerHeaders headers;
    public DeleteBgpPeerRequest withHeaders(DeleteBgpPeerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteBgpPeerRequest request;
    public DeleteBgpPeerRequest withRequest(openapisdk.models.shared.DeleteBgpPeerRequest request) {
        this.request = request;
        return this;
    }
}