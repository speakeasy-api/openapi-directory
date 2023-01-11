package openapisdk.models.operations;



public class GetDescribeInstancesHealthRequest {
    public GetDescribeInstancesHealthQueryParams queryParams;
    public GetDescribeInstancesHealthRequest withQueryParams(GetDescribeInstancesHealthQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDescribeInstancesHealthHeaders headers;
    public GetDescribeInstancesHealthRequest withHeaders(GetDescribeInstancesHealthHeaders headers) {
        this.headers = headers;
        return this;
    }
}