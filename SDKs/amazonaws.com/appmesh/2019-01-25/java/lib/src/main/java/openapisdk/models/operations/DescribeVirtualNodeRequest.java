package openapisdk.models.operations;



public class DescribeVirtualNodeRequest {
    public DescribeVirtualNodePathParams pathParams;
    public DescribeVirtualNodeRequest withPathParams(DescribeVirtualNodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeVirtualNodeQueryParams queryParams;
    public DescribeVirtualNodeRequest withQueryParams(DescribeVirtualNodeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeVirtualNodeHeaders headers;
    public DescribeVirtualNodeRequest withHeaders(DescribeVirtualNodeHeaders headers) {
        this.headers = headers;
        return this;
    }
}