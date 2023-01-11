package openapisdk.models.operations;



public class DescribeTagsRequest {
    public DescribeTagsPathParams pathParams;
    public DescribeTagsRequest withPathParams(DescribeTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeTagsQueryParams queryParams;
    public DescribeTagsRequest withQueryParams(DescribeTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeTagsHeaders headers;
    public DescribeTagsRequest withHeaders(DescribeTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
}