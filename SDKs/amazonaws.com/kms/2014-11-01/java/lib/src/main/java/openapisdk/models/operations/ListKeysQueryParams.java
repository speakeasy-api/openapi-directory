package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListKeysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public ListKeysQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListKeysQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}