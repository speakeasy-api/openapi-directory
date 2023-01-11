package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApplicationPresignedUrlRequest {
    public CreateApplicationPresignedUrlHeaders headers;
    public CreateApplicationPresignedUrlRequest withHeaders(CreateApplicationPresignedUrlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateApplicationPresignedUrlRequest request;
    public CreateApplicationPresignedUrlRequest withRequest(openapisdk.models.shared.CreateApplicationPresignedUrlRequest request) {
        this.request = request;
        return this;
    }
}