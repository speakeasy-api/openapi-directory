package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsStartForAuthenticatedUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MigrationsStartForAuthenticatedUserRequestBody request;
    public MigrationsStartForAuthenticatedUserRequest withRequest(MigrationsStartForAuthenticatedUserRequestBody request) {
        this.request = request;
        return this;
    }
}