package openapisdk.models.operations;



public class RegisterResourceResponse {
    public Object alreadyExistsException;
    public RegisterResourceResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public String contentType;
    public RegisterResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public RegisterResourceResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public RegisterResourceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public RegisterResourceResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public java.util.Map<String, Object> registerResourceResponse;
    public RegisterResourceResponse withRegisterResourceResponse(java.util.Map<String, Object> registerResourceResponse) {
        this.registerResourceResponse = registerResourceResponse;
        return this;
    }
    public Long statusCode;
    public RegisterResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}