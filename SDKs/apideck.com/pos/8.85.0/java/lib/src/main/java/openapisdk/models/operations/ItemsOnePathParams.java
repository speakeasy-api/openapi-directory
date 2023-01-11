package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemsOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ItemsOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}