package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceArn")
    public String resourceArn;
    public UntagResourceQueryParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}