package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAliasesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public ListAliasesQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListAliasesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}