package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSimulateCustomPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSimulateCustomPolicyActionEnum action;
    public PostSimulateCustomPolicyQueryParams withAction(PostSimulateCustomPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostSimulateCustomPolicyQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostSimulateCustomPolicyQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSimulateCustomPolicyVersionEnum version;
    public PostSimulateCustomPolicyQueryParams withVersion(PostSimulateCustomPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}