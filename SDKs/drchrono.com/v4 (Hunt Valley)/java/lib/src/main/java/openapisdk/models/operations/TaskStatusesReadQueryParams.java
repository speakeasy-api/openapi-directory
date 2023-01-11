package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskStatusesReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public TaskStatusesReadQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}