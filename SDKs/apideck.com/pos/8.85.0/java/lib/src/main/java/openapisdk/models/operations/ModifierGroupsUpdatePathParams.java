package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifierGroupsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ModifierGroupsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}