package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobScopingBlock
 * Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job.
**/
public class JobScopingBlock {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("and")
    public JobScopeTerm[] and;
    public JobScopingBlock withAnd(JobScopeTerm[] and) {
        this.and = and;
        return this;
    }
}