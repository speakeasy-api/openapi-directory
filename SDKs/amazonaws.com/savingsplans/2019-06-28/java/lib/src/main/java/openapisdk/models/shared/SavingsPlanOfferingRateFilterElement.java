package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SavingsPlanOfferingRateFilterElement
 * Information about a filter.
**/
public class SavingsPlanOfferingRateFilterElement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public SavingsPlanRateFilterAttributeEnum name;
    public SavingsPlanOfferingRateFilterElement withName(SavingsPlanRateFilterAttributeEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public SavingsPlanOfferingRateFilterElement withValues(String[] values) {
        this.values = values;
        return this;
    }
}