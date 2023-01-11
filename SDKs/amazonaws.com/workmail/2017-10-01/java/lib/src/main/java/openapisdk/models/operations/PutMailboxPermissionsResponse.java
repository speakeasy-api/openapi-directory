package openapisdk.models.operations;



public class PutMailboxPermissionsResponse {
    public String contentType;
    public PutMailboxPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public PutMailboxPermissionsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object entityStateException;
    public PutMailboxPermissionsResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public PutMailboxPermissionsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public PutMailboxPermissionsResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public PutMailboxPermissionsResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public java.util.Map<String, Object> putMailboxPermissionsResponse;
    public PutMailboxPermissionsResponse withPutMailboxPermissionsResponse(java.util.Map<String, Object> putMailboxPermissionsResponse) {
        this.putMailboxPermissionsResponse = putMailboxPermissionsResponse;
        return this;
    }
    public Long statusCode;
    public PutMailboxPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}