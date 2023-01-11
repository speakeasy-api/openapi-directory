package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifiersOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ModifiersOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}