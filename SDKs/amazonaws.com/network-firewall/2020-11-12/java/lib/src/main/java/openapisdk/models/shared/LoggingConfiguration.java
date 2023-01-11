package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LoggingConfiguration
 * Defines how AWS Network Firewall performs logging for a <a>Firewall</a>. 
**/
public class LoggingConfiguration {
    @JsonProperty("LogDestinationConfigs")
    public LogDestinationConfig[] logDestinationConfigs;
    public LoggingConfiguration withLogDestinationConfigs(LogDestinationConfig[] logDestinationConfigs) {
        this.logDestinationConfigs = logDestinationConfigs;
        return this;
    }
}