package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScimProvisionAndInviteUserRequest {
    public ScimProvisionAndInviteUserPathParams pathParams;
    public ScimProvisionAndInviteUserRequest withPathParams(ScimProvisionAndInviteUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ScimProvisionAndInviteUserRequestBody request;
    public ScimProvisionAndInviteUserRequest withRequest(ScimProvisionAndInviteUserRequestBody request) {
        this.request = request;
        return this;
    }
}