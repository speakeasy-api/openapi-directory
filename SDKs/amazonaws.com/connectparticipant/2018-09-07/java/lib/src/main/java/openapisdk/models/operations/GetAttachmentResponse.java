package openapisdk.models.operations;



public class GetAttachmentResponse {
    public Object accessDeniedException;
    public GetAttachmentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetAttachmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAttachmentResponse getAttachmentResponse;
    public GetAttachmentResponse withGetAttachmentResponse(openapisdk.models.shared.GetAttachmentResponse getAttachmentResponse) {
        this.getAttachmentResponse = getAttachmentResponse;
        return this;
    }
    public Object internalServerException;
    public GetAttachmentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public GetAttachmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetAttachmentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetAttachmentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}