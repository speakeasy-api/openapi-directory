package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Stage
 * A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
**/
public class Stage {
    @JsonProperty("DurationInMinutes")
    public Long durationInMinutes;
    public Stage withDurationInMinutes(Long durationInMinutes) {
        this.durationInMinutes = durationInMinutes;
        return this;
    }
    @JsonProperty("Targets")
    public Target[] targets;
    public Stage withTargets(Target[] targets) {
        this.targets = targets;
        return this;
    }
}