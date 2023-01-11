package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFoodIngredientSearchPhpQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=find")
    public String find;
    public GetFoodIngredientSearchPhpQueryParams withFind(String find) {
        this.find = find;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetFoodIngredientSearchPhpQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}