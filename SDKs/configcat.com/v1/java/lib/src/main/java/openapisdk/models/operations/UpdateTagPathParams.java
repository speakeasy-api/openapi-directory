package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tagId")
    public Long tagId;
    public UpdateTagPathParams withTagId(Long tagId) {
        this.tagId = tagId;
        return this;
    }
}