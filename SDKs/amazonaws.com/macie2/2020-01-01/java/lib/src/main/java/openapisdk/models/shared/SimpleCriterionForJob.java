package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SimpleCriterionForJob
 * Specifies a property-based condition that determines whether an S3 bucket is included or excluded from a classification job.
**/
public class SimpleCriterionForJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparator")
    public JobComparatorEnum comparator;
    public SimpleCriterionForJob withComparator(JobComparatorEnum comparator) {
        this.comparator = comparator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public SimpleCriterionKeyForJobEnum key;
    public SimpleCriterionForJob withKey(SimpleCriterionKeyForJobEnum key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public SimpleCriterionForJob withValues(String[] values) {
        this.values = values;
        return this;
    }
}