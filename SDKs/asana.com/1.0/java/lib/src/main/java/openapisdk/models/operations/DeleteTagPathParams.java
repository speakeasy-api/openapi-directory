package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_gid")
    public String tagGid;
    public DeleteTagPathParams withTagGid(String tagGid) {
        this.tagGid = tagGid;
        return this;
    }
}