package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskCategoriesPartialUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public TaskCategoriesPartialUpdateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}