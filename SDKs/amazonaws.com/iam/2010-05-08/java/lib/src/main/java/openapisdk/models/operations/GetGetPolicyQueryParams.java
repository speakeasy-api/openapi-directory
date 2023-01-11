package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetPolicyActionEnum action;
    public GetGetPolicyQueryParams withAction(GetGetPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyArn")
    public String policyArn;
    public GetGetPolicyQueryParams withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetPolicyVersionEnum version;
    public GetGetPolicyQueryParams withVersion(GetGetPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}