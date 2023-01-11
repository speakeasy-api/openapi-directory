package openapisdk.models.operations;



public class GetAggregateResourceConfigResponse {
    public String contentType;
    public GetAggregateResourceConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAggregateResourceConfigResponse getAggregateResourceConfigResponse;
    public GetAggregateResourceConfigResponse withGetAggregateResourceConfigResponse(openapisdk.models.shared.GetAggregateResourceConfigResponse getAggregateResourceConfigResponse) {
        this.getAggregateResourceConfigResponse = getAggregateResourceConfigResponse;
        return this;
    }
    public Object noSuchConfigurationAggregatorException;
    public GetAggregateResourceConfigResponse withNoSuchConfigurationAggregatorException(Object noSuchConfigurationAggregatorException) {
        this.noSuchConfigurationAggregatorException = noSuchConfigurationAggregatorException;
        return this;
    }
    public Object oversizedConfigurationItemException;
    public GetAggregateResourceConfigResponse withOversizedConfigurationItemException(Object oversizedConfigurationItemException) {
        this.oversizedConfigurationItemException = oversizedConfigurationItemException;
        return this;
    }
    public Object resourceNotDiscoveredException;
    public GetAggregateResourceConfigResponse withResourceNotDiscoveredException(Object resourceNotDiscoveredException) {
        this.resourceNotDiscoveredException = resourceNotDiscoveredException;
        return this;
    }
    public Long statusCode;
    public GetAggregateResourceConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetAggregateResourceConfigResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}