package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetClubsForTopicRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostGetClubsForTopicRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}