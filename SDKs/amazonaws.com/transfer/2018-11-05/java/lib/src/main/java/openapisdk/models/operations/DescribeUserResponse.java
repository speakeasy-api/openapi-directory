package openapisdk.models.operations;



public class DescribeUserResponse {
    public String contentType;
    public DescribeUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeUserResponse describeUserResponse;
    public DescribeUserResponse withDescribeUserResponse(openapisdk.models.shared.DescribeUserResponse describeUserResponse) {
        this.describeUserResponse = describeUserResponse;
        return this;
    }
    public Object internalServiceError;
    public DescribeUserResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public DescribeUserResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeUserResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeUserResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}