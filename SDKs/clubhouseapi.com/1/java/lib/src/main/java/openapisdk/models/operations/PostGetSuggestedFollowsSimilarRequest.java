package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetSuggestedFollowsSimilarRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostGetSuggestedFollowsSimilarRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}