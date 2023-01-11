package openapisdk.models.operations;



public class GetBucketsAggregationResponse {
    public String contentType;
    public GetBucketsAggregationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetBucketsAggregationResponse getBucketsAggregationResponse;
    public GetBucketsAggregationResponse withGetBucketsAggregationResponse(openapisdk.models.shared.GetBucketsAggregationResponse getBucketsAggregationResponse) {
        this.getBucketsAggregationResponse = getBucketsAggregationResponse;
        return this;
    }
    public Object indexNotReadyException;
    public GetBucketsAggregationResponse withIndexNotReadyException(Object indexNotReadyException) {
        this.indexNotReadyException = indexNotReadyException;
        return this;
    }
    public Object internalFailureException;
    public GetBucketsAggregationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidAggregationException;
    public GetBucketsAggregationResponse withInvalidAggregationException(Object invalidAggregationException) {
        this.invalidAggregationException = invalidAggregationException;
        return this;
    }
    public Object invalidQueryException;
    public GetBucketsAggregationResponse withInvalidQueryException(Object invalidQueryException) {
        this.invalidQueryException = invalidQueryException;
        return this;
    }
    public Object invalidRequestException;
    public GetBucketsAggregationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetBucketsAggregationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetBucketsAggregationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetBucketsAggregationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetBucketsAggregationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public GetBucketsAggregationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}