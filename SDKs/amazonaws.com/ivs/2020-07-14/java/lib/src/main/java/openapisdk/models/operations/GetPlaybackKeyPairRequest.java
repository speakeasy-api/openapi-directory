package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlaybackKeyPairRequest {
    public GetPlaybackKeyPairHeaders headers;
    public GetPlaybackKeyPairRequest withHeaders(GetPlaybackKeyPairHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetPlaybackKeyPairRequestBody request;
    public GetPlaybackKeyPairRequest withRequest(GetPlaybackKeyPairRequestBody request) {
        this.request = request;
        return this;
    }
}