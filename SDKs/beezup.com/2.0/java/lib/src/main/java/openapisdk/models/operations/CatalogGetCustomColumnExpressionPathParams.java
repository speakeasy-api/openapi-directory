package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogGetCustomColumnExpressionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=columnId")
    public String columnId;
    public CatalogGetCustomColumnExpressionPathParams withColumnId(String columnId) {
        this.columnId = columnId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public CatalogGetCustomColumnExpressionPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}