package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImageRecipeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=imageRecipeArn")
    public String imageRecipeArn;
    public DeleteImageRecipeQueryParams withImageRecipeArn(String imageRecipeArn) {
        this.imageRecipeArn = imageRecipeArn;
        return this;
    }
}