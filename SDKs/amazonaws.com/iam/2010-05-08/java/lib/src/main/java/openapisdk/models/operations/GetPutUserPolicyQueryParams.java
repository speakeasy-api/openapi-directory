package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPutUserPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPutUserPolicyActionEnum action;
    public GetPutUserPolicyQueryParams withAction(GetPutUserPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyDocument")
    public String policyDocument;
    public GetPutUserPolicyQueryParams withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyName")
    public String policyName;
    public GetPutUserPolicyQueryParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetPutUserPolicyQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPutUserPolicyVersionEnum version;
    public GetPutUserPolicyQueryParams withVersion(GetPutUserPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}