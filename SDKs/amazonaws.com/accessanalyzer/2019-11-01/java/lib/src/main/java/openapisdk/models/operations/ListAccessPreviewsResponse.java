package openapisdk.models.operations;



public class ListAccessPreviewsResponse {
    public Object accessDeniedException;
    public ListAccessPreviewsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAccessPreviewsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAccessPreviewsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAccessPreviewsResponse listAccessPreviewsResponse;
    public ListAccessPreviewsResponse withListAccessPreviewsResponse(openapisdk.models.shared.ListAccessPreviewsResponse listAccessPreviewsResponse) {
        this.listAccessPreviewsResponse = listAccessPreviewsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAccessPreviewsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAccessPreviewsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAccessPreviewsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListAccessPreviewsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}