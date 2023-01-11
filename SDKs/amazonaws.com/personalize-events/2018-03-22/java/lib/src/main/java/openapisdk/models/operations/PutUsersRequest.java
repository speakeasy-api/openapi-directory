package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUsersRequest {
    public PutUsersHeaders headers;
    public PutUsersRequest withHeaders(PutUsersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutUsersRequestBody request;
    public PutUsersRequest withRequest(PutUsersRequestBody request) {
        this.request = request;
        return this;
    }
}