package openapisdk.models.operations;



public class UpdateDatabaseResponse {
    public Object accessDeniedException;
    public UpdateDatabaseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateDatabaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateDatabaseResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidEndpointException;
    public UpdateDatabaseResponse withInvalidEndpointException(Object invalidEndpointException) {
        this.invalidEndpointException = invalidEndpointException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateDatabaseResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateDatabaseResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateDatabaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateDatabaseResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateDatabaseResponse updateDatabaseResponse;
    public UpdateDatabaseResponse withUpdateDatabaseResponse(openapisdk.models.shared.UpdateDatabaseResponse updateDatabaseResponse) {
        this.updateDatabaseResponse = updateDatabaseResponse;
        return this;
    }
    public Object validationException;
    public UpdateDatabaseResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}