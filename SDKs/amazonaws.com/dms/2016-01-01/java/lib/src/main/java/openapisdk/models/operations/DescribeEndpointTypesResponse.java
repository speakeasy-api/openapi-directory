package openapisdk.models.operations;



public class DescribeEndpointTypesResponse {
    public String contentType;
    public DescribeEndpointTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEndpointTypesResponse describeEndpointTypesResponse;
    public DescribeEndpointTypesResponse withDescribeEndpointTypesResponse(openapisdk.models.shared.DescribeEndpointTypesResponse describeEndpointTypesResponse) {
        this.describeEndpointTypesResponse = describeEndpointTypesResponse;
        return this;
    }
    public Long statusCode;
    public DescribeEndpointTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}