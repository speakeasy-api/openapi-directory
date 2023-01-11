package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsSetMembershipForUserRequest {
    public OrgsSetMembershipForUserPathParams pathParams;
    public OrgsSetMembershipForUserRequest withPathParams(OrgsSetMembershipForUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public OrgsSetMembershipForUserRequestBody request;
    public OrgsSetMembershipForUserRequest withRequest(OrgsSetMembershipForUserRequestBody request) {
        this.request = request;
        return this;
    }
}