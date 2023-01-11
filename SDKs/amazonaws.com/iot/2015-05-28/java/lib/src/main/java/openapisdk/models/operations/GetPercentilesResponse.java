package openapisdk.models.operations;



public class GetPercentilesResponse {
    public String contentType;
    public GetPercentilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPercentilesResponse getPercentilesResponse;
    public GetPercentilesResponse withGetPercentilesResponse(openapisdk.models.shared.GetPercentilesResponse getPercentilesResponse) {
        this.getPercentilesResponse = getPercentilesResponse;
        return this;
    }
    public Object indexNotReadyException;
    public GetPercentilesResponse withIndexNotReadyException(Object indexNotReadyException) {
        this.indexNotReadyException = indexNotReadyException;
        return this;
    }
    public Object internalFailureException;
    public GetPercentilesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidAggregationException;
    public GetPercentilesResponse withInvalidAggregationException(Object invalidAggregationException) {
        this.invalidAggregationException = invalidAggregationException;
        return this;
    }
    public Object invalidQueryException;
    public GetPercentilesResponse withInvalidQueryException(Object invalidQueryException) {
        this.invalidQueryException = invalidQueryException;
        return this;
    }
    public Object invalidRequestException;
    public GetPercentilesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetPercentilesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetPercentilesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetPercentilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetPercentilesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public GetPercentilesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}