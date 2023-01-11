package openapisdk.models.operations;



public class CreateTrackerResponse {
    public Object accessDeniedException;
    public CreateTrackerResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateTrackerResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateTrackerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateTrackerResponse createTrackerResponse;
    public CreateTrackerResponse withCreateTrackerResponse(openapisdk.models.shared.CreateTrackerResponse createTrackerResponse) {
        this.createTrackerResponse = createTrackerResponse;
        return this;
    }
    public Object internalServerException;
    public CreateTrackerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public CreateTrackerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateTrackerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateTrackerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}