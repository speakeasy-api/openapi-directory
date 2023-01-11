package openapisdk.models.operations;



public class ListConfigurationHistoryResponse {
    public String contentType;
    public ListConfigurationHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListConfigurationHistoryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListConfigurationHistoryResponse listConfigurationHistoryResponse;
    public ListConfigurationHistoryResponse withListConfigurationHistoryResponse(openapisdk.models.shared.ListConfigurationHistoryResponse listConfigurationHistoryResponse) {
        this.listConfigurationHistoryResponse = listConfigurationHistoryResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListConfigurationHistoryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListConfigurationHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListConfigurationHistoryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}