package openapisdk.models.operations;



public class GetDescribeApplicationVersionsRequest {
    public GetDescribeApplicationVersionsQueryParams queryParams;
    public GetDescribeApplicationVersionsRequest withQueryParams(GetDescribeApplicationVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDescribeApplicationVersionsHeaders headers;
    public GetDescribeApplicationVersionsRequest withHeaders(GetDescribeApplicationVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}