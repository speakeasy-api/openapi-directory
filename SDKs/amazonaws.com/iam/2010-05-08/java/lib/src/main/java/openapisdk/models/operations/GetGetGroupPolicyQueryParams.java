package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetGroupPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetGroupPolicyActionEnum action;
    public GetGetGroupPolicyQueryParams withAction(GetGetGroupPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupName")
    public String groupName;
    public GetGetGroupPolicyQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyName")
    public String policyName;
    public GetGetGroupPolicyQueryParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetGroupPolicyVersionEnum version;
    public GetGetGroupPolicyQueryParams withVersion(GetGetGroupPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}