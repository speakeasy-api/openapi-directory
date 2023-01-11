package openapisdk.models.operations;



public class DescribeFleetLocationUtilizationResponse {
    public String contentType;
    public DescribeFleetLocationUtilizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFleetLocationUtilizationOutput describeFleetLocationUtilizationOutput;
    public DescribeFleetLocationUtilizationResponse withDescribeFleetLocationUtilizationOutput(openapisdk.models.shared.DescribeFleetLocationUtilizationOutput describeFleetLocationUtilizationOutput) {
        this.describeFleetLocationUtilizationOutput = describeFleetLocationUtilizationOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeFleetLocationUtilizationResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeFleetLocationUtilizationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeFleetLocationUtilizationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFleetLocationUtilizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeFleetLocationUtilizationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}