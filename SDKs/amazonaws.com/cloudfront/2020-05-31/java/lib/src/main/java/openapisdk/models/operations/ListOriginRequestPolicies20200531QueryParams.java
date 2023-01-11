package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOriginRequestPolicies20200531QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListOriginRequestPolicies20200531QueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public ListOriginRequestPolicies20200531QueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Type")
    public ListOriginRequestPolicies20200531TypeEnum type;
    public ListOriginRequestPolicies20200531QueryParams withType(ListOriginRequestPolicies20200531TypeEnum type) {
        this.type = type;
        return this;
    }
}