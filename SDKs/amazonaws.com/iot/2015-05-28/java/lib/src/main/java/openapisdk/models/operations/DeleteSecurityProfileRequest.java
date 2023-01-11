package openapisdk.models.operations;



public class DeleteSecurityProfileRequest {
    public DeleteSecurityProfilePathParams pathParams;
    public DeleteSecurityProfileRequest withPathParams(DeleteSecurityProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSecurityProfileQueryParams queryParams;
    public DeleteSecurityProfileRequest withQueryParams(DeleteSecurityProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteSecurityProfileHeaders headers;
    public DeleteSecurityProfileRequest withHeaders(DeleteSecurityProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
}