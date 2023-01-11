package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskStatusesCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public TaskStatusesCreateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}