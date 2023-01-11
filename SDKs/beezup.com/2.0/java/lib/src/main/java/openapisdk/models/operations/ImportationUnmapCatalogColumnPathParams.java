package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationUnmapCatalogColumnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=columnId")
    public String columnId;
    public ImportationUnmapCatalogColumnPathParams withColumnId(String columnId) {
        this.columnId = columnId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ImportationUnmapCatalogColumnPathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public ImportationUnmapCatalogColumnPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}