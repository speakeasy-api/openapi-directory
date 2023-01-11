package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveMembersForProjectRequest {
    public RemoveMembersForProjectPathParams pathParams;
    public RemoveMembersForProjectRequest withPathParams(RemoveMembersForProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveMembersForProjectQueryParams queryParams;
    public RemoveMembersForProjectRequest withQueryParams(RemoveMembersForProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveMembersForProjectRequestBody request;
    public RemoveMembersForProjectRequest withRequest(RemoveMembersForProjectRequestBody request) {
        this.request = request;
        return this;
    }
}