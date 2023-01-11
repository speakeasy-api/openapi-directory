package openapisdk.models.operations;



public class DeleteConfigurationAggregatorResponse {
    public String contentType;
    public DeleteConfigurationAggregatorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object noSuchConfigurationAggregatorException;
    public DeleteConfigurationAggregatorResponse withNoSuchConfigurationAggregatorException(Object noSuchConfigurationAggregatorException) {
        this.noSuchConfigurationAggregatorException = noSuchConfigurationAggregatorException;
        return this;
    }
    public Long statusCode;
    public DeleteConfigurationAggregatorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}