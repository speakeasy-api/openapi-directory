package openapisdk.models.operations;



public class DetachSecurityProfileRequest {
    public DetachSecurityProfilePathParams pathParams;
    public DetachSecurityProfileRequest withPathParams(DetachSecurityProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DetachSecurityProfileQueryParams queryParams;
    public DetachSecurityProfileRequest withQueryParams(DetachSecurityProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DetachSecurityProfileHeaders headers;
    public DetachSecurityProfileRequest withHeaders(DetachSecurityProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
}