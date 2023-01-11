package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BrandedFoodObjectItemsPackagingPhotosNutrition
 * An object containing photos of this item's nutrition label
**/
public class BrandedFoodObjectItemsPackagingPhotosNutrition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display")
    public String display;
    public BrandedFoodObjectItemsPackagingPhotosNutrition withDisplay(String display) {
        this.display = display;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("small")
    public String small;
    public BrandedFoodObjectItemsPackagingPhotosNutrition withSmall(String small) {
        this.small = small;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb")
    public String thumb;
    public BrandedFoodObjectItemsPackagingPhotosNutrition withThumb(String thumb) {
        this.thumb = thumb;
        return this;
    }
}