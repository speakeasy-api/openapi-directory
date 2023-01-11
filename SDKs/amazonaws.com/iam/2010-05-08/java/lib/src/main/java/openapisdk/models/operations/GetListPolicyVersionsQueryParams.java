package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListPolicyVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListPolicyVersionsActionEnum action;
    public GetListPolicyVersionsQueryParams withAction(GetListPolicyVersionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListPolicyVersionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListPolicyVersionsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyArn")
    public String policyArn;
    public GetListPolicyVersionsQueryParams withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListPolicyVersionsVersionEnum version;
    public GetListPolicyVersionsQueryParams withVersion(GetListPolicyVersionsVersionEnum version) {
        this.version = version;
        return this;
    }
}