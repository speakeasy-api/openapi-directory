package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAppValidationConfigurationRequest {
    @JsonProperty("appId")
    public String appId;
    public PutAppValidationConfigurationRequest withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appValidationConfigurations")
    public AppValidationConfiguration[] appValidationConfigurations;
    public PutAppValidationConfigurationRequest withAppValidationConfigurations(AppValidationConfiguration[] appValidationConfigurations) {
        this.appValidationConfigurations = appValidationConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverGroupValidationConfigurations")
    public ServerGroupValidationConfiguration[] serverGroupValidationConfigurations;
    public PutAppValidationConfigurationRequest withServerGroupValidationConfigurations(ServerGroupValidationConfiguration[] serverGroupValidationConfigurations) {
        this.serverGroupValidationConfigurations = serverGroupValidationConfigurations;
        return this;
    }
}