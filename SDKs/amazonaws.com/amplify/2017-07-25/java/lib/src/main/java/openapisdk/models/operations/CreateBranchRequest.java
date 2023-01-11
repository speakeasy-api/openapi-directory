package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBranchRequest {
    public CreateBranchPathParams pathParams;
    public CreateBranchRequest withPathParams(CreateBranchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateBranchHeaders headers;
    public CreateBranchRequest withHeaders(CreateBranchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateBranchRequestBody request;
    public CreateBranchRequest withRequest(CreateBranchRequestBody request) {
        this.request = request;
        return this;
    }
}