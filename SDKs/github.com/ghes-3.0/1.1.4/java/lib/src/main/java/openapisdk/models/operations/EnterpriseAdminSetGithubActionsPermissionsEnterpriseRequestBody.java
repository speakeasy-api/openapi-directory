package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_actions")
    public openapisdk.models.shared.AllowedActionsEnum allowedActions;
    public EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody withAllowedActions(openapisdk.models.shared.AllowedActionsEnum allowedActions) {
        this.allowedActions = allowedActions;
        return this;
    }
    @JsonProperty("enabled_organizations")
    public openapisdk.models.shared.EnabledOrganizationsEnum enabledOrganizations;
    public EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody withEnabledOrganizations(openapisdk.models.shared.EnabledOrganizationsEnum enabledOrganizations) {
        this.enabledOrganizations = enabledOrganizations;
        return this;
    }
}