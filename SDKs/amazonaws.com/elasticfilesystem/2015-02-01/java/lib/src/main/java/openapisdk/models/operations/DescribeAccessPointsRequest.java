package openapisdk.models.operations;



public class DescribeAccessPointsRequest {
    public DescribeAccessPointsQueryParams queryParams;
    public DescribeAccessPointsRequest withQueryParams(DescribeAccessPointsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeAccessPointsHeaders headers;
    public DescribeAccessPointsRequest withHeaders(DescribeAccessPointsHeaders headers) {
        this.headers = headers;
        return this;
    }
}