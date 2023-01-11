package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskStatusesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public TaskStatusesUpdateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}