package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QueryObjectsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public QueryObjectsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marker")
    public String marker;
    public QueryObjectsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}