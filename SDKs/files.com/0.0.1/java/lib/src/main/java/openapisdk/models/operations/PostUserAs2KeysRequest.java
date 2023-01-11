package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUserAs2KeysRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostUserAs2KeysRequestBody request;
    public PostUserAs2KeysRequest withRequest(PostUserAs2KeysRequestBody request) {
        this.request = request;
        return this;
    }
}