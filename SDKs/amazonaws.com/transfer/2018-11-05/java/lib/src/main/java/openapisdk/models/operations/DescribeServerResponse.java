package openapisdk.models.operations;



public class DescribeServerResponse {
    public String contentType;
    public DescribeServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeServerResponse describeServerResponse;
    public DescribeServerResponse withDescribeServerResponse(openapisdk.models.shared.DescribeServerResponse describeServerResponse) {
        this.describeServerResponse = describeServerResponse;
        return this;
    }
    public Object internalServiceError;
    public DescribeServerResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public DescribeServerResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeServerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeServerResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}