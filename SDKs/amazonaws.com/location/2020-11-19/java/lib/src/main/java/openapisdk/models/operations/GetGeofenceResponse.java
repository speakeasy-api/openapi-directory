package openapisdk.models.operations;



public class GetGeofenceResponse {
    public Object accessDeniedException;
    public GetGeofenceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetGeofenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetGeofenceResponse getGeofenceResponse;
    public GetGeofenceResponse withGetGeofenceResponse(openapisdk.models.shared.GetGeofenceResponse getGeofenceResponse) {
        this.getGeofenceResponse = getGeofenceResponse;
        return this;
    }
    public Object internalServerException;
    public GetGeofenceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetGeofenceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetGeofenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetGeofenceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetGeofenceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}