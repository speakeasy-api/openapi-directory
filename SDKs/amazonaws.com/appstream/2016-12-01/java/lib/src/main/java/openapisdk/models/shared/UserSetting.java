package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserSetting
 * Describes an action and whether the action is enabled or disabled for users during their streaming sessions.
**/
public class UserSetting {
    @JsonProperty("Action")
    public ActionEnum action;
    public UserSetting withAction(ActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("Permission")
    public PermissionEnum permission;
    public UserSetting withPermission(PermissionEnum permission) {
        this.permission = permission;
        return this;
    }
}