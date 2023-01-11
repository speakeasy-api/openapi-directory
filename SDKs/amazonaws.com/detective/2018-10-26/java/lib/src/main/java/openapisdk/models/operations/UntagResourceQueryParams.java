package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagKeys")
    public String[] tagKeys;
    public UntagResourceQueryParams withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}