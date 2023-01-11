package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportId")
    public String reportId;
    public GetReportDefinitionPathParams withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}