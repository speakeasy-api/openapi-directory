package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsForResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceArn")
    public String resourceArn;
    public ListTagsForResourceQueryParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}