package openapisdk.models.operations;



public class CreateConnectorProfileResponse {
    public Object conflictException;
    public CreateConnectorProfileResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public Object connectorAuthenticationException;
    public CreateConnectorProfileResponse withConnectorAuthenticationException(Object connectorAuthenticationException) {
        this.connectorAuthenticationException = connectorAuthenticationException;
        return this;
    }
    public String contentType;
    public CreateConnectorProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateConnectorProfileResponse createConnectorProfileResponse;
    public CreateConnectorProfileResponse withCreateConnectorProfileResponse(openapisdk.models.shared.CreateConnectorProfileResponse createConnectorProfileResponse) {
        this.createConnectorProfileResponse = createConnectorProfileResponse;
        return this;
    }
    public Object internalServerException;
    public CreateConnectorProfileResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateConnectorProfileResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateConnectorProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateConnectorProfileResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}