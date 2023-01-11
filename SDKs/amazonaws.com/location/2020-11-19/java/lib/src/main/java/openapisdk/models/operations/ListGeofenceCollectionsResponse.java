package openapisdk.models.operations;



public class ListGeofenceCollectionsResponse {
    public Object accessDeniedException;
    public ListGeofenceCollectionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListGeofenceCollectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListGeofenceCollectionsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListGeofenceCollectionsResponse listGeofenceCollectionsResponse;
    public ListGeofenceCollectionsResponse withListGeofenceCollectionsResponse(openapisdk.models.shared.ListGeofenceCollectionsResponse listGeofenceCollectionsResponse) {
        this.listGeofenceCollectionsResponse = listGeofenceCollectionsResponse;
        return this;
    }
    public Long statusCode;
    public ListGeofenceCollectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListGeofenceCollectionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListGeofenceCollectionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}