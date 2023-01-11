package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskCategoriesCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public TaskCategoriesCreateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}