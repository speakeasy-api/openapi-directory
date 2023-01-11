package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AutoGetAutoImportConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public AutoGetAutoImportConfigurationPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}