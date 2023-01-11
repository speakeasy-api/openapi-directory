package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InventoryCategoriesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public InventoryCategoriesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}