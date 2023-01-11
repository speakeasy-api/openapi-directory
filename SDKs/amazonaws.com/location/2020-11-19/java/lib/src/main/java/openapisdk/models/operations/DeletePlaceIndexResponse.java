package openapisdk.models.operations;



public class DeletePlaceIndexResponse {
    public Object accessDeniedException;
    public DeletePlaceIndexResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeletePlaceIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deletePlaceIndexResponse;
    public DeletePlaceIndexResponse withDeletePlaceIndexResponse(java.util.Map<String, Object> deletePlaceIndexResponse) {
        this.deletePlaceIndexResponse = deletePlaceIndexResponse;
        return this;
    }
    public Object internalServerException;
    public DeletePlaceIndexResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeletePlaceIndexResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeletePlaceIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeletePlaceIndexResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeletePlaceIndexResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}