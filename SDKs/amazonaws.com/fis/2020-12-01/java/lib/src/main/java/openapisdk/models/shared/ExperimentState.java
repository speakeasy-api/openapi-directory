package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExperimentState
 * Describes the state of an experiment.
**/
public class ExperimentState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public ExperimentState withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ExperimentStatusEnum status;
    public ExperimentState withStatus(ExperimentStatusEnum status) {
        this.status = status;
        return this;
    }
}