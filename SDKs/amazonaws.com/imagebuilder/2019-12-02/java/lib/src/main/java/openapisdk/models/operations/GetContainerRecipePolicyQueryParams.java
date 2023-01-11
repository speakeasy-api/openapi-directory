package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContainerRecipePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=containerRecipeArn")
    public String containerRecipeArn;
    public GetContainerRecipePolicyQueryParams withContainerRecipeArn(String containerRecipeArn) {
        this.containerRecipeArn = containerRecipeArn;
        return this;
    }
}