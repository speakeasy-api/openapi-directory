package openapisdk.models.operations;



public class GetPolicyVersionRequest {
    public GetPolicyVersionPathParams pathParams;
    public GetPolicyVersionRequest withPathParams(GetPolicyVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPolicyVersionHeaders headers;
    public GetPolicyVersionRequest withHeaders(GetPolicyVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
}