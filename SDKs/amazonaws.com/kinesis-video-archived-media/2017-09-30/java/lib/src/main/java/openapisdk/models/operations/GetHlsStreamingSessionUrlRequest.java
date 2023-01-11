package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHlsStreamingSessionUrlRequest {
    public GetHlsStreamingSessionUrlHeaders headers;
    public GetHlsStreamingSessionUrlRequest withHeaders(GetHlsStreamingSessionUrlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetHlsStreamingSessionUrlRequestBody request;
    public GetHlsStreamingSessionUrlRequest withRequest(GetHlsStreamingSessionUrlRequestBody request) {
        this.request = request;
        return this;
    }
}