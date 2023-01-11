package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SimpleScopeTerm
 * Specifies a property-based condition that determines whether an S3 object is included or excluded from a classification job.
**/
public class SimpleScopeTerm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparator")
    public JobComparatorEnum comparator;
    public SimpleScopeTerm withComparator(JobComparatorEnum comparator) {
        this.comparator = comparator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public ScopeFilterKeyEnum key;
    public SimpleScopeTerm withKey(ScopeFilterKeyEnum key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public SimpleScopeTerm withValues(String[] values) {
        this.values = values;
        return this;
    }
}