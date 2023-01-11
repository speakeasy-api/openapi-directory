package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchLocationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchLocationPathParams withId(String id) {
        this.id = id;
        return this;
    }
}