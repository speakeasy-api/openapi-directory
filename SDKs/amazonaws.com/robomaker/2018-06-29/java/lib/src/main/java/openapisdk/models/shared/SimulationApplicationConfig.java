package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SimulationApplicationConfig
 * Information about a simulation application configuration.
**/
public class SimulationApplicationConfig {
    @JsonProperty("application")
    public String application;
    public SimulationApplicationConfig withApplication(String application) {
        this.application = application;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationVersion")
    public String applicationVersion;
    public SimulationApplicationConfig withApplicationVersion(String applicationVersion) {
        this.applicationVersion = applicationVersion;
        return this;
    }
    @JsonProperty("launchConfig")
    public LaunchConfig launchConfig;
    public SimulationApplicationConfig withLaunchConfig(LaunchConfig launchConfig) {
        this.launchConfig = launchConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tools")
    public Tool[] tools;
    public SimulationApplicationConfig withTools(Tool[] tools) {
        this.tools = tools;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadConfigurations")
    public UploadConfiguration[] uploadConfigurations;
    public SimulationApplicationConfig withUploadConfigurations(UploadConfiguration[] uploadConfigurations) {
        this.uploadConfigurations = uploadConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useDefaultTools")
    public Boolean useDefaultTools;
    public SimulationApplicationConfig withUseDefaultTools(Boolean useDefaultTools) {
        this.useDefaultTools = useDefaultTools;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useDefaultUploadConfigurations")
    public Boolean useDefaultUploadConfigurations;
    public SimulationApplicationConfig withUseDefaultUploadConfigurations(Boolean useDefaultUploadConfigurations) {
        this.useDefaultUploadConfigurations = useDefaultUploadConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("worldConfigs")
    public WorldConfig[] worldConfigs;
    public SimulationApplicationConfig withWorldConfigs(WorldConfig[] worldConfigs) {
        this.worldConfigs = worldConfigs;
        return this;
    }
}