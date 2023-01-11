package openapisdk.models.operations;



public class DescribeCodeReviewRequest {
    public DescribeCodeReviewPathParams pathParams;
    public DescribeCodeReviewRequest withPathParams(DescribeCodeReviewPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeCodeReviewHeaders headers;
    public DescribeCodeReviewRequest withHeaders(DescribeCodeReviewHeaders headers) {
        this.headers = headers;
        return this;
    }
}