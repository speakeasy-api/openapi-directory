package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePolicyVersionRequest {
    public CreatePolicyVersionPathParams pathParams;
    public CreatePolicyVersionRequest withPathParams(CreatePolicyVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreatePolicyVersionQueryParams queryParams;
    public CreatePolicyVersionRequest withQueryParams(CreatePolicyVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreatePolicyVersionHeaders headers;
    public CreatePolicyVersionRequest withHeaders(CreatePolicyVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreatePolicyVersionRequestBody request;
    public CreatePolicyVersionRequest withRequest(CreatePolicyVersionRequestBody request) {
        this.request = request;
        return this;
    }
}