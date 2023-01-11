package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteComponentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=componentBuildVersionArn")
    public String componentBuildVersionArn;
    public DeleteComponentQueryParams withComponentBuildVersionArn(String componentBuildVersionArn) {
        this.componentBuildVersionArn = componentBuildVersionArn;
        return this;
    }
}