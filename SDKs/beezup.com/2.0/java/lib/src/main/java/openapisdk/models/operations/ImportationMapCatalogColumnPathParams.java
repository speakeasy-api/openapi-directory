package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationMapCatalogColumnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=columnId")
    public String columnId;
    public ImportationMapCatalogColumnPathParams withColumnId(String columnId) {
        this.columnId = columnId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ImportationMapCatalogColumnPathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public ImportationMapCatalogColumnPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}