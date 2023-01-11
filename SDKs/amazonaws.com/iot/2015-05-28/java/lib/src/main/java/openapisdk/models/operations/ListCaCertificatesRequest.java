package openapisdk.models.operations;



public class ListCaCertificatesRequest {
    public ListCaCertificatesQueryParams queryParams;
    public ListCaCertificatesRequest withQueryParams(ListCaCertificatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCaCertificatesHeaders headers;
    public ListCaCertificatesRequest withHeaders(ListCaCertificatesHeaders headers) {
        this.headers = headers;
        return this;
    }
}