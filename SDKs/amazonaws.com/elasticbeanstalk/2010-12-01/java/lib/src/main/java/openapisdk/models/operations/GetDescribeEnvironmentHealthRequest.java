package openapisdk.models.operations;



public class GetDescribeEnvironmentHealthRequest {
    public GetDescribeEnvironmentHealthQueryParams queryParams;
    public GetDescribeEnvironmentHealthRequest withQueryParams(GetDescribeEnvironmentHealthQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDescribeEnvironmentHealthHeaders headers;
    public GetDescribeEnvironmentHealthRequest withHeaders(GetDescribeEnvironmentHealthHeaders headers) {
        this.headers = headers;
        return this;
    }
}