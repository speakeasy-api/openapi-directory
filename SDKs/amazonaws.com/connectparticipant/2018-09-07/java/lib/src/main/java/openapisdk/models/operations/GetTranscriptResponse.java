package openapisdk.models.operations;



public class GetTranscriptResponse {
    public Object accessDeniedException;
    public GetTranscriptResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetTranscriptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTranscriptResponse getTranscriptResponse;
    public GetTranscriptResponse withGetTranscriptResponse(openapisdk.models.shared.GetTranscriptResponse getTranscriptResponse) {
        this.getTranscriptResponse = getTranscriptResponse;
        return this;
    }
    public Object internalServerException;
    public GetTranscriptResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public GetTranscriptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetTranscriptResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetTranscriptResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}