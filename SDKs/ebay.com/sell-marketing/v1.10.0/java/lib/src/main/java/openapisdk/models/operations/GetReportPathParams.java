package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=report_id")
    public String reportId;
    public GetReportPathParams withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}