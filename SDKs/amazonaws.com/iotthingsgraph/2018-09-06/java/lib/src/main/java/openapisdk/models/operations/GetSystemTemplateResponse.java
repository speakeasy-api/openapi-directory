package openapisdk.models.operations;



public class GetSystemTemplateResponse {
    public String contentType;
    public GetSystemTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSystemTemplateResponse getSystemTemplateResponse;
    public GetSystemTemplateResponse withGetSystemTemplateResponse(openapisdk.models.shared.GetSystemTemplateResponse getSystemTemplateResponse) {
        this.getSystemTemplateResponse = getSystemTemplateResponse;
        return this;
    }
    public Object internalFailureException;
    public GetSystemTemplateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetSystemTemplateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetSystemTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetSystemTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetSystemTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}