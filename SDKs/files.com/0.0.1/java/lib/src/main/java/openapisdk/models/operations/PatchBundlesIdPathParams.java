package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchBundlesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PatchBundlesIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}