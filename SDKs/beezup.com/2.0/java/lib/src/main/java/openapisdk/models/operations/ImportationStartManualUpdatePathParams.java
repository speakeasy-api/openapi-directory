package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationStartManualUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public ImportationStartManualUpdatePathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}