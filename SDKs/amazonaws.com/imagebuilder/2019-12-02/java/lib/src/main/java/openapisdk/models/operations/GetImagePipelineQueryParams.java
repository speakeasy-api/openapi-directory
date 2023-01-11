package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagePipelineQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=imagePipelineArn")
    public String imagePipelineArn;
    public GetImagePipelineQueryParams withImagePipelineArn(String imagePipelineArn) {
        this.imagePipelineArn = imagePipelineArn;
        return this;
    }
}