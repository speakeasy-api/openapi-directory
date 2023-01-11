package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFoodBrandedSearchPhpQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allergen")
    public String allergen;
    public GetFoodBrandedSearchPhpQueryParams withAllergen(String allergen) {
        this.allergen = allergen;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brand")
    public String brand;
    public GetFoodBrandedSearchPhpQueryParams withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String category;
    public GetFoodBrandedSearchPhpQueryParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetFoodBrandedSearchPhpQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=diet")
    public GetFoodBrandedSearchPhpDietEnum diet;
    public GetFoodBrandedSearchPhpQueryParams withDiet(GetFoodBrandedSearchPhpDietEnum diet) {
        this.diet = diet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ingredient")
    public String ingredient;
    public GetFoodBrandedSearchPhpQueryParams withIngredient(String ingredient) {
        this.ingredient = ingredient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyword")
    public String keyword;
    public GetFoodBrandedSearchPhpQueryParams withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetFoodBrandedSearchPhpQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mineral")
    public String mineral;
    public GetFoodBrandedSearchPhpQueryParams withMineral(String mineral) {
        this.mineral = mineral;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nutrient")
    public String nutrient;
    public GetFoodBrandedSearchPhpQueryParams withNutrient(String nutrient) {
        this.nutrient = nutrient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetFoodBrandedSearchPhpQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=palm_oil")
    public String palmOil;
    public GetFoodBrandedSearchPhpQueryParams withPalmOil(String palmOil) {
        this.palmOil = palmOil;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trace")
    public String trace;
    public GetFoodBrandedSearchPhpQueryParams withTrace(String trace) {
        this.trace = trace;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vitamin")
    public String vitamin;
    public GetFoodBrandedSearchPhpQueryParams withVitamin(String vitamin) {
        this.vitamin = vitamin;
        return this;
    }
}