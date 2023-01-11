package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifeCycleLastTestInitiated
 * Lifecycle last Test initiated.
**/
public class LifeCycleLastTestInitiated {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiCallDateTime")
    public String apiCallDateTime;
    public LifeCycleLastTestInitiated withApiCallDateTime(String apiCallDateTime) {
        this.apiCallDateTime = apiCallDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobID")
    public String jobID;
    public LifeCycleLastTestInitiated withJobId(String jobID) {
        this.jobID = jobID;
        return this;
    }
}