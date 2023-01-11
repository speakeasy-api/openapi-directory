package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSettingsByTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tagId")
    public Long tagId;
    public GetSettingsByTagPathParams withTagId(Long tagId) {
        this.tagId = tagId;
        return this;
    }
}