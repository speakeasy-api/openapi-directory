package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPublicKeys20181105QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListPublicKeys20181105QueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public ListPublicKeys20181105QueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}