package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifiersDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ModifiersDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}