package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IngredientObject
 * Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
**/
public class IngredientObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public IngredientObjectItems[] items;
    public IngredientObject withItems(IngredientObjectItems[] items) {
        this.items = items;
        return this;
    }
}