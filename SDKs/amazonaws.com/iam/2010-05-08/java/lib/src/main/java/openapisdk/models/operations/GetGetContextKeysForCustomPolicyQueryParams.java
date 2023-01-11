package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetContextKeysForCustomPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetContextKeysForCustomPolicyActionEnum action;
    public GetGetContextKeysForCustomPolicyQueryParams withAction(GetGetContextKeysForCustomPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyInputList")
    public String[] policyInputList;
    public GetGetContextKeysForCustomPolicyQueryParams withPolicyInputList(String[] policyInputList) {
        this.policyInputList = policyInputList;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetContextKeysForCustomPolicyVersionEnum version;
    public GetGetContextKeysForCustomPolicyQueryParams withVersion(GetGetContextKeysForCustomPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}