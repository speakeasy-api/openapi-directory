package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LaunchConfig
 * Information about a launch configuration.
**/
public class LaunchConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentVariables")
    public java.util.Map<String, String> environmentVariables;
    public LaunchConfig withEnvironmentVariables(java.util.Map<String, String> environmentVariables) {
        this.environmentVariables = environmentVariables;
        return this;
    }
    @JsonProperty("launchFile")
    public String launchFile;
    public LaunchConfig withLaunchFile(String launchFile) {
        this.launchFile = launchFile;
        return this;
    }
    @JsonProperty("packageName")
    public String packageName;
    public LaunchConfig withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portForwardingConfig")
    public PortForwardingConfig portForwardingConfig;
    public LaunchConfig withPortForwardingConfig(PortForwardingConfig portForwardingConfig) {
        this.portForwardingConfig = portForwardingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamUI")
    public Boolean streamUI;
    public LaunchConfig withStreamUi(Boolean streamUI) {
        this.streamUI = streamUI;
        return this;
    }
}