package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePlaybackKeyPairRequest {
    public DeletePlaybackKeyPairHeaders headers;
    public DeletePlaybackKeyPairRequest withHeaders(DeletePlaybackKeyPairHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeletePlaybackKeyPairRequestBody request;
    public DeletePlaybackKeyPairRequest withRequest(DeletePlaybackKeyPairRequestBody request) {
        this.request = request;
        return this;
    }
}