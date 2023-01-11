package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationGetDetectedCatalogColumnsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ImportationGetDetectedCatalogColumnsPathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public ImportationGetDetectedCatalogColumnsPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}