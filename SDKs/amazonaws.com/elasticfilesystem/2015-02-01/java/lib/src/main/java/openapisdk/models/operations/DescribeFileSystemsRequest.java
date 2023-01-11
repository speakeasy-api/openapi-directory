package openapisdk.models.operations;



public class DescribeFileSystemsRequest {
    public DescribeFileSystemsQueryParams queryParams;
    public DescribeFileSystemsRequest withQueryParams(DescribeFileSystemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeFileSystemsHeaders headers;
    public DescribeFileSystemsRequest withHeaders(DescribeFileSystemsHeaders headers) {
        this.headers = headers;
        return this;
    }
}