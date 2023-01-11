package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tagId")
    public Long tagId;
    public GetTagPathParams withTagId(Long tagId) {
        this.tagId = tagId;
        return this;
    }
}