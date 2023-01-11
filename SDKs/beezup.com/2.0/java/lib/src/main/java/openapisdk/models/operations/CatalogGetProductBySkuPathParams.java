package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogGetProductBySkuPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public CatalogGetProductBySkuPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}