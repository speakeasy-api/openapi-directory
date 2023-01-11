package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStreamingDistributions20171030QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListStreamingDistributions20171030QueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public ListStreamingDistributions20171030QueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}