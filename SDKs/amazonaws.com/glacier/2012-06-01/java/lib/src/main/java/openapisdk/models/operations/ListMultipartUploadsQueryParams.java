package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMultipartUploadsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public ListMultipartUploadsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marker")
    public String marker;
    public ListMultipartUploadsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}