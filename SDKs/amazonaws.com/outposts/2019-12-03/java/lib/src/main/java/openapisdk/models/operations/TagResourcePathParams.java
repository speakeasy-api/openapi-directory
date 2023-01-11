package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceArn")
    public String resourceArn;
    public TagResourcePathParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}