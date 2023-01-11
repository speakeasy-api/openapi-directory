package openapisdk.models.operations;



public class ListChangeSetsResponse {
    public Object accessDeniedException;
    public ListChangeSetsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListChangeSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListChangeSetsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.ListChangeSetsResponse listChangeSetsResponse;
    public ListChangeSetsResponse withListChangeSetsResponse(openapisdk.models.shared.ListChangeSetsResponse listChangeSetsResponse) {
        this.listChangeSetsResponse = listChangeSetsResponse;
        return this;
    }
    public Long statusCode;
    public ListChangeSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListChangeSetsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListChangeSetsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}