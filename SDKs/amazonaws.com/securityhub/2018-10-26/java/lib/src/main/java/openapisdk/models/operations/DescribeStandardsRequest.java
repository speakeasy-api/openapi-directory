package openapisdk.models.operations;



public class DescribeStandardsRequest {
    public DescribeStandardsQueryParams queryParams;
    public DescribeStandardsRequest withQueryParams(DescribeStandardsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeStandardsHeaders headers;
    public DescribeStandardsRequest withHeaders(DescribeStandardsHeaders headers) {
        this.headers = headers;
        return this;
    }
}