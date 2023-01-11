package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationConfigureRemainingCatalogColumnsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ImportationConfigureRemainingCatalogColumnsPathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public ImportationConfigureRemainingCatalogColumnsPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}