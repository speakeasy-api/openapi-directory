package openapisdk.models.operations;



public class DescribeChangeSetRequest {
    public DescribeChangeSetQueryParams queryParams;
    public DescribeChangeSetRequest withQueryParams(DescribeChangeSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeChangeSetHeaders headers;
    public DescribeChangeSetRequest withHeaders(DescribeChangeSetHeaders headers) {
        this.headers = headers;
        return this;
    }
}