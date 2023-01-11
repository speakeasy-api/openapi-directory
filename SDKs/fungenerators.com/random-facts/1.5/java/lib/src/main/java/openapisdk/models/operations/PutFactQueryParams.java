package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutFactQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String category;
    public PutFactQueryParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fact")
    public String fact;
    public PutFactQueryParams withFact(String fact) {
        this.fact = fact;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subcategory")
    public String subcategory;
    public PutFactQueryParams withSubcategory(String subcategory) {
        this.subcategory = subcategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String tags;
    public PutFactQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}