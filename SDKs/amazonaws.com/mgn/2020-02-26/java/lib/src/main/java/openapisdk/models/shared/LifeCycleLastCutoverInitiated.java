package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifeCycleLastCutoverInitiated
 * Lifecycle last Cutover initiated.
**/
public class LifeCycleLastCutoverInitiated {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiCallDateTime")
    public String apiCallDateTime;
    public LifeCycleLastCutoverInitiated withApiCallDateTime(String apiCallDateTime) {
        this.apiCallDateTime = apiCallDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobID")
    public String jobID;
    public LifeCycleLastCutoverInitiated withJobId(String jobID) {
        this.jobID = jobID;
        return this;
    }
}