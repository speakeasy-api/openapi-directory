package openapisdk.models.operations;



public class DeregisterFromWorkMailResponse {
    public String contentType;
    public DeregisterFromWorkMailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deregisterFromWorkMailResponse;
    public DeregisterFromWorkMailResponse withDeregisterFromWorkMailResponse(java.util.Map<String, Object> deregisterFromWorkMailResponse) {
        this.deregisterFromWorkMailResponse = deregisterFromWorkMailResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeregisterFromWorkMailResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object entityStateException;
    public DeregisterFromWorkMailResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public DeregisterFromWorkMailResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public DeregisterFromWorkMailResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public DeregisterFromWorkMailResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public DeregisterFromWorkMailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}