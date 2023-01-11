package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeObjectsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marker")
    public String marker;
    public DescribeObjectsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}