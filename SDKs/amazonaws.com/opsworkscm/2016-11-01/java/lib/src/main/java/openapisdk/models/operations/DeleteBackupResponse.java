package openapisdk.models.operations;



public class DeleteBackupResponse {
    public String contentType;
    public DeleteBackupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteBackupResponse;
    public DeleteBackupResponse withDeleteBackupResponse(java.util.Map<String, Object> deleteBackupResponse) {
        this.deleteBackupResponse = deleteBackupResponse;
        return this;
    }
    public Object invalidStateException;
    public DeleteBackupResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteBackupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteBackupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteBackupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}