package openapisdk.models.operations;



public class GetDescribeDomainsRequest {
    public GetDescribeDomainsQueryParams queryParams;
    public GetDescribeDomainsRequest withQueryParams(GetDescribeDomainsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDescribeDomainsHeaders headers;
    public GetDescribeDomainsRequest withHeaders(GetDescribeDomainsHeaders headers) {
        this.headers = headers;
        return this;
    }
}