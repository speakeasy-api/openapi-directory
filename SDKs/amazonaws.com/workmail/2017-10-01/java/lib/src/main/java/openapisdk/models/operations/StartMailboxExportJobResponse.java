package openapisdk.models.operations;



public class StartMailboxExportJobResponse {
    public String contentType;
    public StartMailboxExportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public StartMailboxExportJobResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidParameterException;
    public StartMailboxExportJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public StartMailboxExportJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object organizationNotFoundException;
    public StartMailboxExportJobResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public StartMailboxExportJobResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public openapisdk.models.shared.StartMailboxExportJobResponse startMailboxExportJobResponse;
    public StartMailboxExportJobResponse withStartMailboxExportJobResponse(openapisdk.models.shared.StartMailboxExportJobResponse startMailboxExportJobResponse) {
        this.startMailboxExportJobResponse = startMailboxExportJobResponse;
        return this;
    }
    public Long statusCode;
    public StartMailboxExportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}