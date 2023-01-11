package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCodeReviewRequest {
    public CreateCodeReviewHeaders headers;
    public CreateCodeReviewRequest withHeaders(CreateCodeReviewHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateCodeReviewRequestBody request;
    public CreateCodeReviewRequest withRequest(CreateCodeReviewRequestBody request) {
        this.request = request;
        return this;
    }
}