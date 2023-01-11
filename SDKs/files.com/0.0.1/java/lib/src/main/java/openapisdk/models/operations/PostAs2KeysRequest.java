package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAs2KeysRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostAs2KeysRequestBody request;
    public PostAs2KeysRequest withRequest(PostAs2KeysRequestBody request) {
        this.request = request;
        return this;
    }
}