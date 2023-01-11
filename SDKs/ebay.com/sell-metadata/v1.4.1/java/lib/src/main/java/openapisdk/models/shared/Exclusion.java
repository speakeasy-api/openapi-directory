package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Exclusion
 * This type returns a list of properties (and their associated values) that are excluded from requiring an ePID value (from the eBay Catalog) for items that are listed in the associated category.
**/
public class Exclusion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brands")
    public String[] brands;
    public Exclusion withBrands(String[] brands) {
        this.brands = brands;
        return this;
    }
}