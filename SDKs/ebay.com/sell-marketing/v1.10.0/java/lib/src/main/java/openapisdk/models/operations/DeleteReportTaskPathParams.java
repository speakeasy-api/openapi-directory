package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReportTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=report_task_id")
    public String reportTaskId;
    public DeleteReportTaskPathParams withReportTaskId(String reportTaskId) {
        this.reportTaskId = reportTaskId;
        return this;
    }
}