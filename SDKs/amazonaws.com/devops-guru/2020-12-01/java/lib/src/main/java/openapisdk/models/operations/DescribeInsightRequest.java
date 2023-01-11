package openapisdk.models.operations;



public class DescribeInsightRequest {
    public DescribeInsightPathParams pathParams;
    public DescribeInsightRequest withPathParams(DescribeInsightPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeInsightHeaders headers;
    public DescribeInsightRequest withHeaders(DescribeInsightHeaders headers) {
        this.headers = headers;
        return this;
    }
}