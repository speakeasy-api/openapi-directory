package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BrandedFoodObjectItemsServing
 * An object containing serving information for this item
**/
public class BrandedFoodObjectItemsServing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurement_unit")
    public String measurementUnit;
    public BrandedFoodObjectItemsServing withMeasurementUnit(String measurementUnit) {
        this.measurementUnit = measurementUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public BrandedFoodObjectItemsServing withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size_fulltext")
    public String sizeFulltext;
    public BrandedFoodObjectItemsServing withSizeFulltext(String sizeFulltext) {
        this.sizeFulltext = sizeFulltext;
        return this;
    }
}