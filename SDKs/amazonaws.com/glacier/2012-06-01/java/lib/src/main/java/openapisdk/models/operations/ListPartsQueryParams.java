package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPartsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public ListPartsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marker")
    public String marker;
    public ListPartsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}