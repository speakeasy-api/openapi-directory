package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAppLaunchConfigurationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public PutAppLaunchConfigurationRequest withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoLaunch")
    public Boolean autoLaunch;
    public PutAppLaunchConfigurationRequest withAutoLaunch(Boolean autoLaunch) {
        this.autoLaunch = autoLaunch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleName")
    public String roleName;
    public PutAppLaunchConfigurationRequest withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverGroupLaunchConfigurations")
    public ServerGroupLaunchConfiguration[] serverGroupLaunchConfigurations;
    public PutAppLaunchConfigurationRequest withServerGroupLaunchConfigurations(ServerGroupLaunchConfiguration[] serverGroupLaunchConfigurations) {
        this.serverGroupLaunchConfigurations = serverGroupLaunchConfigurations;
        return this;
    }
}