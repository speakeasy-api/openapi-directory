package openapisdk.models.operations;



public class GetDomainNamesRequest {
    public GetDomainNamesQueryParams queryParams;
    public GetDomainNamesRequest withQueryParams(GetDomainNamesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDomainNamesHeaders headers;
    public GetDomainNamesRequest withHeaders(GetDomainNamesHeaders headers) {
        this.headers = headers;
        return this;
    }
}