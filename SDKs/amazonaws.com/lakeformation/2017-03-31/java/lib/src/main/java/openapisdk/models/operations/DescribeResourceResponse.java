package openapisdk.models.operations;



public class DescribeResourceResponse {
    public String contentType;
    public DescribeResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeResourceResponse describeResourceResponse;
    public DescribeResourceResponse withDescribeResourceResponse(openapisdk.models.shared.DescribeResourceResponse describeResourceResponse) {
        this.describeResourceResponse = describeResourceResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DescribeResourceResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public DescribeResourceResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DescribeResourceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DescribeResourceResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DescribeResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}