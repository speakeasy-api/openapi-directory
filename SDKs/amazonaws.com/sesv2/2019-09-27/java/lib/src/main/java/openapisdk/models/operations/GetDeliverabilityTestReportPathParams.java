package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeliverabilityTestReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ReportId")
    public String reportId;
    public GetDeliverabilityTestReportPathParams withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}