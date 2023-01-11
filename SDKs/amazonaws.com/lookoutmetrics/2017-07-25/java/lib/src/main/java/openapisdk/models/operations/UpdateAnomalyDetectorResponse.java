package openapisdk.models.operations;



public class UpdateAnomalyDetectorResponse {
    public Object accessDeniedException;
    public UpdateAnomalyDetectorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateAnomalyDetectorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateAnomalyDetectorResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateAnomalyDetectorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateAnomalyDetectorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateAnomalyDetectorResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateAnomalyDetectorResponse updateAnomalyDetectorResponse;
    public UpdateAnomalyDetectorResponse withUpdateAnomalyDetectorResponse(openapisdk.models.shared.UpdateAnomalyDetectorResponse updateAnomalyDetectorResponse) {
        this.updateAnomalyDetectorResponse = updateAnomalyDetectorResponse;
        return this;
    }
    public Object validationException;
    public UpdateAnomalyDetectorResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}