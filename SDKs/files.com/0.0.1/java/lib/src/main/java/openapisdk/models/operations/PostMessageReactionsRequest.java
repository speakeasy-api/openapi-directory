package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMessageReactionsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostMessageReactionsRequestBody request;
    public PostMessageReactionsRequest withRequest(PostMessageReactionsRequestBody request) {
        this.request = request;
        return this;
    }
}