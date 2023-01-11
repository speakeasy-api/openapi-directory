package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersSetPrimaryEmailVisibilityForAuthenticatedRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody request;
    public UsersSetPrimaryEmailVisibilityForAuthenticatedRequest withRequest(UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody request) {
        this.request = request;
        return this;
    }
}