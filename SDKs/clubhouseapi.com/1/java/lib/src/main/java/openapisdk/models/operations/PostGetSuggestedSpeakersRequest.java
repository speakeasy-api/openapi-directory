package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetSuggestedSpeakersRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostGetSuggestedSpeakersRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}