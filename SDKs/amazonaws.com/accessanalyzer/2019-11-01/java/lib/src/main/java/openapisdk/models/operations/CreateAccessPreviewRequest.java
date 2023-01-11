package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccessPreviewRequest {
    public CreateAccessPreviewHeaders headers;
    public CreateAccessPreviewRequest withHeaders(CreateAccessPreviewHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAccessPreviewRequestBody request;
    public CreateAccessPreviewRequest withRequest(CreateAccessPreviewRequestBody request) {
        this.request = request;
        return this;
    }
}