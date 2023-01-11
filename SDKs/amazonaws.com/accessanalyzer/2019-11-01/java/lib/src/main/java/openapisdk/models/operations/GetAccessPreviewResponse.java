package openapisdk.models.operations;



public class GetAccessPreviewResponse {
    public Object accessDeniedException;
    public GetAccessPreviewResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetAccessPreviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAccessPreviewResponse getAccessPreviewResponse;
    public GetAccessPreviewResponse withGetAccessPreviewResponse(openapisdk.models.shared.GetAccessPreviewResponse getAccessPreviewResponse) {
        this.getAccessPreviewResponse = getAccessPreviewResponse;
        return this;
    }
    public Object internalServerException;
    public GetAccessPreviewResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAccessPreviewResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetAccessPreviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetAccessPreviewResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetAccessPreviewResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}