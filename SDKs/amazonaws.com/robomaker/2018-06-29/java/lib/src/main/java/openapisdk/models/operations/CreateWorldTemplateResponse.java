package openapisdk.models.operations;



public class CreateWorldTemplateResponse {
    public String contentType;
    public CreateWorldTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateWorldTemplateResponse createWorldTemplateResponse;
    public CreateWorldTemplateResponse withCreateWorldTemplateResponse(openapisdk.models.shared.CreateWorldTemplateResponse createWorldTemplateResponse) {
        this.createWorldTemplateResponse = createWorldTemplateResponse;
        return this;
    }
    public Object internalServerException;
    public CreateWorldTemplateResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public CreateWorldTemplateResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public CreateWorldTemplateResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateWorldTemplateResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateWorldTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateWorldTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateWorldTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}