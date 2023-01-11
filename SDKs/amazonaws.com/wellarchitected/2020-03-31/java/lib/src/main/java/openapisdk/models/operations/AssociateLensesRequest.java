package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateLensesRequest {
    public AssociateLensesPathParams pathParams;
    public AssociateLensesRequest withPathParams(AssociateLensesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AssociateLensesHeaders headers;
    public AssociateLensesRequest withHeaders(AssociateLensesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssociateLensesRequestBody request;
    public AssociateLensesRequest withRequest(AssociateLensesRequestBody request) {
        this.request = request;
        return this;
    }
}