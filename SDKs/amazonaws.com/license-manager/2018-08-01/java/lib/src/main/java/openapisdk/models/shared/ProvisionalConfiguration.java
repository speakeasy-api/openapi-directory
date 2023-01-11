package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProvisionalConfiguration
 * Details about a provisional configuration.
**/
public class ProvisionalConfiguration {
    @JsonProperty("MaxTimeToLiveInMinutes")
    public Long maxTimeToLiveInMinutes;
    public ProvisionalConfiguration withMaxTimeToLiveInMinutes(Long maxTimeToLiveInMinutes) {
        this.maxTimeToLiveInMinutes = maxTimeToLiveInMinutes;
        return this;
    }
}