package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMembersRequest {
    public GetMembersHeaders headers;
    public GetMembersRequest withHeaders(GetMembersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetMembersRequestBody request;
    public GetMembersRequest withRequest(GetMembersRequestBody request) {
        this.request = request;
        return this;
    }
}