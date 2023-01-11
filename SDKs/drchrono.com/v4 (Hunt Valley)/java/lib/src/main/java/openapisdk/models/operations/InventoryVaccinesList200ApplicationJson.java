package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventoryVaccinesList200ApplicationJson
 * Paginated Result
**/
public class InventoryVaccinesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.InventoryVaccine[] data;
    public InventoryVaccinesList200ApplicationJson withData(openapisdk.models.shared.InventoryVaccine[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public InventoryVaccinesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public InventoryVaccinesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}