package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReportFilterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportFilterId")
    public String reportFilterId;
    public DeleteReportFilterPathParams withReportFilterId(String reportFilterId) {
        this.reportFilterId = reportFilterId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public DeleteReportFilterPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}