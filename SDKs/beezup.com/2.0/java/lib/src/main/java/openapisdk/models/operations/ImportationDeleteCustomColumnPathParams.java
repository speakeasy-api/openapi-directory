package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationDeleteCustomColumnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=columnId")
    public String columnId;
    public ImportationDeleteCustomColumnPathParams withColumnId(String columnId) {
        this.columnId = columnId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ImportationDeleteCustomColumnPathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public ImportationDeleteCustomColumnPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}