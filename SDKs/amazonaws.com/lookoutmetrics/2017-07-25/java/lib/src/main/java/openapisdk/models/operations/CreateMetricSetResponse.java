package openapisdk.models.operations;



public class CreateMetricSetResponse {
    public Object accessDeniedException;
    public CreateMetricSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateMetricSetResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateMetricSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateMetricSetResponse createMetricSetResponse;
    public CreateMetricSetResponse withCreateMetricSetResponse(openapisdk.models.shared.CreateMetricSetResponse createMetricSetResponse) {
        this.createMetricSetResponse = createMetricSetResponse;
        return this;
    }
    public Object internalServerException;
    public CreateMetricSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateMetricSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateMetricSetResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateMetricSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateMetricSetResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public CreateMetricSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}