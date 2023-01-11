package openapisdk.models.operations;



public class BatchGetAggregateResourceConfigResponse {
    public openapisdk.models.shared.BatchGetAggregateResourceConfigResponse batchGetAggregateResourceConfigResponse;
    public BatchGetAggregateResourceConfigResponse withBatchGetAggregateResourceConfigResponse(openapisdk.models.shared.BatchGetAggregateResourceConfigResponse batchGetAggregateResourceConfigResponse) {
        this.batchGetAggregateResourceConfigResponse = batchGetAggregateResourceConfigResponse;
        return this;
    }
    public String contentType;
    public BatchGetAggregateResourceConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object noSuchConfigurationAggregatorException;
    public BatchGetAggregateResourceConfigResponse withNoSuchConfigurationAggregatorException(Object noSuchConfigurationAggregatorException) {
        this.noSuchConfigurationAggregatorException = noSuchConfigurationAggregatorException;
        return this;
    }
    public Long statusCode;
    public BatchGetAggregateResourceConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public BatchGetAggregateResourceConfigResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}