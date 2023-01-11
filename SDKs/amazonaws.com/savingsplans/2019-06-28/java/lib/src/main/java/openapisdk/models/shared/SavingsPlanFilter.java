package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SavingsPlanFilter
 * Information about a filter.
**/
public class SavingsPlanFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public SavingsPlansFilterNameEnum name;
    public SavingsPlanFilter withName(SavingsPlansFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public SavingsPlanFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}