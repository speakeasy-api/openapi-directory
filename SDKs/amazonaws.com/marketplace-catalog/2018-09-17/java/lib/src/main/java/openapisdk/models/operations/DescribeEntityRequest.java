package openapisdk.models.operations;



public class DescribeEntityRequest {
    public DescribeEntityQueryParams queryParams;
    public DescribeEntityRequest withQueryParams(DescribeEntityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeEntityHeaders headers;
    public DescribeEntityRequest withHeaders(DescribeEntityHeaders headers) {
        this.headers = headers;
        return this;
    }
}