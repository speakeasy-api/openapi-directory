package openapisdk.models.operations;



public class DescribeSecretResponse {
    public String contentType;
    public DescribeSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSecretResponse describeSecretResponse;
    public DescribeSecretResponse withDescribeSecretResponse(openapisdk.models.shared.DescribeSecretResponse describeSecretResponse) {
        this.describeSecretResponse = describeSecretResponse;
        return this;
    }
    public Object internalServiceError;
    public DescribeSecretResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public DescribeSecretResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeSecretResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}