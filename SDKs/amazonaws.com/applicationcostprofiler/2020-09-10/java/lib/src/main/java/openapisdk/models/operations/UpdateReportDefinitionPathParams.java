package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateReportDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportId")
    public String reportId;
    public UpdateReportDefinitionPathParams withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}