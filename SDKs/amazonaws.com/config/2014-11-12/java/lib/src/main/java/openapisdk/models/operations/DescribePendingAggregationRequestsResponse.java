package openapisdk.models.operations;



public class DescribePendingAggregationRequestsResponse {
    public String contentType;
    public DescribePendingAggregationRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePendingAggregationRequestsResponse describePendingAggregationRequestsResponse;
    public DescribePendingAggregationRequestsResponse withDescribePendingAggregationRequestsResponse(openapisdk.models.shared.DescribePendingAggregationRequestsResponse describePendingAggregationRequestsResponse) {
        this.describePendingAggregationRequestsResponse = describePendingAggregationRequestsResponse;
        return this;
    }
    public Object invalidLimitException;
    public DescribePendingAggregationRequestsResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribePendingAggregationRequestsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribePendingAggregationRequestsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Long statusCode;
    public DescribePendingAggregationRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}