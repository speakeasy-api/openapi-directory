package openapisdk.models.operations;



public class DescribeCustomMetricRequest {
    public DescribeCustomMetricPathParams pathParams;
    public DescribeCustomMetricRequest withPathParams(DescribeCustomMetricPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeCustomMetricHeaders headers;
    public DescribeCustomMetricRequest withHeaders(DescribeCustomMetricHeaders headers) {
        this.headers = headers;
        return this;
    }
}