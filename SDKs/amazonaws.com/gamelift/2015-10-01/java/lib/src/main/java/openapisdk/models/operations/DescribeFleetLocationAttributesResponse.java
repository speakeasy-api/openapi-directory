package openapisdk.models.operations;



public class DescribeFleetLocationAttributesResponse {
    public String contentType;
    public DescribeFleetLocationAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFleetLocationAttributesOutput describeFleetLocationAttributesOutput;
    public DescribeFleetLocationAttributesResponse withDescribeFleetLocationAttributesOutput(openapisdk.models.shared.DescribeFleetLocationAttributesOutput describeFleetLocationAttributesOutput) {
        this.describeFleetLocationAttributesOutput = describeFleetLocationAttributesOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeFleetLocationAttributesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeFleetLocationAttributesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeFleetLocationAttributesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFleetLocationAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeFleetLocationAttributesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}