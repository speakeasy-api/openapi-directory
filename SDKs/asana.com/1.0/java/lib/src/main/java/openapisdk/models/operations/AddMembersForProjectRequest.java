package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddMembersForProjectRequest {
    public AddMembersForProjectPathParams pathParams;
    public AddMembersForProjectRequest withPathParams(AddMembersForProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddMembersForProjectQueryParams queryParams;
    public AddMembersForProjectRequest withQueryParams(AddMembersForProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddMembersForProjectRequestBody request;
    public AddMembersForProjectRequest withRequest(AddMembersForProjectRequestBody request) {
        this.request = request;
        return this;
    }
}