package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagCriterionForJob
 * Specifies a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job.
**/
public class TagCriterionForJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparator")
    public JobComparatorEnum comparator;
    public TagCriterionForJob withComparator(JobComparatorEnum comparator) {
        this.comparator = comparator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagValues")
    public TagCriterionPairForJob[] tagValues;
    public TagCriterionForJob withTagValues(TagCriterionPairForJob[] tagValues) {
        this.tagValues = tagValues;
        return this;
    }
}