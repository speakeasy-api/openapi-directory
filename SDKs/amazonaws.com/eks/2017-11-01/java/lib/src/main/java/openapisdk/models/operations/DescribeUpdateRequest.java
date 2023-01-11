package openapisdk.models.operations;



public class DescribeUpdateRequest {
    public DescribeUpdatePathParams pathParams;
    public DescribeUpdateRequest withPathParams(DescribeUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeUpdateQueryParams queryParams;
    public DescribeUpdateRequest withQueryParams(DescribeUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeUpdateHeaders headers;
    public DescribeUpdateRequest withHeaders(DescribeUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
}