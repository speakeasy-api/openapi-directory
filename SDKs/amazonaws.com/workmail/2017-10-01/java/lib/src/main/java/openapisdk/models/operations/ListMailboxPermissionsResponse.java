package openapisdk.models.operations;



public class ListMailboxPermissionsResponse {
    public String contentType;
    public ListMailboxPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public ListMailboxPermissionsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidParameterException;
    public ListMailboxPermissionsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListMailboxPermissionsResponse listMailboxPermissionsResponse;
    public ListMailboxPermissionsResponse withListMailboxPermissionsResponse(openapisdk.models.shared.ListMailboxPermissionsResponse listMailboxPermissionsResponse) {
        this.listMailboxPermissionsResponse = listMailboxPermissionsResponse;
        return this;
    }
    public Object organizationNotFoundException;
    public ListMailboxPermissionsResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public ListMailboxPermissionsResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public ListMailboxPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}