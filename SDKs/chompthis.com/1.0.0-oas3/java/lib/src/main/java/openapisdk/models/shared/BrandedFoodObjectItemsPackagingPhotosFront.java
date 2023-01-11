package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BrandedFoodObjectItemsPackagingPhotosFront
 * An object containing photos of the front of this item's packaging
**/
public class BrandedFoodObjectItemsPackagingPhotosFront {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display")
    public String display;
    public BrandedFoodObjectItemsPackagingPhotosFront withDisplay(String display) {
        this.display = display;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("small")
    public String small;
    public BrandedFoodObjectItemsPackagingPhotosFront withSmall(String small) {
        this.small = small;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb")
    public String thumb;
    public BrandedFoodObjectItemsPackagingPhotosFront withThumb(String thumb) {
        this.thumb = thumb;
        return this;
    }
}