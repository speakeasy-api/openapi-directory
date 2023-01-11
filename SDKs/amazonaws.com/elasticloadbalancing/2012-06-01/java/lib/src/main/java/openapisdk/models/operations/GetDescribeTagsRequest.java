package openapisdk.models.operations;



public class GetDescribeTagsRequest {
    public GetDescribeTagsQueryParams queryParams;
    public GetDescribeTagsRequest withQueryParams(GetDescribeTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDescribeTagsHeaders headers;
    public GetDescribeTagsRequest withHeaders(GetDescribeTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
}