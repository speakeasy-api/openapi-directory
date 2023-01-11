package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBgpPeerRequest {
    public CreateBgpPeerHeaders headers;
    public CreateBgpPeerRequest withHeaders(CreateBgpPeerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateBgpPeerRequest request;
    public CreateBgpPeerRequest withRequest(openapisdk.models.shared.CreateBgpPeerRequest request) {
        this.request = request;
        return this;
    }
}