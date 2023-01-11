package openapisdk.models.operations;



public class TestInvokeAuthorizerResponse {
    public String contentType;
    public TestInvokeAuthorizerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public TestInvokeAuthorizerResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public TestInvokeAuthorizerResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidResponseException;
    public TestInvokeAuthorizerResponse withInvalidResponseException(Object invalidResponseException) {
        this.invalidResponseException = invalidResponseException;
        return this;
    }
    public Object resourceNotFoundException;
    public TestInvokeAuthorizerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public TestInvokeAuthorizerResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public TestInvokeAuthorizerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestInvokeAuthorizerResponse testInvokeAuthorizerResponse;
    public TestInvokeAuthorizerResponse withTestInvokeAuthorizerResponse(openapisdk.models.shared.TestInvokeAuthorizerResponse testInvokeAuthorizerResponse) {
        this.testInvokeAuthorizerResponse = testInvokeAuthorizerResponse;
        return this;
    }
    public Object throttlingException;
    public TestInvokeAuthorizerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public TestInvokeAuthorizerResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}