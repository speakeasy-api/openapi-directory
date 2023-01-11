package openapisdk.models.operations;



public class DescribeMailboxExportJobResponse {
    public String contentType;
    public DescribeMailboxExportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeMailboxExportJobResponse describeMailboxExportJobResponse;
    public DescribeMailboxExportJobResponse withDescribeMailboxExportJobResponse(openapisdk.models.shared.DescribeMailboxExportJobResponse describeMailboxExportJobResponse) {
        this.describeMailboxExportJobResponse = describeMailboxExportJobResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DescribeMailboxExportJobResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeMailboxExportJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public DescribeMailboxExportJobResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public DescribeMailboxExportJobResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public DescribeMailboxExportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}