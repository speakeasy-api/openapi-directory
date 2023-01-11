package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamingUrlRequest {
    public CreateStreamingUrlHeaders headers;
    public CreateStreamingUrlRequest withHeaders(CreateStreamingUrlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateStreamingUrlRequest request;
    public CreateStreamingUrlRequest withRequest(openapisdk.models.shared.CreateStreamingUrlRequest request) {
        this.request = request;
        return this;
    }
}