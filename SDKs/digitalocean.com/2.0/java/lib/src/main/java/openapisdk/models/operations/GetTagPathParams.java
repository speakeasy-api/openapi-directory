package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_id")
    public String tagId;
    public GetTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}