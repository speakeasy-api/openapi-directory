package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ReputationOptions
 * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. 
**/
public class ReputationOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastFreshStart")
    public OffsetDateTime lastFreshStart;
    public ReputationOptions withLastFreshStart(OffsetDateTime lastFreshStart) {
        this.lastFreshStart = lastFreshStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReputationMetricsEnabled")
    public Boolean reputationMetricsEnabled;
    public ReputationOptions withReputationMetricsEnabled(Boolean reputationMetricsEnabled) {
        this.reputationMetricsEnabled = reputationMetricsEnabled;
        return this;
    }
}