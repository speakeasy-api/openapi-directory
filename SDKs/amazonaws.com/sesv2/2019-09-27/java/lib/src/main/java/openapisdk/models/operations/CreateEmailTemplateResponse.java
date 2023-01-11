package openapisdk.models.operations;



public class CreateEmailTemplateResponse {
    public Object alreadyExistsException;
    public CreateEmailTemplateResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public Object badRequestException;
    public CreateEmailTemplateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateEmailTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createEmailTemplateResponse;
    public CreateEmailTemplateResponse withCreateEmailTemplateResponse(java.util.Map<String, Object> createEmailTemplateResponse) {
        this.createEmailTemplateResponse = createEmailTemplateResponse;
        return this;
    }
    public Object limitExceededException;
    public CreateEmailTemplateResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateEmailTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateEmailTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}