package openapisdk.models.operations;



public class DescribeProjectRequest {
    public DescribeProjectQueryParams queryParams;
    public DescribeProjectRequest withQueryParams(DescribeProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeProjectHeaders headers;
    public DescribeProjectRequest withHeaders(DescribeProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
}