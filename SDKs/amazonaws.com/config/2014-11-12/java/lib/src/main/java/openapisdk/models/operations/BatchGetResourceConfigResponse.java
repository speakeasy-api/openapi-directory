package openapisdk.models.operations;



public class BatchGetResourceConfigResponse {
    public openapisdk.models.shared.BatchGetResourceConfigResponse batchGetResourceConfigResponse;
    public BatchGetResourceConfigResponse withBatchGetResourceConfigResponse(openapisdk.models.shared.BatchGetResourceConfigResponse batchGetResourceConfigResponse) {
        this.batchGetResourceConfigResponse = batchGetResourceConfigResponse;
        return this;
    }
    public String contentType;
    public BatchGetResourceConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object noAvailableConfigurationRecorderException;
    public BatchGetResourceConfigResponse withNoAvailableConfigurationRecorderException(Object noAvailableConfigurationRecorderException) {
        this.noAvailableConfigurationRecorderException = noAvailableConfigurationRecorderException;
        return this;
    }
    public Long statusCode;
    public BatchGetResourceConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public BatchGetResourceConfigResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}