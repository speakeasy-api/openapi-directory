package openapisdk.models.operations;



public class UpdateGeofenceCollectionResponse {
    public Object accessDeniedException;
    public UpdateGeofenceCollectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateGeofenceCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateGeofenceCollectionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateGeofenceCollectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateGeofenceCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateGeofenceCollectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateGeofenceCollectionResponse updateGeofenceCollectionResponse;
    public UpdateGeofenceCollectionResponse withUpdateGeofenceCollectionResponse(openapisdk.models.shared.UpdateGeofenceCollectionResponse updateGeofenceCollectionResponse) {
        this.updateGeofenceCollectionResponse = updateGeofenceCollectionResponse;
        return this;
    }
    public Object validationException;
    public UpdateGeofenceCollectionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}