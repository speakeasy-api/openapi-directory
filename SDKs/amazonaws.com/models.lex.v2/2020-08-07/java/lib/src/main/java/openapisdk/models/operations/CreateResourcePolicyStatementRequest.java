package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateResourcePolicyStatementRequest {
    public CreateResourcePolicyStatementPathParams pathParams;
    public CreateResourcePolicyStatementRequest withPathParams(CreateResourcePolicyStatementPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateResourcePolicyStatementQueryParams queryParams;
    public CreateResourcePolicyStatementRequest withQueryParams(CreateResourcePolicyStatementQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateResourcePolicyStatementHeaders headers;
    public CreateResourcePolicyStatementRequest withHeaders(CreateResourcePolicyStatementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateResourcePolicyStatementRequestBody request;
    public CreateResourcePolicyStatementRequest withRequest(CreateResourcePolicyStatementRequestBody request) {
        this.request = request;
        return this;
    }
}