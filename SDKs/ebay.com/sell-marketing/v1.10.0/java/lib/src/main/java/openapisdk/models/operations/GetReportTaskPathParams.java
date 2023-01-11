package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=report_task_id")
    public String reportTaskId;
    public GetReportTaskPathParams withReportTaskId(String reportTaskId) {
        this.reportTaskId = reportTaskId;
        return this;
    }
}