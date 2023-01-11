package openapisdk.models.operations;



public class ListConnectorEntitiesResponse {
    public Object connectorAuthenticationException;
    public ListConnectorEntitiesResponse withConnectorAuthenticationException(Object connectorAuthenticationException) {
        this.connectorAuthenticationException = connectorAuthenticationException;
        return this;
    }
    public Object connectorServerException;
    public ListConnectorEntitiesResponse withConnectorServerException(Object connectorServerException) {
        this.connectorServerException = connectorServerException;
        return this;
    }
    public String contentType;
    public ListConnectorEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListConnectorEntitiesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListConnectorEntitiesResponse listConnectorEntitiesResponse;
    public ListConnectorEntitiesResponse withListConnectorEntitiesResponse(openapisdk.models.shared.ListConnectorEntitiesResponse listConnectorEntitiesResponse) {
        this.listConnectorEntitiesResponse = listConnectorEntitiesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListConnectorEntitiesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListConnectorEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListConnectorEntitiesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}