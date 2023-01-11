package openapisdk.models.operations;



public class GetAggregateDiscoveredResourceCountsResponse {
    public String contentType;
    public GetAggregateDiscoveredResourceCountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAggregateDiscoveredResourceCountsResponse getAggregateDiscoveredResourceCountsResponse;
    public GetAggregateDiscoveredResourceCountsResponse withGetAggregateDiscoveredResourceCountsResponse(openapisdk.models.shared.GetAggregateDiscoveredResourceCountsResponse getAggregateDiscoveredResourceCountsResponse) {
        this.getAggregateDiscoveredResourceCountsResponse = getAggregateDiscoveredResourceCountsResponse;
        return this;
    }
    public Object invalidLimitException;
    public GetAggregateDiscoveredResourceCountsResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public GetAggregateDiscoveredResourceCountsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object noSuchConfigurationAggregatorException;
    public GetAggregateDiscoveredResourceCountsResponse withNoSuchConfigurationAggregatorException(Object noSuchConfigurationAggregatorException) {
        this.noSuchConfigurationAggregatorException = noSuchConfigurationAggregatorException;
        return this;
    }
    public Long statusCode;
    public GetAggregateDiscoveredResourceCountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetAggregateDiscoveredResourceCountsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}