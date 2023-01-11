package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogChangeCatalogColumnUserNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=columnId")
    public String columnId;
    public CatalogChangeCatalogColumnUserNamePathParams withColumnId(String columnId) {
        this.columnId = columnId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public CatalogChangeCatalogColumnUserNamePathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}