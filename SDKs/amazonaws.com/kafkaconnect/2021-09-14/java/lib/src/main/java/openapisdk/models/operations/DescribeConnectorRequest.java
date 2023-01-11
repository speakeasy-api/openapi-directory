package openapisdk.models.operations;



public class DescribeConnectorRequest {
    public DescribeConnectorPathParams pathParams;
    public DescribeConnectorRequest withPathParams(DescribeConnectorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeConnectorHeaders headers;
    public DescribeConnectorRequest withHeaders(DescribeConnectorHeaders headers) {
        this.headers = headers;
        return this;
    }
}