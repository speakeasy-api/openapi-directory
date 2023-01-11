package openapisdk.models.operations;



public class ListMailboxExportJobsResponse {
    public String contentType;
    public ListMailboxExportJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListMailboxExportJobsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListMailboxExportJobsResponse listMailboxExportJobsResponse;
    public ListMailboxExportJobsResponse withListMailboxExportJobsResponse(openapisdk.models.shared.ListMailboxExportJobsResponse listMailboxExportJobsResponse) {
        this.listMailboxExportJobsResponse = listMailboxExportJobsResponse;
        return this;
    }
    public Object organizationNotFoundException;
    public ListMailboxExportJobsResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public ListMailboxExportJobsResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public ListMailboxExportJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}