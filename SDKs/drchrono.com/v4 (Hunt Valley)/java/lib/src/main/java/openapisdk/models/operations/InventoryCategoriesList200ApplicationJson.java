package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventoryCategoriesList200ApplicationJson
 * Paginated Result
**/
public class InventoryCategoriesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.InventoryCategory[] data;
    public InventoryCategoriesList200ApplicationJson withData(openapisdk.models.shared.InventoryCategory[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public InventoryCategoriesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public InventoryCategoriesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}