package openapisdk.models.operations;



public class CreateSystemTemplateResponse {
    public String contentType;
    public CreateSystemTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSystemTemplateResponse createSystemTemplateResponse;
    public CreateSystemTemplateResponse withCreateSystemTemplateResponse(openapisdk.models.shared.CreateSystemTemplateResponse createSystemTemplateResponse) {
        this.createSystemTemplateResponse = createSystemTemplateResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateSystemTemplateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateSystemTemplateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateSystemTemplateResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateSystemTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateSystemTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}