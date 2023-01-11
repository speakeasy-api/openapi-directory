package openapisdk.models.operations;



public class GetDescribeReservedDbInstancesRequest {
    public GetDescribeReservedDbInstancesQueryParams queryParams;
    public GetDescribeReservedDbInstancesRequest withQueryParams(GetDescribeReservedDbInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDescribeReservedDbInstancesHeaders headers;
    public GetDescribeReservedDbInstancesRequest withHeaders(GetDescribeReservedDbInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
}