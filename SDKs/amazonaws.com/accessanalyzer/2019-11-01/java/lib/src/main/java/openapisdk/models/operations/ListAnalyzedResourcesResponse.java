package openapisdk.models.operations;



public class ListAnalyzedResourcesResponse {
    public Object accessDeniedException;
    public ListAnalyzedResourcesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAnalyzedResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAnalyzedResourcesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAnalyzedResourcesResponse listAnalyzedResourcesResponse;
    public ListAnalyzedResourcesResponse withListAnalyzedResourcesResponse(openapisdk.models.shared.ListAnalyzedResourcesResponse listAnalyzedResourcesResponse) {
        this.listAnalyzedResourcesResponse = listAnalyzedResourcesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAnalyzedResourcesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAnalyzedResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAnalyzedResourcesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListAnalyzedResourcesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}