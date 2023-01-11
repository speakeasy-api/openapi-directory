package openapisdk.models.operations;



public class CreateFlowTemplateResponse {
    public String contentType;
    public CreateFlowTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFlowTemplateResponse createFlowTemplateResponse;
    public CreateFlowTemplateResponse withCreateFlowTemplateResponse(openapisdk.models.shared.CreateFlowTemplateResponse createFlowTemplateResponse) {
        this.createFlowTemplateResponse = createFlowTemplateResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateFlowTemplateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateFlowTemplateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateFlowTemplateResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateFlowTemplateResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateFlowTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateFlowTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}