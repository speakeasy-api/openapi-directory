package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StatusSkuApiV1StatusSkuGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public StatusSkuApiV1StatusSkuGetQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}