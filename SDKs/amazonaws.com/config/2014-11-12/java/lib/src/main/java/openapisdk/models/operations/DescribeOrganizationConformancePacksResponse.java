package openapisdk.models.operations;



public class DescribeOrganizationConformancePacksResponse {
    public String contentType;
    public DescribeOrganizationConformancePacksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeOrganizationConformancePacksResponse describeOrganizationConformancePacksResponse;
    public DescribeOrganizationConformancePacksResponse withDescribeOrganizationConformancePacksResponse(openapisdk.models.shared.DescribeOrganizationConformancePacksResponse describeOrganizationConformancePacksResponse) {
        this.describeOrganizationConformancePacksResponse = describeOrganizationConformancePacksResponse;
        return this;
    }
    public Object invalidLimitException;
    public DescribeOrganizationConformancePacksResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeOrganizationConformancePacksResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object noSuchOrganizationConformancePackException;
    public DescribeOrganizationConformancePacksResponse withNoSuchOrganizationConformancePackException(Object noSuchOrganizationConformancePackException) {
        this.noSuchOrganizationConformancePackException = noSuchOrganizationConformancePackException;
        return this;
    }
    public Object organizationAccessDeniedException;
    public DescribeOrganizationConformancePacksResponse withOrganizationAccessDeniedException(Object organizationAccessDeniedException) {
        this.organizationAccessDeniedException = organizationAccessDeniedException;
        return this;
    }
    public Long statusCode;
    public DescribeOrganizationConformancePacksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}