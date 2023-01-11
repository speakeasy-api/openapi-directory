package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetOnlineFriendsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostGetOnlineFriendsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}