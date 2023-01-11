package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BrandedFoodObjectItemsPackagingPhotosIngredients
 * An object containing photos of the ingredients on this item's packaging
**/
public class BrandedFoodObjectItemsPackagingPhotosIngredients {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display")
    public String display;
    public BrandedFoodObjectItemsPackagingPhotosIngredients withDisplay(String display) {
        this.display = display;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("small")
    public String small;
    public BrandedFoodObjectItemsPackagingPhotosIngredients withSmall(String small) {
        this.small = small;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb")
    public String thumb;
    public BrandedFoodObjectItemsPackagingPhotosIngredients withThumb(String thumb) {
        this.thumb = thumb;
        return this;
    }
}