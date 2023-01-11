package openapisdk.models.operations;



public class ListAnalyzersResponse {
    public Object accessDeniedException;
    public ListAnalyzersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAnalyzersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAnalyzersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAnalyzersResponse listAnalyzersResponse;
    public ListAnalyzersResponse withListAnalyzersResponse(openapisdk.models.shared.ListAnalyzersResponse listAnalyzersResponse) {
        this.listAnalyzersResponse = listAnalyzersResponse;
        return this;
    }
    public Long statusCode;
    public ListAnalyzersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAnalyzersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListAnalyzersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}