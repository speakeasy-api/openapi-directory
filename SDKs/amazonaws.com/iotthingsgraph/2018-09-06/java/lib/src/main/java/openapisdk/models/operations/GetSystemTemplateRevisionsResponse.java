package openapisdk.models.operations;



public class GetSystemTemplateRevisionsResponse {
    public String contentType;
    public GetSystemTemplateRevisionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSystemTemplateRevisionsResponse getSystemTemplateRevisionsResponse;
    public GetSystemTemplateRevisionsResponse withGetSystemTemplateRevisionsResponse(openapisdk.models.shared.GetSystemTemplateRevisionsResponse getSystemTemplateRevisionsResponse) {
        this.getSystemTemplateRevisionsResponse = getSystemTemplateRevisionsResponse;
        return this;
    }
    public Object internalFailureException;
    public GetSystemTemplateRevisionsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetSystemTemplateRevisionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetSystemTemplateRevisionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetSystemTemplateRevisionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetSystemTemplateRevisionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}