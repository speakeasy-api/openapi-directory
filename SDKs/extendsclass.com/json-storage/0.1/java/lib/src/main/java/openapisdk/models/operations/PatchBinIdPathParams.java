package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchBinIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchBinIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}