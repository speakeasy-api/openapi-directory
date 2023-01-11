package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogChangeCustomColumnUserNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=columnId")
    public String columnId;
    public CatalogChangeCustomColumnUserNamePathParams withColumnId(String columnId) {
        this.columnId = columnId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public CatalogChangeCustomColumnUserNamePathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}