package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RetentionProperties
 * Retention properties contain the duration for which your time series data must be stored in the magnetic store and the memory store. 
**/
public class RetentionProperties {
    @JsonProperty("MagneticStoreRetentionPeriodInDays")
    public Long magneticStoreRetentionPeriodInDays;
    public RetentionProperties withMagneticStoreRetentionPeriodInDays(Long magneticStoreRetentionPeriodInDays) {
        this.magneticStoreRetentionPeriodInDays = magneticStoreRetentionPeriodInDays;
        return this;
    }
    @JsonProperty("MemoryStoreRetentionPeriodInHours")
    public Long memoryStoreRetentionPeriodInHours;
    public RetentionProperties withMemoryStoreRetentionPeriodInHours(Long memoryStoreRetentionPeriodInHours) {
        this.memoryStoreRetentionPeriodInHours = memoryStoreRetentionPeriodInHours;
        return this;
    }
}