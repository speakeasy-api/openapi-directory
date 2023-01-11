package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TelemetryConfiguration
 * Configuration settings for running telemetry.
**/
public class TelemetryConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationSyncStatus")
    public ConfigurationSyncStatusEnum configurationSyncStatus;
    public TelemetryConfiguration withConfigurationSyncStatus(ConfigurationSyncStatusEnum configurationSyncStatus) {
        this.configurationSyncStatus = configurationSyncStatus;
        return this;
    }
    @JsonProperty("Telemetry")
    public TelemetryEnum telemetry;
    public TelemetryConfiguration withTelemetry(TelemetryEnum telemetry) {
        this.telemetry = telemetry;
        return this;
    }
}