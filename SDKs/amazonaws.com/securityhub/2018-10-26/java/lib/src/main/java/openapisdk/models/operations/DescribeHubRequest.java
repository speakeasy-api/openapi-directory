package openapisdk.models.operations;



public class DescribeHubRequest {
    public DescribeHubQueryParams queryParams;
    public DescribeHubRequest withQueryParams(DescribeHubQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeHubHeaders headers;
    public DescribeHubRequest withHeaders(DescribeHubHeaders headers) {
        this.headers = headers;
        return this;
    }
}