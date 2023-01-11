package openapisdk.models.operations;



public class CreateClassifierResponse {
    public Object alreadyExistsException;
    public CreateClassifierResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public String contentType;
    public CreateClassifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createClassifierResponse;
    public CreateClassifierResponse withCreateClassifierResponse(java.util.Map<String, Object> createClassifierResponse) {
        this.createClassifierResponse = createClassifierResponse;
        return this;
    }
    public Object invalidInputException;
    public CreateClassifierResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public CreateClassifierResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public CreateClassifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}