package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersCreatePublicSshKeyForAuthenticatedRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UsersCreatePublicSshKeyForAuthenticatedRequestBody request;
    public UsersCreatePublicSshKeyForAuthenticatedRequest withRequest(UsersCreatePublicSshKeyForAuthenticatedRequestBody request) {
        this.request = request;
        return this;
    }
}