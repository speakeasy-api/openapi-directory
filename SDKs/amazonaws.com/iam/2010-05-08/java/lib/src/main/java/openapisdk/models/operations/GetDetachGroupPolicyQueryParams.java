package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetachGroupPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDetachGroupPolicyActionEnum action;
    public GetDetachGroupPolicyQueryParams withAction(GetDetachGroupPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupName")
    public String groupName;
    public GetDetachGroupPolicyQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyArn")
    public String policyArn;
    public GetDetachGroupPolicyQueryParams withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDetachGroupPolicyVersionEnum version;
    public GetDetachGroupPolicyQueryParams withVersion(GetDetachGroupPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}