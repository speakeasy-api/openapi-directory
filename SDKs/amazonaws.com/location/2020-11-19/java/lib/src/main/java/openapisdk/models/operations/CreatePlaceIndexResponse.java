package openapisdk.models.operations;



public class CreatePlaceIndexResponse {
    public Object accessDeniedException;
    public CreatePlaceIndexResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreatePlaceIndexResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreatePlaceIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePlaceIndexResponse createPlaceIndexResponse;
    public CreatePlaceIndexResponse withCreatePlaceIndexResponse(openapisdk.models.shared.CreatePlaceIndexResponse createPlaceIndexResponse) {
        this.createPlaceIndexResponse = createPlaceIndexResponse;
        return this;
    }
    public Object internalServerException;
    public CreatePlaceIndexResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public CreatePlaceIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreatePlaceIndexResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreatePlaceIndexResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}