package openapisdk.models.operations;



public class CreateResourceResponse {
    public String contentType;
    public CreateResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateResourceResponse createResourceResponse;
    public CreateResourceResponse withCreateResourceResponse(openapisdk.models.shared.CreateResourceResponse createResourceResponse) {
        this.createResourceResponse = createResourceResponse;
        return this;
    }
    public Object directoryServiceAuthenticationFailedException;
    public CreateResourceResponse withDirectoryServiceAuthenticationFailedException(Object directoryServiceAuthenticationFailedException) {
        this.directoryServiceAuthenticationFailedException = directoryServiceAuthenticationFailedException;
        return this;
    }
    public Object directoryUnavailableException;
    public CreateResourceResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object invalidParameterException;
    public CreateResourceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object nameAvailabilityException;
    public CreateResourceResponse withNameAvailabilityException(Object nameAvailabilityException) {
        this.nameAvailabilityException = nameAvailabilityException;
        return this;
    }
    public Object organizationNotFoundException;
    public CreateResourceResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public CreateResourceResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Object reservedNameException;
    public CreateResourceResponse withReservedNameException(Object reservedNameException) {
        this.reservedNameException = reservedNameException;
        return this;
    }
    public Long statusCode;
    public CreateResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}