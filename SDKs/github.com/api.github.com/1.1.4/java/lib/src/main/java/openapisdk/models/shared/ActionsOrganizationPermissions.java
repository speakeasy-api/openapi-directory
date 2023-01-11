package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionsOrganizationPermissions {
    @JsonProperty("allowed_actions")
    public AllowedActionsEnum allowedActions;
    public ActionsOrganizationPermissions withAllowedActions(AllowedActionsEnum allowedActions) {
        this.allowedActions = allowedActions;
        return this;
    }
    @JsonProperty("enabled_repositories")
    public EnabledRepositoriesEnum enabledRepositories;
    public ActionsOrganizationPermissions withEnabledRepositories(EnabledRepositoriesEnum enabledRepositories) {
        this.enabledRepositories = enabledRepositories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selected_actions_url")
    public String selectedActionsUrl;
    public ActionsOrganizationPermissions withSelectedActionsUrl(String selectedActionsUrl) {
        this.selectedActionsUrl = selectedActionsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selected_repositories_url")
    public String selectedRepositoriesUrl;
    public ActionsOrganizationPermissions withSelectedRepositoriesUrl(String selectedRepositoriesUrl) {
        this.selectedRepositoriesUrl = selectedRepositoriesUrl;
        return this;
    }
}