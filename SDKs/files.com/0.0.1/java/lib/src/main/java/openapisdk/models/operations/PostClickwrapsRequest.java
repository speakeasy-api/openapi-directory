package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostClickwrapsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostClickwrapsRequestBody request;
    public PostClickwrapsRequest withRequest(PostClickwrapsRequestBody request) {
        this.request = request;
        return this;
    }
}