package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogGetProductsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public CatalogGetProductsPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}