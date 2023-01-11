package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ItemsDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}