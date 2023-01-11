package openapisdk.models.operations;



public class GetFlowTemplateRevisionsResponse {
    public String contentType;
    public GetFlowTemplateRevisionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFlowTemplateRevisionsResponse getFlowTemplateRevisionsResponse;
    public GetFlowTemplateRevisionsResponse withGetFlowTemplateRevisionsResponse(openapisdk.models.shared.GetFlowTemplateRevisionsResponse getFlowTemplateRevisionsResponse) {
        this.getFlowTemplateRevisionsResponse = getFlowTemplateRevisionsResponse;
        return this;
    }
    public Object internalFailureException;
    public GetFlowTemplateRevisionsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetFlowTemplateRevisionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFlowTemplateRevisionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetFlowTemplateRevisionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetFlowTemplateRevisionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}