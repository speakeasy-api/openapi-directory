package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StatusCallApiV1StatusCallGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public StatusCallApiV1StatusCallGetQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}