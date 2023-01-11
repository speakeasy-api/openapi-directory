package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetSuggestedClubInvitesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostGetSuggestedClubInvitesRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}