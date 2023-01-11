package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportFilterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportFilterId")
    public String reportFilterId;
    public GetReportFilterPathParams withReportFilterId(String reportFilterId) {
        this.reportFilterId = reportFilterId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public GetReportFilterPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}