package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersUpdateAuthenticatedRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UsersUpdateAuthenticatedRequestBody request;
    public UsersUpdateAuthenticatedRequest withRequest(UsersUpdateAuthenticatedRequestBody request) {
        this.request = request;
        return this;
    }
}