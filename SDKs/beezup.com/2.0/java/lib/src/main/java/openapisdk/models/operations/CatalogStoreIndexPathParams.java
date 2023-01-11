package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogStoreIndexPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public CatalogStoreIndexPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}