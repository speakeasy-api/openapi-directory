package openapisdk.models.operations;



public class GetDescribeDbInstancesRequest {
    public GetDescribeDbInstancesQueryParams queryParams;
    public GetDescribeDbInstancesRequest withQueryParams(GetDescribeDbInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDescribeDbInstancesHeaders headers;
    public GetDescribeDbInstancesRequest withHeaders(GetDescribeDbInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
}