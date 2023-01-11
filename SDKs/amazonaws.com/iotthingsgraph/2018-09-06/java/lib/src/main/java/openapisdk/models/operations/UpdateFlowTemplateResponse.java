package openapisdk.models.operations;



public class UpdateFlowTemplateResponse {
    public String contentType;
    public UpdateFlowTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateFlowTemplateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateFlowTemplateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateFlowTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateFlowTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateFlowTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateFlowTemplateResponse updateFlowTemplateResponse;
    public UpdateFlowTemplateResponse withUpdateFlowTemplateResponse(openapisdk.models.shared.UpdateFlowTemplateResponse updateFlowTemplateResponse) {
        this.updateFlowTemplateResponse = updateFlowTemplateResponse;
        return this;
    }
}