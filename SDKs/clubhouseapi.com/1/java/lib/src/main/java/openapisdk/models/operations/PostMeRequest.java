package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMeRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostMeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}