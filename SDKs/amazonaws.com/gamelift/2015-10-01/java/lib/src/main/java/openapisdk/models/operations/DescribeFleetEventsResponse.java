package openapisdk.models.operations;



public class DescribeFleetEventsResponse {
    public String contentType;
    public DescribeFleetEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFleetEventsOutput describeFleetEventsOutput;
    public DescribeFleetEventsResponse withDescribeFleetEventsOutput(openapisdk.models.shared.DescribeFleetEventsOutput describeFleetEventsOutput) {
        this.describeFleetEventsOutput = describeFleetEventsOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeFleetEventsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeFleetEventsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeFleetEventsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFleetEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeFleetEventsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}