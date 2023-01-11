package openapisdk.models.operations;



public class UpdateFleetMetricResponse {
    public String contentType;
    public UpdateFleetMetricResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object indexNotReadyException;
    public UpdateFleetMetricResponse withIndexNotReadyException(Object indexNotReadyException) {
        this.indexNotReadyException = indexNotReadyException;
        return this;
    }
    public Object internalFailureException;
    public UpdateFleetMetricResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidAggregationException;
    public UpdateFleetMetricResponse withInvalidAggregationException(Object invalidAggregationException) {
        this.invalidAggregationException = invalidAggregationException;
        return this;
    }
    public Object invalidQueryException;
    public UpdateFleetMetricResponse withInvalidQueryException(Object invalidQueryException) {
        this.invalidQueryException = invalidQueryException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateFleetMetricResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateFleetMetricResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public UpdateFleetMetricResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UpdateFleetMetricResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateFleetMetricResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public UpdateFleetMetricResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public Object versionConflictException;
    public UpdateFleetMetricResponse withVersionConflictException(Object versionConflictException) {
        this.versionConflictException = versionConflictException;
        return this;
    }
}