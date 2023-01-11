package openapisdk.models.operations;



public class CreateBackupResponse {
    public String contentType;
    public CreateBackupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBackupResponse createBackupResponse;
    public CreateBackupResponse withCreateBackupResponse(openapisdk.models.shared.CreateBackupResponse createBackupResponse) {
        this.createBackupResponse = createBackupResponse;
        return this;
    }
    public Object invalidStateException;
    public CreateBackupResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object limitExceededException;
    public CreateBackupResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateBackupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateBackupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateBackupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}