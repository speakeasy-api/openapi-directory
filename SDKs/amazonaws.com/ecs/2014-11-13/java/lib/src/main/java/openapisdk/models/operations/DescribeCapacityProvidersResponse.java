package openapisdk.models.operations;



public class DescribeCapacityProvidersResponse {
    public Object clientException;
    public DescribeCapacityProvidersResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeCapacityProvidersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCapacityProvidersResponse describeCapacityProvidersResponse;
    public DescribeCapacityProvidersResponse withDescribeCapacityProvidersResponse(openapisdk.models.shared.DescribeCapacityProvidersResponse describeCapacityProvidersResponse) {
        this.describeCapacityProvidersResponse = describeCapacityProvidersResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeCapacityProvidersResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public DescribeCapacityProvidersResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeCapacityProvidersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}