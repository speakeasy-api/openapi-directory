package openapisdk.models.operations;



public class PutQueryDefinitionResponse {
    public String contentType;
    public PutQueryDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public PutQueryDefinitionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.PutQueryDefinitionResponse putQueryDefinitionResponse;
    public PutQueryDefinitionResponse withPutQueryDefinitionResponse(openapisdk.models.shared.PutQueryDefinitionResponse putQueryDefinitionResponse) {
        this.putQueryDefinitionResponse = putQueryDefinitionResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutQueryDefinitionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public PutQueryDefinitionResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public PutQueryDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}