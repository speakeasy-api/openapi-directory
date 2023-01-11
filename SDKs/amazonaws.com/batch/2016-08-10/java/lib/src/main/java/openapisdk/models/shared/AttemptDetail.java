package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttemptDetail
 * An object representing a job attempt.
**/
public class AttemptDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container")
    public AttemptContainerDetail container;
    public AttemptDetail withContainer(AttemptContainerDetail container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startedAt")
    public Long startedAt;
    public AttemptDetail withStartedAt(Long startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusReason")
    public String statusReason;
    public AttemptDetail withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stoppedAt")
    public Long stoppedAt;
    public AttemptDetail withStoppedAt(Long stoppedAt) {
        this.stoppedAt = stoppedAt;
        return this;
    }
}