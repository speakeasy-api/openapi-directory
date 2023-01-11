package openapisdk.models.operations;



public class DescribeGatewayRequest {
    public DescribeGatewayPathParams pathParams;
    public DescribeGatewayRequest withPathParams(DescribeGatewayPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeGatewayHeaders headers;
    public DescribeGatewayRequest withHeaders(DescribeGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
}