package openapisdk.models.operations;



public class DeleteResourceResponse {
    public String contentType;
    public DeleteResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteResourceResponse;
    public DeleteResourceResponse withDeleteResourceResponse(java.util.Map<String, Object> deleteResourceResponse) {
        this.deleteResourceResponse = deleteResourceResponse;
        return this;
    }
    public Object entityStateException;
    public DeleteResourceResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteResourceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public DeleteResourceResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public DeleteResourceResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public DeleteResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}