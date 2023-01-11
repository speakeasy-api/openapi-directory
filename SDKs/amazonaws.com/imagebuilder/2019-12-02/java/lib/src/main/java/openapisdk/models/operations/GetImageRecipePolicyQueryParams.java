package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImageRecipePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=imageRecipeArn")
    public String imageRecipeArn;
    public GetImageRecipePolicyQueryParams withImageRecipeArn(String imageRecipeArn) {
        this.imageRecipeArn = imageRecipeArn;
        return this;
    }
}