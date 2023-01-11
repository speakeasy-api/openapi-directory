package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationGetReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ImportationGetReportPathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public ImportationGetReportPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}