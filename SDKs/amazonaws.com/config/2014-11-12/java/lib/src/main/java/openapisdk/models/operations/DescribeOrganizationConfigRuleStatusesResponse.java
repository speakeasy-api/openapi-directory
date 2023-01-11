package openapisdk.models.operations;



public class DescribeOrganizationConfigRuleStatusesResponse {
    public String contentType;
    public DescribeOrganizationConfigRuleStatusesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeOrganizationConfigRuleStatusesResponse describeOrganizationConfigRuleStatusesResponse;
    public DescribeOrganizationConfigRuleStatusesResponse withDescribeOrganizationConfigRuleStatusesResponse(openapisdk.models.shared.DescribeOrganizationConfigRuleStatusesResponse describeOrganizationConfigRuleStatusesResponse) {
        this.describeOrganizationConfigRuleStatusesResponse = describeOrganizationConfigRuleStatusesResponse;
        return this;
    }
    public Object invalidLimitException;
    public DescribeOrganizationConfigRuleStatusesResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeOrganizationConfigRuleStatusesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object noSuchOrganizationConfigRuleException;
    public DescribeOrganizationConfigRuleStatusesResponse withNoSuchOrganizationConfigRuleException(Object noSuchOrganizationConfigRuleException) {
        this.noSuchOrganizationConfigRuleException = noSuchOrganizationConfigRuleException;
        return this;
    }
    public Object organizationAccessDeniedException;
    public DescribeOrganizationConfigRuleStatusesResponse withOrganizationAccessDeniedException(Object organizationAccessDeniedException) {
        this.organizationAccessDeniedException = organizationAccessDeniedException;
        return this;
    }
    public Long statusCode;
    public DescribeOrganizationConfigRuleStatusesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}