package openapisdk.models.operations;



public class UpdateFlowResponse {
    public Object conflictException;
    public UpdateFlowResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public Object connectorAuthenticationException;
    public UpdateFlowResponse withConnectorAuthenticationException(Object connectorAuthenticationException) {
        this.connectorAuthenticationException = connectorAuthenticationException;
        return this;
    }
    public Object connectorServerException;
    public UpdateFlowResponse withConnectorServerException(Object connectorServerException) {
        this.connectorServerException = connectorServerException;
        return this;
    }
    public String contentType;
    public UpdateFlowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateFlowResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateFlowResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateFlowResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateFlowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateFlowResponse updateFlowResponse;
    public UpdateFlowResponse withUpdateFlowResponse(openapisdk.models.shared.UpdateFlowResponse updateFlowResponse) {
        this.updateFlowResponse = updateFlowResponse;
        return this;
    }
    public Object validationException;
    public UpdateFlowResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}