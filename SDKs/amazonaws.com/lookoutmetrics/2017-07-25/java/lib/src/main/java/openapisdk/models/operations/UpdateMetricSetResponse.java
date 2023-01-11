package openapisdk.models.operations;



public class UpdateMetricSetResponse {
    public Object accessDeniedException;
    public UpdateMetricSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateMetricSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateMetricSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateMetricSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateMetricSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateMetricSetResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateMetricSetResponse updateMetricSetResponse;
    public UpdateMetricSetResponse withUpdateMetricSetResponse(openapisdk.models.shared.UpdateMetricSetResponse updateMetricSetResponse) {
        this.updateMetricSetResponse = updateMetricSetResponse;
        return this;
    }
    public Object validationException;
    public UpdateMetricSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}