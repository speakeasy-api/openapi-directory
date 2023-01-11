package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutRetentionConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetentionConfiguration")
    public RetentionConfiguration retentionConfiguration;
    public PutRetentionConfigurationResponse withRetentionConfiguration(RetentionConfiguration retentionConfiguration) {
        this.retentionConfiguration = retentionConfiguration;
        return this;
    }
}