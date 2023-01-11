package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_id")
    public String tagId;
    public DeleteTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}