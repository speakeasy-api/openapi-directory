package openapisdk.models.operations;



public class DescribeFleetLocationCapacityResponse {
    public String contentType;
    public DescribeFleetLocationCapacityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFleetLocationCapacityOutput describeFleetLocationCapacityOutput;
    public DescribeFleetLocationCapacityResponse withDescribeFleetLocationCapacityOutput(openapisdk.models.shared.DescribeFleetLocationCapacityOutput describeFleetLocationCapacityOutput) {
        this.describeFleetLocationCapacityOutput = describeFleetLocationCapacityOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeFleetLocationCapacityResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeFleetLocationCapacityResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeFleetLocationCapacityResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFleetLocationCapacityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeFleetLocationCapacityResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}