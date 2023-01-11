package openapisdk.models.operations;



public class GetAnalyzedResourceResponse {
    public Object accessDeniedException;
    public GetAnalyzedResourceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetAnalyzedResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAnalyzedResourceResponse getAnalyzedResourceResponse;
    public GetAnalyzedResourceResponse withGetAnalyzedResourceResponse(openapisdk.models.shared.GetAnalyzedResourceResponse getAnalyzedResourceResponse) {
        this.getAnalyzedResourceResponse = getAnalyzedResourceResponse;
        return this;
    }
    public Object internalServerException;
    public GetAnalyzedResourceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAnalyzedResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetAnalyzedResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetAnalyzedResourceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetAnalyzedResourceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}