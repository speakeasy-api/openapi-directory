package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetComponentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recipeOutputFormat")
    public GetComponentRecipeOutputFormatEnum recipeOutputFormat;
    public GetComponentQueryParams withRecipeOutputFormat(GetComponentRecipeOutputFormatEnum recipeOutputFormat) {
        this.recipeOutputFormat = recipeOutputFormat;
        return this;
    }
}