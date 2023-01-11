package openapisdk.models.operations;



public class CreateFleetMetricResponse {
    public String contentType;
    public CreateFleetMetricResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFleetMetricResponse createFleetMetricResponse;
    public CreateFleetMetricResponse withCreateFleetMetricResponse(openapisdk.models.shared.CreateFleetMetricResponse createFleetMetricResponse) {
        this.createFleetMetricResponse = createFleetMetricResponse;
        return this;
    }
    public Object indexNotReadyException;
    public CreateFleetMetricResponse withIndexNotReadyException(Object indexNotReadyException) {
        this.indexNotReadyException = indexNotReadyException;
        return this;
    }
    public Object internalFailureException;
    public CreateFleetMetricResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidAggregationException;
    public CreateFleetMetricResponse withInvalidAggregationException(Object invalidAggregationException) {
        this.invalidAggregationException = invalidAggregationException;
        return this;
    }
    public Object invalidQueryException;
    public CreateFleetMetricResponse withInvalidQueryException(Object invalidQueryException) {
        this.invalidQueryException = invalidQueryException;
        return this;
    }
    public Object invalidRequestException;
    public CreateFleetMetricResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateFleetMetricResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateFleetMetricResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateFleetMetricResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateFleetMetricResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateFleetMetricResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateFleetMetricResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public CreateFleetMetricResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}