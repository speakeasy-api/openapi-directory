package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_gid")
    public String tagGid;
    public GetTagPathParams withTagGid(String tagGid) {
        this.tagGid = tagGid;
        return this;
    }
}