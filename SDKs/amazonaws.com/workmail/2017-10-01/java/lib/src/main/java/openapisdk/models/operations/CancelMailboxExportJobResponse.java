package openapisdk.models.operations;



public class CancelMailboxExportJobResponse {
    public java.util.Map<String, Object> cancelMailboxExportJobResponse;
    public CancelMailboxExportJobResponse withCancelMailboxExportJobResponse(java.util.Map<String, Object> cancelMailboxExportJobResponse) {
        this.cancelMailboxExportJobResponse = cancelMailboxExportJobResponse;
        return this;
    }
    public String contentType;
    public CancelMailboxExportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public CancelMailboxExportJobResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidParameterException;
    public CancelMailboxExportJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public CancelMailboxExportJobResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public CancelMailboxExportJobResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public CancelMailboxExportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}