package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBehaviorsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostBehaviorsRequestBody request;
    public PostBehaviorsRequest withRequest(PostBehaviorsRequestBody request) {
        this.request = request;
        return this;
    }
}