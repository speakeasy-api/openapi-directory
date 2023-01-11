package openapisdk.models.operations;



public class GetFlowTemplateResponse {
    public String contentType;
    public GetFlowTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFlowTemplateResponse getFlowTemplateResponse;
    public GetFlowTemplateResponse withGetFlowTemplateResponse(openapisdk.models.shared.GetFlowTemplateResponse getFlowTemplateResponse) {
        this.getFlowTemplateResponse = getFlowTemplateResponse;
        return this;
    }
    public Object internalFailureException;
    public GetFlowTemplateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetFlowTemplateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFlowTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetFlowTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetFlowTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}