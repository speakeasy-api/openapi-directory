package openapisdk.models.operations;



public class DeleteCertificateRequest {
    public DeleteCertificatePathParams pathParams;
    public DeleteCertificateRequest withPathParams(DeleteCertificatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCertificateQueryParams queryParams;
    public DeleteCertificateRequest withQueryParams(DeleteCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteCertificateHeaders headers;
    public DeleteCertificateRequest withHeaders(DeleteCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
}