package openapisdk.models.operations;



public class UpdateResourceResponse {
    public String contentType;
    public UpdateResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryUnavailableException;
    public UpdateResourceResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object emailAddressInUseException;
    public UpdateResourceResponse withEmailAddressInUseException(Object emailAddressInUseException) {
        this.emailAddressInUseException = emailAddressInUseException;
        return this;
    }
    public Object entityNotFoundException;
    public UpdateResourceResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object entityStateException;
    public UpdateResourceResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidConfigurationException;
    public UpdateResourceResponse withInvalidConfigurationException(Object invalidConfigurationException) {
        this.invalidConfigurationException = invalidConfigurationException;
        return this;
    }
    public Object mailDomainNotFoundException;
    public UpdateResourceResponse withMailDomainNotFoundException(Object mailDomainNotFoundException) {
        this.mailDomainNotFoundException = mailDomainNotFoundException;
        return this;
    }
    public Object mailDomainStateException;
    public UpdateResourceResponse withMailDomainStateException(Object mailDomainStateException) {
        this.mailDomainStateException = mailDomainStateException;
        return this;
    }
    public Object nameAvailabilityException;
    public UpdateResourceResponse withNameAvailabilityException(Object nameAvailabilityException) {
        this.nameAvailabilityException = nameAvailabilityException;
        return this;
    }
    public Object organizationNotFoundException;
    public UpdateResourceResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public UpdateResourceResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public UpdateResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateResourceResponse;
    public UpdateResourceResponse withUpdateResourceResponse(java.util.Map<String, Object> updateResourceResponse) {
        this.updateResourceResponse = updateResourceResponse;
        return this;
    }
}