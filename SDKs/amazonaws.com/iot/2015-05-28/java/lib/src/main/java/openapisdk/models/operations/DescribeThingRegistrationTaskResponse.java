package openapisdk.models.operations;



public class DescribeThingRegistrationTaskResponse {
    public String contentType;
    public DescribeThingRegistrationTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeThingRegistrationTaskResponse describeThingRegistrationTaskResponse;
    public DescribeThingRegistrationTaskResponse withDescribeThingRegistrationTaskResponse(openapisdk.models.shared.DescribeThingRegistrationTaskResponse describeThingRegistrationTaskResponse) {
        this.describeThingRegistrationTaskResponse = describeThingRegistrationTaskResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeThingRegistrationTaskResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeThingRegistrationTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeThingRegistrationTaskResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeThingRegistrationTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeThingRegistrationTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeThingRegistrationTaskResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}