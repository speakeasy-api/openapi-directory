package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * CreateConfigurationSetRequestBodyReputationOptions
 * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. 
**/
public class CreateConfigurationSetRequestBodyReputationOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastFreshStart")
    public OffsetDateTime lastFreshStart;
    public CreateConfigurationSetRequestBodyReputationOptions withLastFreshStart(OffsetDateTime lastFreshStart) {
        this.lastFreshStart = lastFreshStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReputationMetricsEnabled")
    public Boolean reputationMetricsEnabled;
    public CreateConfigurationSetRequestBodyReputationOptions withReputationMetricsEnabled(Boolean reputationMetricsEnabled) {
        this.reputationMetricsEnabled = reputationMetricsEnabled;
        return this;
    }
}