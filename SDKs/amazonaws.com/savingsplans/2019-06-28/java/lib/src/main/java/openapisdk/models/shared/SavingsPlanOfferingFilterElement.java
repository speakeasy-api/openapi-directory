package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SavingsPlanOfferingFilterElement
 * Information about a filter.
**/
public class SavingsPlanOfferingFilterElement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public SavingsPlanOfferingFilterAttributeEnum name;
    public SavingsPlanOfferingFilterElement withName(SavingsPlanOfferingFilterAttributeEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public SavingsPlanOfferingFilterElement withValues(String[] values) {
        this.values = values;
        return this;
    }
}