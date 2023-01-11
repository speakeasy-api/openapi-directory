package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SaveReportFilterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportFilterId")
    public String reportFilterId;
    public SaveReportFilterPathParams withReportFilterId(String reportFilterId) {
        this.reportFilterId = reportFilterId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public SaveReportFilterPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}