package openapisdk.models.operations;



public class DisconnectParticipantResponse {
    public Object accessDeniedException;
    public DisconnectParticipantResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DisconnectParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disconnectParticipantResponse;
    public DisconnectParticipantResponse withDisconnectParticipantResponse(java.util.Map<String, Object> disconnectParticipantResponse) {
        this.disconnectParticipantResponse = disconnectParticipantResponse;
        return this;
    }
    public Object internalServerException;
    public DisconnectParticipantResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DisconnectParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DisconnectParticipantResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DisconnectParticipantResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}