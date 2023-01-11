package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BrandedFoodObjectItems
 * An object containing information for this specific item.
**/
public class BrandedFoodObjectItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allergens")
    public String[] allergens;
    public BrandedFoodObjectItems withAllergens(String[] allergens) {
        this.allergens = allergens;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barcode")
    public String barcode;
    public BrandedFoodObjectItems withBarcode(String barcode) {
        this.barcode = barcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;
    public BrandedFoodObjectItems withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand_list")
    public String[] brandList;
    public BrandedFoodObjectItems withBrandList(String[] brandList) {
        this.brandList = brandList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public String[] categories;
    public BrandedFoodObjectItems withCategories(String[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countries")
    public String[] countries;
    public BrandedFoodObjectItems withCountries(String[] countries) {
        this.countries = countries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_details")
    public BrandedFoodObjectItemsCountryDetails countryDetails;
    public BrandedFoodObjectItems withCountryDetails(BrandedFoodObjectItemsCountryDetails countryDetails) {
        this.countryDetails = countryDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BrandedFoodObjectItems withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diet_flags")
    public BrandedFoodObjectItemsDietFlags[] dietFlags;
    public BrandedFoodObjectItems withDietFlags(BrandedFoodObjectItemsDietFlags[] dietFlags) {
        this.dietFlags = dietFlags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diet_labels")
    public BrandedFoodObjectItemsDietLabels dietLabels;
    public BrandedFoodObjectItems withDietLabels(BrandedFoodObjectItemsDietLabels dietLabels) {
        this.dietLabels = dietLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_english_ingredients")
    public Boolean hasEnglishIngredients;
    public BrandedFoodObjectItems withHasEnglishIngredients(Boolean hasEnglishIngredients) {
        this.hasEnglishIngredients = hasEnglishIngredients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingredient_list")
    public String[] ingredientList;
    public BrandedFoodObjectItems withIngredientList(String[] ingredientList) {
        this.ingredientList = ingredientList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingredients")
    public String ingredients;
    public BrandedFoodObjectItems withIngredients(String ingredients) {
        this.ingredients = ingredients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywords")
    public String[] keywords;
    public BrandedFoodObjectItems withKeywords(String[] keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minerals")
    public String[] minerals;
    public BrandedFoodObjectItems withMinerals(String[] minerals) {
        this.minerals = minerals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BrandedFoodObjectItems withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nutrients")
    public BrandedFoodObjectItemsNutrients[] nutrients;
    public BrandedFoodObjectItems withNutrients(BrandedFoodObjectItemsNutrients[] nutrients) {
        this.nutrients = nutrients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("package")
    public BrandedFoodObjectItemsPackage package_;
    public BrandedFoodObjectItems withPackage(BrandedFoodObjectItemsPackage package_) {
        this.package_ = package_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packaging_photos")
    public BrandedFoodObjectItemsPackagingPhotos packagingPhotos;
    public BrandedFoodObjectItems withPackagingPhotos(BrandedFoodObjectItemsPackagingPhotos packagingPhotos) {
        this.packagingPhotos = packagingPhotos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("palm_oil_ingredients")
    public String[] palmOilIngredients;
    public BrandedFoodObjectItems withPalmOilIngredients(String[] palmOilIngredients) {
        this.palmOilIngredients = palmOilIngredients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serving")
    public BrandedFoodObjectItemsServing serving;
    public BrandedFoodObjectItems withServing(BrandedFoodObjectItemsServing serving) {
        this.serving = serving;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traces")
    public String[] traces;
    public BrandedFoodObjectItems withTraces(String[] traces) {
        this.traces = traces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vitamins")
    public String[] vitamins;
    public BrandedFoodObjectItems withVitamins(String[] vitamins) {
        this.vitamins = vitamins;
        return this;
    }
}