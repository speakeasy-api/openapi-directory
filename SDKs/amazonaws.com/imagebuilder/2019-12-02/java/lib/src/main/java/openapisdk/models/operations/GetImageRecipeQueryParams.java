package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImageRecipeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=imageRecipeArn")
    public String imageRecipeArn;
    public GetImageRecipeQueryParams withImageRecipeArn(String imageRecipeArn) {
        this.imageRecipeArn = imageRecipeArn;
        return this;
    }
}