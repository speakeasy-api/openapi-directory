package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CodeConfigurationValues
 * Describes the basic configuration needed for building and running an AWS App Runner service. This type doesn't support the full set of possible configuration options. Fur full configuration capabilities, use a <code>apprunner.yaml</code> file in the source code repository.
**/
public class CodeConfigurationValues {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BuildCommand")
    public String buildCommand;
    public CodeConfigurationValues withBuildCommand(String buildCommand) {
        this.buildCommand = buildCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public String port;
    public CodeConfigurationValues withPort(String port) {
        this.port = port;
        return this;
    }
    @JsonProperty("Runtime")
    public RuntimeEnum runtime;
    public CodeConfigurationValues withRuntime(RuntimeEnum runtime) {
        this.runtime = runtime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuntimeEnvironmentVariables")
    public java.util.Map<String, String> runtimeEnvironmentVariables;
    public CodeConfigurationValues withRuntimeEnvironmentVariables(java.util.Map<String, String> runtimeEnvironmentVariables) {
        this.runtimeEnvironmentVariables = runtimeEnvironmentVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartCommand")
    public String startCommand;
    public CodeConfigurationValues withStartCommand(String startCommand) {
        this.startCommand = startCommand;
        return this;
    }
}