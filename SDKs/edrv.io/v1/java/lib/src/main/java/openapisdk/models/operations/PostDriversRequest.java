package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDriversRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostDriversRequestBody request;
    public PostDriversRequest withRequest(PostDriversRequestBody request) {
        this.request = request;
        return this;
    }
}