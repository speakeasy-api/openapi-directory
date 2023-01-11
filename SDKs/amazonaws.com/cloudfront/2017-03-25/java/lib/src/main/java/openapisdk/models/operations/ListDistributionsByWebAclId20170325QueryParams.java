package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDistributionsByWebAclId20170325QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListDistributionsByWebAclId20170325QueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public ListDistributionsByWebAclId20170325QueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}