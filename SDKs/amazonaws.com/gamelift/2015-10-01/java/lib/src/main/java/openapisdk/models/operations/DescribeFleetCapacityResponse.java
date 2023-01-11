package openapisdk.models.operations;



public class DescribeFleetCapacityResponse {
    public String contentType;
    public DescribeFleetCapacityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFleetCapacityOutput describeFleetCapacityOutput;
    public DescribeFleetCapacityResponse withDescribeFleetCapacityOutput(openapisdk.models.shared.DescribeFleetCapacityOutput describeFleetCapacityOutput) {
        this.describeFleetCapacityOutput = describeFleetCapacityOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeFleetCapacityResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeFleetCapacityResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeFleetCapacityResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFleetCapacityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeFleetCapacityResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}