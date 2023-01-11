package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMessagesRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostMessagesRequestBody request;
    public PostMessagesRequest withRequest(PostMessagesRequestBody request) {
        this.request = request;
        return this;
    }
}