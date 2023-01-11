package openapisdk.models.operations;



public class CreateMapResponse {
    public Object accessDeniedException;
    public CreateMapResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateMapResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateMapResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateMapResponse createMapResponse;
    public CreateMapResponse withCreateMapResponse(openapisdk.models.shared.CreateMapResponse createMapResponse) {
        this.createMapResponse = createMapResponse;
        return this;
    }
    public Object internalServerException;
    public CreateMapResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public CreateMapResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateMapResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateMapResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}