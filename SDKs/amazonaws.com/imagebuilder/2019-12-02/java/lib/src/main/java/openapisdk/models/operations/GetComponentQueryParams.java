package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetComponentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=componentBuildVersionArn")
    public String componentBuildVersionArn;
    public GetComponentQueryParams withComponentBuildVersionArn(String componentBuildVersionArn) {
        this.componentBuildVersionArn = componentBuildVersionArn;
        return this;
    }
}