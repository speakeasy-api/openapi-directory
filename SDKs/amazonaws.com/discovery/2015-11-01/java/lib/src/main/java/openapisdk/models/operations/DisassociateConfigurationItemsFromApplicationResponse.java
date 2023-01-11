package openapisdk.models.operations;



public class DisassociateConfigurationItemsFromApplicationResponse {
    public Object authorizationErrorException;
    public DisassociateConfigurationItemsFromApplicationResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public DisassociateConfigurationItemsFromApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateConfigurationItemsFromApplicationResponse;
    public DisassociateConfigurationItemsFromApplicationResponse withDisassociateConfigurationItemsFromApplicationResponse(java.util.Map<String, Object> disassociateConfigurationItemsFromApplicationResponse) {
        this.disassociateConfigurationItemsFromApplicationResponse = disassociateConfigurationItemsFromApplicationResponse;
        return this;
    }
    public Object homeRegionNotSetException;
    public DisassociateConfigurationItemsFromApplicationResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public DisassociateConfigurationItemsFromApplicationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public DisassociateConfigurationItemsFromApplicationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serverInternalErrorException;
    public DisassociateConfigurationItemsFromApplicationResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public Long statusCode;
    public DisassociateConfigurationItemsFromApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}