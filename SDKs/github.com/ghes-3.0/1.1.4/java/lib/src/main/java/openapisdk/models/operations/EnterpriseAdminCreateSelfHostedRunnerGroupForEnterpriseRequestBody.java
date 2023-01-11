package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody {
    @JsonProperty("name")
    public String name;
    public EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runners")
    public Long[] runners;
    public EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody withRunners(Long[] runners) {
        this.runners = runners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selected_organization_ids")
    public Long[] selectedOrganizationIds;
    public EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody withSelectedOrganizationIds(Long[] selectedOrganizationIds) {
        this.selectedOrganizationIds = selectedOrganizationIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum visibility;
    public EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody withVisibility(EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}