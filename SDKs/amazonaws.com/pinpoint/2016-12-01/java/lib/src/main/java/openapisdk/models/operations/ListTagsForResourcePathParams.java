package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsForResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource-arn")
    public String resourceArn;
    public ListTagsForResourcePathParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}