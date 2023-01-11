package openapisdk.models.operations;



public class ListCertificatesRequest {
    public ListCertificatesQueryParams queryParams;
    public ListCertificatesRequest withQueryParams(ListCertificatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCertificatesHeaders headers;
    public ListCertificatesRequest withHeaders(ListCertificatesHeaders headers) {
        this.headers = headers;
        return this;
    }
}