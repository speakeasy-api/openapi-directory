package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomEventsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public CustomEventsListQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
}