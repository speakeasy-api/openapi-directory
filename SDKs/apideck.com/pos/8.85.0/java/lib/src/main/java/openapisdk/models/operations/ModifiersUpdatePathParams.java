package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifiersUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ModifiersUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}