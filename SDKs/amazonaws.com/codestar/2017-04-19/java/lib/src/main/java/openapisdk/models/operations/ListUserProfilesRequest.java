package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUserProfilesRequest {
    public ListUserProfilesHeaders headers;
    public ListUserProfilesRequest withHeaders(ListUserProfilesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListUserProfilesRequest request;
    public ListUserProfilesRequest withRequest(openapisdk.models.shared.ListUserProfilesRequest request) {
        this.request = request;
        return this;
    }
}