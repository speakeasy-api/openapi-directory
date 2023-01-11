package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPipelinesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marker")
    public String marker;
    public ListPipelinesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}