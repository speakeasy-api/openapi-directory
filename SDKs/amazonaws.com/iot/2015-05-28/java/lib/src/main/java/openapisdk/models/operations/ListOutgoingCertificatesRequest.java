package openapisdk.models.operations;



public class ListOutgoingCertificatesRequest {
    public ListOutgoingCertificatesQueryParams queryParams;
    public ListOutgoingCertificatesRequest withQueryParams(ListOutgoingCertificatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListOutgoingCertificatesHeaders headers;
    public ListOutgoingCertificatesRequest withHeaders(ListOutgoingCertificatesHeaders headers) {
        this.headers = headers;
        return this;
    }
}