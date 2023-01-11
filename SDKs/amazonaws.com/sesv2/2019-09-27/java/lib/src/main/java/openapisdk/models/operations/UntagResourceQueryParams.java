package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ResourceArn")
    public String resourceArn;
    public UntagResourceQueryParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TagKeys")
    public String[] tagKeys;
    public UntagResourceQueryParams withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}