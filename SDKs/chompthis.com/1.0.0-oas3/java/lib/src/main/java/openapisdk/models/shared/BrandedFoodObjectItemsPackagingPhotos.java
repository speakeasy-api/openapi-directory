package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BrandedFoodObjectItemsPackagingPhotos
 * A object containing a collection of photos of this item's packaging
**/
public class BrandedFoodObjectItemsPackagingPhotos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("front")
    public BrandedFoodObjectItemsPackagingPhotosFront front;
    public BrandedFoodObjectItemsPackagingPhotos withFront(BrandedFoodObjectItemsPackagingPhotosFront front) {
        this.front = front;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingredients")
    public BrandedFoodObjectItemsPackagingPhotosIngredients ingredients;
    public BrandedFoodObjectItemsPackagingPhotos withIngredients(BrandedFoodObjectItemsPackagingPhotosIngredients ingredients) {
        this.ingredients = ingredients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nutrition")
    public BrandedFoodObjectItemsPackagingPhotosNutrition nutrition;
    public BrandedFoodObjectItemsPackagingPhotos withNutrition(BrandedFoodObjectItemsPackagingPhotosNutrition nutrition) {
        this.nutrition = nutrition;
        return this;
    }
}