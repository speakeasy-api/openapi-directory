package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGrantsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public ListGrantsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListGrantsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}