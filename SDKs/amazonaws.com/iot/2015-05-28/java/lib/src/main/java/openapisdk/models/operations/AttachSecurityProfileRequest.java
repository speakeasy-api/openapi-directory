package openapisdk.models.operations;



public class AttachSecurityProfileRequest {
    public AttachSecurityProfilePathParams pathParams;
    public AttachSecurityProfileRequest withPathParams(AttachSecurityProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AttachSecurityProfileQueryParams queryParams;
    public AttachSecurityProfileRequest withQueryParams(AttachSecurityProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AttachSecurityProfileHeaders headers;
    public AttachSecurityProfileRequest withHeaders(AttachSecurityProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
}