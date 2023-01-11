package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationCommitColumnsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ImportationCommitColumnsPathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public ImportationCommitColumnsPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}