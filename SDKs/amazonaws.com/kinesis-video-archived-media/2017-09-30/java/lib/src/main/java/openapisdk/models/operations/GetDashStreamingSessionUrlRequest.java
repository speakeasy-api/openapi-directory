package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDashStreamingSessionUrlRequest {
    public GetDashStreamingSessionUrlHeaders headers;
    public GetDashStreamingSessionUrlRequest withHeaders(GetDashStreamingSessionUrlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetDashStreamingSessionUrlRequestBody request;
    public GetDashStreamingSessionUrlRequest withRequest(GetDashStreamingSessionUrlRequestBody request) {
        this.request = request;
        return this;
    }
}