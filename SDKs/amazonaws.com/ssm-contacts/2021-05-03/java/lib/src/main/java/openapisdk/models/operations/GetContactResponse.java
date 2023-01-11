package openapisdk.models.operations;



public class GetContactResponse {
    public Object accessDeniedException;
    public GetContactResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dataEncryptionException;
    public GetContactResponse withDataEncryptionException(Object dataEncryptionException) {
        this.dataEncryptionException = dataEncryptionException;
        return this;
    }
    public openapisdk.models.shared.GetContactResult getContactResult;
    public GetContactResponse withGetContactResult(openapisdk.models.shared.GetContactResult getContactResult) {
        this.getContactResult = getContactResult;
        return this;
    }
    public Object internalServerException;
    public GetContactResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetContactResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetContactResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetContactResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}