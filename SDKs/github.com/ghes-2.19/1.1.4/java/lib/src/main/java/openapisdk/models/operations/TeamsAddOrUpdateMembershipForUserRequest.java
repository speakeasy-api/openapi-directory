package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsAddOrUpdateMembershipForUserRequest {
    public TeamsAddOrUpdateMembershipForUserPathParams pathParams;
    public TeamsAddOrUpdateMembershipForUserRequest withPathParams(TeamsAddOrUpdateMembershipForUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsAddOrUpdateMembershipForUserRequestBody request;
    public TeamsAddOrUpdateMembershipForUserRequest withRequest(TeamsAddOrUpdateMembershipForUserRequestBody request) {
        this.request = request;
        return this;
    }
}