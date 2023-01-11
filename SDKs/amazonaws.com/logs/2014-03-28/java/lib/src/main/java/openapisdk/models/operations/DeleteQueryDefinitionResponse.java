package openapisdk.models.operations;



public class DeleteQueryDefinitionResponse {
    public String contentType;
    public DeleteQueryDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteQueryDefinitionResponse deleteQueryDefinitionResponse;
    public DeleteQueryDefinitionResponse withDeleteQueryDefinitionResponse(openapisdk.models.shared.DeleteQueryDefinitionResponse deleteQueryDefinitionResponse) {
        this.deleteQueryDefinitionResponse = deleteQueryDefinitionResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteQueryDefinitionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteQueryDefinitionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteQueryDefinitionResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteQueryDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}