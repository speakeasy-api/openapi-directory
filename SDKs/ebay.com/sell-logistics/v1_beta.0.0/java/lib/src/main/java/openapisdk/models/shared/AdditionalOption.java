package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdditionalOption
 * This complex type contains information about a shipping option that can be purchased in addition to the base shipping cost of a recommended rate. Additional options for each rate are defined, named, and offered by the selected shipping carrier. Examples include shipping insurance or the requirement for a recipient signature.
**/
public class AdditionalOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalCost")
    public Amount additionalCost;
    public AdditionalOption withAdditionalCost(Amount additionalCost) {
        this.additionalCost = additionalCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optionType")
    public String optionType;
    public AdditionalOption withOptionType(String optionType) {
        this.optionType = optionType;
        return this;
    }
}