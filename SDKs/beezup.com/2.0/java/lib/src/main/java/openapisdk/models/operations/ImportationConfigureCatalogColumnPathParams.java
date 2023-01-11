package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationConfigureCatalogColumnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=columnId")
    public String columnId;
    public ImportationConfigureCatalogColumnPathParams withColumnId(String columnId) {
        this.columnId = columnId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ImportationConfigureCatalogColumnPathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public ImportationConfigureCatalogColumnPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}