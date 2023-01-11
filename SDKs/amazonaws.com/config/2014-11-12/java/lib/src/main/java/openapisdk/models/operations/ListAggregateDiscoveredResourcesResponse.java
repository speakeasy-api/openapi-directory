package openapisdk.models.operations;



public class ListAggregateDiscoveredResourcesResponse {
    public String contentType;
    public ListAggregateDiscoveredResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidLimitException;
    public ListAggregateDiscoveredResourcesResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListAggregateDiscoveredResourcesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListAggregateDiscoveredResourcesResponse listAggregateDiscoveredResourcesResponse;
    public ListAggregateDiscoveredResourcesResponse withListAggregateDiscoveredResourcesResponse(openapisdk.models.shared.ListAggregateDiscoveredResourcesResponse listAggregateDiscoveredResourcesResponse) {
        this.listAggregateDiscoveredResourcesResponse = listAggregateDiscoveredResourcesResponse;
        return this;
    }
    public Object noSuchConfigurationAggregatorException;
    public ListAggregateDiscoveredResourcesResponse withNoSuchConfigurationAggregatorException(Object noSuchConfigurationAggregatorException) {
        this.noSuchConfigurationAggregatorException = noSuchConfigurationAggregatorException;
        return this;
    }
    public Long statusCode;
    public ListAggregateDiscoveredResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListAggregateDiscoveredResourcesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}