package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tagId")
    public Long tagId;
    public DeleteTagPathParams withTagId(Long tagId) {
        this.tagId = tagId;
        return this;
    }
}