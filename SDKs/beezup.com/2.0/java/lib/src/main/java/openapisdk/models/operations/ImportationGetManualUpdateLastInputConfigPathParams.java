package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationGetManualUpdateLastInputConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public ImportationGetManualUpdateLastInputConfigPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}