package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDistributionsByOriginRequestPolicyId20200531QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListDistributionsByOriginRequestPolicyId20200531QueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public ListDistributionsByOriginRequestPolicyId20200531QueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}