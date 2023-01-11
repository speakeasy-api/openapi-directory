package openapisdk.models.operations;



public class DescribeOrganizationConformancePackStatusesResponse {
    public String contentType;
    public DescribeOrganizationConformancePackStatusesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeOrganizationConformancePackStatusesResponse describeOrganizationConformancePackStatusesResponse;
    public DescribeOrganizationConformancePackStatusesResponse withDescribeOrganizationConformancePackStatusesResponse(openapisdk.models.shared.DescribeOrganizationConformancePackStatusesResponse describeOrganizationConformancePackStatusesResponse) {
        this.describeOrganizationConformancePackStatusesResponse = describeOrganizationConformancePackStatusesResponse;
        return this;
    }
    public Object invalidLimitException;
    public DescribeOrganizationConformancePackStatusesResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeOrganizationConformancePackStatusesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object noSuchOrganizationConformancePackException;
    public DescribeOrganizationConformancePackStatusesResponse withNoSuchOrganizationConformancePackException(Object noSuchOrganizationConformancePackException) {
        this.noSuchOrganizationConformancePackException = noSuchOrganizationConformancePackException;
        return this;
    }
    public Object organizationAccessDeniedException;
    public DescribeOrganizationConformancePackStatusesResponse withOrganizationAccessDeniedException(Object organizationAccessDeniedException) {
        this.organizationAccessDeniedException = organizationAccessDeniedException;
        return this;
    }
    public Long statusCode;
    public DescribeOrganizationConformancePackStatusesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}