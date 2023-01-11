package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskCategoriesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public TaskCategoriesUpdateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}