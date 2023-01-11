package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFactSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String category;
    public GetFactSearchQueryParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetFactSearchQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subcategory")
    public String subcategory;
    public GetFactSearchQueryParams withSubcategory(String subcategory) {
        this.subcategory = subcategory;
        return this;
    }
}