package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreatePolicyVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreatePolicyVersionActionEnum action;
    public GetCreatePolicyVersionQueryParams withAction(GetCreatePolicyVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyArn")
    public String policyArn;
    public GetCreatePolicyVersionQueryParams withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyDocument")
    public String policyDocument;
    public GetCreatePolicyVersionQueryParams withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SetAsDefault")
    public Boolean setAsDefault;
    public GetCreatePolicyVersionQueryParams withSetAsDefault(Boolean setAsDefault) {
        this.setAsDefault = setAsDefault;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreatePolicyVersionVersionEnum version;
    public GetCreatePolicyVersionQueryParams withVersion(GetCreatePolicyVersionVersionEnum version) {
        this.version = version;
        return this;
    }
}