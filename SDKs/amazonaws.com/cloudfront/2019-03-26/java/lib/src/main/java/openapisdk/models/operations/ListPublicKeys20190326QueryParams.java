package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPublicKeys20190326QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListPublicKeys20190326QueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public ListPublicKeys20190326QueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}