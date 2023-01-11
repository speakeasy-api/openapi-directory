package openapisdk.models.operations;



public class SelectAggregateResourceConfigResponse {
    public String contentType;
    public SelectAggregateResourceConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidExpressionException;
    public SelectAggregateResourceConfigResponse withInvalidExpressionException(Object invalidExpressionException) {
        this.invalidExpressionException = invalidExpressionException;
        return this;
    }
    public Object invalidLimitException;
    public SelectAggregateResourceConfigResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public SelectAggregateResourceConfigResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object noSuchConfigurationAggregatorException;
    public SelectAggregateResourceConfigResponse withNoSuchConfigurationAggregatorException(Object noSuchConfigurationAggregatorException) {
        this.noSuchConfigurationAggregatorException = noSuchConfigurationAggregatorException;
        return this;
    }
    public openapisdk.models.shared.SelectAggregateResourceConfigResponse selectAggregateResourceConfigResponse;
    public SelectAggregateResourceConfigResponse withSelectAggregateResourceConfigResponse(openapisdk.models.shared.SelectAggregateResourceConfigResponse selectAggregateResourceConfigResponse) {
        this.selectAggregateResourceConfigResponse = selectAggregateResourceConfigResponse;
        return this;
    }
    public Long statusCode;
    public SelectAggregateResourceConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}