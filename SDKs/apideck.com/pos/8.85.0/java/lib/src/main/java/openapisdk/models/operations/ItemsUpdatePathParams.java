package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ItemsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}