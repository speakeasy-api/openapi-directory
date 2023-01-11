package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContentproSimilarTextRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostContentproSimilarTextRequestBody request;
    public PostContentproSimilarTextRequest withRequest(PostContentproSimilarTextRequestBody request) {
        this.request = request;
        return this;
    }
}