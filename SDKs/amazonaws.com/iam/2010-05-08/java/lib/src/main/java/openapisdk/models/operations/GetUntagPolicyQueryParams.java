package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUntagPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUntagPolicyActionEnum action;
    public GetUntagPolicyQueryParams withAction(GetUntagPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyArn")
    public String policyArn;
    public GetUntagPolicyQueryParams withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TagKeys")
    public String[] tagKeys;
    public GetUntagPolicyQueryParams withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUntagPolicyVersionEnum version;
    public GetUntagPolicyQueryParams withVersion(GetUntagPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}