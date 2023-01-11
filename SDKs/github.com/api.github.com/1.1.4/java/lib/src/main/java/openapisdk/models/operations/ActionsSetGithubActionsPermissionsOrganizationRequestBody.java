package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionsSetGithubActionsPermissionsOrganizationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_actions")
    public openapisdk.models.shared.AllowedActionsEnum allowedActions;
    public ActionsSetGithubActionsPermissionsOrganizationRequestBody withAllowedActions(openapisdk.models.shared.AllowedActionsEnum allowedActions) {
        this.allowedActions = allowedActions;
        return this;
    }
    @JsonProperty("enabled_repositories")
    public openapisdk.models.shared.EnabledRepositoriesEnum enabledRepositories;
    public ActionsSetGithubActionsPermissionsOrganizationRequestBody withEnabledRepositories(openapisdk.models.shared.EnabledRepositoriesEnum enabledRepositories) {
        this.enabledRepositories = enabledRepositories;
        return this;
    }
}