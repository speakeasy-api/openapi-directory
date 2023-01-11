package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchDriverPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchDriverPathParams withId(String id) {
        this.id = id;
        return this;
    }
}