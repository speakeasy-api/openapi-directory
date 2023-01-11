package openapisdk.models.operations;



public class GetCardinalityResponse {
    public String contentType;
    public GetCardinalityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCardinalityResponse getCardinalityResponse;
    public GetCardinalityResponse withGetCardinalityResponse(openapisdk.models.shared.GetCardinalityResponse getCardinalityResponse) {
        this.getCardinalityResponse = getCardinalityResponse;
        return this;
    }
    public Object indexNotReadyException;
    public GetCardinalityResponse withIndexNotReadyException(Object indexNotReadyException) {
        this.indexNotReadyException = indexNotReadyException;
        return this;
    }
    public Object internalFailureException;
    public GetCardinalityResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidAggregationException;
    public GetCardinalityResponse withInvalidAggregationException(Object invalidAggregationException) {
        this.invalidAggregationException = invalidAggregationException;
        return this;
    }
    public Object invalidQueryException;
    public GetCardinalityResponse withInvalidQueryException(Object invalidQueryException) {
        this.invalidQueryException = invalidQueryException;
        return this;
    }
    public Object invalidRequestException;
    public GetCardinalityResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetCardinalityResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetCardinalityResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetCardinalityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetCardinalityResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public GetCardinalityResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}