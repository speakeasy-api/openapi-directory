package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAppValidationConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appValidationConfigurations")
    public AppValidationConfiguration[] appValidationConfigurations;
    public GetAppValidationConfigurationResponse withAppValidationConfigurations(AppValidationConfiguration[] appValidationConfigurations) {
        this.appValidationConfigurations = appValidationConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverGroupValidationConfigurations")
    public ServerGroupValidationConfiguration[] serverGroupValidationConfigurations;
    public GetAppValidationConfigurationResponse withServerGroupValidationConfigurations(ServerGroupValidationConfiguration[] serverGroupValidationConfigurations) {
        this.serverGroupValidationConfigurations = serverGroupValidationConfigurations;
        return this;
    }
}