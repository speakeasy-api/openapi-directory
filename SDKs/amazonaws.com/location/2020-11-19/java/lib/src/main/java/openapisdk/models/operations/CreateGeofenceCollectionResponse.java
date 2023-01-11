package openapisdk.models.operations;



public class CreateGeofenceCollectionResponse {
    public Object accessDeniedException;
    public CreateGeofenceCollectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateGeofenceCollectionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateGeofenceCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateGeofenceCollectionResponse createGeofenceCollectionResponse;
    public CreateGeofenceCollectionResponse withCreateGeofenceCollectionResponse(openapisdk.models.shared.CreateGeofenceCollectionResponse createGeofenceCollectionResponse) {
        this.createGeofenceCollectionResponse = createGeofenceCollectionResponse;
        return this;
    }
    public Object internalServerException;
    public CreateGeofenceCollectionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public CreateGeofenceCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateGeofenceCollectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateGeofenceCollectionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}