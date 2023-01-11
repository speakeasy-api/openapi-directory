package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFoodBrandedNamePhpQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetFoodBrandedNamePhpQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetFoodBrandedNamePhpQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetFoodBrandedNamePhpQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
}