package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSessionsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostSessionsRequestBody request;
    public PostSessionsRequest withRequest(PostSessionsRequestBody request) {
        this.request = request;
        return this;
    }
}