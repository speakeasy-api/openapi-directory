package openapisdk.models.operations;



public class DescribeProductsRequest {
    public DescribeProductsQueryParams queryParams;
    public DescribeProductsRequest withQueryParams(DescribeProductsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeProductsHeaders headers;
    public DescribeProductsRequest withHeaders(DescribeProductsHeaders headers) {
        this.headers = headers;
        return this;
    }
}