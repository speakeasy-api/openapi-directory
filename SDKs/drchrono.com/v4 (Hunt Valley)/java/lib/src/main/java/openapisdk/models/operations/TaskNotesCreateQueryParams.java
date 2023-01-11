package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskNotesCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public TaskNotesCreateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=task")
    public Long task;
    public TaskNotesCreateQueryParams withTask(Long task) {
        this.task = task;
        return this;
    }
}