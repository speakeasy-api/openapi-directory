package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetContextKeysForPrincipalPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetContextKeysForPrincipalPolicyActionEnum action;
    public GetGetContextKeysForPrincipalPolicyQueryParams withAction(GetGetContextKeysForPrincipalPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyInputList")
    public String[] policyInputList;
    public GetGetContextKeysForPrincipalPolicyQueryParams withPolicyInputList(String[] policyInputList) {
        this.policyInputList = policyInputList;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicySourceArn")
    public String policySourceArn;
    public GetGetContextKeysForPrincipalPolicyQueryParams withPolicySourceArn(String policySourceArn) {
        this.policySourceArn = policySourceArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetContextKeysForPrincipalPolicyVersionEnum version;
    public GetGetContextKeysForPrincipalPolicyQueryParams withVersion(GetGetContextKeysForPrincipalPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}