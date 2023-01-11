package openapisdk.models.operations;



public class DescribeFleetUtilizationResponse {
    public String contentType;
    public DescribeFleetUtilizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFleetUtilizationOutput describeFleetUtilizationOutput;
    public DescribeFleetUtilizationResponse withDescribeFleetUtilizationOutput(openapisdk.models.shared.DescribeFleetUtilizationOutput describeFleetUtilizationOutput) {
        this.describeFleetUtilizationOutput = describeFleetUtilizationOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeFleetUtilizationResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeFleetUtilizationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeFleetUtilizationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFleetUtilizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeFleetUtilizationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}