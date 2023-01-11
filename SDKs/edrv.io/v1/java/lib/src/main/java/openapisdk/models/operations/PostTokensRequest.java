package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTokensRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostTokensRequestBody request;
    public PostTokensRequest withRequest(PostTokensRequestBody request) {
        this.request = request;
        return this;
    }
}