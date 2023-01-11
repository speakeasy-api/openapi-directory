package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateUsernameRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostUpdateUsernameRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}