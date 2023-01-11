package openapisdk.models.operations;



public class GetDescribeDbParametersRequest {
    public GetDescribeDbParametersQueryParams queryParams;
    public GetDescribeDbParametersRequest withQueryParams(GetDescribeDbParametersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDescribeDbParametersHeaders headers;
    public GetDescribeDbParametersRequest withHeaders(GetDescribeDbParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
}