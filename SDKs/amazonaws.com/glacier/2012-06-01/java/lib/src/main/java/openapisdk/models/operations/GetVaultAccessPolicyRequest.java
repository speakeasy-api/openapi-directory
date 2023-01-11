package openapisdk.models.operations;



public class GetVaultAccessPolicyRequest {
    public GetVaultAccessPolicyPathParams pathParams;
    public GetVaultAccessPolicyRequest withPathParams(GetVaultAccessPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVaultAccessPolicyHeaders headers;
    public GetVaultAccessPolicyRequest withHeaders(GetVaultAccessPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
}