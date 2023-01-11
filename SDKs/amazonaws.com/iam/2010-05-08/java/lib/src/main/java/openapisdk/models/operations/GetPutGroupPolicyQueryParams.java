package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPutGroupPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPutGroupPolicyActionEnum action;
    public GetPutGroupPolicyQueryParams withAction(GetPutGroupPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupName")
    public String groupName;
    public GetPutGroupPolicyQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyDocument")
    public String policyDocument;
    public GetPutGroupPolicyQueryParams withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyName")
    public String policyName;
    public GetPutGroupPolicyQueryParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPutGroupPolicyVersionEnum version;
    public GetPutGroupPolicyQueryParams withVersion(GetPutGroupPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}