package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationGetReportingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public ImportationGetReportingsPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}