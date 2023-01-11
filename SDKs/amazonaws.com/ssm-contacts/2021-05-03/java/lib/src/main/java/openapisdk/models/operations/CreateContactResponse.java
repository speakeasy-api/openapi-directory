package openapisdk.models.operations;



public class CreateContactResponse {
    public Object accessDeniedException;
    public CreateContactResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateContactResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateContactResult createContactResult;
    public CreateContactResponse withCreateContactResult(openapisdk.models.shared.CreateContactResult createContactResult) {
        this.createContactResult = createContactResult;
        return this;
    }
    public Object dataEncryptionException;
    public CreateContactResponse withDataEncryptionException(Object dataEncryptionException) {
        this.dataEncryptionException = dataEncryptionException;
        return this;
    }
    public Object internalServerException;
    public CreateContactResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateContactResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateContactResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateContactResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}