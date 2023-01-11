package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVaultsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public ListVaultsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marker")
    public String marker;
    public ListVaultsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}