package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PollForThirdPartyJobsInput
 * Represents the input of a <code>PollForThirdPartyJobs</code> action.
**/
public class PollForThirdPartyJobsInput {
    @JsonProperty("actionTypeId")
    public ActionTypeId actionTypeId;
    public PollForThirdPartyJobsInput withActionTypeId(ActionTypeId actionTypeId) {
        this.actionTypeId = actionTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxBatchSize")
    public Long maxBatchSize;
    public PollForThirdPartyJobsInput withMaxBatchSize(Long maxBatchSize) {
        this.maxBatchSize = maxBatchSize;
        return this;
    }
}