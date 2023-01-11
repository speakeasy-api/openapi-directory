package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationMapCustomColumnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=columnId")
    public String columnId;
    public ImportationMapCustomColumnPathParams withColumnId(String columnId) {
        this.columnId = columnId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ImportationMapCustomColumnPathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public ImportationMapCustomColumnPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}