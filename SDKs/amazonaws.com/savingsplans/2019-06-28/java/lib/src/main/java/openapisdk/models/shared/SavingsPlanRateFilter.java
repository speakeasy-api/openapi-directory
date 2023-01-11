package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SavingsPlanRateFilter
 * Information about a filter.
**/
public class SavingsPlanRateFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public SavingsPlanRateFilterNameEnum name;
    public SavingsPlanRateFilter withName(SavingsPlanRateFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public SavingsPlanRateFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}