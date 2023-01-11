package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateImageRecipeRequestBodyAdditionalInstanceConfiguration
 * In addition to your infrastruction configuration, these settings provide an extra layer of control over your build instances. For instances where Image Builder installs the SSM agent, you can choose whether to keep it for the AMI that you create. You can also specify commands to run on launch for all of your build instances.
**/
public class CreateImageRecipeRequestBodyAdditionalInstanceConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systemsManagerAgent")
    public openapisdk.models.shared.SystemsManagerAgent systemsManagerAgent;
    public CreateImageRecipeRequestBodyAdditionalInstanceConfiguration withSystemsManagerAgent(openapisdk.models.shared.SystemsManagerAgent systemsManagerAgent) {
        this.systemsManagerAgent = systemsManagerAgent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userDataOverride")
    public String userDataOverride;
    public CreateImageRecipeRequestBodyAdditionalInstanceConfiguration withUserDataOverride(String userDataOverride) {
        this.userDataOverride = userDataOverride;
        return this;
    }
}