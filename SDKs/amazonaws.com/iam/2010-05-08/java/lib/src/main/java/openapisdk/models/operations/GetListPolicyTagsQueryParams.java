package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListPolicyTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListPolicyTagsActionEnum action;
    public GetListPolicyTagsQueryParams withAction(GetListPolicyTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListPolicyTagsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListPolicyTagsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyArn")
    public String policyArn;
    public GetListPolicyTagsQueryParams withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListPolicyTagsVersionEnum version;
    public GetListPolicyTagsQueryParams withVersion(GetListPolicyTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}