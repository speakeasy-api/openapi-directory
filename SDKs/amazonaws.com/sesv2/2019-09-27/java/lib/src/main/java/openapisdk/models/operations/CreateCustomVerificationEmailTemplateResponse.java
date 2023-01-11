package openapisdk.models.operations;



public class CreateCustomVerificationEmailTemplateResponse {
    public Object alreadyExistsException;
    public CreateCustomVerificationEmailTemplateResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public Object badRequestException;
    public CreateCustomVerificationEmailTemplateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateCustomVerificationEmailTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createCustomVerificationEmailTemplateResponse;
    public CreateCustomVerificationEmailTemplateResponse withCreateCustomVerificationEmailTemplateResponse(java.util.Map<String, Object> createCustomVerificationEmailTemplateResponse) {
        this.createCustomVerificationEmailTemplateResponse = createCustomVerificationEmailTemplateResponse;
        return this;
    }
    public Object limitExceededException;
    public CreateCustomVerificationEmailTemplateResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateCustomVerificationEmailTemplateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateCustomVerificationEmailTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateCustomVerificationEmailTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}