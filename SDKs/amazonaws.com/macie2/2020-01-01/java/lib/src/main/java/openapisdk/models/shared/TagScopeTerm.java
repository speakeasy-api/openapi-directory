package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagScopeTerm
 * Specifies a tag-based condition that determines whether an S3 object is included or excluded from a classification job.
**/
public class TagScopeTerm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparator")
    public JobComparatorEnum comparator;
    public TagScopeTerm withComparator(JobComparatorEnum comparator) {
        this.comparator = comparator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public TagScopeTerm withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagValues")
    public TagValuePair[] tagValues;
    public TagScopeTerm withTagValues(TagValuePair[] tagValues) {
        this.tagValues = tagValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public TagTargetEnum target;
    public TagScopeTerm withTarget(TagTargetEnum target) {
        this.target = target;
        return this;
    }
}