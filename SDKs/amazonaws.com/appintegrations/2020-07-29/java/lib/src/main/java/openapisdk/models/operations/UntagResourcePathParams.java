package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceArn")
    public String resourceArn;
    public UntagResourcePathParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}