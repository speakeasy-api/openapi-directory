package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConfigureAutoImportIntervalRequest
 * The message request to configure the auto import interval
**/
public class ConfigureAutoImportIntervalRequest {
    @JsonProperty("interval")
    public String interval;
    public ConfigureAutoImportIntervalRequest withInterval(String interval) {
        this.interval = interval;
        return this;
    }
}