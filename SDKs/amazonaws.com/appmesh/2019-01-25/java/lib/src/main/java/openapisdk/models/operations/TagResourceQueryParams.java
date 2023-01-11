package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceArn")
    public String resourceArn;
    public TagResourceQueryParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}