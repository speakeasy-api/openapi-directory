package openapisdk.models.operations;



public class DescribeCustomPluginRequest {
    public DescribeCustomPluginPathParams pathParams;
    public DescribeCustomPluginRequest withPathParams(DescribeCustomPluginPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeCustomPluginHeaders headers;
    public DescribeCustomPluginRequest withHeaders(DescribeCustomPluginHeaders headers) {
        this.headers = headers;
        return this;
    }
}