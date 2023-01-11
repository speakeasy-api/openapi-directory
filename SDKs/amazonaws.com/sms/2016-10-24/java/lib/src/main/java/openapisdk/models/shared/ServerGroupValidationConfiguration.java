package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServerGroupValidationConfiguration
 * Configuration for validating an instance.
**/
public class ServerGroupValidationConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverGroupId")
    public String serverGroupId;
    public ServerGroupValidationConfiguration withServerGroupId(String serverGroupId) {
        this.serverGroupId = serverGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverValidationConfigurations")
    public ServerValidationConfiguration[] serverValidationConfigurations;
    public ServerGroupValidationConfiguration withServerValidationConfigurations(ServerValidationConfiguration[] serverValidationConfigurations) {
        this.serverValidationConfigurations = serverValidationConfigurations;
        return this;
    }
}