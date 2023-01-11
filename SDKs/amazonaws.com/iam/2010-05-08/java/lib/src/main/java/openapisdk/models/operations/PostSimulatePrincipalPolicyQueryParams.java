package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSimulatePrincipalPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSimulatePrincipalPolicyActionEnum action;
    public PostSimulatePrincipalPolicyQueryParams withAction(PostSimulatePrincipalPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostSimulatePrincipalPolicyQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostSimulatePrincipalPolicyQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSimulatePrincipalPolicyVersionEnum version;
    public PostSimulatePrincipalPolicyQueryParams withVersion(PostSimulatePrincipalPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}