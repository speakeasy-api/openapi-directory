package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImagePipelineQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=imagePipelineArn")
    public String imagePipelineArn;
    public DeleteImagePipelineQueryParams withImagePipelineArn(String imagePipelineArn) {
        this.imagePipelineArn = imagePipelineArn;
        return this;
    }
}