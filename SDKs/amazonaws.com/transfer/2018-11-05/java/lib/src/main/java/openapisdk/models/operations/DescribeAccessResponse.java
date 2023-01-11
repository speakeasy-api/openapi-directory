package openapisdk.models.operations;



public class DescribeAccessResponse {
    public String contentType;
    public DescribeAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAccessResponse describeAccessResponse;
    public DescribeAccessResponse withDescribeAccessResponse(openapisdk.models.shared.DescribeAccessResponse describeAccessResponse) {
        this.describeAccessResponse = describeAccessResponse;
        return this;
    }
    public Object internalServiceError;
    public DescribeAccessResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public DescribeAccessResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAccessResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeAccessResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}