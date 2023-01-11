package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersAddEmailForAuthenticatedRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UsersAddEmailForAuthenticatedRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}