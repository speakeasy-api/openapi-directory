package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskNotesReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public TaskNotesReadQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=task")
    public Long task;
    public TaskNotesReadQueryParams withTask(Long task) {
        this.task = task;
        return this;
    }
}