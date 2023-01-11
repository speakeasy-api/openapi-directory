package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_gid")
    public String tagGid;
    public UpdateTagPathParams withTagGid(String tagGid) {
        this.tagGid = tagGid;
        return this;
    }
}