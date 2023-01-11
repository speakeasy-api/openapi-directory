package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CriteriaBlockForJob
 * Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job.
**/
public class CriteriaBlockForJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("and")
    public CriteriaForJob[] and;
    public CriteriaBlockForJob withAnd(CriteriaForJob[] and) {
        this.and = and;
        return this;
    }
}