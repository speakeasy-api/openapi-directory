package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdditionalInstanceConfiguration
 * In addition to your infrastruction configuration, these settings provide an extra layer of control over your build instances. For instances where Image Builder installs the SSM agent, you can choose whether to keep it for the AMI that you create. You can also specify commands to run on launch for all of your build instances.
**/
public class AdditionalInstanceConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systemsManagerAgent")
    public SystemsManagerAgent systemsManagerAgent;
    public AdditionalInstanceConfiguration withSystemsManagerAgent(SystemsManagerAgent systemsManagerAgent) {
        this.systemsManagerAgent = systemsManagerAgent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userDataOverride")
    public String userDataOverride;
    public AdditionalInstanceConfiguration withUserDataOverride(String userDataOverride) {
        this.userDataOverride = userDataOverride;
        return this;
    }
}