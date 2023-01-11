package openapisdk.models.operations;



public class DisassociateConnectorResponse {
    public String contentType;
    public DisassociateConnectorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateConnectorResponse;
    public DisassociateConnectorResponse withDisassociateConnectorResponse(java.util.Map<String, Object> disassociateConnectorResponse) {
        this.disassociateConnectorResponse = disassociateConnectorResponse;
        return this;
    }
    public Object invalidParameterException;
    public DisassociateConnectorResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public DisassociateConnectorResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public DisassociateConnectorResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public DisassociateConnectorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public DisassociateConnectorResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}