package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRetentionConfigurationRequest {
    @JsonProperty("RetentionConfigurationName")
    public String retentionConfigurationName;
    public DeleteRetentionConfigurationRequest withRetentionConfigurationName(String retentionConfigurationName) {
        this.retentionConfigurationName = retentionConfigurationName;
        return this;
    }
}