package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListJobsFilterTerm
 * Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values.
**/
public class ListJobsFilterTerm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparator")
    public JobComparatorEnum comparator;
    public ListJobsFilterTerm withComparator(JobComparatorEnum comparator) {
        this.comparator = comparator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public ListJobsFilterKeyEnum key;
    public ListJobsFilterTerm withKey(ListJobsFilterKeyEnum key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public ListJobsFilterTerm withValues(String[] values) {
        this.values = values;
        return this;
    }
}