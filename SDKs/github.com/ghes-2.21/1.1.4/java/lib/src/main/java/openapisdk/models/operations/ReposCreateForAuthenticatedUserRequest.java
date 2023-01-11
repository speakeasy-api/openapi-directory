package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateForAuthenticatedUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposCreateForAuthenticatedUserRequestBody request;
    public ReposCreateForAuthenticatedUserRequest withRequest(ReposCreateForAuthenticatedUserRequestBody request) {
        this.request = request;
        return this;
    }
}