package openapisdk.models.operations;



public class DeleteMailboxPermissionsResponse {
    public String contentType;
    public DeleteMailboxPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteMailboxPermissionsResponse;
    public DeleteMailboxPermissionsResponse withDeleteMailboxPermissionsResponse(java.util.Map<String, Object> deleteMailboxPermissionsResponse) {
        this.deleteMailboxPermissionsResponse = deleteMailboxPermissionsResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteMailboxPermissionsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object entityStateException;
    public DeleteMailboxPermissionsResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteMailboxPermissionsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public DeleteMailboxPermissionsResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public DeleteMailboxPermissionsResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public DeleteMailboxPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}