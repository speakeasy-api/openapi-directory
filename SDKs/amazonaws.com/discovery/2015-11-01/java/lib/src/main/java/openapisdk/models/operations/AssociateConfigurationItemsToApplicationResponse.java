package openapisdk.models.operations;



public class AssociateConfigurationItemsToApplicationResponse {
    public java.util.Map<String, Object> associateConfigurationItemsToApplicationResponse;
    public AssociateConfigurationItemsToApplicationResponse withAssociateConfigurationItemsToApplicationResponse(java.util.Map<String, Object> associateConfigurationItemsToApplicationResponse) {
        this.associateConfigurationItemsToApplicationResponse = associateConfigurationItemsToApplicationResponse;
        return this;
    }
    public Object authorizationErrorException;
    public AssociateConfigurationItemsToApplicationResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public AssociateConfigurationItemsToApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object homeRegionNotSetException;
    public AssociateConfigurationItemsToApplicationResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public AssociateConfigurationItemsToApplicationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public AssociateConfigurationItemsToApplicationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serverInternalErrorException;
    public AssociateConfigurationItemsToApplicationResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public Long statusCode;
    public AssociateConfigurationItemsToApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}