package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskCategoriesReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public TaskCategoriesReadQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}