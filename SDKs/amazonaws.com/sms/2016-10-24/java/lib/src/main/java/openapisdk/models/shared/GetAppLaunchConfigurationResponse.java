package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAppLaunchConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public GetAppLaunchConfigurationResponse withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoLaunch")
    public Boolean autoLaunch;
    public GetAppLaunchConfigurationResponse withAutoLaunch(Boolean autoLaunch) {
        this.autoLaunch = autoLaunch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleName")
    public String roleName;
    public GetAppLaunchConfigurationResponse withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverGroupLaunchConfigurations")
    public ServerGroupLaunchConfiguration[] serverGroupLaunchConfigurations;
    public GetAppLaunchConfigurationResponse withServerGroupLaunchConfigurations(ServerGroupLaunchConfiguration[] serverGroupLaunchConfigurations) {
        this.serverGroupLaunchConfigurations = serverGroupLaunchConfigurations;
        return this;
    }
}