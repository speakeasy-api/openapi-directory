package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAs2KeysIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PatchAs2KeysIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}