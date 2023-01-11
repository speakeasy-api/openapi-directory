package openapisdk.models.operations;



public class GetOrganizationConfigRuleDetailedStatusResponse {
    public String contentType;
    public GetOrganizationConfigRuleDetailedStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOrganizationConfigRuleDetailedStatusResponse getOrganizationConfigRuleDetailedStatusResponse;
    public GetOrganizationConfigRuleDetailedStatusResponse withGetOrganizationConfigRuleDetailedStatusResponse(openapisdk.models.shared.GetOrganizationConfigRuleDetailedStatusResponse getOrganizationConfigRuleDetailedStatusResponse) {
        this.getOrganizationConfigRuleDetailedStatusResponse = getOrganizationConfigRuleDetailedStatusResponse;
        return this;
    }
    public Object invalidLimitException;
    public GetOrganizationConfigRuleDetailedStatusResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public GetOrganizationConfigRuleDetailedStatusResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object noSuchOrganizationConfigRuleException;
    public GetOrganizationConfigRuleDetailedStatusResponse withNoSuchOrganizationConfigRuleException(Object noSuchOrganizationConfigRuleException) {
        this.noSuchOrganizationConfigRuleException = noSuchOrganizationConfigRuleException;
        return this;
    }
    public Object organizationAccessDeniedException;
    public GetOrganizationConfigRuleDetailedStatusResponse withOrganizationAccessDeniedException(Object organizationAccessDeniedException) {
        this.organizationAccessDeniedException = organizationAccessDeniedException;
        return this;
    }
    public Long statusCode;
    public GetOrganizationConfigRuleDetailedStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}