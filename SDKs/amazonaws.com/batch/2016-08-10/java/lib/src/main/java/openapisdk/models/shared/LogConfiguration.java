package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LogConfiguration
 * Log configuration options to send to a custom log driver for the container.
**/
public class LogConfiguration {
    @JsonProperty("logDriver")
    public LogDriverEnum logDriver;
    public LogConfiguration withLogDriver(LogDriverEnum logDriver) {
        this.logDriver = logDriver;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public java.util.Map<String, String> options;
    public LogConfiguration withOptions(java.util.Map<String, String> options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretOptions")
    public Secret[] secretOptions;
    public LogConfiguration withSecretOptions(Secret[] secretOptions) {
        this.secretOptions = secretOptions;
        return this;
    }
}