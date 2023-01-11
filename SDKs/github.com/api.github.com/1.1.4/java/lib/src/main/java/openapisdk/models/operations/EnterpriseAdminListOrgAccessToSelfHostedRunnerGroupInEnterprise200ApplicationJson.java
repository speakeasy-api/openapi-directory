package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson {
    @JsonProperty("organizations")
    public openapisdk.models.shared.OrganizationSimple[] organizations;
    public EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson withOrganizations(openapisdk.models.shared.OrganizationSimple[] organizations) {
        this.organizations = organizations;
        return this;
    }
    @JsonProperty("total_count")
    public Double totalCount;
    public EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson withTotalCount(Double totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}