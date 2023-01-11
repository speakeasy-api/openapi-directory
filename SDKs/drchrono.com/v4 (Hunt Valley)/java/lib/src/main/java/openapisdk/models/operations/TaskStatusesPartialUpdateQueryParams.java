package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskStatusesPartialUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public TaskStatusesPartialUpdateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}