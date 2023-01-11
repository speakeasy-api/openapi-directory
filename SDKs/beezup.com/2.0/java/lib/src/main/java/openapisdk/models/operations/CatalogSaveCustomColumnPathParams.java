package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogSaveCustomColumnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=columnId")
    public String columnId;
    public CatalogSaveCustomColumnPathParams withColumnId(String columnId) {
        this.columnId = columnId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public CatalogSaveCustomColumnPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}