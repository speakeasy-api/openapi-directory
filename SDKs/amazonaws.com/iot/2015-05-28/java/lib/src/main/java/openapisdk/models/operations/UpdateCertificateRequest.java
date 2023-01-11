package openapisdk.models.operations;



public class UpdateCertificateRequest {
    public UpdateCertificatePathParams pathParams;
    public UpdateCertificateRequest withPathParams(UpdateCertificatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateCertificateQueryParams queryParams;
    public UpdateCertificateRequest withQueryParams(UpdateCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdateCertificateHeaders headers;
    public UpdateCertificateRequest withHeaders(UpdateCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
}