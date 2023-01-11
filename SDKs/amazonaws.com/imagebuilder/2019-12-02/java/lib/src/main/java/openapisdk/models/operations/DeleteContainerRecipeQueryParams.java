package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteContainerRecipeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=containerRecipeArn")
    public String containerRecipeArn;
    public DeleteContainerRecipeQueryParams withContainerRecipeArn(String containerRecipeArn) {
        this.containerRecipeArn = containerRecipeArn;
        return this;
    }
}