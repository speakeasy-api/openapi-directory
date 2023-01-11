package openapisdk.models.operations;



public class UpdateTrackerResponse {
    public Object accessDeniedException;
    public UpdateTrackerResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateTrackerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateTrackerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateTrackerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateTrackerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateTrackerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateTrackerResponse updateTrackerResponse;
    public UpdateTrackerResponse withUpdateTrackerResponse(openapisdk.models.shared.UpdateTrackerResponse updateTrackerResponse) {
        this.updateTrackerResponse = updateTrackerResponse;
        return this;
    }
    public Object validationException;
    public UpdateTrackerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}