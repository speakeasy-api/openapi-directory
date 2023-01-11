package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource-arn")
    public String resourceArn;
    public GetTagsPathParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}