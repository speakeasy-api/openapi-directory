package openapisdk.models.operations;



public class UpdateClassifierResponse {
    public String contentType;
    public UpdateClassifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public UpdateClassifierResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidInputException;
    public UpdateClassifierResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public UpdateClassifierResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public UpdateClassifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateClassifierResponse;
    public UpdateClassifierResponse withUpdateClassifierResponse(java.util.Map<String, Object> updateClassifierResponse) {
        this.updateClassifierResponse = updateClassifierResponse;
        return this;
    }
    public Object versionMismatchException;
    public UpdateClassifierResponse withVersionMismatchException(Object versionMismatchException) {
        this.versionMismatchException = versionMismatchException;
        return this;
    }
}