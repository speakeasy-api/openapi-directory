package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFactRandomQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String category;
    public GetFactRandomQueryParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subcategory")
    public String subcategory;
    public GetFactRandomQueryParams withSubcategory(String subcategory) {
        this.subcategory = subcategory;
        return this;
    }
}