package openapisdk.models.operations;



public class CreateParticipantConnectionResponse {
    public Object accessDeniedException;
    public CreateParticipantConnectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateParticipantConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateParticipantConnectionResponse createParticipantConnectionResponse;
    public CreateParticipantConnectionResponse withCreateParticipantConnectionResponse(openapisdk.models.shared.CreateParticipantConnectionResponse createParticipantConnectionResponse) {
        this.createParticipantConnectionResponse = createParticipantConnectionResponse;
        return this;
    }
    public Object internalServerException;
    public CreateParticipantConnectionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public CreateParticipantConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateParticipantConnectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateParticipantConnectionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}