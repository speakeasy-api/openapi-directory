package openapisdk.models.operations;



public class DescribeApplicationStateResponse {
    public Object accessDeniedException;
    public DescribeApplicationStateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeApplicationStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeApplicationStateResult describeApplicationStateResult;
    public DescribeApplicationStateResponse withDescribeApplicationStateResult(openapisdk.models.shared.DescribeApplicationStateResult describeApplicationStateResult) {
        this.describeApplicationStateResult = describeApplicationStateResult;
        return this;
    }
    public Object homeRegionNotSetException;
    public DescribeApplicationStateResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object internalServerError;
    public DescribeApplicationStateResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public DescribeApplicationStateResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object policyErrorException;
    public DescribeApplicationStateResponse withPolicyErrorException(Object policyErrorException) {
        this.policyErrorException = policyErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeApplicationStateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeApplicationStateResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeApplicationStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeApplicationStateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}