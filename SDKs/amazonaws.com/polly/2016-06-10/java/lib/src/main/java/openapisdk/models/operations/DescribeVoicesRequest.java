package openapisdk.models.operations;



public class DescribeVoicesRequest {
    public DescribeVoicesQueryParams queryParams;
    public DescribeVoicesRequest withQueryParams(DescribeVoicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeVoicesHeaders headers;
    public DescribeVoicesRequest withHeaders(DescribeVoicesHeaders headers) {
        this.headers = headers;
        return this;
    }
}