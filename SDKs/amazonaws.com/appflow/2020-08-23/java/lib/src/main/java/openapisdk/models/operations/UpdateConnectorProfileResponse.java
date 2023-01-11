package openapisdk.models.operations;



public class UpdateConnectorProfileResponse {
    public Object conflictException;
    public UpdateConnectorProfileResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public Object connectorAuthenticationException;
    public UpdateConnectorProfileResponse withConnectorAuthenticationException(Object connectorAuthenticationException) {
        this.connectorAuthenticationException = connectorAuthenticationException;
        return this;
    }
    public String contentType;
    public UpdateConnectorProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateConnectorProfileResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateConnectorProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateConnectorProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateConnectorProfileResponse updateConnectorProfileResponse;
    public UpdateConnectorProfileResponse withUpdateConnectorProfileResponse(openapisdk.models.shared.UpdateConnectorProfileResponse updateConnectorProfileResponse) {
        this.updateConnectorProfileResponse = updateConnectorProfileResponse;
        return this;
    }
    public Object validationException;
    public UpdateConnectorProfileResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}