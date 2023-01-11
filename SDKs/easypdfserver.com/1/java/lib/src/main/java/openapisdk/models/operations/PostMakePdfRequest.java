package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMakePdfRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostMakePdfRequestBody request;
    public PostMakePdfRequest withRequest(PostMakePdfRequestBody request) {
        this.request = request;
        return this;
    }
}