package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutionProperty
 * An execution property of a job.
**/
public class ExecutionProperty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxConcurrentRuns")
    public Long maxConcurrentRuns;
    public ExecutionProperty withMaxConcurrentRuns(Long maxConcurrentRuns) {
        this.maxConcurrentRuns = maxConcurrentRuns;
        return this;
    }
}