package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageConfiguration
 * Describes the configuration that AWS App Runner uses to run an App Runner service using an image pulled from a source image repository.
**/
public class ImageConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public String port;
    public ImageConfiguration withPort(String port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuntimeEnvironmentVariables")
    public java.util.Map<String, String> runtimeEnvironmentVariables;
    public ImageConfiguration withRuntimeEnvironmentVariables(java.util.Map<String, String> runtimeEnvironmentVariables) {
        this.runtimeEnvironmentVariables = runtimeEnvironmentVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartCommand")
    public String startCommand;
    public ImageConfiguration withStartCommand(String startCommand) {
        this.startCommand = startCommand;
        return this;
    }
}