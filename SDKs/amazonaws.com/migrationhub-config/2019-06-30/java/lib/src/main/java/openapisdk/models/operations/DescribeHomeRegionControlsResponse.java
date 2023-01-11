package openapisdk.models.operations;



public class DescribeHomeRegionControlsResponse {
    public Object accessDeniedException;
    public DescribeHomeRegionControlsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeHomeRegionControlsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeHomeRegionControlsResult describeHomeRegionControlsResult;
    public DescribeHomeRegionControlsResponse withDescribeHomeRegionControlsResult(openapisdk.models.shared.DescribeHomeRegionControlsResult describeHomeRegionControlsResult) {
        this.describeHomeRegionControlsResult = describeHomeRegionControlsResult;
        return this;
    }
    public Object internalServerError;
    public DescribeHomeRegionControlsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public DescribeHomeRegionControlsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeHomeRegionControlsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeHomeRegionControlsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeHomeRegionControlsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}