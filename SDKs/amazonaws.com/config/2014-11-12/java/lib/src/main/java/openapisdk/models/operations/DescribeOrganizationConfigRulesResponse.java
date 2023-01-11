package openapisdk.models.operations;



public class DescribeOrganizationConfigRulesResponse {
    public String contentType;
    public DescribeOrganizationConfigRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeOrganizationConfigRulesResponse describeOrganizationConfigRulesResponse;
    public DescribeOrganizationConfigRulesResponse withDescribeOrganizationConfigRulesResponse(openapisdk.models.shared.DescribeOrganizationConfigRulesResponse describeOrganizationConfigRulesResponse) {
        this.describeOrganizationConfigRulesResponse = describeOrganizationConfigRulesResponse;
        return this;
    }
    public Object invalidLimitException;
    public DescribeOrganizationConfigRulesResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeOrganizationConfigRulesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object noSuchOrganizationConfigRuleException;
    public DescribeOrganizationConfigRulesResponse withNoSuchOrganizationConfigRuleException(Object noSuchOrganizationConfigRuleException) {
        this.noSuchOrganizationConfigRuleException = noSuchOrganizationConfigRuleException;
        return this;
    }
    public Object organizationAccessDeniedException;
    public DescribeOrganizationConfigRulesResponse withOrganizationAccessDeniedException(Object organizationAccessDeniedException) {
        this.organizationAccessDeniedException = organizationAccessDeniedException;
        return this;
    }
    public Long statusCode;
    public DescribeOrganizationConfigRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}