package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogGetCategoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public CatalogGetCategoriesPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}