package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RetentionConfiguration
 * An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in Config.
**/
public class RetentionConfiguration {
    @JsonProperty("Name")
    public String name;
    public RetentionConfiguration withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RetentionPeriodInDays")
    public Long retentionPeriodInDays;
    public RetentionConfiguration withRetentionPeriodInDays(Long retentionPeriodInDays) {
        this.retentionPeriodInDays = retentionPeriodInDays;
        return this;
    }
}