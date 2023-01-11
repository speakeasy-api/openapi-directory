package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutRetentionConfigurationRequest {
    @JsonProperty("RetentionPeriodInDays")
    public Long retentionPeriodInDays;
    public PutRetentionConfigurationRequest withRetentionPeriodInDays(Long retentionPeriodInDays) {
        this.retentionPeriodInDays = retentionPeriodInDays;
        return this;
    }
}