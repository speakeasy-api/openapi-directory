package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateImageBuilderStreamingUrlRequest {
    public CreateImageBuilderStreamingUrlHeaders headers;
    public CreateImageBuilderStreamingUrlRequest withHeaders(CreateImageBuilderStreamingUrlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateImageBuilderStreamingUrlRequest request;
    public CreateImageBuilderStreamingUrlRequest withRequest(openapisdk.models.shared.CreateImageBuilderStreamingUrlRequest request) {
        this.request = request;
        return this;
    }
}