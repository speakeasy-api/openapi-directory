package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionsRepositoryPermissions {
    @JsonProperty("allowed_actions")
    public AllowedActionsEnum allowedActions;
    public ActionsRepositoryPermissions withAllowedActions(AllowedActionsEnum allowedActions) {
        this.allowedActions = allowedActions;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public ActionsRepositoryPermissions withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selected_actions_url")
    public String selectedActionsUrl;
    public ActionsRepositoryPermissions withSelectedActionsUrl(String selectedActionsUrl) {
        this.selectedActionsUrl = selectedActionsUrl;
        return this;
    }
}