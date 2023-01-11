package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody {
    @JsonProperty("selected_organization_ids")
    public Long[] selectedOrganizationIds;
    public EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody withSelectedOrganizationIds(Long[] selectedOrganizationIds) {
        this.selectedOrganizationIds = selectedOrganizationIds;
        return this;
    }
}