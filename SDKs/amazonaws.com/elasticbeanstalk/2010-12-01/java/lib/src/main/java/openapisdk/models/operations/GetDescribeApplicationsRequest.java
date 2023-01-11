package openapisdk.models.operations;



public class GetDescribeApplicationsRequest {
    public GetDescribeApplicationsQueryParams queryParams;
    public GetDescribeApplicationsRequest withQueryParams(GetDescribeApplicationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDescribeApplicationsHeaders headers;
    public GetDescribeApplicationsRequest withHeaders(GetDescribeApplicationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}