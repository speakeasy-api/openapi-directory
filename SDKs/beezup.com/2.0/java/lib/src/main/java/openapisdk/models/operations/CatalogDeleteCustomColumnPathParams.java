package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogDeleteCustomColumnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=columnId")
    public String columnId;
    public CatalogDeleteCustomColumnPathParams withColumnId(String columnId) {
        this.columnId = columnId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public CatalogDeleteCustomColumnPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}