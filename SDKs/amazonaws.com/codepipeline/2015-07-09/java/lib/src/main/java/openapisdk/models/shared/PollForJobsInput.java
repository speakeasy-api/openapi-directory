package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PollForJobsInput
 * Represents the input of a <code>PollForJobs</code> action.
**/
public class PollForJobsInput {
    @JsonProperty("actionTypeId")
    public ActionTypeId actionTypeId;
    public PollForJobsInput withActionTypeId(ActionTypeId actionTypeId) {
        this.actionTypeId = actionTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxBatchSize")
    public Long maxBatchSize;
    public PollForJobsInput withMaxBatchSize(Long maxBatchSize) {
        this.maxBatchSize = maxBatchSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryParam")
    public java.util.Map<String, String> queryParam;
    public PollForJobsInput withQueryParam(java.util.Map<String, String> queryParam) {
        this.queryParam = queryParam;
        return this;
    }
}