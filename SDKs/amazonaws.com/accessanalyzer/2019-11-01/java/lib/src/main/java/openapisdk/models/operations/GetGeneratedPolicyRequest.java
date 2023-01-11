package openapisdk.models.operations;



public class GetGeneratedPolicyRequest {
    public GetGeneratedPolicyPathParams pathParams;
    public GetGeneratedPolicyRequest withPathParams(GetGeneratedPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetGeneratedPolicyQueryParams queryParams;
    public GetGeneratedPolicyRequest withQueryParams(GetGeneratedPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetGeneratedPolicyHeaders headers;
    public GetGeneratedPolicyRequest withHeaders(GetGeneratedPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
}