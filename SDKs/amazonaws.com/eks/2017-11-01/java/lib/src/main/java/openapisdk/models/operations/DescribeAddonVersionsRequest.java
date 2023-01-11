package openapisdk.models.operations;



public class DescribeAddonVersionsRequest {
    public DescribeAddonVersionsQueryParams queryParams;
    public DescribeAddonVersionsRequest withQueryParams(DescribeAddonVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeAddonVersionsHeaders headers;
    public DescribeAddonVersionsRequest withHeaders(DescribeAddonVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}