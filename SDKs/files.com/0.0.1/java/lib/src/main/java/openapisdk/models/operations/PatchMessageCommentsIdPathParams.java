package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchMessageCommentsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PatchMessageCommentsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}