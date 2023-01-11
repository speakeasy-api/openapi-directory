package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportMetadataForReportTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=report_type")
    public String reportType;
    public GetReportMetadataForReportTypePathParams withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
}