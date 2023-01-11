package openapisdk.models.operations;



public class DeleteOrganizationConformancePackResponse {
    public String contentType;
    public DeleteOrganizationConformancePackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object noSuchOrganizationConformancePackException;
    public DeleteOrganizationConformancePackResponse withNoSuchOrganizationConformancePackException(Object noSuchOrganizationConformancePackException) {
        this.noSuchOrganizationConformancePackException = noSuchOrganizationConformancePackException;
        return this;
    }
    public Object organizationAccessDeniedException;
    public DeleteOrganizationConformancePackResponse withOrganizationAccessDeniedException(Object organizationAccessDeniedException) {
        this.organizationAccessDeniedException = organizationAccessDeniedException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteOrganizationConformancePackResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public DeleteOrganizationConformancePackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}