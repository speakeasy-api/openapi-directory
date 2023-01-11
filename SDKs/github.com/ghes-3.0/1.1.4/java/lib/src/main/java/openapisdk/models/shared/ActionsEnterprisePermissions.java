package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionsEnterprisePermissions {
    @JsonProperty("allowed_actions")
    public AllowedActionsEnum allowedActions;
    public ActionsEnterprisePermissions withAllowedActions(AllowedActionsEnum allowedActions) {
        this.allowedActions = allowedActions;
        return this;
    }
    @JsonProperty("enabled_organizations")
    public EnabledOrganizationsEnum enabledOrganizations;
    public ActionsEnterprisePermissions withEnabledOrganizations(EnabledOrganizationsEnum enabledOrganizations) {
        this.enabledOrganizations = enabledOrganizations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selected_actions_url")
    public String selectedActionsUrl;
    public ActionsEnterprisePermissions withSelectedActionsUrl(String selectedActionsUrl) {
        this.selectedActionsUrl = selectedActionsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selected_organizations_url")
    public String selectedOrganizationsUrl;
    public ActionsEnterprisePermissions withSelectedOrganizationsUrl(String selectedOrganizationsUrl) {
        this.selectedOrganizationsUrl = selectedOrganizationsUrl;
        return this;
    }
}