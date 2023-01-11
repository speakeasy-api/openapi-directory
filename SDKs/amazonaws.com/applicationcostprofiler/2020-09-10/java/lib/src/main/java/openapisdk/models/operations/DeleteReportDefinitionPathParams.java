package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReportDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportId")
    public String reportId;
    public DeleteReportDefinitionPathParams withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}