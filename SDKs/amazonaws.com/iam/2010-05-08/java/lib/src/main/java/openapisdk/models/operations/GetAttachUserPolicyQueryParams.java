package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttachUserPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAttachUserPolicyActionEnum action;
    public GetAttachUserPolicyQueryParams withAction(GetAttachUserPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyArn")
    public String policyArn;
    public GetAttachUserPolicyQueryParams withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetAttachUserPolicyQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAttachUserPolicyVersionEnum version;
    public GetAttachUserPolicyQueryParams withVersion(GetAttachUserPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}