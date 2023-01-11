package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BrandedFoodObject
 * Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
**/
public class BrandedFoodObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public BrandedFoodObjectItems[] items;
    public BrandedFoodObject withItems(BrandedFoodObjectItems[] items) {
        this.items = items;
        return this;
    }
}