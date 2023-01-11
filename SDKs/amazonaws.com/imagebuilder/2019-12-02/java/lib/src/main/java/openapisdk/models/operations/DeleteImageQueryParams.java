package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=imageBuildVersionArn")
    public String imageBuildVersionArn;
    public DeleteImageQueryParams withImageBuildVersionArn(String imageBuildVersionArn) {
        this.imageBuildVersionArn = imageBuildVersionArn;
        return this;
    }
}