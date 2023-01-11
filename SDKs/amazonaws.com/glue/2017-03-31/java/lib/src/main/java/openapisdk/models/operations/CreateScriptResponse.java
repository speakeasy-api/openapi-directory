package openapisdk.models.operations;



public class CreateScriptResponse {
    public String contentType;
    public CreateScriptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateScriptResponse createScriptResponse;
    public CreateScriptResponse withCreateScriptResponse(openapisdk.models.shared.CreateScriptResponse createScriptResponse) {
        this.createScriptResponse = createScriptResponse;
        return this;
    }
    public Object internalServiceException;
    public CreateScriptResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public CreateScriptResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public CreateScriptResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public CreateScriptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}