package openapisdk.models.operations;



public class UpdateSystemTemplateResponse {
    public String contentType;
    public UpdateSystemTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateSystemTemplateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateSystemTemplateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateSystemTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateSystemTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateSystemTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateSystemTemplateResponse updateSystemTemplateResponse;
    public UpdateSystemTemplateResponse withUpdateSystemTemplateResponse(openapisdk.models.shared.UpdateSystemTemplateResponse updateSystemTemplateResponse) {
        this.updateSystemTemplateResponse = updateSystemTemplateResponse;
        return this;
    }
}