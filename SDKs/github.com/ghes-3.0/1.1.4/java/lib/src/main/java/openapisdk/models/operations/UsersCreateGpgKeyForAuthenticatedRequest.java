package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersCreateGpgKeyForAuthenticatedRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UsersCreateGpgKeyForAuthenticatedRequestBody request;
    public UsersCreateGpgKeyForAuthenticatedRequest withRequest(UsersCreateGpgKeyForAuthenticatedRequestBody request) {
        this.request = request;
        return this;
    }
}