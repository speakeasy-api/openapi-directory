package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttachGroupPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAttachGroupPolicyActionEnum action;
    public GetAttachGroupPolicyQueryParams withAction(GetAttachGroupPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupName")
    public String groupName;
    public GetAttachGroupPolicyQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyArn")
    public String policyArn;
    public GetAttachGroupPolicyQueryParams withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAttachGroupPolicyVersionEnum version;
    public GetAttachGroupPolicyQueryParams withVersion(GetAttachGroupPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}