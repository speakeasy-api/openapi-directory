package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchGroupsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PatchGroupsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}