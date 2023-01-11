package openapisdk.models.operations;



public class DescribeTaskRequest {
    public DescribeTaskPathParams pathParams;
    public DescribeTaskRequest withPathParams(DescribeTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeTaskHeaders headers;
    public DescribeTaskRequest withHeaders(DescribeTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
}