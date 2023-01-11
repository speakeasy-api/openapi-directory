package openapisdk.models.operations;



public class ListCertificatesByCaRequest {
    public ListCertificatesByCaPathParams pathParams;
    public ListCertificatesByCaRequest withPathParams(ListCertificatesByCaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListCertificatesByCaQueryParams queryParams;
    public ListCertificatesByCaRequest withQueryParams(ListCertificatesByCaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCertificatesByCaHeaders headers;
    public ListCertificatesByCaRequest withHeaders(ListCertificatesByCaHeaders headers) {
        this.headers = headers;
        return this;
    }
}