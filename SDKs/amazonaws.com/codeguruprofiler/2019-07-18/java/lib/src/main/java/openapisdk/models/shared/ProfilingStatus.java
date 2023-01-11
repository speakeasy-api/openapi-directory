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
 * ProfilingStatus
 *  Profiling status includes information about the last time a profile agent pinged back, the last time a profile was received, and the aggregation period and start time for the most recent aggregated profile. 
**/
public class ProfilingStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("latestAgentOrchestratedAt")
    public OffsetDateTime latestAgentOrchestratedAt;
    public ProfilingStatus withLatestAgentOrchestratedAt(OffsetDateTime latestAgentOrchestratedAt) {
        this.latestAgentOrchestratedAt = latestAgentOrchestratedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("latestAgentProfileReportedAt")
    public OffsetDateTime latestAgentProfileReportedAt;
    public ProfilingStatus withLatestAgentProfileReportedAt(OffsetDateTime latestAgentProfileReportedAt) {
        this.latestAgentProfileReportedAt = latestAgentProfileReportedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestAggregatedProfile")
    public AggregatedProfileTime latestAggregatedProfile;
    public ProfilingStatus withLatestAggregatedProfile(AggregatedProfileTime latestAggregatedProfile) {
        this.latestAggregatedProfile = latestAggregatedProfile;
        return this;
    }
}