package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetTopicRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostGetTopicRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}