package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetReportTasksQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetReportTasksQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_task_statuses")
    public String reportTaskStatuses;
    public GetReportTasksQueryParams withReportTaskStatuses(String reportTaskStatuses) {
        this.reportTaskStatuses = reportTaskStatuses;
        return this;
    }
}