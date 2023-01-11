package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_id")
    public String tagId;
    public TagResourcePathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}