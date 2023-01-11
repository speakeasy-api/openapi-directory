package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentVersion
 * Describes an agent version.
**/
public class AgentVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationManager")
    public StackConfigurationManager configurationManager;
    public AgentVersion withConfigurationManager(StackConfigurationManager configurationManager) {
        this.configurationManager = configurationManager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public AgentVersion withVersion(String version) {
        this.version = version;
        return this;
    }
}