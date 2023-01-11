package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAccountHoldersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchAccountHoldersIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}