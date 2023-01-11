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
 * BuildPhase
 * Information about a stage for a build.
**/
public class BuildPhase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contexts")
    public PhaseContext[] contexts;
    public BuildPhase withContexts(PhaseContext[] contexts) {
        this.contexts = contexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationInSeconds")
    public Long durationInSeconds;
    public BuildPhase withDurationInSeconds(Long durationInSeconds) {
        this.durationInSeconds = durationInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public BuildPhase withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phaseStatus")
    public StatusTypeEnum phaseStatus;
    public BuildPhase withPhaseStatus(StatusTypeEnum phaseStatus) {
        this.phaseStatus = phaseStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phaseType")
    public BuildPhaseTypeEnum phaseType;
    public BuildPhase withPhaseType(BuildPhaseTypeEnum phaseType) {
        this.phaseType = phaseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public BuildPhase withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}