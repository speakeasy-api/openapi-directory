package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationUnmapCustomColumnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=columnId")
    public String columnId;
    public ImportationUnmapCustomColumnPathParams withColumnId(String columnId) {
        this.columnId = columnId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ImportationUnmapCustomColumnPathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public ImportationUnmapCustomColumnPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}