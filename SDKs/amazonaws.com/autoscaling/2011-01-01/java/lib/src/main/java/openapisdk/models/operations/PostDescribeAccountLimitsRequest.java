package openapisdk.models.operations;



public class PostDescribeAccountLimitsRequest {
    public PostDescribeAccountLimitsQueryParams queryParams;
    public PostDescribeAccountLimitsRequest withQueryParams(PostDescribeAccountLimitsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeAccountLimitsHeaders headers;
    public PostDescribeAccountLimitsRequest withHeaders(PostDescribeAccountLimitsHeaders headers) {
        this.headers = headers;
        return this;
    }
}