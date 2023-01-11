package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFollowRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostFollowRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}