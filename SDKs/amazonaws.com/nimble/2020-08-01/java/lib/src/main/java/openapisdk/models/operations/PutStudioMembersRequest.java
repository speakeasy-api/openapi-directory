package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutStudioMembersRequest {
    public PutStudioMembersPathParams pathParams;
    public PutStudioMembersRequest withPathParams(PutStudioMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutStudioMembersHeaders headers;
    public PutStudioMembersRequest withHeaders(PutStudioMembersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutStudioMembersRequestBody request;
    public PutStudioMembersRequest withRequest(PutStudioMembersRequestBody request) {
        this.request = request;
        return this;
    }
}