package openapisdk.models.operations;



public class GetPolicyRequest {
    public GetPolicyPathParams pathParams;
    public GetPolicyRequest withPathParams(GetPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPolicyHeaders headers;
    public GetPolicyRequest withHeaders(GetPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
}