package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetectMitigationActionsTaskStatistics
 *  The statistics of a mitigation action task. 
**/
public class DetectMitigationActionsTaskStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionsExecuted")
    public Long actionsExecuted;
    public DetectMitigationActionsTaskStatistics withActionsExecuted(Long actionsExecuted) {
        this.actionsExecuted = actionsExecuted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionsFailed")
    public Long actionsFailed;
    public DetectMitigationActionsTaskStatistics withActionsFailed(Long actionsFailed) {
        this.actionsFailed = actionsFailed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionsSkipped")
    public Long actionsSkipped;
    public DetectMitigationActionsTaskStatistics withActionsSkipped(Long actionsSkipped) {
        this.actionsSkipped = actionsSkipped;
        return this;
    }
}