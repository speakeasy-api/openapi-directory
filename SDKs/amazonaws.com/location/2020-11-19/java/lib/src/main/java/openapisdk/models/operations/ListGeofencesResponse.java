package openapisdk.models.operations;



public class ListGeofencesResponse {
    public Object accessDeniedException;
    public ListGeofencesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListGeofencesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListGeofencesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListGeofencesResponse listGeofencesResponse;
    public ListGeofencesResponse withListGeofencesResponse(openapisdk.models.shared.ListGeofencesResponse listGeofencesResponse) {
        this.listGeofencesResponse = listGeofencesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListGeofencesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListGeofencesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListGeofencesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListGeofencesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}