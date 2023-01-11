package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsAddOrUpdateMembershipForUserInOrgRequest {
    public TeamsAddOrUpdateMembershipForUserInOrgPathParams pathParams;
    public TeamsAddOrUpdateMembershipForUserInOrgRequest withPathParams(TeamsAddOrUpdateMembershipForUserInOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsAddOrUpdateMembershipForUserInOrgRequestBody request;
    public TeamsAddOrUpdateMembershipForUserInOrgRequest withRequest(TeamsAddOrUpdateMembershipForUserInOrgRequestBody request) {
        this.request = request;
        return this;
    }
}