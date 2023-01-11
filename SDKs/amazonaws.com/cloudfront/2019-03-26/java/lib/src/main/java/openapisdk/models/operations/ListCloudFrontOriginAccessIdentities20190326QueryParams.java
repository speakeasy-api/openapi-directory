package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCloudFrontOriginAccessIdentities20190326QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListCloudFrontOriginAccessIdentities20190326QueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public ListCloudFrontOriginAccessIdentities20190326QueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}