package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContainerRecipeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=containerRecipeArn")
    public String containerRecipeArn;
    public GetContainerRecipeQueryParams withContainerRecipeArn(String containerRecipeArn) {
        this.containerRecipeArn = containerRecipeArn;
        return this;
    }
}