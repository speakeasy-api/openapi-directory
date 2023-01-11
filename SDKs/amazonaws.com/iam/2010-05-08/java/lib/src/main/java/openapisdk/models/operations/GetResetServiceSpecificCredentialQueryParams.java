package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResetServiceSpecificCredentialQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetResetServiceSpecificCredentialActionEnum action;
    public GetResetServiceSpecificCredentialQueryParams withAction(GetResetServiceSpecificCredentialActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServiceSpecificCredentialId")
    public String serviceSpecificCredentialId;
    public GetResetServiceSpecificCredentialQueryParams withServiceSpecificCredentialId(String serviceSpecificCredentialId) {
        this.serviceSpecificCredentialId = serviceSpecificCredentialId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetResetServiceSpecificCredentialQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetResetServiceSpecificCredentialVersionEnum version;
    public GetResetServiceSpecificCredentialQueryParams withVersion(GetResetServiceSpecificCredentialVersionEnum version) {
        this.version = version;
        return this;
    }
}