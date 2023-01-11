package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteServiceSpecificCredentialQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteServiceSpecificCredentialActionEnum action;
    public GetDeleteServiceSpecificCredentialQueryParams withAction(GetDeleteServiceSpecificCredentialActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServiceSpecificCredentialId")
    public String serviceSpecificCredentialId;
    public GetDeleteServiceSpecificCredentialQueryParams withServiceSpecificCredentialId(String serviceSpecificCredentialId) {
        this.serviceSpecificCredentialId = serviceSpecificCredentialId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetDeleteServiceSpecificCredentialQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteServiceSpecificCredentialVersionEnum version;
    public GetDeleteServiceSpecificCredentialQueryParams withVersion(GetDeleteServiceSpecificCredentialVersionEnum version) {
        this.version = version;
        return this;
    }
}