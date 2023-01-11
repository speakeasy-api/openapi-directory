package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifierGroupsOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ModifierGroupsOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}