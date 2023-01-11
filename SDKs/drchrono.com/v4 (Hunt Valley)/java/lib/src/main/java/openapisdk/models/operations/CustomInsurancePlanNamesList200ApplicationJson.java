package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomInsurancePlanNamesList200ApplicationJson
 * Paginated Result
**/
public class CustomInsurancePlanNamesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.CustomInsurancePlanName[] data;
    public CustomInsurancePlanNamesList200ApplicationJson withData(openapisdk.models.shared.CustomInsurancePlanName[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public CustomInsurancePlanNamesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public CustomInsurancePlanNamesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}