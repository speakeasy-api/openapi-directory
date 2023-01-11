package openapisdk.models.operations;



public class UpdateWorldTemplateResponse {
    public String contentType;
    public UpdateWorldTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateWorldTemplateResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateWorldTemplateResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateWorldTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateWorldTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateWorldTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateWorldTemplateResponse updateWorldTemplateResponse;
    public UpdateWorldTemplateResponse withUpdateWorldTemplateResponse(openapisdk.models.shared.UpdateWorldTemplateResponse updateWorldTemplateResponse) {
        this.updateWorldTemplateResponse = updateWorldTemplateResponse;
        return this;
    }
}