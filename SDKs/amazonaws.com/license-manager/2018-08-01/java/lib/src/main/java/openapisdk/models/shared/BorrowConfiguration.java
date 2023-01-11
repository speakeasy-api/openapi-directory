package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BorrowConfiguration
 * Details about a borrow configuration.
**/
public class BorrowConfiguration {
    @JsonProperty("AllowEarlyCheckIn")
    public Boolean allowEarlyCheckIn;
    public BorrowConfiguration withAllowEarlyCheckIn(Boolean allowEarlyCheckIn) {
        this.allowEarlyCheckIn = allowEarlyCheckIn;
        return this;
    }
    @JsonProperty("MaxTimeToLiveInMinutes")
    public Long maxTimeToLiveInMinutes;
    public BorrowConfiguration withMaxTimeToLiveInMinutes(Long maxTimeToLiveInMinutes) {
        this.maxTimeToLiveInMinutes = maxTimeToLiveInMinutes;
        return this;
    }
}