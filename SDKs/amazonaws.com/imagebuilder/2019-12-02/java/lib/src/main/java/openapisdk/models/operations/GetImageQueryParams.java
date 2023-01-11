package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=imageBuildVersionArn")
    public String imageBuildVersionArn;
    public GetImageQueryParams withImageBuildVersionArn(String imageBuildVersionArn) {
        this.imageBuildVersionArn = imageBuildVersionArn;
        return this;
    }
}