package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersDeleteEmailForAuthenticatedRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UsersDeleteEmailForAuthenticatedRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}