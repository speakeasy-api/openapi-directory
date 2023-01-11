package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson {
    @JsonProperty("organizations")
    public openapisdk.models.shared.OrganizationSimple[] organizations;
    public EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson withOrganizations(openapisdk.models.shared.OrganizationSimple[] organizations) {
        this.organizations = organizations;
        return this;
    }
    @JsonProperty("total_count")
    public Double totalCount;
    public EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson withTotalCount(Double totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}