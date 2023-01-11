package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeletePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeletePolicyActionEnum action;
    public GetDeletePolicyQueryParams withAction(GetDeletePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyArn")
    public String policyArn;
    public GetDeletePolicyQueryParams withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeletePolicyVersionEnum version;
    public GetDeletePolicyQueryParams withVersion(GetDeletePolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}