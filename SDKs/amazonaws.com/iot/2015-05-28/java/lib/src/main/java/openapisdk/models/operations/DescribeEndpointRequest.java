package openapisdk.models.operations;



public class DescribeEndpointRequest {
    public DescribeEndpointQueryParams queryParams;
    public DescribeEndpointRequest withQueryParams(DescribeEndpointQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeEndpointHeaders headers;
    public DescribeEndpointRequest withHeaders(DescribeEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
}