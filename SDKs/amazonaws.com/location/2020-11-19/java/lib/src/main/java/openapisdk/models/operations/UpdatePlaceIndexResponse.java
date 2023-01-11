package openapisdk.models.operations;



public class UpdatePlaceIndexResponse {
    public Object accessDeniedException;
    public UpdatePlaceIndexResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdatePlaceIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdatePlaceIndexResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdatePlaceIndexResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdatePlaceIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdatePlaceIndexResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdatePlaceIndexResponse updatePlaceIndexResponse;
    public UpdatePlaceIndexResponse withUpdatePlaceIndexResponse(openapisdk.models.shared.UpdatePlaceIndexResponse updatePlaceIndexResponse) {
        this.updatePlaceIndexResponse = updatePlaceIndexResponse;
        return this;
    }
    public Object validationException;
    public UpdatePlaceIndexResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}