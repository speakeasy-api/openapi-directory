package openapisdk.models.operations;



public class SendActivationCodeResponse {
    public Object accessDeniedException;
    public SendActivationCodeResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public SendActivationCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dataEncryptionException;
    public SendActivationCodeResponse withDataEncryptionException(Object dataEncryptionException) {
        this.dataEncryptionException = dataEncryptionException;
        return this;
    }
    public Object internalServerException;
    public SendActivationCodeResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public SendActivationCodeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> sendActivationCodeResult;
    public SendActivationCodeResponse withSendActivationCodeResult(java.util.Map<String, Object> sendActivationCodeResult) {
        this.sendActivationCodeResult = sendActivationCodeResult;
        return this;
    }
    public Object serviceQuotaExceededException;
    public SendActivationCodeResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public SendActivationCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SendActivationCodeResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public SendActivationCodeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}