package openapisdk.models.operations;



public class PutGeofenceResponse {
    public Object accessDeniedException;
    public PutGeofenceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public PutGeofenceResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public PutGeofenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public PutGeofenceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.PutGeofenceResponse putGeofenceResponse;
    public PutGeofenceResponse withPutGeofenceResponse(openapisdk.models.shared.PutGeofenceResponse putGeofenceResponse) {
        this.putGeofenceResponse = putGeofenceResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutGeofenceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutGeofenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutGeofenceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public PutGeofenceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}