package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetachUserPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDetachUserPolicyActionEnum action;
    public GetDetachUserPolicyQueryParams withAction(GetDetachUserPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyArn")
    public String policyArn;
    public GetDetachUserPolicyQueryParams withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetDetachUserPolicyQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDetachUserPolicyVersionEnum version;
    public GetDetachUserPolicyQueryParams withVersion(GetDetachUserPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}