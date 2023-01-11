package openapisdk.models.operations;



public class CreateGroupResponse {
    public String contentType;
    public CreateGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateGroupResponse createGroupResponse;
    public CreateGroupResponse withCreateGroupResponse(openapisdk.models.shared.CreateGroupResponse createGroupResponse) {
        this.createGroupResponse = createGroupResponse;
        return this;
    }
    public Object directoryServiceAuthenticationFailedException;
    public CreateGroupResponse withDirectoryServiceAuthenticationFailedException(Object directoryServiceAuthenticationFailedException) {
        this.directoryServiceAuthenticationFailedException = directoryServiceAuthenticationFailedException;
        return this;
    }
    public Object directoryUnavailableException;
    public CreateGroupResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object invalidParameterException;
    public CreateGroupResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object nameAvailabilityException;
    public CreateGroupResponse withNameAvailabilityException(Object nameAvailabilityException) {
        this.nameAvailabilityException = nameAvailabilityException;
        return this;
    }
    public Object organizationNotFoundException;
    public CreateGroupResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public CreateGroupResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Object reservedNameException;
    public CreateGroupResponse withReservedNameException(Object reservedNameException) {
        this.reservedNameException = reservedNameException;
        return this;
    }
    public Long statusCode;
    public CreateGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public CreateGroupResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}