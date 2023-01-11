package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeploymentApplicationConfig
 * Information about a deployment application configuration.
**/
public class DeploymentApplicationConfig {
    @JsonProperty("application")
    public String application;
    public DeploymentApplicationConfig withApplication(String application) {
        this.application = application;
        return this;
    }
    @JsonProperty("applicationVersion")
    public String applicationVersion;
    public DeploymentApplicationConfig withApplicationVersion(String applicationVersion) {
        this.applicationVersion = applicationVersion;
        return this;
    }
    @JsonProperty("launchConfig")
    public DeploymentLaunchConfig launchConfig;
    public DeploymentApplicationConfig withLaunchConfig(DeploymentLaunchConfig launchConfig) {
        this.launchConfig = launchConfig;
        return this;
    }
}