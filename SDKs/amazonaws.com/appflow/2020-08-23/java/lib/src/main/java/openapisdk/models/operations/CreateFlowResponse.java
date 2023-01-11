package openapisdk.models.operations;



public class CreateFlowResponse {
    public Object conflictException;
    public CreateFlowResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public Object connectorAuthenticationException;
    public CreateFlowResponse withConnectorAuthenticationException(Object connectorAuthenticationException) {
        this.connectorAuthenticationException = connectorAuthenticationException;
        return this;
    }
    public Object connectorServerException;
    public CreateFlowResponse withConnectorServerException(Object connectorServerException) {
        this.connectorServerException = connectorServerException;
        return this;
    }
    public String contentType;
    public CreateFlowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFlowResponse createFlowResponse;
    public CreateFlowResponse withCreateFlowResponse(openapisdk.models.shared.CreateFlowResponse createFlowResponse) {
        this.createFlowResponse = createFlowResponse;
        return this;
    }
    public Object internalServerException;
    public CreateFlowResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateFlowResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateFlowResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateFlowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateFlowResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}