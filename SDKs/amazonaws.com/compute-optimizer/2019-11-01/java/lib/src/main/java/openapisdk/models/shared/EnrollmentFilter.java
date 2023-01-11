package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnrollmentFilter
 * Describes a filter that returns a more specific list of account enrollment statuses. Use this filter with the <a>GetEnrollmentStatusesForOrganization</a> action.
**/
public class EnrollmentFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public EnrollmentFilterNameEnum name;
    public EnrollmentFilter withName(EnrollmentFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public EnrollmentFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}