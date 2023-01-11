package openapisdk.models.operations;



public class GetListServerCertificatesRequest {
    public GetListServerCertificatesQueryParams queryParams;
    public GetListServerCertificatesRequest withQueryParams(GetListServerCertificatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListServerCertificatesHeaders headers;
    public GetListServerCertificatesRequest withHeaders(GetListServerCertificatesHeaders headers) {
        this.headers = headers;
        return this;
    }
}