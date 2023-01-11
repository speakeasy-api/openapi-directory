package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGameSessionLogUrlRequest {
    public GetGameSessionLogUrlHeaders headers;
    public GetGameSessionLogUrlRequest withHeaders(GetGameSessionLogUrlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetGameSessionLogUrlInput request;
    public GetGameSessionLogUrlRequest withRequest(openapisdk.models.shared.GetGameSessionLogUrlInput request) {
        this.request = request;
        return this;
    }
}