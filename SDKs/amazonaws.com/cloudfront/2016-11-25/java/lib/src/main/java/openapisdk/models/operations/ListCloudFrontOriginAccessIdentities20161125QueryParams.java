package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCloudFrontOriginAccessIdentities20161125QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListCloudFrontOriginAccessIdentities20161125QueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public ListCloudFrontOriginAccessIdentities20161125QueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}