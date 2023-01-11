package openapisdk.models.operations;



public class PostDescribeStorageRequest {
    public PostDescribeStorageQueryParams queryParams;
    public PostDescribeStorageRequest withQueryParams(PostDescribeStorageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeStorageHeaders headers;
    public PostDescribeStorageRequest withHeaders(PostDescribeStorageHeaders headers) {
        this.headers = headers;
        return this;
    }
}