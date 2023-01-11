package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_id")
    public String tagId;
    public UntagResourcePathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}