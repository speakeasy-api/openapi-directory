package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMembersRequest {
    public DeleteMembersHeaders headers;
    public DeleteMembersRequest withHeaders(DeleteMembersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteMembersRequestBody request;
    public DeleteMembersRequest withRequest(DeleteMembersRequestBody request) {
        this.request = request;
        return this;
    }
}